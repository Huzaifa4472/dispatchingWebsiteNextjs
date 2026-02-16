import { STATS } from "@/data";

export default function Stats() {
  return (
    <section className="py-0">
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 flex flex-col items-center text-center group hover:bg-gray-800 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d={stat.iconPath} />
                  </svg>
                </div>
                <div className="text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
