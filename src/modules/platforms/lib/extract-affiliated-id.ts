import { Platform } from "../constants/platforms";

export const extractors: Record<Platform, (url: string) => string | null> = {
  shopee: (url) => {
    return extractAffiliatedIdForDefault(url);
  },
  mercadoLivre: (url) => {
    return extractAffiliatedIdForDefault(url);
  },
  magazine: (url) => {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const affiliatedId = pathname.split("/")[1];
    return affiliatedId;
  },
};

function extractAffiliatedIdForDefault(url: string) {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  const affiliatedId = searchParams.get("utm_source");
  return affiliatedId;
}
