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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [messages, setMessages] = useState<Messages>(es);

  useEffect(() => {
    // Check if user has previously selected a language
    const savedLocale = localStorage.getItem('locale') as Locale;

    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en' || savedLocale === 'pt')) {
      // Use saved preference
      setLocaleState(savedLocale);
      setMessages(savedLocale === 'es' ? es : savedLocale === 'en' ? en : pt);
    } else {
      // Auto-detect language by IP geolocation
      detectLanguageByIP();
    }
  }, []);

  const detectLanguageByIP = async () => {
    try {
      // Try to get country from IP using a free geolocation API
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();

      let selectedLocale: Locale = 'es'; // Default to Spanish

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
        } else {
          // Fallback to browser language for other countries
          const browserLang = navigator.language || navigator.languages?.[0] || 'es';
          const detectedLocale = browserLang.toLowerCase();

          if (detectedLocale.startsWith('en')) {
            selectedLocale = 'en';
          } else if (detectedLocale.startsWith('pt')) {
            selectedLocale = 'pt';
          } else {
            selectedLocale = 'es'; // Default to Spanish
          }
        }
      }

      setLocaleState(selectedLocale);
      setMessages(selectedLocale === 'es' ? es : selectedLocale === 'en' ? en : pt);
      localStorage.setItem('locale', selectedLocale);
    } catch (error) {
      // If geolocation fails, fallback to browser language
      console.log('Geolocation failed, using browser language');
      const browserLang = navigator.language || navigator.languages?.[0] || 'es';
      const detectedLocale = browserLang.toLowerCase();

      let selectedLocale: Locale = 'es';

      if (detectedLocale.startsWith('en')) {
        selectedLocale = 'en';
      } else if (detectedLocale.startsWith('pt')) {
        selectedLocale = 'pt';
      } else {
        selectedLocale = 'es';
      }

      setLocaleState(selectedLocale);
      setMessages(selectedLocale === 'es' ? es : selectedLocale === 'en' ? en : pt);
      localStorage.setItem('locale', selectedLocale);
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
