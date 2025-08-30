'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';
import LanguageIcon from '@/components/LanguageIcon';
import { 
  Menu, 
  X, 
  ChevronDown,
  Calculator,
  Brain,
  Building,
  Mail,
  Home,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const useNavigation = () => {
  const t = useTranslations('nav');
  const tProducts = useTranslations('products');
  const locale = useLocale();
  
  return [
    { name: t('home'), href: `/${locale}`, icon: Home },
    {
      name: t('portfolio'),
      icon: Zap,
      dropdown: [
        { 
          name: tProducts('aiTracker.name'), 
          href: `/${locale}/products/ai-tracker`, 
          icon: Brain,
          description: tProducts('aiTracker.shortDescription')
        },
        { 
          name: tProducts('bookkeeping.name'), 
          href: `/${locale}/products/bookkeeping`, 
          icon: Calculator,
          description: tProducts('bookkeeping.shortDescription')
        },
      ],
    },
    { name: t('about'), href: `/${locale}/about`, icon: Building },
    { name: t('contact'), href: `/${locale}/contact`, icon: Mail },
  ];
};

const LanguageSwitcher = () => {
  const { switchLanguage, currentLocale } = useLanguageSwitcher();
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLanguageSwitch = (newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }
    
    setIsOpen(false);
    switchLanguage(newLocale);
  };

  const getCurrentLanguageCode = () => {
    return currentLocale as 'en' | 'sv';
  };

  const getCurrentLanguage = () => {
    return currentLocale === 'sv' ? t('swedish') : t('english');
  };
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors font-medium uppercase tracking-wider text-sm"
      >
        <LanguageIcon language={getCurrentLanguageCode()} className="w-5 h-4" />
        <span>{getCurrentLanguage()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-44 glass-dark p-2 rounded-lg border border-white/10"
          >
            <button
              onClick={() => handleLanguageSwitch('en')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-white/10 transition-colors ${currentLocale === 'en' ? 'text-blue-400 bg-blue-500/10' : 'text-white'}`}
            >
              <LanguageIcon language="en" className="w-5 h-4" />
              <span>{t('english')}</span>
              {currentLocale === 'en' && <div className="w-2 h-2 bg-blue-400 rounded-full ml-auto" />}
            </button>
            <button
              onClick={() => handleLanguageSwitch('sv')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-white/10 transition-colors ${currentLocale === 'sv' ? 'text-blue-400 bg-blue-500/10' : 'text-white'}`}
            >
              <LanguageIcon language="sv" className="w-5 h-4" />
              <span>{t('swedish')}</span>
              {currentLocale === 'sv' && <div className="w-2 h-2 bg-blue-400 rounded-full ml-auto" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const navigation = useNavigation();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'glass-dark py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <span className="text-white font-black text-2xl">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">BROMANDER</h1>
              <p className="text-xs text-gray-400 tracking-widest">GLOBAL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-medium uppercase tracking-wider text-sm">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 glass-dark p-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start space-x-3 px-4 py-3 hover:bg-white/10 transition-colors"
                            >
                              <subItem.icon className="w-5 h-5 text-blue-500 mt-1" />
                              <div>
                                <p className="font-medium text-white">
                                  {subItem.name}
                                </p>
                                <p className="text-sm text-gray-400">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors font-medium uppercase tracking-wider text-sm"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark mt-4 mx-4 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(
                          mobileDropdownOpen === item.name ? null : item.name
                        )}
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 text-blue-500" />
                          <span className="font-medium text-white uppercase tracking-wider">
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown 
                          className={`w-4 h-4 text-gray-400 transition-transform ${
                            mobileDropdownOpen === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 space-y-2 mt-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileDropdownOpen(null);
                                  }}
                                  className="flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition-colors rounded-lg"
                                >
                                  <subItem.icon className="w-5 h-5 text-blue-500" />
                                  <span className="font-medium text-white">
                                    {subItem.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-blue-500" />
                      <span className="font-medium text-white uppercase tracking-wider">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-white/10">
                <div className="px-4 py-3">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}