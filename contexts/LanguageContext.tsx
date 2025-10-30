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
      // Auto-detect language from browser
      const browserLang = navigator.language || navigator.languages?.[0] || 'es';
      const detectedLocale = browserLang.toLowerCase();

      // Determine locale based on browser language
      // English for: en-US, en-GB, en-CA, en-AU, etc.
      // Portuguese for: pt-BR, pt-PT
      // Spanish for: es-*, and default fallback
      let selectedLocale: Locale = 'es'; // Default to Spanish

      if (detectedLocale.startsWith('en')) {
        selectedLocale = 'en';
      } else if (detectedLocale.startsWith('pt')) {
        selectedLocale = 'pt';
      } else {
        // Spanish for es-*, and any other language defaults to Spanish
        selectedLocale = 'es';
      }

      setLocaleState(selectedLocale);
      setMessages(selectedLocale === 'es' ? es : selectedLocale === 'en' ? en : pt);
      localStorage.setItem('locale', selectedLocale);
    }
  }, []);

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
