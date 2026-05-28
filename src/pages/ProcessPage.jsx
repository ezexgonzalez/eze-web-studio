import { siteConfig } from "../data/siteConfig";
import { getContactUrls } from "../utils/contactUrls";
import Button from "../components/ui/Button";
import GlassCard from "../components/ui/GlassCard";
import InfoCallout from "../components/ui/InfoCallout";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";

function ProcessPage() {
  const { contact, processPage } = siteConfig;
  const contactUrls = getContactUrls(contact);
  const { finalCta } = processPage;

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_18%,rgba(34,211,238,0.08),transparent_28%),linear-gradient(180deg,#000000_0%,#02040a_100%)]" />
      <div className="absolute inset-x-8 top-28 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <PageHero
            eyebrow={processPage.eyebrow}
            title={processPage.title}
            description={processPage.description}
            layout="split"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {processPage.steps.map((step, index) => (
            <Reveal className="h-full" delay={index * 70} key={step.title}>
              <GlassCard className="group relative overflow-hidden p-5 transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/[0.22] hover:bg-white/[0.048] sm:p-6">
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
          <InfoCallout className="mt-8 grid gap-5 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
            <p className="max-w-3xl text-base leading-7 text-slate-200">
              {finalCta.text}
            </p>
            <Button
              as="a"
              href={contactUrls.whatsapp}
              className="w-full md:w-auto"
              rel="noreferrer"
              target="_blank"
            >
              {finalCta.buttonLabel}
            </Button>
          </InfoCallout>
        </Reveal>
      </div>
    </section>
  );
}

export default ProcessPage;
