import { Platform } from "../constants/platforms";

export const formatters: Record<
  Platform,
  (originalUrl: string, affiliatedId: string) => string
> = {
  magazine: (originalUrl, affiliatedId) => {
    const url = new URL(originalUrl);
    const pathname = url.pathname;
    const productStuff = pathname.split("/");
    const rest = productStuff.slice(1).join("/");
    return `https://magazinevoce.com.br/${affiliatedId}/${rest}`;
  },
  shopee: (originalUrl, affiliatedId) => {
    const url = new URL(originalUrl);
    const queryParams = url.searchParams;
    queryParams.set("utm_campaign", `id_${affiliatedId}`);
    queryParams.set("utm_content", "----");
    queryParams.set("utm_medium", "affiliates");
    queryParams.set("utm_source", affiliatedId);
    return url.toString();
  },
  mercadoLivre: (originalUrl, affiliatedId) => {
    const url = new URL(originalUrl);
    const queryParams = url.searchParams;
    queryParams.set("partner_id", affiliatedId);
    queryParams.set("utm_source", affiliatedId);
    queryParams.set("utm_medium", "share");
    return url.toString();
  },
};
