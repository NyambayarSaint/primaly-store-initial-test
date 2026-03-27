import { Link } from "react-router-dom";
import Counter from "../components/Counter";

const stats = [
  { value: "4 files", label: "to customize the entire landing experience" },
  { value: "<1 min", label: "to understand the structure and start swapping content" },
  { value: "100%", label: "Tailwind-driven styling with no extra UI dependencies" },
] as const;

const highlights = [
  {
    title: "Strong first impression",
    description:
      "A high-contrast hero, layered gradients, and card-driven composition make the template feel premium immediately.",
  },
  {
    title: "Starter-friendly structure",
    description:
      "Sections are organized by story: opening pitch, proof points, feature detail, and a clean final call to action.",
  },
  {
    title: "Easy to remix",
    description:
      "Everything lives in plain React components and shared CSS, so the design is opinionated without being rigid.",
  },
] as const;

const roadmap = [
  "Swap the hero copy for your product positioning.",
  "Replace the mock metrics with product shots, testimonials, or pricing.",
  "Extend the routes as the project grows past a single landing page.",
] as const;

const chartHeights = [38, 52, 46, 70, 60, 88, 76] as const;

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <section className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="animate-rise space-y-8">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
              Refined React starter for modern product launches
            </span>
            <h1 className="max-w-3xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              A beautiful hero homepage that feels shipped before you start shipping.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              This React, TypeScript, and Tailwind starter now opens with a sharper story,
              richer atmosphere, and a structure that is ready for real product marketing
              instead of placeholder text.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#highlights"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Explore the homepage
            </a>
            <Link
              to="/about"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View the stack
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="glass-panel rounded-[1.5rem] p-5">
                <p className="font-display text-3xl text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/20 via-transparent to-amber-200/10 blur-2xl" />
          <div className="glass-panel-strong animate-float relative overflow-hidden rounded-[2.25rem] p-5 sm:p-6">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-300/80" />
              <span className="h-3 w-3 rounded-full bg-amber-200/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
              <span className="ml-auto rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Live preview
              </span>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
                    Campaign Pulse
                  </p>
                  <h2 className="mt-3 text-3xl text-white">Story-first landing layout</h2>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                    Combine editorial typography, atmospheric backgrounds, and modular cards
                    without adding a component library.
                  </p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
                  +18.2%
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-slate-500">Retention</p>
                  <p className="mt-2 text-xl font-semibold text-white">72%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-slate-500">Conversion</p>
                  <p className="mt-2 text-xl font-semibold text-white">8.4%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-slate-500">Bounce</p>
                  <p className="mt-2 text-xl font-semibold text-white">19%</p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-sky-400/10 via-transparent to-amber-200/10 p-4">
                <div className="flex h-40 items-end gap-3">
                  {chartHeights.map((height, index) => (
                    <div key={height} className="flex flex-1 flex-col justify-end gap-2">
                      <div
                        className="rounded-t-full bg-gradient-to-t from-cyan-300 via-sky-400 to-emerald-300"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-center text-xs text-slate-500">
                        W{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <Counter />

              <div className="glass-panel rounded-[1.75rem] p-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
                  Build Roadmap
                </p>
                <div className="mt-5 space-y-4">
                  {roadmap.map((item, index) => (
                    <div key={item} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="grid gap-5 pt-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {highlights.map((item) => (
          <article key={item.title} className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
              Highlight
            </p>
            <h2 className="mt-4 text-3xl text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="glass-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.36em] text-slate-500">
              What to edit next
            </p>
            <h2 className="max-w-2xl text-4xl text-white sm:text-5xl">
              Replace the template copy, keep the pacing, and turn this into your own launch
              sequence.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              The structure is deliberately simple: update the copy, swap cards for your own
              proof, and extend the routes when the project needs more than a single page.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <code className="rounded-full border border-white/10 bg-slate-950/50 px-5 py-3 text-sm text-slate-200">
              src/pages/Home.tsx
            </code>
            <code className="rounded-full border border-white/10 bg-slate-950/50 px-5 py-3 text-sm text-slate-200">
              src/App.tsx
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
