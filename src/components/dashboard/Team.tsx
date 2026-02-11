import { useState } from 'react'
import { UserPlus, MoreHorizontal, X } from 'lucide-react'

const initialMembers = [
  { id: 1, name: 'Martin Dupont', email: 'martin@entreprise.com', role: 'Owner', date: '15 Jan 2025', initials: 'MD' },
  { id: 2, name: 'Sophie Martin', email: 'sophie@entreprise.com', role: 'Admin', date: '20 Jan 2025', initials: 'SM' },
  { id: 3, name: 'Thomas Durand', email: 'thomas@entreprise.com', role: 'Member', date: '28 Jan 2025', initials: 'TD' },
  { id: 4, name: 'Julie Lambert', email: 'julie@entreprise.com', role: 'Member', date: '3 Fév 2025', initials: 'JL' },
]

const roleBadge = (role: string) => {
  const styles: Record<string, string> = {
    Owner: 'bg-purple-50 text-purple-700',
    Admin: 'bg-blue-50 text-blue-700',
    Member: 'bg-gray-50 text-gray-600',
    Viewer: 'bg-gray-50 text-gray-500',
  }
  return styles[role] || styles.Member
}

export default function Team() {
  const [showInvite, setShowInvite] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState('Member')

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Votre équipe</h1>
          <p className="text-sm text-gray-500 mt-1">{initialMembers.length} membres</p>
        </div>
        <button
          onClick={() => setShowInvite(true)}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <UserPlus size={16} />
          Inviter un membre
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Membre</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3 hidden sm:table-cell">Rôle</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3 hidden md:table-cell">Ajouté le</th>
              <th className="w-12 px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {initialMembers.map((member) => (
              <tr key={member.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-gray-500">{member.initials}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-500 truncate">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${roleBadge(member.role)}`}>
                    {member.role}
                  </span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className="text-sm text-gray-500">{member.date}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invite Modal */}
      {showInvite && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-6" onClick={() => setShowInvite(false)}>
          <div className="bg-white border border-gray-200 rounded-xl p-6 w-full max-w-md shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Inviter un membre</h2>
              <button onClick={() => setShowInvite(false)} className="p-1 text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="collegue@entreprise.com"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Rôle</label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
                >
                  <option value="Admin">Admin</option>
                  <option value="Member">Member</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>

              <button
                onClick={() => setShowInvite(false)}
                className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Envoyer l'invitation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
