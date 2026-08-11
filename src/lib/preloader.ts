const MIN_DISPLAY_MS = 400
const MAX_WAIT_MS = 4000

/**
 * Fades out and removes the static #app-preloader splash (see index.html)
 * once the app has actually mounted and fonts are ready — with a minimum
 * display time so it never just flashes, and a hard timeout in case
 * `document.fonts.ready` never resolves.
 */
export function hideAppPreloader() {
  const el = document.getElementById('app-preloader')
  if (!el) return

  const minDelay = new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY_MS))
  const fontsReady = document.fonts?.ready ?? Promise.resolve()
  const ready = Promise.all([minDelay, fontsReady])
  const timeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS))

  Promise.race([ready, timeout]).then(() => {
    el.style.opacity = '0'
    el.addEventListener('transitionend', () => el.remove(), { once: true })
    setTimeout(() => el.remove(), 500)
  })
}
