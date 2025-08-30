import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export function useLanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    
    // Create the new path with the new locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

    // Use window.location for a hard navigation that forces re-initialization
    if (typeof window !== 'undefined') {
      window.location.href = newPath;
    }
  };

  return { switchLanguage, currentLocale };
}