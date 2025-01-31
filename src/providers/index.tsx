import React from "react";

import { ThemeProvider } from "./theme-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};
