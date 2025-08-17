'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Heart,
  Shield,
  Sparkles,
  BarChart3,
  Bell,
  Users,
  Target,
  Zap,
  Download,
  Flower2,
  Sun,
  Moon,
  TreePine,
  Apple,
  Play
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function AITrackerPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'Mindful AI Usage',
      description: 'Track and understand your AI interactions with gentle insights',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'Prioritize mental health with usage limits and mindful breaks',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your data stays on your device, always secure and private',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: BarChart3,
      title: 'Gentle Analytics',
      description: 'Understand patterns without judgment, grow at your pace',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Bell,
      title: 'Mindful Reminders',
      description: 'Soft nudges to maintain healthy AI boundaries',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on their mindful tech journey',
      color: 'from-indigo-400 to-purple-400'
    }
  ];


  return (
    <>
      <SmoothScroll />
      <Navbar />
      
      {/* Hero Section - Calming Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16 md:py-0">
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 text-purple-300/20"
          >
            <Flower2 className="w-24 h-24" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 text-pink-300/20"
          >
            <Sun className="w-20 h-20" />
          </motion.div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/60 backdrop-blur-sm border border-purple-200 rounded-full mb-4 sm:mb-6 md:mb-8"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
              <span className="text-xs sm:text-sm font-medium text-purple-700">Mindful Technology</span>
            </motion.div>

            <h1 className="font-bold mb-4 sm:mb-6">
              <span className="block text-gray-800 mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Find Your Balance</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                with AI
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              A gentle companion that helps you build a healthier relationship with AI. 
              Track, understand, and improve your digital wellness journey.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 mb-4 sm:mb-6 md:mb-8">
              <motion.a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-black text-white rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-gray-900 transition-all shadow-xl"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <div className="text-left">
                  <div className="text-[10px] sm:text-xs opacity-80">Get it on</div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
              
              <motion.a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-black text-white rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-gray-900 transition-all shadow-xl"
              >
                <Apple className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <div className="text-left">
                  <div className="text-[10px] sm:text-xs opacity-80">Download on the</div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
            </div>

            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">Free to download • No ads • Privacy first</p>
          </motion.div>
        </div>
      </section>

      {/* Animated Marquee */}
      <section className="py-16 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 overflow-hidden">
        <div className="relative">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center space-x-12 whitespace-nowrap"
          >
            {/* First set */}
            <span className="text-2xl font-bold text-purple-600">Track Your AI Usage</span>
            <span className="text-2xl font-bold text-pink-600">Build Better Habits</span>
            <span className="text-2xl font-bold text-blue-600">Mindful Technology</span>
            <span className="text-2xl font-bold text-purple-600">Stay Focused</span>
            <span className="text-2xl font-bold text-pink-600">Weekly Insights</span>
            <span className="text-2xl font-bold text-blue-600">Privacy First</span>
            <span className="text-2xl font-bold text-purple-600">No Ads Ever</span>
            <span className="text-2xl font-bold text-pink-600">Boost Productivity</span>
            
            {/* Duplicate set for seamless loop */}
            <span className="text-2xl font-bold text-purple-600">Track Your AI Usage</span>
            <span className="text-2xl font-bold text-pink-600">Build Better Habits</span>
            <span className="text-2xl font-bold text-blue-600">Mindful Technology</span>
            <span className="text-2xl font-bold text-purple-600">Stay Focused</span>
            <span className="text-2xl font-bold text-pink-600">Weekly Insights</span>
            <span className="text-2xl font-bold text-blue-600">Privacy First</span>
            <span className="text-2xl font-bold text-purple-600">No Ads Ever</span>
            <span className="text-2xl font-bold text-pink-600">Boost Productivity</span>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-white to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-800">Features that</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Care</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed with your wellbeing in mind, every feature promotes mindful technology use
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onHoverStart={() => setActiveFeature(i)}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {activeFeature === i && (
                  <motion.div
                    layoutId="activeFeature"
                    className="absolute inset-0 border-2 border-purple-400 rounded-3xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Premium Design */}
      <section className="section-padding relative overflow-hidden">
        {/* Gradient Background - matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="absolute inset-0 bg-white/30" />
        </div>
        
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8"
            >
              <TreePine className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Path to Freedom</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="block text-gray-800 mb-3">Journey to</span>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Digital Balance
                </span>
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -inset-2 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 blur-lg opacity-60"
                />
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four transformative steps to reclaim your cognitive independence
            </p>
          </motion.div>

          {/* Interactive Journey Cards */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                { 
                  step: 'STEP 01', 
                  title: 'Begin Your Journey',
                  subtitle: 'Quick Setup',
                  description: 'Download our app and create your personalized wellness profile in just 2 minutes. Set your goals and preferences.',
                  icon: Download,
                  gradient: 'from-purple-500 to-pink-500',
                  bg: 'from-purple-50 to-pink-50',
                  features: ['2-minute setup', 'Personalized goals', 'Privacy-first approach'],
                  image: '📱'
                },
                { 
                  step: 'STEP 02', 
                  title: 'Understand Your Habits',
                  subtitle: 'Smart Tracking',
                  description: 'Our AI silently observes your usage patterns, creating a comprehensive picture of your digital behavior.',
                  icon: BarChart3,
                  gradient: 'from-pink-500 to-purple-500',
                  bg: 'from-pink-50 to-purple-50',
                  features: ['Passive monitoring', 'Pattern recognition', 'Zero judgment'],
                  image: '📊'
                },
                { 
                  step: 'STEP 03', 
                  title: 'Gain Clear Insights',
                  subtitle: 'Personalized Analytics',
                  description: 'Receive weekly insights tailored to your unique patterns, helping you understand your relationship with AI.',
                  icon: Brain,
                  gradient: 'from-blue-500 to-purple-500',
                  bg: 'from-blue-50 to-purple-50',
                  features: ['Weekly reports', 'Trend analysis', 'Actionable insights'],
                  image: '🧠'
                },
                { 
                  step: 'STEP 04', 
                  title: 'Transform Your Life',
                  subtitle: 'Mindful Growth',
                  description: 'Build lasting habits with our gentle guidance system, designed to help you grow at your own pace.',
                  icon: Sparkles,
                  gradient: 'from-purple-500 to-blue-500',
                  bg: 'from-purple-50 to-blue-50',
                  features: ['Gentle nudges', 'Habit building', 'Community support'],
                  image: '✨'
                }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className={`relative h-full bg-gradient-to-br ${item.bg} rounded-3xl p-8 shadow-xl border border-white/50 backdrop-blur-sm overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                      <div className="text-[200px] select-none">{item.image}</div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Step Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className={`inline-flex px-4 py-2 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                          {item.step}
                        </span>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <item.icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>
                      
                      {/* Text Content */}
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg font-medium text-gray-600 mb-4">{item.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-3">
                        {item.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`} />
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Benefits - Enhanced */}
      <section className="section-padding relative overflow-hidden">
        {/* Gradient Background - matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />
        {/* Subtle Animated Orbs */}
        <motion.div
          animate={{ 
            y: [-30, 30, -30],
            x: [-20, 20, -20]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [30, -30, 30],
            x: [20, -20, 20]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Life-Changing Benefits</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-800">Transform Your</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Life</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the profound impact of mindful AI usage on every aspect of your life
            </p>
          </motion.div>

          {/* Benefits Grid - Bento Style */}
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Main Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-10 rounded-3xl text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <Brain className="w-16 h-16 mb-6 text-white/90" />
                <h3 className="text-3xl font-bold mb-4">Reclaim Your Cognitive Freedom</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-8">
                  Break free from AI dependency and rediscover your natural problem-solving abilities. 
                  Our users report 73% improvement in creative thinking within just 4 weeks.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Better Focus', 'Enhanced Creativity', 'Clearer Thinking'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Side Stats */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                <Zap className="w-10 h-10 text-purple-600 mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">2.5x</div>
                <div className="text-gray-600 font-medium">Productivity Boost</div>
                <p className="text-sm text-gray-500 mt-2">Without constant AI interruptions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                <Heart className="w-10 h-10 text-pink-600 mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">85%</div>
                <div className="text-gray-600 font-medium">Less Digital Anxiety</div>
                <p className="text-sm text-gray-500 mt-2">Reported by active users</p>
              </motion.div>
            </div>

            {/* Benefits List Cards */}
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-4 mt-6">
              {[
                { 
                  icon: Target, 
                  title: 'Improved Focus', 
                  desc: 'Stay in deep work longer without AI distractions',
                  color: 'from-purple-50 to-pink-50',
                  iconColor: 'text-purple-600'
                },
                { 
                  icon: Users, 
                  title: 'Better Relationships', 
                  desc: 'More present in real-world interactions',
                  color: 'from-pink-50 to-purple-50',
                  iconColor: 'text-pink-600'
                },
                { 
                  icon: Moon, 
                  title: 'Quality Sleep', 
                  desc: 'Reduced screen time improves rest patterns',
                  color: 'from-blue-50 to-purple-50',
                  iconColor: 'text-blue-600'
                },
                { 
                  icon: Sparkles, 
                  title: 'Creative Renaissance', 
                  desc: 'Rediscover your natural creative abilities',
                  color: 'from-purple-50 to-blue-50',
                  iconColor: 'text-purple-600'
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg border border-white/40 backdrop-blur-sm relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full blur-2xl opacity-60" />
                  <div className="relative z-10">
                    <item.icon className={`w-8 h-8 ${item.iconColor} mb-3`} />
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Mindful Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Download the app and take the first step towards a balanced digital life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-2xl hover:bg-gray-100 transition-all shadow-xl"
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
              
              <motion.a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-2xl hover:bg-gray-100 transition-all shadow-xl"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>No Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>Free to Download</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}