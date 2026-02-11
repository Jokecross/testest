import { Check } from 'lucide-react'

const benefits = [
  'Automatisez les tâches répétitives en quelques clics',
  'Suivez vos performances en temps réel depuis un dashboard centralisé',
  'Collaborez efficacement avec toute votre équipe'
]

export default function Solution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">La solution</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
              VotreSaaS simplifie tout
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Une plateforme pensée pour les équipes B2B qui veulent gagner du temps, 
              réduire les erreurs et prendre de meilleures décisions.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-indigo-600" />
                  </div>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-gray-400 text-sm">Illustration de votre solution</span>
          </div>
        </div>
      </div>
    </section>
  )
}
