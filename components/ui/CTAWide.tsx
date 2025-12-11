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
  ctaText,
  ctaHref = '/contacto',
}: CTAWideProps) {
  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              {description}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="flex-shrink-0 bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105 shadow-lg"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
