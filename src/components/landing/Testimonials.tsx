const testimonials = [
  {
    quote: "Depuis qu'on utilise VotreSaaS, on a gagné 15 heures par semaine sur nos process. L'équipe ne pourrait plus s'en passer.",
    name: 'Sophie Martin',
    role: 'Directrice des opérations',
    company: 'AgencePlus',
    initials: 'SM'
  },
  {
    quote: "L'outil est intuitif, le support est réactif, et les résultats sont là. On a réduit nos coûts opérationnels de 30%.",
    name: 'Thomas Durand',
    role: 'CEO',
    company: 'TechFlow',
    initials: 'TD'
  },
  {
    quote: "On a testé 5 solutions avant de trouver VotreSaaS. C'est la seule qui a vraiment compris les besoins d'une équipe B2B.",
    name: 'Julie Lambert',
    role: 'Head of Sales',
    company: 'ScaleUp',
    initials: 'JL'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">Témoignages</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-500">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
