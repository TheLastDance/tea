"use client";

import { ThemeProvider } from "next-themes";
import { RootLayoutProps } from "./interface";

const Providers: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
};
export default Providers;
