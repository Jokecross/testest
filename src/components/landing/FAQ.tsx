import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Puis-je tester gratuitement ?',
    answer: "Oui, nous proposons un essai gratuit de 14 jours sur tous nos plans. Aucune carte bancaire n'est requise pour commencer."
  },
  {
    question: 'Comment fonctionne la facturation par siège ?',
    answer: "Vous payez uniquement pour les utilisateurs actifs dans votre organisation. Quand vous ajoutez un membre, la facturation s'ajuste automatiquement au prorata."
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: "Absolument. Vos données sont chiffrées en transit et au repos. Nous sommes conformes RGPD et proposons du SSO et de la 2FA pour les plans Enterprise."
  },
  {
    question: 'Puis-je changer de plan à tout moment ?',
    answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Le changement prend effet immédiatement et la facturation est ajustée au prorata."
  },
  {
    question: 'Proposez-vous un accompagnement ?',
    answer: "Oui, tous nos plans incluent un support par email. Les plans Pro et Enterprise bénéficient d'un support prioritaire et d'un accompagnement dédié."
  },
  {
    question: 'Comment annuler mon abonnement ?',
    answer: "Vous pouvez annuler à tout moment depuis vos paramètres. Votre accès reste actif jusqu'à la fin de la période en cours. Aucun engagement, aucun frais d'annulation."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
