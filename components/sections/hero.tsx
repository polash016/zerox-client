"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroFloats } from "./hero-floats";
import { hero } from "@/lib/site-config";

export function Hero() {
  const reduced = useReducedMotion();
  const [drawn, setDrawn] = useState(false);
  const words = hero.headline.split(" ");

  useEffect(() => {
    const t = window.setTimeout(() => setDrawn(true), 900);
    return () => window.clearTimeout(t);
  }, []);

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

      <div className="relative z-10 max-w-[720px]">
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white border border-rule rounded-full pl-3.5 pr-3.5 py-1.5 mb-6 shadow-[0_2px_12px_rgba(10,10,10,0.06)]"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sky-brand" />
          <span className="text-xs font-semibold text-ink-3 tracking-wide">
            {hero.badge}
          </span>
        </motion.div>

        <h1
          className="font-display font-extrabold text-ink mb-5"
          style={{
            fontSize: "clamp(34px, 5.8vw, 68px)",
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
              <motion.span
                key={i}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: reduced ? 0 : i * 0.05,
                  ease: "easeOut",
                }}
                className="inline-block"
                style={{ marginRight: i < words.length - 1 ? "0.26em" : 0 }}
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
              </motion.span>
            );
          })}
        </h1>

        <motion.p
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-[560px] text-[15px] md:text-[17px] leading-[1.78] font-light text-ink-3 mb-10"
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
              <ArrowRight className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
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
    </section>
  );
}
