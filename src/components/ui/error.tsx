import { AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "./button";

import { cn } from "@/lib/utils";

interface ErrorProps {
  fullScreen?: boolean;
  message?: string;
  onRetry?: () => void;
}

export const Error = ({ fullScreen, message, onRetry }: ErrorProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center space-y-4 p-8",
        fullScreen ? "min-h-screen" : "h-full"
      )}
    >
      <div className="rounded-full bg-destructive/10 p-3">
        <AlertCircle className="h-6 w-6 text-destructive" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold tracking-tight">
          {t("common.error.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {message || t("common.error.description")}
        </p>
      </div>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" size="sm">
          {t("common.error.retry")}
        </Button>
      )}
    </div>
  );
};
