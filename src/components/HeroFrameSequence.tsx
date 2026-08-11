import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

type HeroFrameSequenceProps = {
  /** Ordered array of frame image URLs, first to last. */
  frames: string[]
  /** How many viewport-heights the scroll animation plays over */
  scrollLengthVh?: number
  /** Frame count to display in the placeholder box when `frames` is empty */
  placeholderFrameCount?: number
  /** Content layered on top of the video (headline, stats, etc.) */
  overlay?: ReactNode
}

/**
 * Scroll-scrubbed frame-sequence player. Renders a full-viewport sticky
 * canvas inside a tall wrapper; scroll position within that wrapper maps to
 * the current frame. Falls back to a labeled placeholder box when no frames
 * have been supplied yet.
 */
export default function HeroFrameSequence({
  frames,
  scrollLengthVh = 400,
  placeholderFrameCount = 0,
  overlay,
}: HeroFrameSequenceProps) {
  const { ref: wrapperRef, progress } = useScrollProgress<HTMLDivElement>()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const frameCount = frames.length

  const [loadedCount, setLoadedCount] = useState(0)
  const [isReady, setIsReady] = useState(frameCount === 0)

  useEffect(() => {
    if (frameCount === 0) return
    let cancelled = false
    const images: HTMLImageElement[] = new Array(frameCount)
    imagesRef.current = images

    let loaded = 0
    const onOneLoaded = () => {
      loaded += 1
      if (!cancelled) setLoadedCount(loaded)
      if (loaded === frameCount && !cancelled) setIsReady(true)
    }

    frames.forEach((src, i) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
      img.onload = onOneLoaded
      img.onerror = onOneLoaded
      images[i] = img
    })

    return () => {
      cancelled = true
    }
  }, [frames, frameCount])

  useEffect(() => {
    if (frameCount === 0) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const frameIndex = Math.min(frameCount - 1, Math.round(progress * (frameCount - 1)))
    const img = imagesRef.current[frameIndex]
    if (!img || !img.complete || img.naturalWidth === 0) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const canvasWidth = canvas.clientWidth
    const canvasHeight = canvas.clientHeight
    if (canvas.width !== canvasWidth * dpr || canvas.height !== canvasHeight * dpr) {
      canvas.width = canvasWidth * dpr
      canvas.height = canvasHeight * dpr
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const imgAspect = img.naturalWidth / img.naturalHeight
    const canvasAspect = canvasWidth / canvasHeight

    let drawWidth: number
    let drawHeight: number
    if (imgAspect > canvasAspect) {
      drawHeight = canvasHeight
      drawWidth = drawHeight * imgAspect
    } else {
      drawWidth = canvasWidth
      drawHeight = drawWidth / imgAspect
    }
    const offsetX = (canvasWidth - drawWidth) / 2
    const offsetY = (canvasHeight - drawHeight) / 2

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
  }, [progress, frameCount, loadedCount])

  const loadProgress = frameCount === 0 ? 1 : loadedCount / frameCount

  return (
    <div ref={wrapperRef} style={{ height: `${scrollLengthVh}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        {frameCount > 0 ? (
          <canvas ref={canvasRef} className="h-full w-full" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-ink/90 text-greige/60">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-10 w-10">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m9 9 6 3-6 3z" fill="currentColor" stroke="none" />
            </svg>
            <p className="font-body text-sm">
              فيديو تسلسل اللقطات ({placeholderFrameCount} إطار) — قيد الإضافة
            </p>
          </div>
        )}

        {frameCount > 0 && !isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink text-greige">
            <div className="h-1 w-40 overflow-hidden rounded-full bg-greige/20">
              <div
                className="h-full rounded-full bg-olive transition-[width] duration-150"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <p className="font-body text-sm text-greige/70">جاري التحميل…</p>
          </div>
        )}

        {overlay && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0">{overlay}</div>
          </>
        )}
      </div>
    </div>
  )
}
