const MIN_DISPLAY_MS = 400
const MAX_WAIT_MS = 4000

/** Fired the moment the splash starts fading away — the page is now visible. */
export const APP_READY_EVENT = 'app:ready'

/**
 * Fades out and removes the static #app-preloader splash (see index.html)
 * once the app has actually mounted and fonts are ready — with a minimum
 * display time so it never just flashes, and a hard timeout in case
 * `document.fonts.ready` never resolves. Dispatches APP_READY_EVENT so
 * on-page animations (like the hero stat count-up) can wait until the
 * splash is actually gone instead of running underneath it.
 */
export function hideAppPreloader() {
  const el = document.getElementById('app-preloader')
  if (!el) {
    window.dispatchEvent(new Event(APP_READY_EVENT))
    return
  }

  const minDelay = new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY_MS))
  const fontsReady = document.fonts?.ready ?? Promise.resolve()
  const ready = Promise.all([minDelay, fontsReady])
  const timeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS))

  Promise.race([ready, timeout]).then(() => {
    el.style.opacity = '0'
    window.dispatchEvent(new Event(APP_READY_EVENT))
    el.addEventListener('transitionend', () => el.remove(), { once: true })
    setTimeout(() => el.remove(), 500)
  })
}
