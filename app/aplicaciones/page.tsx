'use client';

import Hero from '@/components/ui/Hero';
import AppGrid from '@/components/ui/AppGrid';
import CTAWide from '@/components/ui/CTAWide';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AplicacionesPage() {
  const { t, locale } = useLanguage();

  const applications = [
    {
      title: t.applications.items.defense.title,
      description: t.applications.items.defense.description,
    },
    {
      title: t.applications.items.borders.title,
      description: t.applications.items.borders.description,
    },
    {
      title: t.applications.items.infrastructure.title,
      description: t.applications.items.infrastructure.description,
    },
    {
      title: t.applications.items.safecity.title,
      description: t.applications.items.safecity.description,
    },
    {
      title: t.applications.items.rescue.title,
      description: t.applications.items.rescue.description,
    },
    {
      title: t.applications.items.ports.title,
      description: t.applications.items.ports.description,
    },
  ];

  return (
    <>
      <Hero
        title={t.applications.title}
        subtitle={t.applications.subtitle}
        description={t.applications.description}
        ctaText={t.applications.ctaText}
        imageSrc="/images/aplicaciones.webp"
        imageAlt={locale === 'es'
          ? "Aplicaciones del sistema aerostático AEROFACTOR: vigilancia de infraestructura crítica y defensa"
          : "AEROFACTOR aerostatic system applications: critical infrastructure and defense surveillance"}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              {t.applications.intro}
            </p>
          </div>
        </div>
      </section>

      <AppGrid applications={applications} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            {t.applications.howWeWork.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-primary-900 mb-2">{t.applications.howWeWork.step1.title}</h3>
              <p className="text-sm text-neutral-600">
                {t.applications.howWeWork.step1.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-primary-900 mb-2">{t.applications.howWeWork.step2.title}</h3>
              <p className="text-sm text-neutral-600">
                {t.applications.howWeWork.step2.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-primary-900 mb-2">{t.applications.howWeWork.step3.title}</h3>
              <p className="text-sm text-neutral-600">
                {t.applications.howWeWork.step3.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="font-bold text-primary-900 mb-2">{t.applications.howWeWork.step4.title}</h3>
              <p className="text-sm text-neutral-600">
                {t.applications.howWeWork.step4.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">5</div>
              <h3 className="font-bold text-primary-900 mb-2">{t.applications.howWeWork.step5.title}</h3>
              <p className="text-sm text-neutral-600">
                {t.applications.howWeWork.step5.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAWide
        title={t.applications.cta.title}
        description={t.applications.cta.description}
        ctaText={t.applications.cta.ctaText}
      />
    </>
  );
}
