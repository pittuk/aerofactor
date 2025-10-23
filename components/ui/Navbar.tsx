'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/aplicaciones', label: 'Aplicaciones' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' },
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
            <Link
              href="/contacto"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all hover:shadow-lg shadow-md"
            >
              Solicitar Reunión
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
            <Link
              href="/contacto"
              className="block mt-4 text-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Reunión
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
