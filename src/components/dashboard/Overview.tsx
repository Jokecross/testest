import { TrendingUp, TrendingDown, Users, DollarSign, Activity, FileText } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

const stats = [
  { label: 'Utilisateurs actifs', value: '248', change: '+12%', trend: 'up', icon: Users },
  { label: 'Revenu mensuel', value: '12 400 €', change: '+8%', trend: 'up', icon: DollarSign },
  { label: 'Taux de conversion', value: '3.2%', change: '-0.4%', trend: 'down', icon: Activity },
  { label: 'Documents créés', value: '1 847', change: '+24%', trend: 'up', icon: FileText },
]

const recentActivity = [
  { action: 'Nouveau membre ajouté', detail: 'Sophie Martin a rejoint l\'équipe Marketing', time: 'Il y a 2h' },
  { action: 'Projet terminé', detail: 'Campagne Q1 marquée comme terminée', time: 'Il y a 4h' },
  { action: 'Nouveau document', detail: 'Rapport mensuel créé par Thomas D.', time: 'Il y a 6h' },
  { action: 'Plan upgradé', detail: 'Passage du plan Starter au plan Pro', time: 'Hier' },
  { action: 'Intégration connectée', detail: 'Slack connecté avec succès', time: 'Hier' },
]

export default function Overview() {
  const { user } = useAuth()
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || 'Utilisateur'

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Bonjour, {firstName}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center">
                <stat.icon size={18} className="text-gray-500" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-500'
              }`}>
                {stat.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart placeholder */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Activité mensuelle</h2>
          <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
            <span className="text-sm text-gray-400">Graphique d'activité</span>
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Activité récente</h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-900 font-medium">{item.action}</p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{item.detail}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
