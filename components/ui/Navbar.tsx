'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/aplicaciones', label: 'Aplicaciones' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow-md border-b border-neutral-200'
        : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center -my-2">
            <Image
              src={scrolled ? "/logos/logo.png" : "/logos/logo-white.png"}
              alt="AEROFACTOR"
              width={280}
              height={80}
              className={`h-20 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
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
                className={`font-semibold text-sm transition-all ${
                  scrolled
                    ? 'text-neutral-800 hover:text-primary-600'
                    : 'text-white hover:text-blue-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg"
            >
              Solicitar Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 ${
              scrolled
                ? 'text-neutral-800 hover:bg-neutral-100'
                : 'text-white hover:bg-white/10'
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
        <div className={`lg:hidden border-t ${
          scrolled
            ? 'border-neutral-200 bg-white'
            : 'border-white/20 bg-black/40 backdrop-blur-md'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium ${
                  scrolled
                    ? 'text-neutral-800 hover:bg-neutral-100'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="block mt-4 text-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
