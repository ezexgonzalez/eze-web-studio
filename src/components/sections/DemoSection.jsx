import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

function DemoSection() {
  const { featuredDemo } = siteConfig;

  return (
    <section
      id="demo"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-white/[0.14]" />

      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
              {featuredDemo.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-slate-50 sm:text-6xl lg:text-[3.5rem]">
              {featuredDemo.title}
            </h2>
          </div>

          <div className="max-w-xl lg:pb-1">
            <p className="text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              {featuredDemo.description}
            </p>
            <p className="mt-5 text-sm font-medium text-slate-500">{featuredDemo.disclosure}</p>
          </div>
        </Reveal>

        <Reveal className="mt-12 lg:mt-14" delay={100}>
          <p className="text-sm font-medium tracking-[0.08em] text-slate-300">
            {featuredDemo.projectLabel}
          </p>

          <div className="relative mt-4 pb-28 sm:pb-32 lg:grid lg:grid-cols-[minmax(0,72fr)_minmax(0,20fr)] lg:gap-x-[8%] lg:pb-0">
            <figure className="overflow-hidden rounded-[0.35rem] border border-white/[0.18] bg-[#08090a]">
              <img
                alt={featuredDemo.desktopImage.alt}
                className="block h-auto w-full"
                decoding="async"
                loading="lazy"
                src={featuredDemo.desktopImage.src}
              />
            </figure>

            <figure className="absolute right-0 top-[28%] w-[33%] overflow-hidden rounded-[0.7rem] border border-white/[0.18] bg-[#08090a] lg:static lg:w-auto lg:self-start lg:pt-4">
              <img
                alt={featuredDemo.mobileImage.alt}
                className="block h-auto w-full"
                decoding="async"
                loading="lazy"
                src={featuredDemo.mobileImage.src}
              />
            </figure>
          </div>
        </Reveal>

        {featuredDemo.liveUrl ? (
          <div className="mt-1 lg:w-[72%]">
            <a
              className="inline-flex text-sm font-semibold uppercase tracking-[0.08em] text-cyan-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              href={featuredDemo.liveUrl}
              rel="noreferrer"
              target="_blank"
            >
              VER DEMO EN VIVO <span aria-hidden="true" className="ml-2 text-lg leading-none">↗</span>
            </a>
            <p className="mt-2 text-sm text-slate-500">{featuredDemo.liveUrlLabel}</p>
          </div>
        ) : null}

        <div aria-hidden="true" className="mt-16 h-px bg-white/[0.14]" />
      </div>
    </section>
  );
}

export default DemoSection;
