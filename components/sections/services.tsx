import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Icon } from "@/components/icon";
import { services } from "@/lib/site-config";

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper-white py-10 md:py-14 px-5 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="flex flex-wrap justify-between items-end gap-4 mb-8 pb-5 border-b border-rule">
          <div>
            <div className="text-[11px] font-bold text-sky-brand uppercase tracking-[0.12em] mb-3">
              What We Do
            </div>
            <h2 className="font-display font-extrabold text-[clamp(26px,3vw,42px)] leading-[1.1] tracking-tight text-ink max-w-[460px]">
              Everything your store needs, under one roof.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-ink-3 hover:text-ink transition-colors flex items-center gap-1.5 font-medium whitespace-nowrap"
          >
            Start growing <ArrowRight className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
          </a>
        </FadeIn>

        <ul
          role="list"
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {services.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <li className="group h-full rounded-xl border border-rule bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(135,206,235,0.18)] hover:border-sky-brand/45 cursor-default">
                <div className="w-10 h-10 rounded-[10px] bg-sky-dim flex items-center justify-center mb-4">
                  <Icon name={c.icon} size={18} className="text-sky-brand" />
                </div>
                <h3 className="font-display font-bold text-base text-ink mb-2 tracking-tight leading-tight">
                  {c.title}
                </h3>
                <p className="text-[13px] text-ink-3 leading-[1.7] mb-4">
                  {c.desc}
                </p>
                <span className="text-xs font-semibold text-sky-brand flex items-center gap-1">
                  Learn more
                  <ArrowRight className="h-3 w-3" aria-hidden strokeWidth={2.2} />
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
