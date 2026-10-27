import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { projects } from "@/data/projects";
import { Badge, Button, Card, Section } from "@/components/ui";
import { Category, Project } from "@/types";

const filters: ("All" | Category)[] = ["All", "Full Stack", "Frontend", "Backend"];

function ProjectMockVisual({ title, category, featured }: { title: string; category: string; featured?: boolean }) {
  return (
    <div className="relative h-full w-full min-h-[180px] sm:min-h-[200px] overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 p-4 sm:p-6 flex flex-col justify-between text-zinc-100 group-hover:scale-[1.01] transition-transform duration-500 min-w-0">
      {/* Decorative gradient blur */}
      <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-accent/25 blur-2xl filter group-hover:bg-accent/40 transition-all duration-500" />
      <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-emerald-500/15 blur-xl filter" />

      {/* Mock Browser Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-3 min-w-0">
        <div className="flex gap-1.5 shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="rounded-md bg-zinc-800/60 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-zinc-400 truncate max-w-[170px] sm:max-w-none">
          https://{title.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 16)}.app
        </span>
      </div>

      {/* Visual Content Placeholder */}
      <div className="relative z-10 my-auto py-3 sm:py-4 text-center min-w-0 px-2">
        <div className="mx-auto mb-2 sm:mb-3 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-zinc-800/80 border border-zinc-700/60 text-accent-dark shadow-inner group-hover:scale-110 transition-transform duration-300">
          {featured ? <Sparkles className="h-5 w-5 sm:h-7 sm:w-7" /> : <Layers className="h-5 w-5 sm:h-7 sm:w-7" />}
        </div>
        <p className="font-display text-base sm:text-xl font-bold tracking-tight text-white line-clamp-1">
          {title}
        </p>
        <span className="mt-0.5 sm:mt-1 inline-block text-[11px] sm:text-xs font-medium text-emerald-400/90 font-mono">
          {category} Architecture
        </span>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-accent-dark">
          Explore Live Preview <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  const featuredProject = filteredProjects.find((p) => p.featured);
  const remainingProjects = filteredProjects.filter((p) => p !== featuredProject);

  return (
    <Section
      id="projects"
      badge="Portfolio"
      title="Featured Projects"
      intro="Production-tested web applications engineered for speed, clean architecture, and conversion."
      alternate={true}
    >
      {/* Category Filter Pills */}
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {filters.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              aria-pressed={isActive}
              className={`relative rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-accent text-white shadow-md shadow-accent/20 dark:bg-accent-dark dark:text-zinc-950"
                  : "border border-zinc-300/80 bg-white/70 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700/80 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div layout className="space-y-8">
        <AnimatePresence mode="popLayout">
          {/* Large Split Featured Card */}
          {featuredProject && (
            <motion.div
              key={featuredProject.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                variant="interactive"
                className="group relative overflow-hidden border-accent/40 bg-white/90 p-6 sm:p-8 dark:border-accent-dark/40 dark:bg-zinc-900/90 shadow-lg shadow-accent/5"
              >
                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  {/* Left 7 cols: Image / Visual Preview */}
                  <div className="lg:col-span-7 h-72 sm:h-96">
                    <ProjectMockVisual
                      title={featuredProject.title}
                      category={featuredProject.category}
                      featured={true}
                    />
                  </div>

                  {/* Right 5 cols: Details */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent dark:border-accent-dark/30 dark:bg-accent-dark/10 dark:text-accent-dark">
                          <Sparkles className="h-3 w-3" />
                          Featured Project
                        </span>
                        <Badge variant="outline">{featuredProject.category}</Badge>
                      </div>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                        {featuredProject.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {featuredProject.description}
                      </p>

                      {featuredProject.metric && (
                        <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent/5 p-2.5 text-xs font-medium text-accent border border-accent/15 dark:bg-accent-dark/5 dark:text-accent-dark dark:border-accent-dark/15">
                          <TrendingUp className="h-4 w-4 shrink-0" />
                          <span>{featuredProject.metric}</span>
                        </div>
                      )}

                      {/* Highlights */}
                      {featuredProject.highlights && (
                        <ul className="mt-4 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                          {featuredProject.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent dark:text-accent-dark" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredProject.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <Button
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button
                        href={featuredProject.github}
                        variant="ghost"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Grid of Remaining Projects */}
          <div className="grid gap-6 md:grid-cols-2">
            {remainingProjects.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <Card
                  variant="interactive"
                  className="group flex flex-col h-full overflow-hidden p-6"
                >
                  {/* Image / Visual Header */}
                  <div className="h-48 w-full overflow-hidden rounded-xl">
                    <ProjectMockVisual title={p.title} category={p.category} />
                  </div>

                  {/* Body Content */}
                  <div className="mt-5 flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                          {p.category}
                        </span>
                        {p.metric && (
                          <span className="flex items-center gap-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                            <TrendingUp className="h-3 w-3 text-emerald-500" />
                            {p.metric}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                        {p.description}
                      </p>

                      {/* Tech badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline dark:text-accent-dark"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      >
                        <FolderGit2 className="h-4 w-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
