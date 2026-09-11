import { MapPin } from "lucide-react";
import brandCover from "@/assets/brand/le-blanc-capa-oficial.png.asset.json";
import { mensagemPadrao, site, whatsappLink } from "@/config/site";
import { Reveal } from "../Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-sand blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <span className="eyebrow flex items-center gap-3">
              <span className="gold-rule" />
              Estética facial avançada
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[4.1rem]">
              Realce sua beleza com{" "}
              <em className="not-italic text-gold">naturalidade</em> e sofisticação
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Procedimentos faciais personalizados para valorizar os seus traços, respeitar
              a sua identidade e proporcionar resultados delicados e naturais.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink(mensagemPadrao)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary"
              >
                Agendar minha avaliação
              </a>
              <a href="#procedimentos" className="btn-base btn-outline">
                Conhecer os procedimentos
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={15} strokeWidth={1.5} className="text-gold" />
              Atendimento em {site.cidade}
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} animation="slide-right">
          <div className="relative mx-auto aspect-square w-full max-w-[30rem] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <img
              src={brandCover.url}
              alt="Le Blanc Concept - Nanopigmentação e Harmonização Facial"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
