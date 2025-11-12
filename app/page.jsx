export default function Page() {
  return (
    <div className="space-y-12">
      <section className="mt-4 grid gap-8 lg:grid-cols-[3fr,2fr] items-center">
        <div className="space-y-6">
          <span className="chip">AI-first. Quantum-ready.</span>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Build the{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              intelligent hospital
            </span>{" "}
            your patients deserve.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            Ardia Health delivers clinical workflow automation, imaging
            intelligence, and predictive care surfaces — without adding to
            provider burnout. Designed for today&apos;s AI, engineered for
            tomorrow&apos;s quantum acceleration.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/demos/clinical-assistant"
              className="px-4 py-2 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold hover:bg-sky-400"
            >
              View AI demo
            </a>
            <a
              href="/contact"
              className="px-4 py-2 rounded-lg border border-slate-600 text-sm font-semibold text-slate-200 hover:border-sky-400"
            >
              Talk to founder
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
            <span>Zero-PHI website contact</span>
            <span>Audit-ready architecture</span>
            <span>EMR-agnostic design</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl bg-slate-900 border border-sky-500/40 shadow-xl p-4 space-y-3">
            <p className="text-xs font-semibold text-slate-300">
              Live signal board — ICU pilot
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
              <div className="rounded-xl bg-slate-900/70 border border-white/10 p-3">
                <p className="text-[10px] text-slate-400">Worklist impact</p>
                <p className="text-lg font-semibold text-emerald-400">-37%</p>
                <p className="text-[10px] text-slate-400 mt-1">
                  avg. charting time per patient
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/70 border border-white/10 p-3">
                <p className="text-[10px] text-slate-400">Imaging latency</p>
                <p className="text-lg font-semibold text-sky-300">-21 min</p>
                <p className="text-[10px] text-slate-400 mt-1">
                  faster time-to-first-read
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/70 border border-white/10 p-3 col-span-2">
                <p className="text-[10px] text-slate-400">Risk surfacing</p>
                <p className="text-[11px] text-slate-300 mt-1">
                  Models highlight patients with rising risk scores and
                  summarize key drivers for clinician verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-200">
          Platform pillars
        </h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4 space-y-2">
            <p className="text-xs font-semibold text-sky-300">Ardia Flow</p>
            <p className="text-slate-200">
              Clinical workflow copilot for note generation, order suggestions,
              and discharge summaries.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4 space-y-2">
            <p className="text-xs font-semibold text-violet-300">Ardia Vision</p>
            <p className="text-slate-200">
              Imaging intelligence for radiology and pathology with explainable
              overlays and QA checks.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4 space-y-2">
            <p className="text-xs font-semibold text-emerald-300">
              Ardia Predict
            </p>
            <p className="text-slate-200">
              Real-time risk scoring using vitals, labs, and wearables to
              surface silent deterioration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
