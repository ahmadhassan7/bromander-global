'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Trash2, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function DataDeletionPage() {
  const t = useTranslations('dataDeletionPage');

  return (
    <>
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16 md:py-0">
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm border border-purple-200 rounded-full mb-8"
            >
              <Shield className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">{t('badge')}</span>
            </motion.div>

            <h1 className="font-bold mb-6">
              <span className="block text-gray-800 mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{t('hero.title')}</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {t('hero.subtitle')}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100"
          >
            {/* What Gets Deleted Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Trash2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{t('whatGetsDeleted.title')}</h2>
              </div>
              <div className="space-y-3 ml-15">
                {['item1', 'item2', 'item3', 'item4', 'item5'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{t(`whatGetsDeleted.${item}`)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Request Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{t('howToRequest.title')}</h2>
              </div>
              <div className="space-y-6 ml-15">
                {['step1', 'step2', 'step3'].map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{t(`howToRequest.${step}.title`)}</h3>
                      <p className="text-gray-600">{t(`howToRequest.${step}.description`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                {t('importantNotes.title')}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {['note1', 'note2', 'note3'].map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{t(`importantNotes.${note}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.title')}</h3>
              <p className="text-gray-600 mb-6">{t('contact.description')}</p>
              <a
                href="mailto:support@bromanderglobal.com?subject=Data Deletion Request - Shinery"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
              >
                {t('contact.button')}
              </a>
              <p className="text-sm text-gray-500 mt-4">
                {t('contact.email')}: <a href="mailto:support@bromanderglobal.com" className="text-purple-600 hover:underline">support@bromanderglobal.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
