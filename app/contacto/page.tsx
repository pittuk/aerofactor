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
        description="Nuestro equipo técnico está disponible para evaluar sus requerimientos y proponer la solución más adecuada."
        ctaText="Completar formulario"
        ctaHref="#formulario"
        imageSrc="/images/contacto.webp"
        imageAlt="Sistema aerostático AEROFACTOR en operación"
      />

      <section className="py-20 bg-white" id="formulario">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary-900 mb-2">Oficina Santiago, Chile</h3>
                  <p className="text-neutral-700 text-sm">
                    Email: <a href="mailto:contacto@aerofactor.cl" className="text-primary-600 hover:underline">contacto@aerofactor.cl</a><br />
                    Teléfono: <span className="text-neutral-600">+56 2 XXXX XXXX</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-2">Horario de Atención</h3>
                  <p className="text-neutral-700 text-sm">
                    Lunes a Viernes: 9:00 - 18:00 hrs (CLT)
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-primary-900 mb-4">¿Qué puede esperar?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-neutral-700">
                      <strong>Evaluación técnica inicial</strong> sin costo ni compromiso
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-neutral-700">
                      <strong>Propuesta personalizada</strong> con configuración adaptada a su caso de uso
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-neutral-700">
                      <strong>Demostración operacional</strong> para ver nuestros sistemas en acción
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-neutral-700">
                      <strong>Documentación técnica</strong> detallada y casos de éxito
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>

          <div className="bg-neutral-100 rounded-2xl p-8 text-center">
            <p className="text-sm text-neutral-600">
              Toda la información compartida se trata con estricta confidencialidad y puede formalizarse mediante 
              acuerdos de no divulgación (NDA) cuando se requiera.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
