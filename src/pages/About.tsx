import { Link } from "react-router-dom";

const stack = [
  {
    name: "React 19",
    summary: "A modern rendering model with a familiar component workflow.",
  },
  {
    name: "TypeScript",
    summary: "Strict mode is enabled so the starter nudges you toward safer code.",
  },
  {
    name: "Tailwind CSS v4",
    summary: "Fast styling with utility classes, custom tokens, and no setup ceremony.",
  },
  {
    name: "React Router v7",
    summary: "Simple multi-page structure out of the box, ready for expansion.",
  },
];

const launchNotes = [
  "Swap the placeholder brand and copy for your own product story.",
  "Use the homepage sections as a starting point for pricing, testimonials, or product shots.",
  "Keep the visual language consistent by extending the shared CSS tokens in `src/index.css`.",
];

export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Built for fast iteration
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl">
              A clean starter stack with enough structure to feel real on day one.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              This template starts with routing, strict TypeScript, Tailwind v4, and a
              designed homepage so your first commit can focus on product direction instead of
              boilerplate.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Back to home
            </Link>
            <code className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200">
              src/index.css
            </code>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 animate-float">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.36em] text-slate-500">
            Launch Notes
          </p>
          <div className="mt-5 space-y-4">
            {launchNotes.map((note, index) => (
              <div
                key={note}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-4 text-slate-300"
              >
                <p className="text-sm font-medium text-white">0{index + 1}</p>
                <p className="mt-2 text-sm leading-7">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {stack.map((item) => (
          <article key={item.name} className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
              Included
            </p>
            <h2 className="mt-4 text-3xl text-white">{item.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
