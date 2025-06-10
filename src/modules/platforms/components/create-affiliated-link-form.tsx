import { cn } from "@/shared/utils/cn";
import { Button, TextField } from "@radix-ui/themes";

type CreateAffiliatedLinkFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export function CreateAffiliatedLinkForm({
  className,
  ...rest
}: CreateAffiliatedLinkFormProps) {
  return (
    <form className={cn(className, "flex flex-col gap-4")} {...rest}>
      <TextField.Root name="productLink" placeholder="Cole o link do produto" />
      <TextField.Root name="affiliatedId" placeholder="Cole o ID do afiliado" />
      <Button type="submit">Gerar link de afiliado</Button>
    </form>
  );
}
