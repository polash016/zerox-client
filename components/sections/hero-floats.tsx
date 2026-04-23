"use client";

import { Package } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroFloats() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Morphing blob */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[480px] h-[480px] animate-blob"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(135,206,235,0.22) 0%, rgba(135,206,235,0.05) 50%, transparent 72%)",
          borderRadius: "60% 40% 54% 46%/48% 56% 44% 52%",
        }}
      />

      {/* Floating revenue card */}
      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute top-[15%] right-[6%] min-w-[220px] bg-white rounded-2xl border border-rule px-5 py-4 animate-float"
        style={{
          boxShadow:
            "0 20px 60px rgba(10,10,10,0.08), 0 1px 4px rgba(10,10,10,0.04)",
        }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[11px] font-semibold text-ink-4 uppercase tracking-widest">
            Total Orders
          </span>
          <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
            ↑ 42%
          </span>
        </div>
        <div className="font-display text-[30px] font-extrabold text-ink leading-none tracking-tight">
          12,847
        </div>
        <div className="flex gap-[3px] items-end h-7 mt-3">
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
        transition={{ duration: 0.7, delay: 0.55 }}
        className="absolute bottom-[24%] right-[10%] flex items-center gap-2.5 bg-white rounded-full border border-rule py-2.5 px-4 animate-float"
        style={{ animationDuration: "8s", boxShadow: "0 8px 28px rgba(10,10,10,0.08)" }}
      >
        <div className="w-[30px] h-[30px] rounded-full bg-sky-dim flex items-center justify-center">
          <Package className="h-[14px] w-[14px] text-sky-brand" aria-hidden strokeWidth={2} />
        </div>
        <div>
          <div className="font-display font-bold text-[13px] leading-none text-ink">
            Real-time sync
          </div>
          <div className="text-[11px] text-ink-4 mt-0.5">247 live orders</div>
        </div>
        <div className="relative ml-1 h-2 w-2 rounded-full bg-green-500">
          <span
            className="absolute -inset-[3px] rounded-full border-[1.5px] border-green-500 opacity-50 animate-ping-slow"
            aria-hidden
          />
        </div>
      </motion.div>

      {/* Geometric ring */}
      <div
        className="absolute top-[52%] left-[9%] w-[72px] h-[72px] rounded-full border-2 animate-float-slow"
        style={{ borderColor: "rgba(135,206,235,0.35)" }}
      />

      {/* Dot grid */}
      <div className="absolute top-[38%] left-[11%] grid grid-cols-5 gap-2">
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
    </div>
  );
}
