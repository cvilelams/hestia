export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "o-que-e-individuacao",
    title: "O que é individuação?",
    excerpt:
      "Individuação não é individualismo — é o processo pelo qual a pessoa se torna aquilo que realmente é, integrando consciente e inconsciente.",
    author: "Dra. Marina Costa",
    publishedAt: "2026-02-10",
    category: "Conceitos",
    readTime: "6 min",
    content: [
      "Para Jung, individuação é o processo central da vida psíquica: tornar-se inteiro, único e em relação consigo mesma e com o mundo. Não se trata de isolamento, mas de um caminho de autoconhecimento que inclui sombra, anima/animus e a busca do Self.",
      "O caminho da individuação aparece nos sonhos, nas sincronicidades e nas crises que convidam à transformação. É um processo lento, profundo e profundamente pessoal — mas que dialoga com arquétipos universais compartilhados pela humanidade.",
      "No Centro Héstia, compreendemos a individuação como prática viva: estudada, discutida e vivida em cursos, supervisão e grupos de estudo.",
    ],
  },
  {
    slug: "a-sombra-jung",
    title: "A sombra: o que Jung nos ensina sobre o que negamos",
    excerpt:
      "Tudo o que recusamos reconhecer em nós mesmos não desaparece — vai para a sombra. Compreender isso é o primeiro passo para a integração.",
    author: "Dr. Ricardo Mendes",
    publishedAt: "2026-01-22",
    category: "Conceitos",
    readTime: "8 min",
    content: [
      "A sombra, na psicologia analítica, reúne tudo aquilo que a consciência rejeita: impulsos, desejos, qualidades e potenciais que não encaixam na imagem que temos de nós.",
      "Jung alertava que a sombra não é apenas 'má' — ela também contém aspectos positivos não desenvolvidos. Projetar a sombra nos outros é um mecanismo comum: vemos no outro aquilo que não queremos ver em nós.",
      "O trabalho com a sombra pede honestidade, compaixão e coragem simbólica. Não se trata de 'eliminar' partes de nós, mas de reconhecê-las e integrá-las conscientemente.",
    ],
  },
  {
    slug: "mandala-e-totalidade",
    title: "Mandala e a busca da totalidade",
    excerpt:
      "Jung desenhou centenas de mandalas durante sua crise pessoal. Para ele, o círculo era imagem do Self — centro e totalidade.",
    author: "Ana Lúcia Ferreira",
    publishedAt: "2025-12-05",
    category: "Simbolismo",
    readTime: "5 min",
    content: [
      "A palavra mandala, do sânscrito, significa 'círculo'. Jung a adotou como símbolo da totalidade psíquica — o Self como centro organizador da personalidade.",
      "Durante o período em que escreveu o Liber Novus, Jung produziu mandalas diariamente. Ele os via como expressões espontâneas do inconsciente, apontando para um centro que unifica opostos.",
      "No Héstia, a mandala não é ornamento esotérico: é lembrança de que o caminho junguiano busca integração — não fragmentação.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
