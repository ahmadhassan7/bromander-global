'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  ArrowRight,
  Calculator,
  ChartBar,
  DollarSign,
  Receipt,
  Clock,
  Zap,
  Shield,
  CheckCircle,
  Plus,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Brain
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

// Pre-built rule templates
const ruleTemplates = [
  { id: 'sales', name: 'Sales Revenue', category: 'Income' },
  { id: 'salary', name: 'Salary Payment', category: 'Expense' },
  { id: 'rent', name: 'Office Rent', category: 'Expense' },
  { id: 'tax', name: 'Tax Payment', category: 'Liability' },
  { id: 'client', name: 'Client Payment', category: 'Income' },
  { id: 'supplier', name: 'Supplier Payment', category: 'Expense' },
  { id: 'refund', name: 'Customer Refund', category: 'Expense' },
  { id: 'loan', name: 'Loan Repayment', category: 'Liability' }
];

// Account types for dropdown
const accountTypes = [
  'Revenue',
  'Operating Expense',
  'Cost of Goods Sold',
  'Asset',
  'Liability',
  'Equity',
  'Tax',
  'Bank Account',
  'Credit Card',
  'Accounts Receivable',
  'Accounts Payable'
];

// Transaction types
const transactionTypes = [
  'Income',
  'Expense',
  'Transfer',
  'Refund',
  'Tax',
  'Investment'
];

export default function BookkeepingPage() {
  const t = useTranslations('bookkeepingPage');
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistMode, setWaitlistMode] = useState<'quick' | 'custom'>('quick');
  const [activeTab, setActiveTab] = useState('survey');
  interface CustomRule {
    id: string;
    condition: string;
    transactionType: string;
    account: string;
  }
  const [customRules, setCustomRules] = useState<CustomRule[]>([]);
  const [currentRule, setCurrentRule] = useState({
    condition: '',
    transactionType: '',
    account: ''
  });

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (showWaitlist) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [showWaitlist]);
  
  const [formData, setFormData] = useState({
    // Personal info
    name: '',
    email: '',
    company: '',
    
    // Survey data
    businessType: '',
    businessSize: '',
    currentSolution: '',
    painPoints: [] as string[],
    monthlyTransactions: '',
    features: [] as string[],
    
    // Rule preferences
    usePrebuiltRules: true,
    selectedTemplates: [] as string[],
    customRulesData: [] as CustomRule[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddRule = () => {
    if (currentRule.condition && currentRule.transactionType && currentRule.account) {
      setCustomRules([...customRules, { ...currentRule, id: Date.now().toString() }]);
      setCurrentRule({ condition: '', transactionType: '', account: '' });
    }
  };

  const handleRemoveRule = (id: string) => {
    setCustomRules(customRules.filter(rule => rule.id !== id));
  };

  const handleTemplateToggle = (templateId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTemplates: prev.selectedTemplates.includes(templateId)
        ? prev.selectedTemplates.filter(id => id !== templateId)
        : [...prev.selectedTemplates, templateId]
    }));
  };

  const handlePainPointToggle = (point: string) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter(p => p !== point)
        : [...prev.painPoints, point]
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Include custom rules in form data
    const finalData = {
      ...formData,
      customRulesData: customRules
    };
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Waitlist submission:', finalData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const painPoints = [
    'Manual data entry',
    'Categorization errors',
    'Time-consuming reconciliation',
    'Complex tax preparation',
    'Poor cash flow visibility',
    'Multiple disconnected tools',
    'Expensive accountant fees',
    'Compliance concerns'
  ];

  const desiredFeatures = [
    'Automatic categorization',
    'Multi-currency support',
    'Invoice management',
    'Expense tracking',
    'Tax optimization',
    'Financial reporting',
    'Team collaboration',
    'API integrations',
    'Mobile app',
    'Custom rules engine'
  ];

  return (
    <>
      <SmoothScroll />
      <Navbar />
      
      {/* Hero Section with Unique Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-16 md:py-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Floating Finance Icons */}
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 text-blue-500/20"
          >
            <Calculator className="w-32 h-32" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 text-cyan-500/20"
          >
            <ChartBar className="w-32 h-32" />
          </motion.div>
          
          <motion.div
            animate={{ 
              x: [-30, 30, -30],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 right-1/3 text-teal-500/20"
          >
            <DollarSign className="w-24 h-24" />
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
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4 sm:mb-6 md:mb-8"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-blue-300">{t('badge')}</span>
            </motion.div>

            <h1 className="font-black mb-4 sm:mb-6">
              <span className="block text-white mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">{t('hero.title1')}</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">{t('hero.title2')}</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <motion.button
                onClick={() => setShowWaitlist(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/25 rounded-lg text-xs sm:text-sm md:text-base"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="inline-block ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </motion.button>
              <Link href="#features" className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-blue-500/30 text-white font-bold uppercase tracking-wider hover:bg-blue-500/10 transition-all rounded-lg text-xs sm:text-sm md:text-base flex items-center justify-center">
                {t('hero.cta.secondary')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Marquee */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-blue-500/20 bg-gradient-to-r from-slate-950/50 via-blue-950/50 to-slate-950/50 backdrop-blur-sm">
          <div className="relative flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex whitespace-nowrap py-4"
            >
              {/* First set of items */}
              <div className="flex items-center gap-8 px-8">
                <span className="text-cyan-400 font-bold uppercase tracking-wider">{t('marquee.aiPowered')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-blue-400 font-bold uppercase tracking-wider">{t('marquee.automatedBookkeeping')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-teal-400 font-bold uppercase tracking-wider">{t('marquee.smartCategorization')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-cyan-400 font-bold uppercase tracking-wider">{t('marquee.realtimeSync')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-blue-400 font-bold uppercase tracking-wider">{t('marquee.bankLevelSecurity')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-teal-400 font-bold uppercase tracking-wider">{t('marquee.predictiveInsights')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-cyan-400 font-bold uppercase tracking-wider">{t('marquee.accuracy')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-blue-400 font-bold uppercase tracking-wider">{t('marquee.timeSaving')}</span>
                <span className="text-gray-500">•</span>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-8 px-8">
                <span className="text-cyan-400 font-bold uppercase tracking-wider">{t('marquee.aiPowered')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-blue-400 font-bold uppercase tracking-wider">{t('marquee.automatedBookkeeping')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-teal-400 font-bold uppercase tracking-wider">{t('marquee.smartCategorization')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-cyan-400 font-bold uppercase tracking-wider">{t('marquee.realtimeSync')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-blue-400 font-bold uppercase tracking-wider">{t('marquee.bankLevelSecurity')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-teal-400 font-bold uppercase tracking-wider">{t('marquee.predictiveInsights')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-cyan-400 font-bold uppercase tracking-wider">{t('marquee.accuracy')}</span>
                <span className="text-gray-500">•</span>
                <span className="text-blue-400 font-bold uppercase tracking-wider">{t('marquee.timeSaving')}</span>
                <span className="text-gray-500">•</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Redesign */}
      <section id="features" className="section-padding bg-slate-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
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
              transition={{ delay: 0.1 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-full">
                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">{t('features.badge')}</span>
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">{t('features.title1')}</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">{t('features.title2')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('features.subtitle')}
            </p>
          </motion.div>

          {/* Modern Bento Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Large Feature Card - AI Categorization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-8 group relative"
            >
              <div className="h-full p-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,147,248,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-2 border-dashed border-blue-500/30 rounded-full"
                    />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{t('features.aiCategorization.title')}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {t('features.aiCategorization.description')}
                  </p>
                  
                  {/* Visual Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: t('features.aiCategorization.stats.accuracy'), value: t('features.aiCategorization.stats.accuracyValue') },
                      { label: t('features.aiCategorization.stats.timeSaved'), value: t('features.aiCategorization.stats.timeSavedValue') },
                      { label: t('features.aiCategorization.stats.autoLearn'), value: t('features.aiCategorization.stats.autoLearnValue') }
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 bg-blue-500/5 rounded-lg border border-blue-500/10">
                        <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                        <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vertical Stack - Two smaller cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Real-time Sync Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative flex-1"
              >
                <div className="h-full p-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{t('features.realtimeSync.title')}</h3>
                    <p className="text-gray-400">
                      {t('features.realtimeSync.description')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bank Security Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative flex-1"
              >
                <div className="h-full p-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-teal-500/20 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{t('features.bankSecurity.title')}</h3>
                    <p className="text-gray-400">
                      {t('features.bankSecurity.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row - Three Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-4 group relative"
            >
              <div className="h-full p-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500">
                {/* Animated Icon */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4"
                >
                  <ChartBar className="w-7 h-7 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">{t('features.smartInsights.title')}</h3>
                <p className="text-gray-400">
                  {t('features.smartInsights.description')}
                </p>
                
                {/* Mini visualization */}
                <div className="mt-4 flex gap-1">
                  {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t"
                      style={{ maxHeight: '40px' }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4 group relative"
            >
              <div className="h-full p-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Receipt className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{t('features.receiptScanning.title')}</h3>
                  <p className="text-gray-400">
                    {t('features.receiptScanning.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-4 group relative"
            >
              <div className="h-full p-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-teal-500/20 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{t('features.timeSaving.title')}</h3>
                    <p className="text-gray-400">
                      {t('features.timeSaving.description')}
                    </p>
                  </div>
                  
                  {/* Time saved counter */}
                  <div className="text-right">
                    <div className="text-3xl font-black text-teal-400">{t('features.timeSaving.value')}</div>
                    <div className="text-xs text-gray-500">{t('features.timeSaving.unit')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Hype Section */}
      <section className="section-padding bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">{t('comingSoon.title1')}</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{t('comingSoon.title2')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('comingSoon.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Mysterious Countdown or Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { number: t('comingSoon.stats.earlyAccess.number'), label: t('comingSoon.stats.earlyAccess.label'), color: 'from-blue-500 to-cyan-500' },
                { number: t('comingSoon.stats.launchYear.number'), label: t('comingSoon.stats.launchYear.label'), color: 'from-cyan-500 to-teal-500' },
                { number: t('comingSoon.stats.possibilities.number'), label: t('comingSoon.stats.possibilities.label'), color: 'from-teal-500 to-blue-500' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Cryptic Feature Hints */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20 blur-3xl" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-slate-950/80 border border-blue-500/30 rounded-2xl p-12 text-center"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-32 h-32 mx-auto mb-8"
                >
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full opacity-20 blur-xl" />
                    <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full" />
                    <div className="absolute inset-2 border-2 border-cyan-500/30 rounded-full" />
                    <div className="absolute inset-4 border border-teal-500/30 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="w-12 h-12 text-cyan-400" />
                    </div>
                  </div>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {t('comingSoon.thinking.title')}
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {t('comingSoon.thinking.description')}
                </p>
                
                {/* Teaser Points */}
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {[
                    { icon: Zap, text: t('comingSoon.thinking.features.automation') },
                    { icon: Shield, text: t('comingSoon.thinking.features.security') },
                    { icon: Sparkles, text: t('comingSoon.thinking.features.intelligence') }
                  ].map((item, i) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="text-gray-400 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Waitlist CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-400 mb-6">
                {t('comingSoon.waitlist.subtitle')}
              </p>
              <motion.button
                onClick={() => setShowWaitlist(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/25 rounded-lg"
              >
                {t('comingSoon.waitlist.cta')}
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-950 border-t border-blue-500/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">{t('finalCta.title1')}</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t('finalCta.title2')}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {t('finalCta.subtitle')}
            </p>
            <motion.button
              onClick={() => setShowWaitlist(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg uppercase tracking-wider hover:from-blue-700 hover:to-cyan-700 transition-all shadow-xl shadow-blue-500/25 rounded-lg"
            >
              {t('finalCta.cta')}
              <ArrowRight className="inline-block ml-3 w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {showWaitlist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => {
              setShowWaitlist(false);
              setWaitlistMode('quick');
            }}
          >
            <div className="w-full h-full overflow-y-auto flex items-center justify-center p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/30 rounded-2xl max-w-5xl w-full my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {!isSubmitted ? (
                  <>
                    {waitlistMode === 'quick' ? (
                      // Modern Quick Signup with 70/30 Split
                      <div className="flex flex-col lg:flex-row h-[600px] overflow-hidden">
                        {/* Left Side - 70% with Animations */}
                        <div className="lg:w-[70%] bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 p-12 relative overflow-hidden">
                          {/* Close button */}
                          <button
                            onClick={() => {
                              setShowWaitlist(false);
                              setWaitlistMode('quick');
                            }}
                            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
                          >
                            <X className="w-5 h-5 text-gray-400" />
                          </button>

                          {/* Animated Background Elements */}
                          <div className="absolute inset-0">
                            <motion.div
                              animate={{ 
                                rotate: [0, 360],
                              }}
                              transition={{ 
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="absolute -top-20 -left-20 w-80 h-80 border border-cyan-500/20 rounded-full"
                            />
                            <motion.div
                              animate={{ 
                                rotate: [360, 0],
                              }}
                              transition={{ 
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="absolute -bottom-20 -right-20 w-96 h-96 border border-blue-500/20 rounded-full"
                            />
                            <motion.div
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                            />
                          </div>

                          {/* Content */}
                          <div className="relative z-10 h-full flex flex-col justify-center max-w-xl">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                            >
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm font-medium text-cyan-400">LIMITED EARLY ACCESS</span>
                              </div>

                              <h2 className="text-5xl lg:text-6xl font-black mb-6">
                                <span className="text-white">Be Part of the</span>
                                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                  Revolution
                                </span>
                              </h2>

                              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Join thousands of forward-thinking businesses waiting for the future of bookkeeping. 
                                Get exclusive early access and lifetime benefits.
                              </p>

                              <div className="space-y-4">
                                {[
                                  { icon: CheckCircle, text: 'Exclusive access before public launch' },
                                  { icon: CheckCircle, text: 'Priority onboarding and support' },
                                  { icon: CheckCircle, text: 'Shape the product with your feedback' }
                                ].map((item, i) => (
                                  <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-3"
                                  >
                                    <item.icon className="w-5 h-5 text-cyan-400" />
                                    <span className="text-gray-300">{item.text}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        {/* Right Side - 30% Form */}
                        <div className="lg:w-[30%] bg-slate-950 p-8 flex flex-col justify-center">
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
                            <p className="text-gray-400 mb-8">
                              No spam, just important updates.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input
                                  type="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  className="w-full px-4 py-3 bg-slate-900 border border-blue-500/20 text-white placeholder-gray-500 focus:border-cyan-500 focus:bg-slate-900/50 transition-all outline-none rounded-lg"
                                  placeholder="your@email.com"
                                  autoFocus
                                />
                              </div>

                              <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-700 hover:to-cyan-700 transition-all rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
                              >
                                {isSubmitting ? (
                                  <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Joining...</span>
                                  </>
                                ) : (
                                  <>
                                    <span>Reserve My Spot</span>
                                    <ArrowRight className="w-5 h-5" />
                                  </>
                                )}
                              </motion.button>
                            </form>

                            <div className="mt-8 pt-8 border-t border-slate-800">
                              <p className="text-sm text-gray-500 mb-4">Want more options?</p>
                              <button
                                onClick={() => setWaitlistMode('custom')}
                                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors inline-flex items-center gap-2 group"
                              >
                                Custom Tailor Your Experience
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-8 pt-8 border-t border-slate-800">
                              <div className="flex items-center gap-3 text-xs text-gray-500">
                                <Shield className="w-4 h-4" />
                                <span>Your data is protected with 256-bit encryption</span>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    ) : (
                      // Custom Experience Form
                      <div className="flex flex-col h-[600px]">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-blue-500/20 flex-shrink-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => setWaitlistMode('quick')}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                              >
                                <ChevronLeft className="w-5 h-5 text-gray-400" />
                              </button>
                              <h3 className="text-2xl font-bold text-white">Custom Tailor Your Experience</h3>
                            </div>
                            <button
                              onClick={() => {
                                setShowWaitlist(false);
                                setWaitlistMode('quick');
                              }}
                              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                              <X className="w-5 h-5 text-gray-400" />
                            </button>
                          </div>
                          <p className="text-gray-400 mt-2 ml-14">Help us build the perfect bookkeeping solution for you</p>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-blue-500/20 flex-shrink-0">
                          {['survey', 'rules'].map((tab) => (
                            <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              className={`flex-1 py-4 px-6 font-medium transition-all ${
                                activeTab === tab 
                                  ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-500/5' 
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {tab === 'survey' ? '1. Tell Us About You' : '2. Customize Rules'}
                            </button>
                          ))}
                        </div>

                        {/* Form Content */}
                        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto custom-scrollbar p-6">
                    {activeTab === 'survey' ? (
                      <div className="space-y-6">
                        {/* Basic Info */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-white">Contact Information</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                              <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-950 border border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-500 transition-colors outline-none rounded-lg"
                                placeholder="John Doe"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                              <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-950 border border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-500 transition-colors outline-none rounded-lg"
                                placeholder="john@company.com"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                              <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-950 border border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-500 transition-colors outline-none rounded-lg"
                                placeholder="Your Company Name"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Business Info */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-white">Business Information</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Business Type</label>
                              <select
                                value={formData.businessType}
                                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-950 border border-blue-500/20 text-white focus:border-blue-500 transition-colors outline-none rounded-lg"
                              >
                                <option value="">Select type</option>
                                <option value="saas">SaaS</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="agency">Agency</option>
                                <option value="freelance">Freelance</option>
                                <option value="retail">Retail</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Business Size</label>
                              <select
                                value={formData.businessSize}
                                onChange={(e) => setFormData({ ...formData, businessSize: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-950 border border-blue-500/20 text-white focus:border-blue-500 transition-colors outline-none rounded-lg"
                              >
                                <option value="">Select size</option>
                                <option value="solo">Solo (1 person)</option>
                                <option value="small">Small (2-10)</option>
                                <option value="medium">Medium (11-50)</option>
                                <option value="large">Large (50+)</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Current Solution</label>
                              <input
                                type="text"
                                value={formData.currentSolution}
                                onChange={(e) => setFormData({ ...formData, currentSolution: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-950 border border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-500 transition-colors outline-none rounded-lg"
                                placeholder="QuickBooks, Excel, etc."
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Monthly Transactions</label>
                              <select
                                value={formData.monthlyTransactions}
                                onChange={(e) => setFormData({ ...formData, monthlyTransactions: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-950 border border-blue-500/20 text-white focus:border-blue-500 transition-colors outline-none rounded-lg"
                              >
                                <option value="">Select range</option>
                                <option value="0-100">0-100</option>
                                <option value="100-500">100-500</option>
                                <option value="500-1000">500-1,000</option>
                                <option value="1000+">1,000+</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Pain Points */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-white">Current Pain Points</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {painPoints.map((point) => (
                              <button
                                key={point}
                                type="button"
                                onClick={() => handlePainPointToggle(point)}
                                className={`p-3 text-sm border rounded-lg transition-all ${
                                  formData.painPoints.includes(point)
                                    ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                                    : 'border-blue-500/20 text-gray-400 hover:border-blue-500/40'
                                }`}
                              >
                                {point}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Desired Features */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-white">Features You Need</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {desiredFeatures.map((feature) => (
                              <button
                                key={feature}
                                type="button"
                                onClick={() => handleFeatureToggle(feature)}
                                className={`p-3 text-sm border rounded-lg transition-all ${
                                  formData.features.includes(feature)
                                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                                    : 'border-blue-500/20 text-gray-400 hover:border-blue-500/40'
                                }`}
                              >
                                {feature}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Rule Templates */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-white">Pre-built Rule Templates</h4>
                          <p className="text-gray-400 text-sm">Select templates that match your business needs</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {ruleTemplates.map((template) => (
                              <button
                                key={template.id}
                                type="button"
                                onClick={() => handleTemplateToggle(template.id)}
                                className={`p-4 border rounded-lg transition-all ${
                                  formData.selectedTemplates.includes(template.id)
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-blue-500/20 hover:border-blue-500/40'
                                }`}
                              >
                                <div className="text-white font-medium text-sm">{template.name}</div>
                                <div className="text-gray-500 text-xs mt-1">{template.category}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Custom Rules Builder */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-white">Custom Rules Builder</h4>
                          <p className="text-gray-400 text-sm">Create your own transaction categorization rules</p>
                          
                          <div className="bg-slate-950 border border-blue-500/20 rounded-lg p-4 space-y-4">
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                  When transaction contains
                                </label>
                                <input
                                  type="text"
                                  value={currentRule.condition}
                                  onChange={(e) => setCurrentRule({ ...currentRule, condition: e.target.value })}
                                  className="w-full px-3 py-2 bg-slate-900 border border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-500 transition-colors outline-none rounded-lg text-sm"
                                  placeholder="e.g., 'Stripe', 'AWS', 'Salary'"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                  Transaction type
                                </label>
                                <select
                                  value={currentRule.transactionType}
                                  onChange={(e) => setCurrentRule({ ...currentRule, transactionType: e.target.value })}
                                  className="w-full px-3 py-2 bg-slate-900 border border-blue-500/20 text-white focus:border-blue-500 transition-colors outline-none rounded-lg text-sm"
                                >
                                  <option value="">Select type</option>
                                  {transactionTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                  Categorize as
                                </label>
                                <select
                                  value={currentRule.account}
                                  onChange={(e) => setCurrentRule({ ...currentRule, account: e.target.value })}
                                  className="w-full px-3 py-2 bg-slate-900 border border-blue-500/20 text-white focus:border-blue-500 transition-colors outline-none rounded-lg text-sm"
                                >
                                  <option value="">Select account</option>
                                  {accountTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={handleAddRule}
                              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                              <Plus className="w-4 h-4" />
                              Add Rule
                            </button>
                          </div>

                          {/* Custom Rules List */}
                          {customRules.length > 0 && (
                            <div className="space-y-2">
                              <h5 className="text-sm font-medium text-gray-400">Your Custom Rules</h5>
                              {customRules.map((rule) => (
                                <div
                                  key={rule.id}
                                  className="flex items-center justify-between p-3 bg-slate-950 border border-blue-500/20 rounded-lg"
                                >
                                  <div className="flex items-center gap-4 text-sm">
                                    <span className="text-gray-400">When contains</span>
                                    <span className="text-blue-400 font-medium">&quot;{rule.condition}&quot;</span>
                                    <ArrowRight className="w-4 h-4 text-gray-500" />
                                    <span className="text-cyan-400 font-medium">{rule.transactionType}</span>
                                    <ArrowRight className="w-4 h-4 text-gray-500" />
                                    <span className="text-teal-400 font-medium">{rule.account}</span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveRule(rule.id)}
                                    className="p-1 hover:bg-red-500/20 rounded transition-colors"
                                  >
                                    <X className="w-4 h-4 text-red-400" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Form Actions */}
                    <div className="flex gap-4 mt-8">
                      {activeTab === 'rules' && (
                        <button
                          type="button"
                          onClick={() => setActiveTab('survey')}
                          className="px-6 py-3 border border-blue-500/30 text-white font-medium hover:bg-blue-500/10 transition-all rounded-lg"
                        >
                          Previous
                        </button>
                      )}
                      {activeTab === 'survey' ? (
                        <button
                          type="button"
                          onClick={() => setActiveTab('rules')}
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all rounded-lg flex items-center justify-center gap-2"
                        >
                          Next: Customize Rules
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Join Waitlist</span>
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                            )}
                          </div>
                        </form>
                      </div>
                    )}
                  </>
                ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">You&apos;re on the list!</h3>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Thank you for your interest in Smart Bookkeeping. We&apos;ll notify you as soon as we launch with exclusive early access benefits.
                  </p>
                  <button
                    onClick={() => {
                      setShowWaitlist(false);
                      setIsSubmitted(false);
                      setWaitlistMode('quick');
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        businessType: '',
                        businessSize: '',
                        currentSolution: '',
                        painPoints: [],
                        monthlyTransactions: '',
                        features: [],
                        usePrebuiltRules: true,
                        selectedTemplates: [],
                        customRulesData: []
                      });
                      setCustomRules([]);
                    }}
                    className="px-6 py-3 border border-blue-500/30 text-white font-medium hover:bg-blue-500/10 transition-all rounded-lg"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}