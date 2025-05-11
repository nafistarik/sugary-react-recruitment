import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import CustomCursor from "@/components/common/CustomCursor";
import ReduxProvider from "@/redux/ReduxProvider";
import ThemeAwareToaster from "@/components/common/ThemeAwareToaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Sugary Dashboard",
  description: "A polished Next application for recruitment assessment",
  generator: "Nafis Tarik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
          enableColorScheme
        >
          <ReduxProvider>{children}</ReduxProvider>
          <CustomCursor />
          <ThemeAwareToaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
