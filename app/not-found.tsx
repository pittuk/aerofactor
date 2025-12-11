'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl sm:text-7xl font-bold text-primary-900 mb-4">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-4">
          {t?.notFound?.title || 'Página no encontrada'}
        </h2>

        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          {t?.notFound?.description || 'Lo sentimos, la página que buscas no existe o ha sido movida.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {t?.notFound?.ctaHome || 'Volver al inicio'}
          </Link>
          <Link
            href="/contacto"
            className="inline-block bg-white hover:bg-neutral-50 text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {t?.notFound?.ctaContact || 'Contactar'}
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-600 mb-4">
            {t?.notFound?.helpText || 'También puedes visitar:'}
          </p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6" aria-label="Enlaces de navegación">
            <Link
              href="/productos"
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
            >
              {t?.nav?.products || 'Productos'}
            </Link>
            <Link
              href="/aplicaciones"
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
            >
              {t?.nav?.applications || 'Aplicaciones'}
            </Link>
            <Link
              href="/empresa"
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
            >
              {t?.nav?.company || 'Empresa'}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
