'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';
import LanguageIcon from '@/components/LanguageIcon';
import { ArrowUpRight, Mail, MapPin, Globe } from 'lucide-react';

declare global {
  interface Window {
    openCookieSettings?: () => void;
  }
}

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const { switchLanguage } = useLanguageSwitcher();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">
      {/* Large Animated Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="text-[20vw] font-black text-white/[0.03] leading-none tracking-tighter select-none whitespace-nowrap"
        >
          BROMANDER GLOBAL
        </motion.div>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: 10
          }}
          className="absolute text-[20vw] font-black text-white/[0.03] leading-none tracking-tighter select-none whitespace-nowrap"
        >
          BROMANDER GLOBAL
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Content */}
      <div className="relative z-10 container-custom px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white">BROMANDER</h2>
                  <p className="text-lg text-gray-400 tracking-wider">GLOBAL</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                {t('description')}
              </p>
              
              {/* CTA */}
              <Link 
                href={`/${locale}/contact`} 
                className="inline-flex items-center gap-3 text-white hover:text-blue-500 transition-colors group"
              >
                <span className="text-xl font-bold">{t('contact')}</span>
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-white font-bold text-sm tracking-wider mb-6">{t('products')}</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href={`/${locale}/products/shinery`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      {t('links.aiTracker')}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/products/bookkeeping`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      {t('links.bookkeeping')}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-white font-bold text-sm tracking-wider mb-6">{t('company')}</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href={`/${locale}`} className="text-gray-400 hover:text-white transition-colors">
                      {t('links.home')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/about`} className="text-gray-400 hover:text-white transition-colors">
                      {t('links.about')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`} className="text-gray-400 hover:text-white transition-colors">
                      {t('links.contact')}
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-white font-bold text-sm tracking-wider mb-6">{t('contactInfo')}</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span>{t('contactDetails.email')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span>{t('contactDetails.location')}</span>
                  </li>
                </ul>
                {/* Company Registration Info */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>{t('contactDetails.orgNumber')}</li>
                    <li>{t('contactDetails.vatNumber')}</li>
                    <li className="text-blue-400">{t('contactDetails.fSkatt')}</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm">
                {t('legal.copyright')}
              </p>
            </div>
            
            {/* Legal Links and Language Switcher */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Legal Links */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
                <Link href={`/${locale}/privacy`} className="text-gray-500 hover:text-white transition-colors">
                  {t('legal.privacy')}
                </Link>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <Link href={`/${locale}/terms`} className="text-gray-500 hover:text-white transition-colors">
                  {t('legal.terms')}
                </Link>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <Link href={`/${locale}/cookies`} className="text-gray-500 hover:text-white transition-colors">
                  {t('legal.cookies')}
                </Link>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.openCookieSettings) {
                      window.openCookieSettings();
                    }
                  }}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {t('legal.cookieSettings')}
                </button>
              </div>
              
              {/* Divider */}
              <span className="hidden sm:inline text-gray-600">|</span>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <button 
                  onClick={() => switchLanguage('en')}
                  className={`flex items-center gap-1 text-sm transition-colors px-2 py-1 rounded ${locale === 'en' ? 'text-blue-400 bg-blue-500/10' : 'text-gray-500 hover:text-white hover:bg-white/10'}`}
                >
                  <LanguageIcon language="en" className="w-4 h-3" />
                  <span>EN</span>
                </button>
                <span className="text-gray-600">|</span>
                <button 
                  onClick={() => switchLanguage('sv')}
                  className={`flex items-center gap-1 text-sm transition-colors px-2 py-1 rounded ${locale === 'sv' ? 'text-blue-400 bg-blue-500/10' : 'text-gray-500 hover:text-white hover:bg-white/10'}`}
                >
                  <LanguageIcon language="sv" className="w-4 h-3" />
                  <span>SV</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600" />
    </footer>
  );
}