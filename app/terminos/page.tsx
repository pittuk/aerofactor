'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TerminosPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-900 to-primary-800 text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t.terms.title}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg">
            {t.terms.lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 -mt-8">
        {/* Company Info Card */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
              <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">RPASYSTEMGLOBAL SPA</h2>
            <p className="text-lg text-neutral-600">
              <span className="font-semibold">RUT:</span> <span className="font-mono">76.981.226-1</span>
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {/* Acceptance */}
          <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              {t.terms.acceptance.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">{t.terms.acceptance.description}</p>
          </section>

          {/* Services */}
          <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              {t.terms.services.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg mb-6">{t.terms.services.description}</p>
            <ul className="space-y-3">
              {Object.values(t.terms.services.items).map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700 text-base sm:text-lg">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Use Conditions */}
          <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              {t.terms.useConditions.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg mb-6">{t.terms.useConditions.description}</p>
            <ul className="space-y-3">
              {Object.values(t.terms.useConditions.items).map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700 text-base sm:text-lg">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              {t.terms.intellectualProperty.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">{t.terms.intellectualProperty.description}</p>
          </section>

          {/* Liability */}
          <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              {t.terms.liability.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">{t.terms.liability.description}</p>
          </section>

          {/* Modifications */}
          <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              {t.terms.modifications.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">{t.terms.modifications.description}</p>
          </section>

          {/* Jurisdiction */}
          <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              {t.terms.jurisdiction.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">{t.terms.jurisdiction.description}</p>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              {t.terms.contact.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg mb-6">{t.terms.contact.description}</p>
            <a
              href="mailto:info@aerofactorlatam.com"
              className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@aerofactorlatam.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
