import { siteConfig } from "../../data/siteConfig";

function FaqSection() {
  const { faq } = siteConfig;

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.12] to-transparent" />
      <div className="absolute left-0 top-1/3 -z-10 h-80 w-80 -translate-x-1/3 rounded-full bg-cyan-300/[0.035] blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {faq.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-5xl">
            {faq.title}
          </h2>
        </div>

        <div className="grid gap-3">
          {faq.items.map((item) => (
            <article
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-cyan-300/[0.2] hover:bg-white/[0.048] hover:shadow-[0_0_28px_rgba(34,211,238,0.045)] sm:p-6"
              key={item.question}
            >
              <h3 className="text-base font-semibold leading-6 text-slate-50">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
