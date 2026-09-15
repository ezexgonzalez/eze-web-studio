import { siteConfig } from "../data/siteConfig";
import { getContactUrls } from "../utils/contactUrls";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";

function ProcessPage() {
  const { contact, processPage } = siteConfig;
  const contactUrls = getContactUrls(contact);
  const { finalCta } = processPage;

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="absolute inset-x-8 top-28 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <PageHero eyebrow={processPage.eyebrow} title={processPage.title} description={processPage.description} layout="split" />
        </Reveal>

        <ol className="relative mt-12 border-l border-white/[0.12] pl-7 sm:mt-16 sm:pl-10 lg:pl-14">
          {processPage.steps.map((step, index) => (
            <Reveal as="li" className="relative grid gap-3 pb-10 last:pb-0 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-8" delay={index * 70} key={step.title}>
              <span aria-hidden="true" className="absolute -left-[2.1rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-cyan-300/70 bg-black sm:-left-[3.15rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </span>
              <span className="text-xs font-semibold tracking-[0.14em] text-cyan-200/90">{String(index + 1).padStart(2, "0")}</span>
              <div className="max-w-2xl">
                <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.1] pt-7 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-base leading-7 text-slate-200">{finalCta.text}</p>
            <Button as="a" href={contactUrls.whatsapp} className="w-full md:w-auto" rel="noreferrer" target="_blank">{finalCta.buttonLabel}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ProcessPage;
