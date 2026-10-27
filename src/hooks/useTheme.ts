import { useEffect, useState } from "react";

// Synchronous dark/light toggle using next-themes transition-free technique
export function useTheme() {
  const [resolvedTheme, setThemeState] = useState<"light" | "dark">("light");

  useEffect(() => {
    setThemeState(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const setTheme = (t: "light" | "dark") => {
    // 1. Temporarily disable all transitions across the DOM so every element switches at the exact same instant
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode(
        `*, *::before, *::after {
          -webkit-transition: none !important;
          -moz-transition: none !important;
          -o-transition: none !important;
          -ms-transition: none !important;
          transition: none !important;
        }`
      )
    );
    document.head.appendChild(style);

    // 2. Toggle dark mode class
    document.documentElement.classList.toggle("dark", t === "dark");
    try {
      localStorage.setItem("theme", t);
    } catch { }
    setThemeState(t);

    // 3. Force reflow so the style is applied synchronously in one frame
    window.getComputedStyle(style).opacity;

    // 4. Re-enable transitions for hover effects on the next animation frame
    requestAnimationFrame(() => {
      try {
        document.head.removeChild(style);
      } catch { }
    });
  };

  return { resolvedTheme, setTheme };
}
