"use client";

import { getLink } from "@/modules/platforms/actions/get-link";
import { CreateAffiliatedLinkForm } from "@/modules/platforms/components/create-affiliated-link-form";
import { isOk } from "@/shared/utils/result";
import { TextArea } from "@radix-ui/themes";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction] = useActionState(getLink, null);

  return (
    <div className="p-4 h-screen w-full flex flex-col items-center justify-center gap-4">
      <CreateAffiliatedLinkForm className="w-1/3" action={formAction} />
      <TextArea
        className="w-1/3 h-10"
        contentEditable="false"
        readOnly
        value={state && isOk(state) ? state.value : ""}
      />
    </div>
  );
}
