import { MessageCircle } from "lucide-react";
import { mensagemPadrao, whatsappLink } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(mensagemPadrao)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle size={22} strokeWidth={1.5} />
    </a>
  );
}
