import { Theme, ThemePanel } from "@radix-ui/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme
      appearance="dark"
      radius="medium"
      scaling="100%"
      accentColor="violet"
    >
      {children}
      <ThemePanel />
    </Theme>
  );
}
