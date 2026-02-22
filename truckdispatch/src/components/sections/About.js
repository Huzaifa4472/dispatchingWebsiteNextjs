import { ABOUT_HIGHLIGHTS, ABOUT_DRIVER_AVATARS } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-900 aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-blue-500/30 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.8}
                  >
                    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <p className="text-gray-600 text-sm">Fleet Operations</p>
                </div>
              </div>
              {/* Overlay stat card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      Revenue Up 35%
                    </div>
                    <div className="text-gray-300 text-sm">
                      Average owner-operator increase after 90 days
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-blue-500 rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-blue-500/40 rotate-3">
              <span className="text-4xl font-extrabold text-white leading-none">
                10+
              </span>
              <span className="text-white/80 text-xs font-bold text-center leading-tight mt-1">
                Years of
                <br />
                Excellence
              </span>
            </div>

            {/* Floating trust card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <div className="flex -space-x-2">
                {ABOUT_DRIVER_AVATARS.map((avatar, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${avatar.bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {avatar.initial}
                    </div>
                  ))}
              </div>
              <div>
                <div className="text-gray-900 font-bold text-sm">500+ Drivers</div>
                <div className="text-gray-400 text-xs">Actively dispatched</div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-4">
              About Syntax Logistics
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              We Keep Your Wheels{" "}
              <span className="text-blue-500">Rolling</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Syntax Logistics is a premium truck dispatch company specializing in
              owner-operators and small fleets. We act as your back-office
              team — finding loads, negotiating rates, and handling all the
              paperwork so you can focus on what you do best: driving.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              With over a decade of experience and a team of expert dispatchers
              who understand the trucking industry inside and out, we help you
              maximize revenue, minimize downtime, and grow your business.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-bold text-gray-900 text-sm mb-1">
                      {item.title}
                    </div>
                    <div className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
              >
                Start Dispatching
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 border border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-500 font-bold rounded-xl transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
