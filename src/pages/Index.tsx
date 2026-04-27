import { Link } from "react-router-dom";
import { topics } from "@/data/topics";
import { GraduationCap, Sparkles, BookOpen } from "lucide-react";

const accentMap = {
  gold: "from-[hsl(var(--gold))] to-[hsl(var(--gold-light))]",
  teal: "from-[hsl(var(--teal))] to-[hsl(var(--teal-light))]",
  alert: "from-[hsl(var(--alert))] to-[hsl(var(--gold-light))]",
  ink: "from-[hsl(var(--ink))] to-[hsl(var(--ink-light))]",
} as const;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.04) 30px, rgba(255,255,255,0.04) 60px)",
          }}
          aria-hidden
        />
        <div className="container relative mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-foreground/90">
            <Sparkles className="h-3.5 w-3.5" />
            Notas clínicas premium
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black leading-tight md:text-6xl">
            Plataforma de Estudio
            <span
              className="block bg-gradient-gold bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Medicina
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base italic text-primary-foreground/80 md:text-lg">
            Nueve módulos de bioquímica clínica con tablas, fórmulas y algoritmos diagnósticos integrados.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/evaluacion"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-[hsl(var(--ink))] shadow-elegant transition-smooth hover:shadow-glow"
            >
              <GraduationCap className="h-4 w-4" />
              Iniciar evaluación
            </Link>
            <a
              href="#temas"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 font-medium text-primary-foreground transition-smooth hover:bg-primary-foreground/10"
            >
              <BookOpen className="h-4 w-4" />
              Explorar temas
            </a>
          </div>
        </div>
      </header>

      {/* GRID */}
      <main id="temas" className="container mx-auto px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Módulos de estudio</h2>
            <p className="mt-2 text-muted-foreground">9 temas · contenido íntegro con tablas, fórmulas y diagramas.</p>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <Link
              key={t.slug}
              to={`/tema/${t.slug}`}
              className="group relative overflow-hidden rounded-[var(--radius)] border border-border bg-gradient-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentMap[t.accent]}`}
                aria-hidden
              />
              <div className="flex items-start justify-between">
                <div className="text-4xl">{t.emoji}</div>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
                  Módulo {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-snug transition-smooth group-hover:text-primary">
                {t.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[hsl(var(--gold))]">{t.short}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
              <div className="mt-5 flex items-center text-sm font-semibold text-primary">
                Abrir notas
                <svg className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border bg-secondary/40 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Plataforma de Estudio Médico — Notas clínicas integradas</p>
      </footer>
    </div>
  );
};

export default Index;
