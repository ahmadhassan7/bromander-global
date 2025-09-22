'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import CountUp from 'react-countup';
import { 
  ArrowRight, 
  Globe,
  Brain,
  Calculator,
  Building,
  Star
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const stats = [
  { label: 'Products Owned', value: 2, suffix: '' },
  { label: 'Countries', value: 25, suffix: '+' },
  { label: 'Combined Users', value: 30, suffix: 'K+' },
  { label: 'Years Operating', value: 5, suffix: '+' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: 'Shinery has helped our team maintain better digital wellness and cognitive independence. Incredible product.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder at DataCorp',
    content: 'Smart Bookkeeping transformed our financial management. The AI automation is remarkable and saves us countless hours.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO at InnovateLab',
    content: 'The products in Bromander Global\'s portfolio show incredible attention to detail and user experience. Well-built solutions.',
    rating: 5,
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SmoothScroll />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black" />
        </div>

        {/* Animated Text Background - Desktop Only */}
        <motion.div 
          className="absolute inset-0 overflow-hidden opacity-5 hidden lg:block"
          style={{ y }}>
          <motion.div
            animate={{ x: [-1000, 1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 whitespace-nowrap text-[150px] xl:text-[200px] font-black text-white"
          >
            INNOVATE • TRANSFORM • ELEVATE • 
          </motion.div>
          <motion.div
            animate={{ x: [1000, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 whitespace-nowrap text-[150px] xl:text-[200px] font-black text-white"
          >
            BUILD • SCALE • GROW • DISRUPT • 
          </motion.div>
        </motion.div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
              {/* Content */}
              <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                {/* Animated Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto lg:mx-0"
                />

                {/* Title */}
                <div className="space-y-2">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
                  >
                    <span className="block text-white">BROMANDER</span>
                    <span className="block gradient-text-blue">GLOBAL</span>
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  A technology holding company that owns and operates innovative digital products. We believe in creating solutions that enhance human potential and improve digital wellness.
                </motion.p>

                {/* Feature List */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="space-y-3"
                >
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
                      <span className="text-gray-300 text-lg">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                >
                  <Link 
                    href="#products" 
                    className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider overflow-hidden hover:text-white transition-colors text-center rounded-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <span className="relative z-10">Our Portfolio</span>
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 border-2 border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-colors text-center rounded-lg"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className="flex items-center justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                >
                  {/* Simplified Visual */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Outer Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
                    />
                    
                    {/* Middle Ring */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-8 border border-cyan-500/20 rounded-full"
                    />
                    
                    {/* Core */}
                    <div className="relative w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Complex 3D Animation Section */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative w-96 h-96"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Multiple Rotating Frames */}
              <motion.div
                animate={{ 
                  rotateY: 360,
                  rotateX: 360
                }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 border-2 border-blue-500/30" />
                <div className="absolute inset-0 border-2 border-cyan-500/30 rotate-45" />
                <div className="absolute inset-0 border-2 border-emerald-500/30 rotate-90" />
              </motion.div>

              {/* Second Layer Rotating Opposite Direction */}
              <motion.div
                animate={{ 
                  rotateY: -360,
                  rotateZ: 360
                }}
                transition={{ 
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-8"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 border border-blue-500/20" />
                <div className="absolute inset-0 border border-cyan-500/20 rotate-45" />
              </motion.div>

              {/* Third Layer */}
              <motion.div
                animate={{ 
                  rotateX: 360,
                  rotateZ: -360
                }}
                transition={{ 
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-16"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 border border-emerald-500/20" />
                <div className="absolute inset-0 border border-blue-500/20 rotate-45" />
              </motion.div>

              {/* Central Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
              />

              {/* Floating Text Elements */}
              <div className="absolute inset-0">
                {[
                  { text: 'AI', position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full' },
                  { text: 'FINTECH', position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full' },
                  { text: 'WELLNESS', position: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full' },
                  { text: 'GLOBAL', position: 'right-0 top-1/2 -translate-y-1/2 translate-x-full' }
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`absolute ${item.position}`}
                  >
                    <span className="text-2xl font-black text-white/20">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [-20, 20],
                    x: [-10, 10],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                >
                  <div className="w-1 h-1 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-20 fill-black">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" opacity="0.5" />
            <path d="M0,70 C360,20 1080,120 1440,70 L1440,100 L0,100 Z" opacity="0.3" />
          </svg>
        </div>
      </section>
      

      {/* Products Section */}
      <section id="products" className="relative section-padding bg-black overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float animation-delay-400" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block overflow-hidden mb-6"
            >
              <span className="inline-block px-6 py-2 text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase">
                Our Product Portfolio
              </span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black mb-6">
              <span className="block text-white/20 mb-2">Our</span>
              <span className="block">
                {'PORTFOLIO'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="inline-block gradient-text-blue hover:gradient-text-cyan transition-all duration-300"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h2>
            
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Digital products owned and operated by Bromander Global, each designed to address specific market needs
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Shinery Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                
                <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 border border-white/5 hover:border-purple-500/30 transition-all duration-500 rounded-lg bg-black/30 backdrop-blur-sm">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600" />
                      <span className="text-xs font-bold tracking-[0.2em] text-purple-500 uppercase">01 / Digital Wellness</span>
                    </div>
                    
                    <div>
                      <h3 className="text-4xl lg:text-5xl font-black text-white mb-3">
                        AI RELIANCE
                        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">TRACKER</span>
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        A mindful companion that helps you build a healthier relationship with AI. Track usage, understand patterns, and maintain cognitive independence in our AI-driven world.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {['Usage Analytics', 'Human Community', 'Mindfulness', 'Privacy-First'].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs border border-purple-500/30 text-purple-500/80 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href="/products/shinery" 
                      className="inline-flex items-center gap-3 text-purple-500 font-bold uppercase tracking-wider hover:gap-5 transition-all group/link"
                    >
                      <span>Explore Product</span>
                      <div className="relative w-10 h-10 border border-purple-500/30 group-hover/link:border-purple-500 transition-colors">
                        <ArrowRight className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </Link>
                  </div>

                  {/* Right Visual */}
                  <div className="relative h-64 lg:h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-2xl" />
                    <div className="relative h-full border border-white/10 bg-gradient-to-br from-purple-950/50 to-black/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/30 rounded-full blur-xl" />
                      </motion.div>
                      <Brain className="w-24 h-24 text-purple-500/50" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-500 text-xs font-bold">AVAILABLE NOW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Smart Bookkeeping Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                
                <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 rounded-lg bg-black/30 backdrop-blur-sm">
                  {/* Left Visual */}
                  <div className="relative h-64 lg:h-80 order-2 lg:order-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 blur-2xl" />
                    <div className="relative h-full border border-white/10 bg-gradient-to-br from-cyan-950/50 to-black/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 opacity-30"
                      >
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_30%,cyan_50%,transparent_70%)]" />
                      </motion.div>
                      <Calculator className="w-24 h-24 text-cyan-500/50" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-500 text-xs font-bold">COMING SOON</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="space-y-6 order-1 lg:order-2">
                    <div className="inline-flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-cyan-600 to-blue-600" />
                      <span className="text-xs font-bold tracking-[0.2em] text-cyan-500 uppercase">02 / Smart Finance</span>
                    </div>
                    
                    <div>
                      <h3 className="text-4xl lg:text-5xl font-black text-white mb-3">
                        SMART
                        <span className="block gradient-text-cyan">BOOKKEEPING</span>
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        Revolutionary AI-driven bookkeeping that learns your business patterns and automates 95% of your accounting work. Built for modern businesses that value precision and efficiency.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {['AI-Powered', 'Auto-Reconciliation', 'Real-time Sync', 'Bank-Level Security'].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs border border-cyan-500/30 text-cyan-500/80 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href="/products/bookkeeping" 
                      className="inline-flex items-center gap-3 text-cyan-500 font-bold uppercase tracking-wider hover:gap-5 transition-all group/link"
                    >
                      <span>Join Waitlist</span>
                      <div className="relative w-10 h-10 border border-cyan-500/30 group-hover/link:border-cyan-500 transition-colors">
                        <ArrowRight className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative section-padding bg-gradient-to-b from-black via-blue-950/20 to-black overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">By The </span>
              <span className="gradient-text-blue">Numbers</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Our impact speaks for itself
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-5xl md:text-6xl font-black gradient-text-blue mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                >
                  {statsInView && (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      delay={index * 0.1}
                    />
                  )}
                  <span>{stat.suffix}</span>
                </motion.div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">Trusted by </span>
              <span className="gradient-text-blue">Leaders</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              See what industry leaders say about our products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-black to-black" />
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]"
          >
            <div className="w-full h-full bg-gradient-conic from-blue-600/10 via-transparent to-cyan-600/10 blur-3xl" />
          </motion.div>
        </div>
        
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
              <h2 className="text-6xl md:text-8xl font-black mb-6">
                <span className="block text-white mb-2">READY TO</span>
                <span className="block">
                  {'TRANSFORM?'.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="inline-block gradient-text-blue"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h2>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Explore the products in our portfolio or learn more about our company
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="#products" 
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider overflow-hidden"
                >
                  <span className="relative z-10">Explore Portfolio</span>
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
                  className="group relative inline-flex items-center gap-3 px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-wider hover:border-cyan-500 transition-all overflow-hidden"
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