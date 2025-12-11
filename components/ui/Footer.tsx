'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navigationLinks = [
    { href: '/', label: t.nav.home },
    { href: '/productos', label: t.nav.products },
    { href: '/aplicaciones', label: t.nav.applications },
    { href: '/empresa', label: t.nav.company },
    { href: '/contacto', label: t.nav.contact },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10 mb-10 lg:mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/logos/Logo-Aerofactor---gris.png"
              alt="AEROFACTOR"
              width={320}
              height={90}
              className="h-16 sm:h-18 md:h-20 lg:h-20 w-auto mb-6"
            />
            <p className="text-neutral-600 text-base sm:text-base leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Productos */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5">
              {t.footer.products}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/productos" className="text-base text-neutral-700 hover:text-accent-500 transition-colors inline-block">
                  {t.products.tactical.title}
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-base text-neutral-700 hover:text-accent-500 transition-colors inline-block">
                  {t.products.regional.title}
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-base text-neutral-700 hover:text-accent-500 transition-colors inline-block">
                  {t.products.strategic.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5">
              {t.nav.company}
            </h3>
            <ul className="space-y-3">
              {navigationLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-neutral-700 hover:text-accent-500 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5">
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contacto" className="text-base text-neutral-700 hover:text-accent-500 transition-colors inline-block">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a href="mailto:info@aerofactorlatam.com" className="text-base text-neutral-700 hover:text-accent-500 transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@aerofactorlatam.com
                </a>
              </li>
              <li>
                <span className="text-base text-neutral-700 inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Santiago, Chile
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-neutral-600 text-center sm:text-left order-2 sm:order-1">
              © {currentYear} AEROFACTOR. {t.footer.rights}
            </p>

            {/* Right section: Language & Links */}
            <div className="flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6 order-1 sm:order-2">
              {/* Links */}
              <div className="flex items-center gap-4 sm:gap-6 text-xs">
                <Link href="/privacidad" className="text-neutral-600 hover:text-accent-500 transition-colors whitespace-nowrap py-2 px-1 inline-block min-h-[44px] flex items-center">
                  {locale === 'es' ? 'Privacidad' : locale === 'en' ? 'Privacy' : 'Privacidade'}
                </Link>
                <Link href="/terminos" className="text-neutral-600 hover:text-accent-500 transition-colors whitespace-nowrap py-2 px-1 inline-block min-h-[44px] flex items-center">
                  {locale === 'es' ? 'Términos' : locale === 'en' ? 'Terms' : 'Termos'}
                </Link>
              </div>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wider">{locale === 'es' ? 'ES' : locale === 'en' ? 'EN' : 'PT'}</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${languageMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {languageMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setLanguageMenuOpen(false)} />
                    <div className="absolute right-0 bottom-full mb-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-20 overflow-hidden">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setLocale('es');
                            setLanguageMenuOpen(false);
                          }}
                          className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${
                            locale === 'es'
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-neutral-700 hover:bg-neutral-50'
                          }`}
                        >
                          <span className="text-xl mr-3">🇪🇸</span>
                          <span className="font-medium">Español</span>
                          {locale === 'es' && (
                            <svg className="w-4 h-4 ml-auto text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        <button
                          onClick={() => {
                            setLocale('en');
                            setLanguageMenuOpen(false);
                          }}
                          className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${
                            locale === 'en'
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-neutral-700 hover:bg-neutral-50'
                          }`}
                        >
                          <span className="text-xl mr-3">🇺🇸</span>
                          <span className="font-medium">English</span>
                          {locale === 'en' && (
                            <svg className="w-4 h-4 ml-auto text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        <button
                          onClick={() => {
                            setLocale('pt');
                            setLanguageMenuOpen(false);
                          }}
                          className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${
                            locale === 'pt'
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-neutral-700 hover:bg-neutral-50'
                          }`}
                        >
                          <span className="text-xl mr-3">🇧🇷</span>
                          <span className="font-medium">Português</span>
                          {locale === 'pt' && (
                            <svg className="w-4 h-4 ml-auto text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
