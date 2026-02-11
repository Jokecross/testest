import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await resetPassword(email)
    if (error) {
      setError('Erreur lors de l\'envoi du lien.')
      setLoading(false)
    } else {
      setSent(true)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/" className="text-xl font-semibold text-gray-900 tracking-tight">VotreSaaS</Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8">
          {sent ? (
            <div className="text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Email envoyé</h1>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Si un compte existe avec l'adresse <strong className="text-gray-700">{email}</strong>, vous recevrez un lien de réinitialisation.
              </p>
              <Link to="/login" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium mt-6">
                <ArrowLeft size={14} />
                Retour à la connexion
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-xl font-semibold text-gray-900 text-center">Réinitialiser votre mot de passe</h1>
              <p className="text-sm text-gray-500 text-center mt-1">
                Entrez votre email, nous vous enverrons un lien de réinitialisation.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 text-xs rounded-lg px-4 py-3">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@entreprise.com"
                    required
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Envoi...' : 'Envoyer le lien'}
                </button>
              </form>

              <div className="text-center mt-4">
                <Link to="/login" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                  <ArrowLeft size={14} />
                  Retour à la connexion
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
