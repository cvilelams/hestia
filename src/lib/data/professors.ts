export type Professor = {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
};

export const professors: Professor[] = [
  {
    id: "marina-costa",
    name: "Dra. Marina Costa",
    role: "Psicóloga analítica · Diretora pedagógica",
    bio: "Formada pelo C.G. Jung Institute de Zurique. Dedica-se ao ensino de psicologia analítica e à supervisão clínica há mais de 15 anos.",
    specialties: ["Individuação", "Sombra", "Supervisão clínica"],
  },
  {
    id: "ricardo-mendes",
    name: "Dr. Ricardo Mendes",
    role: "Psicólogo analítico · Professor",
    bio: "Pesquisador de mitologia comparada e arquétipos. Coordena os grupos de estudo sobre obras fundamentais de Jung.",
    specialties: ["Arquétipos", "Mitologia", "Imaginação ativa"],
  },
  {
    id: "ana-lucia-ferreira",
    name: "Ana Lúcia Ferreira",
    role: "Psicóloga junguiana · Professora convidada",
    bio: "Especialista em sonhos e simbolismo. Ministra cursos introdutórios e workshops sobre leitura simbólica do inconsciente.",
    specialties: ["Sonhos", "Simbolismo", "Introdução a Jung"],
  },
];
