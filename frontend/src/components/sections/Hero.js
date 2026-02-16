import { HERO_FEATURE_PILLS, HERO_LIVE_STATS, HERO_TRUST_BADGES } from "@/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-950 flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              #1 Truck Dispatch Service
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Move Freight{" "}
              <span className="text-blue-400">Faster</span>{" "}
              &amp; Smarter
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Professional truck dispatch solutions that maximize your loads,
              minimize empty miles, and keep your fleet profitable — 24/7
              support included.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {HERO_FEATURE_PILLS.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  <svg
                    className="w-3.5 h-3.5 text-blue-400 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-base rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
              >
                Get a Free Quote
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-base rounded-xl border border-white/10 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                See How It Works
              </a>
            </div>
          </div>

          {/* Right — Stats Card Stack */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Main card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400 text-sm font-medium">
                  Live Dispatch Activity
                </span>
                <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold bg-green-400/10 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Live
                </span>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {HERO_LIVE_STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-extrabold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Route card */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    Route Optimization
                  </div>
                  <div className="text-gray-400 text-xs">
                    Reduce empty miles by up to 40%
                  </div>
                </div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }} />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-gray-500 text-xs">Efficiency Score</span>
                <span className="text-blue-400 text-xs font-bold">78%</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4">
              {HERO_TRUST_BADGES.map((badge) => (
                <div
                  key={badge.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3"
                >
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      {badge.title}
                    </div>
                    <div className="text-gray-500 text-xs">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
