import { ArrowUp, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { ctaBanner } from "@/data/content";
import { nav, profile } from "@/data/profile";
import { Button, Card, Container, Reveal } from "@/components/ui";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-200/80 bg-zinc-100/60 dark:border-zinc-800/80 dark:bg-[#0c100e]">
      {/* Short CTA Banner Above Footer */}
      <Container className="pt-16 pb-12">
        <Reveal>
          <Card
            variant="accent"
            className="relative overflow-hidden p-6 sm:p-8 lg:p-12 border-accent/40 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent dark:border-accent-dark/40 dark:from-accent-dark/10 dark:via-accent-dark/5 shadow-xl shadow-accent/5 min-w-0"
          >
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl min-w-0">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-accent dark:border-accent-dark/30 dark:bg-accent-dark/15 dark:text-accent-dark">
                  <Sparkles className="h-3.5 w-3.5" />
                  {ctaBanner.tag}
                </span>
                <h3 className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl lg:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                  {ctaBanner.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {ctaBanner.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button href="#contact">
                  <Mail className="h-4 w-4" />
                  {ctaBanner.buttonPrimary}
                </Button>
                <Button href={`mailto:${profile.email}`} variant="ghost">
                  {ctaBanner.buttonSecondary}
                </Button>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>

      {/* Main Footer Links & Copyright */}
      <div className="border-t border-zinc-200/60 py-10 dark:border-zinc-800/60">
        <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <a href="#" className="font-display text-lg font-bold text-zinc-900 dark:text-white">
              {profile.name}
            </a>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" aria-label="Footer">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent-dark"
              >
                {n}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-500 hover:text-accent hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-accent-dark transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-500 hover:text-accent hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-accent-dark transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              aria-label="Email"
              href={`mailto:${profile.email}`}
              className="rounded-lg p-2 text-zinc-500 hover:text-accent hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-accent-dark transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <button
              aria-label="Back to top"
              onClick={scrollToTop}
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 shadow-sm transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-accent-dark dark:hover:text-accent-dark"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
