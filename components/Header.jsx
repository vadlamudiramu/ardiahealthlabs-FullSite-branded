export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-hero-gradient" />
          <div>
            <p className="text-sm font-semibold tracking-wide">
              <span className="text-slate-50">Ardia</span>
              <span className="text-sky-300">Health</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
              AI • Quantum • Care
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="/" className="hover:text-sky-300">Home</a>
          <a href="/solutions/flow" className="hover:text-sky-300">Flow AI</a>
          <a href="/solutions/predict" className="hover:text-sky-300">Predict AI</a>
          <a href="/demos/clinical-assistant" className="hover:text-sky-300">AI Demos</a>
          <a href="/research" className="hover:text-sky-300">Research</a>
          <a href="/blog" className="hover:text-sky-300">Blog</a>
          <a href="/contact" className="hover:text-sky-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}
