"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Lang } from "../i18n/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isChanging: boolean;
  changeLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "cs",
  setLang: () => {},
  isChanging: false,
  changeLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("cs");
  const [isChanging, setIsChanging] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const changeLang = (newLang: Lang) => {
    if (newLang === lang || isChanging) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    setIsChanging(true);

    timeoutRef.current = setTimeout(() => {
      // Keep opacity at 0 while swapping text, then reveal it on the next frame.
      setLang(newLang);
      rafRef.current = requestAnimationFrame(() => {
        setIsChanging(false);
      });
    }, 300);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isChanging, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
