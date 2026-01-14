"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { profile, type LocaleKey, type LocalizedProfile } from "@/data/profile";

type LanguageContextValue = {
  locale: LocaleKey;
  setLocale: (locale: LocaleKey) => void;
  content: LocalizedProfile;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<LocaleKey>(profile.defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-locale") as LocaleKey;
    if (stored && profile.locales[stored]) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const content = useMemo(
    () => profile.locales[locale] ?? profile.locales[profile.defaultLocale],
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, content]
  );

  return (
    <LanguageContext.Provider value={value}>
      <CommandPalette
        items={content.commandPalette}
        labels={content.ui.commandPalette}
      />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
