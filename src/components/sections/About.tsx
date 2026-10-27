import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Download,
  GraduationCap,
  Languages,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";
import { Button, Card, CountUp, Reveal, Section } from "@/components/ui";

const factIcons = {
  MapPin,
  Briefcase,
  GraduationCap,
  Languages,
  Sparkles,
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <Section
      id="about"
      badge="About Me"
      title="Engineering with craftsmanship & purpose."
      intro="Bridging the gap between robust architectural systems and fluid, intuitive user interfaces."
      alternate={true}
    >
      <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16 items-start">
        {/* Left Column: Styled Portrait Frame with Floating Badge */}
        <Reveal y={30} className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none px-2 sm:px-0">
          <div className="relative group">
            {/* Background Decorative Accent Offset Frame */}
            <div
              className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-accent/30 via-accent/10 to-transparent blur-md transition-all duration-500 group-hover:-inset-3 group-hover:from-accent/40 dark:from-accent-dark/30 dark:via-accent-dark/10"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-2xl border-2 border-accent/40 bg-accent/5 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-4 sm:group-hover:translate-y-4 dark:border-accent-dark/40 dark:bg-accent-dark/5"
              aria-hidden="true"
            />

            {/* Photo Container with subtle hover tilt */}
            <motion.div
              whileHover={{ rotate: -1, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-zinc-300/80 bg-zinc-200/80 shadow-xl shadow-zinc-900/5 dark:border-zinc-700/80 dark:bg-zinc-800"
            >
              <img
                src={imgError ? "/avatar.svg" : "/profile.jpg"}
                onError={() => setImgError(true)}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5 rounded-xl border border-white/20 bg-zinc-900/85 p-3 text-xs font-medium text-white shadow-lg backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-950/90">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="truncate">{profile.availabilityText}</span>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Right Column: Story, Quick Facts, and CTAs */}
        <div className="space-y-8">
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-300">
              <p>{profile.aboutStory}</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {profile.aboutPhilosophy}
              </p>
            </div>
          </Reveal>

          {/* Quick Facts Grid */}
          <Reveal delay={0.2}>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Quick Facts
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {profile.quickFacts.map((fact) => {
                  const IconComponent = factIcons[fact.iconName] || MapPin;
                  return (
                    <Card
                      key={fact.label}
                      variant="interactive"
                      className="flex items-start gap-3.5 p-3.5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                          {fact.label}
                        </p>
                        <p className="text-sm font-medium text-zinc-800 truncate dark:text-zinc-200">
                          {fact.value}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* What I'm Learning Now Strip */}
          <Reveal delay={0.3}>
            <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-4 dark:border-accent-dark/20 dark:bg-accent-dark/[0.03]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-accent dark:text-accent-dark">
                  <Sparkles className="h-3.5 w-3.5" />
                  What I&apos;m learning right now:
                </span>
                <div className="flex flex-wrap gap-2">
                  {profile.learningNow.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1 rounded-md border border-zinc-200/80 bg-white/80 px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-dark" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={0.35}>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href={profile.resume} download>
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button href="#contact" variant="ghost">
                <MessageSquare className="h-4 w-4" />
                Let&apos;s talk
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Animated Stats Row */}
      <Reveal delay={0.4} className="mt-12 sm:mt-20">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 sm:p-8 shadow-sm backdrop-blur-sm sm:grid-cols-4 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          {profile.animatedStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`text-center py-2 ${
                idx !== profile.animatedStats.length - 1
                  ? "sm:border-r sm:border-zinc-200 dark:sm:border-zinc-800"
                  : ""
              }`}
            >
              <div className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-accent dark:text-accent-dark">
                <CountUp to={stat.numericValue} suffix={stat.suffix} />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
