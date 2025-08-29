'use client';

import { motion } from 'framer-motion';
import { Scale, Shield, AlertTriangle, Globe, Clock, CheckCircle, Mail, Phone, MapPin, ExternalLink, Gavel, UserCheck, Ban, BookOpen, Building, AlertCircle, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { useState } from 'react';

export default function TermsOfServicePage() {
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
              { id: 'definitions', title: 'Definitions' },
              { id: 'acceptance', title: 'Acceptance' },
              { id: 'services', title: 'Our Services' },
              { id: 'user-obligations', title: 'User Obligations' },
              { id: 'prohibited-use', title: 'Prohibited Use' },
              { id: 'intellectual-property', title: 'Intellectual Property' },
              { id: 'consumer-rights', title: 'Consumer Rights' },
              { id: 'liability', title: 'Liability' },
              { id: 'termination', title: 'Termination' },
              { id: 'governing-law', title: 'Governing Law' },
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
                  <Scale className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-white">TERMS OF </span>
                <span className="gradient-text-blue">SERVICE</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive terms governing our services in compliance with EU consumer protection and Swedish law
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: August 29, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>EU Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <Gavel className="w-4 h-4" />
                  <span>Swedish Law</span>
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
                  <h3 className="text-white font-semibold mb-2">Important Legal Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These terms comply with EU Consumer Protection Directives, the Swedish Consumer Contracts Act, 
                    and are supervised by Konsumentverket (Swedish Consumer Agency). Your consumer rights are protected under Swedish and EU law.
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
                    <h2 className="text-2xl font-bold text-white">Company Information & Overview</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-2">Service Provider</h3>
                      <div className="text-sm space-y-1">
                        <p><strong>Company:</strong> Bromander Global AB</p>
                        <p><strong>Registration Number:</strong> [Swedish Corporate Registration Number]</p>
                        <p><strong>Address:</strong> Stockholm, Sweden</p>
                        <p><strong>Email:</strong> legal@bromanderglobal.com</p>
                        <p><strong>Phone:</strong> +46 70 123 45 67</p>
                        <p><strong>VAT Number:</strong> SE[VAT Number]</p>
                      </div>
                    </div>
                    <p>
                      Bromander Global AB is a Swedish technology holding company that owns and operates digital products including AI Reliance Tracker and Smart Bookkeeping. We provide corporate information services and act as a holding company for our portfolio of technology businesses.
                    </p>
                    <p>
                      These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Bromander Global AB regarding your use of our website, services, and any related content or materials.
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
                    <h2 className="text-2xl font-bold text-white">Definitions</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div className="grid gap-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;</h4>
                        <p className="text-sm">Refers to Bromander Global AB, a Swedish limited liability company.</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">&quot;Consumer&quot;</h4>
                        <p className="text-sm">A natural person acting for purposes outside their trade, business, craft, or profession (as defined by EU Consumer Rights Directive).</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">&quot;Services&quot;</h4>
                        <p className="text-sm">Our corporate website, information services, and any related digital services provided by Bromander Global AB.</p>
                      </div>
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">&quot;Distance Contract&quot;</h4>
                        <p className="text-sm">Any contract concluded between us and a consumer under an organized distance sales scheme without simultaneous physical presence (per Swedish Distance Contracts Act).</p>
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
                    <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Legal Agreement</h4>
                      <p className="text-sm">By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Age and Capacity Requirements</h3>
                      <ul className="text-sm space-y-2 list-disc list-inside">
                        <li>You must be at least 18 years old to enter into these Terms</li>
                        <li>For users under 18, a parent or legal guardian must accept these Terms on your behalf</li>
                        <li>You must have the legal capacity to enter into binding contracts under Swedish law</li>
                        <li>If you represent a business, you confirm you have authority to bind that entity to these Terms</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Consumer Rights Notice (EU/Sweden)</h3>
                      <p className="text-sm">If you are a consumer (natural person acting outside your business), you have specific rights under EU and Swedish consumer protection laws that cannot be waived by these Terms. These rights take precedence over any conflicting terms.</p>
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
                    <h2 className="text-2xl font-bold text-white">Our Services</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>Bromander Global AB provides the following services through our corporate website:</p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🏢 Corporate Information Services</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Company information and investor relations</li>
                          <li>Portfolio company overviews and updates</li>
                          <li>Business contact and inquiry handling</li>
                          <li>News and announcements</li>
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">📧 Communication Services</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Contact forms and inquiry processing</li>
                          <li>Email communications and newsletters (with consent)</li>
                          <li>Customer support and assistance</li>
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🔗 Portfolio Company Gateway</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Links and redirects to portfolio company services</li>
                          <li>Integration points for subsidiary platforms</li>
                          <li>Consolidated privacy and legal information</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Portfolio Companies</h4>
                      <p className="text-sm mb-3">Each portfolio company operates independently with separate terms:</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span><strong>AI Reliance Tracker:</strong> Digital wellness platform</span>
                          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                            Terms <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span><strong>Smart Bookkeeping:</strong> Financial management platform</span>
                          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                            Terms <ExternalLink className="w-3 h-3" />
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
                    <h2 className="text-2xl font-bold text-white">User Obligations</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>As a user of our services, you agree to comply with the following obligations:</p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">✅ Permitted Uses</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Access and use our services for legitimate business or personal purposes</li>
                          <li>Provide accurate and complete information when requested</li>
                          <li>Maintain the confidentiality of any access credentials</li>
                          <li>Respect intellectual property rights and applicable laws</li>
                          <li>Use our services in good faith and in accordance with these Terms</li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">📋 Information Accuracy</h4>
                        <p className="text-sm">You warrant that all information you provide is accurate, complete, and up-to-date. You must promptly notify us of any changes to your information.</p>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🔐 Security Responsibilities</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Maintain reasonable security measures for your devices and connections</li>
                          <li>Immediately report any suspected unauthorized access</li>
                          <li>Do not share access credentials with unauthorized parties</li>
                          <li>Use updated and secure browsers and software</li>
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
                    <h2 className="text-2xl font-bold text-white">Prohibited Use</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>You are strictly prohibited from using our services for the following purposes:</p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Illegal Activities
                        </h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Any illegal activity under Swedish, EU, or applicable international law</li>
                          <li>Fraud, money laundering, or financial crimes</li>
                          <li>Harassment, threats, or intimidation of individuals</li>
                          <li>Violation of intellectual property rights</li>
                          <li>Distribution of illegal or harmful content</li>
                        </ul>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">⚠️ Technical Misuse</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Attempting to gain unauthorized access to our systems</li>
                          <li>Interfering with or disrupting our services or servers</li>
                          <li>Reverse engineering, decompiling, or disassembling our software</li>
                          <li>Using automated systems (bots, scrapers) without permission</li>
                          <li>Transmitting malware, viruses, or harmful code</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">⚡ Commercial Restrictions</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Commercial use without explicit written permission</li>
                          <li>Reselling or redistributing our services</li>
                          <li>Using our services to compete with our business</li>
                          <li>Bulk data extraction or systematic downloading</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Enforcement</h4>
                      <p className="text-sm">Violation of these prohibitions may result in immediate termination of your access, legal action, and cooperation with law enforcement authorities.</p>
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
                    <h2 className="text-2xl font-bold text-white">Intellectual Property Rights</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🏢 Our Ownership Rights</h4>
                        <p className="text-sm mb-2">All intellectual property rights in and to our services belong to Bromander Global AB or our licensors, including:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Trademarks, service marks, and trade names (&quot;Bromander Global,&quot; logos, etc.)</li>
                          <li>Copyrights in website content, text, graphics, images, and software</li>
                          <li>Patents and patent applications</li>
                          <li>Trade secrets and proprietary business information</li>
                          <li>Database rights and compilation rights</li>
                        </ul>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">✅ Your License Rights</h4>
                        <p className="text-sm mb-2">We grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Access and view our website content for personal or business purposes</li>
                          <li>Download and print content for non-commercial use (with attribution)</li>
                          <li>Contact us using provided communication channels</li>
                          <li>Link to our website from your own website (no deep-linking without permission)</li>
                        </ul>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🚫 Restrictions</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>No modification, reproduction, or creation of derivative works</li>
                          <li>No commercial use without explicit written permission</li>
                          <li>No reverse engineering of any software or systems</li>
                          <li>No removal of copyright notices or attribution</li>
                          <li>No use of our trademarks without authorization</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">User Content & Feedback</h4>
                      <p className="text-sm">Any content, feedback, or suggestions you provide to us become our property and may be used freely for any purpose without compensation or attribution.</p>
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
                    <h2 className="text-2xl font-bold text-white">EU Consumer Rights</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>If you are a consumer under EU/Swedish law, you have specific rights that cannot be waived:</p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Right of Withdrawal (14 Days)
                        </h4>
                        <p className="text-sm mb-2">For distance contracts, you have the right to cancel within 14 days without giving reasons.</p>
                        <div className="text-sm space-y-1">
                          <p><strong>How to withdraw:</strong> Send clear notice to legal@bromanderglobal.com</p>
                          <p><strong>Deadline:</strong> 14 days from contract conclusion or service commencement</p>
                          <p><strong>Effects:</strong> We will reimburse payments within 14 days of receiving withdrawal</p>
                        </div>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Pre-Contractual Information Rights</h4>
                        <p className="text-sm mb-2">Before entering any contract, you have the right to receive:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Main characteristics of services</li>
                          <li>Total price including taxes and fees</li>
                          <li>Duration and termination conditions</li>
                          <li>Complaint handling and dispute resolution information</li>
                        </ul>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Unfair Terms Protection</h4>
                        <p className="text-sm">Any terms that create significant imbalance in your disadvantage may be deemed unfair under EU Directive 93/13/EEC and Swedish Consumer Contracts Act. Such terms are not binding on you.</p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Consumer Disputes</h4>
                        <p className="text-sm mb-2">For consumer disputes, you may contact:</p>
                        <ul className="text-sm space-y-1">
                          <li><strong>Swedish Consumer Agency:</strong> konsumentverket.se</li>
                          <li><strong>EU Online Dispute Resolution:</strong> ec.europa.eu/consumers/odr</li>
                          <li><strong>National Board for Consumer Disputes:</strong> arn.se</li>
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
                    <h2 className="text-2xl font-bold text-white">Liability & Warranties</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Consumer Rights Override</h4>
                      <p className="text-sm">Nothing in these Terms limits your statutory consumer rights under Swedish or EU law. In case of conflict, consumer protection laws take precedence.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Service Warranties</h4>
                        <p className="text-sm mb-2">Our services are provided &quot;as is&quot; but we warrant that:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Services will be provided with reasonable skill and care</li>
                          <li>Information provided will be materially accurate when published</li>
                          <li>We have the right to provide the services described</li>
                          <li>Services will comply with applicable Swedish and EU laws</li>
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Liability Limitations (Business Users)</h4>
                        <p className="text-sm mb-2">For business users (non-consumers), our liability is limited as follows:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Total liability capped at fees paid in 12 months preceding the claim</li>
                          <li>No liability for indirect, consequential, or special damages</li>
                          <li>No liability for business interruption or lost profits</li>
                          <li>Claims must be brought within 2 years of the cause of action</li>
                        </ul>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Unlimited Liability</h4>
                        <p className="text-sm">We do not limit liability for death, personal injury, fraud, or any other liability that cannot be limited under Swedish law.</p>
                      </div>

                      <div className="border border-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Third-Party Content</h4>
                        <p className="text-sm">We are not responsible for third-party websites, content, or services accessible through our platform. Links are provided for convenience only.</p>
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
                    <h2 className="text-2xl font-bold text-white">Termination</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Termination by Us</h4>
                        <p className="text-sm mb-2">We may terminate or suspend your access immediately for:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Violation of these Terms or applicable laws</li>
                          <li>Fraudulent, abusive, or harmful behavior</li>
                          <li>Technical or security reasons</li>
                          <li>Court orders or legal requirements</li>
                        </ul>
                        <p className="text-sm mt-2">For consumers, we will provide reasonable notice except in urgent situations.</p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Termination by You</h4>
                        <p className="text-sm mb-2">You may terminate your use of our services at any time by:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Discontinuing use of our website and services</li>
                          <li>Sending written notice to legal@bromanderglobal.com</li>
                          <li>Exercising withdrawal rights (consumers only)</li>
                        </ul>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Effects of Termination</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>All rights and licenses granted to you will cease</li>
                          <li>Outstanding obligations remain in effect</li>
                          <li>We may retain information as required by law or policy</li>
                          <li>Certain provisions survive termination (IP, liability, governing law)</li>
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
                    <h2 className="text-2xl font-bold text-white">Changes to Terms</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Modification Rights</h4>
                        <p className="text-sm">We may update these Terms to reflect changes in law, regulation, business practices, or service improvements. Updates will be published on this page with a revised &quot;last updated&quot; date.</p>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Consumer Protection (EU/Swedish Law)</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Minor Changes:</strong> Take effect immediately upon posting</p>
                          <p><strong>Substantial Changes:</strong> 30 days advance notice via email or prominent website notice</p>
                          <p><strong>Unfavorable Changes:</strong> You have the right to terminate without penalty</p>
                          <p><strong>Continued Use:</strong> Constitutes acceptance, but does not waive consumer rights</p>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Business Users</h4>
                        <p className="text-sm">For business users, continued use after posting constitutes acceptance of revised Terms. We recommend reviewing Terms periodically.</p>
                      </div>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Version Control</h4>
                      <p className="text-sm">Previous versions are archived and available upon request. The current version is always available at this URL with the effective date clearly displayed.</p>
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
                    <h2 className="text-2xl font-bold text-white">Governing Law & Dispute Resolution</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">🇸🇪 Applicable Law</h4>
                        <p className="text-sm mb-2">These Terms are governed by and construed in accordance with:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Swedish law (primarily the Contracts Act and Consumer Contracts Act)</li>
                          <li>EU Directives and Regulations (where applicable)</li>
                          <li>GDPR and other data protection regulations</li>
                          <li>Swedish Consumer Protection legislation</li>
                        </ul>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Consumer Dispute Resolution</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>First Step:</strong> Contact us directly at legal@bromanderglobal.com</p>
                          <p><strong>Swedish Consumers:</strong> National Board for Consumer Disputes (ARN) - arn.se</p>
                          <p><strong>EU Consumers:</strong> EU Online Dispute Resolution Platform - ec.europa.eu/consumers/odr</p>
                          <p><strong>General Consumers:</strong> Swedish Consumer Agency - konsumentverket.se</p>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Business Disputes</h4>
                        <div className="text-sm space-y-2">
                          <p><strong>Jurisdiction:</strong> Swedish courts, with Stockholm District Court as first instance</p>
                          <p><strong>Alternative Resolution:</strong> Stockholm Chamber of Commerce Arbitration Institute</p>
                          <p><strong>Language:</strong> Proceedings in Swedish or English as agreed</p>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Limitation Period</h4>
                        <p className="text-sm">Claims must be brought within the limitation periods specified by Swedish law (generally 3 years for consumer claims, 10 years for contractual claims).</p>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Consumer Rights Override</h4>
                      <p className="text-sm">Nothing in these dispute resolution provisions limits your statutory consumer rights, including rights to bring proceedings in your country of residence.</p>
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
                    <h2 className="text-2xl font-bold text-white">Contact & Support</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p>For questions about these Terms of Service or legal matters, please contact us:</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Legal & Terms</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>legal@bromanderglobal.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-blue-500" />
                              <span>+46 70 123 45 67 (Business hours)</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">General Inquiries</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span>hello@bromanderglobal.com</span>
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
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Consumer Assistance</h4>
                          <div className="text-sm space-y-2">
                            <p>For consumer complaints and disputes:</p>
                            <div className="space-y-1">
                              <p><strong>Swedish Consumer Agency:</strong> konsumentverket.se</p>
                              <p><strong>EU ODR Platform:</strong> ec.europa.eu/consumers/odr</p>
                              <p><strong>ARN (Consumer Disputes):</strong> arn.se</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Response Times</h4>
                          <div className="text-sm space-y-1">
                            <p><strong>Legal inquiries:</strong> 5 business days</p>
                            <p><strong>General questions:</strong> 2 business days</p>
                            <p><strong>Consumer complaints:</strong> 10 business days</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Regulatory Information</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>Company Registration:</strong> Swedish Companies Registration Office</p>
                          <p><strong>VAT Registration:</strong> Swedish Tax Agency</p>
                          <p><strong>Data Protection:</strong> Swedish Authority for Privacy Protection (IMY)</p>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Terms Effective</h4>
                        <p className="text-sm">These Terms are effective as of the last updated date and remain in effect until modified or terminated in accordance with these provisions.</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Accessibility</h4>
                      <p className="text-sm">If you need these Terms in an alternative format for accessibility reasons, please contact us and we will provide them in a suitable format within 5 business days.</p>
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