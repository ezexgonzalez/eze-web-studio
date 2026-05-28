import { siteConfig } from "../data/siteConfig";
import GlassCard from "../components/ui/GlassCard";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";

function FaqPage() {
  const { faqPage } = siteConfig;

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.075),transparent_28%),linear-gradient(180deg,#000000_0%,#02040a_100%)]" />
      <div className="absolute inset-x-8 top-28 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.12] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <Reveal className="max-w-xl">
          <PageHero
            eyebrow={faqPage.eyebrow}
            title={faqPage.title}
            description={faqPage.description}
          />
        </Reveal>

        <div className="grid gap-3">
          {faqPage.items.map((item, index) => (
            <Reveal
              delay={index * 55}
              key={item.question}
            >
              <GlassCard className="p-5 transition-[border-color,background-color,box-shadow] duration-300 ease-out hover:border-cyan-300/[0.2] hover:bg-white/[0.048] sm:p-6">
                <h2 className="text-base font-semibold leading-6 text-slate-50">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  {item.answer}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
