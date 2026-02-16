'use client';
import { SITE_CONFIG, CTA_PERKS, EQUIPMENT_TYPES } from "@/data";
export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-blue-400 font-bold text-sm tracking-widest uppercase mb-4">
              Get Started Today
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to Boost Your{" "}
              <span className="text-blue-400">Revenue?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Join 500+ owner-operators and fleet owners who trust SwiftHaul to
              keep their trucks loaded and profitable. Get your free quote today
              — no commitment required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {CTA_PERKS.map((perk) => (
                <div key={perk} className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{perk}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-3 px-6 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/30"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_CONFIG.phone}
              </a>
              <span className="text-gray-600 text-sm">Available 24/7</span>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">
              Get Your Free Quote
            </h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="w-full bg-white/10 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-white/10 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/10 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Equipment Type
                  </label>
                  <select className="w-full bg-white/10 border border-white/10 focus:border-blue-500 text-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition-colors">
                    <option value="" className="bg-gray-900">Select type</option>
                    {EQUIPMENT_TYPES.map((eq) => (
                      <option key={eq.value} value={eq.value} className="bg-gray-900">{eq.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Number of Trucks
                  </label>
                  <input
                    type="number"
                    placeholder="1"
                    min="1"
                    className="w-full bg-white/10 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your preferred lanes, goals, or any questions..."
                  className="w-full bg-white/10 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-base rounded-xl transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 mt-2"
              >
                Send My Free Quote Request
              </button>
              <p className="text-gray-600 text-xs text-center">
                We&apos;ll respond within 2 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
