import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
          Prêt à transformer votre activité ?
        </h2>
        <p className="mt-4 text-gray-500 text-lg">
          Rejoignez +100 entreprises qui utilisent déjà VotreSaaS au quotidien.
        </p>
        <div className="mt-8">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Commencer gratuitement
            <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">Essai gratuit 14 jours. Aucune carte bancaire requise.</p>
      </div>
    </section>
  )
}
