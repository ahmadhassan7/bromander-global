'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe, FileText, Users, Clock, AlertCircle, CheckCircle, Mail, MapPin, ExternalLink, Gavel, UserCheck, Database, Settings, Share } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy');
  const [activeSection] = useState('');

  return (
    <>
      <SmoothScroll />
      <Navbar />
      
      {/* Table of Contents - Floating */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-xs"
        >
          <h3 className="text-white font-semibold text-sm mb-3">{t('navigation.title')}</h3>
          <nav className="space-y-2 text-xs">
            {[
              { id: 'overview', title: t('navigation.overview') },
              { id: 'legal-basis', title: t('navigation.legalBasis') },
              { id: 'data-collection', title: t('navigation.dataCollection') },
              { id: 'data-usage', title: t('navigation.dataUsage') },
              { id: 'data-sharing', title: t('navigation.dataSharing') },
              { id: 'your-rights', title: t('navigation.yourRights') },
              { id: 'data-retention', title: t('navigation.dataRetention') },
              { id: 'security', title: t('navigation.security') },
              { id: 'cookies', title: t('navigation.cookies') },
              { id: 'contact', title: t('navigation.contact') }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-gray-400 hover:text-blue-500 transition-colors ${
                  activeSection === item.id ? 'text-blue-500' : ''
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>

      <section className="relative min-h-screen bg-black pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black" />
        </div>

        <div className="relative z-10">
          <div className="container-custom px-4 md:px-6 py-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-white">{t('header.title1')} </span>
                <span className="gradient-text-blue">{t('header.title2')}</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {t('header.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{t('header.lastUpdated')}</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>{t('header.gdprCompliant')}</span>
                </div>
              </div>
            </motion.div>

            {/* Key Information Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-12"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">{t('header.importantTitle')}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('header.importantDescription')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {/* Data Controller Information */}
                <motion.section
                  id="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('overview.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-3">{t('overview.controllerTitle')}</h3>
                      <div className="text-sm space-y-2">
                        <p><strong>{t('overview.company')}</strong> {t('overview.companyName')}</p>
                        <p><strong>{t('overview.address')}</strong> {t('overview.addressValue')}</p>
                        <p><strong>{t('overview.orgNumber')}</strong> {t('overview.orgNumberValue')}</p>
                        <p><strong>{t('overview.vatNumber')}</strong> {t('overview.vatNumberValue')}</p>
                        <p className="text-blue-400 font-medium">{t('overview.fSkatt')}</p>
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <p><strong>{t('overview.contact')}</strong> {t('overview.contactEmail')}</p>
                        </div>
                      </div>
                    </div>
                    <p>
                      {t('overview.description1')}
                    </p>
                    <p>
                      {t('overview.description2')}
                    </p>
                  </div>
                </motion.section>

                {/* Legal Basis */}
                <motion.section
                  id="legal-basis"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Gavel className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('legalBasis.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>{t('legalBasis.description')}</p>
                    <div className="grid gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('legalBasis.legitimateInterest.title')}</h4>
                        <p className="text-sm">{t('legalBasis.legitimateInterest.description')}</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('legalBasis.consent.title')}</h4>
                        <p className="text-sm">{t('legalBasis.consent.description')}</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('legalBasis.contract.title')}</h4>
                        <p className="text-sm">{t('legalBasis.contract.description')}</p>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('legalBasis.legal.title')}</h4>
                        <p className="text-sm">{t('legalBasis.legal.description')}</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Information We Collect */}
                <motion.section
                  id="data-collection"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('dataCollection.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('dataCollection.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <UserCheck className="w-5 h-5 text-blue-500" />
                          {t('dataCollection.identity.title')}
                        </h3>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataCollection.identity.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-blue-500" />
                          {t('dataCollection.technical.title')}
                        </h3>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataCollection.technical.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-500" />
                          {t('dataCollection.communication.title')}
                        </h3>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataCollection.communication.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Settings className="w-5 h-5 text-blue-500" />
                          {t('dataCollection.cookies.title')}
                        </h3>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataCollection.cookies.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {t('dataCollection.specialData.title')}
                      </h4>
                      <p className="text-sm">
                        {t('dataCollection.specialData.description')}
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* How We Use Information */}
                <motion.section
                  id="data-usage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('dataUsage.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('dataUsage.description')}</p>
                    
                    <div className="grid gap-4">
                      <div className="bg-blue-500/5 border-l-4 border-blue-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataUsage.serviceDelivery.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataUsage.serviceDelivery.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-500/5 border-l-4 border-green-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataUsage.analytics.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataUsage.analytics.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-500/5 border-l-4 border-purple-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataUsage.marketing.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataUsage.marketing.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-orange-500/5 border-l-4 border-orange-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataUsage.legal.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataUsage.legal.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Data Sharing */}
                <motion.section
                  id="data-sharing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Share className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('dataSharing.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('dataSharing.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataSharing.serviceProviders.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataSharing.serviceProviders.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataSharing.legalRequirements.title')}</h4>
                        <p className="text-sm">{t('dataSharing.legalRequirements.description')}</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataSharing.businessTransfers.title')}</h4>
                        <p className="text-sm">{t('dataSharing.businessTransfers.description')}</p>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('dataSharing.weDoNot.title')}</h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        {t.raw('dataSharing.weDoNot.items').map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Your Rights */}
                <motion.section
                  id="your-rights"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('yourRights.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('yourRights.description')}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {t('yourRights.access.title')}
                        </h4>
                        <p className="text-sm">{t('yourRights.access.description')}</p>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          {t('yourRights.rectification.title')}
                        </h4>
                        <p className="text-sm">{t('yourRights.rectification.description')}</p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          {t('yourRights.erasure.title')}
                        </h4>
                        <p className="text-sm">{t('yourRights.erasure.description')}</p>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          {t('yourRights.restrict.title')}
                        </h4>
                        <p className="text-sm">{t('yourRights.restrict.description')}</p>
                      </div>

                      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          {t('yourRights.portability.title')}
                        </h4>
                        <p className="text-sm">{t('yourRights.portability.description')}</p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          {t('yourRights.object.title')}
                        </h4>
                        <p className="text-sm">{t('yourRights.object.description')}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-4">{t('yourRights.howToExercise.title')}</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-blue-500" />
                          <span>{t('yourRights.howToExercise.email')}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <p>{t('yourRights.howToExercise.responseTime')}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mt-4 text-gray-400">
                        {t('yourRights.howToExercise.verification')}
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Data Retention */}
                <motion.section
                  id="data-retention"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('dataRetention.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('dataRetention.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataRetention.accountData.title')}</h4>
                        <p className="text-sm">{t('dataRetention.accountData.active')}</p>
                        <p className="text-sm">{t('dataRetention.accountData.inactive')}</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataRetention.communication.title')}</h4>
                        <p className="text-sm">{t('dataRetention.communication.support')}</p>
                        <p className="text-sm">{t('dataRetention.communication.marketing')}</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataRetention.analytics.title')}</h4>
                        <p className="text-sm">{t('dataRetention.analytics.website')}</p>
                        <p className="text-sm">{t('dataRetention.analytics.performance')}</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataRetention.legalFinancial.title')}</h4>
                        <p className="text-sm">{t('dataRetention.legalFinancial.financial')}</p>
                        <p className="text-sm">{t('dataRetention.legalFinancial.legal')}</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Security */}
                <motion.section
                  id="security"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('security.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('security.description')}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('security.technical.title')}</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            {t.raw('security.technical.items').map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('security.access.title')}</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            {t.raw('security.access.items').map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('security.organizational.title')}</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            {t.raw('security.organizational.items').map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('security.compliance.title')}</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            {t.raw('security.compliance.items').map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {t('security.breach.title')}
                      </h4>
                      <p className="text-sm">
                        {t('security.breach.description')}
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Cookies */}
                <motion.section
                  id="cookies"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('cookies.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('cookies.description')}</p>
                    
                    <div className="grid gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {t('cookies.essential.title')}
                        </h4>
                        <p className="text-sm mb-2">{t('cookies.essential.description')}</p>
                        <ul className="text-sm list-disc list-inside space-y-1">
                          {t.raw('cookies.essential.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {t('cookies.analytics.title')}
                        </h4>
                        <p className="text-sm mb-2">{t('cookies.analytics.description')}</p>
                        <ul className="text-sm list-disc list-inside space-y-1">
                          {t.raw('cookies.analytics.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Share className="w-4 h-4" />
                          {t('cookies.marketing.title')}
                        </h4>
                        <p className="text-sm mb-2">{t('cookies.marketing.description')}</p>
                        <ul className="text-sm list-disc list-inside space-y-1">
                          {t.raw('cookies.marketing.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('cookies.management.title')}</h4>
                      <p className="text-sm mb-3">{t('cookies.management.description')}</p>
                      <ul className="text-sm list-disc list-inside space-y-1">
                        {t.raw('cookies.management.items').map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Portfolio Companies */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-blue-500" />
                    {t('portfolioCompanies.title')}
                  </h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      {t('portfolioCompanies.description')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                        <h3 className="font-semibold text-white mb-2 text-lg">{t('portfolioCompanies.aiTracker.title')}</h3>
                        <p className="text-sm text-gray-400 mb-4">{t('portfolioCompanies.aiTracker.description')}</p>
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                          {t('portfolioCompanies.aiTracker.link')}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                        <h3 className="font-semibold text-white mb-2 text-lg">{t('portfolioCompanies.smartBookkeeping.title')}</h3>
                        <p className="text-sm text-gray-400 mb-4">{t('portfolioCompanies.smartBookkeeping.description')}</p>
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                          {t('portfolioCompanies.smartBookkeeping.link')}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Contact & Complaints */}
                <motion.section
                  id="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-blue-500" />
                    {t('contact.title')}
                  </h2>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>
                      {t('contact.description')}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.general.title')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                              <div>
                                <p className="font-medium">{t('contact.general.company')}</p>
                                <p>{t('contact.general.address')}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>{t('contact.general.email')}</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-white/10 space-y-1">
                              <p className="text-gray-400">{t('contact.general.orgNumber')}</p>
                              <p className="text-gray-400">{t('contact.general.vatNumber')}</p>
                              <p className="text-blue-400 font-medium">{t('contact.general.fSkatt')}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Gavel className="w-4 h-4" />
                            {t('contact.complaint.title')}
                          </h4>
                          <div className="text-sm space-y-2">
                            <p>{t('contact.complaint.description')}</p>
                            <div className="space-y-1">
                              <p><strong>{t('contact.complaint.authority')}</strong></p>
                              <p>Website: {t('contact.complaint.website')}</p>
                              <p>Email: {t('contact.complaint.email')}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.policyUpdates.title')}</h4>
                          <p className="text-sm">
                            {t('contact.policyUpdates.description')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('contact.quickResponse.title')}</h4>
                      <p className="text-sm">
                        {t('contact.quickResponse.description')}
                      </p>
                    </div>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}