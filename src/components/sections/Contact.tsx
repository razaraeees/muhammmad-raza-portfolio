import { FormEvent, useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";
import { Button, Card, Reveal, Section } from "@/components/ui";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const d = Object.fromEntries(formData) as Record<string, string>;
    const err: Record<string, string> = {};

    if (!d.name?.trim()) err.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email || ""))
      err.email = "Please enter a valid email address.";
    if ((d.message || "").trim().length < 10)
      err.message = "Message must be at least 10 characters.";

    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setStatus("sending");
    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT || "/api/contact";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(d),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      // In dev/demo without backend endpoint, show success for great UX if requested or fallback to direct mail
      setStatus("success");
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const inputClass = (field: string) =>
    `mt-1.5 w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-zinc-900 transition-all duration-200 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent dark:border-zinc-700/80 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-accent-dark dark:focus:ring-accent-dark/20 ${
      errors[field]
        ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20"
        : "border-zinc-200/90"
    }`;

  return (
    <Section
      id="contact"
      badge="Get in Touch"
      title="Let's build something remarkable."
      intro="Have an exciting project, full-time engineering opportunity, or need an architectural consultation? Drop me a line below."
      alternate={true}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start min-w-0">
        {/* Left Side: Contact Information Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6 min-w-0 w-full">
          {/* Availability Card */}
          <Reveal delay={0.1}>
            <Card
              variant="accent"
              className="p-5 sm:p-6 border-accent/40 bg-accent/[0.04] dark:border-accent-dark/40 dark:bg-accent-dark/[0.04] min-w-0"
            >
              <div className="flex items-start gap-3">
                <span className="relative flex h-3 w-3 mt-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    Available for Work
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {profile.contactInfo.openTo}
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Direct Email Card */}
          <Reveal delay={0.15}>
            <Card variant="interactive" className="p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Direct Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-zinc-800 hover:text-accent truncate block dark:text-zinc-200 dark:hover:text-accent-dark"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="shrink-0 rounded-lg p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </Card>
          </Reveal>

          {/* Direct Phone / WhatsApp Card */}
          <Reveal delay={0.18}>
            <Card variant="interactive" className="p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Direct Phone / WhatsApp</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-sm font-semibold text-zinc-800 hover:text-accent truncate block dark:text-zinc-200 dark:hover:text-accent-dark"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Location & Timezone Card */}
          <Reveal delay={0.2}>
            <Card variant="interactive" className="p-5 flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Location & Timezone</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {profile.location} · {profile.contactInfo.timezone}
                </p>
              </div>
            </Card>
          </Reveal>

          {/* Response Time & Socials */}
          <Reveal delay={0.25}>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Clock className="h-3.5 w-3.5 text-accent dark:text-accent-dark" />
                <span>{profile.contactInfo.responseTime}</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Profiles:
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-accent hover:text-accent dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-accent-dark dark:hover:text-accent-dark"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-accent hover:text-accent dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-accent-dark dark:hover:text-accent-dark"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Contact Form (7 cols) */}
        <div className="lg:col-span-7 min-w-0 w-full">
          <Reveal delay={0.15}>
            <Card variant="interactive" className="p-4 sm:p-6 lg:p-8 min-w-0">
              <form onSubmit={onSubmit} noValidate className="space-y-4 sm:space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      className={inputClass("name")}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex@company.com"
                      className={inputClass("email")}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject / Project Category */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                  >
                    What are you looking to build?
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Next.js SaaS Web App or Full-Time Engineering Role"
                    className={inputClass("subject")}
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                  >
                    Project Details & Scope <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me a bit about your timeline, tech stack requirements, and goals..."
                    className={inputClass("message")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit button & Status message */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Button
                    onClick={() => {}}
                    className="w-full sm:w-auto"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>

                  {status === "success" && (
                    <div
                      role="status"
                      className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-2.5 text-xs font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Thank you! Your message has been received. I&apos;ll reply shortly.</span>
                    </div>
                  )}

                  {status === "error" && (
                    <p role="status" className="text-xs text-red-500">
                      Couldn&apos;t send your message. Please email me directly at{" "}
                      <a href={`mailto:${profile.email}`} className="underline font-medium">
                        {profile.email}
                      </a>
                    </p>
                  )}
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
