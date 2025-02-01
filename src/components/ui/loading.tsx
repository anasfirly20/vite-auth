import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LoadingProps {
  fullScreen?: boolean;
}

export const Loading = ({ fullScreen = false }: LoadingProps) => {
  const containerClasses = fullScreen
    ? "h-screen flex items-center justify-center"
    : "flex items-center justify-center p-4";

  const { t } = useTranslation();

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground animate-pulse">
          {t("common.loading")}
        </p>
      </div>
    </div>
  );
};
