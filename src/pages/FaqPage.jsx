import { siteConfig } from "../data/siteConfig";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";

function FaqPage() {
  const { faqPage } = siteConfig;

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="absolute inset-x-8 top-28 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.12] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <Reveal className="max-w-xl">
          <PageHero eyebrow={faqPage.eyebrow} title={faqPage.title} description={faqPage.description} />
        </Reveal>

        <div className="border-t border-white/[0.1]">
          {faqPage.items.map((item, index) => (
            <Reveal delay={index * 55} key={item.question}>
              <details className="group border-b border-white/[0.1] py-5 sm:py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold leading-6 text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-xl font-normal text-cyan-200 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
