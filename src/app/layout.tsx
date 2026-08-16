import type { Metadata } from "next";
import { Inter, Archivo, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { profile } from "@/data/profile";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} antialiased font-[family-name:var(--font-space-grotesk)]`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
