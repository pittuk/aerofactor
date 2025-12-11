'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import es from '@/messages/es.json';
import en from '@/messages/en.json';
import pt from '@/messages/pt.json';

type Locale = 'es' | 'en' | 'pt';
type Messages = typeof es;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Cache de geolocalización (7 días)
const GEO_CACHE_KEY = 'aerofactor_geo_cache';
const GEO_CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 días en ms

interface GeoCache {
  locale: Locale;
  timestamp: number;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [messages, setMessages] = useState<Messages>(es);

  useEffect(() => {
    detectLanguage();
  }, []);

  const detectLanguage = async () => {
    // 1. Verificar si hay preferencia guardada por el usuario
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en' || savedLocale === 'pt')) {
      setLocaleState(savedLocale);
      setMessages(savedLocale === 'es' ? es : savedLocale === 'en' ? en : pt);
      return;
    }

    // 2. Intentar detectar del browser language primero (más rápido)
    const browserLocale = detectFromBrowser();
    if (browserLocale) {
      setLocaleState(browserLocale);
      setMessages(browserLocale === 'es' ? es : browserLocale === 'en' ? en : pt);
      localStorage.setItem('locale', browserLocale);
      return;
    }

    // 3. Si browser language no es concluyente, verificar cache de geolocalización
    const cachedGeo = getCachedGeo();
    if (cachedGeo) {
      setLocaleState(cachedGeo.locale);
      setMessages(cachedGeo.locale === 'es' ? es : cachedGeo.locale === 'en' ? en : pt);
      localStorage.setItem('locale', cachedGeo.locale);
      return;
    }

    // 4. Como último recurso, detectar por IP (con cache)
    await detectLanguageByIP();
  };

  const detectFromBrowser = (): Locale | null => {
    try {
      const browserLang = navigator.language || navigator.languages?.[0] || '';
      const lang = browserLang.toLowerCase();

      // Solo retornar si es un idioma que soportamos claramente
      if (lang.startsWith('es')) return 'es';
      if (lang.startsWith('en')) return 'en';
      if (lang.startsWith('pt')) return 'pt';

      // Si no es ninguno de nuestros idiomas, retornar null para intentar geo
      return null;
    } catch (error) {
      console.log('Error detecting browser language:', error);
      return null;
    }
  };

  const getCachedGeo = (): GeoCache | null => {
    try {
      const cached = localStorage.getItem(GEO_CACHE_KEY);
      if (!cached) return null;

      const geoCache: GeoCache = JSON.parse(cached);
      const now = Date.now();

      // Verificar si el cache expiró
      if (now - geoCache.timestamp > GEO_CACHE_DURATION) {
        localStorage.removeItem(GEO_CACHE_KEY);
        return null;
      }

      return geoCache;
    } catch (error) {
      console.log('Error reading geo cache:', error);
      return null;
    }
  };

  const setCachedGeo = (locale: Locale) => {
    try {
      const geoCache: GeoCache = {
        locale,
        timestamp: Date.now()
      };
      localStorage.setItem(GEO_CACHE_KEY, JSON.stringify(geoCache));
    } catch (error) {
      console.log('Error setting geo cache:', error);
    }
  };

  const detectLanguageByIP = async () => {
    try {
      // Timeout de 5 segundos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch('https://ipapi.co/json/', {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      let selectedLocale: Locale = 'es'; // Default a español

      if (data.country_code) {
        const country = data.country_code.toUpperCase();

        // English-speaking countries
        const englishCountries = ['US', 'GB', 'CA', 'AU', 'NZ', 'IE', 'ZA', 'IN', 'SG'];
        // Portuguese-speaking countries
        const portugueseCountries = ['BR', 'PT', 'AO', 'MZ'];
        // Spanish-speaking countries (Latin America + Spain)
        const spanishCountries = ['ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ'];

        if (englishCountries.includes(country)) {
          selectedLocale = 'en';
        } else if (portugueseCountries.includes(country)) {
          selectedLocale = 'pt';
        } else if (spanishCountries.includes(country)) {
          selectedLocale = 'es';
        }
      }

      setLocaleState(selectedLocale);
      setMessages(selectedLocale === 'es' ? es : selectedLocale === 'en' ? en : pt);
      localStorage.setItem('locale', selectedLocale);
      setCachedGeo(selectedLocale);
    } catch (error) {
      // Si falla (timeout, red, etc), usar español como default
      console.log('IP geolocation failed or timed out, using default Spanish');
      setLocaleState('es');
      setMessages(es);
      localStorage.setItem('locale', 'es');
    }
  };

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setMessages(newLocale === 'es' ? es : newLocale === 'en' ? en : pt);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
