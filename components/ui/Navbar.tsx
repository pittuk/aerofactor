'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [mobileLanguageMenuOpen, setMobileLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/aplicaciones', label: t.nav.applications },
    { href: '/productos', label: t.nav.products },
    { href: '/empresa', label: t.nav.company },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    if (languageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageMenuOpen]);

  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-500 text-white px-4 py-2 rounded-lg z-[200] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
      >
        Saltar al contenido principal
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
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
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 group ${
                  scrolled
                    ? 'border-neutral-200 text-neutral-700 hover:border-primary-600 hover:text-primary-600 bg-white'
                    : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                }`}
                aria-label="Change language"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">{locale === 'es' ? 'Español' : locale === 'en' ? 'English' : 'Português'}</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${languageMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {languageMenuOpen && (
                <div className="absolute right-0 mt-3 w-48 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setLocale('es');
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full flex items-center px-4 py-3 text-sm transition-colors ${
                        locale === 'es'
                          ? 'bg-primary-600 text-white'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      <span className="font-medium">Español</span>
                      {locale === 'es' && (
                        <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setLocale('en');
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full flex items-center px-4 py-3 text-sm transition-colors ${
                        locale === 'en'
                          ? 'bg-primary-600 text-white'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      <span className="font-medium">English</span>
                      {locale === 'en' && (
                        <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setLocale('pt');
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full flex items-center px-4 py-3 text-sm transition-colors ${
                        locale === 'pt'
                          ? 'bg-primary-600 text-white'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      <span className="font-medium">Português</span>
                      {locale === 'pt' && (
                        <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
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
            className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300 ${
              scrolled
                ? 'text-neutral-700 hover:bg-neutral-100'
                : 'text-white hover:bg-white/20 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
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
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-20 left-0 right-0 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        } ${
          scrolled
            ? 'bg-white border-t border-neutral-200 shadow-lg'
            : 'bg-black/90 backdrop-blur-md border-t border-white/10'
        }`}
        style={{ zIndex: 50 }}
      >
            <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium uppercase tracking-wide text-sm transition-colors ${
                  scrolled
                    ? isActive(link.href)
                      ? 'text-accent-500 bg-accent-50'
                      : 'text-neutral-700 hover:text-accent-500 hover:bg-neutral-100'
                    : isActive(link.href)
                      ? 'text-white bg-white/20'
                      : 'text-white hover:text-accent-400 hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher - Dropdown Style */}
            <div className="relative pt-2">
              <button
                onClick={() => setMobileLanguageMenuOpen(!mobileLanguageMenuOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                  scrolled
                    ? 'border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700'
                    : 'border border-white/30 bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  {locale === 'es' ? 'Español' : locale === 'en' ? 'English' : 'Português'}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${mobileLanguageMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {mobileLanguageMenuOpen && (
                <div className={`mt-2 rounded-lg overflow-hidden ${
                  scrolled ? 'bg-white border border-neutral-200' : 'bg-white/10 backdrop-blur-md border border-white/20'
                }`}>
                  <button
                    onClick={() => {
                      setLocale('es');
                      setMobileLanguageMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                      locale === 'es'
                        ? scrolled
                          ? 'bg-primary-600 text-white'
                          : 'bg-white/20 text-white'
                        : scrolled
                          ? 'text-neutral-700 hover:bg-neutral-50'
                          : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Español</span>
                    {locale === 'es' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setLocale('en');
                      setMobileLanguageMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                      locale === 'en'
                        ? scrolled
                          ? 'bg-primary-600 text-white'
                          : 'bg-white/20 text-white'
                        : scrolled
                          ? 'text-neutral-700 hover:bg-neutral-50'
                          : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span>English</span>
                    {locale === 'en' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setLocale('pt');
                      setMobileLanguageMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                      locale === 'pt'
                        ? scrolled
                          ? 'bg-primary-600 text-white'
                          : 'bg-white/20 text-white'
                        : scrolled
                          ? 'text-neutral-700 hover:bg-neutral-50'
                          : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Português</span>
                    {locale === 'pt' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contacto"
              className="block mt-4 text-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wide min-h-[48px] flex items-center justify-center touch-manipulation"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.requestMeeting}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
