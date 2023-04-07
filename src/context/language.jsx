import { createContext, useState } from "react";

export const LanguageContext = createContext({});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("port");

  function toEnglish() {
    setLang("eng");
  }

  function toPortuguese() {
    setLang("port");
  }

  return (
    <LanguageContext.Provider value={{ lang, toEnglish, toPortuguese }}>
      {children}
    </LanguageContext.Provider>
  );
}
