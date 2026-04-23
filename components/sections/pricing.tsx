"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="bg-paper py-16 md:py-24 px-5 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <FadeIn className="mb-14 pb-8 border-b border-rule flex flex-wrap justify-between items-end gap-6">
          <div>
            <div className="text-[11px] font-bold text-sky-brand uppercase tracking-[0.12em] mb-3">
              Pricing
            </div>
            <h2 className="font-display font-extrabold text-[clamp(26px,3vw,42px)] leading-[1.1] tracking-tight text-ink">
              Simple, transparent pricing.
            </h2>
          </div>
          
          {/* Toggle */}
          <div className="flex items-center gap-2 bg-white border border-rule rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                !annual ? "bg-ink text-white shadow-md" : "text-ink-3 hover:text-ink"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2",
                annual ? "bg-ink text-white shadow-md" : "text-ink-3 hover:text-ink"
              )}
            >
              Annual
              <span className={cn(
                "text-[10px] rounded-full px-2 py-0.5 font-bold",
                annual ? "bg-sky-brand/20 text-sky-brand" : "bg-sky-dim text-sky-brand"
              )}>
                -20%
              </span>
            </button>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricing.plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "h-full rounded-2xl p-8 flex flex-col transition-all duration-300",
                  plan.highlight
                    ? "bg-ink text-white shadow-[0_24px_48px_rgba(10,10,10,0.15)] scale-[1.02] relative z-10"
                    : "bg-white border border-rule hover:border-sky-brand/40 hover:shadow-xl"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-brand text-ink font-bold text-[10px] uppercase tracking-wider py-1.5 px-4 rounded-full">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={cn(
                    "font-display font-bold text-xl mb-2",
                    plan.highlight ? "text-white" : "text-ink"
                  )}>
                    {plan.name}
                  </h3>
                  <p className={cn(
                    "text-sm leading-relaxed",
                    plan.highlight ? "text-white/60" : "text-ink-3"
                  )}>
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-8">
                  {plan.price.monthly ? (
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold">{plan.currency}</span>
                      <span className="text-5xl font-display font-black tracking-tighter">
                        {annual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className={cn(
                        "text-sm font-medium",
                        plan.highlight ? "text-white/40" : "text-ink-4"
                      )}>
                        /mo
                      </span>
                    </div>
                  ) : (
                    <div className="text-4xl font-display font-black tracking-tighter">
                      Custom
                    </div>
                  )}
                  {annual && plan.price.monthly && (
                    <p className="text-xs text-sky-brand font-semibold mt-2">
                      Billed annually (Save {plan.currency} {(plan.price.monthly - plan.price.annual) * 12}/year)
                    </p>
                  )}
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={cn(
                        "mt-1 p-0.5 rounded-full",
                        plan.highlight ? "bg-sky-brand/20 text-sky-brand" : "bg-sky-dim text-sky-brand"
                      )}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className={cn(
                        "text-[14px] font-medium",
                        plan.highlight ? "text-white/80" : "text-ink-2"
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.highlight ? "primary" : "secondary"}
                  size="lg"
                  className={cn(
                    "w-full rounded-xl",
                    plan.highlight && "bg-sky-brand text-ink hover:bg-sky-brand/90"
                  )}
                >
                  <a href="#contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2.5} />
                  </a>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Note */}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <p className="text-sm text-ink-4 font-medium italic">
            * All prices are in BDT. Enterprise plans include a dedicated account manager and SLA guarantees.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
