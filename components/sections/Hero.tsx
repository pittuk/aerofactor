import Link from 'next/link';
import Image from 'next/image';

/**
 * Hero Component
 *
 * Hero section con soporte para imagen o video de fondo.
 * Ideal para la página de inicio con título, subtítulo y CTAs.
 *
 * @example
 * <Hero
 *   title="Vigilancia aérea persistente"
 *   subtitle="Monitoreo continuo 24/7 con visión de 360°"
 *   description="Protegemos lo que más importa"
 *   backgroundImage="/images/hero/aerostat-operation.jpg"
 *   ctaButtons={[
 *     { text: "Solicitar demostración", href: "/contacto", variant: "primary" },
 *     { text: "Ver productos", href: "/productos", variant: "secondary" }
 *   ]}
 * />
 */

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  videoPoster?: string;
  ctaButtons: CTAButton[];
  overlay?: boolean;
  overlayOpacity?: number;
  height?: 'small' | 'medium' | 'large' | 'full';
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  videoPoster,
  ctaButtons,
  overlay = true,
  overlayOpacity = 0.6,
  height = 'large',
}: HeroProps) {
  const heightClasses = {
    small: 'min-h-[40vh]',
    medium: 'min-h-[60vh]',
    large: 'min-h-[80vh]',
    full: 'min-h-screen',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image or Video */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={videoPoster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-100 max-w-4xl mx-auto">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaButtons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`
                px-8 py-3 rounded-lg font-semibold transition text-base md:text-lg
                ${
                  button.variant === 'primary'
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary'
                }
              `}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll Indicator (opcional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
