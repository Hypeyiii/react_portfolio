import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function useLanguages() {
  const { isSpanish, isEnglish, setIsSpanish, setIsEnglish } =
    useContext(LanguageContext);

  const onSpanish = () => {
    setIsSpanish(true);
    document.querySelector("#fadeLanguage").classList.add("fadeLanguage");
    if (isEnglish) {
      setIsEnglish(false);
    }
  };

  const onEnglish = () => {
    setIsEnglish(true);
    document.querySelector("#fadeLanguage").classList.add("fadeLanguage");
    if (isSpanish) {
      setIsSpanish(false);
    }
  };

  return { onEnglish, onSpanish, isSpanish, isEnglish };
}
