import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div className="min-h-screen bg-greige text-ink">
      <Nav />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
