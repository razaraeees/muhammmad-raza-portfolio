import {
  Check,
  Code,
  Cpu,
  Gauge,
  Rocket,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { services } from "@/data/content";
import { Card, Reveal, Section } from "@/components/ui";

const serviceIcons = {
  Code,
  Cpu,
  ShoppingCart,
  Gauge,
  Rocket,
  ShieldCheck,
};

export default function Services() {
  return (
    <Section
      id="services"
      badge="Services"
      title="How I Can Help Your Team"
      intro="From greenfield MVPs to optimizing enterprise codebases, I deliver dependable solutions that scale."
      alternate={true}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => {
          const IconComp = serviceIcons[s.iconName] || Code;

          return (
            <Reveal key={s.id} delay={idx * 0.08}>
              <Card
                variant="interactive"
                className="group flex flex-col justify-between h-full p-6 sm:p-7 border-zinc-200/80 hover:border-accent/60 dark:border-zinc-800/80 dark:hover:border-accent-dark/60"
              >
                <div>
                  {/* Icon badge */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white dark:bg-accent-dark/10 dark:text-accent-dark dark:group-hover:bg-accent-dark dark:group-hover:text-zinc-950">
                    <IconComp className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-white">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {s.text}
                  </p>
                </div>

                {/* Key Deliverables list */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    {s.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-accent dark:text-accent-dark shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
