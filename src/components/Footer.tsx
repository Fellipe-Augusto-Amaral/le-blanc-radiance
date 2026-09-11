import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { mensagemPadrao, navLinks, site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Logo size="footer" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Estética facial avançada, harmonização e nanopigmentação em Curitiba, com
            resultados naturais e atendimento individualizado.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="eyebrow">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Contato</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>{site.endereco}</li>
            <li>
              <a
                href={whatsappLink(mensagemPadrao)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <MessageCircle size={14} strokeWidth={1.5} /> {site.whatsappExibicao}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Instagram size={14} strokeWidth={1.5} /> {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Informações</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/privacidade" className="transition-colors hover:text-gold">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link to="/termos" className="transition-colors hover:text-gold">
                Termos de Uso
              </Link>
            </li>
            <li>{site.avisoHorario}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-10">
          © 2026 Clínica Le Blanc Concept. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
