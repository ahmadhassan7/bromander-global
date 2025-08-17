'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LightRays from '@/components/LightRays';

export default function HeroAlternative() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Light Rays Background Effect */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#3b82f6"
        raysSpeed={5.0}
        lightSpread={12.0}
        rayLength={isMobile ? 7.0 : 4.5}
        pulsating={false}
        fadeDistance={0.6}
        saturation={1.2}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.0}
        distortion={0.0}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-2">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-8 mx-auto"
            />
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-white mb-2"
              >
                BROMANDER
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="block gradient-text-blue"
              >
                GLOBAL
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
            >
              A technology holding company that owns and operates innovative digital products. 
              We believe in creating solutions that enhance human potential and improve digital wellness.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  href="#products" 
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider overflow-hidden rounded-xl w-full sm:w-auto"
                >
                  <span className="relative z-10">Our Portfolio</span>
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
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-wider hover:border-blue-500 transition-all overflow-hidden rounded-xl backdrop-blur-sm w-full sm:w-auto"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" className="w-full h-20 fill-black">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" opacity="0.5" />
          <path d="M0,70 C360,20 1080,120 1440,70 L1440,100 L0,100 Z" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
}