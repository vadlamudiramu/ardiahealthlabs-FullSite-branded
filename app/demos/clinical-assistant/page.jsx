export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <p className="chip mb-3">Demo • Clinical Workflow</p>
        <h1 className="text-3xl font-semibold">AI Clinical Assistant</h1>
        <p className="text-slate-300 text-sm max-w-2xl mt-2">
          Use this page to walk stakeholders through a scripted flow: from raw
          intake notes and labs to an AI-assisted summary and suggested orders —
          always requiring clinician sign-off.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 text-xs">
        <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4 space-y-2">
          <p className="font-semibold text-sky-300 text-[11px]">Step 1 — Intake</p>
          <p className="text-slate-200">
            Paste or dictate chief complaint, HPI, and nursing notes.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4 space-y-2">
          <p className="font-semibold text-violet-300 text-[11px]">Step 2 — Draft</p>
          <p className="text-slate-200">
            Model drafts an assessment & plan with reasoning and confidence
            bands.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4 space-y-2">
          <p className="font-semibold text-emerald-300 text-[11px]">
            Step 3 — Sign-off
          </p>
          <p className="text-slate-200">
            Clinician edits and signs. System stores provenance and audit trail.
          </p>
        </div>
      </div>
      <div className="rounded-2xl bg-slate-900/70 border border-amber-400/40 p-4 text-xs text-amber-100">
        <p className="font-semibold text-[11px] mb-1">Important</p>
        <p>
          This is a non-clinical demo surface — no real PHI, no production
          data. In a live install, all PHI would live behind the customer&apos;s
          firewall, with BAAs and strict access controls.
        </p>
      </div>
    </div>
  );
}
