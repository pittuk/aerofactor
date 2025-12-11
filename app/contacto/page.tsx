'use client';

import Hero from '@/components/ui/Hero';
import ContactForm from '@/components/ui/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactoPage() {
  const { t, locale } = useLanguage();

  return (
    <>
      <Hero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        description={t.contact.description}
        ctaText={t.contact.ctaText}
        ctaHref="#formulario"
        imageSrc="/images/contacto.webp"
        imageAlt={t.imageAlts.contactSystem}
        contentPosition="bottom"
        imageOpacity={95}
      />

      {/* Formulario destacado */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-neutral-50 to-white" id="formulario">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-3 sm:mb-4">
              {t.contact.formTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
              {t.contact.formSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Formulario - Más grande y destacado */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>

            {/* Información de contacto - Sidebar */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              {/* Información directa */}
              <div className="bg-primary-600 text-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t.contact.directContact.title}</h3>
                <div className="space-y-3 sm:space-y-4 text-sm">
                  <div>
                    <p className="text-blue-100 mb-1 font-medium">{t.contact.directContact.email}</p>
                    <a href="mailto:info@aerofactorlatam.com" className="hover:text-accent-300 transition-colors font-semibold">
                      info@aerofactorlatam.com
                    </a>
                  </div>
                  <div>
                    <p className="text-blue-100 mb-1 font-medium">{t.contact.directContact.phone}</p>
                    <a href="tel:+56998219839" className="hover:text-accent-300 transition-colors font-semibold">
                      +56 9 9821 9839
                    </a>
                  </div>
                  <div>
                    <p className="text-blue-100 mb-1 font-medium">{t.contact.directContact.schedule}</p>
                    <p className="font-semibold">{t.contact.directContact.scheduleValue}</p>
                  </div>
                </div>
              </div>

              {/* Qué esperar */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-4">{t.contact.benefits.title}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700" dangerouslySetInnerHTML={{ __html: t.contact.benefits.response }} />
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700" dangerouslySetInnerHTML={{ __html: t.contact.benefits.evaluation }} />
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700" dangerouslySetInnerHTML={{ __html: t.contact.benefits.proposal }} />
                  </li>
                </ul>
              </div>

              {/* Confidencialidad */}
              <div className="bg-neutral-100 rounded-2xl p-5">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-neutral-600" dangerouslySetInnerHTML={{ __html: t.contact.confidentiality }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
