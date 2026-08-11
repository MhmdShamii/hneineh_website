import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import SocialSection from './components/SocialSection'

function App() {
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
