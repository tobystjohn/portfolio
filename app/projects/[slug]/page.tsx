import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects, getProject } from "@/app/lib/projects";
import Nav from "@/app/components/Nav";
import ProjectHeroMedia from "@/app/components/ProjectHeroMedia";
import ScrollVideoHero from "@/app/components/ScrollVideoHero";
import MorphingWingScroll from "@/app/components/MorphingWingScroll";
import RevealSection from "@/app/components/RevealSection";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: `${p.title} — Toby St. John`, description: p.tagline };
}

const statusStyles: Record<string, string> = {
  "In Development": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "In Progress": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Completed: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const isScrollVideo = p.hero.type === "scroll-video";

  return (
    <main className="flex-1">
      <Nav />

      {isScrollVideo ? (
        <ScrollVideoHero project={p} />
      ) : (
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <ProjectHeroMedia hero={p.hero} accent={p.accent} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />

          <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-16 pt-28">
            <div className="font-mono text-xs text-white/50 mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#work" className="hover:text-emerald-400 transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-white/80">{p.title}</span>
            </div>

            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-3">
              {p.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl">
              {p.title}
            </h1>
            {p.subtitle && (
              <p className="text-xl md:text-2xl text-emerald-400 font-semibold mb-4 drop-shadow-lg">
                {p.subtitle}
              </p>
            )}
            <p className="max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed drop-shadow-lg">
              {p.tagline}
            </p>
          </div>
        </section>
      )}

      {p.slug === "morphing-wing" && <MorphingWingScroll />}

      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap gap-x-10 gap-y-4 items-center">
          {p.meta.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
                {m.label}
              </span>
              <span className="text-white font-medium">{m.value}</span>
            </div>
          ))}
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
              Status
            </span>
            <span
              className={`inline-block self-start font-mono text-xs px-2.5 py-1 rounded-full border ${
                statusStyles[p.status] ?? "bg-white/10 text-white/70 border-white/20"
              }`}
            >
              {p.status}
            </span>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          {p.sections.map((s) => (
            <RevealSection key={s.heading}>
              <h2 className="text-3xl font-semibold tracking-tight mb-5">
                {s.heading}
              </h2>
              {s.body.map((para, i) => (
                <p key={i} className="text-white/75 leading-relaxed mb-4 text-lg">
                  {para}
                </p>
              ))}
              {s.list && (
                <ul className="space-y-2 mt-4">
                  {s.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/75 leading-relaxed"
                    >
                      <span className="text-emerald-400 mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.image && (
                <figure className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-black/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.imageCaption ?? s.heading}
                    className="w-full h-auto"
                  />
                  {s.imageCaption && (
                    <figcaption className="px-4 py-3 text-sm text-white/60 border-t border-white/5 font-mono">
                      {s.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </RevealSection>
          ))}
        </div>

        <aside className="space-y-4 md:sticky md:top-24 self-start">
          {p.sidebar.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-4">
                {card.title}
              </div>
              {card.rows && (
                <div className="space-y-2.5">
                  {card.rows.map((r) => (
                    <div
                      key={r.label}
                      className="flex justify-between gap-3 text-sm"
                    >
                      <span className="text-white/50">{r.label}</span>
                      <span className="text-white/90 text-right">{r.value}</span>
                    </div>
                  ))}
                </div>
              )}
              {card.tags && (
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-1 rounded-full border border-white/10 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>
      </section>

      <section className="border-t border-white/5 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-sm text-white/60 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
