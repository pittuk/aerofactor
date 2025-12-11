'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Componente que actualiza el atributo lang del HTML dinámicamente
 * para mejorar SEO y accesibilidad
 */
export default function LangUpdater() {
  const { locale } = useLanguage();

  useEffect(() => {
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = locale;

    // Mapeo de locales a códigos completos
    const langMap: Record<string, string> = {
      'es': 'es-CL',
      'en': 'en-US',
      'pt': 'pt-BR'
    };

    // Actualizar meta OG locale si existe
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', langMap[locale] || 'es-CL');
    }
  }, [locale]);

  return null; // Este componente no renderiza nada
}
