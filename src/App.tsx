import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
] as const;

function getRouterBasename() {
  if (typeof window === "undefined") return undefined;
  return window.location.pathname.match(/^\/__preview__\/\d+/)?.[0];
}

export default function App() {
  const basename = getRouterBasename();

  return (
    <Router basename={basename}>
      <div className="app-shell relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-[-9rem] top-14 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl" />
          <div className="absolute bottom-[-12rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-10 sm:px-6 lg:px-8">
          <header className="sticky top-0 z-20 pt-4">
            <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
              <NavLink to="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-emerald-300 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.35)]">
                  A
                </span>
                <div>
                  <p className="font-display text-lg leading-none text-white">Aster</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.34em] text-slate-400">
                    Starter
                  </p>
                </div>
              </NavLink>

              <nav className="flex items-center gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      [
                        "rounded-full px-4 py-2 text-sm font-medium transition duration-200",
                        isActive
                          ? "bg-white text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.14)]"
                          : "text-slate-300 hover:bg-white/5 hover:text-white",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1 py-10 sm:py-12 lg:py-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <footer className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>React 19, TypeScript, Tailwind v4, React Router v7, and Vite v7.</p>
            <p>
              Start in{" "}
              <code className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
                src/pages/Home.tsx
              </code>
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
}
