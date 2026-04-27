import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "@/data/questions";
import { ArrowLeft, CheckCircle2, RotateCcw, XCircle } from "lucide-react";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Evaluation = () => {
  const [seed, setSeed] = useState(0);
  const quiz = useMemo(() => shuffle(questions), [seed]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const q = quiz[index];

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    const ok = i === q.correct;
    if (ok) setScore((s) => s + 1);
    setAnswered((a) => [...a, ok]);
  };

  const next = () => {
    if (index + 1 >= quiz.length) {
      setDone(true);
    } else {
      setIndex(index + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setSeed((s) => s + 1);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setAnswered([]);
    setDone(false);
  };

  const progress = ((index + (selected !== null ? 1 : 0)) / quiz.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/85 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-smooth hover:bg-secondary">
            <ArrowLeft className="h-4 w-4" /> Inicio
          </Link>
          <h1 className="text-lg font-bold">🧪 Evaluación</h1>
          <button
            onClick={restart}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-smooth hover:bg-secondary"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reiniciar
          </button>
        </div>
      </nav>

      <main className="container mx-auto max-w-2xl px-4 py-10">
        {!done ? (
          <>
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Pregunta {index + 1} de {quiz.length}</span>
                <span>Puntaje: {score}</span>
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
                {q.topic}
              </span>
              <h2 className="mt-4 text-balance text-xl font-bold leading-snug md:text-2xl">
                {q.question}
              </h2>

              <div className="mt-6 space-y-3">
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.correct;
                  const isPicked = i === selected;
                  let cls = "border-border bg-background hover:border-primary hover:bg-secondary/50";
                  if (selected !== null) {
                    if (isCorrect) cls = "border-[hsl(var(--teal))] bg-[hsl(var(--teal))]/10 text-[hsl(var(--teal))]";
                    else if (isPicked) cls = "border-[hsl(var(--alert))] bg-[hsl(var(--alert))]/10 text-[hsl(var(--alert))]";
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
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-sm font-bold">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                      </span>
                      {selected !== null && isCorrect && <CheckCircle2 className="h-5 w-5" />}
                      {selected !== null && isPicked && !isCorrect && <XCircle className="h-5 w-5" />}
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
                  {index + 1 >= quiz.length ? "Ver resultados" : "Siguiente pregunta"}
                </button>
              )}
            </article>
          </>
        ) : (
          <article className="rounded-[var(--radius)] border border-border bg-gradient-card p-10 text-center shadow-elegant">
            <div className="text-6xl">{score / quiz.length >= 0.7 ? "🏆" : "📚"}</div>
            <h2 className="mt-4 text-3xl font-bold">Resultado final</h2>
            <p className="mt-2 text-muted-foreground">
              {answered.filter(Boolean).length} aciertos sobre {quiz.length} preguntas
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
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-smooth hover:bg-secondary"
              >
                Volver al inicio
              </Link>
            </div>
          </article>
        )}
      </main>
    </div>
  );
};

export default Evaluation;
