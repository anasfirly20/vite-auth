import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { AuthProvider } from "./auth-provider";
import { ThemeProvider } from "./theme-provider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
