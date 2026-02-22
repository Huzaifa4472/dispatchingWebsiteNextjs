import { FOOTER_LINKS, SITE_CONFIG } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-xl">
                  Syntax<span className="text-blue-400"> Logistics</span>
                </div>
                <div className="text-gray-600 text-[10px] tracking-widest uppercase">
                  {SITE_CONFIG.tagline}
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Professional truck dispatch services for owner-operators and small
              fleets. We keep your trucks loaded and your revenue growing — 24/7.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-6">
              <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                {SITE_CONFIG.phone}
              </a>
              <a href={SITE_CONFIG.emailHref} className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {SITE_CONFIG.availability}
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
                {SITE_CONFIG.address}
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {SITE_CONFIG.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 bg-white/5 hover:bg-blue-500 hover:text-white text-gray-500 rounded-lg flex items-center justify-center transition-all"
                  aria-label={s.name}
                >
                  <span className="text-xs font-bold uppercase">{s.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm mb-5">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name} {SITE_CONFIG.tagline}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
