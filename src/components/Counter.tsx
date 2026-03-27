import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(18);
  const progress = Math.min(100, Math.max(12, (count + 8) * 3));

  const status =
    count <= 5 ? "Needs attention" : count <= 24 ? "Healthy momentum" : "Campaign surging";

  return (
    <div className="glass-panel flex h-full flex-col rounded-[1.75rem] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
            Live Signal
          </p>
          <h3 className="font-display mt-2 text-2xl text-white">Starter interactivity</h3>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
          {status}
        </span>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="max-w-[10rem]">
          <p className="text-sm leading-6 text-slate-400">
            Keep one small stateful component on the page so the starter shows real React behavior.
          </p>
        </div>
        <span className="font-display text-6xl tabular-nums text-white">
          {count.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="mt-5 h-2 rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl font-semibold text-slate-200 transition hover:bg-white/10"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10"
        >
          Reset
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 text-xl font-semibold text-slate-950 shadow-[0_12px_24px_rgba(45,212,191,0.24)] transition hover:scale-[1.03]"
        >
          +
        </button>
      </div>
    </div>
  );
}
