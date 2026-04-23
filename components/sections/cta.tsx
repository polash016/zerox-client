"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/fade-in";
import { cta } from "@/lib/site-config";

export function CTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 md:py-16 px-5 sm:px-10 lg:px-20 bg-sky-brand/5"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10,15,40,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="relative max-w-[640px] mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-white border border-rule rounded-full px-3.5 py-1.5 mb-5 shadow-[0_2px_10px_rgba(10,10,10,0.06)]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="text-xs text-ink-3 font-medium">{cta.eyebrow}</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2 className="font-display font-extrabold text-[clamp(28px,4.5vw,56px)] leading-[1.06] tracking-tight text-ink mb-4">
            {cta.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="text-base md:text-[17px] text-ink-3 mb-7 leading-[1.7] font-light">
            {cta.subhead}
          </p>
        </FadeIn>

        {!done ? (
          <FadeIn delay={0.24}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
              className="flex flex-wrap gap-2.5 justify-center"
              aria-label="Book a strategy call"
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <Input
                id="cta-email"
                type="email"
                required
                autoComplete="email"
                placeholder={cta.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[260px]"
              />
              <Button type="submit" size="md">
                {cta.buttonLabel} →
              </Button>
            </form>
          </FadeIn>
        ) : (
          <div
            role="status"
            className="inline-flex items-center gap-2.5 bg-white border rounded-xl px-7 py-4 shadow-[0_4px_16px_rgba(135,206,235,0.1)]"
            style={{ borderColor: "rgba(135,206,235,0.3)" }}
          >
            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-sky-brand">
              <Check className="h-3 w-3 text-white" aria-hidden strokeWidth={3} />
            </span>
            <span className="text-ink font-medium text-sm">{cta.success}</span>
          </div>
        )}

        <FadeIn delay={0.32}>
          <p className="text-xs text-ink-4 mt-4">{cta.note}</p>
        </FadeIn>
      </div>
    </section>
  );
}
