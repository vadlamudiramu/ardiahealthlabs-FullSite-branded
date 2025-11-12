'use client';

import { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus('Sent! We will get back to you shortly.');
      e.currentTarget.reset();
    } else {
      setStatus('Something went wrong. Please try again or email hello@ardiahealthlabs.com');
    }
  }

  return (
    <div className="max-w-lg space-y-4">
      <div>
        <p className="chip mb-2">Zero-PHI contact</p>
        <h1 className="text-3xl font-semibold">Contact Ardia Health</h1>
        <p className="text-slate-300 text-sm mt-2">
          Share your use case or pilot idea. Please do not include any patient
          information — we will set up a secure channel if needed.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full rounded-lg border border-white/15 bg-slate-900/50 px-3 py-2 text-sm"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className="w-full rounded-lg border border-white/15 bg-slate-900/50 px-3 py-2 text-sm"
          name="email"
          type="email"
          placeholder="Work email"
          required
        />
        <input
          className="w-full rounded-lg border border-white/15 bg-slate-900/50 px-3 py-2 text-sm"
          name="org"
          placeholder="Organization (optional)"
        />
        <textarea
          className="w-full rounded-lg border border-white/15 bg-slate-900/50 px-3 py-2 text-sm min-h-[120px]"
          name="message"
          placeholder="How can we help?"
          required
        />
        <p className="text-[11px] text-slate-500">
          By submitting, you confirm you will not include protected health
          information (PHI) in this form.
        </p>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold hover:bg-sky-400"
        >
          Send message
        </button>
      </form>

      {status && <p className="text-[12px] text-slate-300">{status}</p>}
    </div>
  );
}
