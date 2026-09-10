import { MapPin } from "lucide-react";
import brandCover from "@/assets/brand/le-blanc-capa.jpg.asset.json";
import { mensagemPadrao, site, whatsappLink } from "@/config/site";
import { Reveal } from "../Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-sand blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />
            Estética facial avançada
          </span>
          <h1 className="mt-7 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.9rem]">
            Realce sua beleza com{" "}
            <em className="not-italic text-gold">naturalidade</em> e sofisticação
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Procedimentos faciais personalizados para valorizar os seus traços, respeitar
            a sua identidade e proporcionar resultados delicados e naturais.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(mensagemPadrao)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              Agendar minha avaliação
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center justify-center rounded-full border border-primary/25 px-8 py-4 text-xs tracking-[0.2em] uppercase text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Conhecer os procedimentos
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={15} strokeWidth={1.5} className="text-gold" />
            Atendimento em {site.cidade}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute -inset-3 -z-10 border border-gold/30" />
            <div className="flex aspect-square items-center justify-center bg-card p-8 shadow-[var(--shadow-card)] sm:p-12">
              <img
                src={brandCover.url}
                width={150}
                height={150}
                alt="Le Blanc Concept — Nanopigmentação e Harmonização Facial"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
