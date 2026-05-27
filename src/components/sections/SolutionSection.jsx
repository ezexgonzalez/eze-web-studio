import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

function ComparisonCard({ title, items, featured = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 sm:p-6 ${
        featured
          ? "border-cyan-300/[0.28] bg-cyan-300/[0.06] shadow-[0_0_0_1px_rgba(34,211,238,0.035),0_22px_70px_rgba(34,211,238,0.075)] hover:border-cyan-300/[0.4] hover:bg-cyan-300/[0.075] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.055),0_26px_80px_rgba(34,211,238,0.105)]"
          : "border-white/[0.075] bg-white/[0.025] shadow-[0_18px_60px_rgba(0,0,0,0.22)] hover:border-white/[0.12] hover:bg-white/[0.04]"
      }`}
    >
      {featured && (
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      )}

      <div
        className={`mb-6 flex items-center justify-between gap-4 border-b pb-4 ${
          featured ? "border-cyan-300/[0.12]" : "border-white/[0.07]"
        }`}
      >
        <h3
          className={`text-lg font-semibold ${
            featured ? "text-cyan-50" : "text-slate-200"
          }`}
        >
          {title}
        </h3>
        <span
          className={`h-px w-14 rounded-full ${
            featured ? "bg-cyan-300/80 shadow-[0_0_16px_rgba(34,211,238,0.28)]" : "bg-white/[0.14]"
          }`}
        />
      </div>

      <ul className="space-y-3.5">
        {items.map((item) => (
          <li
            className={`flex items-center gap-3 text-sm ${
              featured ? "text-slate-100" : "text-slate-400"
            }`}
            key={item}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ring-4 ${
                featured
                  ? "bg-cyan-300 ring-cyan-300/[0.12]"
                  : "bg-slate-600 ring-white/[0.035]"
              }`}
            />
            <span className={featured ? "font-medium" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionSection() {
  const { solution } = siteConfig;

  return (
    <section
      id="solucion"
      className="relative isolate overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute right-0 top-10 -z-10 h-72 w-72 translate-x-1/3 rounded-full bg-cyan-300/[0.055] blur-3xl" />

      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
              {solution.eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-5xl">
              {solution.title}
            </h2>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>{solution.description}</p>
            <p className="border-l border-cyan-300/40 pl-4 font-semibold text-cyan-100">
              {solution.strongPhrase}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12">
          <Reveal delay={80}>
            <ComparisonCard title={solution.before.title} items={solution.before.items} />
          </Reveal>
          <Reveal delay={160}>
            <ComparisonCard
              title={solution.after.title}
              items={solution.after.items}
              featured
            />
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

export default SolutionSection;
