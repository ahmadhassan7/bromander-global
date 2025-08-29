'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe, FileText, Users, Clock, AlertCircle, CheckCircle, Mail, Phone, MapPin, ExternalLink, Gavel, UserCheck, Database, Settings, Share } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { useState } from 'react';

export default function PrivacyPolicyPage() {
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
          <h3 className="text-white font-semibold text-sm mb-3">Quick Navigation</h3>
          <nav className="space-y-2 text-xs">
            {[
              { id: 'overview', title: 'Overview' },
              { id: 'legal-basis', title: 'Legal Basis' },
              { id: 'data-collection', title: 'Data Collection' },
              { id: 'data-usage', title: 'How We Use Data' },
              { id: 'data-sharing', title: 'Data Sharing' },
              { id: 'your-rights', title: 'Your Rights' },
              { id: 'data-retention', title: 'Data Retention' },
              { id: 'security', title: 'Security' },
              { id: 'cookies', title: 'Cookies' },
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
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-white">PRIVACY </span>
                <span className="gradient-text-blue">POLICY</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive data protection in compliance with GDPR, EU regulations, and Swedish law
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: August 29, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>GDPR Compliant</span>
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
                  <h3 className="text-white font-semibold mb-2">Important Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This privacy policy is designed to comply with the General Data Protection Regulation (GDPR), 
                    Swedish Data Protection Act, and other applicable EU regulations. You have specific rights regarding 
                    your personal data, and we&apos;re committed to protecting your privacy.
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
                    <h2 className="text-2xl font-bold text-white">Data Controller & Overview</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-2">Data Controller</h3>
                      <div className="text-sm space-y-1">
                        <p><strong>Company:</strong> Bromander Global AB</p>
                        <p><strong>Address:</strong> Stockholm, Sweden</p>
                        <p><strong>Contact:</strong> privacy@bromanderglobal.com</p>
                        <p><strong>DPO Contact:</strong> dpo@bromanderglobal.com</p>
                      </div>
                    </div>
                    <p>
                      Bromander Global AB (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a Swedish technology holding company registered in Stockholm, Sweden. We own and operate digital products including AI Reliance Tracker and Smart Bookkeeping. As the data controller, we determine the purposes and means of processing your personal data.
                    </p>
                    <p>
                      This Privacy Policy complies with the General Data Protection Regulation (GDPR), the Swedish Data Protection Act (2018:218), and other applicable EU and Swedish regulations. Each of our portfolio companies maintains its own specific privacy policy for their respective products and services.
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
                    <h2 className="text-2xl font-bold text-white">Legal Basis for Processing</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>We process your personal data based on the following legal grounds under GDPR Article 6:</p>
                    <div className="grid gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🟢 Legitimate Interest (Art. 6(1)(f))</h4>
                        <p className="text-sm">Website analytics, security monitoring, and business communications</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🔵 Consent (Art. 6(1)(a))</h4>
                        <p className="text-sm">Marketing communications, non-essential cookies, and newsletter subscriptions</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🟣 Contract Performance (Art. 6(1)(b))</h4>
                        <p className="text-sm">Service delivery, customer support, and account management</p>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🟠 Legal Obligation (Art. 6(1)(c))</h4>
                        <p className="text-sm">Tax reporting, regulatory compliance, and law enforcement requests</p>
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
                    <h2 className="text-2xl font-bold text-white">Data We Collect</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We collect personal data in the following categories:</p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <UserCheck className="w-5 h-5 text-blue-500" />
                          Identity & Contact Information
                        </h3>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Full name, email address, phone number</li>
                          <li>Company name, job title, professional information</li>
                          <li>Address, postal code, country of residence</li>
                          <li>Account credentials and authentication data</li>
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-blue-500" />
                          Technical & Usage Data
                        </h3>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>IP address, browser type, device identifiers</li>
                          <li>Operating system, screen resolution, language preferences</li>
                          <li>Website navigation patterns, page views, time spent</li>
                          <li>Referral sources, search terms, click patterns</li>
                          <li>Session recordings (anonymized), heatmap data</li>
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-500" />
                          Communication & Content
                        </h3>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Email correspondence, chat messages, support tickets</li>
                          <li>Feedback, surveys, reviews, and testimonials</li>
                          <li>Marketing preferences and communication history</li>
                          <li>Meeting notes, call recordings (with consent)</li>
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Settings className="w-5 h-5 text-blue-500" />
                          Cookies & Tracking Technologies
                        </h3>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Essential cookies for website functionality</li>
                          <li>Analytics cookies (Google Analytics, Mixpanel)</li>
                          <li>Marketing cookies (with consent)</li>
                          <li>Social media pixels and tracking beacons</li>
                          <li>Local storage data and session information</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Special Categories of Data
                      </h4>
                      <p className="text-sm">
                        We do not intentionally collect special categories of personal data (health, racial/ethnic origin, political opinions, religious beliefs, biometric data) unless explicitly required and with your explicit consent.
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
                    <h2 className="text-2xl font-bold text-white">How We Use Your Data</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We process your personal data for the following purposes, always based on a valid legal ground:</p>
                    
                    <div className="grid gap-4">
                      <div className="bg-blue-500/5 border-l-4 border-blue-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">Service Delivery & Customer Support</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Providing and maintaining our services</li>
                          <li>Processing transactions and managing accounts</li>
                          <li>Responding to inquiries and providing support</li>
                          <li>Troubleshooting and technical assistance</li>
                        </ul>
                      </div>

                      <div className="bg-green-500/5 border-l-4 border-green-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">Analytics & Improvements</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Analyzing website usage and performance</li>
                          <li>Improving user experience and functionality</li>
                          <li>Conducting research and development</li>
                          <li>A/B testing and feature optimization</li>
                        </ul>
                      </div>

                      <div className="bg-purple-500/5 border-l-4 border-purple-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">Marketing & Communication</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Sending newsletters and product updates (with consent)</li>
                          <li>Personalized marketing communications</li>
                          <li>Event invitations and industry insights</li>
                          <li>Social media engagement and advertising</li>
                        </ul>
                      </div>

                      <div className="bg-orange-500/5 border-l-4 border-orange-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">Legal & Security</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Compliance with legal obligations</li>
                          <li>Fraud prevention and security monitoring</li>
                          <li>Protecting our rights and interests</li>
                          <li>Law enforcement cooperation when required</li>
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
                    <h2 className="text-2xl font-bold text-white">Data Sharing & Third Parties</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We may share your personal data with the following categories of recipients:</p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Service Providers & Processors</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li><strong>Cloud Infrastructure:</strong> AWS, Google Cloud (data hosting)</li>
                          <li><strong>Analytics:</strong> Google Analytics, Mixpanel (website analytics)</li>
                          <li><strong>Communication:</strong> Mailchimp, SendGrid (email services)</li>
                          <li><strong>Support:</strong> Intercom, Zendesk (customer service)</li>
                          <li><strong>Payment Processing:</strong> Stripe, PayPal (transactions)</li>
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Legal Requirements</h4>
                        <p className="text-sm">We may disclose your data when required by law, court orders, or to protect our rights, users&apos; safety, or comply with legal processes.</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Business Transfers</h4>
                        <p className="text-sm">In case of merger, acquisition, or sale, your data may be transferred as part of the business assets, with continued protection under this privacy policy.</p>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">We Do NOT:</h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Sell your personal data to third parties</li>
                        <li>Share data for third-party marketing without consent</li>
                        <li>Transfer data outside EU/EEA without adequate protections</li>
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
                    <h2 className="text-2xl font-bold text-white">Your Data Protection Rights</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>Under GDPR and Swedish law, you have the following rights regarding your personal data:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Right of Access (Art. 15)
                        </h4>
                        <p className="text-sm">Request access to your personal data and information about how we process it.</p>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          Right to Rectification (Art. 16)
                        </h4>
                        <p className="text-sm">Request correction of inaccurate or incomplete personal data.</p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Right to Erasure (Art. 17)
                        </h4>
                        <p className="text-sm">Request deletion of your personal data (&apos;right to be forgotten&apos;).</p>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Right to Restrict Processing (Art. 18)
                        </h4>
                        <p className="text-sm">Request limitation of processing in certain circumstances.</p>
                      </div>

                      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Right to Data Portability (Art. 20)
                        </h4>
                        <p className="text-sm">Receive your data in a structured, machine-readable format.</p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          Right to Object (Art. 21)
                        </h4>
                        <p className="text-sm">Object to processing based on legitimate interests or direct marketing.</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-4">How to Exercise Your Rights</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-blue-500" />
                          <span><strong>Email:</strong> privacy@bromanderglobal.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-blue-500" />
                          <span><strong>Phone:</strong> +46 70 123 45 67</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <p><strong>Response Time:</strong> Within 30 days (may be extended to 60 days for complex requests)</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mt-4 text-gray-400">
                        We may need to verify your identity before processing your request. If we refuse your request, we&apos;ll explain why and inform you of your right to complain to the Swedish Authority for Privacy Protection (IMY).
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
                    <h2 className="text-2xl font-bold text-white">Data Retention</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:</p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Account Data</h4>
                        <p className="text-sm">Active accounts: Until account deletion + 30 days for backup recovery</p>
                        <p className="text-sm">Inactive accounts: 3 years from last login, then automatic deletion</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Communication Data</h4>
                        <p className="text-sm">Customer support: 7 years (Swedish business record requirements)</p>
                        <p className="text-sm">Marketing communications: Until consent withdrawal + 30 days</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Analytics Data</h4>
                        <p className="text-sm">Website analytics: 26 months (Google Analytics default)</p>
                        <p className="text-sm">Performance data: 12 months for optimization purposes</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Legal & Financial</h4>
                        <p className="text-sm">Financial records: 7 years (Swedish Bookkeeping Act)</p>
                        <p className="text-sm">Legal documentation: As required by applicable law</p>
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
                    <h2 className="text-2xl font-bold text-white">Security Measures</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We implement comprehensive technical and organizational measures to protect your personal data:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Technical Safeguards</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>TLS 1.3 encryption for data in transit</li>
                            <li>AES-256 encryption for data at rest</li>
                            <li>Multi-factor authentication (MFA)</li>
                            <li>Regular security audits and penetration testing</li>
                            <li>Automated threat detection and monitoring</li>
                            <li>Secure cloud infrastructure (SOC 2 compliant)</li>
                          </ul>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Access Controls</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Role-based access control (RBAC)</li>
                            <li>Principle of least privilege</li>
                            <li>Regular access reviews and audits</li>
                            <li>Secure authentication protocols</li>
                            <li>Employee background checks</li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Organizational Measures</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Regular staff training on data protection</li>
                            <li>Incident response and breach procedures</li>
                            <li>Privacy by design and by default</li>
                            <li>Data Processing Impact Assessments (DPIA)</li>
                            <li>Vendor security assessments</li>
                          </ul>
                        </div>

                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Compliance</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>ISO 27001 security framework</li>
                            <li>GDPR compliance monitoring</li>
                            <li>Swedish data protection standards</li>
                            <li>Regular compliance audits</li>
                            <li>Third-party security certifications</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Data Breach Response
                      </h4>
                      <p className="text-sm">
                        In the unlikely event of a data breach, we will notify the Swedish Authority for Privacy Protection (IMY) within 72 hours and affected individuals without undue delay, as required by GDPR Article 33-34.
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
                    <h2 className="text-2xl font-bold text-white">Cookies & Tracking</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>We use cookies and similar tracking technologies to enhance your browsing experience. You can manage your cookie preferences at any time.</p>
                    
                    <div className="grid gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Essential Cookies (Required)
                        </h4>
                        <p className="text-sm mb-2">These cookies are necessary for the website to function and cannot be switched off.</p>
                        <ul className="text-sm list-disc list-inside space-y-1">
                          <li>Authentication and session management</li>
                          <li>Security and fraud prevention</li>
                          <li>Load balancing and performance</li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Analytics Cookies (Opt-in)
                        </h4>
                        <p className="text-sm mb-2">Help us understand how visitors interact with our website.</p>
                        <ul className="text-sm list-disc list-inside space-y-1">
                          <li>Google Analytics (anonymized IP)</li>
                          <li>Page views and user journey tracking</li>
                          <li>Performance monitoring</li>
                        </ul>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Share className="w-4 h-4" />
                          Marketing Cookies (Consent Required)
                        </h4>
                        <p className="text-sm mb-2">Used to deliver personalized content and advertisements.</p>
                        <ul className="text-sm list-disc list-inside space-y-1">
                          <li>LinkedIn Insight Tag</li>
                          <li>Google Ads conversion tracking</li>
                          <li>Social media integration</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Cookie Management</h4>
                      <p className="text-sm mb-3">You can control cookies through:</p>
                      <ul className="text-sm list-disc list-inside space-y-1">
                        <li>Our cookie banner and preference center</li>
                        <li>Browser settings (may affect website functionality)</li>
                        <li>Opt-out links for specific services</li>
                        <li>Contact us at privacy@bromanderglobal.com</li>
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
                    Portfolio Company Privacy Policies
                  </h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Each of our portfolio companies operates independently and maintains its own comprehensive privacy policy for their specific products and services. These policies follow the same high standards as this policy.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                        <h3 className="font-semibold text-white mb-2 text-lg">AI Reliance Tracker</h3>
                        <p className="text-sm text-gray-400 mb-4">Privacy-first digital wellness platform with local data storage and zero tracking philosophy.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                          View Privacy Policy
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                        <h3 className="font-semibold text-white mb-2 text-lg">Smart Bookkeeping</h3>
                        <p className="text-sm text-gray-400 mb-4">Financial management platform with bank-level security and encrypted data processing.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                          View Privacy Policy
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
                    Contact & Support
                  </h2>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>
                      For questions about this Privacy Policy, data processing, or to exercise your rights, please contact us:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Privacy & Data Protection</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>privacy@bromanderglobal.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>dpo@bromanderglobal.com (Data Protection Officer)</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">General Contact</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-blue-500" />
                              <span>+46 70 123 45 67</span>
                            </div>
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
                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Gavel className="w-4 h-4" />
                            File a Complaint
                          </h4>
                          <div className="text-sm space-y-2">
                            <p>If you&apos;re unsatisfied with our response, you can file a complaint with:</p>
                            <div className="space-y-1">
                              <p><strong>Swedish Authority for Privacy Protection (IMY)</strong></p>
                              <p>Website: imy.se</p>
                              <p>Email: imy@imy.se</p>
                              <p>Phone: +46 8 657 61 00</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Policy Updates</h4>
                          <p className="text-sm">
                            We may update this Privacy Policy periodically. Material changes will be communicated via email and prominently displayed on our website. Continued use after changes constitutes acceptance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Quick Response Guarantee</h4>
                      <p className="text-sm">
                        We aim to respond to all privacy-related inquiries within 5 business days and fulfill data subject requests within the GDPR-mandated 30 days (extendable to 60 days for complex requests).
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