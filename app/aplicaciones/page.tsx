'use client';

import { useRef, useEffect, useState } from 'react';
import Hero from '@/components/ui/Hero';
import AppGrid from '@/components/ui/AppGrid';
import CTAWide from '@/components/ui/CTAWide';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AplicacionesPage() {
  const { t, locale } = useLanguage();
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [video1Width, setVideo1Width] = useState(0);
  const [video2Width, setVideo2Width] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      if (video1Ref.current) {
        setVideo1Width(video1Ref.current.offsetWidth);
      }
      if (video2Ref.current) {
        setVideo2Width(video2Ref.current.offsetWidth);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);

    // Update after video loads
    if (video1Ref.current) {
      video1Ref.current.addEventListener('loadedmetadata', updateWidths);
    }
    if (video2Ref.current) {
      video2Ref.current.addEventListener('loadedmetadata', updateWidths);
    }

    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, []);

  const applications = [
    {
      title: t.applications.items.defense.title,
      description: t.applications.items.defense.description,
    },
    {
      title: t.applications.items.ports.title,
      description: t.applications.items.ports.description,
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
      title: t.applications.items.borders.title,
      description: t.applications.items.borders.description,
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
        imageAlt={t.imageAlts.applicationsSystem}
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

      {/* Videos Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              {t.applications.videos.title}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t.applications.videos.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Video 1 - Sistema Aerostático */}
            <div className="flex flex-col items-center w-full lg:w-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg relative w-full lg:w-[710px] h-[250px] sm:h-[300px] lg:h-[400px]">
                <video
                  ref={video1Ref}
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                  preload="none"
                  poster="/images/Videos/1-poster.jpg"
                >
                  <source src="/images/Videos/1.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
              <div className="bg-white rounded-2xl p-6 mt-4 shadow-lg w-full lg:w-[710px]">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t.applications.videos.product.title}
                </h3>
                <p className="text-neutral-600">
                  {t.applications.videos.product.description}
                </p>
              </div>
            </div>

            {/* Video 2 - Capacidad de Zoom */}
            <div className="flex flex-col items-center w-full lg:w-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg relative w-full lg:w-[710px] h-[250px] sm:h-[300px] lg:h-[400px]">
                <video
                  ref={video2Ref}
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                  preload="none"
                  poster="/images/Videos/2-poster.jpg"
                >
                  <source src="/images/Videos/2.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
              <div className="bg-white rounded-2xl p-6 mt-4 shadow-lg w-full lg:w-[710px]">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t.applications.videos.camera.title}
                </h3>
                <p className="text-neutral-600">
                  {t.applications.videos.camera.description}
                </p>
              </div>
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
