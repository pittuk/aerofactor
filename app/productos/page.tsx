'use client';

import Hero from '@/components/ui/Hero';
import ProductCard from '@/components/ui/ProductCard';
import CTAWide from '@/components/ui/CTAWide';
import { useLanguage } from '@/contexts/LanguageContext';
import Head from 'next/head';

export default function ProductosPage() {
  const { t, locale } = useLanguage();

  const products = [
    {
      title: t.products.tactical.title,
      excerpt: t.products.tactical.excerpt,
      specs: {
        autonomy: t.products.tactical.autonomy,
        altitude: t.products.tactical.altitude,
        sensors: t.products.tactical.sensors,
      },
    },
    {
      title: t.products.regional.title,
      excerpt: t.products.regional.excerpt,
      specs: {
        autonomy: t.products.regional.autonomy,
        altitude: t.products.regional.altitude,
        sensors: t.products.regional.sensors,
      },
    },
    {
      title: t.products.strategic.title,
      excerpt: t.products.strategic.excerpt,
      specs: {
        autonomy: t.products.strategic.autonomy,
        altitude: t.products.strategic.altitude,
        sensors: t.products.strategic.sensors,
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Sistemas Aerostáticos de Vigilancia | AEROFACTOR</title>
        <meta name="description" content="Plataformas aerostáticas tácticas, regionales y estratégicas equipadas con sensores multi-espectro e IA. Cobertura de 50-500km² con operación continua 24/7." />
        <meta name="keywords" content="aerostatos tácticos, vigilancia aérea, sistemas ISR, sensores multi-espectro, aerostatos militares, vigilancia persistente" />
        <meta property="og:title" content="Sistemas Aerostáticos de Vigilancia | AEROFACTOR" />
        <meta property="og:description" content="Plataformas aerostáticas tácticas, regionales y estratégicas para vigilancia persistente" />
        <meta property="og:url" content="https://aerofactor.cl/productos" />
        <meta property="og:image" content="https://aerofactor.cl/og/productos.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sistemas Aerostáticos de Vigilancia | AEROFACTOR" />
        <meta name="twitter:description" content="Plataformas aerostáticas para vigilancia persistente con tecnología avanzada" />
        <link rel="canonical" href="https://aerofactor.cl/productos" />
      </Head>
      <Hero
        title={t.products.title}
        subtitle={t.products.subtitle}
        description={t.products.description}
        ctaText={t.products.ctaText}
        imageSrc="/images/productos.webp"
        imageAlt={t.imageAlts.productsSystem}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none mb-16">
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t.products.intro}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-primary-900 mb-8">{t.products.availablePlatforms}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                excerpt={product.excerpt}
                specs={product.specs}
              />
            ))}
          </div>

          <div className="bg-neutral-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              {t.products.selection.title}
            </h2>
            <p className="text-neutral-700 mb-6">
              {t.products.selection.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">{t.products.selection.step1.title}</h3>
                  <p className="text-sm text-neutral-600">{t.products.selection.step1.description}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">{t.products.selection.step2.title}</h3>
                  <p className="text-sm text-neutral-600">{t.products.selection.step2.description}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">{t.products.selection.step3.title}</h3>
                  <p className="text-sm text-neutral-600">{t.products.selection.step3.description}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">{t.products.selection.step4.title}</h3>
                  <p className="text-sm text-neutral-600">{t.products.selection.step4.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAWide
        title={t.products.cta.title}
        description={t.products.cta.description}
        ctaText={t.products.cta.ctaText}
      />
    </>
  );
}
