import type { Metadata } from "next";
import {getTranslations} from 'next-intl/server';
import "../globals.css";
import CustomCursor from "@/components/CustomCursor";
import CookieConsent from "@/components/CookieConsent";

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export async function generateMetadata({params: {locale}}: Props): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'site'});
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
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