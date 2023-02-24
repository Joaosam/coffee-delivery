import { Moon, Sun } from "phosphor-react";

interface IconThemeProps {
  iconTheme: boolean;
}

export function ThemeSwitcher({ iconTheme }: IconThemeProps) {
  return iconTheme ? (
    <Moon size={32} data-testid="moon" />
  ) : (
    <Sun size={32} data-testid="sun" />
  );
}
