"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { testimonials } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-ink py-16 md:py-24 px-5 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div 
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-sky-brand/10 blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Header */}
        <FadeIn className="mb-14 pb-8 border-b border-white/10 flex flex-wrap justify-between items-end gap-6">
          <div>
            <div className="text-[11px] font-bold text-sky-brand uppercase tracking-[0.12em] mb-3">
              Client Stories
            </div>
            <h2 className="font-display font-extrabold text-[clamp(26px,3vw,42px)] leading-[1.1] tracking-tight text-white">
              What our clients say.
            </h2>
          </div>
          {/* Dots nav */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === active ? "w-6 bg-sky-brand" : "w-2 bg-white/20"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>

        {/* Featured quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Big active card */}
          <FadeIn>
            <div className="bg-white/5 border border-sky-brand/25 rounded-2xl p-10 relative overflow-hidden group">
              <div 
                className="absolute -top-5 -right-5 font-display text-[140px] font-extrabold text-white/[0.03] leading-none pointer-events-none transition-transform group-hover:scale-110 duration-700"
                aria-hidden
              >
                &quot;
              </div>
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-[clamp(16px,1.5vw,19px)] text-white/85 leading-[1.75] font-light mb-8 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-brand/20 flex items-center justify-center shrink-0 border border-sky-brand/30">
                  <span className="font-display font-bold text-lg text-sky-brand">
                    {testimonials[active].name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-base text-white">
                    {testimonials[active].name}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Side stack — other cards */}
          <div className="flex flex-col gap-3">
            {testimonials
              .filter((_, i) => i !== active)
              .slice(0, 3)
              .map((r, i) => (
                <FadeIn key={r.name} delay={i * 0.1}>
                  <div
                    onClick={() => setActive(testimonials.indexOf(r))}
                    className="bg-white/[0.02] border border-white/10 rounded-xl p-5 cursor-pointer transition-all hover:bg-white/[0.05] hover:border-sky-brand/20 group"
                  >
                    <p className="text-sm text-white/50 leading-[1.65] mb-4 italic line-clamp-2 transition-colors group-hover:text-white/70">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <span className="font-display font-bold text-xs text-white/60">
                          {r.name[0]}
                        </span>
                      </div>
                      <div>
                        <div className="font-display font-semibold text-xs text-white/70 transition-colors group-hover:text-white">
                          {r.name}
                        </div>
                        <div className="text-[10px] text-white/30">
                          {r.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
