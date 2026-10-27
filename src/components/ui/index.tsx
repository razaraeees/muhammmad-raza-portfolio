import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export function SectionHeading({
  badge,
  title,
  intro,
  align = "left",
  className = "",
}: {
  badge?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`mb-12 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent dark:border-accent-dark/30 dark:bg-accent-dark/10 dark:text-accent-dark">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
          {intro}
        </p>
      )}
    </div>
  );
}

export const Section = ({
  id,
  title,
  intro,
  badge,
  alternate = false,
  className = "",
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  badge?: string;
  alternate?: boolean;
  className?: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className={`scroll-mt-20 py-16 sm:py-24 lg:py-28 ${
      alternate
        ? "bg-zinc-100/70 border-y border-zinc-200/60 dark:bg-white/[0.015] dark:border-zinc-800/60"
        : "bg-transparent"
    } ${className}`}
  >
    <Container>
      <SectionHeading badge={badge} title={title} intro={intro} />
      <div>{children}</div>
    </Container>
  </section>
);

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * to));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const Badge = ({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}) => {
  const styles = {
    default:
      "border border-zinc-200 bg-white/60 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300",
    accent:
      "border border-accent/30 bg-accent/10 text-accent font-medium dark:border-accent-dark/30 dark:bg-accent-dark/10 dark:text-accent-dark",
    outline:
      "border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export const Card = ({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "interactive" | "accent";
  className?: string;
}) => {
  const base =
    "rounded-2xl border";
  const variants = {
    default:
      "border-zinc-200/80 bg-white/70 shadow-sm shadow-zinc-200/40 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:shadow-none",
    interactive:
      "border-zinc-200/80 bg-white/80 shadow-sm shadow-zinc-200/50 backdrop-blur-sm hover:border-accent/40 hover:shadow-md hover:shadow-accent/5 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-accent-dark/40 dark:hover:shadow-accent-dark/5",
    accent:
      "border-accent/30 bg-accent/[0.03] shadow-sm backdrop-blur-sm dark:border-accent-dark/30 dark:bg-accent-dark/[0.03]",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  download,
  target,
  rel,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}) {
  const styles = {
    primary:
      "bg-accent text-white shadow-sm shadow-accent/20 hover:bg-emerald-800 hover:shadow-md hover:shadow-accent/30 active:scale-[0.98] dark:bg-accent-dark dark:text-zinc-950 dark:hover:bg-emerald-400",
    ghost:
      "border border-zinc-200 bg-white/60 text-zinc-800 hover:bg-zinc-100/80 hover:text-zinc-950 active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:bg-zinc-800/80 dark:hover:text-white",
    outline:
      "border border-accent/40 text-accent hover:bg-accent/10 active:scale-[0.98] dark:border-accent-dark/40 dark:text-accent-dark dark:hover:bg-accent-dark/10",
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
