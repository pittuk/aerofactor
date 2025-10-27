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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 md:mb-0">
            <Image
              src="/logos/Logo-Aerofactor---gris.png"
              alt="AEROFACTOR"
              width={220}
              height={60}
              className="h-11 sm:h-13 md:h-14 w-auto mb-4 -ml-1"
            />
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-5">
              {locale === 'es'
                ? 'Vigilancia aérea persistente de nueva generación para seguridad territorial.'
                : 'Next-generation persistent aerial surveillance for territorial security.'}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors p-2 hover:bg-neutral-50 rounded-lg" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors p-2 hover:bg-neutral-50 rounded-lg" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors p-2 hover:bg-neutral-50 rounded-lg" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Productos */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-4">
              {locale === 'es' ? 'Productos' : 'Products'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/productos" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors inline-block">
                  {locale === 'es' ? 'Sistema Táctico' : 'Tactical System'}
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors inline-block">
                  {locale === 'es' ? 'Sistema Regional' : 'Regional System'}
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors inline-block">
                  {locale === 'es' ? 'Sistema Estratégico' : 'Strategic System'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-4">
              {locale === 'es' ? 'Empresa' : 'Company'}
            </h3>
            <ul className="space-y-3">
              {navigationLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-accent-500 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-4">
              {locale === 'es' ? 'Soporte' : 'Support'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contacto" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors inline-block">
                  {locale === 'es' ? 'Contacto' : 'Contact'}
                </Link>
              </li>
              <li>
                <a href="mailto:info@aerofactor.cl" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@aerofactor.cl
                </a>
              </li>
              <li>
                <span className="text-sm text-neutral-500 inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="text-xs text-neutral-400 text-center sm:text-left order-2 sm:order-1">
              © {currentYear} AEROFACTOR. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>

            {/* Right section: Language & Links */}
            <div className="flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6 order-1 sm:order-2">
              {/* Links */}
              <div className="flex items-center gap-4 sm:gap-6 text-xs">
                <Link href="/privacidad" className="text-neutral-400 hover:text-accent-500 transition-colors whitespace-nowrap">
                  {locale === 'es' ? 'Privacidad' : 'Privacy'}
                </Link>
                <Link href="/terminos" className="text-neutral-400 hover:text-accent-500 transition-colors whitespace-nowrap">
                  {locale === 'es' ? 'Términos' : 'Terms'}
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
                  <span className="text-xs font-medium uppercase tracking-wider">{locale === 'es' ? 'ES' : 'EN'}</span>
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
