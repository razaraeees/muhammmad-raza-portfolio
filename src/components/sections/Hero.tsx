import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  Check,
  Code2,
  Copy,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { profile } from "@/data/profile";
import { Button, Container } from "@/components/ui";

const codeSnippet = [
  `const developer = {`,
  `  name: "${profile.name}",`,
  `  stack: ["Laravel", "PHP", "Vue.js", "React.js"],`,
  `  database: "MySQL & Relational Design",`,
  `  specialty: "ERPs, CRMs & Business Workflows",`,
  `  status: "Available for high-impact roles"`,
  `};`
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Rotating roles cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* Background Animated Gradient Blobs */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl filter dark:bg-accent-dark/10"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl filter dark:bg-emerald-400/10"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#0E7C66_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] dark:opacity-[0.1]" />
      </div>

      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 min-w-0">
        {/* Left Column: Greeting & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent dark:border-accent-dark/30 dark:bg-accent-dark/10 dark:text-accent-dark">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent dark:bg-accent-dark opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent dark:bg-accent-dark" />
            </span>
            <span>Open to new opportunities · {profile.location}</span>
          </div>

          {/* Heading with Dynamic Rotating Role */}
          <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
            Hi, I&apos;m {profile.name}.
            <span className="block mt-2 text-xl sm:text-3xl lg:text-4xl text-zinc-600 dark:text-zinc-400 font-sans font-normal min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="inline-block font-semibold text-accent dark:text-accent-dark"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Button href="#projects">
              <Code2 className="h-4 w-4" />
              View Projects
            </Button>
            <Button href={profile.resume} variant="ghost" download>
              Resume
            </Button>
            <Button href="#contact" variant="ghost">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
          </div>

          {/* Social Profiles */}
          <div className="mt-7 flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
            {/* <span className="text-xs font-medium uppercase tracking-wider">Connect:</span> */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-lg p-1.5 transition-colors hover:text-accent hover:bg-zinc-200/60 dark:hover:bg-zinc-800 dark:hover:text-accent-dark"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-lg p-1.5 transition-colors hover:text-accent hover:bg-zinc-200/60 dark:hover:bg-zinc-800 dark:hover:text-accent-dark"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Premium Code Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative min-w-0 w-full overflow-hidden"
        >
          {/* Subtle glow behind card */}
          <div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/20 to-emerald-400/20 blur-xl opacity-70"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-[#141916] text-emerald-100 shadow-2xl backdrop-blur-sm w-full">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 bg-[#0E1310] px-3.5 py-2.5 sm:px-4 sm:py-3 min-w-0">
              <div className="flex items-center gap-2 min-w-0 truncate">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500/80 shrink-0" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500/80 shrink-0" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80 shrink-0" />
                <span className="ml-1.5 flex items-center gap-1 text-[11px] sm:text-xs font-mono text-zinc-400 truncate">
                  <Terminal className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-dark shrink-0" />
                  developer.config.ts
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Copy snippet"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              {codeSnippet.map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="select-none text-zinc-600 w-5 text-right font-light">
                    {i + 1}
                  </span>
                  <span className="text-zinc-200">
                    {line.includes("const ") ? (
                      <>
                        <span className="text-emerald-400">const</span>{" "}
                        <span className="text-yellow-300">developer</span> = &#123;
                      </>
                    ) : line.includes("name:") ? (
                      <>
                        {"  "}
                        <span className="text-teal-300">name</span>:{" "}
                        <span className="text-amber-200">&quot;{profile.name}&quot;</span>,
                      </>
                    ) : line.includes("stack:") ? (
                      <>
                        {"  "}
                        <span className="text-teal-300">stack</span>: [
                        <span className="text-amber-200">&quot;Laravel&quot;</span>,{" "}
                        <span className="text-amber-200">&quot;PHP&quot;</span>,{" "}
                        <span className="text-amber-200">&quot;Vue.js&quot;</span>,{" "}
                        <span className="text-amber-200">&quot;React.js&quot;</span>],
                      </>
                    ) : line.includes("database:") ? (
                      <>
                        {"  "}
                        <span className="text-teal-300">database</span>:{" "}
                        <span className="text-emerald-400 font-bold">&quot;MySQL & Relational Design&quot;</span>,
                      </>
                    ) : line.includes("specialty:") ? (
                      <>
                        {"  "}
                        <span className="text-teal-300">specialty</span>:{" "}
                        <span className="text-amber-200">&quot;ERPs, CRMs & Business Workflows&quot;</span>,
                      </>
                    ) : line.includes("status:") ? (
                      <>
                        {"  "}
                        <span className="text-teal-300">status</span>:{" "}
                        <span className="text-emerald-300">&quot;Available for high-impact roles&quot;</span>
                      </>
                    ) : (
                      line
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Status bar */}
            <div className="flex items-center justify-between border-t border-zinc-800/80 bg-[#0E1310] px-4 py-2 text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Laravel 11 · PHP 8.2 · Clean Architecture
              </span>
              {/* <span className="text-accent-dark flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Ready to deploy
              </span> */}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-14 flex justify-center text-zinc-400 dark:text-zinc-500"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-xs font-medium transition-colors hover:text-accent dark:hover:text-accent-dark"
        >
          <span>Explore Work</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 group-hover:border-accent dark:border-zinc-700 dark:group-hover:border-accent-dark"
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
