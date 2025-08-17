'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe, FileText, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      
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
                How we protect and handle your personal information across our portfolio companies
              </p>
              <p className="text-gray-500 mt-4">Last updated: August 16, 2025</p>
            </motion.div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {/* Introduction */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Introduction</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Bromander Global ("we," "our," or "us") is a technology holding company that owns and operates digital products including AI Reliance Tracker and Smart Bookkeeping. We are committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your personal information.
                    </p>
                    <p>
                      This Privacy Policy applies to our corporate website and provides an overview of our privacy practices. Each of our portfolio companies maintains its own specific privacy policy for their respective products and services.
                    </p>
                  </div>
                </motion.section>

                {/* Information We Collect */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                      <p>When you contact us through our website, we may collect your name, email address, company information, and message content.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Website Analytics</h3>
                      <p>We collect standard web analytics data including IP addresses, browser information, device type, and website usage patterns to improve our services.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Cookies and Tracking</h3>
                      <p>We use essential cookies for website functionality and analytics cookies to understand how visitors interact with our site.</p>
                    </div>
                  </div>
                </motion.section>

                {/* How We Use Information */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Improve our website and user experience</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Communicate about our portfolio companies and their products</li>
                      <li>Comply with legal obligations and protect our rights</li>
                    </ul>
                  </div>
                </motion.section>

                {/* Data Protection */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Security Measures</h3>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Encryption of data in transit and at rest</li>
                        <li>Regular security assessments and updates</li>
                        <li>Access controls and authentication protocols</li>
                        <li>Employee training on data protection practices</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Your Rights */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Your Rights</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li><strong>Access:</strong> Request access to your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us at <strong>privacy@bromanderglobal.com</strong>
                    </p>
                  </div>
                </motion.section>

                {/* Portfolio Companies */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Portfolio Company Privacy Policies</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Each of our portfolio companies operates independently and maintains its own privacy policy for their specific products and services:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                        <h3 className="font-semibold text-white mb-2">AI Reliance Tracker</h3>
                        <p className="text-sm text-gray-400">Privacy-first digital wellness platform with local data storage</p>
                      </div>
                      <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                        <h3 className="font-semibold text-white mb-2">Smart Bookkeeping</h3>
                        <p className="text-sm text-gray-400">Financial management platform with bank-level security</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Contact */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      If you have questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> privacy@bromanderglobal.com</p>
                      <p><strong>Address:</strong> Bromander Global, Stockholm, Sweden</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">
                      We reserve the right to update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last updated" date.
                    </p>
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