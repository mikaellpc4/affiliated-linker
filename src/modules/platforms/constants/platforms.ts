export const PLATFORMS = {
  mercadoLivre: {
    name: "Mercado Livre",
    id: "mercadoLivre",
    domains: ["mercadolivre.com.br", "ml.com.br", "mlb.com.br", "mlc.com.br"],
  },
  magazine: {
    name: "Magazine",
    id: "magazine",
    domains: ["magazinevoce.com.br"],
  },
  shopee: {
    name: "Shopee",
    id: "shopee",
    domains: ["shopee.com.br"],
  },
} as const;

export type Platform = keyof typeof PLATFORMS;
export type PlatformData = {
  name: string;
  id: Platform;
  domains: string[];
};
