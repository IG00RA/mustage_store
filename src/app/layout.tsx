import { getLocale } from "next-intl/server";
import { Root } from "@/components/Root/Root";
import { I18nProvider } from "@/core/i18n/provider";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

import "normalize.css/normalize.css";
import "@telegram-apps/telegram-ui/dist/styles.css";
import "../styles/globals.css";
import "../styles/variables.css";
import { PropsWithChildren } from "react";
import MainLayout from "@/Pages/main/MainLayout";

const localeMetadata: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  uk: {
    title: "Mustage Store",
    description: "Mustage Store",
    keywords: "Mustage Store",
  },
  ru: {
    title: "Mustage Store",
    description: "Mustage Store",
    keywords: "Mustage Store",
  },
};

export const generateMetadata = async () => {
  const locale = await getLocale();
  const metadataValues = localeMetadata[locale] || localeMetadata.ru;
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    metadataBase: new URL(url),
    title: metadataValues.title,
    description: metadataValues.description,
    keywords: metadataValues.keywords,
    robots: {
      index: true,
      follow: true,
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: metadataValues.title,
    //   description: metadataValues.description,
    //   images: [
    //     {
    //       url: "/assets/opengraph-image.png",
    //       width: 1200,
    //       height: 630,
    //       alt: metadataValues.title,
    //     },
    //   ],
    // },
    // openGraph: {
    //   title: metadataValues.title,
    //   description: metadataValues.description,
    //   type: "website",
    //   images: [
    //     {
    //       url: "/assets/opengraph-image.png",
    //       width: 1200,
    //       height: 630,
    //       alt: metadataValues.title,
    //     },
    //   ],
    // },
    // icons: {
    //   icon: [
    //     { url: "/assets/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    //     { url: "/assets/favicon.svg", type: "image/svg+xml" },
    //     { url: "/assets/favicon.ico", type: "image/x-icon" },
    //     { url: "/assets/apple-touch-icon.png", sizes: "180x180" },
    //   ],
    // },
    // manifest: `/assets/site.webmanifest`,
  };
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font_inter",
  adjustFontFallback: false,
});

const sfPro = localFont({
  src: [
    {
      path: "../fonts/SF-Pro-Display-Ultralight.otf",
      weight: "200",
      style: "extra-light",
    },
    {
      path: "../fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/SF-Pro-Display-Heavy.otf",
      weight: "800",
      style: "extra-bold",
    },
  ],
  variable: "--font_sfPro",
});

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body className={`${inter.variable} ${sfPro.variable}`}>
        <I18nProvider>
          <Root>
            <MainLayout>{children}</MainLayout>
          </Root>
        </I18nProvider>
      </body>
    </html>
  );
}
