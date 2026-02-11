import { Construction } from 'lucide-react'

export default function Placeholder({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">{title}</h1>
      <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Construction size={24} className="text-gray-400" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">En construction</h2>
        <p className="text-sm text-gray-500 max-w-sm mx-auto">
          Cette section est en cours de développement. Personnalisez-la avec les fonctionnalités de votre SaaS.
        </p>
      </div>
    </div>
  )
}
