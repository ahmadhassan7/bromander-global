'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Target, 
  Lightbulb, 
  Users,
  Heart,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Silk from '@/components/Silk';
import SpotlightCard from '@/components/SpotlightCard';

const values = [
  {
    icon: Heart,
    title: 'Human-Centered',
    description: 'We believe technology should enhance human potential, not replace it. Every product we build puts people first.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push boundaries and challenge conventions to create solutions that truly make a difference.'
  },
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Every line of code, every feature, every decision is guided by our mission to improve lives and businesses.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We think globally but act locally, creating solutions that work for businesses and individuals worldwide.'
  }
];

const founder = {
  name: 'Carl Oscar Bromander',
  role: 'Founder & CEO',
  description: 'Visionary entrepreneur with a passion for creating technology that enhances human potential. Carl Oscar founded Bromander Global with the mission to build a portfolio of digital products that prioritize human welfare and digital wellness.',
  image: '/team/carl-oscar.jpg'
};


export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Silk Background */}
        <div className="absolute inset-0 opacity-30">
          <Silk 
            speed={3}
            scale={2}
            color="#3b82f6"
            noiseIntensity={1.2}
            rotation={0.5}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-8 mx-auto"
              />
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8">
                <span className="block text-white mb-2">ABOUT</span>
                <span className="block gradient-text-blue">BROMANDER</span>
                <span className="block gradient-text-blue">GLOBAL</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Bromander Global is a technology holding company that owns and operates innovative digital products. 
                We focus on creating solutions that enhance human potential and promote digital wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative section-padding bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 to-black" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-500 font-medium">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Building a Portfolio of Meaningful Technology
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  As a technology holding company, we identify, develop, and operate digital products that 
                  address real-world challenges. Our portfolio focuses on solutions that enhance human capabilities 
                  while promoting digital wellness and cognitive independence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                  <Sparkles className="w-5 h-5 text-cyan-500" />
                  <span className="text-cyan-500 font-medium">Our Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Leading Through Responsible Innovation
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We envision Bromander Global as a model holding company that demonstrates how technology 
                  ownership can be both profitable and purposeful. Our approach prioritizes long-term value 
                  creation over short-term gains, ensuring our products serve real human needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative section-padding bg-gradient-to-b from-black via-cyan-950/10 to-black overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-5" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text-blue">Values</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Timeline/Stepper Design */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connecting Line - Desktop */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              
              {/* Mobile Vertical Line */}
              <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
              
              <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative group"
                  >
                    {/* Desktop Layout */}
                    <div className="hidden lg:block text-center">
                      {/* Dot on the line */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-blue-500 rounded-full z-10 group-hover:scale-125 transition-transform" />
                      
                      {/* Vertical line from dot to icon */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                      
                      {/* Content */}
                      <div className="pt-16">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                          <value.icon className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{value.description}</p>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex gap-6">
                      {/* Dot and line for mobile */}
                      <div className="relative flex-shrink-0">
                        <div className="w-4 h-4 bg-black border-2 border-blue-500 rounded-full z-10" />
                        {index < values.length - 1 && (
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500/30" />
                        )}
                      </div>
                      
                      {/* Content for mobile */}
                      <div className="flex-grow pb-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                            <value.icon className="w-6 h-6 text-blue-500" />
                          </div>
                          <h3 className="text-lg font-bold text-white">{value.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="relative section-padding bg-black overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text-blue">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              The strategic principles that guide our investment and operational decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="h-full" 
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Strategic Ownership</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    We acquire and develop digital products that have the potential to make meaningful impact in their respective markets. Our focus is on sustainable growth rather than rapid scaling.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-300">Long-term value creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-300">Market impact assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-300">Sustainable growth focus</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="h-full" 
                spotlightColor="rgba(6, 182, 212, 0.15)"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Human-Centered Technology</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Every product in our portfolio is designed with human welfare at its core. We believe technology should enhance human capabilities, not replace them.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      <span className="text-gray-300">Digital wellness priority</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      <span className="text-gray-300">Cognitive independence</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      <span className="text-gray-300">Privacy by design</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative section-padding bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Meet The </span>
              <span className="gradient-text-blue">Founder</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              The visionary behind Bromander Global
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.1)_50%,transparent_70%)] rounded-3xl" />
              
              {/* Main Card */}
              <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                  {/* Profile Image Section */}
                  <div className="lg:col-span-1 text-center">
                    <div className="relative inline-block">
                      {/* Animated Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-64 h-64 border-2 border-blue-500/30 rounded-full"
                      />
                      
                      {/* Profile Container */}
                      <div className="relative w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full mx-auto flex items-center justify-center overflow-hidden">
                        {/* Placeholder for actual image */}
                        <Users className="w-32 h-32 text-blue-500" />
                        
                        {/* Floating Elements */}
                        <motion.div
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-4 right-4 w-8 h-8 bg-blue-500/30 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [10, -10, 10] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute bottom-6 left-6 w-6 h-6 bg-cyan-500/30 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    {/* Name & Title */}
                    <div className="mb-8">
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                        {founder.name}
                      </h3>
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-blue-400 font-medium text-lg">{founder.role}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
                      {founder.description}
                    </p>
                    
                    {/* Quote Section */}
                    <blockquote className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-l-4 border-blue-500 rounded-lg p-6">
                      <p className="text-white font-medium text-lg italic leading-relaxed">
                        &quot;Technology should enhance human potential, not replace it. At Bromander Global, we&apos;re building a future where digital products truly serve human welfare.&quot;
                      </p>
                      <footer className="mt-4 text-blue-400 text-sm">
                        — Carl Oscar Bromander, Founder & CEO
                      </footer>
                      <cite className="mt-2 block text-gray-400 text-sm">
                        Owner of Bromander Global - 
                        Bookkeeping App & AI Reliance Tracker
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="block text-white mb-2">JOIN OUR</span>
              <span className="block gradient-text-blue">MISSION</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Learn more about our portfolio or get in touch with our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  href="/products/ai-tracker" 
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider overflow-hidden rounded-xl w-full sm:w-auto"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-wider hover:border-blue-500 transition-all overflow-hidden rounded-xl w-full sm:w-auto"
                >
                  <span className="relative z-10">Contact Us</span>
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