import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const icons = {
    light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
    dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      title={`Current theme: ${theme}`}
    >
      {icons[theme as keyof typeof icons]}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
