import { Link } from 'react-router-dom'

const links = {
  Produit: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Intégrations', href: '#' },
  ],
  Entreprise: [
    { label: 'À propos', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Carrières', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Ressources: [
    { label: 'Documentation', href: '#' },
    { label: 'Centre d\'aide', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Statut', href: '#' },
  ],
  Légal: [
    { label: 'CGV', href: '#' },
    { label: 'Confidentialité', href: '#' },
    { label: 'Mentions légales', href: '#' },
    { label: 'RGPD', href: '#' },
  ]
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-semibold text-gray-900 tracking-tight">VotreSaaS</Link>
            <p className="mt-3 text-xs text-gray-400 leading-relaxed">
              La plateforme B2B pour les équipes modernes.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} VotreSaaS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
