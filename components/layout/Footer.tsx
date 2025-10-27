'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y tagline */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">AeroFactor</h3>
            <p className="text-gray-400 text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.products}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/productos" className="hover:text-white">
                  {t.footer.allProducts}
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/servicios/integracion-sistemas" className="hover:text-white">
                  {t.footer.systemIntegration}
                </Link>
              </li>
              <li>
                <Link href="/servicios/soporte-mantenimiento" className="hover:text-white">
                  {t.footer.supportMaintenance}
                </Link>
              </li>
              <li>
                <Link href="/servicios/entrenamiento-especializado" className="hover:text-white">
                  {t.footer.training}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{t.footer.email}</li>
              <li>{t.footer.phone}</li>
              <li>{t.footer.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 AeroFactor. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
