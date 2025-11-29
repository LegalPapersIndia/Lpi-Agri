// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Menu, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: 'GB' },
    { code: 'ru', name: 'Русский', flag: 'RU' },
    { code: 'ar', name: 'العربية', flag: 'SA' },
    { code: 'fr', name: 'Français', flag: 'FR' },
    { code: 'es', name: 'Español', flag: 'ES' },
    { code: 'zh', name: '中文', flag: 'CN' },
    { code: 'hi', name: 'हिन्दी', flag: 'IN' },
  ];

  const navLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'export', path: '/export' },
    { key: 'import', path: '/import' },
    { key: 'products', path: '/products' },
    { key: 'contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Close menus on route change
  useEffect(() => {
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo - Clean & Professional */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="bg-green-700 p-2.5 rounded-xl shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-900">
                LPI <span className="text-green-700">AGRI</span>
              </h1>
              <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                Global Harvest Traders
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ key, path }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(path)
                      ? 'text-green-700'
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  {isActive(path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-700"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{t(key)}</span>
                </Link>
              </motion.div>
            ))}

            {/* Desktop Language Selector */}
            <div className="relative ml-6">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2.5 px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-green-700 hover:text-green-700 transition"
              >
                <Globe className="w-4 h-4" />
                <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="py-3">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                          className={`w-full px-5 py-3 flex items-center justify-between text-left text-sm transition hover:bg-gray-50 ${
                            language === lang.code ? 'text-green-700 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-2xl">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </div>
                          {language === lang.code && <Check className="w-5 h-5 text-green-700" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Clean & Professional */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-700 p-2.5 rounded-lg">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl text-gray-900">LPI AGRI</h2>
                    <p className="text-xs text-gray-500">Global Harvest Traders</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <nav className="p-6 space-y-2">
                {navLinks.map(({ key, path }) => (
                  <Link
                    key={key}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full px-5 py-4 rounded-lg text-lg font-medium transition ${
                      isActive(path)
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t(key)}
                  </Link>
                ))}
              </nav>

              {/* Mobile Language Selector */}
              <div className="border-t border-gray-100 p-6">
                <p className="text-sm font-semibold text-gray-600 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5" /> {t('selectLanguage') || 'Language'}
                </p>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }}
                      className={`w-full px-5 py-3.5 rounded-lg flex items-center justify-between text-left transition ${
                        language === lang.code
                          ? 'bg-green-50 text-green-700 border border-green-200 font-medium'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      {language === lang.code && <Check className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;