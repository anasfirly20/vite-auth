import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {i18n.language === "en" ? "🇬🇧" : "🇷🇺"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage("ru")}>
          🇷🇺 Русский
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
