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
  ctaText,
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
    <section className={`relative bg-primary-900 text-white overflow-hidden pb-0 min-h-[550px] h-[75vh] sm:h-[80vh] md:h-[85vh] lg:h-[85vh] max-h-[800px] flex ${alignmentClasses[contentPosition]} pt-20`}>
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/45 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pb-32 sm:pb-28 md:pb-24 lg:pb-0">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6 break-words">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-5 sm:mb-6 md:mb-7 lg:mb-8 font-medium leading-relaxed break-words">
            {subtitle}
          </p>
          {description && (
            <p className="text-sm sm:text-base md:text-lg text-white/95 mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed break-words">
              {description}
            </p>
          )}
          {ctaText && (
            <Link
              href={ctaHref}
              className="inline-block bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all hover:shadow-xl hover:scale-105 shadow-2xl touch-manipulation min-h-[44px] min-w-[120px]"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
