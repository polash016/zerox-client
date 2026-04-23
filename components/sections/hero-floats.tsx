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
    </div>
  );
}
