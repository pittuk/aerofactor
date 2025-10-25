'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  contentPosition?: 'center' | 'bottom' | 'top';
  imageOpacity?: number;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Solicitar Reunión',
  ctaHref = '/contacto',
  imageSrc = '/images/hero-aerostato-nuevo.webp',
  imageAlt = 'Sistema aerostático de vigilancia AEROFACTOR',
  contentPosition = 'center',
  imageOpacity = 85,
}: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const alignmentClasses = {
    center: 'items-center',
    bottom: 'items-end pb-20',
    top: 'items-start pt-48',
  };

  return (
    <section className={`relative bg-primary-900 text-white overflow-visible pb-0 h-[85vh] flex ${alignmentClasses[contentPosition]} pt-16`}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-primary-900">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-all duration-500 ease-in-out"
          style={{
            opacity: imageLoaded ? imageOpacity / 100 : 0,
            transform: imageLoaded ? 'scale(1)' : 'scale(1.05)',
          }}
          priority
          quality={100}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-primary-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 font-medium">
            {subtitle}
          </p>
          {description && (
            <p className="text-base sm:text-lg text-white/100 mb-8 sm:mb-10 leading-relaxed">
              {description}
            </p>
          )}
          <Link
            href={ctaHref}
            className="inline-block bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-xl hover:scale-105 shadow-2xl touch-manipulation min-h-[44px] min-w-[44px]"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
