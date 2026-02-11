import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

const tabs = ['Profil', 'Organisation', 'Facturation', 'Sécurité']

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Profil')
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Paramètres</h1>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
              activeTab === tab
                ? 'bg-white text-gray-900 font-medium shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl">
        {activeTab === 'Profil' && (
          <div className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-400">
                  {user?.user_metadata?.full_name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || '?'}
                </span>
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                Changer la photo
              </button>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Nom complet</label>
              <input
                type="text"
                defaultValue={user?.user_metadata?.full_name || ''}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                defaultValue={user?.email || ''}
                disabled
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-400 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Rôle dans l'entreprise</label>
              <input
                type="text"
                placeholder="Ex: CEO, CTO, Directeur Marketing..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
              />
            </div>

            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Sauvegarder
            </button>
          </div>
        )}

        {activeTab === 'Organisation' && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Nom de l'organisation</label>
              <input
                type="text"
                placeholder="Nom de votre entreprise"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Logo</label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <p className="text-sm text-gray-400">Glissez votre logo ici ou cliquez pour uploader</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG, SVG — Max 2 Mo</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Domaine autorisé (auto-join)</label>
              <input
                type="text"
                placeholder="entreprise.com"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
              />
              <p className="text-xs text-gray-400 mt-1.5">Les utilisateurs avec cet email rejoindront automatiquement votre organisation.</p>
            </div>

            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Sauvegarder
            </button>
          </div>
        )}

        {activeTab === 'Facturation' && (
          <div className="space-y-6">
            {/* Current plan */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Plan Pro</p>
                  <p className="text-xs text-gray-500 mt-0.5">79 €/mois — Renouvellement le 15 mars 2025</p>
                </div>
                <span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">Actif</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Changer de plan
              </button>
              <button className="border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Gérer le paiement
              </button>
            </div>

            {/* Invoices */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Historique des factures</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-xs font-medium text-gray-500 px-4 py-2.5">Date</th>
                      <th className="text-left text-xs font-medium text-gray-500 px-4 py-2.5">Montant</th>
                      <th className="text-left text-xs font-medium text-gray-500 px-4 py-2.5">Statut</th>
                      <th className="px-4 py-2.5"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '15 Fév 2025', amount: '79 €', status: 'Payé' },
                      { date: '15 Jan 2025', amount: '79 €', status: 'Payé' },
                      { date: '15 Déc 2024', amount: '79 €', status: 'Payé' },
                    ].map((invoice, i) => (
                      <tr key={i} className="border-b border-gray-50 last:border-0">
                        <td className="text-sm text-gray-700 px-4 py-3">{invoice.date}</td>
                        <td className="text-sm text-gray-700 px-4 py-3">{invoice.amount}</td>
                        <td className="px-4 py-3">
                          <span className="bg-green-50 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">{invoice.status}</span>
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">Télécharger</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Sécurité' && (
          <div className="space-y-6">
            {/* Change password */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Changer le mot de passe</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Ancien mot de passe</label>
                  <input type="password" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Nouveau mot de passe</label>
                  <input type="password" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Confirmer le nouveau mot de passe</label>
                  <input type="password" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors" />
                </div>
                <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Mettre à jour
                </button>
              </div>
            </div>

            {/* 2FA */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Double authentification (2FA)</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Ajoutez une couche de sécurité supplémentaire</p>
                </div>
                <button className="relative w-11 h-6 bg-gray-200 rounded-full transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"></div>
                </button>
              </div>
            </div>

            {/* Sessions */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Sessions actives</h3>
              <div className="space-y-3">
                {[
                  { device: 'Chrome — MacBook Pro', date: 'Actuellement actif', current: true },
                  { device: 'Safari — iPhone 15', date: 'Dernière activité il y a 2h', current: false },
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                    <div>
                      <p className="text-sm text-gray-900">{session.device}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{session.date}</p>
                    </div>
                    {session.current ? (
                      <span className="text-xs text-green-600 font-medium">Session actuelle</span>
                    ) : (
                      <button className="text-xs text-red-500 hover:text-red-600 font-medium">Révoquer</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
