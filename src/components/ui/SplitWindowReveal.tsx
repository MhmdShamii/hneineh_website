import { useEffect, useState, type ReactNode } from 'react'

const OPEN_DELAY_MS = 300
const DOOR_DURATION_MS = 900

type SplitWindowRevealProps = {
  /** True once the wrapping section has scrolled into view. */
  isInView: boolean
  /** Centered mark shown on the closed seam, fading out as the doors part. */
  centerIcon?: string
  centerIconAlt?: string
  children: ReactNode
}

/**
 * A full-size "window" of two wood-toned doors covering the section; once
 * it scrolls into view they split apart from the center and slide fully
 * off to each side, revealing the wrapped content underneath. The doors
 * are absolutely positioned over content already laid out in normal flow,
 * so they always match the section's natural height exactly.
 */
export default function SplitWindowReveal({
  isInView,
  centerIcon,
  centerIconAlt = '',
  children,
}: SplitWindowRevealProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [isOpen, setIsOpen] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return
    // Opening waits a beat for effect; closing (once fully off-screen)
    // resets right away so the doors are ready to replay on the next visit.
    const timer = setTimeout(() => setIsOpen(isInView), isInView ? OPEN_DELAY_MS : 0)
    return () => clearTimeout(timer)
  }, [isInView, prefersReducedMotion])

  const doorStyle = {
    transitionDuration: `${DOOR_DURATION_MS}ms`,
    transitionTimingFunction: 'cubic-bezier(0.65,0,0.35,1)',
    backgroundImage:
      'repeating-linear-gradient(90deg, transparent 0 22px, rgba(0,0,0,0.06) 22px 24px)',
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className="transition-all duration-700 ease-out"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1)' : 'scale(1.04)',
          transitionDelay: isOpen ? '300ms' : '0ms',
        }}
      >
        {children}
      </div>

      {/*
        translateX is a physical transform — it never flips for RTL — so
        these two doors are anchored with physical left-0/right-0 (not
        logical start/end) to keep their slide-out direction matching where
        they're actually positioned regardless of document direction.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-brown transition-transform"
        style={{ ...doorStyle, transform: isOpen ? 'translateX(-100%)' : 'translateX(0)' }}
      >
        <div className="absolute inset-y-0 right-0 w-px bg-olive/50" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-brown transition-transform"
        style={{ ...doorStyle, transform: isOpen ? 'translateX(100%)' : 'translateX(0)' }}
      >
        <div className="absolute inset-y-0 left-0 w-px bg-olive/50" />
      </div>

      {centerIcon && (
        <img
          src={centerIcon}
          alt={centerIconAlt}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{ opacity: isOpen ? 0 : 1 }}
        />
      )}
    </div>
  )
}
