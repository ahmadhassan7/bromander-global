'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, BarChart3, Globe, Clock, CheckCircle, Mail, Phone, MapPin, ExternalLink, Gavel, UserCheck, Database, AlertCircle, Ban, Lock, FileText, Building, Share } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function CookiePolicyPage() {
  const t = useTranslations('cookiePolicy');
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
              { id: 'what-are-cookies', title: t('navigation.whatAreCookies') },
              { id: 'legal-basis', title: t('navigation.legalBasis') },
              { id: 'cookie-types', title: t('navigation.cookieTypes') },
              { id: 'consent-management', title: t('navigation.consentManagement') },
              { id: 'third-party', title: t('navigation.thirdParty') },
              { id: 'your-rights', title: t('navigation.yourRights') },
              { id: 'cookie-table', title: t('navigation.cookieTable') },
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
                  <Cookie className="w-8 h-8 text-blue-500" />
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
                  <span>{t('header.ePrivacyCompliant')}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <Shield className="w-4 h-4" />
                  <span>{t('header.ptsApproved')}</span>
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
                {/* Controller Information & Overview */}
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
                      <h3 className="text-white font-semibold mb-2">{t('overview.controllerTitle')}</h3>
                      <div className="text-sm space-y-1">
                        <p><strong>{t('overview.company')}:</strong> Bromander Global AB</p>
                        <p><strong>{t('overview.address')}:</strong> Stockholm, Sweden</p>
                        <p><strong>{t('overview.contact')}:</strong> cookies@bromanderglobal.com</p>
                        <p><strong>{t('overview.dpo')}:</strong> dpo@bromanderglobal.com</p>
                        <p><strong>{t('overview.supervisoryAuthority')}:</strong> Swedish Post and Telecom Authority (PTS)</p>
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

                {/* What Are Cookies */}
                <motion.section
                  id="what-are-cookies"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('whatAreCookies.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>
                      {t('whatAreCookies.description')}
                    </p>
                    
                    <div className="grid gap-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('whatAreCookies.types.httpCookies.title')}</h4>
                        <p className="text-sm">{t('whatAreCookies.types.httpCookies.description')}</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('whatAreCookies.types.pixels.title')}</h4>
                        <p className="text-sm">{t('whatAreCookies.types.pixels.description')}</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('whatAreCookies.types.localStorage.title')}</h4>
                        <p className="text-sm">{t('whatAreCookies.types.localStorage.description')}</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('whatAreCookies.types.sessionStorage.title')}</h4>
                        <p className="text-sm">{t('whatAreCookies.types.sessionStorage.description')}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
{t('whatAreCookies.importantNotice.title')}
                      </h4>
                      <p className="text-sm">
                        {t('whatAreCookies.importantNotice.description')}
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Legal Basis */}
                <motion.section
                  id="legal-basis"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Gavel className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('legalBasis.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('legalBasis.description')}</p>
                    
                    <div className="grid gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
{t('legalBasis.strictlyNecessary.title')}
                        </h4>
                        <p className="text-sm mb-2">{t('legalBasis.strictlyNecessary.subtitle')}</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('legalBasis.strictlyNecessary.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <UserCheck className="w-4 h-4" />
                          Prior Consent Required (ePrivacy Directive)
                        </h4>
                        <p className="text-sm mb-2">All other cookies require explicit consent before placement:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Analytics and performance cookies</li>
                          <li>Marketing and advertising cookies</li>
                          <li>Social media integration cookies</li>
                          <li>Third-party tracking cookies</li>
                        </ul>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('legalBasis.enforcement.title')}</h4>
                        <p className="text-sm">
                          {t('legalBasis.enforcement.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Cookie Categories */}
                <motion.section
                  id="cookie-types"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('cookieTypes.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-6">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          {t('cookieTypes.necessary.title')}
                        </h3>
                        <p className="mb-3 text-sm">{t('cookieTypes.necessary.description')}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>{t('cookieTypes.necessary.purpose')}</span>
                            <span className="text-green-400">{t('cookieTypes.necessary.status')}</span>
                          </div>
                          <div>{t('cookieTypes.necessary.duration')}</div>
                          <div>{t('cookieTypes.necessary.examples')}</div>
                        </div>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" />
{t('cookieTypes.analytics.title')}
                        </h3>
                        <p className="mb-3 text-sm">{t('cookieTypes.analytics.description')}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>{t('cookieTypes.analytics.purpose')}</span>
                            <span className="text-blue-400">{t('cookieTypes.analytics.status')}</span>
                          </div>
                          <div>{t('cookieTypes.analytics.duration')}</div>
                          <div>{t('cookieTypes.analytics.examples')}</div>
                          <div>{t('cookieTypes.analytics.providers')}</div>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Settings className="w-5 h-5" />
                          {t('cookieTypes.functional.title')}
                        </h3>
                        <p className="mb-3 text-sm">{t('cookieTypes.functional.description')}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>{t('cookieTypes.functional.purpose')}</span>
                            <span className="text-purple-400">{t('cookieTypes.functional.status')}</span>
                          </div>
                          <div>{t('cookieTypes.functional.duration')}</div>
                          <div>{t('cookieTypes.functional.examples')}</div>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Share className="w-5 h-5" />
{t('cookieTypes.marketing.title')}
                        </h3>
                        <p className="mb-3 text-sm">{t('cookieTypes.marketing.description')}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>{t('cookieTypes.marketing.purpose')}</span>
                            <span className="text-orange-400">{t('cookieTypes.marketing.status')}</span>
                          </div>
                          <div>{t('cookieTypes.marketing.duration')}</div>
                          <div>{t('cookieTypes.marketing.examples')}</div>
                          <div>{t('cookieTypes.marketing.providers')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Consent Management */}
                <motion.section
                  id="consent-management"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="w-6 h-6 text-green-500" />
                    <h2 className="text-2xl font-bold text-white">{t('consentManagement.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('consentManagement.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
{t('consentManagement.compliantInterface.title')}
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('consentManagement.compliantInterface.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('consentManagement.management.title')}</h4>
                        <div className="text-sm space-y-2">
                          <p>{t('consentManagement.management.initialVisit')}</p>
                          <p>{t('consentManagement.management.changePreferences')}</p>
                          <p>{t('consentManagement.management.withdrawConsent')}</p>
                          <p>{t('consentManagement.management.browserSettings')}</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('consentManagement.swedishCompliance.title')}</h4>
                        <p className="text-sm">
                          {t('consentManagement.swedishCompliance.description')}
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('consentManagement.ageRequirements.title')}</h4>
                        <p className="text-sm">
                          {t('consentManagement.ageRequirements.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Third-Party Services */}
                <motion.section
                  id="third-party"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('thirdPartyServices.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('thirdPartyServices.description')}</p>
                    
                    <div className="grid gap-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-blue-500" />
                          {t('thirdPartyServices.googleAnalytics.title')}
                        </h4>
                        <div className="text-sm space-y-2">
                          <p>{t('thirdPartyServices.googleAnalytics.purpose')}</p>
                          <p>{t('thirdPartyServices.googleAnalytics.dataProcessing')}</p>
                          <p>{t('thirdPartyServices.googleAnalytics.consentRequired')}</p>
                          <p>{t('thirdPartyServices.googleAnalytics.cookiesSet')}</p>
                          <p>{t('thirdPartyServices.googleAnalytics.duration')}</p>
                          <span className="text-blue-400">{t('thirdPartyServices.googleAnalytics.privacyPolicy')}</span>
                        </div>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Share className="w-5 h-5 text-purple-500" />
                          {t('thirdPartyServices.linkedinInsight.title')}
                        </h4>
                        <div className="text-sm space-y-2">
                          <p>{t('thirdPartyServices.linkedinInsight.purpose')}</p>
                          <p>{t('thirdPartyServices.linkedinInsight.dataProcessing')}</p>
                          <p>{t('thirdPartyServices.linkedinInsight.consentRequired')}</p>
                          <p>{t('thirdPartyServices.linkedinInsight.cookiesSet')}</p>
                          <p>{t('thirdPartyServices.linkedinInsight.duration')}</p>
                          <span className="text-blue-400">{t('thirdPartyServices.linkedinInsight.privacyPolicy')}</span>
                        </div>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-500" />
                          {t('thirdPartyServices.cloudflare.title')}
                        </h4>
                        <div className="text-sm space-y-2">
                          <p>{t('thirdPartyServices.cloudflare.purpose')}</p>
                          <p>{t('thirdPartyServices.cloudflare.dataProcessing')}</p>
                          <p>{t('thirdPartyServices.cloudflare.consentRequired')}</p>
                          <p>{t('thirdPartyServices.cloudflare.cookiesSet')}</p>
                          <p>{t('thirdPartyServices.cloudflare.duration')}</p>
                          <span className="text-blue-400">{t('thirdPartyServices.cloudflare.privacyPolicy')}</span>
                        </div>
                      </div>                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Ban className="w-4 h-4" />
{t('thirdPartyServices.weDoNotUse.title')}
                      </h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        {t.raw('thirdPartyServices.weDoNotUse.items').map((item: string, index: number) => (
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
                  transition={{ delay: 0.8 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('yourRights.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('yourRights.description')}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <UserCheck className="w-4 h-4" />
{t('yourRights.consentRights.title')}
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('yourRights.consentRights.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Settings className="w-4 h-4" />
{t('yourRights.browserControls.title')}
                        </h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Chrome:</strong> {t('yourRights.browserControls.chrome')}</p>
                          <p><strong>Firefox:</strong> {t('yourRights.browserControls.firefox')}</p>
                          <p><strong>Safari:</strong> {t('yourRights.browserControls.safari')}</p>
                          <p><strong>Edge:</strong> {t('yourRights.browserControls.edge')}</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
{t('yourRights.transparencyRights.title')}
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('yourRights.transparencyRights.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('yourRights.cookieImpact.title')}</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>Essential:</strong> {t('yourRights.cookieImpact.essential')}</p>
                          <p><strong>Analytics:</strong> {t('yourRights.cookieImpact.analytics')}</p>
                          <p><strong>Functional:</strong> {t('yourRights.cookieImpact.functional')}</p>
                          <p><strong>Marketing:</strong> {t('yourRights.cookieImpact.marketing')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">{t('yourRights.preferenceCenter.title')}</h4>
                      <p className="text-sm mb-2">{t('yourRights.preferenceCenter.description')}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition-colors">
                          {t('yourRights.preferenceCenter.buttonText')}
                        </button>
                        <span className="text-gray-400">{t('yourRights.preferenceCenter.availability')}</span>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Detailed Cookie Table */}
                <motion.section
                  id="cookie-table"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('cookieTable.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>{t('cookieTable.description')}</p>
                    
                    <div className="space-y-6">
                      {/* Necessary Cookies */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {t('cookieTable.necessaryTable.title')}
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-700">
                                <th className="text-left p-2">{t('cookieTable.necessaryTable.headers.cookieName')}</th>
                                <th className="text-left p-2">{t('cookieTable.necessaryTable.headers.purpose')}</th>
                                <th className="text-left p-2">{t('cookieTable.necessaryTable.headers.duration')}</th>
                                <th className="text-left p-2">{t('cookieTable.necessaryTable.headers.provider')}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {t.raw('cookieTable.necessaryTable.cookies').map((cookie: {name: string, purpose: string, duration: string, provider: string}, index: number) => (
                                <tr key={index} className="border-b border-gray-800">
                                  <td className="p-2 font-mono">{cookie.name}</td>
                                  <td className="p-2">{cookie.purpose}</td>
                                  <td className="p-2">{cookie.duration}</td>
                                  <td className="p-2">{cookie.provider}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4" />
                          {t('cookieTable.analyticsTable.title')}
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-700">
                                <th className="text-left p-2">{t('cookieTable.necessaryTable.headers.cookieName')}</th>
                                <th className="text-left p-2">{t('cookieTable.necessaryTable.headers.purpose')}</th>
                                <th className="text-left p-2">{t('cookieTable.necessaryTable.headers.duration')}</th>
                                <th className="text-left p-2">{t('cookieTable.necessaryTable.headers.provider')}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {t.raw('cookieTable.analyticsTable.cookies').map((cookie: {name: string, purpose: string, duration: string, provider: string}, index: number) => (
                                <tr key={index} className="border-b border-gray-800">
                                  <td className="p-2 font-mono">{cookie.name}</td>
                                  <td className="p-2">{cookie.purpose}</td>
                                  <td className="p-2">{cookie.duration}</td>
                                  <td className="p-2">{cookie.provider}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Data Security & Retention */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('dataSecurity.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
{t('dataSecurity.securityMeasures.title')}
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          {t.raw('dataSecurity.securityMeasures.items').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
{t('dataSecurity.dataRetention.title')}
                        </h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Session Cookies:</strong> {t('dataSecurity.dataRetention.sessionCookies')}</p>
                          <p><strong>Persistent Cookies:</strong> {t('dataSecurity.dataRetention.persistentCookies')}</p>
                          <p><strong>Analytics Data:</strong> {t('dataSecurity.dataRetention.analyticsData')}</p>
                          <p><strong>Consent Records:</strong> {t('dataSecurity.dataRetention.consentRecords')}</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataSecurity.dataMinimization.title')}</h4>
                        <p className="text-sm">
                          {t('dataSecurity.dataMinimization.description')}
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('dataSecurity.internationalTransfers.title')}</h4>
                        <p className="text-sm">
                          {t('dataSecurity.internationalTransfers.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Policy Updates & Compliance */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{t('policyUpdates.title')}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('policyUpdates.updateProcess.title')}</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Minor Changes:</strong> {t('policyUpdates.updateProcess.minorChanges')}</p>
                          <p><strong>Material Changes:</strong> {t('policyUpdates.updateProcess.materialChanges')}</p>
                          <p><strong>New Cookie Categories:</strong> {t('policyUpdates.updateProcess.newCookieCategories')}</p>
                          <p><strong>Version History:</strong> {t('policyUpdates.updateProcess.versionHistory')}</p>
                        </div>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('policyUpdates.regulatoryCompliance.title')}</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>EU ePrivacy Directive:</strong> {t('policyUpdates.regulatoryCompliance.ePrivacyDirective')}</p>
                          <p><strong>GDPR:</strong> {t('policyUpdates.regulatoryCompliance.gdpr')}</p>
                          <p><strong>Swedish Authorities:</strong> {t('policyUpdates.regulatoryCompliance.swedishAuthorities')}</p>
                          <p><strong>2025 Guidelines:</strong> {t('policyUpdates.regulatoryCompliance.guidelines2025')}</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('policyUpdates.regularReviews.title')}</h4>
                        <p className="text-sm">
                          {t('policyUpdates.regularReviews.description')}
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('policyUpdates.technologyUpdates.title')}</h4>
                        <p className="text-sm">
                          {t('policyUpdates.technologyUpdates.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Contact & Support */}
                <motion.section
                  id="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
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
                          <h4 className="text-white font-semibold mb-3">{t('contact.cookieInquiries.title')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>{t('contact.cookieInquiries.email')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>{t('contact.cookieInquiries.dpoEmail')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-blue-500" />
                              <span>{t('contact.cookieInquiries.phone')}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.generalSupport.title')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                              <div>
                                <p>{t('contact.generalSupport.company')}</p>
                                <p>{t('contact.generalSupport.address')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.regulatoryAuthorities.title')}</h4>
                          <div className="text-sm space-y-2">
                            <p>{t('contact.regulatoryAuthorities.description')}</p>
                            <div className="space-y-1">
                              <div>
                                <p>{t('contact.regulatoryAuthorities.pts')}</p>
                              </div>
                              <div>
                                <p>{t('contact.regulatoryAuthorities.imy')}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">{t('contact.responseTimes.title')}</h4>
                          <div className="text-sm space-y-1">
                            {t.raw('contact.responseTimes.times').map((time: {type: string, duration: string}, index: number) => (
                              <p key={index}><strong>{time.type}:</strong> {time.duration}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('contact.preferenceManagement.title')}</h4>
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => {
                              if (typeof window !== 'undefined' && (window as unknown as { openCookieSettings?: () => void }).openCookieSettings) {
                                (window as unknown as { openCookieSettings: () => void }).openCookieSettings();
                              }
                            }}
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white text-sm transition-colors flex items-center gap-2"
                          >
                            <Settings className="w-4 h-4" />
{t('contact.preferenceManagement.openSettings')}
                          </button>
                          <button 
                            onClick={() => {
                              if (typeof window !== 'undefined' && (window as unknown as { resetAllCookies?: () => void }).resetAllCookies) {
                                if (confirm(t('contact.preferenceManagement.resetConfirmation'))) {
                                  (window as unknown as { resetAllCookies: () => void }).resetAllCookies();
                                }
                              }
                            }}
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm transition-colors flex items-center gap-2"
                          >
                            <Ban className="w-4 h-4" />
{t('contact.preferenceManagement.resetCookies')}
                          </button>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{t('contact.accessibility.title')}</h4>
                        <p className="text-sm">
                          {t('contact.accessibility.description')}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{t('contact.effective.title')}</h4>
                      <p className="text-sm">
                        {t('contact.effective.description')}
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