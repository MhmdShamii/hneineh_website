import { useEffect, useState } from 'react'

const numberPattern = /\d+/

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

/**
 * Animates the leading number inside a stat string (e.g. "46+", "3K+") from
 * 0 up to its target once `shouldStart` becomes true, keeping any prefix/
 * suffix text (K, +, ...) intact around the animated digits.
 */
export function useCountUp(value: string, shouldStart: boolean, durationMs = 1200): string {
  const match = value.match(numberPattern)
  const target = match ? Number(match[0]) : null
  const [display, setDisplay] = useState(target === null ? value : value.replace(numberPattern, '0'))

  useEffect(() => {
    if (!shouldStart || target === null) return

    let raf: number
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(1, elapsed / durationMs)
      const current = Math.round(easeOutCubic(progress) * target)
      setDisplay(value.replace(numberPattern, String(current)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [shouldStart, target, value, durationMs])

  return display
}
