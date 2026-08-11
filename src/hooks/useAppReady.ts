import { useEffect, useState } from 'react'
import { APP_READY_EVENT } from '../lib/preloader'

/** True once the pre-launch splash has started fading away. */
export function useAppReady() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const onReady = () => setIsReady(true)
    window.addEventListener(APP_READY_EVENT, onReady)
    return () => window.removeEventListener(APP_READY_EVENT, onReady)
  }, [])

  return isReady
}
