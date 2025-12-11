import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductSpecs {
  autonomy?: string;
  altitude?: string;
  sensors?: string[];
  payload?: string;
}

interface ProductCardProps {
  title: string;
  excerpt: string;
  specs: ProductSpecs;
  ctaText?: string;
  ctaHref?: string;
}

export default function ProductCard({
  title,
  excerpt,
  specs,
  ctaText,
  ctaHref = '/contacto',
}: ProductCardProps) {
  const { t, locale } = useLanguage();
  const defaultCtaText = ctaText || t.products.ctaText;
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-8 hover:shadow-xl transition-all flex flex-col h-full">
      <h3 className="text-2xl font-bold text-primary-900 mb-4">{title}</h3>
      <p className="text-neutral-600 mb-6 leading-relaxed">{excerpt}</p>

      <div className="space-y-3 mb-6 flex-grow">
        {specs.autonomy && (
          <div className="flex items-start">
            <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-neutral-700">
              <strong>{t.products.specs.autonomy}</strong> {specs.autonomy}
            </span>
          </div>
        )}
        {specs.altitude && (
          <div className="flex items-start">
            <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span className="text-sm text-neutral-700">
              <strong>{t.products.specs.altitude}</strong> {specs.altitude}
            </span>
          </div>
        )}
        {specs.payload && (
          <div className="flex items-start">
            <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-neutral-700">
              <strong>{t.products.specs.payload}</strong> {specs.payload}
            </span>
          </div>
        )}
        {specs.sensors && specs.sensors.length > 0 && (
          <div className="flex items-start">
            <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <div className="text-sm text-neutral-700">
              <strong>{t.products.specs.sensors}</strong> {specs.sensors.join(', ')}
            </div>
          </div>
        )}
      </div>

      <Link
        href={ctaHref}
        className="inline-block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-auto"
      >
        {defaultCtaText}
      </Link>
    </div>
  );
}
