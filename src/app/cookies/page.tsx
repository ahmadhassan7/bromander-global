'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, BarChart3, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function CookiePolicyPage() {
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
                  <Cookie className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-white">COOKIE </span>
                <span className="gradient-text-blue">POLICY</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                How we use cookies and similar technologies on our website
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
                    <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
                    </p>
                    <p>
                      This Cookie Policy explains how Bromander Global uses cookies and similar technologies on our corporate website. For information about cookies used by our portfolio companies, please refer to their individual privacy policies.
                    </p>
                  </div>
                </motion.section>

                {/* Types of Cookies */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Types of Cookies We Use</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Essential Cookies</h3>
                      <p className="mb-3">These cookies are necessary for our website to function properly. They enable basic features like page navigation and access to secure areas.</p>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                        <p className="text-sm text-gray-400">Examples: Session management, security tokens, load balancing</p>
                        <p className="text-sm text-blue-400 mt-2">Duration: Session or up to 1 year</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h3>
                      <p className="mb-3">These cookies help us understand how visitors interact with our website by collecting anonymous information about usage patterns.</p>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                        <p className="text-sm text-gray-400">Examples: Google Analytics, page views, bounce rate, traffic sources</p>
                        <p className="text-sm text-blue-400 mt-2">Duration: Up to 2 years</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Functional Cookies</h3>
                      <p className="mb-3">These cookies remember your preferences and choices to provide you with a more personalized experience.</p>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                        <p className="text-sm text-gray-400">Examples: Language preferences, theme settings, form data</p>
                        <p className="text-sm text-blue-400 mt-2">Duration: Up to 1 year</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Third-Party Cookies */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Third-Party Services</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>We use carefully selected third-party services that may set their own cookies:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                        <p className="text-sm text-gray-400">Helps us understand website usage and improve user experience</p>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Content Delivery Network</h4>
                        <p className="text-sm text-gray-400">Ensures fast loading times and website performance</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Managing Cookies */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                      <p className="mb-3">You can control cookies through your browser settings:</p>
                      <ul className="space-y-2 list-disc list-inside text-sm">
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                        <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Impact of Disabling Cookies</h3>
                      <p>Please note that disabling certain cookies may affect website functionality:</p>
                      <ul className="space-y-1 list-disc list-inside text-sm mt-2">
                        <li>Essential cookies: May prevent basic website functions</li>
                        <li>Analytics cookies: Won't affect functionality but we can't improve user experience</li>
                        <li>Functional cookies: May require re-entering preferences on each visit</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Data Security */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">Cookie Security & Privacy</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Data Protection</h3>
                      <p>We implement appropriate security measures to protect cookie data and ensure it's only used for its intended purpose.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Anonymous Data</h3>
                      <p>Analytics cookies collect anonymous data that cannot be used to identify individual users.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Regular Review</h3>
                      <p>We regularly review our cookie usage to ensure compliance with privacy regulations and best practices.</p>
                    </div>
                  </div>
                </motion.section>

                {/* Legal Basis */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Legal Basis for Cookie Use</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                        <p className="text-sm text-gray-400">Legitimate interest - necessary for website functionality</p>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                        <p className="text-sm text-gray-400">Legitimate interest - improving user experience</p>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Functional Cookies</h4>
                        <p className="text-sm text-gray-400">Implied consent - enhancing user experience</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Updates */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Policy Updates</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons.
                    </p>
                    <p>
                      When we make significant changes, we will update the "Last updated" date at the top of this policy and may provide additional notice through our website.
                    </p>
                  </div>
                </motion.section>

                {/* Contact */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      If you have questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> privacy@bromanderglobal.com</p>
                      <p><strong>General Inquiries:</strong> hello@bromanderglobal.com</p>
                      <p><strong>Address:</strong> Bromander Global, Stockholm, Sweden</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">
                      By continuing to use our website, you acknowledge that you have read and understood this Cookie Policy.
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