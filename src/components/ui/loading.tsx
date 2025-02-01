import { Loader2 } from "lucide-react";

interface LoadingProps {
  fullScreen?: boolean;
}

export const Loading = ({ fullScreen = false }: LoadingProps) => {
  const containerClasses = fullScreen
    ? "h-screen flex items-center justify-center"
    : "flex items-center justify-center p-4";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};
