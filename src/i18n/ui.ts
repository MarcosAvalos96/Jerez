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
  es: {
    "nav.index": "Inicio",
    "nav.mapas": "Visor de mapas",
    "nav.catalogo": "Catálogo y descarga",
    "nav.directorio": "Directorio de servicios",
    "nav.docs": "Documentación",
  },
  en: {
    "nav.index": "Home",
    "nav.mapas": "Map viewer",
    "nav.catalogo": "Catalog and Download",
    "nav.directorio": "Service Directory",
    "nav.docs": "Documentation",
  },
} as const;

export const routes = {
  en: {
    index: "home",
    mapas: "mapas",
    catalogo: "catalogo",
    directorio: "directorio",
    docs: "docs",
  },
  es: {
    index: "home",
    mapas: "mapas",
    catalogo: "catalogo",
    directorio: "directorio",
    docs: "docs",
  },
};
