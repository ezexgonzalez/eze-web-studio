import { Link } from "react-router-dom";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

function FaqPreviewSection() {
  return (
    <section className="bg-black px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <Reveal className="mx-auto w-full max-w-7xl">
        <GlassCard className="relative overflow-hidden p-5 sm:p-6 lg:p-7">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

          <div className="relative grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="text-xl font-semibold tracking-[-0.015em] text-slate-50 sm:text-2xl">
                ¿Tenés dudas antes de consultar?
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Revisá respuestas sobre dominio, tiempos, contenido, cambios y
                funcionamiento en celular.
              </p>
            </div>

            <Button
              as={Link}
              to="/faq"
              variant="secondary"
              className="w-full md:w-auto"
            >
              Ver preguntas frecuentes
            </Button>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}

export default FaqPreviewSection;
