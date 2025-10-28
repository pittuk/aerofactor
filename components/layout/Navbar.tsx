'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">AeroFactor</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              {t.nav.home}
            </Link>
            <Link href="/aplicaciones" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              {t.nav.applications}
            </Link>
            <Link href="/productos" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              {t.nav.products}
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              {t.nav.services}
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              {t.nav.about}
            </Link>
            <LanguageSwitcher />
            <Link
              href="/contacto"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
