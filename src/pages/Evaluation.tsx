import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { quizzes, type Question } from "@/data/questions";
import { topics } from "@/data/topics";
import { ArrowLeft, CheckCircle2, RotateCcw, Stethoscope, XCircle } from "lucide-react";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const accentMap = {
  gold: "from-[hsl(var(--gold))] to-[hsl(var(--gold-light))]",
  teal: "from-[hsl(var(--teal))] to-[hsl(var(--teal-light))]",
  alert: "from-[hsl(var(--alert))] to-[hsl(var(--gold-light))]",
  ink: "from-[hsl(var(--ink))] to-[hsl(var(--ink-light))]",
} as const;

const Evaluation = () => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const activeTopic = topics.find((t) => t.slug === activeSlug);
  const quiz: Question[] = useMemo(() => {
    if (!activeSlug) return [];
    return shuffle(quizzes[activeSlug] ?? []);
  }, [activeSlug, seed]);

  const startTopic = (slug: string) => {
    setActiveSlug(slug);
    setSeed((s) => s + 1);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const restart = () => activeSlug && startTopic(activeSlug);

  const exitToMenu = () => {
    setActiveSlug(null);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const q = quiz[index];

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= quiz.length) {
      setDone(true);
    } else {
      setIndex(index + 1);
      setSelected(null);
    }
  };

  const progress =
    quiz.length === 0 ? 0 : ((index + (selected !== null ? 1 : 0)) / quiz.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/85 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-smooth hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" /> Inicio
          </Link>
          <h1 className="truncate text-base font-bold md:text-lg">
            🧪 Evaluación {activeTopic ? `· ${activeTopic.title}` : "por tema"}
          </h1>
          <div className="flex items-center gap-2">
            {activeSlug && !done && (
              <button
                onClick={exitToMenu}
                className="hidden rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-smooth hover:bg-secondary sm:inline-flex"
              >
                Cambiar tema
              </button>
            )}
            {activeSlug && (
              <button
                onClick={restart}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-smooth hover:bg-secondary"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reiniciar
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* SELECTOR DE TEMA */}
      {!activeSlug && (
        <main className="container mx-auto max-w-5xl px-4 py-12">
          <header className="mb-10 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[hsl(var(--teal))]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--teal))]">
              <Stethoscope className="h-3.5 w-3.5" />
              Casos clínicos
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Elige un tema para evaluarte</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              Preguntas estilo parcial: viñeta clínica breve + opción múltiple, con explicación inmediata.
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => {
              const count = quizzes[t.slug]?.length ?? 0;
              const disabled = count === 0;
              return (
                <button
                  key={t.slug}
                  disabled={disabled}
                  onClick={() => startTopic(t.slug)}
                  className="group relative overflow-hidden rounded-[var(--radius)] border border-border bg-gradient-card p-6 text-left shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentMap[t.accent]}`}
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <span className="text-3xl">{t.emoji}</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
                      {count} {count === 1 ? "caso" : "casos"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug transition-smooth group-hover:text-primary">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[hsl(var(--gold))]">{t.short}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{t.description}</p>
                </button>
              );
            })}
          </div>
        </main>
      )}

      {/* QUIZ EN CURSO */}
      {activeSlug && !done && q && (
        <main className="container mx-auto max-w-2xl px-4 py-10">
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>
                Caso {index + 1} de {quiz.length}
              </span>
              <span>Aciertos: {score}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-gradient-gold transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <article className="rounded-[var(--radius)] border border-border bg-gradient-card p-8 shadow-elegant">
            <span className="inline-block rounded-full bg-[hsl(var(--teal))]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--teal))]">
              {activeTopic?.emoji} {activeTopic?.title}
            </span>
            <h2 className="mt-4 text-balance text-lg font-semibold leading-relaxed md:text-xl">
              {q.question}
            </h2>

            <div className="mt-6 space-y-3">
              {q.options.map((opt, i) => {
                const isCorrect = i === q.correct;
                const isPicked = i === selected;
                let cls =
                  "border-border bg-background hover:border-primary hover:bg-secondary/50";
                if (selected !== null) {
                  if (isCorrect)
                    cls =
                      "border-[hsl(var(--teal))] bg-[hsl(var(--teal))]/10 text-[hsl(var(--teal))]";
                  else if (isPicked)
                    cls =
                      "border-[hsl(var(--alert))] bg-[hsl(var(--alert))]/10 text-[hsl(var(--alert))]";
                  else cls = "border-border bg-background opacity-60";
                }
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    disabled={selected !== null}
                    className={`flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left font-medium transition-smooth ${cls}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current text-sm font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
                    </span>
                    {selected !== null && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0" />}
                    {selected !== null && isPicked && !isCorrect && (
                      <XCircle className="h-5 w-5 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <div
                className={`mt-6 rounded-xl border-l-4 p-4 ${
                  selected === q.correct
                    ? "border-[hsl(var(--teal))] bg-[hsl(var(--teal))]/8"
                    : "border-[hsl(var(--alert))] bg-[hsl(var(--alert))]/8"
                }`}
              >
                <p className="text-sm font-bold">
                  {selected === q.correct ? "✓ Correcto" : "✗ Incorrecto"}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/90">{q.explanation}</p>
              </div>
            )}

            {selected !== null && (
              <button
                onClick={next}
                className="mt-6 w-full rounded-full bg-gradient-gold px-6 py-3 font-semibold text-[hsl(var(--ink))] shadow-soft transition-smooth hover:shadow-glow"
              >
                {index + 1 >= quiz.length ? "Ver resultados" : "Siguiente caso"}
              </button>
            )}
          </article>
        </main>
      )}

      {/* RESULTADOS */}
      {activeSlug && done && (
        <main className="container mx-auto max-w-2xl px-4 py-12">
          <article className="rounded-[var(--radius)] border border-border bg-gradient-card p-10 text-center shadow-elegant">
            <div className="text-6xl">{score / quiz.length >= 0.7 ? "🏆" : "📚"}</div>
            <h2 className="mt-4 text-3xl font-bold">{activeTopic?.title}</h2>
            <p className="mt-2 text-muted-foreground">
              {score} aciertos sobre {quiz.length} casos
            </p>
            <div className="mx-auto mt-6 inline-flex h-32 w-32 items-center justify-center rounded-full bg-gradient-gold text-4xl font-black text-[hsl(var(--ink))] shadow-elegant">
              {Math.round((score / quiz.length) * 100)}%
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-[hsl(var(--ink))] shadow-soft transition-smooth hover:shadow-glow"
              >
                <RotateCcw className="h-4 w-4" /> Reintentar
              </button>
              <button
                onClick={exitToMenu}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-smooth hover:bg-secondary"
              >
                Elegir otro tema
              </button>
            </div>
          </article>
        </main>
      )}
    </div>
  );
};

export default Evaluation;
