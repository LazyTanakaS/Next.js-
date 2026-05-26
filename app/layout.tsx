import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import LangWrapper from "./components/LangWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petr Komar — Junior Frontend Developer",
  description:
    "Portfolio of Petr Komar, a Junior Frontend Developer focused on React and TypeScript, featuring production-style projects, API integrations, and CI/CD workflows.",
  metadataBase: new URL("https://lazytanakas.github.io/portfolio/"),
  openGraph: {
    title: "Petr Komar — Junior Frontend Developer",
    description:
      "Explore Petr Komar's frontend portfolio: React + TypeScript projects, API-driven apps, and practical product-oriented development.",
    url: "/",
    siteName: "Petr Komar Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petr Komar — Junior Frontend Developer",
    description:
      "React and TypeScript portfolio with real projects, API integrations, and CI/CD delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <LanguageProvider>
            <LangWrapper>{children}</LangWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
