import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs text-gray-600">Nouveau : fonctionnalité X disponible</span>
        </div>

        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight tracking-tight">
          Gérez votre <span className="text-indigo-600">[problème]</span> sans effort
        </h1>

        {/* Sous-titre */}
        <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          La plateforme tout-en-un qui aide les entreprises à [bénéfice principal]. Simple, rapide, efficace.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Démarrer gratuitement
            <ArrowRight size={16} />
          </Link>
          <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Voir les tarifs
          </a>
        </div>

        {/* Screenshot placeholder */}
        <div className="mt-16 relative">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/50 aspect-video flex items-center justify-center">
            <span className="text-gray-400 text-sm">Capture d'écran de votre produit</span>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-16">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Ils nous font déjà confiance</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {['Entreprise A', 'Entreprise B', 'Entreprise C', 'Entreprise D', 'Entreprise E'].map((name) => (
              <div key={name} className="bg-gray-100 rounded-lg px-6 py-2">
                <span className="text-xs text-gray-400 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
