"use client";

import { getProductMetadata } from "@/shared/actions/getProductMetadata";
import { Input } from "@/shared/components/input";
import { Button, Flex, Radio, Text, TextArea } from "@radix-ui/themes";
import { FormEvent, useRef } from "react";

export default function Home() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(data: FormEvent<HTMLFormElement>) {
    data.preventDefault();

    const formData = new FormData(data.currentTarget);
    const productLink = formData.get("product_link");
    const platform = formData.get("platform");
    const affiliatedId = formData.get("affiliated_id");

    if (!productLink || !platform || !affiliatedId) {
      alert("Preencha corretamente");
      return;
    }

    const metadata = await getProductMetadata(productLink.toString());

    // const affiliatedLink = await getLink(
    //   productLink.toString(),
    //   affiliatedId.toString(),
    //   platform.toString() as Plataforms,
    // );

    if (textAreaRef.current) {
      // textAreaRef.current.value = affiliatedLink;
      textAreaRef.current.value = metadata ?? "nada";
    }
  }

  return (
    <div className="p-4 h-screen w-full flex flex-col items-center justify-center gap-4">
      <form
        onSubmit={(data) => handleSubmit(data)}
        className="w-1/3 flex flex-col gap-4"
      >
        <Input name="product_link" placeholder="Cole o link do produto" />
        <Input name="affiliated_id" placeholder="Seu código de afiliado" />
        <Flex align="start" direction="row" justify="center" gap="4">
          <Flex asChild gap="2">
            <Text as="label" size="2">
              <Radio name="platform" value="mercado_livre" />
              Mercado Livre
            </Text>
          </Flex>

          <Flex asChild gap="2">
            <Text as="label" size="2">
              <Radio name="platform" value="magazine" />
              Magazine
            </Text>
          </Flex>

          <Flex asChild gap="2">
            <Text as="label" size="2">
              <Radio name="platform" value="shopee" />
              Shopee
            </Text>
          </Flex>
        </Flex>
        <Button>Gerar link de afiliado</Button>
      </form>
      <TextArea
        className="w-1/3 h-10"
        ref={textAreaRef}
        contentEditable="false"
      />
    </div>
  );
}
