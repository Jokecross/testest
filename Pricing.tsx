import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Pour les petites équipes',
    monthly: 29,
    annual: 24,
    features: [
      "Jusqu'à 5 utilisateurs",
      'Fonctionnalités de base',
      'Support par email',
      '1 Go de stockage'
    ],
    cta: 'Commencer gratuitement',
    highlighted: false
  },
  {
    name: 'Pro',
    description: 'Pour les équipes en croissance',
    monthly: 79,
    annual: 65,
    features: [
      "Jusqu'à 25 utilisateurs",
      'Toutes les fonctionnalités',
      'Support prioritaire',
      'Intégrations avancées',
      '10 Go de stockage',
      'Analytics avancés'
    ],
    cta: "Démarrer l'essai gratuit",
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'Pour les grandes organisations',
    monthly: null,
    annual: null,
    features: [
      'Utilisateurs illimités',
      'SSO / SAML',
      'Account manager dédié',
      'SLA garanti',
      'Stockage illimité',
      'Onboarding personnalisé'
    ],
    cta: 'Nous contacter',
    highlighted: false
  }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">Tarifs</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Un pricing simple et transparent
          </h2>
          <p className="mt-4 text-gray-500">Pas de frais cachés. Changez de plan à tout moment.</p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${!annual ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${annual ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Annuel <span className="text-xs opacity-75">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl p-8 flex flex-col ${
                plan.highlighted 
                  ? 'border-2 border-indigo-600 shadow-lg relative' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthly ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold text-gray-900">
                      {annual ? plan.annual : plan.monthly}€
                    </span>
                    <span className="text-sm text-gray-500">/mois</span>
                  </div>
                ) : (
                  <div className="text-4xl font-semibold text-gray-900">Sur mesure</div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.name === 'Enterprise' ? '#' : '/signup'}
                className={`text-center py-3 rounded-lg text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
