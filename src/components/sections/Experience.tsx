import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { certifications, education, experiences } from "@/data/experience";
import { Badge, Card, Reveal, Section } from "@/components/ui";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked animation for vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 85%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section
      id="experience"
      badge="Career Path"
      title="Professional Experience"
      intro="A track record of engineering scalable, user-centric web applications and delivering high-impact business outcomes."
      alternate={false}
    >
      <div ref={containerRef} className="relative mt-12 pb-8">
        {/* Central timeline line background */}
        <div
          className="absolute bottom-0 top-3 w-0.5 bg-zinc-200 left-4 sm:left-6 -translate-x-1/2 md:left-1/2 dark:bg-zinc-800"
          aria-hidden="true"
        />

        {/* Scroll-linked progress line */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute bottom-0 top-3 w-0.5 bg-gradient-to-b from-accent via-accent to-emerald-400 left-4 sm:left-6 -translate-x-1/2 md:left-1/2 dark:from-accent-dark dark:via-accent-dark dark:to-teal-300"
          aria-hidden="true"
        />

        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row items-start min-w-0"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute left-4 sm:left-6 -translate-x-1/2 md:left-1/2 top-4 z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 transition-transform duration-300 ${
                    exp.isCurrent
                      ? "border-accent bg-accent text-white shadow-md shadow-accent/30 dark:border-accent-dark dark:bg-accent-dark dark:text-zinc-950"
                      : "border-zinc-300 bg-white text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  }`}
                >
                  <span className="font-display text-xs sm:text-sm font-bold">
                    {exp.logoInitial || exp.company[0]}
                  </span>
                </div>

                {/* Content Card Container (Alternating left/right on desktop) */}
                <div
                  className={`w-full pl-9 sm:pl-14 md:pl-0 md:w-1/2 min-w-0 ${
                    isEven
                      ? "md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12 md:text-left"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      variant="interactive"
                      className={`relative p-4 sm:p-6 text-left ${
                        exp.isCurrent
                          ? "border-accent/60 bg-white/90 shadow-lg shadow-accent/5 dark:border-accent-dark/60 dark:bg-zinc-900/90"
                          : ""
                      }`}
                    >
                      {/* Top Row: Role, Company, and Current Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold text-accent dark:text-accent-dark">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{exp.type}</Badge>
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Metadata Row: Period, Duration, Location */}
                      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period} · {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Achievement Bullet Points */}
                      <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-accent dark:text-accent-dark" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Badges */}
                      <div className="mt-5 flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Education & Certifications Two-Column Block */}
      <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid gap-8 lg:grid-cols-2 min-w-0">
          {/* Education */}
          <Reveal delay={0.1}>
            <div className="space-y-4 min-w-0">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Education</h3>
              </div>

              <div className="space-y-3">
                {education.map((edu) => (
                  <Card key={edu.degree} variant="default" className="p-4 sm:p-5 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400 shrink-0">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm font-semibold text-accent dark:text-accent-dark">
                      {edu.institution} <span className="text-zinc-400 dark:text-zinc-500 font-normal">· {edu.location}</span>
                    </p>
                    {edu.details && (
                      <p className="mt-2.5 rounded-lg bg-zinc-100/70 p-2.5 text-xs leading-relaxed text-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300">
                        {edu.details}
                      </p>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.2}>
            <div className="space-y-4 min-w-0">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <Card
                    key={cert.name}
                    variant="interactive"
                    className="flex items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 min-w-0"
                  >
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {cert.name}
                      </h4>
                      <p className="mt-0.5 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded-lg p-1.5 sm:p-2 text-zinc-400 hover:text-accent hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-accent-dark transition-colors"
                        aria-label={`View ${cert.name}`}
                      >
                        <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </a>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
