'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SmoothScroll />
      <Navbar />
      
      <section className="relative min-h-screen bg-black pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-cyan-950/20" />
          <div className="absolute inset-0 pattern-dots opacity-10" />
        </div>

        <div className="relative z-10 section-padding">
          <div className="container-custom">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-white">GET IN </span>
                <span className="gradient-text-blue">TOUCH</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                Have questions about our company or portfolio? 
                We&apos;d love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your inquiry or how we can assist you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Connect with Bromander Global for corporate inquiries, partnership opportunities, 
                    or questions about our portfolio companies.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-400">support@bromanderglobal.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Location</h3>
                      <p className="text-gray-400">Örebro, Sweden</p>
                    </div>
                  </motion.div>
                </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM CET</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-white">10:00 AM - 2:00 PM CET</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <motion.a
                      href="/products/ai-tracker"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      AI Reliance Tracker
                    </motion.a>
                    <motion.a
                      href="/products/bookkeeping"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Smart Bookkeeping
                    </motion.a>
                    <motion.a
                      href="/about"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      About Us
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}