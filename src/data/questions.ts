export type Question = {
  topic: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export const questions: Question[] = [
  // Endocrinología
  {
    topic: "Endocrinología",
    question: "¿Cuál es la prueba de tamizaje inicial para disfunción tiroidea en adultos asintomáticos?",
    options: ["T4 libre", "TSH ultrasensible", "T3 total", "Anticuerpos anti-TPO"],
    correct: 1,
    explanation: "La TSH ultrasensible es el marcador más sensible del eje tiroideo y la prueba de elección para tamizaje.",
  },
  {
    topic: "Endocrinología",
    question: "En acromegalia, la prueba confirmatoria es:",
    options: ["IGF-1 elevado aislado", "GH basal > 5 ng/mL", "Falta de supresión de GH tras carga oral de glucosa", "Prolactina elevada"],
    correct: 2,
    explanation: "El test de supresión con 75 g de glucosa: GH que no suprime <1 ng/mL confirma acromegalia.",
  },
  // Hígado
  {
    topic: "Función Hepática",
    question: "Un patrón con AST/ALT > 2 sugiere fuertemente:",
    options: ["Hepatitis viral aguda", "Hepatopatía alcohólica", "Colestasis extrahepática", "Hígado graso no alcohólico"],
    correct: 1,
    explanation: "El cociente De Ritis >2 es característico de daño hepático alcohólico por déficit de piridoxal-5-fosfato.",
  },
  {
    topic: "Función Hepática",
    question: "El mejor marcador de síntesis hepática aguda es:",
    options: ["Albúmina", "Tiempo de protrombina (INR)", "Bilirrubina total", "Gamma-GT"],
    correct: 1,
    explanation: "Por la vida media corta del factor VII (~6 h), el TP/INR refleja síntesis hepática aguda.",
  },
  // IAM
  {
    topic: "IAM",
    question: "El biomarcador de elección para diagnóstico de IAM es:",
    options: ["CK total", "Mioglobina", "Troponina cardíaca de alta sensibilidad", "LDH"],
    correct: 2,
    explanation: "La troponina cardíaca (cTnI/cTnT) hs es el estándar por su alta especificidad miocárdica.",
  },
  {
    topic: "IAM",
    question: "La troponina comienza a elevarse tras el inicio de los síntomas aproximadamente a las:",
    options: ["30 minutos", "3–4 horas", "12 horas", "24 horas"],
    correct: 1,
    explanation: "Se eleva a las 3–4 h, pico 12–24 h y persiste 7–14 días.",
  },
  // Marcadores tumorales
  {
    topic: "Marcadores Tumorales",
    question: "El marcador tumoral de seguimiento del cáncer colorrectal es:",
    options: ["CA 19-9", "AFP", "CEA", "CA 125"],
    correct: 2,
    explanation: "El CEA es el marcador estándar para seguimiento postquirúrgico del CCR.",
  },
  {
    topic: "Marcadores Tumorales",
    question: "AFP elevada sugiere principalmente:",
    options: ["Cáncer de mama", "Hepatocarcinoma y tumor germinal no seminomatoso", "Cáncer gástrico", "Cáncer de próstata"],
    correct: 1,
    explanation: "AFP es marcador de hepatocarcinoma y de tumores germinales no seminomatosos.",
  },
  // Hormonas sexuales
  {
    topic: "Hormonas Sexuales",
    question: "La β-hCG se duplica en embarazo normal cada:",
    options: ["12 horas", "48–72 horas", "1 semana", "2 semanas"],
    correct: 1,
    explanation: "Tiempo de duplicación de 48–72 h en las primeras 6 semanas de gestación.",
  },
  // Diabetes
  {
    topic: "Diabetes",
    question: "Según ADA, ¿cuál criterio diagnostica diabetes?",
    options: ["Glucosa en ayuno ≥110 mg/dL", "HbA1c ≥6.5%", "Glucosa 2 h postcarga ≥140 mg/dL", "Glucosa al azar ≥160 mg/dL"],
    correct: 1,
    explanation: "ADA: HbA1c ≥6.5%, GA ≥126, PTOG 2h ≥200 o glucemia al azar ≥200 con síntomas.",
  },
  {
    topic: "Diabetes",
    question: "El tamizaje de diabetes gestacional (ACOG) se realiza entre las semanas:",
    options: ["12–16", "20–24", "24–28", "32–36"],
    correct: 2,
    explanation: "Tamizaje universal entre 24–28 semanas con test de O'Sullivan (50 g).",
  },
  // Renal
  {
    topic: "Renal",
    question: "Una FENa < 1% en falla renal aguda sugiere:",
    options: ["Necrosis tubular aguda", "Causa prerrenal", "Glomerulonefritis", "Obstrucción"],
    correct: 1,
    explanation: "FENa <1% = causa prerrenal (riñón retiene sodio); >2% sugiere NTA.",
  },
  {
    topic: "Renal",
    question: "Cilindros granulosos 'sucios' en sedimento urinario son típicos de:",
    options: ["Pielonefritis", "Necrosis tubular aguda", "Glomerulonefritis", "Causa prerrenal"],
    correct: 1,
    explanation: "Los cilindros granulosos pigmentados ('muddy brown') son característicos de NTA.",
  },
  // Pancreatitis
  {
    topic: "Pancreatitis",
    question: "Según los criterios de Atlanta, para diagnosticar pancreatitis aguda se requieren al menos:",
    options: ["1 de 3 criterios", "2 de 3 criterios", "Los 3 criterios", "Solo imagen"],
    correct: 1,
    explanation: "Atlanta: dolor típico + lipasa/amilasa ≥3× LSN + imagen compatible (2 de 3).",
  },
  {
    topic: "Pancreatitis",
    question: "Comparada con la amilasa, la lipasa es:",
    options: ["Menos sensible", "Menos específica", "Más sensible y específica, persiste más tiempo", "Igual de útil"],
    correct: 2,
    explanation: "La lipasa es más sensible y específica y permanece elevada hasta 8–14 días.",
  },
  // Lípidos
  {
    topic: "Lípidos",
    question: "La hiperlipidemia tipo IIa de Fredrickson se caracteriza por aumento de:",
    options: ["Quilomicrones", "LDL aislado", "VLDL", "VLDL + quilomicrones"],
    correct: 1,
    explanation: "Tipo IIa: hipercolesterolemia familiar, LDL elevado aislado.",
  },
  {
    topic: "Lípidos",
    question: "El valor deseable de LDL en paciente de muy alto riesgo CV es:",
    options: ["< 160 mg/dL", "< 130 mg/dL", "< 100 mg/dL", "< 55 mg/dL"],
    correct: 3,
    explanation: "Guías ESC/AHA: LDL <55 mg/dL en muy alto riesgo cardiovascular.",
  },
];
