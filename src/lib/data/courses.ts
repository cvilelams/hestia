export type Course = {
  id: string;
  title: string;
  type: "curso" | "evento";
  format: "presencial" | "online" | "híbrido";
  date: string;
  duration: string;
  description: string;
  openForEnrollment: boolean;
};

export const courses: Course[] = [
  {
    id: "intro-jung",
    title: "Introdução à Psicologia Analítica",
    type: "curso",
    format: "online",
    date: "Março 2026",
    duration: "8 encontros · 2h cada",
    description:
      "Um primeiro contato com os conceitos centrais de Jung: inconsciente, arquétipos, sombra e caminho de individuação.",
    openForEnrollment: true,
  },
  {
    id: "sonhos-simbolos",
    title: "Sonhos e Símbolos",
    type: "curso",
    format: "presencial",
    date: "Abril 2026",
    duration: "6 encontros · 3h cada",
    description:
      "Aprenda a escutar o inconsciente através dos sonhos — linguagem simbólica, amplificação e trabalho clínico.",
    openForEnrollment: true,
  },
  {
    id: "conferencia-individuacao",
    title: "Conferência: O Caminho da Individuação",
    type: "evento",
    format: "híbrido",
    date: "15 de maio de 2026",
    duration: "4 horas",
    description:
      "Palestra aberta com convidado internacional sobre o processo de individuação na contemporaneidade.",
    openForEnrollment: true,
  },
  {
    id: "grupo-estudo-vermelho",
    title: "Grupo de Estudo — O Livro Vermelho",
    type: "curso",
    format: "online",
    date: "Inscrições abertas",
    duration: "Encontros quinzenais",
    description:
      "Leitura comentada do Liber Novus de Jung, explorando imaginação, fantasia e experiência do Self.",
    openForEnrollment: false,
  },
];
