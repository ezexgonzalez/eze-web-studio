import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

function DemoSection() {
  const { featuredDemo } = siteConfig;

  return (
    <section id="demo" className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="grid gap-7 lg:grid-cols-[0.76fr_1.24fr] lg:items-end lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
              {featuredDemo.eyebrow}
            </p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-5xl">
              {featuredDemo.title}
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {featuredDemo.description}
            </p>
            <p className="mt-5 text-sm font-medium text-slate-500">{featuredDemo.disclosure}</p>
          </div>
        </Reveal>

        <Reveal className="relative mt-10 lg:mt-12" delay={100}>
          <figure className="overflow-hidden bg-[#0b0d10]">
            <img alt={featuredDemo.desktopImage.alt} className="block h-auto w-full" decoding="async" loading="lazy" src={featuredDemo.desktopImage.src} />
            <figcaption className="border-t border-white/[0.08] px-4 py-3 text-xs font-medium tracking-[0.12em] text-slate-500 sm:px-5">
              VISTA DESKTOP
            </figcaption>
          </figure>

          <figure className="mx-auto mt-5 w-[58%] max-w-[17rem] overflow-hidden border border-white/[0.1] bg-[#0b0d10] shadow-[0_20px_56px_rgba(0,0,0,0.36)] sm:mt-0 sm:absolute sm:bottom-6 sm:right-6 sm:w-[24%] sm:max-w-[18rem]">
            <img alt={featuredDemo.mobileImage.alt} className="block h-auto w-full" decoding="async" loading="lazy" src={featuredDemo.mobileImage.src} />
            <figcaption className="border-t border-white/[0.08] px-3 py-2 text-[0.625rem] font-medium tracking-[0.12em] text-slate-500">
              MOBILE
            </figcaption>
          </figure>
        </Reveal>

        {featuredDemo.liveUrl ? (
          <a className="mt-7 inline-flex text-sm font-semibold text-cyan-100 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200" href={featuredDemo.liveUrl} rel="noreferrer" target="_blank">
            VER DEMO EN VIVO <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default DemoSection;
