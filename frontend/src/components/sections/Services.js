import { SERVICES, SERVICES_COLOR_MAP } from "@/data";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-3">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Freight Solutions for{" "}
            <span className="text-blue-500">Every Need</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From full truckloads to specialized freight, we have the right
            dispatch solution to keep your cargo moving efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const c = SERVICES_COLOR_MAP[service.color];
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-7 border border-gray-100 ${c.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
              >
                <div
                  className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    {service.iconPaths.map((el, i) => {
                      if (el.tag === "path")
                        return <path key={i} d={el.d} />;
                      if (el.tag === "circle")
                        return <circle key={i} cx={el.cx} cy={el.cy} r={el.r} />;
                      if (el.tag === "rect")
                        return (
                          <rect
                            key={i}
                            x={el.x}
                            y={el.y}
                            width={el.width}
                            height={el.height}
                            rx={el.rx}
                          />
                        );
                      return null;
                    })}
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 group-hover:text-blue-500 transition-colors"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
