'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SmoothScroll />
      <Navbar />
      
      <section className="relative min-h-screen bg-black pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-cyan-950/20" />
          <div className="absolute inset-0 pattern-dots opacity-10" />
        </div>

        <div className="relative z-10 section-padding">
          <div className="container-custom">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-white">{t('hero.title1')} </span>
                <span className="gradient-text-blue">{t('hero.title2')}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                {t('hero.description')}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">{t('form.title')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">{t('form.name')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder={t('form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">{t('form.email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder={t('form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">{t('form.company')}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder={t('form.companyPlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">{t('form.message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder={t('form.messagePlaceholder')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        {t('form.messageSent')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('form.sendMessage')}
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">{t('info.title')}</h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {t('info.description')}
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{t('info.email')}</h3>
                      <p className="text-gray-400">support@bromanderglobal.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{t('info.location')}</h3>
                      <p className="text-gray-400">{t('info.locationValue')}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4">{t('hours.title')}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">{t('hours.weekdays')}</span>
                      <span className="text-white">{t('hours.weekdaysTime')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">{t('hours.saturday')}</span>
                      <span className="text-white">{t('hours.saturdayTime')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">{t('hours.sunday')}</span>
                      <span className="text-white">{t('hours.sundayTime')}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">{t('quickLinks.title')}</h3>
                  <div className="space-y-3">
                    <motion.a
                      href="/products/shinery"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {t('quickLinks.shinery')}
                    </motion.a>
                    <motion.a
                      href="/products/bookkeeping"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {t('quickLinks.bookkeeping')}
                    </motion.a>
                    <motion.a
                      href="/about"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {t('quickLinks.about')}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}