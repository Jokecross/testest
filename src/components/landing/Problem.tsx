import { Clock, AlertTriangle, DollarSign } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    title: 'Vous perdez du temps',
    description: 'Vos équipes passent des heures chaque semaine sur des tâches manuelles qui pourraient être automatisées.'
  },
  {
    icon: AlertTriangle,
    title: 'Vous manquez de visibilité',
    description: "Impossible de suivre les performances en temps réel. Les décisions se prennent à l'aveugle."
  },
  {
    icon: DollarSign,
    title: 'Vous perdez de l\'argent',
    description: 'Les inefficacités opérationnelles coûtent des milliers d\'euros chaque mois à votre entreprise.'
  }
]

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">Le problème</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Vous perdez du temps sur [problème]
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-5">
                <point.icon size={22} className="text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
