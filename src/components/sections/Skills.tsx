import { Cloud, Code2, Database, Layers, Server } from "lucide-react";
import { marqueeTechnologies, skillCategories } from "@/data/skills";
import { Card, Reveal, Section } from "@/components/ui";

const categoryIcons = {
  Code2,
  Server,
  Database,
  Cloud,
  Layers,
};

export default function Skills() {
  // Duplicate marquee items for seamless loop
  const duplicatedTech = [...marqueeTechnologies, ...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <Section
      id="skills"
      badge="Technical Expertise"
      title="Skills & Technologies"
      intro="A comprehensive toolkit built through real-world production engineering, distributed systems, and performance tuning."
      alternate={false}
    >
      {/* Category Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((group, groupIdx) => {
          const IconComp = categoryIcons[group.iconName] || Code2;

          return (
            <Reveal key={group.category} delay={groupIdx * 0.1}>
              <Card
                variant="interactive"
                className="flex flex-col h-full p-4 sm:p-7 min-w-0"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {group.category}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills list with proficiency meters */}
                <div className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {skill.badge && (
                            <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                              {skill.badge}
                            </span>
                          )}
                          <span className="font-mono text-zinc-400 dark:text-zinc-500">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800/80">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400 dark:from-accent-dark dark:to-teal-300 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>

      {/* Infinite Marquee Strip */}
      <div className="mt-16 overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100/50 py-5 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <div className="mb-3 px-6 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Core Production Stack & Tooling
        </div>

        <div className="relative flex w-full overflow-x-hidden mask-fade">
          <div className="flex animate-marquee whitespace-nowrap gap-4 py-2">
            {duplicatedTech.map((tech, idx) => (
              <span
                key={`${tech}-${idx}`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition-transform hover:scale-105 dark:border-zinc-700/80 dark:bg-zinc-800/90 dark:text-zinc-200"
              >
                <span className="h-2 w-2 rounded-full bg-accent dark:bg-accent-dark" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
