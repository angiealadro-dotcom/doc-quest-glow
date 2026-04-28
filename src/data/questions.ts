export type Question = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

// Banco de casos clínicos por tema (15 c/u). Estilo: viñeta + opción múltiple + explicación.
export const quizzes: Record<string, Question[]> = {
  endocrinologia: [
    {
      question:
        "Hombre de 33 años con cefalea persistente, infertilidad y disfunción eréctil de 8 meses. Campimetría con hemianopsia bitemporal incipiente. ¿Diagnóstico más probable?",
      options: ["Acromegalia", "Prolactinoma", "Síndrome de Cushing", "Hipotiroidismo primario"],
      correct: 1,
      explanation:
        "Cefalea + hipogonadismo + alteración campimétrica = adenoma hipofisario productor de prolactina. La PRL >200 ng/mL es altamente sugestiva.",
    },
    {
      question:
        "Mujer de 42 años con manos y pies aumentados, prognatismo y diaforesis. ¿Estudio inicial de elección para sospecha de acromegalia?",
      options: [
        "GH basal aislada",
        "Cuantificación de IGF-1 sérica",
        "RMN de hipófisis",
        "Curva de tolerancia a glucosa con GH",
      ],
      correct: 1,
      explanation:
        "IGF-1 es el tamizaje inicial por su estabilidad. Si está elevada se confirma con CTOG suprimiendo GH.",
    },
    {
      question:
        "Mujer de 28 años con pérdida de peso, palpitaciones, exoftalmos y bocio difuso. TSH suprimida, T4L elevada. ¿Causa más probable?",
      options: ["Tiroiditis de Hashimoto", "Enfermedad de Graves", "Bocio multinodular tóxico", "Tiroiditis subaguda"],
      correct: 1,
      explanation:
        "La oftalmopatía + bocio difuso + hipertiroidismo bioquímico es típico de Graves (anticuerpos TRAb positivos).",
    },
    {
      question:
        "Paciente con TSH 12 mUI/L, T4L normal, asintomática. ¿Conducta más adecuada?",
      options: [
        "Iniciar levotiroxina inmediatamente",
        "Repetir TSH y T4L en 6-8 semanas y solicitar anti-TPO",
        "Solicitar gammagrama tiroideo",
        "Iniciar metimazol",
      ],
      correct: 1,
      explanation:
        "Hipotiroidismo subclínico: confirmar con segunda determinación y autoanticuerpos (anti-TPO) antes de tratar.",
    },
    {
      question:
        "Mujer de 35 años con galactorrea, amenorrea y PRL 145 ng/mL. ¿Causa fisiológica/farmacológica que se debe descartar primero?",
      options: ["Hipotiroidismo y uso de neurolépticos", "Síndrome de Cushing", "Insuficiencia suprarrenal", "Acromegalia"],
      correct: 0,
      explanation:
        "Hipotiroidismo primario y antagonistas dopaminérgicos (metoclopramida, risperidona) elevan PRL. Descartar antes de imagen.",
    },
    {
      question:
        "Paciente con obesidad central, estrías violáceas, HTA y debilidad proximal. ¿Prueba de tamizaje inicial para Cushing?",
      options: [
        "Cortisol matutino aislado",
        "ACTH plasmática",
        "Cortisol salival nocturno o supresión con 1 mg de dexametasona",
        "RMN suprarrenal",
      ],
      correct: 2,
      explanation:
        "Tamizaje: cortisol salival nocturno, supresión con 1 mg de dexa o cortisol urinario 24h. Confirmado, se mide ACTH para localizar.",
    },
    {
      question:
        "Mujer con bocio doloroso tras IVRS, T4L alta, TSH baja, captación tiroidea disminuida y VSG elevada. ¿Diagnóstico?",
      options: ["Graves", "Tiroiditis de De Quervain", "Hashimoto", "Adenoma tóxico"],
      correct: 1,
      explanation:
        "Tiroiditis subaguda (De Quervain): dolor cervical postviral, hipertiroidismo transitorio con captación baja y VSG alta.",
    },
    {
      question:
        "Paciente con anti-TPO y anti-Tg positivos, TSH 18 mUI/L, T4L baja. ¿Diagnóstico?",
      options: [
        "Hipotiroidismo subclínico",
        "Tiroiditis de Hashimoto (hipotiroidismo primario autoinmune)",
        "Hipotiroidismo central",
        "Tiroiditis posparto",
      ],
      correct: 1,
      explanation:
        "TSH alta + T4L baja con autoanticuerpos = Hashimoto, causa más común de hipotiroidismo en zonas suficientes en yodo.",
    },
    {
      question:
        "Hombre con HTA refractaria, hipopotasemia y alcalosis metabólica. ¿Estudio inicial?",
      options: [
        "Cortisol urinario",
        "Relación aldosterona/renina (ARR)",
        "Metanefrinas urinarias",
        "TSH",
      ],
      correct: 1,
      explanation:
        "Hiperaldosteronismo primario: ARR elevada (>20-30) con aldosterona alta y renina suprimida.",
    },
    {
      question:
        "Paciente con crisis de cefalea, palpitaciones y sudoración paroxística. ¿Estudio diagnóstico de elección?",
      options: [
        "Catecolaminas séricas basales",
        "Metanefrinas fraccionadas en orina de 24h o plasma",
        "Cortisol salival",
        "ACTH",
      ],
      correct: 1,
      explanation:
        "Feocromocitoma: metanefrinas (más específicas que catecolaminas) en orina 24h o plasmáticas libres.",
    },
    {
      question:
        "Mujer de 60 años con hipercalcemia asintomática y PTH elevada. ¿Diagnóstico más probable?",
      options: [
        "Hiperparatiroidismo primario",
        "Hipercalcemia maligna",
        "Sarcoidosis",
        "Intoxicación por vitamina D",
      ],
      correct: 0,
      explanation:
        "Hipercalcemia con PTH no suprimida = hiperparatiroidismo primario (adenoma paratiroideo en >80%).",
    },
    {
      question:
        "Paciente con hiponatremia, hiperkalemia, hipotensión, hiperpigmentación y astenia. ¿Diagnóstico?",
      options: [
        "Síndrome de Cushing",
        "Insuficiencia suprarrenal primaria (Addison)",
        "SIADH",
        "Hipotiroidismo",
      ],
      correct: 1,
      explanation:
        "Addison: déficit de cortisol + aldosterona. Cortisol bajo + ACTH alta confirman; prueba de estimulación con ACTH.",
    },
    {
      question:
        "Mujer puérpera de 4 meses con palpitaciones y baja de peso, TSH suprimida y captación baja. ¿Cuadro?",
      options: ["Graves posparto", "Tiroiditis posparto fase tirotóxica", "Adenoma tóxico", "Hashimoto"],
      correct: 1,
      explanation:
        "Tiroiditis posparto: tirotoxicosis transitoria con captación baja, suele evolucionar a hipotiroidismo y resolución.",
    },
    {
      question:
        "Nódulo tiroideo de 1.8 cm en paciente eutiroideo. ¿Siguiente paso tras USG con criterios sospechosos (TI-RADS 4)?",
      options: ["Gammagrama tiroideo", "BAAF guiada por USG", "Cirugía directa", "Repetir USG en 1 año"],
      correct: 1,
      explanation:
        "Nódulos sospechosos ≥1 cm requieren BAAF para citología (Bethesda).",
    },
    {
      question:
        "Paciente con DM1, hipotiroidismo autoinmune e insuficiencia suprarrenal. ¿Síndrome?",
      options: [
        "MEN 1",
        "MEN 2A",
        "Síndrome poliglandular autoinmune tipo 2 (Schmidt)",
        "Síndrome de Sheehan",
      ],
      correct: 2,
      explanation:
        "APS-2: Addison + tiroidopatía autoinmune ± DM1 en adultos. MEN involucra tumores neuroendocrinos.",
    },
  ],

  higado: [
    {
      question:
        "Hombre de 45 años, alcohólico crónico, AST 180, ALT 70, GGT elevada. ¿Patrón sugerido?",
      options: ["Hepatitis viral aguda", "Daño hepático alcohólico", "Colestasis", "Hepatitis autoinmune"],
      correct: 1,
      explanation:
        "Relación AST/ALT >2 con GGT alta es típica del daño alcohólico (déficit relativo de piridoxina).",
    },
    {
      question:
        "Mujer de 30 años con ictericia, ALT 1500, AST 1300, FA normal. ¿Patrón?",
      options: ["Colestásico", "Hepatocelular (citólisis)", "Mixto", "Síntesis hepática alterada"],
      correct: 1,
      explanation:
        "Elevaciones >10× del LSN de transaminasas con FA normal = patrón hepatocelular (viral, tóxico, isquémico).",
    },
    {
      question:
        "Paciente con FA 600, GGT 450, bilirrubina directa elevada y prurito. ¿Patrón?",
      options: ["Citólisis", "Colestasis", "Insuficiencia hepática", "Hemólisis"],
      correct: 1,
      explanation:
        "FA + GGT elevadas con BD predominante = colestasis. Si GGT normal, sospechar origen óseo de la FA.",
    },
    {
      question:
        "Paciente cirrótico con INR 2.1, albúmina 2.4, bilirrubina 4. ¿Qué reflejan estos parámetros?",
      options: [
        "Función excretora",
        "Función de síntesis hepática",
        "Daño hepatocelular agudo",
        "Colestasis",
      ],
      correct: 1,
      explanation:
        "INR, albúmina y bilirrubina valoran síntesis/excreción; integran el Child-Pugh y MELD.",
    },
    {
      question:
        "Hiperbilirrubinemia indirecta aislada en joven sano tras ayuno prolongado. ¿Diagnóstico?",
      options: ["Síndrome de Gilbert", "Hepatitis A", "Colangitis", "Síndrome de Dubin-Johnson"],
      correct: 0,
      explanation:
        "Gilbert: déficit parcial de UGT1A1, BI elevada con hepatograma normal, exacerbada por ayuno.",
    },
    {
      question:
        "Mujer de 50 años con prurito, FA elevada y anticuerpos antimitocondriales (AMA) positivos. ¿Diagnóstico?",
      options: [
        "Colangitis biliar primaria",
        "Hepatitis autoinmune",
        "Colangitis esclerosante primaria",
        "Hepatitis C crónica",
      ],
      correct: 0,
      explanation:
        "CBP: mujeres, prurito, colestasis y AMA (+) en >90%. Tratamiento: ácido ursodesoxicólico.",
    },
    {
      question:
        "Joven con anillo de Kayser-Fleischer, ceruloplasmina baja y cobre urinario alto. ¿Diagnóstico?",
      options: ["Hemocromatosis", "Enfermedad de Wilson", "Déficit de α1-antitripsina", "Hepatitis autoinmune"],
      correct: 1,
      explanation:
        "Wilson: depósito de cobre por defecto en ATP7B. Tratamiento con quelantes (D-penicilamina, trientina).",
    },
    {
      question:
        "Paciente con ferritina 1500, saturación de transferrina 75%, diabetes y hiperpigmentación. ¿Diagnóstico?",
      options: ["Hemocromatosis hereditaria", "Talasemia", "Hepatitis B", "Hígado graso"],
      correct: 0,
      explanation:
        "HFE-hemocromatosis: sobrecarga de hierro con saturación de transferrina >45% y ferritina alta.",
    },
    {
      question:
        "Mujer joven con hipergammaglobulinemia, ANA y anti-músculo liso positivos, ALT alta. ¿Diagnóstico?",
      options: ["Hepatitis autoinmune tipo 1", "CBP", "Hepatitis B", "Wilson"],
      correct: 0,
      explanation:
        "HAI tipo 1: ANA y ASMA (+), IgG elevada. Responde a esteroides ± azatioprina.",
    },
    {
      question:
        "Paciente con HBsAg (+), anti-HBc IgM (+), HBeAg (+). ¿Fase de la infección?",
      options: ["Hepatitis B crónica inactiva", "Hepatitis B aguda con alta replicación", "Vacunación", "Hepatitis B resuelta"],
      correct: 1,
      explanation:
        "HBsAg + anti-HBc IgM + HBeAg = infección aguda con replicación viral activa.",
    },
    {
      question:
        "Paciente con anti-HBs (+) aislado, sin otros marcadores. ¿Estado inmunológico?",
      options: ["Infección aguda", "Hepatitis crónica", "Inmunidad por vacunación", "Ventana inmunológica"],
      correct: 2,
      explanation:
        "Solo anti-HBs (+) indica inmunidad postvacunación. Si además anti-HBc (+), inmunidad por infección resuelta.",
    },
    {
      question:
        "Cirrótico con ascitis, gradiente albúmina suero-ascitis (GASA) 1.5 g/dL. ¿Causa?",
      options: ["Carcinomatosis peritoneal", "Hipertensión portal", "Tuberculosis peritoneal", "Síndrome nefrótico"],
      correct: 1,
      explanation:
        "GASA ≥1.1 g/dL = hipertensión portal. <1.1 sugiere causa peritoneal (TB, cáncer).",
    },
    {
      question:
        "Paciente con esteatosis en USG, AST/ALT <1, IMC 34, sin alcohol. ¿Diagnóstico?",
      options: ["Hepatitis alcohólica", "MASLD/NAFLD (hígado graso metabólico)", "Hepatitis viral", "CBP"],
      correct: 1,
      explanation:
        "MASLD: esteatosis con factores metabólicos sin alcohol significativo. AST/ALT suele <1 (a diferencia del alcohol).",
    },
    {
      question:
        "Cirrótico Child B con bilirrubina 3, INR 1.7, creatinina 1.2, sodio 132. ¿Score que estratifica trasplante?",
      options: ["APACHE II", "MELD-Na", "Maddrey", "Ranson"],
      correct: 1,
      explanation:
        "MELD-Na (bilirrubina, INR, creatinina, sodio) prioriza la lista de trasplante hepático.",
    },
    {
      question:
        "Paciente con paracetamol a dosis tóxica y ALT 8000. ¿Marcador pronóstico de insuficiencia hepática aguda?",
      options: ["AST", "Bilirrubina total", "INR (TP prolongado)", "GGT"],
      correct: 2,
      explanation:
        "INR refleja síntesis y es el principal marcador de fallo hepático agudo (criterios de King's College).",
    },
  ],

  iam: [
    {
      question:
        "Hombre de 58 años con dolor torácico opresivo de 2 horas, EKG con elevación del ST en cara inferior. ¿Biomarcador inicial de elección?",
      options: ["CK-MB", "Mioglobina", "Troponina I/T de alta sensibilidad", "LDH"],
      correct: 2,
      explanation:
        "Troponina hs es el biomarcador de elección por sensibilidad y especificidad (definición universal del IAM).",
    },
    {
      question:
        "Paciente con dolor torácico de 1 hora, troponina hs inicial negativa. ¿Conducta?",
      options: [
        "Descartar IAM y dar de alta",
        "Repetir troponina a 1-3 h (algoritmo 0/1h o 0/3h)",
        "Solicitar ecocardio inmediato",
        "Iniciar trombólisis",
      ],
      correct: 1,
      explanation:
        "Algoritmos 0/1h o 0/3h con troponina hs: una sola medición no descarta IAM en clínica sugestiva.",
    },
    {
      question:
        "¿Cuál es el tiempo de aparición y pico de la troponina tras IAM?",
      options: [
        "Aparece a las 12 h, pico a 48 h",
        "Aparece a 3-6 h, pico a 18-24 h, persiste 7-14 días",
        "Aparece a las 24 h, pico a 72 h",
        "Aparece a 1 h, pico a 4 h",
      ],
      correct: 1,
      explanation:
        "Troponina: inicio 3-6h, pico 18-24h, normaliza en 7-14 días. Útil para reinfarto solo con CK-MB o cinética.",
    },
    {
      question:
        "Paciente con angina de 4 días, ¿qué biomarcador es útil para detectar reinfarto reciente?",
      options: ["Troponina I", "CK-MB (vida media corta)", "LDH", "Mioglobina"],
      correct: 1,
      explanation:
        "CK-MB normaliza en 48-72h, por lo que una nueva elevación detecta reinfarto cuando troponina aún está alta.",
    },
    {
      question:
        "Paciente con ERC estadio 4, troponina hs 80 ng/L estable sin cambios clínicos. ¿Interpretación?",
      options: [
        "IAM agudo confirmado",
        "Elevación crónica por daño miocárdico no isquémico; valorar delta",
        "Falso positivo del laboratorio",
        "Iniciar trombólisis",
      ],
      correct: 1,
      explanation:
        "ERC eleva troponina basal. Para IAM se requiere cambio dinámico (delta) además del valor.",
    },
    {
      question:
        "Mujer de 70 años con dolor torácico, EKG sin cambios y troponina hs 60 → 250 ng/L en 1 h. ¿Diagnóstico?",
      options: ["Angina estable", "IAM sin elevación del ST (NSTEMI)", "Pericarditis", "TEP descartado"],
      correct: 1,
      explanation:
        "Cambio dinámico significativo de troponina en clínica compatible = NSTEMI.",
    },
    {
      question:
        "¿Cuál es la primera enzima en elevarse tras IAM aunque sea poco específica?",
      options: ["Troponina", "Mioglobina", "CK-MB", "AST"],
      correct: 1,
      explanation:
        "Mioglobina se eleva a 1-3 h; útil por valor predictivo negativo, pero baja especificidad (también en músculo esquelético).",
    },
    {
      question:
        "Paciente con SCA y EKG con elevación persistente del ST. ¿Conducta principal?",
      options: [
        "Esperar troponina antes de actuar",
        "Reperfusión inmediata (ICP primaria o fibrinólisis)",
        "Manejo ambulatorio",
        "Solo antiagregación",
      ],
      correct: 1,
      explanation:
        "STEMI: la reperfusión no espera biomarcadores; ICP primaria <120 min ideal.",
    },
    {
      question:
        "Causa NO isquémica de troponina elevada:",
      options: ["Miocarditis", "Sepsis", "TEP masivo", "Todas las anteriores"],
      correct: 3,
      explanation:
        "Miocarditis, sepsis, TEP, ICC, taquiarritmias y ERC pueden elevar troponina sin IAM tipo 1.",
    },
    {
      question:
        "BNP/NT-proBNP elevado en paciente disneico. ¿Qué refleja?",
      options: ["Necrosis miocárdica", "Estrés/sobrecarga ventricular (insuficiencia cardiaca)", "Isquemia coronaria aguda", "Pericarditis"],
      correct: 1,
      explanation:
        "BNP/NT-proBNP marca disfunción/sobrecarga ventricular, útil para diagnóstico y pronóstico de IC.",
    },
    {
      question:
        "Definición universal de IAM tipo 1 requiere:",
      options: [
        "Solo elevación de troponina",
        "Elevación + caída de troponina con al menos un valor >P99 + evidencia de isquemia",
        "Solo cambios en EKG",
        "Elevación de CK total",
      ],
      correct: 1,
      explanation:
        "Cinética de troponina (subida o caída) con un valor >P99 + clínica/EKG/imagen de isquemia define IAM tipo 1.",
    },
    {
      question:
        "Paciente postoperado con anemia severa y troponina elevada sin placa coronaria. ¿Tipo de IAM?",
      options: ["Tipo 1", "Tipo 2 (desbalance oferta/demanda)", "Tipo 3", "Tipo 4a"],
      correct: 1,
      explanation:
        "IAM tipo 2: isquemia por desbalance (anemia, hipotensión, taquicardia) sin trombosis aguda.",
    },
    {
      question:
        "Tras ICP, troponina sube >5× P99 con evidencia de nueva isquemia. ¿Tipo?",
      options: ["Tipo 2", "Tipo 3", "Tipo 4a (relacionado a ICP)", "Tipo 5"],
      correct: 2,
      explanation:
        "Tipo 4a: IAM peri-ICP. Tipo 5 sería peri-cirugía de revascularización.",
    },
    {
      question:
        "Marcador útil para pronóstico de muerte súbita post IAM:",
      options: ["AST", "Mioglobina", "BNP/NT-proBNP", "GGT"],
      correct: 2,
      explanation:
        "BNP/NT-proBNP y troponina pico se correlacionan con pronóstico y riesgo de eventos.",
    },
    {
      question:
        "Paciente con dolor torácico pleurítico, frote pericárdico, ST cóncavo difuso y troponina ligeramente elevada. ¿Diagnóstico?",
      options: ["IAM con elevación del ST", "Miopericarditis", "Disección aórtica", "TEP"],
      correct: 1,
      explanation:
        "Pericarditis con afectación miocárdica (miopericarditis) explica troponina elevada con clínica y EKG típicos.",
    },
  ],

  "marcadores-tumorales": [
    {
      question:
        "Paciente varón de 65 años con APE 8 ng/mL y tacto rectal normal. ¿Conducta inicial?",
      options: [
        "Biopsia prostática inmediata",
        "Confirmar APE, calcular densidad/velocidad y considerar RM multiparamétrica",
        "Iniciar antiandrógenos",
        "Repetir en 5 años",
      ],
      correct: 1,
      explanation:
        "APE elevado requiere confirmación, valoración de cinética/densidad y RM mp antes de biopsia.",
    },
    {
      question:
        "Mujer con cáncer de ovario epitelial en seguimiento. ¿Marcador útil?",
      options: ["CEA", "CA 125", "AFP", "β-hCG"],
      correct: 1,
      explanation:
        "CA 125 es útil en seguimiento del cáncer epitelial de ovario, no como tamizaje poblacional.",
    },
    {
      question:
        "Tumor germinal testicular no seminomatoso. ¿Marcadores característicos?",
      options: ["AFP y β-hCG", "CA 19-9", "PSA", "CA 15-3"],
      correct: 0,
      explanation:
        "AFP y β-hCG se elevan en no seminomas; LDH como pronóstico. Seminomas puros no elevan AFP.",
    },
    {
      question:
        "Paciente con ictericia obstructiva y masa pancreática. ¿Marcador más útil?",
      options: ["CEA", "CA 19-9", "AFP", "CA 125"],
      correct: 1,
      explanation:
        "CA 19-9 se asocia a cáncer de páncreas y vías biliares; cuidado en colestasis (falsos positivos).",
    },
    {
      question:
        "Hepatocarcinoma sobre cirrosis. ¿Marcador clásico?",
      options: ["CEA", "AFP", "CA 19-9", "PSA"],
      correct: 1,
      explanation:
        "AFP es clásico en HCC; sensibilidad limitada, se complementa con imagen (USG/RM).",
    },
    {
      question:
        "Cáncer de mama, marcador útil en seguimiento de enfermedad metastásica:",
      options: ["CA 15-3 / CA 27.29", "AFP", "CA 125", "PSA"],
      correct: 0,
      explanation:
        "CA 15-3 y CA 27.29 sirven para seguimiento, no para tamizaje ni diagnóstico inicial.",
    },
    {
      question:
        "Cáncer colorrectal, marcador para seguimiento posquirúrgico:",
      options: ["AFP", "CEA", "CA 125", "β-hCG"],
      correct: 1,
      explanation:
        "CEA es útil para seguimiento (recaída/metástasis); no se usa para tamizaje (poca sensibilidad inicial).",
    },
    {
      question:
        "Carcinoma medular de tiroides. ¿Marcador específico?",
      options: ["Tiroglobulina", "Calcitonina", "TSH", "T4L"],
      correct: 1,
      explanation:
        "Calcitonina (y CEA) son marcadores del carcinoma medular; tiroglobulina sirve en cáncer diferenciado.",
    },
    {
      question:
        "Cáncer diferenciado de tiroides post tiroidectomía total. ¿Marcador de seguimiento?",
      options: ["Calcitonina", "Tiroglobulina + anti-Tg", "PSA", "CA 125"],
      correct: 1,
      explanation:
        "Tras tiroidectomía + I-131, tiroglobulina debe ser indetectable; siempre medir anti-Tg para descartar interferencia.",
    },
    {
      question:
        "β-hCG cuantitativa muy elevada con útero vacío y altura uterina mayor a EG. ¿Sospecha?",
      options: ["Embarazo normal", "Embarazo molar / enfermedad trofoblástica", "Aborto incompleto", "Embarazo ectópico"],
      correct: 1,
      explanation:
        "β-hCG desproporcionadamente alta + útero grande + USG en 'panal de abeja' = mola hidatiforme.",
    },
    {
      question:
        "Limitación más importante de los marcadores tumorales:",
      options: [
        "Costo elevado",
        "Baja especificidad: pueden elevarse en patología benigna",
        "Solo se miden en sangre",
        "Requieren biopsia",
      ],
      correct: 1,
      explanation:
        "La mayoría tiene baja especificidad y no sirve para tamizaje poblacional, salvo casos selectos.",
    },
    {
      question:
        "Paciente con APE 4.5 y fracción libre/total <10%. ¿Interpretación?",
      options: [
        "Mayor probabilidad de hiperplasia benigna",
        "Mayor probabilidad de cáncer de próstata",
        "Prostatitis aguda",
        "Falso positivo seguro",
      ],
      correct: 1,
      explanation:
        "Cociente libre/total bajo (<10-15%) aumenta probabilidad de cáncer; ayuda a decidir biopsia.",
    },
    {
      question:
        "Coriocarcinoma gestacional. ¿Marcador clave para diagnóstico y seguimiento?",
      options: ["AFP", "β-hCG", "CA 125", "CEA"],
      correct: 1,
      explanation:
        "β-hCG es esencial; persistencia/elevación tras evacuación molar sugiere enfermedad trofoblástica persistente.",
    },
    {
      question:
        "¿Cuál NO es indicación adecuada de marcadores tumorales?",
      options: [
        "Tamizaje poblacional indiscriminado",
        "Seguimiento de respuesta al tratamiento",
        "Detección de recaída",
        "Pronóstico en algunas neoplasias",
      ],
      correct: 0,
      explanation:
        "No deben usarse para tamizaje masivo; sí para diagnóstico complementario, seguimiento, recaída y pronóstico.",
    },
    {
      question:
        "Cromogranina A elevada en paciente con flushing y diarrea. ¿Sospecha?",
      options: ["Cáncer de páncreas exocrino", "Tumor neuroendocrino (carcinoide)", "Cáncer colorrectal", "Linfoma"],
      correct: 1,
      explanation:
        "Cromogranina A es marcador de tumores neuroendocrinos; junto con 5-HIAA urinario en síndrome carcinoide.",
    },
  ],

  sexuales: [
    {
      question:
        "Mujer con amenorrea de 6 semanas, β-hCG 1500 mUI/mL y USG sin saco gestacional intrauterino. ¿Conducta?",
      options: [
        "Confirmar embarazo intrauterino",
        "Descartar embarazo ectópico (USG seriado y β-hCG en 48h)",
        "Iniciar AINEs",
        "Indicar legrado",
      ],
      correct: 1,
      explanation:
        "Con β-hCG >1500-2000 (zona discriminatoria) y útero vacío sospechar ectópico.",
    },
    {
      question:
        "β-hCG en embarazo intrauterino normal en primer trimestre se duplica cada:",
      options: ["12 horas", "48-72 horas", "7 días", "2 semanas"],
      correct: 1,
      explanation:
        "Duplicación cada 48-72 h en gestación viable temprana. Pobre incremento sugiere ectópico o aborto.",
    },
    {
      question:
        "Mujer de 32 años, infertilidad. FSH día 3 = 18 UI/L, AMH 0.4 ng/mL. ¿Diagnóstico?",
      options: ["SOP", "Reserva ovárica disminuida", "Hiperprolactinemia", "Hipogonadismo central"],
      correct: 1,
      explanation:
        "FSH alta y AMH baja indican reserva ovárica disminuida (mal pronóstico para ovulación inducida).",
    },
    {
      question:
        "Mujer con hirsutismo, acné, oligomenorrea y USG con ovarios poliquísticos. ¿Patrón hormonal típico?",
      options: [
        "LH/FSH >2, andrógenos elevados",
        "FSH alta, estrógenos bajos",
        "PRL >200 ng/mL",
        "TSH suprimida",
      ],
      correct: 0,
      explanation:
        "SOP (Rotterdam): hiperandrogenismo + oligo/anovulación + ovarios poliquísticos. LH/FSH suele >2.",
    },
    {
      question:
        "Estudio inicial en pareja con infertilidad primaria de 1 año en mujer <35:",
      options: [
        "Solo histerosalpingografía",
        "Espermatobioscopia + valoración ovulatoria + permeabilidad tubaria",
        "FIV directamente",
        "Laparoscopia diagnóstica",
      ],
      correct: 1,
      explanation:
        "Estudio integral: factor masculino (espermatograma), ovulatorio (progesterona día 21) y tubario.",
    },
    {
      question:
        "Mujer de 50 años con bochornos, amenorrea de 14 meses, FSH 65 UI/L. ¿Diagnóstico?",
      options: ["SOP", "Menopausia", "Hipogonadismo central", "Hiperprolactinemia"],
      correct: 1,
      explanation:
        "Amenorrea ≥12 meses + FSH alta + clínica vasomotora = menopausia.",
    },
    {
      question:
        "Mujer de 28 años con amenorrea secundaria, PRL 90 ng/mL y galactorrea. ¿Siguiente paso?",
      options: [
        "RMN de hipófisis tras descartar embarazo y fármacos",
        "TSH solo",
        "Iniciar anticonceptivos",
        "Histeroscopia",
      ],
      correct: 0,
      explanation:
        "Tras descartar embarazo, hipotiroidismo y fármacos, RMN para buscar prolactinoma.",
    },
    {
      question:
        "Hombre con infertilidad y testosterona total baja con LH y FSH bajas. ¿Tipo de hipogonadismo?",
      options: ["Primario (hipergonadotrópico)", "Secundario/central (hipogonadotrópico)", "Síndrome de Klinefelter", "Resistencia androgénica"],
      correct: 1,
      explanation:
        "Gonadotropinas bajas con T baja = hipogonadismo central; descartar tumor hipofisario y hemocromatosis.",
    },
    {
      question:
        "Klinefelter (47,XXY): patrón hormonal esperado:",
      options: [
        "T baja con LH y FSH altas",
        "T alta, LH baja",
        "T normal, FSH baja",
        "T baja con LH baja",
      ],
      correct: 0,
      explanation:
        "Hipogonadismo primario: falla testicular con elevación compensadora de gonadotropinas.",
    },
    {
      question:
        "Espermatobioscopia con concentración 8 millones/mL. ¿Diagnóstico (OMS)?",
      options: ["Normozoospermia", "Oligozoospermia", "Azoospermia", "Astenozoospermia"],
      correct: 1,
      explanation:
        "OMS: <16 millones/mL es oligozoospermia. Azoospermia = ausencia total de espermatozoides.",
    },
    {
      question:
        "Marcador de ovulación más confiable en ciclo natural:",
      options: ["LH basal", "Progesterona en fase lútea media (día 21)", "Estradiol día 3", "Prolactina"],
      correct: 1,
      explanation:
        "Progesterona >3 ng/mL en fase lútea media confirma ovulación.",
    },
    {
      question:
        "Tamizaje recomendado en gestante para diabetes gestacional (ACOG):",
      options: [
        "Glucosa basal en cada visita",
        "CTOG con 50 g a 24-28 SDG (2 pasos) o 75 g (1 paso)",
        "HbA1c en el primer trimestre solamente",
        "Glucosa capilar diaria",
      ],
      correct: 1,
      explanation:
        "ACOG: tamizaje universal a 24-28 SDG con 50 g; si positivo confirmar con 100 g (Carpenter-Coustan).",
    },
    {
      question:
        "AFP elevada en triple marcador prenatal. ¿Asociación?",
      options: ["Síndrome de Down", "Defectos del tubo neural", "Trisomía 18", "Embarazo molar"],
      correct: 1,
      explanation:
        "AFP alta = defectos del tubo neural o pared abdominal. Baja en trisomías 21/18.",
    },
    {
      question:
        "Estriol bajo, β-hCG alta, AFP baja. ¿Sospecha de cromosomopatía?",
      options: ["Trisomía 13", "Trisomía 18", "Trisomía 21 (Down)", "Síndrome de Turner"],
      correct: 2,
      explanation:
        "Triple marcador clásico de Down: AFP↓, hCG↑, estriol↓ + edad materna.",
    },
    {
      question:
        "Mujer con amenorrea posparto severa (Sheehan). Patrón hormonal:",
      options: [
        "Hipopituitarismo (PRL, TSH, FSH, LH y ACTH bajas)",
        "Hiperprolactinemia",
        "TSH alta con T4L baja",
        "FSH alta",
      ],
      correct: 0,
      explanation:
        "Sheehan: necrosis hipofisaria postparto con panhipopituitarismo; agalactia es un signo precoz.",
    },
  ],

  diabetes: [
    {
      question:
        "Paciente con glucosa en ayuno 132 mg/dL en dos ocasiones. ¿Diagnóstico (ADA)?",
      options: [
        "Glucosa alterada en ayuno",
        "Diabetes mellitus",
        "Intolerancia a la glucosa",
        "Normal",
      ],
      correct: 1,
      explanation:
        "ADA: GPA ≥126 mg/dL en dos ocasiones = DM. 100-125 = GAA.",
    },
    {
      question:
        "Paciente asintomático con HbA1c 6.7%. ¿Diagnóstico (ADA)?",
      options: ["Normal", "Prediabetes", "Diabetes mellitus", "Diabetes gestacional"],
      correct: 2,
      explanation:
        "ADA: HbA1c ≥6.5% (confirmada) = DM. 5.7-6.4% = prediabetes.",
    },
    {
      question:
        "Glucosa 2h post 75 g = 165 mg/dL. ¿Categoría?",
      options: ["Normal", "Intolerancia a la glucosa (prediabetes)", "Diabetes", "GAA"],
      correct: 1,
      explanation:
        "ADA: 140-199 mg/dL a 2h = intolerancia. ≥200 = DM.",
    },
    {
      question:
        "Embarazada de 26 SDG con CTOG 75 g: ayuno 95, 1h 185, 2h 160. ¿Diagnóstico (criterios IADPSG)?",
      options: ["Normal", "Diabetes gestacional", "Diabetes pregestacional", "GAA"],
      correct: 1,
      explanation:
        "DG (1 paso, 75g): cualquier valor anormal (ayuno ≥92, 1h ≥180, 2h ≥153) confirma diagnóstico.",
    },
    {
      question:
        "Tamizaje ACOG (2 pasos) a 24-28 SDG. Glucosa 1h post 50 g = 145 mg/dL. ¿Conducta?",
      options: [
        "Diagnóstico de DG",
        "Realizar CTOG con 100 g (Carpenter-Coustan)",
        "Repetir en 4 semanas",
        "Iniciar insulina",
      ],
      correct: 1,
      explanation:
        "Umbral 50g: ≥130-140 amerita confirmación con CTOG 100 g (cuatro valores).",
    },
    {
      question:
        "Paciente con cetoacidosis: glucosa 480, pH 7.10, HCO3 8, cetonas (+++). ¿Manejo inicial?",
      options: [
        "Insulina SC e hidratación oral",
        "Líquidos IV + insulina IV en infusión + reposición de potasio",
        "Bicarbonato siempre",
        "Solo metformina",
      ],
      correct: 1,
      explanation:
        "CAD: SS 0.9% inicial, insulina IV 0.1 U/kg/h, reposición de K+ y vigilancia ácido-base.",
    },
    {
      question:
        "DM2 mal controlada con HbA1c 9.5% sin contraindicaciones. ¿Tratamiento inicial preferido (ADA 2024)?",
      options: ["Metformina + estilo de vida", "Sulfonilurea sola", "Insulina basal directamente", "Nada"],
      correct: 0,
      explanation:
        "Metformina sigue siendo primera línea; añadir GLP-1/SGLT2 según comorbilidades CV/renales.",
    },
    {
      question:
        "Paciente DM2 + ICFEr. ¿Fármaco con beneficio CV-renal demostrado?",
      options: ["Glibenclamida", "iSGLT2 (empagliflozina, dapagliflozina)", "Pioglitazona", "Insulina NPH"],
      correct: 1,
      explanation:
        "iSGLT2 reducen hospitalización por IC y progresión renal independiente del control glucémico.",
    },
    {
      question:
        "Paciente DM2 con TFG 38 mL/min. ¿Conducta con metformina?",
      options: [
        "Suspender siempre",
        "Continuar a dosis ajustada y vigilar; suspender si TFG <30",
        "Doblar dosis",
        "Cambiar a glibenclamida",
      ],
      correct: 1,
      explanation:
        "Metformina puede usarse hasta TFG 30 mL/min con ajuste; suspender por debajo o en eventos agudos.",
    },
    {
      question:
        "HbA1c objetivo en adulto general con DM2 sin comorbilidades importantes (ADA):",
      options: ["<5.5%", "<7%", "<8%", "<6%"],
      correct: 1,
      explanation:
        "Meta general <7% individualizado; <8% en frágiles/ancianos, <6.5% en jóvenes seleccionados.",
    },
    {
      question:
        "Paciente con poliuria, polidipsia, glucosa 320 y cuerpos cetónicos negativos, hiperosmolar 340 mOsm/kg. ¿Diagnóstico?",
      options: ["CAD", "Estado hiperosmolar hiperglucémico (EHH)", "Diabetes insípida", "Hipoglucemia"],
      correct: 1,
      explanation:
        "EHH: glucosa muy alta, osmolaridad >320, sin cetosis significativa, deshidratación severa, típico de DM2 anciana.",
    },
    {
      question:
        "Limitación de la HbA1c:",
      options: [
        "No varía con la edad",
        "Falsos resultados en hemoglobinopatías, anemia, ERC y embarazo",
        "Solo se altera con la dieta del día previo",
        "Equivale al valor del minuto previo",
      ],
      correct: 1,
      explanation:
        "Hemoglobinopatías, transfusión, ferropenia, ERC y gestación pueden alterar HbA1c; usar fructosamina si es necesario.",
    },
    {
      question:
        "Tamizaje de DM2 (ADA) en adultos asintomáticos:",
      options: [
        "Desde los 18 años a todos",
        "A partir de 35 años o antes con factores de riesgo (IMC ≥25 + 1 factor)",
        "Solo si síntomas",
        "Después de los 60 años",
      ],
      correct: 1,
      explanation:
        "ADA 2022+: tamizaje desde los 35 años o antes en sobrepeso/obesidad con factores de riesgo.",
    },
    {
      question:
        "Microalbuminuria definida como cociente albúmina/creatinina (mg/g):",
      options: ["<30", "30-300", ">300", ">1000"],
      correct: 1,
      explanation:
        "ACR 30-300 mg/g = albuminuria moderadamente aumentada (antes microalbuminuria); >300 = severa.",
    },
    {
      question:
        "Embarazada con HbA1c 6.8% en primer trimestre. ¿Interpretación?",
      options: [
        "Diabetes gestacional",
        "Diabetes pregestacional (overt)",
        "Normal",
        "Intolerancia a la glucosa",
      ],
      correct: 1,
      explanation:
        "HbA1c ≥6.5% o glucosa de DM en primer trimestre = diabetes pregestacional, no gestacional.",
    },
  ],

  renal: [
    {
      question:
        "Paciente con creatinina 1.8, urea 90, BUN/creatinina 25, FENa 0.5%. ¿Tipo de IRA?",
      options: ["Prerrenal", "Renal intrínseca (NTA)", "Postrenal", "Glomerular"],
      correct: 0,
      explanation:
        "BUN/Cr >20 y FENa <1% = prerrenal (hipoperfusión, túbulo conserva sodio).",
    },
    {
      question:
        "FENa 3%, sedimento con cilindros granulosos pigmentados. ¿Diagnóstico?",
      options: ["Prerrenal", "Necrosis tubular aguda", "Obstrucción", "Glomerulonefritis"],
      correct: 1,
      explanation:
        "FENa >2% + cilindros granulosos 'lodosos' = NTA. Daño tubular pierde capacidad de retener sodio.",
    },
    {
      question:
        "Paciente con HTA, edema, hematuria con cilindros eritrocitarios, proteinuria 1.5 g/día. ¿Síndrome?",
      options: ["Nefrótico", "Nefrítico", "IRA prerrenal", "Tubulopatía"],
      correct: 1,
      explanation:
        "Cilindros hemáticos + HTA + proteinuria moderada + IRA = síndrome nefrítico (glomerulonefritis).",
    },
    {
      question:
        "Paciente con proteinuria 6 g/día, hipoalbuminemia, edema y dislipidemia. ¿Síndrome?",
      options: ["Nefrítico", "Nefrótico", "Tubulopatía", "IRA postrenal"],
      correct: 1,
      explanation:
        "Proteinuria >3.5 g/día + hipoalbuminemia + edema + dislipidemia + lipiduria = síndrome nefrótico.",
    },
    {
      question:
        "TFG estimada 25 mL/min/1.73 m² estable durante 6 meses. ¿Estadio KDIGO?",
      options: ["G2", "G3a", "G3b", "G4"],
      correct: 3,
      explanation:
        "G4: TFG 15-29. G3a 45-59, G3b 30-44, G5 <15.",
    },
    {
      question:
        "Mejor estimador de TFG en adultos hoy día (KDIGO 2021):",
      options: [
        "Cockcroft-Gault",
        "MDRD",
        "CKD-EPI 2021 (creatinina sin coeficiente racial; ideal con cistatina C)",
        "Depuración de urea",
      ],
      correct: 2,
      explanation:
        "CKD-EPI 2021 sin ajuste racial; combinación creatinina + cistatina C mejora exactitud.",
    },
    {
      question:
        "Paciente diabético con ACR 350 mg/g. ¿Interpretación?",
      options: ["Normal", "Albuminuria moderadamente aumentada", "Albuminuria severamente aumentada (A3)", "Proteinuria nefrótica"],
      correct: 2,
      explanation:
        "KDIGO: A1 <30, A2 30-300, A3 >300 mg/g.",
    },
    {
      question:
        "Sedimento con cristales de oxalato de calcio en paciente con IRA postingesta de etilenglicol. ¿Manejo clave?",
      options: ["Hidratación sola", "Fomepizol o etanol + hemodiálisis", "Bicarbonato solo", "Manitol"],
      correct: 1,
      explanation:
        "Intoxicación por etilenglicol: bloquear ADH con fomepizol/etanol y diálisis.",
    },
    {
      question:
        "Cilindros leucocitarios en sedimento. ¿Sospecha?",
      options: ["Glomerulonefritis", "Pielonefritis o nefritis intersticial", "NTA", "Síndrome nefrótico"],
      correct: 1,
      explanation:
        "Cilindros de leucocitos = origen tubulointersticial (pielonefritis, NIA).",
    },
    {
      question:
        "Paciente con AINEs crónicos, eosinofilia, fiebre, exantema y IRA con eosinófilos en orina. ¿Diagnóstico?",
      options: ["NTA", "Nefritis intersticial aguda", "GN postinfecciosa", "Necrosis cortical"],
      correct: 1,
      explanation:
        "NIA: triada clásica fiebre-rash-eosinofilia + eosinofiluria; AINEs y antibióticos son causa frecuente.",
    },
    {
      question:
        "Hiperkalemia 7.0 mEq/L con ondas T picudas y QRS ancho. ¿Primer paso?",
      options: [
        "Insulina + glucosa",
        "Gluconato de calcio IV (estabilizar membrana)",
        "Resinas de intercambio",
        "Hemodiálisis inmediata",
      ],
      correct: 1,
      explanation:
        "Estabilizar miocardio primero con calcio; luego desplazar K+ al intracelular y eliminar.",
    },
    {
      question:
        "Brecha aniónica = Na − (Cl + HCO3) = 22. Paciente cetoacidótico. ¿Tipo de acidosis?",
      options: [
        "Metabólica con AG normal",
        "Metabólica con AG aumentada (cetoacidosis)",
        "Respiratoria",
        "Mixta",
      ],
      correct: 1,
      explanation:
        "AG >12: cetoacidosis, lactoacidosis, uremia, intoxicaciones (MUDPILES).",
    },
    {
      question:
        "Paciente postrenal con anuria súbita, hidronefrosis bilateral. ¿Causa probable?",
      options: ["Cólico renal único", "Obstrucción a nivel uretral o bilateral ureteral", "GN aguda", "NTA"],
      correct: 1,
      explanation:
        "Anuria + hidronefrosis bilateral indica obstrucción baja o bilateral; resolver con sonda/derivación.",
    },
    {
      question:
        "Hiponatremia con osmolalidad urinaria alta, ácido úrico bajo y volemia normal. ¿Diagnóstico?",
      options: ["SIADH", "Insuficiencia suprarrenal", "Diuréticos", "Diabetes insípida"],
      correct: 0,
      explanation:
        "SIADH: hiponatremia euvolémica, Osm urinaria inapropiadamente alta, hipouricemia.",
    },
    {
      question:
        "Indicación urgente de diálisis (AEIOU). ¿Cuál NO corresponde?",
      options: [
        "Acidosis refractaria",
        "Hiperkalemia refractaria",
        "Pericarditis urémica",
        "Hipernatremia leve aislada",
      ],
      correct: 3,
      explanation:
        "AEIOU: Acidosis, Electrolitos (K+), Intoxicación, Sobrecarga (Overload), Uremia. Hipernatremia leve no es indicación urgente.",
    },
  ],

  pancreatitis: [
    {
      question:
        "Paciente con dolor epigástrico irradiado en cinturón, lipasa 1200 (3× LSN). ¿Cuántos criterios de Atlanta cumple para pancreatitis aguda?",
      options: [
        "Solo se necesita 1 criterio",
        "2 de 3: clínica, lipasa/amilasa ≥3× LSN, imagen compatible",
        "Necesita los 3 obligatoriamente",
        "Solo imagen",
      ],
      correct: 1,
      explanation:
        "Atlanta: ≥2 de 3 criterios: dolor típico, enzimas ≥3× LSN, imagen.",
    },
    {
      question:
        "¿Por qué la lipasa es preferida sobre la amilasa?",
      options: [
        "Es más barata",
        "Mayor especificidad y vida media más larga",
        "Se eleva antes de los síntomas",
        "Es independiente de la función renal",
      ],
      correct: 1,
      explanation:
        "Lipasa: más específica para páncreas, persiste 8-14 días; amilasa cae más rápido y tiene origen extra-pancreático.",
    },
    {
      question:
        "Causas más frecuentes de pancreatitis aguda:",
      options: [
        "Litiasis biliar y alcohol",
        "Hipertrigliceridemia y fármacos",
        "Trauma y CPRE",
        "Idiopática",
      ],
      correct: 0,
      explanation:
        "Biliar (~40%) y alcohol (~30%) son las principales; otras: TG >1000, fármacos, post-CPRE.",
    },
    {
      question:
        "Paciente con pancreatitis aguda, BUN 35, hto 48, lactato alto. ¿Conducta inicial?",
      options: [
        "NPO indefinido y antibióticos rutinarios",
        "Hidratación cristaloide vigorosa controlada y analgesia",
        "Cirugía urgente",
        "Octreótido",
      ],
      correct: 1,
      explanation:
        "La piedra angular es hidratación con cristaloides (Ringer lactato preferido) y analgesia; ATB solo si necrosis infectada.",
    },
    {
      question:
        "Pancreatitis aguda con falla orgánica persistente >48h. ¿Severidad (Atlanta revisada)?",
      options: ["Leve", "Moderadamente grave", "Severa", "Crónica"],
      correct: 2,
      explanation:
        "Atlanta 2012: severa = falla orgánica >48h. Moderada = falla transitoria o complicaciones locales.",
    },
    {
      question:
        "Score útil a las 48 h para pancreatitis aguda:",
      options: ["GRACE", "Ranson", "MELD", "Child-Pugh"],
      correct: 1,
      explanation:
        "Ranson valora a las 0 y 48 h. APACHE II y BISAP también son utilizados.",
    },
    {
      question:
        "Paciente con pancreatitis biliar leve, ¿cuándo realizar colecistectomía?",
      options: [
        "A los 6 meses",
        "Durante la misma hospitalización (si es leve)",
        "Solo si recurre",
        "Nunca",
      ],
      correct: 1,
      explanation:
        "Guías: colecistectomía en la misma admisión en pancreatitis biliar leve para evitar recurrencia.",
    },
    {
      question:
        "TG 1800 mg/dL en paciente con dolor abdominal y lipasa 4× LSN. ¿Manejo específico?",
      options: [
        "Solo ayuno",
        "Insulina IV ± plasmaféresis para reducir TG",
        "Estatina IV",
        "Ácido nicotínico oral",
      ],
      correct: 1,
      explanation:
        "Pancreatitis por hiperTG (>1000): insulina IV (activa LPL) y/o plasmaféresis si severa.",
    },
    {
      question:
        "Paciente con pancreatitis crónica, esteatorrea y baja de peso. ¿Estudio funcional clave?",
      options: ["Lipasa sérica", "Elastasa fecal", "Amilasa", "GGT"],
      correct: 1,
      explanation:
        "Elastasa pancreática fecal baja confirma insuficiencia exocrina.",
    },
    {
      question:
        "Hallazgo radiológico característico de pancreatitis crónica:",
      options: [
        "Edema peripancreático",
        "Calcificaciones pancreáticas y dilatación del conducto",
        "Pseudoquiste agudo",
        "Necrosis grasa",
      ],
      correct: 1,
      explanation:
        "Calcificaciones y conducto pancreático dilatado/arrosariado son típicos en crónica.",
    },
    {
      question:
        "Paciente con pancreatitis aguda y colección líquida persistente >4 semanas con pared definida. ¿Diagnóstico?",
      options: ["Necrosis aguda", "Pseudoquiste pancreático", "Absceso", "Edema"],
      correct: 1,
      explanation:
        "Pseudoquiste: colección encapsulada >4 semanas, generalmente postpancreatitis.",
    },
    {
      question:
        "Causa de amilasa elevada SIN pancreatitis:",
      options: [
        "Parotiditis y macroamilasemia",
        "Hipotiroidismo",
        "Anemia ferropénica",
        "Hepatitis viral",
      ],
      correct: 0,
      explanation:
        "Amilasa también se eleva en parotiditis, embarazo ectópico, perforación intestinal y macroamilasemia.",
    },
    {
      question:
        "Antibióticos profilácticos en pancreatitis aguda necrotizante estéril:",
      options: [
        "Indicados siempre",
        "No están recomendados de rutina",
        "Solo cefazolina",
        "Solo si lipasa >5×",
      ],
      correct: 1,
      explanation:
        "Guías actuales: ATB solo si hay sospecha o confirmación de infección de la necrosis.",
    },
    {
      question:
        "Marcador pronóstico simple a las 24h en pancreatitis aguda:",
      options: ["Lipasa", "BUN/urea creciente", "Amilasa", "Glucosa al ingreso"],
      correct: 1,
      explanation:
        "Aumento de BUN en las primeras 24-48h se asocia a mortalidad; refleja perfusión inadecuada.",
    },
    {
      question:
        "Paciente con pancreatitis aguda y FA, BD y ALT elevadas. ¿Etiología más probable?",
      options: ["Alcohólica", "Biliar", "HiperTG", "Idiopática"],
      correct: 1,
      explanation:
        "Patrón colestásico/hepatocelular en pancreatitis sugiere origen biliar; ALT >150 es muy específica.",
    },
  ],

  lipidos: [
    {
      question:
        "Paciente con LDL 175, HDL 38, TG 180. ¿Clasificación de Fredrickson más probable?",
      options: ["Tipo I", "Tipo IIa", "Tipo IIb", "Tipo V"],
      correct: 2,
      explanation:
        "IIb: aumento de LDL + VLDL (colesterol y TG elevados). IIa: solo LDL elevado.",
    },
    {
      question:
        "Niño con TG 2500, xantomas eruptivos y pancreatitis recurrente. ¿Tipo de Fredrickson?",
      options: ["Tipo I (déficit de LPL)", "Tipo IIa", "Tipo III", "Tipo IV"],
      correct: 0,
      explanation:
        "Tipo I: quilomicrones elevados por déficit de lipoproteína lipasa o ApoC-II; alto riesgo de pancreatitis.",
    },
    {
      question:
        "Valor deseable de LDL en prevención primaria de bajo riesgo (ATP/ESC):",
      options: ["<70", "<100", "<130", "<160"],
      correct: 2,
      explanation:
        "Bajo riesgo: LDL <130. Alto riesgo <70, muy alto riesgo <55 (ESC 2019).",
    },
    {
      question:
        "Paciente DM2 con enfermedad CV establecida. Meta de LDL (ESC 2019):",
      options: ["<130", "<100", "<70", "<55"],
      correct: 3,
      explanation:
        "Muy alto riesgo (DM + ECV): LDL <55 mg/dL y reducción ≥50% del basal.",
    },
    {
      question:
        "Paciente con TG 280, ¿se puede usar la fórmula de Friedewald?",
      options: [
        "Sí, hasta TG 400",
        "No, requiere medición directa de LDL si TG >400",
        "Solo si HDL >50",
        "Nunca",
      ],
      correct: 0,
      explanation:
        "Friedewald: LDL = CT − HDL − TG/5; válida con TG <400 mg/dL. Para TG mayores, usar LDL directo.",
    },
    {
      question:
        "Tipo III (disbetalipoproteinemia familiar). Hallazgo característico:",
      options: [
        "Xantomas palmares (estriados)",
        "Solo TG elevados",
        "HDL elevada aislada",
        "Lipoproteína (a) muy alta",
      ],
      correct: 0,
      explanation:
        "Tipo III: aumento de IDL por isoforma ApoE2/E2; xantomas palmares y tuberosos típicos.",
    },
    {
      question:
        "TG 950 mg/dL. Riesgo asociado más importante:",
      options: ["Enfermedad coronaria aislada", "Pancreatitis aguda", "Hipertensión", "ERC"],
      correct: 1,
      explanation:
        "TG >500-1000 mg/dL → riesgo significativo de pancreatitis. Tratar con fibratos/omega-3 y dieta.",
    },
    {
      question:
        "Estatina de elección de alta intensidad:",
      options: ["Pravastatina 40", "Simvastatina 20", "Atorvastatina 40-80 o rosuvastatina 20-40", "Lovastatina 20"],
      correct: 2,
      explanation:
        "Alta intensidad: atorva 40-80 o rosuva 20-40 (reducen LDL ≥50%).",
    },
    {
      question:
        "Paciente con LDL 190 mg/dL sin otras comorbilidades. ¿Sospecha?",
      options: ["Hiperlipidemia secundaria", "Hipercolesterolemia familiar", "Tipo I", "Tipo V"],
      correct: 1,
      explanation:
        "LDL ≥190 sugiere HF; buscar mutación LDLR/ApoB/PCSK9 y tamizar familiares.",
    },
    {
      question:
        "Paciente con HDL 28, TG 250, obesidad central, glucosa 110, HTA. ¿Patrón?",
      options: ["Síndrome metabólico", "Síndrome nefrótico", "Hipotiroidismo", "Hipercolesterolemia familiar"],
      correct: 0,
      explanation:
        "ATP-III: 3 de 5 (perímetro abdominal, TG, HDL bajo, HTA, glucosa alterada) = síndrome metabólico.",
    },
    {
      question:
        "Lipoproteína (a) elevada. Implicación clínica:",
      options: [
        "Riesgo CV independiente, sobre todo si historia familiar",
        "Solo se eleva en hipotiroidismo",
        "No tiene relevancia clínica",
        "Marca pancreatitis",
      ],
      correct: 0,
      explanation:
        "Lp(a) es factor de riesgo CV genético independiente; medir al menos una vez en la vida.",
    },
    {
      question:
        "Causa secundaria de dislipidemia más frecuente:",
      options: ["Hipotiroidismo", "Hipertiroidismo", "Hiperparatiroidismo", "Insuficiencia hepática"],
      correct: 0,
      explanation:
        "Hipotiroidismo, DM, ERC, síndrome nefrótico, alcohol y fármacos son causas secundarias frecuentes.",
    },
    {
      question:
        "Colesterol no-HDL: utilidad clínica:",
      options: [
        "Estimar VLDL aislada",
        "Mejor predictor de riesgo CV en pacientes con TG altos que LDL",
        "Reemplazar al perfil completo",
        "Solo se mide en pediatría",
      ],
      correct: 1,
      explanation:
        "no-HDL = CT − HDL incluye todas las lipoproteínas aterogénicas; preferido si TG ≥200.",
    },
    {
      question:
        "Paciente con estatina y CK >10× LSN con mialgia. ¿Conducta?",
      options: [
        "Continuar igual",
        "Suspender estatina y valorar rabdomiólisis",
        "Doblar la dosis",
        "Agregar fibrato",
      ],
      correct: 1,
      explanation:
        "Suspender, descartar rabdomiólisis, hidratar y reintroducir con estatina diferente o ezetimiba.",
    },
    {
      question:
        "Combinación con mayor riesgo de miopatía con estatina:",
      options: ["Ezetimiba", "Gemfibrozilo (fibrato)", "Niacina", "Resinas"],
      correct: 1,
      explanation:
        "Gemfibrozilo aumenta concentración de estatinas y riesgo de miopatía; preferir fenofibrato si necesario.",
    },
  ],
};

