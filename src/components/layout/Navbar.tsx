import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, profile } from "@/data/profile";
import { Container } from "@/components/ui";
export default function Navbar() {
  const [open, setOpen] = useState(false), [active, setActive] = useState("");
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    const io = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && setActive(x.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-200/70 bg-[#F6F5F1]/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#101412]/85">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-display text-lg font-semibold">{profile.name}</a>
        <nav className="hidden gap-7 md:flex" aria-label="Main">
          {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className={`text-sm transition-colors ${active === n.toLowerCase() ? "font-semibold text-accent dark:text-accent-dark" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}`}>{n}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="rounded-md p-2 hover:bg-zinc-200/60 dark:hover:bg-zinc-800">
            <Sun className="hidden h-5 w-5 dark:block" /><Moon className="h-5 w-5 dark:hidden" /></button>
          <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-md p-2 md:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </Container>
      {open && <nav className="border-t border-zinc-200 px-5 py-3 md:hidden dark:border-zinc-800 bg-[#F6F5F1]/95 dark:bg-[#101412]/95 backdrop-blur-md">{nav.map((n) => <a key={n} onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block py-2.5">{n}</a>)}</nav>}
    </header>);
}
