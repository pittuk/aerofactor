import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Solicitar Reunión',
  ctaHref = '/contacto',
  imageSrc = '/images/hero-aerostato-nuevo.webp',
  imageAlt = 'Sistema aerostático de vigilancia AEROFACTOR',
}: HeroProps) {
  return (
    <section className="relative bg-white text-white overflow-visible pb-0 h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center opacity-85"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-primary-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 font-medium">
            {subtitle}
          </p>
          {description && (
            <p className="text-lg text-white/100 mb-10 leading-relaxed">
              {description}
            </p>
          )}
          <Link
            href={ctaHref}
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:scale-105 shadow-2xl"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
