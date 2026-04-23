import { FadeIn } from "@/components/fade-in";
import { Icon } from "@/components/icon";
import { whyZerox } from "@/lib/site-config";

export function WhyZerox() {
  return (
    <section
      id="why-us"
      className="bg-paper-white py-10 md:py-14 px-5 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="mb-8 pb-5 border-b border-rule flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold text-sky-brand uppercase tracking-[0.12em] mb-3">
              Why Zerox
            </div>
            <h2 className="font-display font-extrabold text-[clamp(26px,3vw,42px)] leading-[1.1] tracking-tight text-ink">
              Why teams choose Zerox.
            </h2>
          </div>
        </FadeIn>

        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {whyZerox.map((item, i) => (
            <FadeIn key={item.n} delay={i * 0.08}>
              <li className="relative h-full overflow-hidden rounded-xl border border-rule bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(135,206,235,0.12)] cursor-default">
                <span
                  aria-hidden
                  className="absolute top-4 right-5 font-display text-[56px] font-extrabold leading-none"
                  style={{ color: "rgba(10,10,10,0.035)" }}
                >
                  {item.n}
                </span>
                <div className="w-[46px] h-[46px] rounded-[11px] bg-sky-dim flex items-center justify-center mb-5">
                  <Icon name={item.icon} size={20} className="text-sky-brand" />
                </div>
                <h3 className="font-display font-bold text-[19px] text-ink mb-2.5 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-3 leading-[1.75]">{item.desc}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
