export const siteConfig = {
  name: "Héstia",
  tagline: "Centro de Estudos Junguianos",
  description:
    "Espaço dedicado ao estudo da psicologia analítica de Carl Gustav Jung — cursos, supervisão, artigos e encontros para quem busca compreender a alma humana.",
  url: "https://hestia.org.br",
  whatsapp: {
    number: "5511999999999",
    message: "Olá! Gostaria de saber mais sobre o Centro Héstia.",
  },
  email: "contato@hestia.org.br",
  address: "São Paulo, SP — Brasil",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/professores", label: "Professores" },
  { href: "/cursos-e-eventos", label: "Cursos e eventos" },
  { href: "/artigos", label: "Artigos" },
  { href: "/contatos", label: "Contatos" },
] as const;
