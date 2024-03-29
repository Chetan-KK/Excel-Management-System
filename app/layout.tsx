import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { colorThemesArray } from "@/utils/themeConfig";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIETP portal",
  description: "Generated by Chetan-KK",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
  themeColor: "#fff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light-default"
          themes={[
            "light-default",
            "dark-default",
            "light-rose",
            "dark-rose",
            "light-orange",
            "dark-orange",
            "light-green",
            "dark-green",
          ]}
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
