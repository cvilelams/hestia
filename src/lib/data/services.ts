export type Service = {
  id: string;
  title: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    id: "cursos",
    title: "Cursos de formação",
    description:
      "Programas estruturados em psicologia analítica, do nível introdutório ao avançado.",
    details: [
      "Fundamentos de Jung",
      "Arquétipos e mitos",
      "Sombra e individuação",
    ],
  },
  {
    id: "supervisao",
    title: "Supervisão clínica",
    description:
      "Acompanhamento para psicólogos e profissionais que trabalham com a abordagem junguiana.",
    details: [
      "Casos clínicos",
      "Leitura simbólica",
      "Ética e prática analítica",
    ],
  },
  {
    id: "grupos",
    title: "Grupos de estudo",
    description:
      "Encontros regulares para leitura e discussão de obras fundamentais de Jung e autores junguianos.",
    details: [
      "Obras de Jung",
      "Autores contemporâneos",
      "Temas abertos",
    ],
  },
  {
    id: "palestras",
    title: "Palestras e eventos",
    description:
      "Conferências, workshops e encontros abertos sobre temas da psicologia analítica.",
    details: [
      "Eventos presenciais",
      "Encontros online",
      "Convidados nacionais e internacionais",
    ],
  },
];
