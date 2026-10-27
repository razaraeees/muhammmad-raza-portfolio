import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { Card, Section } from "@/components/ui";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;
  const current = testimonials[currentIndex];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <Section
      id="testimonials"
      badge="Recommendations"
      title="Client & Colleague Feedback"
      intro="Hear from founders, product managers, and engineering leaders who have worked alongside me."
      alternate={false}
    >
      <div
        className="mx-auto max-w-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Card
          variant="interactive"
          className="relative overflow-hidden p-5 sm:p-8 lg:p-12 shadow-md dark:shadow-none min-w-0"
        >
          {/* Subtle Quote Watermark */}
          <div
            className="absolute top-3 right-4 sm:top-4 sm:right-6 text-zinc-100 dark:text-zinc-800/40 pointer-events-none"
            aria-hidden="true"
          >
            <Quote className="h-16 w-16 sm:h-28 sm:w-28 opacity-50 sm:opacity-60" />
          </div>

          <div className="relative z-10 min-h-[160px] sm:min-h-[220px] flex flex-col justify-between">
            {/* Stars row */}
            <div className="flex items-center gap-1 text-amber-400 mb-4 sm:mb-6">
              {[...Array(current.rating || 5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="font-display text-base sm:text-xl lg:text-2xl font-medium leading-relaxed text-zinc-800 dark:text-zinc-100"
              >
                &ldquo;{current.text}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            {/* Author info row */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent font-bold font-display text-sm dark:bg-accent-dark/20 dark:text-accent-dark">
                  {current.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {current.role} · <span className="font-medium text-accent dark:text-accent-dark">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 shadow-sm transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-accent-dark dark:hover:text-accent-dark"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 shadow-sm transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-accent-dark dark:hover:text-accent-dark"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Carousel Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-accent dark:bg-accent-dark"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
