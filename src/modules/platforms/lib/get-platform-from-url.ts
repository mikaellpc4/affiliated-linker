import { PLATFORMS } from "../constants/platforms";

export function getPlatformFromUrl(url: string) {
  return Object.values(PLATFORMS).find((platform) => {
    return platform.domains.some((domain) => url.includes(domain));
  });
}
