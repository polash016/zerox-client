import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { importGenius } from "@/lib/site-config";

export function ImportGenius() {
  return (
    <section
      id="import-genius"
      className="bg-paper-warm py-10 md:py-14 px-5 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid gap-8 lg:gap-14 grid-cols-1 lg:grid-cols-2 items-start">
          <div>
            <FadeIn>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3.5 text-amber-import">
                {importGenius.eyebrow}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="font-display font-extrabold text-[clamp(26px,2.8vw,40px)] leading-[1.1] tracking-tight text-ink mb-5">
                {importGenius.title}
                <br />
                <span className="text-amber-import">
                  {importGenius.titleAccent}
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="text-[15px] text-ink-3 leading-[1.8] mb-8 max-w-[400px]">
                {importGenius.body}
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <Button asChild variant="amber">
                <a href={importGenius.cta.href}>
                  {importGenius.cta.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
                </a>
              </Button>
            </FadeIn>
          </div>

          <ul role="list" className="flex flex-col gap-2.5">
            {importGenius.services.map((s, i) => (
              <FadeIn key={s.label} delay={(i % 4) * 0.08}>
                <li
                  className="group flex items-center gap-3.5 rounded-xl border bg-white px-5 py-4 transition-all hover:translate-x-1.5 hover:border-amber-import/40"
                  style={{ borderColor: "rgba(180,83,9,0.12)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(180,83,9,0.08)" }}
                  >
                    <Icon
                      name={s.icon}
                      size={15}
                      className="text-amber-import"
                    />
                  </div>
                  <span className="text-sm text-ink-2 font-medium">
                    {s.label}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 ml-auto text-ink-3 opacity-40 group-hover:opacity-100 transition-opacity"
                    aria-hidden
                    strokeWidth={2}
                  />
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
