import MxFlag from "@assets/icons/flags/Mx.astro";
import UsFlag from "@assets/icons/flags/Us.astro";

export const languages: Record<
  string,
  { code: string; name: string; flag: typeof MxFlag | typeof UsFlag }
> = {
  es: { code: "es", name: "Español", flag: MxFlag },
  en: { code: "en", name: "English", flag: UsFlag },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.index": "Home",
  },
  es: {
    "nav.index": "Inicio",
  },
} as const;

export const routes = {
  en: {
    index: "home",
  },
  es: {
    index: "home",
  },
};
