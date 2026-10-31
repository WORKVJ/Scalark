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
      if (saved === 'AR' || saved === 'EN') {
        setCurrentLangState(saved);
      } else {
        setCurrentLangState('EN');
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const setLang = (code) => {
    const valid = code === 'AR' ? 'AR' : 'EN';
    setCurrentLangState(valid);
    try {
      localStorage.setItem('scalark_lang', valid);
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
