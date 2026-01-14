import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} - ${profile.locales[profile.defaultLocale].role}`,
    template: `%s - ${profile.name}`,
  },
  description: profile.locales[profile.defaultLocale].summary.join(" "),
  openGraph: {
    title: `${profile.name} - ${profile.locales[profile.defaultLocale].role}`,
    description: profile.locales[profile.defaultLocale].summary.join(" "),
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio preview`,
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={profile.defaultLocale}>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
