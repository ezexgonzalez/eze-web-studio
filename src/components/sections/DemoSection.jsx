import { FiBarChart2, FiSmartphone, FiZap } from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

const attributeIcons = {
  strategy: FiBarChart2,
  mobile: FiSmartphone,
  identity: FiZap,
};

function EditorialRail({ children, trailing }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-slate-400 sm:gap-7">
      <span className="whitespace-nowrap text-slate-200">{children}</span>
      <span aria-hidden="true" className="h-px bg-white/[0.18]" />
      <span className="whitespace-nowrap text-right text-slate-500">{trailing}</span>
    </div>
  );
}

function LiveDemoLink({ className = "" }) {
  const { featuredDemo } = siteConfig;

  return (
    <a
      className={`inline-flex items-center gap-2 border-b border-cyan-300/80 pb-1 text-sm font-medium text-cyan-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 ${className}`}
      href={featuredDemo.liveUrl}
      rel="noreferrer"
      target="_blank"
    >
      Ver demo en vivo <span aria-hidden="true" className="text-base leading-none">↗</span>
    </a>
  );
}

function MobileFrame({ image }) {
  return (
    <figure className="overflow-hidden rounded-[1.45rem] border border-slate-300/70 bg-[#101316] p-[4px] shadow-[0_12px_30px_rgba(0,0,0,0.28)] lg:rounded-[1.8rem] lg:p-[5px]">
      <img
        alt={image.alt}
        className="block h-auto w-full rounded-[1.2rem] lg:rounded-[1.5rem]"
        decoding="async"
        loading="lazy"
        src={image.src}
      />
    </figure>
  );
}

function BrowserFrame({ image, urlLabel }) {
  return (
    <figure className="overflow-hidden rounded-[0.8rem] border border-slate-300/55 bg-[#0b0e10]">
      <div className="flex h-8 items-center gap-3 border-b border-white/[0.1] bg-[#13181b] px-3 sm:px-4">
        <span aria-hidden="true" className="flex gap-1.5">
          <i className="h-1.5 w-1.5 rounded-full bg-slate-500/80" />
          <i className="h-1.5 w-1.5 rounded-full bg-slate-500/80" />
          <i className="h-1.5 w-1.5 rounded-full bg-slate-500/80" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-black/35 px-3 py-1 text-[0.58rem] tracking-[0.04em] text-slate-400">
          {urlLabel}
        </span>
        <span aria-hidden="true" className="text-xs tracking-[0.16em] text-slate-500">•••</span>
      </div>
      <img
        alt={image.alt}
        className="block h-auto w-full"
        decoding="async"
        loading="lazy"
        src={image.src}
      />
    </figure>
  );
}

function DemoSection() {
  const { featuredDemo } = siteConfig;

  return (
    <section
      id="demo"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-9 sm:px-6 sm:py-10 lg:px-8 lg:py-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <EditorialRail trailing={featuredDemo.topRail}>
            EZE WEB STUDIO
          </EditorialRail>
        </Reveal>

        <Reveal className="mt-7 grid gap-6 lg:mt-8 lg:grid-cols-[1.05fr_0.82fr_0.38fr] lg:items-end lg:gap-8" delay={60}>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              {featuredDemo.projectLabel}
            </p>
            <h2 className="mt-3 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-[3.65rem]">
              {featuredDemo.title}
            </h2>
          </div>

          <div className="border-l border-white/[0.22] pl-5 lg:pb-1">
            <p className="text-base leading-6 text-slate-300 sm:text-lg sm:leading-7">
              <span className="lg:hidden">{featuredDemo.mobileDescription}</span>
              <span className="hidden lg:inline">{featuredDemo.desktopDescription}</span>
            </p>
            <LiveDemoLink className="mt-4" />
          </div>

          <div className="hidden border-l border-white/[0.18] pl-5 lg:block">
            <span aria-hidden="true" className="mb-4 block h-px w-9 bg-cyan-300" />
            <p className="text-[0.65rem] font-medium uppercase leading-5 tracking-[0.2em] text-slate-300">
              {featuredDemo.disclosure}
            </p>
          </div>
        </Reveal>

        <p className="mt-5 text-xs text-slate-500 lg:hidden">{featuredDemo.disclosure}</p>

        <Reveal className="mt-6 lg:mt-7" delay={110}>
          <div className="grid grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] items-start gap-4 sm:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] md:gap-7 lg:hidden">
            <div className="flex min-h-full flex-col">
              <div className="space-y-4">
                {featuredDemo.attributes.map((attribute) => {
                  const Icon = attributeIcons[attribute.icon];

                  return (
                    <div className="border-t border-white/[0.14] pt-3 first:border-t-0 first:pt-0" key={attribute.label}>
                      <Icon aria-hidden="true" className="mb-2 h-4 w-4 text-slate-300" />
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-100">
                        {attribute.label}
                      </p>
                      <p className="mt-1 text-[0.68rem] leading-4 text-slate-400">
                        {attribute.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <LiveDemoLink className="mt-6 self-start" />
            </div>

            <MobileFrame image={featuredDemo.mobileImage} />
          </div>

          <div className="hidden lg:grid lg:grid-cols-[minmax(0,70%)_minmax(11rem,20%)] lg:justify-between lg:items-start">
            <BrowserFrame image={featuredDemo.desktopImage} urlLabel={featuredDemo.liveUrlLabel} />
            <MobileFrame image={featuredDemo.mobileImage} />
          </div>
        </Reveal>

        <Reveal className="mt-7 lg:mt-6" delay={150}>
          <EditorialRail trailing={featuredDemo.bottomRail}>
            EZE WEB STUDIO
          </EditorialRail>
        </Reveal>
      </div>
    </section>
  );
}

export default DemoSection;
