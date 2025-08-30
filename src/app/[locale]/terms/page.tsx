'use client';

import { motion } from 'framer-motion';
import { Scale, Shield, AlertTriangle, Globe, Clock, CheckCircle, Mail, Phone, MapPin, ExternalLink, Gavel, UserCheck, Ban, BookOpen, Building, AlertCircle, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function TermsOfServicePage() {
  const [activeSection] = useState('');
  const t = useTranslations('termsOfService');

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
              { id: 'definitions', title: t('navigation.definitions') },
              { id: 'acceptance', title: t('navigation.acceptance') },
              { id: 'services', title: t('navigation.services') },
              { id: 'user-obligations', title: t('navigation.userObligations') },
              { id: 'prohibited-use', title: t('navigation.prohibitedUse') },
              { id: 'intellectual-property', title: t('navigation.intellectualProperty') },
              { id: 'consumer-rights', title: t('navigation.consumerRights') },
              { id: 'liability', title: t('navigation.liability') },
              { id: 'termination', title: t('navigation.termination') },
              { id: 'governing-law', title: t('navigation.governingLaw') },
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
                  <Scale className="w-8 h-8 text-blue-500" />
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
                  <span>{t('header.euCompliant')}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <Gavel className="w-4 h-4" />
                  <span>{t('header.swedishLaw')}</span>
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
                {/* Company Information & Overview */}
                <motion.section
                  id="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Building className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('overview.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-2">{t('overview.serviceProvider')}</h3>
                      <div className="text-sm space-y-1">
                        <p><strong>{t('overview.company')}</strong> {t('overview.companyName')}</p>
                        <p><strong>{t('overview.registrationNumber')}</strong> {t('overview.registrationValue')}</p>
                        <p><strong>{t('overview.address')}</strong> {t('overview.addressValue')}</p>
                        <p><strong>{t('overview.email')}</strong> {t('overview.emailValue')}</p>
                        <p><strong>{t('overview.phone')}</strong> {t('overview.phoneValue')}</p>
                        <p><strong>{t('overview.vatNumber')}</strong> {t('overview.vatValue')}</p>
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

                {/* Definitions */}
                <motion.section
                  id="definitions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('definitions.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div className="grid gap-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('definitions.company.term')}</h4>
                        <p className="text-sm">{t('definitions.company.definition')}</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('definitions.consumer.term')}</h4>
                        <p className="text-sm">{t('definitions.consumer.definition')}</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('definitions.services.term')}</h4>
                        <p className="text-sm">{t('definitions.services.definition')}</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('definitions.distanceContract.term')}</h4>
                        <p className="text-sm">{t('definitions.distanceContract.definition')}</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Acceptance of Terms */}
                <motion.section
                  id="acceptance"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('acceptance.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('acceptance.legalAgreement.title')}</h4>
                      <p className="text-sm">{t('acceptance.legalAgreement.description')}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">{t('acceptance.ageRequirements.title')}</h3>
                      <ul className="text-sm space-y-2 list-disc list-inside">
                        {t.raw('acceptance.ageRequirements.items').map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">{t('acceptance.consumerRights.title')}</h3>
                      <p className="text-sm">{t('acceptance.consumerRights.description')}</p>
                    </div>
                  </div>
                </motion.section>

                {/* Our Services */}
                <motion.section
                  id="services"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('services.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('services.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('services.corporate.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('services.corporate.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('services.communication.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('services.communication.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('services.gateway.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('services.gateway.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('services.portfolioCompanies.title')}</h4>
                      <p className="text-sm mb-3">{t('services.portfolioCompanies.description')}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span><strong>AI Reliance Tracker:</strong> {t('services.portfolioCompanies.aiTracker')}</span>
                          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                            {t('services.portfolioCompanies.termsLink')} <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span><strong>Smart Bookkeeping:</strong> {t('services.portfolioCompanies.smartBookkeeping')}</span>
                          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                            {t('services.portfolioCompanies.termsLink')} <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* User Obligations */}
                <motion.section
                  id="user-obligations"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('userObligations.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('userObligations.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('userObligations.permitted.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('userObligations.permitted.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('userObligations.accuracy.title')}</h4>
                        <p className="text-sm">{t('userObligations.accuracy.description')}</p>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('userObligations.security.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('userObligations.security.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Prohibited Use */}
                <motion.section
                  id="prohibited-use"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Ban className="w-6 h-6 text-red-500" />
                    <h2 className="text-2xl font-bold text-white">{t('prohibitedUse.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('prohibitedUse.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          {t('prohibitedUse.illegal.title')}
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('prohibitedUse.illegal.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('prohibitedUse.technical.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('prohibitedUse.technical.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('prohibitedUse.commercial.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('prohibitedUse.commercial.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('prohibitedUse.enforcement.title')}</h4>
                      <p className="text-sm">{t('prohibitedUse.enforcement.description')}</p>
                    </div>
                  </div>
                </motion.section>

                {/* Intellectual Property */}
                <motion.section
                  id="intellectual-property"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('intellectualProperty.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('intellectualProperty.ownership.title')}</h4>
                        <p className="text-sm mb-2">{t('intellectualProperty.ownership.description')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('intellectualProperty.ownership.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('intellectualProperty.license.title')}</h4>
                        <p className="text-sm mb-2">{t('intellectualProperty.license.description')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('intellectualProperty.license.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('intellectualProperty.restrictions.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('intellectualProperty.restrictions.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('intellectualProperty.userContent.title')}</h4>
                      <p className="text-sm">{t('intellectualProperty.userContent.description')}</p>
                    </div>
                  </div>
                </motion.section>

                {/* EU Consumer Rights */}
                <motion.section
                  id="consumer-rights"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="w-6 h-6 text-green-500" />
                    <h2 className="text-2xl font-bold text-white">{t('consumerRights.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('consumerRights.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {t('consumerRights.withdrawal.title')}
                        </h4>
                        <p className="text-sm mb-2">{t('consumerRights.withdrawal.description')}</p>
                        <div className="text-sm space-y-1">
                          <p><strong>How to withdraw:</strong> {t('consumerRights.withdrawal.howTo')}</p>
                          <p><strong>Deadline:</strong> {t('consumerRights.withdrawal.deadline')}</p>
                          <p><strong>Effects:</strong> {t('consumerRights.withdrawal.effects')}</p>
                        </div>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('consumerRights.preContractual.title')}</h4>
                        <p className="text-sm mb-2">{t('consumerRights.preContractual.description')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('consumerRights.preContractual.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('consumerRights.unfairTerms.title')}</h4>
                        <p className="text-sm">{t('consumerRights.unfairTerms.description')}</p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('consumerRights.disputes.title')}</h4>
                        <p className="text-sm mb-2">{t('consumerRights.disputes.description')}</p>
                        <ul className="text-sm space-y-1">
                          <li><strong>Swedish Consumer Agency:</strong> {t('consumerRights.disputes.swedishConsumerAgency')}</li>
                          <li><strong>EU Online Dispute Resolution:</strong> {t('consumerRights.disputes.euODR')}</li>
                          <li><strong>National Board for Consumer Disputes:</strong> {t('consumerRights.disputes.arn')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Liability & Warranties */}
                <motion.section
                  id="liability"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    <h2 className="text-2xl font-bold text-white">{t('liability.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Consumer Rights Override</h4>
                      <p className="text-sm">Nothing in these Terms limits your statutory consumer rights under Swedish or EU law. In case of conflict, consumer protection laws take precedence.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('liability.serviceWarranties.title')}</h4>
                        <p className="text-sm mb-2">{t('liability.serviceWarranties.description')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('liability.serviceWarranties.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('liability.businessLimitations.title')}</h4>
                        <p className="text-sm mb-2">{t('liability.businessLimitations.description')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('liability.businessLimitations.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('liability.unlimitedLiability.title')}</h4>
                        <p className="text-sm">{t('liability.unlimitedLiability.description')}</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('liability.thirdPartyContent.title')}</h4>
                        <p className="text-sm">{t('liability.thirdPartyContent.description')}</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Termination */}
                <motion.section
                  id="termination"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Ban className="w-6 h-6 text-red-500" />
                    <h2 className="text-2xl font-bold text-white">{t('termination.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('termination.terminationByUs.title')}</h4>
                        <p className="text-sm mb-2">{t('termination.terminationByUs.description')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('termination.terminationByUs.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        <p className="text-sm mt-2">{t('termination.terminationByUs.consumerNotice')}</p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('termination.terminationByYou.title')}</h4>
                        <p className="text-sm mb-2">{t('termination.terminationByYou.description')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('termination.terminationByYou.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('termination.effects.title')}</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('termination.effects.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Term Changes & Updates */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('changes.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('changes.modificationRights.title')}</h4>
                        <p className="text-sm">{t('changes.modificationRights.description')}</p>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('changes.consumerProtection.title')}</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>{t('changes.consumerProtection.minorChanges.label')}:</strong> {t('changes.consumerProtection.minorChanges.description')}</p>
                          <p><strong>{t('changes.consumerProtection.substantialChanges.label')}:</strong> {t('changes.consumerProtection.substantialChanges.description')}</p>
                          <p><strong>{t('changes.consumerProtection.unfavorableChanges.label')}:</strong> {t('changes.consumerProtection.unfavorableChanges.description')}</p>
                          <p><strong>{t('changes.consumerProtection.continuedUse.label')}:</strong> {t('changes.consumerProtection.continuedUse.description')}</p>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('changes.businessUsers.title')}</h4>
                        <p className="text-sm">{t('changes.businessUsers.description')}</p>
                      </div>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('changes.versionControl.title')}</h4>
                      <p className="text-sm">{t('changes.versionControl.description')}</p>
                    </div>
                  </div>
                </motion.section>

                {/* Governing Law & Disputes */}
                <motion.section
                  id="governing-law"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Gavel className="w-6 h-6 text-purple-500" />
                    <h2 className="text-2xl font-bold text-white">{t('governingLaw.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('governingLaw.applicableLaw.title')}</h4>
                        <p className="text-sm mb-2">{t('governingLaw.applicableLaw.description')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('governingLaw.applicableLaw.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('governingLaw.consumerDisputes.title')}</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>{t('governingLaw.consumerDisputes.firstStep.label')}:</strong> {t('governingLaw.consumerDisputes.firstStep.value')}</p>
                          <p><strong>{t('governingLaw.consumerDisputes.swedish.label')}:</strong> {t('governingLaw.consumerDisputes.swedish.value')}</p>
                          <p><strong>{t('governingLaw.consumerDisputes.eu.label')}:</strong> {t('governingLaw.consumerDisputes.eu.value')}</p>
                          <p><strong>{t('governingLaw.consumerDisputes.general.label')}:</strong> {t('governingLaw.consumerDisputes.general.value')}</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('governingLaw.businessDisputes.title')}</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>{t('governingLaw.businessDisputes.jurisdiction.label')}:</strong> {t('governingLaw.businessDisputes.jurisdiction.value')}</p>
                          <p><strong>{t('governingLaw.businessDisputes.alternative.label')}:</strong> {t('governingLaw.businessDisputes.alternative.value')}</p>
                          <p><strong>{t('governingLaw.businessDisputes.language.label')}:</strong> {t('governingLaw.businessDisputes.language.value')}</p>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('governingLaw.limitationPeriod.title')}</h4>
                        <p className="text-sm">{t('governingLaw.limitationPeriod.description')}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('governingLaw.consumerOverride.title')}</h4>
                      <p className="text-sm">{t('governingLaw.consumerOverride.description')}</p>
                    </div>
                  </div>
                </motion.section>

                {/* Contact & Legal Information */}
                <motion.section
                  id="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('contact.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('contact.description')}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.legal.title')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>{t('contact.legal.email')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-blue-500" />
                              <span>{t('contact.legal.phone')}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.general.title')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>{t('contact.general.email')}</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                              <div>
                                <p>{t('contact.general.company')}</p>
                                <p>{t('contact.general.address')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.consumer.title')}</h4>
                          <div className="text-sm space-y-2">
                            <p>{t('contact.consumer.description')}</p>
                            <div className="space-y-1">
                              <p><strong>{t('contact.consumer.agencies.swedish.name')}:</strong> {t('contact.consumer.agencies.swedish.website')}</p>
                              <p><strong>{t('contact.consumer.agencies.eu.name')}:</strong> {t('contact.consumer.agencies.eu.website')}</p>
                              <p><strong>{t('contact.consumer.agencies.arn.name')}:</strong> {t('contact.consumer.agencies.arn.website')}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.responseTimes.title')}</h4>
                          <div className="text-sm space-y-1">
                            <p><strong>{t('contact.responseTimes.legal.type')}:</strong> {t('contact.responseTimes.legal.time')}</p>
                            <p><strong>{t('contact.responseTimes.general.type')}:</strong> {t('contact.responseTimes.general.time')}</p>
                            <p><strong>{t('contact.responseTimes.consumer.type')}:</strong> {t('contact.responseTimes.consumer.time')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('contact.regulatory.title')}</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>{t('contact.regulatory.company.type')}:</strong> {t('contact.regulatory.company.office')}</p>
                          <p><strong>{t('contact.regulatory.vat.type')}:</strong> {t('contact.regulatory.vat.office')}</p>
                          <p><strong>{t('contact.regulatory.dataProtection.type')}:</strong> {t('contact.regulatory.dataProtection.office')}</p>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('contact.effective.title')}</h4>
                        <p className="text-sm">{t('contact.effective.description')}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('contact.accessibility.title')}</h4>
                      <p className="text-sm">{t('contact.accessibility.description')}</p>
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