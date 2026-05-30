import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/data/navigation';
import { SOCIAL_LINKS } from '@/lib/data/socials';
import { SITE_CONFIG } from '@/lib/constants';

const socialIcons: Record<string, string> = {
  github: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  youtube: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  discord: 'M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.74 19.74 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.892.076.076 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028z',
};

const socialHoverBackgrounds: Record<string, string> = {
  github: 'hover:bg-[#24292e]',
  linkedin: 'hover:bg-[#0a66c2]',
  instagram: 'hover:bg-[#e1306c]',
  twitter: 'hover:bg-[#1d9bf0]',
  youtube: 'hover:bg-[#ff0000]',
  discord: 'hover:bg-[#5865f2]',
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0C]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(212,100,59,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-18 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[22px_22px]" />

      <div className="relative container-wide">

        {/* ── Main content: left brand | right links ── */}
        <div className="flex flex-col gap-8 py-8 sm:flex-row sm:items-stretch sm:justify-between sm:gap-12 lg:gap-20">

          {/* ── LEFT: branding + email + social ── */}
          <div className="flex flex-col sm:min-w-[160px]">
            {/* Name + email group */}
            <div className="space-y-2">
              <Link href="/" className="inline-flex items-baseline gap-2">
                <span
                  className="text-xl font-semibold leading-none text-(--text-primary)"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {SITE_CONFIG.shortName.toUpperCase()}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.25em] text-(--text-secondary)">
                  {SITE_CONFIG.institution}
                </span>
              </Link>
              <span className="block font-mono text-[10px] tracking-widest text-(--text-secondary)">
                {SITE_CONFIG.email}
              </span>
            </div>

            {/* Social icons pushed to bottom */}
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-(--text-muted) transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-transparent hover:text-white ${socialHoverBackgrounds[social.icon] || 'hover:bg-white/10'}`}
                  aria-label={social.name}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d={socialIcons[social.icon] || ''} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: link columns ── */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0 lg:gap-x-16">

            {/* Teams */}
            <div className="space-y-2">
              <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-(--text-primary)">
                Teams
              </h5>
              <ul className="space-y-0.5">
                {FOOTER_LINKS.teams.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex text-xs text-(--text-muted) transition-all duration-200 hover:text-(--text-primary)"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-(--text-primary)">
                Quick Links
              </h5>
              <ul className="space-y-0.5">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex text-[11px] text-(--text-muted) transition-all duration-200 hover:text-(--text-primary)"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources — spans full width on mobile 2-col, normal on sm+ */}
            <div className="col-span-2 space-y-2 sm:col-span-1">
              <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-(--text-primary)">
                Resources
              </h5>
              <ul className="space-y-0.5">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    {'isExternal' in link && link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex text-[11px] text-(--text-muted) transition-all duration-200 hover:text-(--text-primary)"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                          {link.label}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="group inline-flex text-[11px] text-(--text-muted) transition-all duration-200 hover:text-(--text-primary)"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ── Bottom bar: copyright ── */}
        <div className="border-t border-white/5 py-4">
          <p className="text-center text-[10px] text-(--text-muted) md:text-xs">
            © {new Date().getFullYear()} {SITE_CONFIG.fullName}. Built with ❤️ by WnCC developers.
          </p>
        </div>

      </div>
    </footer>
  );
}
