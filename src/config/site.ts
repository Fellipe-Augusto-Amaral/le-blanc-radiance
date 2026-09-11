// Informações de contato centralizadas — altere apenas aqui.
export const site = {
  nome: "Clínica Le Blanc Concept",
  nomeCurto: "Le Blanc Concept",
  profissional: "Dra. Ângela Collet",
  endereco: "Rua 24 de Maio, 2027 – Curitiba – PR",
  cidade: "Curitiba – PR",
  whatsappNumero: "5541987035188",
  whatsappExibicao: "(41) 98703-5188",
  instagramUrl: "https://www.instagram.com/leblanc.concept/",
  instagramHandle: "@leblanc.concept",
  mapaUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+24+de+Maio%2C+2027+-+Curitiba+-+PR",
  mapaEmbedUrl:
    "https://www.google.com/maps?q=Rua%2024%20de%20Maio%2C%202027%20-%20Curitiba%20-%20PR&output=embed",
  avisoHorario:
    "Atendimento com horário agendado. Consulte a disponibilidade pelo WhatsApp.",
} as const;

export function whatsappLink(mensagem: string) {
  return `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagemPadrao =
  "Olá! Conheci a Le Blanc Concept pelo site e gostaria de agendar uma avaliação.";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A clínica", href: "#clinica" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export const procedimentos = [
  {
    nome: "Harmonização facial",
    icone: "Sparkles",
    descricao:
      "Procedimentos personalizados para equilibrar e valorizar os traços do rosto, sempre buscando um resultado natural.",
  },
  {
    nome: "Nanobrows",
    icone: "Feather",
    descricao:
      "Técnica de nanopigmentação de sobrancelhas desenvolvida para proporcionar definição e aparência delicada.",
  },
  {
    nome: "Nanolips",
    icone: "Heart",
    descricao:
      "Procedimento pensado para realçar o contorno e a tonalidade natural dos lábios sem produzir um efeito artificial.",
  },
  {
    nome: "Nanoeyes",
    icone: "Eye",
    descricao:
      "Procedimento de nanopigmentação voltado à valorização delicada do olhar.",
  },
  {
    nome: "Micropigmentação",
    icone: "PenTool",
    descricao:
      "Procedimentos personalizados para realçar sobrancelhas, lábios e olhos de acordo com as características de cada cliente.",
  },
  {
    nome: "Remoção de micropigmentação a laser",
    icone: "Wand2",
    descricao:
      "Tratamento para remoção ou clareamento de pigmentações antigas, realizado após avaliação individual.",
  },
  {
    nome: "Estética facial avançada",
    icone: "Flower2",
    descricao:
      "Cuidados e procedimentos personalizados para melhorar a aparência e a qualidade da pele.",
  },
] as const;
