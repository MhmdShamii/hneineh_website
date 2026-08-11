import { useState } from 'react'
import { navContactCta, navLinks } from '../content/nav'
import { site } from '../content/site'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-greige/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        {/* Logo sits at the logical start of the row — flex order follows the
            document's dir="rtl", so this renders on the visual right without
            hardcoding a side. Horizontal lockup on tablet/desktop, compact
            icon mark on mobile where the wordmark would crowd the header. */}
        <a href="#top" className="shrink-0">
          <img
            src={site.logos.horizontal}
            alt={site.logoAlt}
            className="hidden h-8 w-auto sm:block"
          />
          <img
            src={site.logos.primaryIcon}
            alt={site.logoAlt}
            className="h-9 w-auto sm:hidden"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-body text-sm text-ink/70 transition hover:text-brown"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={navContactCta.href}
            className="rounded-md bg-olive ps-5 pe-5 py-2 font-body text-sm text-greige transition hover:scale-[1.03] hover:opacity-90"
          >
            {navContactCta.label}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="القائمة"
          className="flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-ink/10 lg:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`block h-0.5 w-full rounded-full bg-ink transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-ink transition-opacity duration-200 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-ink transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-ink/10 bg-greige/90 px-6 py-4 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-body text-sm text-ink/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navContactCta.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-fit rounded-md bg-olive ps-5 pe-5 py-2 font-body text-sm text-greige"
            >
              {navContactCta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
