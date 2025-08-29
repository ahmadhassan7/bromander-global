'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, X, Check, AlertCircle, Shield, BarChart3, Users, Share } from 'lucide-react';

declare global {
  interface Window {
    openCookieSettings?: () => void;
    resetAllCookies?: () => void;
    dataLayer?: unknown[];
  }
}

interface GtagFunction {
  (...args: unknown[]): void;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

interface CookieConsentProps {
  onPreferencesChange?: (preferences: CookiePreferences) => void;
}

export default function CookieConsent({ onPreferencesChange }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true - cannot be disabled
    analytics: false,
    functional: false,
    marketing: false,
  });
  const [hasInteracted, setHasInteracted] = useState(false);

  // Check if user has already made a choice
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookie-preferences');
    const consentTimestamp = localStorage.getItem('cookie-consent-timestamp');
    
    if (savedPreferences && consentTimestamp) {
      const prefs = JSON.parse(savedPreferences);
      setPreferences(prefs);
      setHasInteracted(true);
      onPreferencesChange?.(prefs);
    } else {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, [onPreferencesChange]);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-timestamp', new Date().toISOString());
    setPreferences(prefs);
    setHasInteracted(true);
    setShowBanner(false);
    setShowSettings(false);
    onPreferencesChange?.(prefs);
    
    // Apply cookie settings immediately
    applyCookieSettings(prefs);
  };

  const applyCookieSettings = (prefs: CookiePreferences) => {
    // Remove existing non-essential cookies if consent withdrawn
    if (!prefs.analytics) {
      // Remove Google Analytics cookies
      document.cookie.split(";").forEach((c) => {
        const eqPos = c.indexOf("=");
        const name = eqPos > -1 ? c.substr(0, eqPos).trim() : c.trim();
        if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
        }
      });
    }

    if (!prefs.marketing) {
      // Remove marketing cookies
      document.cookie.split(";").forEach((c) => {
        const eqPos = c.indexOf("=");
        const name = eqPos > -1 ? c.substr(0, eqPos).trim() : c.trim();
        if (name.includes('_fbp') || name.includes('li_sugr') || name.includes('ads_')) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
        }
      });
    }

    // Initialize analytics if consented
    if (prefs.analytics && typeof window !== 'undefined') {
      // Initialize Google Analytics
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      script.async = true;
      document.head.appendChild(script);
      
      window.dataLayer = window.dataLayer || [];
      const gtag: GtagFunction = (...args: unknown[]) => {
        window.dataLayer?.push(args);
      };
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=Strict;Secure'
      });
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetAllCookies = () => {
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      const eqPos = c.indexOf("=");
      const name = eqPos > -1 ? c.substr(0, eqPos).trim() : c.trim();
      if (name !== 'cookie-preferences' && name !== 'cookie-consent-timestamp') {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
      }
    });

    // Reset preferences
    localStorage.removeItem('cookie-preferences');
    localStorage.removeItem('cookie-consent-timestamp');
    
    // Reset state
    setPreferences({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
    setHasInteracted(false);
    setShowBanner(true);
    
    // Reload page to ensure clean state
    window.location.reload();
  };

  const openSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

  // Global function to open cookie settings from anywhere
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.openCookieSettings = () => setShowSettings(true);
      window.resetAllCookies = resetAllCookies;
    }
  }, []);

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && !hasInteracted && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="container-custom px-4 py-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Cookie Consent</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We use cookies to enhance your browsing experience and analyze website traffic. 
                      By clicking &quot;Accept All&quot;, you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                      <button 
                        onClick={openSettings}
                        className="text-blue-500 hover:text-blue-400 underline"
                      >
                        cookie policy
                      </button>.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={openSettings}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Customize
                  </button>
                  <button
                    onClick={acceptNecessaryOnly}
                    className="px-4 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded transition-colors"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-medium"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Settings className="w-6 h-6 text-blue-500" />
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-white font-semibold text-sm">Swedish Law Compliance</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    This consent interface complies with Swedish Electronic Communications Act and 2025 IMY guidelines. 
                    Your choices are respected and can be changed at any time.
                  </p>
                </div>

                {/* Necessary Cookies */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <h3 className="text-white font-semibold">Strictly Necessary Cookies</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-sm">Always Active</span>
                      <div className="w-10 h-5 bg-green-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies are essential for the website to function and cannot be disabled. 
                    They include session management, security tokens, and load balancing.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-blue-500" />
                      <h3 className="text-white font-semibold">Analytics Cookies</h3>
                    </div>
                    <button
                      onClick={() => updatePreference('analytics', !preferences.analytics)}
                      className="relative"
                    >
                      <div className={`w-10 h-5 rounded-full transition-colors ${
                        preferences.analytics ? 'bg-blue-500' : 'bg-gray-600'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                          preferences.analytics ? 'translate-x-5' : 'translate-x-0.5'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Help us understand how visitors interact with our website through Google Analytics. 
                    Data is anonymized and used to improve user experience.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-500" />
                      <h3 className="text-white font-semibold">Functional Cookies</h3>
                    </div>
                    <button
                      onClick={() => updatePreference('functional', !preferences.functional)}
                      className="relative"
                    >
                      <div className={`w-10 h-5 rounded-full transition-colors ${
                        preferences.functional ? 'bg-purple-500' : 'bg-gray-600'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                          preferences.functional ? 'translate-x-5' : 'translate-x-0.5'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Remember your preferences such as language selection, theme settings, and form data 
                    to provide a personalized experience.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Share className="w-5 h-5 text-orange-500" />
                      <h3 className="text-white font-semibold">Marketing Cookies</h3>
                    </div>
                    <button
                      onClick={() => updatePreference('marketing', !preferences.marketing)}
                      className="relative"
                    >
                      <div className={`w-10 h-5 rounded-full transition-colors ${
                        preferences.marketing ? 'bg-orange-500' : 'bg-gray-600'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                          preferences.marketing ? 'translate-x-5' : 'translate-x-0.5'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Used for advertising and social media integration. Help us deliver relevant content 
                    and measure campaign effectiveness.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-700">
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-4 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded transition-colors"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => savePreferences(preferences)}
                  className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}