import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-gray-900 tracking-tight">
          VotreSaaS
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Fonctionnalités</a>
          <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Tarifs</a>
          <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors">
            Se connecter
          </Link>
          <Link to="/signup" className="text-sm text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors">
            Commencer gratuitement
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-600">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3">
          <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 py-2">Fonctionnalités</a>
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 py-2">Tarifs</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 py-2">FAQ</a>
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <Link to="/login" className="block text-sm text-gray-600 py-2">Se connecter</Link>
            <Link to="/signup" className="block text-sm text-center text-white bg-gray-900 px-4 py-2.5 rounded-lg">Commencer gratuitement</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
