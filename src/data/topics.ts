export type Topic = {
  slug: string;
  title: string;
  short: string;
  emoji: string;
  description: string;
  file: string;
  accent: "gold" | "teal" | "alert" | "ink";
};

export const topics: Topic[] = [
  {
    slug: "endocrinologia",
    title: "Endocrinología",
    short: "Tiroides · Prolactinoma · Acromegalia",
    emoji: "🧠",
    description: "Función endócrina, eje hipotálamo-hipofisario y patología tiroidea.",
    file: "/topics/endocrinologia.html",
    accent: "gold",
  },
  {
    slug: "higado",
    title: "Función Hepática",
    short: "Enzimas · Pruebas de síntesis",
    emoji: "🧪",
    description: "Patrones bioquímicos: citólisis, colestasis y síntesis hepática.",
    file: "/topics/higado.html",
    accent: "teal",
  },
  {
    slug: "iam",
    title: "Infarto Agudo de Miocardio",
    short: "Biomarcadores · Troponinas",
    emoji: "❤️",
    description: "Diagnóstico de laboratorio del IAM y curvas de troponina.",
    file: "/topics/iam.html",
    accent: "alert",
  },
  {
    slug: "marcadores-tumorales",
    title: "Marcadores Tumorales",
    short: "Biopsia líquida · Seguimiento",
    emoji: "🔬",
    description: "Indicaciones, sensibilidad y limitaciones de los marcadores.",
    file: "/topics/marcadores-tumorales.html",
    accent: "ink",
  },
  {
    slug: "sexuales",
    title: "Hormonas Sexuales",
    short: "Embarazo · Infertilidad · Amenorrea",
    emoji: "🤰",
    description: "Eje gonadal, β-hCG, evaluación de la pareja infértil.",
    file: "/topics/sexuales.html",
    accent: "gold",
  },
  {
    slug: "diabetes",
    title: "Diabetes Mellitus",
    short: "ADA · Tamizaje ACOG",
    emoji: "🍬",
    description: "Diagnóstico, HbA1c, criterios ADA y tamizaje en embarazo.",
    file: "/topics/diabetes.html",
    accent: "teal",
  },
  {
    slug: "renal",
    title: "Función Renal",
    short: "Creatinina · TFG · Sedimento",
    emoji: "💧",
    description: "Depuración, FENa e interpretación del sedimento urinario.",
    file: "/topics/renal.html",
    accent: "teal",
  },
  {
    slug: "pancreatitis",
    title: "Enzimas Pancreáticas",
    short: "Atlanta · Lipasa vs Amilasa",
    emoji: "🍳",
    description: "Pancreatitis aguda y crónica, criterios y severidad.",
    file: "/topics/pancreatitis.html",
    accent: "alert",
  },
  {
    slug: "lipidos",
    title: "Perfil de Lípidos",
    short: "Fredrickson · Riesgo CV",
    emoji: "🩸",
    description: "Dislipidemias, valores deseables y estratificación CV.",
    file: "/topics/lipidos.html",
    accent: "alert",
  },
];
