"use server";

import { formatters } from "@/modules/platforms/lib/create-affiliated-link";
import { getPlatformFromUrl } from "@/modules/platforms/lib/get-platform-from-url";
import { fail, ok, Result } from "@/shared/utils/result";

type Return = Result<string> | null;

export async function getLink(
  _: Return,
  formData: FormData | null
): Promise<Return> {
  const productLink = formData?.get("productLink");
  const affiliatedId = formData?.get("affiliatedId");

  if (!productLink || !affiliatedId) {
    return fail("Link e ID são obrigatórios");
  }

  const platform = getPlatformFromUrl(productLink.toString());

  if (!platform) {
    return fail("Plataforma não encontrada");
  }

  const formatter = formatters[platform.id];

  const affiliatedLink = formatter(
    productLink.toString(),
    affiliatedId.toString()
  );

  return ok(affiliatedLink);
}
