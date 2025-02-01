import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useAuth } from "@/providers/auth-provider";

export const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5 sm:px-20 lg:px-72">
      <div className="container flex h-14 items-center justify-between">
        <Button
          variant="link"
          className="text-lg font-semibold"
          onClick={() => navigate(token ? "/dashboard" : "/")}
        >
          Auth App
        </Button>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};
