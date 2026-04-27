export type Question = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type TopicQuiz = {
  slug: string;
  questions: Question[];
};

// Banco basado en parciales de Patología Clínica (Ene–Jun 2025).
// Estilo: caso clínico breve + pregunta de opción múltiple.
export const quizzes: Record<string, Question[]> = {
  endocrinologia: [
    {
      question:
        "Hombre de 33 años acude por cefalea persistente, infertilidad y disfunción eréctil de 8 meses de evolución. Campimetría con hemianopsia bitemporal incipiente. ¿Cuál es el diagnóstico más probable?",
      options: ["Acromegalia", "Prolactinoma", "Síndrome de Cushing", "Hipotiroidismo primario"],
      correct: 1,
      explanation:
        "La tríada cefalea + hipogonadismo (disfunción eréctil/infertilidad) + alteración campimétrica orienta a un adenoma hipofisario productor de prolactina (prolactinoma).",
    },
    {
      question:
        "Mujer de 42 años con manos y pies aumentados de tamaño, prognatismo y diaforesis. ¿Cuál es el estudio inicial de elección para sospecha de acromegalia?",
      options: [
        "GH basal aislada",
        "Cuantificación de IGF-1 sérica",
        "Resonancia de silla turca",
        "Prueba de supresión con dexametasona",
      ],
      correct: 1,
      explanation:
        "El estudio inicial es IGF-1 sérica (refleja la GH integrada en 24 h). La confirmación es la falta de supresión de GH tras carga de glucosa.",
    },
    {
      question:
        "Mujer de 38 años con pérdida de peso, palpitaciones, exoftalmos y temblor fino. ¿Qué patrón de perfil tiroideo esperarías encontrar?",
      options: [
        "TSH elevada, T3 y T4 disminuidas",
        "TSH disminuida, T3 y T4 aumentadas",
        "TSH normal, T4 elevada aislada",
        "TSH y T4 elevadas",
      ],
      correct: 1,
      explanation:
        "Enfermedad de Graves (hipertiroidismo primario): TSH suprimida con T3 y T4 elevadas por estímulo de TRAb sobre el receptor de TSH.",
    },
    {
      question:
        "Paciente con prolactina sérica de 612 ng/mL. ¿Qué hallazgo confirma macroprolactinoma?",
      options: ["Prolactina > 100 ng/mL", "Prolactina > 200 ng/mL", "Prolactina > 500 ng/mL", "Cualquier valor con galactorrea"],
      correct: 2,
      explanation: "Valores >500 ng/mL son altamente sugestivos de macroprolactinoma (>10 mm).",
    },
  ],

  higado: [
    {
      question:
        "Paciente con AST 180, ALT 60, FA 140, GGT 220. Calcula el patrón con el valor R = (ALT/LSN) ÷ (FA/LSN). Si R = 12.18, ¿qué patrón de daño indica?",
      options: ["Colestásico", "Hepatocelular (hepático)", "Mixto", "Sin daño hepático"],
      correct: 1,
      explanation:
        "R > 5 = patrón hepatocelular; 2–5 mixto; <2 colestásico. Un R de 12.18 indica daño claramente hepatocelular.",
    },
    {
      question:
        "Mujer postmenopáusica con dolor óseo difuso. Laboratorio: FA 380 U/L, GGT normal, bilirrubina normal. ¿Qué sugiere?",
      options: [
        "Colestasis intrahepática",
        "Coledocolitiasis",
        "Enfermedad ósea (no hepática)",
        "Hepatitis viral aguda",
      ],
      correct: 2,
      explanation:
        "FA elevada con GGT normal descarta origen hepatobiliar y orienta a origen óseo (Paget, metástasis óseas, etc.).",
    },
    {
      question: "¿Cuál es considerado el marcador bioquímico de la función de desintoxicación hepática?",
      options: ["Albúmina", "Tiempo de protrombina", "Bilirrubina", "Colinesterasa"],
      correct: 2,
      explanation:
        "La bilirrubina (conjugación y excreción) es el marcador clásico de la función de desintoxicación del hepatocito.",
    },
  ],

  iam: [
    {
      question:
        "Hombre de 58 años con dolor opresivo retroesternal de 2 h. ECG con elevación del ST en cara inferior. ¿Cuántas horas tarda la CPK-MB en alcanzar su pico máximo en circulación?",
      options: ["6 horas", "12 horas", "24 horas", "72 horas"],
      correct: 2,
      explanation:
        "La CPK total/MB inicia su elevación a las 4–6 h, alcanza pico a las 24 h y se normaliza en 48–72 h.",
    },
    {
      question:
        "Paciente con disnea súbita, edema de miembros inferiores y crepitantes bilaterales. ¿Qué afirmación sobre el BNP es correcta?",
      options: [
        "Disminuye en falla cardíaca por sobrecarga de volumen",
        "Se eleva exclusivamente en IAM",
        "Incrementa cuando se presenta falla cardíaca por sobrecarga de volumen",
        "Es específico de pericarditis",
      ],
      correct: 2,
      explanation:
        "El BNP se libera por los miocitos ventriculares ante distensión por sobrecarga de volumen/presión, elevándose en falla cardíaca.",
    },
    {
      question:
        "Mujer de 65 años con dolor torácico de 4 h. Troponina hs positiva. ¿Cuál es el biomarcador de elección por su especificidad miocárdica?",
      options: ["Mioglobina", "CPK total", "Troponina cardíaca de alta sensibilidad", "LDH"],
      correct: 2,
      explanation:
        "La troponina cardíaca hs (cTnI/cTnT) es el estándar diagnóstico por su alta sensibilidad y especificidad miocárdica.",
    },
  ],

  "marcadores-tumorales": [
    {
      question:
        "Mujer de 55 años con antecedente de cáncer de mama operado hace 2 años. ¿Qué marcador tumoral es el indicado para monitoreo y valoración del riesgo de recurrencia?",
      options: ["CEA", "CA 125", "CA 15-3", "AFP"],
      correct: 2,
      explanation:
        "El CA 15-3 es el marcador estándar para seguimiento postratamiento y vigilancia de recurrencia en carcinoma mamario.",
    },
    {
      question:
        "Paciente con ictericia indolora, pérdida de peso y masa en cabeza pancreática por TAC. ¿Qué marcador tumoral esperarías encontrar elevado?",
      options: ["CEA", "CA 19-9", "AFP", "PSA"],
      correct: 1,
      explanation:
        "El CA 19-9 es el marcador clásico del adenocarcinoma de páncreas y vías biliares.",
    },
    {
      question:
        "Paciente cirrótico con nódulo hepático de 3 cm. ¿Cuál marcador es útil para manejo y pronóstico de hepatocarcinoma y hepatoblastoma?",
      options: ["CEA", "Alfa-fetoproteína (AFP)", "CA 125", "β-hCG"],
      correct: 1,
      explanation:
        "La AFP es el marcador de hepatocarcinoma y hepatoblastoma (también de tumores germinales no seminomatosos).",
    },
    {
      question:
        "¿En cuál de los siguientes escenarios podrías encontrar elevación del CA 19-9?",
      options: [
        "Tumor pancreático",
        "Tumor de vías biliares",
        "Tumor esofágico",
        "Todas las anteriores",
      ],
      correct: 3,
      explanation:
        "El CA 19-9 puede elevarse en neoplasias de páncreas, vías biliares y esófago, además de causas benignas (colestasis).",
    },
  ],

  sexuales: [
    {
      question:
        "Mujer de 39 años con amenorrea de 8 meses, bochornos y dispareunia. Laboratorio: FSH elevada, estradiol disminuido. ¿Cuál es el diagnóstico?",
      options: [
        "Síndrome de ovario poliquístico",
        "Insuficiencia ovárica primaria",
        "Hiperprolactinemia",
        "Embarazo",
      ],
      correct: 1,
      explanation:
        "FSH alta + estradiol bajo = falla gonadal primaria (insuficiencia ovárica), por pérdida de retroalimentación negativa.",
    },
    {
      question:
        "Pareja en evaluación por infertilidad. ¿Cuál hormona es un estimulante temprano para identificar reserva ovárica disminuida?",
      options: ["FSH día 3", "Estradiol", "AMH (Hormona Antimülleriana)", "Progesterona día 21"],
      correct: 2,
      explanation:
        "La AMH refleja el pool de folículos antrales y es el marcador más temprano y estable de reserva ovárica.",
    },
    {
      question:
        "Mujer con ciclos regulares de 28 días. ¿Qué hormona presenta elevación característica entre los días 21 y 23 del ciclo?",
      options: ["FSH", "LH", "Estradiol", "Progesterona"],
      correct: 3,
      explanation:
        "La progesterona se eleva en fase lútea (día 21–23), confirmando ovulación.",
    },
    {
      question: "¿A qué etiología corresponde aproximadamente el 20% de las causas de infertilidad femenina?",
      options: ["Factor tubárico", "Alteraciones ováricas", "Factor cervical", "Endometriosis"],
      correct: 1,
      explanation:
        "Las alteraciones ováricas (anovulación, baja reserva) representan ~20% de las causas de infertilidad femenina.",
    },
  ],

  diabetes: [
    {
      question:
        "Niño de 10 años, IMC en p95, acantosis nigricans. ¿Cuál es un factor de riesgo válido para realizar tamizaje de diabetes en pediatría?",
      options: [
        "Familiar de 1er o 2do grado con DM",
        "Ser zurdo",
        "Vivir en altura",
        "Antecedente de varicela",
      ],
      correct: 0,
      explanation:
        "Tener familiar de 1er o 2do grado con DM es un criterio aceptado para tamizaje pediátrico, junto con sobrepeso y signos de resistencia insulínica.",
    },
    {
      question:
        "Paciente adulto con DM2 bien controlada. Según la ADA, ¿cuál es el valor objetivo ideal de HbA1c?",
      options: ["< 6%", "< 7%", "< 8%", "< 9%"],
      correct: 1,
      explanation:
        "ADA: meta general en DM2 bien controlada < 7%. Puede individualizarse (<6.5% en jóvenes sin comorbilidad, <8% en frágiles).",
    },
    {
      question:
        "Embarazada de 26 SDG sin antecedentes. Test O'Sullivan con 50 g: glucosa 1 h = 165 mg/dL. ¿Qué corresponde según ACOG?",
      options: [
        "Diagnóstico inmediato de diabetes gestacional",
        "Repetir HbA1c",
        "Realizar curva de tolerancia con 100 g, 3 h",
        "Observación sin más estudios",
      ],
      correct: 2,
      explanation:
        "ACOG: O'Sullivan ≥140 mg/dL obliga a curva diagnóstica con 100 g a 3 h (criterios de Carpenter-Coustan).",
    },
    {
      question:
        "¿Cuál de los siguientes forma parte de los parámetros diagnósticos de prediabetes según ADA?",
      options: [
        "Glucosa en ayuno 100–125 mg/dL",
        "Glucosa 2 h postcarga 140–199 mg/dL",
        "HbA1c 5.7–6.4%",
        "Todas las anteriores",
      ],
      correct: 3,
      explanation:
        "Prediabetes ADA: GA 100–125, PTOG 2h 140–199, o HbA1c 5.7–6.4%.",
    },
  ],

  renal: [
    {
      question:
        "Hombre de 70 años con deshidratación. Creatinina 2.4 mg/dL, BUN 60 mg/dL (relación BUN/Cr ≈ 25). ¿Cuál es la utilidad de este cociente?",
      options: [
        "Diferenciar causa prerrenal de intrínseca de IRA",
        "Estimar la TFG",
        "Diagnosticar acidosis tubular",
        "Evaluar proteinuria",
      ],
      correct: 0,
      explanation:
        "La relación BUN/Creatinina sérica >20 sugiere causa prerrenal; cercana a 10–15 orienta a daño intrínseco.",
    },
    {
      question:
        "Paciente con IRA. EGO con cilindros granulosos pigmentados ('muddy brown') en el sedimento. ¿Qué patología sugiere?",
      options: [
        "Glomerulonefritis",
        "Necrosis tubular aguda",
        "Causa prerrenal pura",
        "Pielonefritis",
      ],
      correct: 1,
      explanation:
        "Los cilindros granulosos pigmentados son característicos de necrosis tubular aguda.",
    },
    {
      question:
        "Hombre de 22 años con dolor lumbar súbito, falla renal y proteinuria > 3 g/24 h. Sedimento con cilindros eritrocitarios. ¿Causa más probable?",
      options: ["Pielonefritis", "Necrosis tubular aguda", "Glomerulonefritis", "Obstrucción ureteral"],
      correct: 2,
      explanation:
        "Cilindros eritrocitarios + proteinuria nefrótica + falla renal = síndrome nefrítico/glomerulonefritis.",
    },
    {
      question:
        "Paciente con IRA y FENa < 1%. ¿Qué causa orienta este hallazgo?",
      options: ["Necrosis tubular aguda", "Causa prerrenal", "Obstrucción", "Nefritis intersticial"],
      correct: 1,
      explanation:
        "FENa <1% = el riñón retiene sodio adecuadamente, típico de hipoperfusión (prerrenal).",
    },
    {
      question:
        "Realizas EGO con tira reactiva en paciente que toma 2 g de vitamina C diarios. ¿Qué efecto puede tener el ácido ascórbico sobre la prueba de glucosa?",
      options: [
        "Falso positivo de glucosa",
        "Falso negativo de glucosa",
        "No tiene efecto",
        "Falso positivo de cetonas",
      ],
      correct: 1,
      explanation:
        "El ácido ascórbico interfiere con la reacción de la glucosa-oxidasa de la tira, generando falsos negativos.",
    },
  ],

  pancreatitis: [
    {
      question:
        "Hombre de 45 años, alcohólico crónico, con dolor epigástrico irradiado en barra y vómito. ¿Qué marcador bioquímico tiene mayor relevancia diagnóstica en pancreatitis aguda de etiología alcohólica?",
      options: ["Amilasa", "Lipasa", "GGT", "PCR"],
      correct: 1,
      explanation:
        "La lipasa es más sensible y específica que la amilasa, especialmente en pancreatitis alcohólica donde la amilasa puede no elevarse significativamente.",
    },
    {
      question: "¿Cuál enunciado es correcto respecto al comportamiento cinético de la lipasa?",
      options: [
        "Se eleva en 30 minutos y normaliza en 6 horas",
        "Aumenta a las 4–8 h, pico ~24 h y vuelve a basal en 7–14 días",
        "Se mantiene elevada solo 48 horas",
        "Solo se eleva si hay necrosis pancreática",
      ],
      correct: 1,
      explanation:
        "La lipasa se eleva 4–8 h tras el inicio del cuadro, pico hacia las 24 h y normaliza entre 7 y 14 días.",
    },
    {
      question:
        "Paciente con pancreatitis crónica con sospecha de daño temprano por obstrucción de ductos internos. ¿Cuál es el estudio de imagen de elección?",
      options: [
        "TAC abdominal simple",
        "Ultrasonido abdominal",
        "Colangiopancreatografía por resonancia magnética (CPRM)",
        "Radiografía simple de abdomen",
      ],
      correct: 2,
      explanation:
        "La CPRM permite visualizar ductos pancreáticos pequeños sin radiación ni invasividad de la CPRE.",
    },
    {
      question:
        "Paciente con dolor abdominal y amilasa elevada. ¿Cuál puede generar un falso positivo de amilasa?",
      options: [
        "Parotiditis",
        "Macroamilasemia",
        "Insuficiencia renal",
        "Todas las anteriores",
      ],
      correct: 3,
      explanation:
        "La amilasa puede elevarse en parotiditis (isoenzima salival), macroamilasemia y en falla renal por disminución del aclaramiento.",
    },
  ],

  lipidos: [
    {
      question:
        "Hombre de 25 años con xantomas tendinosos, padre con IAM a los 38 años. LDL 280 mg/dL. ¿Cuál es la dislipidemia más probable y su mecanismo?",
      options: [
        "Hipertrigliceridemia familiar",
        "Hipercolesterolemia familiar (IIa) por mutación en LDLR",
        "Disbetalipoproteinemia (III)",
        "Hiperlipidemia mixta (IIb)",
      ],
      correct: 1,
      explanation:
        "Tipo IIa de Fredrickson: hipercolesterolemia familiar por mutación del receptor LDL (LDLR), con LDL muy elevado y antecedentes de cardiopatía precoz.",
    },
    {
      question:
        "Paciente masculino sin comorbilidades. Según guías, ¿a qué edad se inicia evaluación de riesgo para dislipidemias en hombres?",
      options: ["10 años", "20 años", "30 años", "40 años"],
      correct: 1,
      explanation:
        "Recomendación: tamizaje de perfil de lípidos en hombres a partir de los 20 años para estratificación de riesgo cardiovascular.",
    },
    {
      question:
        "Paciente con DM2, hipertensión y enfermedad coronaria establecida. ¿Cuál es la meta de LDL en muy alto riesgo cardiovascular según ESC?",
      options: ["< 130 mg/dL", "< 100 mg/dL", "< 70 mg/dL", "< 55 mg/dL"],
      correct: 3,
      explanation:
        "ESC 2019/AHA: pacientes en muy alto riesgo cardiovascular meta LDL <55 mg/dL y reducción ≥50% del basal.",
    },
  ],
};
