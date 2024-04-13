import { createContext } from "react";
import { useState } from "react";
export const LanguageContext = createContext({
  isSpanish: false,
  setIsSpanish: () => {},
  isEnglish: true,
  setIsEnglish: () => {},
});

export function LanguageProvider({ children }) {
  const [isSpanish, setIsSpanish] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <LanguageContext.Provider
      value={{
        isSpanish,
        setIsSpanish,
        isEnglish,
        setIsEnglish,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}