import { FadeIn } from "@/components/fade-in";
import { Icon } from "@/components/icon";
import { platformTiles } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Platform() {
  return (
    <section
      id="platform"
      className="bg-paper py-10 md:py-14 px-5 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="mb-8 pb-5 border-b border-rule">
          <div className="text-[11px] font-bold text-sky-brand uppercase tracking-[0.12em] mb-3">
            The Platform
          </div>
          <h2 className="font-display font-extrabold text-[clamp(26px,3vw,42px)] leading-[1.1] tracking-tight text-ink">
            One dashboard. Total control.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {platformTiles.map((tile, i) => (
            <FadeIn
              key={tile.title}
              delay={(i % 3) * 0.08}
              className={cn(tile.large && "md:col-span-2")}
            >
              <article
                className={cn(
                  "h-full rounded-xl border border-rule bg-white transition-all hover:scale-[1.015] hover:shadow-[0_10px_36px_rgba(135,206,235,0.12)] hover:border-sky-brand/35 cursor-default",
                  tile.large ? "p-9" : "p-7",
                )}
              >
                <div className="w-10 h-10 rounded-[9px] bg-sky-dim flex items-center justify-center mb-3.5">
                  <Icon name={tile.icon} size={17} className="text-sky-brand" />
                </div>
                <h3
                  className={cn(
                    "font-display font-bold text-ink mb-1.5 tracking-tight leading-tight",
                    tile.large ? "text-xl" : "text-[15px]",
                  )}
                >
                  {tile.title}
                </h3>
                <p className="text-[13px] text-ink-3 leading-[1.65]">{tile.desc}</p>

                {tile.large && (
                  <div className="mt-5 rounded-lg border border-rule bg-paper p-4">
                    {[
                      "#1204 · Aarong Lifestyle",
                      "#1203 · Meena Bazar Online",
                      "#1202 · Shajgoj",
                    ].map((row, j) => (
                      <div
                        key={j}
                        className={cn(
                          "flex items-center justify-between py-2",
                          j < 2 && "border-b border-rule",
                        )}
                      >
                        <span className="text-xs text-ink-3 font-medium">{row}</span>
                        <span className="text-[11px] font-semibold text-green-600 bg-green-50 rounded-full px-2 py-0.5">
                          New
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
