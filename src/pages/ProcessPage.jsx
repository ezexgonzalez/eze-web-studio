import { siteConfig } from "../data/siteConfig";
import { getContactUrls } from "../utils/contactUrls";
import Button from "../components/ui/Button";
import GlassCard from "../components/ui/GlassCard";
import Reveal from "../components/ui/Reveal";

function ProcessPage() {
  const { contact, process } = siteConfig;
  const contactUrls = getContactUrls(contact);

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_18%,rgba(34,211,238,0.08),transparent_28%),linear-gradient(180deg,#000000_0%,#02040a_100%)]" />
      <div className="absolute inset-x-8 top-28 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
              {process.eyebrow}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-5xl lg:text-6xl">
              {process.title}
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {process.description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <Reveal
              className="h-full"
              delay={index * 70}
              key={step.title}
            >
              <GlassCard
              className="group relative overflow-hidden p-5 transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/[0.22] hover:bg-white/[0.048] sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-semibold text-cyan-200/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 rounded-full bg-white/[0.12] transition-colors duration-300 group-hover:bg-cyan-300/[0.36]" />
              </div>
              <h2 className="text-lg font-semibold text-slate-50">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <GlassCard className="mt-8 grid gap-5 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
            <p className="max-w-3xl text-base leading-7 text-slate-200">
              El objetivo no es complicarte con tecnología. Es ordenar tu presencia online y dejarte una web clara para compartir.
            </p>
            <Button
              as="a"
              href={contactUrls.whatsapp}
              className="w-full md:w-auto"
              rel="noreferrer"
              target="_blank"
            >
              Quiero empezar
            </Button>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

export default ProcessPage;
