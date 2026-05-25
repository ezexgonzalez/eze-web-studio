import { siteConfig } from "../../data/siteConfig";

function IncludesSection() {
  const { includes } = siteConfig;

  return (
    <section
      id="servicios"
      className="relative isolate overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.14] to-transparent" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 -translate-x-1/3 rounded-full bg-cyan-300/[0.045] blur-3xl" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
              {includes.eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-5xl">
              {includes.title}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {includes.description}
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {includes.items.map((item, index) => (
            <div
              className={`group rounded-2xl border border-white/[0.08] bg-white/[0.032] p-4 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/[0.22] hover:bg-white/[0.052] hover:shadow-[0_0_30px_rgba(34,211,238,0.055)] ${
                index === includes.items.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              key={item}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-semibold text-cyan-200/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 rounded-full bg-white/[0.12] transition-colors duration-300 group-hover:bg-cyan-300/[0.38]" />
              </div>
              <p className="text-sm font-semibold text-slate-100 sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IncludesSection;
