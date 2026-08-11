import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import SocialSection from './components/SocialSection'
import { skipHeroReadinessGate } from './lib/heroReadiness'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Only "/" renders the hero — every other route needs to tell the app
    // preloader not to wait for a first-frame signal that'll never come.
    if (pathname !== '/') skipHeroReadinessGate()
  }, [pathname])

  return (
    <div className="min-h-screen bg-greige text-ink">
      <Nav />
      <Outlet />
      <SocialSection />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
