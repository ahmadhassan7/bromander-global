'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Users, AlertTriangle, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function TermsOfServicePage() {
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
                  <Scale className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-white">TERMS OF </span>
                <span className="gradient-text-blue">SERVICE</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Terms and conditions governing the use of Bromander Global services and website
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
                    <FileText className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Introduction</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Welcome to Bromander Global. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. Bromander Global is a technology holding company that owns and operates digital products including AI Reliance Tracker and Smart Bookkeeping.
                    </p>
                    <p>
                      By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                    </p>
                  </div>
                </motion.section>

                {/* Services Description */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Our Services</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Bromander Global provides corporate information about our holding company and portfolio. Each of our portfolio companies operates independently and maintains its own terms of service:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">AI Reliance Tracker</h3>
                        <p>Digital wellness platform with separate terms governing user accounts and data.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Smart Bookkeeping</h3>
                        <p>Financial management platform with separate terms governing business accounts and financial data.</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Acceptable Use */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Acceptable Use</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Use our services for any illegal or unauthorized purpose</li>
                      <li>Attempt to gain unauthorized access to our systems or networks</li>
                      <li>Interfere with or disrupt our services or servers</li>
                      <li>Upload or transmit malicious code or harmful content</li>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights of others</li>
                      <li>Engage in harassment, abuse, or harmful behavior toward other users</li>
                    </ul>
                  </div>
                </motion.section>

                {/* Intellectual Property */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Our Rights</h3>
                      <p>All content on this website, including text, graphics, logos, and software, is owned by Bromander Global or our licensors and is protected by copyright and other intellectual property laws.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Your Rights</h3>
                      <p>We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal and business purposes in accordance with these Terms.</p>
                    </div>
                  </div>
                </motion.section>

                {/* Disclaimers */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    <h2 className="text-2xl font-bold text-white">Disclaimers & Limitations</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Service Availability</h3>
                      <p>Our services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted or error-free service.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Limitation of Liability</h3>
                      <p>To the maximum extent permitted by law, Bromander Global shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Third-Party Links</h3>
                      <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.</p>
                    </div>
                  </div>
                </motion.section>

                {/* Account Terms */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Account Terms</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                      <p>When you contact us through our website, you agree to provide accurate and complete information.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Communication</h3>
                      <p>By providing your contact information, you consent to receive communications from us regarding your inquiries and our services.</p>
                    </div>
                  </div>
                </motion.section>

                {/* Changes to Terms */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of our services after changes are posted constitutes acceptance of the new Terms.
                    </p>
                    <p>
                      For significant changes, we may provide additional notice through our website or other communication channels.
                    </p>
                  </div>
                </motion.section>

                {/* Governing Law */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Governing Law & Disputes</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Jurisdiction</h3>
                      <p>These Terms are governed by the laws of Sweden. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of Swedish courts.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Dispute Resolution</h3>
                      <p>We encourage resolving disputes through direct communication. Please contact us at <strong>legal@bromanderglobal.com</strong> for any legal concerns.</p>
                    </div>
                  </div>
                </motion.section>

                {/* Contact */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      If you have questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> legal@bromanderglobal.com</p>
                      <p><strong>General Inquiries:</strong> hello@bromanderglobal.com</p>
                      <p><strong>Address:</strong> Bromander Global, Stockholm, Sweden</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">
                      These Terms of Service are effective as of the last updated date and will remain in effect until modified or terminated.
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