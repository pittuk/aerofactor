'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/productos', label: t.nav.products },
    { href: '/aplicaciones', label: t.nav.applications },
    { href: '/empresa', label: t.nav.company },
    { href: '/contacto', label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow-md'
        : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center -my-2 relative">
            <Image
              src="/logos/logo.png"
              alt="AEROFACTOR"
              width={280}
              height={80}
              className={`h-20 w-auto transition-all duration-300 ${
                scrolled
                  ? 'opacity-100 filter-none'
                  : 'brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-semibold text-sm uppercase tracking-wide transition-all duration-300 group ${
                  scrolled
                    ? isActive(link.href)
                      ? 'text-accent-500'
                      : 'text-neutral-700 hover:text-accent-500'
                    : isActive(link.href)
                      ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
                      : 'text-white hover:text-accent-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
                }`}
              >
                {link.label}
                {/* Underline indicator */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-500 transition-all duration-300 ${
                  isActive(link.href)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 group ${
                  scrolled
                    ? 'text-neutral-700 hover:text-primary-600'
                    : 'text-white hover:text-white/90'
                }`}
                aria-label="Change language"
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
                  <div className="absolute right-0 mt-3 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-20 overflow-hidden">
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

            <Link
              href="/contacto"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all hover:shadow-lg shadow-md"
            >
              {t.nav.requestMeeting}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all duration-300 ${
              scrolled
                ? 'text-neutral-700 hover:bg-neutral-100'
                : 'text-white hover:bg-white/20 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú principal"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden transition-all duration-300 ${
          scrolled
            ? 'bg-white border-t border-neutral-200'
            : 'bg-black/80 backdrop-blur-md'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium uppercase tracking-wide transition-colors ${
                  scrolled
                    ? isActive(link.href)
                      ? 'text-accent-500 bg-accent-50'
                      : 'text-neutral-700 hover:text-accent-500 hover:bg-neutral-100'
                    : isActive(link.href)
                      ? 'text-white bg-white/10'
                      : 'text-white hover:text-accent-400 hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
              className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border font-medium transition-colors ${
                scrolled
                  ? 'border-neutral-300 bg-white hover:bg-accent-50 text-neutral-700'
                  : 'border-white/30 bg-white/10 hover:bg-white/20 text-white'
              }`}
              title={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span>{locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}</span>
            </button>

            <Link
              href="/contacto"
              className="block mt-4 text-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.requestMeeting}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
