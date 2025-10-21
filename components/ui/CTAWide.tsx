import Link from 'next/link';

interface CTAWideProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTAWide({
  title,
  description,
  ctaText = 'Solicitar Demostración',
  ctaHref = '/contacto',
}: CTAWideProps) {
  return (
    <section className="bg-gradient-to-r from-primary-900 to-primary-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              {description}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="flex-shrink-0 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:scale-105"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
