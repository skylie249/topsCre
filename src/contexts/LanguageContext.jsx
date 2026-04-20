import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language || "en");

  const setLanguage = lang => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== language) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
