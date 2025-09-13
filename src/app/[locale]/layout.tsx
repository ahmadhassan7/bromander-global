import type { Metadata, Viewport } from "next";
import {getTranslations} from 'next-intl/server';
import "../globals.css";
import CustomCursor from "@/components/CustomCursor";
import CookieConsent from "@/components/CookieConsent";

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'site'});
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: "Bromander Global",
      description: t('description'),
      type: "website",
      locale: locale === 'sv' ? 'sv_SE' : 'en_US',
      siteName: "Bromander Global",
    },
    twitter: {
      card: "summary_large_image",
      title: "Bromander Global",
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomCursor />
      {children}
      <CookieConsent />
    </>
  );
}