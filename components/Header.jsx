import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-3 flex items-center justify-between gap-4">
        
        {/* Logo + Wordmark */}
        <a href="/" className="flex items-center gap-3">
          
          {/* Logo Image */}
          <div className="relative h-10 w-10 sm:h-11 sm:w-11">
            <Image
              src="/ardia-logo.png"
              alt="Ardia Health logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </div>

          {/* ARDIA HEALTH + Tagline */}
          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white">
                ARDIA
              </span>

              <span className="text-xs sm:text-sm font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                HEALTH
              </span>
            </div>

            <p className="text-[10px] sm:text-[11px] mt-0.5 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
              Human-centered care, amplified by AI and quantum intelligence.
            </p>
          </div>

        </a>

      </div>
    </header>
  );
}
