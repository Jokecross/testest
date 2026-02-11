import { BarChart3, Shield, Users, Zap, Globe, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Automatisation',
    description: 'Automatisez vos workflows et éliminez les tâches manuelles répétitives.'
  },
  {
    icon: BarChart3,
    title: 'Analytics en temps réel',
    description: 'Suivez vos KPIs et prenez des décisions basées sur des données concrètes.'
  },
  {
    icon: Users,
    title: 'Collaboration équipe',
    description: 'Invitez votre équipe, gérez les rôles et travaillez ensemble efficacement.'
  },
  {
    icon: Shield,
    title: 'Sécurité renforcée',
    description: 'Vos données sont chiffrées et protégées. SSO et 2FA disponibles.'
  },
  {
    icon: Globe,
    title: 'Intégrations',
    description: 'Connectez vos outils existants grâce à nos intégrations natives.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Support dédié',
    description: 'Une équipe disponible pour vous accompagner à chaque étape.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">Fonctionnalités</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Tout ce dont vous avez besoin
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Des outils puissants pensés pour les équipes B2B exigeantes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <feature.icon size={20} className="text-indigo-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
