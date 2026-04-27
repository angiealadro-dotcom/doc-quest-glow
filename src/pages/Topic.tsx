import { Link, useParams } from "react-router-dom";
import { topics } from "@/data/topics";
import { ArrowLeft, ExternalLink, GraduationCap } from "lucide-react";

const Topic = () => {
  const { slug } = useParams();
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
        <div>
          <h1 className="text-3xl font-bold">Tema no encontrado</h1>
          <Link to="/" className="mt-4 inline-block text-primary underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <nav className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-smooth hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
          <div className="flex min-w-0 items-center gap-3">
            <span className="text-2xl">{topic.emoji}</span>
            <div className="min-w-0">
              <h1 className="truncate text-base font-bold leading-tight md:text-lg">{topic.title}</h1>
              <p className="truncate text-xs text-muted-foreground">{topic.short}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={topic.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-smooth hover:bg-secondary"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Pantalla completa
            </a>
            <Link
              to="/evaluacion"
              className="hidden items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1.5 text-xs font-semibold text-[hsl(var(--ink))] shadow-soft transition-smooth hover:shadow-glow sm:inline-flex"
            >
              <GraduationCap className="h-3.5 w-3.5" /> Evaluación
            </Link>
          </div>
        </div>
      </nav>

      <iframe
        key={topic.slug}
        src={topic.file}
        title={topic.title}
        className="h-[calc(100vh-57px)] w-full flex-1 border-0 bg-white"
      />
    </div>
  );
};

export default Topic;
