'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Globe } from 'lucide-react';

declare global {
  interface Window {
    openCookieSettings?: () => void;
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">
      {/* Large Animated Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="text-[20vw] font-black text-white/[0.03] leading-none tracking-tighter select-none whitespace-nowrap"
        >
          BROMANDER GLOBAL
        </motion.div>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: 10
          }}
          className="absolute text-[20vw] font-black text-white/[0.03] leading-none tracking-tighter select-none whitespace-nowrap"
        >
          BROMANDER GLOBAL
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Content */}
      <div className="relative z-10 container-custom px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white">BROMANDER</h2>
                  <p className="text-lg text-gray-400 tracking-wider">GLOBAL</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                A technology holding company that owns and operates innovative digital products focused on enhancing human potential and digital wellness.
              </p>
              
              {/* CTA */}
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 text-white hover:text-blue-500 transition-colors group"
              >
                <span className="text-xl font-bold">GET IN TOUCH</span>
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-white font-bold text-sm tracking-wider mb-6">OUR PRODUCTS</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/products/ai-tracker" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      AI Reliance Tracker
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/bookkeeping" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      Smart Bookkeeping
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-white font-bold text-sm tracking-wider mb-6">COMPANY</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-white font-bold text-sm tracking-wider mb-6">CONTACT</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span>hello@bromanderglobal.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span>+46 70 123 45 67</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span>Stockholm, Sweden</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-8">
              <p className="text-gray-500 text-sm">
                © {currentYear} Bromander Global. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined' && window.openCookieSettings) {
                    window.openCookieSettings();
                  }
                }}
                className="text-gray-500 hover:text-white transition-colors"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600" />
    </footer>
  );
}