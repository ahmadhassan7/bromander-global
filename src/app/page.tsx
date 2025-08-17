'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Globe,
  Brain,
  Calculator,
  Lightbulb,
  Target,
  BarChart3,
  Rocket,
  Heart,
  Building,
  Star,
  Lock
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import InfiniteScroll from '@/components/InfiniteScroll';
import HeroAlternative from '@/components/HeroAlternative';
import CardSwap, { Card } from '@/components/CardSwap';
import SpotlightCard from '@/components/SpotlightCard';


export default function Home() {
  // Toggle between hero versions:
  // Set to true to use the LightRays hero, false for the original hero
  const USE_ALTERNATIVE_HERO = true;
  const scrollItems = [
    { content: (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
          <Building className="w-6 h-6 text-blue-500" />
        </div>
        <span className="text-sm uppercase tracking-wider">Technology Holding</span>
      </div>
    )},
    { content: (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
          <Brain className="w-6 h-6 text-cyan-500" />
        </div>
        <span className="text-sm uppercase tracking-wider">AI Tracker</span>
      </div>
    )},
    { content: (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-blue-500" />
        </div>
        <span className="text-sm uppercase tracking-wider">Smart Bookkeeping</span>
      </div>
    )},
    { content: (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-cyan-500" />
        </div>
        <span className="text-sm uppercase tracking-wider">Strategic Ownership</span>
      </div>
    )},
    { content: (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-blue-500" />
        </div>
        <span className="text-sm uppercase tracking-wider">Sustainable Growth</span>
      </div>
    )},
    { content: (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
          <Shield className="w-6 h-6 text-cyan-500" />
        </div>
        <span className="text-sm uppercase tracking-wider">Privacy First</span>
      </div>
    )},
    { content: (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
          <Heart className="w-6 h-6 text-blue-500" />
        </div>
        <span className="text-sm uppercase tracking-wider">Human-Centered</span>
      </div>
    )},
    { content: (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
          <Lightbulb className="w-6 h-6 text-cyan-500" />
        </div>
        <span className="text-sm uppercase tracking-wider">Innovation Focus</span>
      </div>
    )},
  ];

  return (
    <>
      <SmoothScroll />
      <Navbar />
      
      {/* Toggle between two hero versions */}
      {USE_ALTERNATIVE_HERO ? (
        <HeroAlternative />
      ) : (
        /* Original Hero Section */
        <section className="relative min-h-screen overflow-hidden bg-black">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black" />
        </div>

        {/* Animated Text Background - Desktop Only */}
        <div className="absolute inset-0 overflow-hidden opacity-5 hidden lg:block">
          <motion.div
            animate={{ x: [-1000, 1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 whitespace-nowrap text-[150px] xl:text-[200px] font-black text-white"
          >
            GLOBAL • PORTFOLIO • TECHNOLOGY • 
          </motion.div>
          <motion.div
            animate={{ x: [1000, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 whitespace-nowrap text-[150px] xl:text-[200px] font-black text-white"
          >
            HOLDING • COMPANY • INNOVATION • 
          </motion.div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 text-center lg:text-left"
              >
                <div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-8 mx-auto lg:mx-0"
                  />
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6">
                    <span className="block text-white mb-2">BROMANDER</span>
                    <span className="block gradient-text-blue">GLOBAL</span>
                  </h1>
                  
                  <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    A technology holding company that owns and operates innovative digital products. 
                    We believe in creating solutions that enhance human potential and improve digital wellness.
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-3">
                  {[
                    "Technology Holding Company",
                    "Product Portfolio Management", 
                    "Innovation Investment"
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="flex items-center gap-3 justify-center lg:justify-start"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="#products" 
                      className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider overflow-hidden rounded-xl"
                    >
                      <span className="relative z-10">Our Portfolio</span>
                      <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/contact" 
                      className="group relative inline-flex items-center gap-3 px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-wider hover:border-blue-500 transition-all overflow-hidden rounded-xl"
                    >
                      <span className="relative z-10">Contact Us</span>
                      <Globe className="relative z-10 w-5 h-5" />
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0"
              >
                <InfiniteScroll
                  items={scrollItems}
                  width="24rem"
                  maxHeight="600px"
                  itemMinHeight={120}
                  autoplay={true}
                  autoplaySpeed={0.5}
                  autoplayDirection="down"
                  pauseOnHover={true}
                  isTilted={true}
                  tiltDirection="left"
                  negativeMargin="-1rem"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-20 fill-black">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" opacity="0.5" />
            <path d="M0,70 C360,20 1080,120 1440,70 L1440,100 L0,100 Z" opacity="0.3" />
          </svg>
        </div>
      </section>
      )}

      {/* Products Section */}
      <section id="products" className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
                  <span className="text-white">Owned By</span>
                  <br />
                  <span className="gradient-text-blue">Bromander Global</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                  Innovative digital products that enhance human potential and business efficiency through thoughtful technology and design.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Privacy First</h3>
                    <p className="text-gray-400 text-xs md:text-sm">
                      All our products are built with privacy by design and robust security measures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Human-Centered</h3>
                    <p className="text-gray-400 text-xs md:text-sm">
                      We invest in products that genuinely enhance human capabilities and well-being.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Sustainable Growth</h3>
                    <p className="text-gray-400 text-xs md:text-sm">
                      Building lasting value for users through continuous innovation and improvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 md:pt-6">
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors group"
                >
                  Learn more about our mission
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Cards - Window Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
            >
              <div className="relative w-full h-full flex justify-center items-center">
                <CardSwap
                  width={380}
                  height={280}
                  cardDistance={35}
                  verticalDistance={45}
                  delay={4500}
                  pauseOnHover={true}
                  skewAmount={2}
                  easing="elastic"
                >
                  {/* AI Reliance Tracker Window */}
                  <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700 shadow-2xl">
                    {/* Window Title Bar */}
                    <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 px-3 sm:px-4 py-2.5 border-b border-purple-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 bg-red-500 rounded-full opacity-90"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-90"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full opacity-90"></div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300 ml-2 font-medium">AI Reliance Tracker</span>
                      </div>
                      <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    {/* Window Content */}
                    <div className="p-5 sm:p-6 md:p-8">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                          <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white">AI Tracker</h3>
                          <p className="text-purple-400 text-xs sm:text-sm">Digital Wellness Tool</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                        Monitor your AI usage patterns and maintain healthy technology relationships with our privacy-first tracking system.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-md text-xs sm:text-sm text-purple-300">Analytics</span>
                        <span className="px-2.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-md text-xs sm:text-sm text-purple-300">Privacy</span>
                        <span className="px-2.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-md text-xs sm:text-sm text-purple-300">Insights</span>
                      </div>
                    </div>
                  </Card>

                  {/* Smart Bookkeeping Window */}
                  <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700 shadow-2xl">
                    {/* Window Title Bar */}
                    <div className="bg-gradient-to-r from-cyan-900/50 to-cyan-800/50 px-3 sm:px-4 py-2.5 border-b border-cyan-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 bg-red-500 rounded-full opacity-90"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-90"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full opacity-90"></div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300 ml-2 font-medium">Smart Bookkeeping</span>
                      </div>
                      <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    </div>
                    {/* Window Content */}
                    <div className="p-5 sm:p-6 md:p-8">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <Calculator className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white">Bookkeeping AI</h3>
                          <p className="text-cyan-400 text-xs sm:text-sm">Financial Assistant</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                        Intelligent financial management with automated categorization, real-time insights, and smart reporting.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-xs sm:text-sm text-cyan-300">AI-Powered</span>
                        <span className="px-2.5 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-xs sm:text-sm text-cyan-300">Real-time</span>
                        <span className="px-2.5 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-xs sm:text-sm text-cyan-300">Reports</span>
                      </div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative section-padding bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text-blue">Vision</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Building the future through strategic technology ownership and responsible innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Strategic Ownership",
                description: "We identify and acquire innovative digital products with strong growth potential and user impact.",
                icon: Target
              },
              {
                title: "Operational Excellence",
                description: "Our portfolio companies benefit from shared resources, expertise, and strategic guidance.",
                icon: Award
              },
              {
                title: "Sustainable Growth",
                description: "We focus on long-term value creation while maintaining the unique identity of each product.",
                icon: TrendingUp
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/[0.02] border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text-blue">Principles</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              The core values that guide our investment decisions and operational approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Human-Centered Innovation",
                description: "We invest in products that genuinely enhance human capabilities and well-being.",
                icon: Heart,
                color: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-500",
                spotlightColor: "rgba(168, 85, 247, 0.15)"
              },
              {
                title: "Digital Wellness Focus",
                description: "Our portfolio prioritizes healthy technology relationships and cognitive independence.",
                icon: Shield,
                color: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-blue-500",
                spotlightColor: "rgba(59, 130, 246, 0.15)"
              },
              {
                title: "Long-term Value Creation",
                description: "We build sustainable businesses that create lasting value for users and stakeholders.",
                icon: TrendingUp,
                color: "from-green-500/20 to-emerald-500/20",
                iconColor: "text-green-500",
                spotlightColor: "rgba(34, 197, 94, 0.15)"
              },
              {
                title: "Privacy & Security First",
                description: "All our products are built with privacy by design and robust security measures.",
                icon: Lock,
                color: "from-red-500/20 to-orange-500/20",
                iconColor: "text-red-500",
                spotlightColor: "rgba(239, 68, 68, 0.15)"
              },
              {
                title: "Transparent Operations",
                description: "We maintain clear communication about our ownership and operational practices.",
                icon: Globe,
                color: "from-cyan-500/20 to-blue-500/20",
                iconColor: "text-cyan-500",
                spotlightColor: "rgba(6, 182, 212, 0.15)"
              },
              {
                title: "Responsible Growth",
                description: "We scale thoughtfully, ensuring our products remain true to their core mission.",
                icon: Target,
                color: "from-amber-500/20 to-yellow-500/20",
                iconColor: "text-amber-500",
                spotlightColor: "rgba(245, 158, 11, 0.15)"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard 
                  className="h-full" 
                  spotlightColor={value.spotlightColor}
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-5`}>
                      <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-black to-black" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="block text-white mb-2">READY TO</span>
                <span className="block gradient-text-blue">EXPLORE?</span>
              </h2>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Discover our innovative products and see how they can transform your digital experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="#products" 
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider overflow-hidden rounded-xl"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/about" 
                  className="group relative inline-flex items-center gap-3 px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-wider hover:border-blue-500 transition-all overflow-hidden rounded-xl"
                >
                  <span className="relative z-10">About Us</span>
                  <Building className="relative z-10 w-5 h-5" />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}