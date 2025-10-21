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
  ctaText = 'Solicitar Demostración',
  ctaHref = '/contacto',
  imageSrc = '/images/hero-aerostato.webp',
  imageAlt = 'Sistema aerostático de vigilancia AEROFACTOR',
}: HeroProps) {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 font-medium drop-shadow-lg">
            {subtitle}
          </p>
          {description && (
            <p className="text-lg text-white/95 mb-10 leading-relaxed drop-shadow-lg">
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
