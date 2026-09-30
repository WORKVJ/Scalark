'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '@/data/translations';

const LanguageContext = createContext({
  currentLang: 'EN',
  setLang: () => {},
  t: TRANSLATIONS.EN,
  isRtl: false,
});

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLangState] = useState('EN');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('scalark_lang');
      if (saved && TRANSLATIONS[saved]) {
        setCurrentLangState(saved);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const setLang = (code) => {
    setCurrentLangState(code);
    try {
      localStorage.setItem('scalark_lang', code);
    } catch (e) {}
  };

  const isRtl = currentLang === 'AR';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.EN;

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang.toLowerCase());
  }, [currentLang, isRtl]);

  return (
    <LanguageContext.Provider value={{ currentLang, setLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
