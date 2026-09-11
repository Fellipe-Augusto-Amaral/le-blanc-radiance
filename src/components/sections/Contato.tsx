import { Clock, Instagram, MapPin, MessageCircle, Navigation } from "lucide-react";
import { mensagemPadrao, site, whatsappLink } from "@/config/site";
import { Formulario } from "../Formulario";
import { Reveal } from "../Reveal";

export function Contato() {
  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />
            Localização e contato
          </span>
          <h2 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Estamos em Curitiba para receber você
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl text-foreground">{site.nome}</h3>
                <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin size={17} strokeWidth={1.4} className="mt-0.5 text-gold" />
                    {site.endereco}
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle size={17} strokeWidth={1.4} className="mt-0.5 text-gold" />
                    WhatsApp: {site.whatsappExibicao}
                  </li>
                  <li className="flex items-start gap-3">
                    <Instagram size={17} strokeWidth={1.4} className="mt-0.5 text-gold" />
                    Instagram: {site.instagramHandle}
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={17} strokeWidth={1.4} className="mt-0.5 text-gold" />
                    {site.avisoHorario}
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={site.mapaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline !min-h-0 gap-2 !px-6 !py-3.5 !text-[0.72rem]"
                >
                  <Navigation size={14} strokeWidth={1.5} /> Abrir no mapa
                </a>
                <a
                  href={whatsappLink(mensagemPadrao)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary !min-h-0 gap-2 !px-6 !py-3.5 !text-[0.72rem]"
                >
                  <MessageCircle size={14} strokeWidth={1.5} /> Falar pelo WhatsApp
                </a>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline !min-h-0 gap-2 !px-6 !py-3.5 !text-[0.72rem]"
                >
                  <Instagram size={14} strokeWidth={1.5} /> Visitar Instagram
                </a>
              </div>

              {/* Confirmar a localização exata com a clínica antes de publicar. */}
              <div className="overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Mapa com a localização da Clínica Le Blanc Concept"
                  src={site.mapaEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Confirme o ponto exato do mapa com a clínica antes da publicação.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Formulario />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
