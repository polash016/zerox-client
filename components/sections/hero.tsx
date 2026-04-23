"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Package } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroFloats } from "./hero-floats";
import { OrderDashboard } from "./order-dashboard";
import { hero } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduced = useReducedMotion();
  const [drawn, setDrawn] = useState(false);
  const [wordsShown, setWordsShown] = useState(0);
  const words = hero.headline.split(" ");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setWordsShown(i);
      if (i >= words.length) clearInterval(interval);
    }, 55);
    const t = window.setTimeout(() => setDrawn(true), 900);
    return () => {
      clearInterval(interval);
      window.clearTimeout(t);
    };
  }, [words.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[75vh] flex items-center overflow-hidden pt-24 pb-12 px-5 sm:px-10 lg:px-20"
      style={{
        background: "linear-gradient(160deg,#FAFAFA 0%,#F2F5FA 100%)",
      }}
    >
      {/* Dot grid bg */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10,15,40,0.045) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <HeroFloats />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="relative">
          {/* Dot grid (floating) */}
          <div className="absolute top-[20%] left-2 grid grid-cols-5 gap-2 -z-10 opacity-60 hidden xl:grid">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="h-1 w-1 rounded-full"
                style={{
                  background:
                    i % 2 === 0
                      ? "rgba(135,206,235,0.5)"
                      : "rgba(135,206,235,0.22)",
                }}
              />
            ))}
          </div>

          {/* Geometric ring (floating) */}
          <div
            className="absolute top-[40%] w-[72px] h-[72px] rounded-full border-2 animate-float-slow -z-10 opacity-50 hidden xl:block"
            style={{ borderColor: "rgba(135,206,235,0.35)" }}
          />

          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-rule rounded-full pl-3.5 pr-3.5 py-1.5 mb-8 shadow-[0_2px_12px_rgba(10,10,10,0.06)]"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-sky-brand"
            />
            <span className="text-xs font-semibold text-ink-3 tracking-wide">
              {hero.badge}
            </span>
          </motion.div>

          <h1
            className="font-display font-extrabold text-ink mb-6"
            style={{
              fontSize: "clamp(32px, 4.8vw, 68px)",
              lineHeight: 1.07,
              letterSpacing: "-0.035em",
              textWrap: "balance" as never,
            }}
          >
            {words.map((word, i) => {
              const isAccent = word
                .toLowerCase()
                .startsWith(hero.underlineWord.toLowerCase());
              return (
                <span
                  key={i}
                  className={cn(
                    "inline-block transition-all duration-400",
                    i < wordsShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{
                    marginRight: i < words.length - 1 ? "0.26em" : 0,
                    transitionDelay: `${i * 50}ms`
                  }}
                >
                  {isAccent ? (
                    <span
                      className={`sky-underline${drawn ? " drawn" : ""}`}
                      style={{ color: "var(--color-sky-brand)" }}
                    >
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              );
            })}
          </h1>

          <motion.p
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-[480px] text-[15px] md:text-[17px] leading-[1.78] font-light text-ink-3 mb-10"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <a href={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label}{" "}
                <ArrowRight
                  className="h-3.5 w-3.5"
                  aria-hidden
                  strokeWidth={2}
                />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</a>
            </Button>
          </motion.div>

          <motion.dl
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-rule"
          >
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <div className="font-display font-bold text-[17px] text-ink tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs font-medium text-ink-4 mt-0.5">
                    {s.label}
                  </div>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right Dashboard Mockup */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:block"
        >
          {/* Floating revenue card */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -top-12 -right-6 min-w-[200px] bg-white rounded-2xl border border-rule px-5 py-4 animate-float hidden xl:block z-20"
            style={{
              boxShadow:
                "0 20px 60px rgba(10,10,10,0.08), 0 1px 4px rgba(10,10,10,0.04)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-ink-4 uppercase tracking-widest">
                Total Orders
              </span>
              <span className="text-[9px] font-bold text-green-600 bg-green-50 border border-green-200 rounded-full px-1.5 py-0.5">
                ↑ 42%
              </span>
            </div>
            <div className="font-display text-[26px] font-extrabold text-ink leading-none tracking-tight">
              12,847
            </div>
            <div className="flex gap-[2px] items-end h-6 mt-3">
              {[35, 52, 40, 68, 55, 80, 62, 94, 78, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 9 ? "var(--color-sky-brand)" : "rgba(135,206,235,0.3)",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Order pulse badge */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="absolute bottom-12 -right-12 flex items-center gap-2.5 bg-white rounded-full border border-rule py-2 px-3.5 animate-float hidden xl:flex z-20 shadow-[0_8px_28px_rgba(10,10,10,0.08)]"
            style={{ animationDuration: "8s" }}
          >
            <div className="w-7 h-7 rounded-full bg-sky-dim flex items-center justify-center">
              <Package className="h-3 w-3 text-sky-brand" aria-hidden strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display font-bold text-[12px] leading-none text-ink">
                Real-time sync
              </div>
              <div className="text-[10px] text-ink-4 mt-0.5 font-medium">247 live orders</div>
            </div>
            <div className="relative ml-1 h-1.5 w-1.5 rounded-full bg-green-500">
              <span
                className="absolute -inset-[2px] rounded-full border border-green-500 opacity-50 animate-ping"
                aria-hidden
              />
            </div>
          </motion.div>

          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-brand/10 blur-[80px] -z-10 rounded-full" />

          <OrderDashboard />

          {/* Floating bottom badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-rule rounded-full px-5 py-2.5 shadow-[0_4px_16px_rgba(10,10,10,0.08)] whitespace-nowrap flex items-center gap-2 z-20">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[11px] text-ink-3 font-semibold tracking-tight">
              Round-robin distribution · 3 couriers active
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
