'use client';

import Hero from '@/components/ui/Hero';
import KPIs from '@/components/ui/KPIs';
import AppGridSimple from '@/components/ui/AppGridSimple';
import CTAWide from '@/components/ui/CTAWide';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const kpis = [
    {
      value: t.home.kpis.coverage.value,
      label: t.home.kpis.coverage.label,
      description: t.home.kpis.coverage.description,
    },
    {
      value: t.home.kpis.operation.value,
      label: t.home.kpis.operation.label,
      description: t.home.kpis.operation.description,
    },
    {
      value: t.home.kpis.altitude.value,
      label: t.home.kpis.altitude.label,
      description: t.home.kpis.altitude.description,
    },
  ];

  const applications = [
    {
      title: t.home.applications.defense.title,
      description: t.home.applications.defense.description,
    },
    {
      title: t.home.applications.borders.title,
      description: t.home.applications.borders.description,
    },
    {
      title: t.home.applications.infrastructure.title,
      description: t.home.applications.infrastructure.description,
    },
    {
      title: t.home.applications.safecity.title,
      description: t.home.applications.safecity.description,
    },
    {
      title: t.home.applications.rescue.title,
      description: t.home.applications.rescue.description,
    },
    {
      title: t.applications.items.ports.title,
      description: t.applications.items.ports.description,
    },
  ];

  return (
    <>
      <Hero
        title={t.home.hero.title}
        subtitle={t.home.hero.subtitle}
        description={t.home.hero.description}
        ctaText={t.nav.requestMeeting}
      />

      <KPIs kpis={kpis} />

      {/* Productos y Tecnologías */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              {t.home.products.title}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t.home.products.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-3">{t.home.products.tactical.title}</h3>
              <p className="text-neutral-600 mb-4">
                {t.home.products.tactical.description}
              </p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li>• {t.home.products.tactical.autonomy}</li>
                <li>• {t.home.products.tactical.altitude}</li>
                <li>• {t.home.products.tactical.sensors}</li>
              </ul>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-3">{t.home.products.regional.title}</h3>
              <p className="text-neutral-600 mb-4">
                {t.home.products.regional.description}
              </p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li>• {t.home.products.regional.autonomy}</li>
                <li>• {t.home.products.regional.altitude}</li>
                <li>• {t.home.products.regional.sensors}</li>
              </ul>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-3">{t.home.products.strategic.title}</h3>
              <p className="text-neutral-600 mb-4">
                {t.home.products.strategic.description}
              </p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li>• {t.home.products.strategic.autonomy}</li>
                <li>• {t.home.products.strategic.altitude}</li>
                <li>• {t.home.products.strategic.sensors}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <AppGridSimple applications={applications} />

      {/* CTA Final */}
      <CTAWide
        title={t.home.cta.title}
        description={t.home.cta.description}
        ctaText={t.nav.requestMeeting}
      />
    </>
  );
}
