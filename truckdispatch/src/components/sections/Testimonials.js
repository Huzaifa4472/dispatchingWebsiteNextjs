import { TESTIMONIALS, TRUST_BAR_STATS } from "@/data";

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Drivers Love{" "}
            <span className="text-blue-500">Syntax Logistics</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Don&apos;t take our word for it — hear from the owner-operators and
            fleet owners who grow their business with us every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-blue-100 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.998C8.001 11.795 9.795 10 12 10l-2-2zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.002C21.999 11.795 23.793 10 26 10l-2-2z" />
              </svg>

              <StarRating count={t.rating} />

              <p className="text-gray-600 text-base leading-relaxed mt-4 mb-6">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-blue-500">
                    {t.stat.value}
                  </div>
                  <div className="text-gray-400 text-xs">{t.stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 bg-white border border-gray-100 rounded-2xl p-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {TRUST_BAR_STATS.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-extrabold text-gray-900">
                  {item.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
