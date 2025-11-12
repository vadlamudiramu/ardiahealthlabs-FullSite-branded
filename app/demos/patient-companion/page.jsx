export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <p className="chip mb-3">Demo • Predictive Care</p>
        <h1 className="text-3xl font-semibold">Patient Companion Timeline</h1>
        <p className="text-slate-300 text-sm max-w-2xl mt-2">
          Show how Ardia Predict can turn streams of wearable and RPM data into
          a simple risk timeline your care team can act on.
        </p>
      </div>
      <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4 text-xs space-y-3">
        <p className="text-[11px] text-slate-400 mb-1">Mock risk timeline</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Day 0 — Baseline</span>
            <span className="chip bg-emerald-500/10 text-emerald-300">Low</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Day 3 — Sleep disruption</span>
            <span className="chip bg-amber-500/10 text-amber-300">Rising</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">
              Day 5 — HRV drop + elevated resting HR
            </span>
            <span className="chip bg-rose-500/10 text-rose-300">High</span>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-500">
        This page is for storytelling only — you can plug in real data streams
        once you connect to RPM vendors and EHR events.
      </p>
    </div>
  );
}
