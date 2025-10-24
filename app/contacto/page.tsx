import Hero from '@/components/ui/Hero';
import ContactForm from '@/components/ui/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | AEROFACTOR - Solicite una Demostración',
  description: 'Contáctenos para conocer cómo nuestras soluciones de vigilancia aérea persistente pueden fortalecer sus capacidades operacionales. Evaluación técnica sin compromiso.',
  keywords: 'contacto AEROFACTOR, solicitar demostración, cotización vigilancia aérea, consulta ISR',
  openGraph: {
    title: 'Contacto | AEROFACTOR',
    description: 'Solicite una demostración de nuestras soluciones de vigilancia aérea persistente.',
    images: ['/og/contacto.jpg'],
  },
};

export default function ContactoPage() {
  return (
    <>
      <Hero
        title="Contacto"
        subtitle="Hablemos sobre sus necesidades de vigilancia aérea"
        description="Nuestro equipo técnico responderá en menos de 24 horas."
        ctaText="Ver formulario"
        ctaHref="#formulario"
        imageSrc="/images/contacto.webp"
        imageAlt="Sistema aerostático AEROFACTOR en operación"
        contentPosition="bottom"
        imageOpacity={95}
      />

      {/* Formulario destacado */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white" id="formulario">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Solicite Información
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Complete el formulario y un especialista se pondrá en contacto para evaluar sus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario - Más grande y destacado */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>

            {/* Información de contacto - Sidebar */}
            <div className="space-y-6">
              {/* Información directa */}
              <div className="bg-primary-600 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Contacto Directo</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-blue-100 mb-1 font-medium">Email</p>
                    <a href="mailto:contacto@aerofactor.cl" className="hover:text-accent-300 transition-colors font-semibold">
                      contacto@aerofactor.cl
                    </a>
                  </div>
                  <div>
                    <p className="text-blue-100 mb-1 font-medium">Teléfono</p>
                    <a href="tel:+56998219839" className="hover:text-accent-300 transition-colors font-semibold">
                      +56 9 9821 9839
                    </a>
                  </div>
                  <div>
                    <p className="text-blue-100 mb-1 font-medium">Horario</p>
                    <p className="font-semibold">Lun - Vie: 9:00 - 18:00 hrs</p>
                  </div>
                </div>
              </div>

              {/* Qué esperar */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-4">¿Qué Obtendrá?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">
                      Respuesta en <strong>menos de 24h</strong>
                    </span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">
                      Evaluación técnica <strong>sin costo</strong>
                    </span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">
                      Propuesta <strong>personalizada</strong>
                    </span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">
                      Demostración operacional
                    </span>
                  </li>
                </ul>
              </div>

              {/* Confidencialidad */}
              <div className="bg-neutral-100 rounded-2xl p-5">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-neutral-600">
                    <strong className="text-primary-900">100% confidencial.</strong> Disponemos de acuerdos de no divulgación (NDA).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
