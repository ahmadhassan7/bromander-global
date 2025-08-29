'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, BarChart3, Globe, Clock, CheckCircle, Mail, Phone, MapPin, ExternalLink, Gavel, UserCheck, Database, AlertCircle, Ban, Lock, FileText, Users, Building, BookOpen, Home, Share } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CookieConsent from '@/components/CookieConsent';
import { useState } from 'react';

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState('');

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
          <h3 className="text-white font-semibold text-sm mb-3">Quick Navigation</h3>
          <nav className="space-y-2 text-xs">
            {[
              { id: 'overview', title: 'Overview' },
              { id: 'what-are-cookies', title: 'What Are Cookies' },
              { id: 'legal-basis', title: 'Legal Basis' },
              { id: 'cookie-types', title: 'Cookie Types' },
              { id: 'consent-management', title: 'Consent Management' },
              { id: 'third-party', title: 'Third-Party Services' },
              { id: 'your-rights', title: 'Your Rights' },
              { id: 'cookie-table', title: 'Cookie Table' },
              { id: 'contact', title: 'Contact' }
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
                <span className="text-white">COOKIE </span>
                <span className="gradient-text-blue">POLICY</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive cookie usage and consent management in compliance with EU ePrivacy Directive and Swedish law
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: August 29, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>ePrivacy Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <Shield className="w-4 h-4" />
                  <span>PTS Approved</span>
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
                  <h3 className="text-white font-semibold mb-2">Cookie Consent Notice</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This policy complies with the EU ePrivacy Directive and Swedish Electronic Communications Act (ECA). 
                    The Swedish Post and Telecom Authority (PTS) supervises compliance. Your consent choices are respected and can be changed at any time.
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
                    <h2 className="text-2xl font-bold text-white">Controller Information & Overview</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-2">Cookie Controller</h3>
                      <div className="text-sm space-y-1">
                        <p><strong>Company:</strong> Bromander Global AB</p>
                        <p><strong>Address:</strong> Stockholm, Sweden</p>
                        <p><strong>Contact:</strong> cookies@bromanderglobal.com</p>
                        <p><strong>DPO:</strong> dpo@bromanderglobal.com</p>
                        <p><strong>Supervisory Authority:</strong> Swedish Post and Telecom Authority (PTS)</p>
                      </div>
                    </div>
                    <p>
                      This Cookie Policy explains how Bromander Global AB uses cookies and similar technologies on our corporate website. 
                      We are committed to transparency and compliance with the EU ePrivacy Directive and Swedish Electronic Communications Act.
                    </p>
                    <p>
                      Each of our portfolio companies (AI Reliance Tracker, Smart Bookkeeping) maintains its own cookie policy for their respective services. 
                      This policy covers only the Bromander Global corporate website.
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
                    <h2 className="text-2xl font-bold text-white">What Are Cookies & Similar Technologies?</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>
                      Cookies are small text files stored on your device when you visit our website. Similar technologies include 
                      pixels, web beacons, local storage, and other tracking technologies that collect information about your interaction with our services.
                    </p>
                    
                    <div className="grid gap-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🍪 HTTP Cookies</h4>
                        <p className="text-sm">Small text files stored in your browser that contain information about your visit and preferences.</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">📊 Pixels & Web Beacons</h4>
                        <p className="text-sm">Tiny invisible images that track when emails are opened or pages are viewed.</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">💾 Local Storage</h4>
                        <p className="text-sm">Browser storage that persists data locally on your device for enhanced functionality.</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🔍 Session Storage</h4>
                        <p className="text-sm">Temporary storage that expires when you close your browser tab or window.</p>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Important Notice
                      </h4>
                      <p className="text-sm">
                        Under Swedish law, we need your consent before placing most cookies on your device. 
                        This policy explains which cookies require consent and how you can manage your preferences.
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
                    <h2 className="text-2xl font-bold text-white">Legal Basis for Cookie Use</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We process cookies based on the following legal grounds under EU and Swedish law:</p>
                    
                    <div className="grid gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Strictly Necessary (No Consent Required)
                        </h4>
                        <p className="text-sm mb-2">Swedish ECA § 28 exemption for cookies that are strictly necessary for service provision:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Authentication and session management</li>
                          <li>Security and fraud prevention</li>
                          <li>Load balancing and performance</li>
                          <li>Shopping cart functionality (if applicable)</li>
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
                        <h4 className="text-white font-semibold mb-2">Swedish Enforcement (2025)</h4>
                        <p className="text-sm">
                          Swedish authorities (IMY/PTS) actively enforce cookie consent requirements. 
                          In April 2025, new guidelines prohibited "dark patterns" in consent interfaces, 
                          requiring equal treatment of "Accept" and "Reject" options.
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
                    <h2 className="text-2xl font-bold text-white">Cookie Categories We Use</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-6">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Strictly Necessary Cookies
                        </h3>
                        <p className="mb-3 text-sm">Essential for basic website functionality and security. Cannot be disabled.</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span><strong>Purpose:</strong> Authentication, security, load balancing</span>
                            <span className="text-green-400">Always Active</span>
                          </div>
                          <div><strong>Duration:</strong> Session to 1 year</div>
                          <div><strong>Examples:</strong> PHPSESSID, _csrf_token, lb_cookie</div>
                        </div>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" />
                          Analytics & Performance Cookies
                        </h3>
                        <p className="mb-3 text-sm">Help us understand website usage and improve performance. Require consent.</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span><strong>Purpose:</strong> Usage analytics, performance monitoring</span>
                            <span className="text-blue-400">Consent Required</span>
                          </div>
                          <div><strong>Duration:</strong> 13-26 months</div>
                          <div><strong>Examples:</strong> _ga, _gid, _gat, _hjSessionUser</div>
                          <div><strong>Providers:</strong> Google Analytics, Hotjar</div>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Settings className="w-5 h-5" />
                          Functional Cookies
                        </h3>
                        <p className="mb-3 text-sm">Remember preferences and enhance user experience. Require consent.</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span><strong>Purpose:</strong> Preferences, language, theme settings</span>
                            <span className="text-purple-400">Consent Required</span>
                          </div>
                          <div><strong>Duration:</strong> 30 days to 1 year</div>
                          <div><strong>Examples:</strong> lang_preference, theme_mode, cookie_preferences</div>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Share className="w-5 h-5" />
                          Marketing & Social Media Cookies
                        </h3>
                        <p className="mb-3 text-sm">Used for advertising and social media integration. Require explicit consent.</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span><strong>Purpose:</strong> Advertising, social sharing, remarketing</span>
                            <span className="text-orange-400">Explicit Consent Required</span>
                          </div>
                          <div><strong>Duration:</strong> 30 days to 2 years</div>
                          <div><strong>Examples:</strong> _fbp, li_sugr, ads_data, social_share</div>
                          <div><strong>Providers:</strong> LinkedIn, Google Ads</div>
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
                    <h2 className="text-2xl font-bold text-white">Cookie Consent Management</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We comply with Swedish and EU requirements for cookie consent, following 2025 enforcement guidelines:</p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Compliant Consent Interface
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Equal prominence of "Accept" and "Reject" buttons</li>
                          <li>No pre-checked boxes for non-essential cookies</li>
                          <li>Clear, plain language explanations</li>
                          <li>Granular control over cookie categories</li>
                          <li>Easy withdrawal of consent</li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">How to Manage Your Consent</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Initial Visit:</strong> Cookie banner appears with clear accept/reject options</p>
                          <p><strong>Change Preferences:</strong> Access cookie settings at any time via footer link</p>
                          <p><strong>Withdraw Consent:</strong> Disable any non-essential cookies instantly</p>
                          <p><strong>Browser Settings:</strong> Additional control through browser preferences</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Swedish Law Compliance (2025)</h4>
                        <p className="text-sm">
                          Following IMY guidelines from April 2025, our consent mechanism avoids "dark patterns" 
                          and ensures genuine user choice. All consent is documented and can be audited.
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Age Requirements</h4>
                        <p className="text-sm">
                          The digital age of consent in Sweden is 13 years. Users under 13 require parental consent 
                          for any data processing, including cookies that collect personal information.
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
                    <h2 className="text-2xl font-bold text-white">Third-Party Services & Cookies</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We carefully select third-party services and ensure they comply with EU/Swedish data protection laws:</p>
                    
                    <div className="grid gap-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-blue-500" />
                          Google Analytics 4 (GA4)
                        </h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Purpose:</strong> Website analytics and performance monitoring</p>
                          <p><strong>Data Processing:</strong> EU servers, IP anonymization enabled</p>
                          <p><strong>Consent Required:</strong> Yes - Analytics category</p>
                          <p><strong>Cookies Set:</strong> _ga, _ga_*, _gid, _gat_gtag_*</p>
                          <p><strong>Duration:</strong> 13-24 months</p>
                          <a href="https://policies.google.com/privacy" className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                            Google Privacy Policy <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Share className="w-5 h-5 text-purple-500" />
                          LinkedIn Insight Tag
                        </h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Purpose:</strong> B2B marketing analytics and audience insights</p>
                          <p><strong>Data Processing:</strong> EU/US with Standard Contractual Clauses</p>
                          <p><strong>Consent Required:</strong> Yes - Marketing category</p>
                          <p><strong>Cookies Set:</strong> li_sugr, lidc, UserMatchHistory</p>
                          <p><strong>Duration:</strong> 30 days to 2 years</p>
                          <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                            LinkedIn Privacy Policy <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-500" />
                          CloudFlare CDN
                        </h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Purpose:</strong> Performance, security, and DDoS protection</p>
                          <p><strong>Data Processing:</strong> EU servers, essential functionality</p>
                          <p><strong>Consent Required:</strong> No - Strictly necessary</p>
                          <p><strong>Cookies Set:</strong> __cflb, __cf_bm, cf_clearance</p>
                          <p><strong>Duration:</strong> Session to 1 year</p>
                          <a href="https://www.cloudflare.com/privacypolicy/" className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                            CloudFlare Privacy Policy <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Ban className="w-4 h-4" />
                        We Do NOT Use
                      </h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Cross-site tracking without consent</li>
                        <li>Fingerprinting technologies</li>
                        <li>Data brokers or audience networks</li>
                        <li>Undisclosed third-party cookies</li>
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
                    <h2 className="text-2xl font-bold text-white">Your Cookie Rights & Controls</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>Under Swedish and EU law, you have comprehensive rights regarding cookies and tracking:</p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <UserCheck className="w-4 h-4" />
                          Consent Rights
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Give or refuse consent for non-essential cookies</li>
                          <li>Withdraw consent at any time without penalty</li>
                          <li>Granular control over different cookie categories</li>
                          <li>Consent choices respected across all visits</li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          Browser Controls
                        </h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</p>
                          <p><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</p>
                          <p><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
                          <p><strong>Edge:</strong> Settings → Cookies and site permissions</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Transparency Rights
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Clear information about all cookies we use</li>
                          <li>Purpose and duration of each cookie</li>
                          <li>Identity of third parties setting cookies</li>
                          <li>Data transfer information for international cookies</li>
                        </ul>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Impact of Cookie Controls</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>Essential Cookies:</strong> Cannot be disabled; may prevent basic website functions</p>
                          <p><strong>Analytics Cookies:</strong> Website remains functional; we cannot improve user experience</p>
                          <p><strong>Functional Cookies:</strong> May require re-entering preferences on each visit</p>
                          <p><strong>Marketing Cookies:</strong> Less relevant content and advertising</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">Cookie Preference Center</h4>
                      <p className="text-sm mb-2">Access your cookie preferences at any time:</p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition-colors">
                          Manage Cookie Preferences
                        </button>
                        <span className="text-gray-400">Available in footer on every page</span>
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
                    <h2 className="text-2xl font-bold text-white">Complete Cookie Inventory</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>Comprehensive list of all cookies used on our website, as required by Swedish transparency obligations:</p>
                    
                    <div className="space-y-6">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Strictly Necessary Cookies
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-700">
                                <th className="text-left p-2">Cookie Name</th>
                                <th className="text-left p-2">Purpose</th>
                                <th className="text-left p-2">Duration</th>
                                <th className="text-left p-2">Provider</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-800">
                                <td className="p-2 font-mono">PHPSESSID</td>
                                <td className="p-2">Session management</td>
                                <td className="p-2">Session</td>
                                <td className="p-2">Bromander Global</td>
                              </tr>
                              <tr className="border-b border-gray-800">
                                <td className="p-2 font-mono">_csrf_token</td>
                                <td className="p-2">Security protection</td>
                                <td className="p-2">Session</td>
                                <td className="p-2">Bromander Global</td>
                              </tr>
                              <tr className="border-b border-gray-800">
                                <td className="p-2 font-mono">__cf_bm</td>
                                <td className="p-2">Bot management</td>
                                <td className="p-2">30 minutes</td>
                                <td className="p-2">CloudFlare</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4" />
                          Analytics Cookies (Consent Required)
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-700">
                                <th className="text-left p-2">Cookie Name</th>
                                <th className="text-left p-2">Purpose</th>
                                <th className="text-left p-2">Duration</th>
                                <th className="text-left p-2">Provider</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-800">
                                <td className="p-2 font-mono">_ga</td>
                                <td className="p-2">User identification</td>
                                <td className="p-2">24 months</td>
                                <td className="p-2">Google Analytics</td>
                              </tr>
                              <tr className="border-b border-gray-800">
                                <td className="p-2 font-mono">_ga_*</td>
                                <td className="p-2">Session data</td>
                                <td className="p-2">24 months</td>
                                <td className="p-2">Google Analytics</td>
                              </tr>
                              <tr className="border-b border-gray-800">
                                <td className="p-2 font-mono">_gid</td>
                                <td className="p-2">User identification</td>
                                <td className="p-2">24 hours</td>
                                <td className="p-2">Google Analytics</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          Functional Cookies (Consent Required)
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-700">
                                <th className="text-left p-2">Cookie Name</th>
                                <th className="text-left p-2">Purpose</th>
                                <th className="text-left p-2">Duration</th>
                                <th className="text-left p-2">Provider</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-800">
                                <td className="p-2 font-mono">cookie_preferences</td>
                                <td className="p-2">Remember consent choices</td>
                                <td className="p-2">1 year</td>
                                <td className="p-2">Bromander Global</td>
                              </tr>
                              <tr className="border-b border-gray-800">
                                <td className="p-2 font-mono">lang_preference</td>
                                <td className="p-2">Language selection</td>
                                <td className="p-2">30 days</td>
                                <td className="p-2">Bromander Global</td>
                              </tr>
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
                    <h2 className="text-2xl font-bold text-white">Cookie Security & Data Retention</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          Security Measures
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Secure (HTTPS-only) cookie transmission</li>
                          <li>HttpOnly flags to prevent JavaScript access where appropriate</li>
                          <li>SameSite attributes to prevent CSRF attacks</li>
                          <li>Regular security audits of cookie implementation</li>
                          <li>Encryption of sensitive cookie data</li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Data Retention
                        </h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Session Cookies:</strong> Deleted when you close your browser</p>
                          <p><strong>Persistent Cookies:</strong> Automatically expire after specified duration</p>
                          <p><strong>Analytics Data:</strong> Aggregated and anonymized after 26 months</p>
                          <p><strong>Consent Records:</strong> Maintained for 3 years for compliance purposes</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Data Minimization</h4>
                        <p className="text-sm">
                          We follow GDPR data minimization principles, collecting only necessary cookie data 
                          and retaining it for the shortest time required for its stated purpose.
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">International Transfers</h4>
                        <p className="text-sm">
                          Some third-party cookies (Google Analytics, LinkedIn) may transfer data outside the EU. 
                          We ensure adequate protections through Standard Contractual Clauses and adequacy decisions.
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
                    <h2 className="text-2xl font-bold text-white">Policy Updates & Compliance</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Update Process</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Minor Changes:</strong> Updated immediately with new "last updated" date</p>
                          <p><strong>Material Changes:</strong> 30 days advance notice via email and website banner</p>
                          <p><strong>New Cookie Categories:</strong> Fresh consent required before deployment</p>
                          <p><strong>Version History:</strong> Previous versions archived for compliance audit</p>
                        </div>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Regulatory Compliance</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>EU ePrivacy Directive:</strong> Implemented via Swedish ECA</p>
                          <p><strong>GDPR:</strong> Article 6 legal basis and Article 7 consent requirements</p>
                          <p><strong>Swedish Authorities:</strong> PTS (technical) and IMY (data protection) oversight</p>
                          <p><strong>2025 Guidelines:</strong> Compliant with IMY dark patterns guidance</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Regular Reviews</h4>
                        <p className="text-sm">
                          We conduct quarterly reviews of our cookie inventory, consent mechanisms, and compliance 
                          with evolving Swedish and EU requirements to ensure ongoing legal compliance.
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Technology Updates</h4>
                        <p className="text-sm">
                          As cookie technology evolves (e.g., Topics API, Privacy Sandbox), we will update 
                          this policy and obtain fresh consent as required by Swedish law.
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
                    <h2 className="text-2xl font-bold text-white">Contact & Cookie Support</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>For questions about cookies, consent management, or this policy, please contact us:</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Cookie & Privacy Inquiries</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>cookies@bromanderglobal.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>dpo@bromanderglobal.com (Data Protection Officer)</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-blue-500" />
                              <span>+46 70 123 45 67</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">General Support</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                              <div>
                                <p>Bromander Global AB</p>
                                <p>Stockholm, Sweden</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Regulatory Authorities</h4>
                          <div className="text-sm space-y-2">
                            <p>For cookie-related complaints in Sweden:</p>
                            <div className="space-y-1">
                              <p><strong>Swedish Post & Telecom Authority (PTS):</strong></p>
                              <p>Website: pts.se | Email: pts@pts.se</p>
                              <p><strong>Swedish Authority for Privacy Protection (IMY):</strong></p>
                              <p>Website: imy.se | Email: imy@imy.se</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Response Times</h4>
                          <div className="text-sm space-y-1">
                            <p><strong>Cookie questions:</strong> 3 business days</p>
                            <p><strong>Consent issues:</strong> Same day</p>
                            <p><strong>Technical problems:</strong> 24 hours</p>
                            <p><strong>Legal inquiries:</strong> 5 business days</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Cookie Preference Management</h4>
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => {
                              if (typeof window !== 'undefined' && (window as any).openCookieSettings) {
                                (window as any).openCookieSettings();
                              }
                            }}
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white text-sm transition-colors flex items-center gap-2"
                          >
                            <Settings className="w-4 h-4" />
                            Open Cookie Settings
                          </button>
                          <button 
                            onClick={() => {
                              if (typeof window !== 'undefined' && (window as any).resetAllCookies) {
                                if (confirm('This will reset all cookie preferences and reload the page. Continue?')) {
                                  (window as any).resetAllCookies();
                                }
                              }
                            }}
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm transition-colors flex items-center gap-2"
                          >
                            <Ban className="w-4 h-4" />
                            Reset All Cookies
                          </button>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Accessibility</h4>
                        <p className="text-sm">
                          If you need this Cookie Policy in an alternative format for accessibility reasons, 
                          please contact us and we will provide it in a suitable format within 3 business days.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Cookie Policy Effective</h4>
                      <p className="text-sm">
                        This Cookie Policy is effective as of the last updated date and applies to all visitors to our website. 
                        By continuing to use our website after reading this policy, you acknowledge understanding of our cookie practices.
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