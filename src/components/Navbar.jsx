// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Globe, Wheat, ChevronDown, Menu, X } from 'lucide-react';
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-emerald-700 via-green-700 to-lime-800 shadow-2xl sticky top-0 z-50 border-b-4 border-amber-500 backdrop-blur-xl bg-opacity-95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="bg-amber-400 p-3 rounded-full shadow-xl group-hover:shadow-amber-400/60 transition-shadow">
                <Wheat className="w-8 h-8 text-green-900" />
              </

div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 bg-white p-1.5 rounded-full shadow-lg"
              >
                <Globe className="w-5 h-5 text-emerald-600" />
              </motion.div>
            </motion.div>

            <div className="hidden sm:block">
              <h1 className="text-2xl font-black text-white tracking-tight">
                LPI <span className="text-amber-300">AGRI</span>
              </h1>
              <p className="text-xs text-amber-200 font-bold tracking-widest uppercase">
                Global Harvest Traders
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {navLinks.map(({ key, path }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={path}
                  className={`relative px-5 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive(path)
                      ? 'bg-amber-400 text-green-900 shadow-lg'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  {isActive(path) && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-amber-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive(path) && <Leaf className="w-5 h-5 relative z-10" />}
                  <span className="relative z-10">{t(key)}</span>
                </Link>
              </motion.div>
            ))}

            {/* Desktop Language Selector */}
            <div className="relative ml-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-5 py-3 rounded-full transition backdrop-blur-md border border-white/20"
                aria-label="Select language"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">
                  {languages.find(l => l.code === language)?.flag}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden z-50"
                  >
                    <div className="p-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
                      <p className="font-bold flex items-center gap-2">
                        <Globe className="w-5 h-5" /> {t('selectLanguage')}
                      </p>
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-5 py-4 flex items-center justify-between transition-all ${
                          language === lang.code
                            ? 'bg-emerald-50 text-emerald-800 font-bold border-l-4 border-emerald-600'
                            : 'hover:bg-amber-50 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                        {language === lang.code && '✓'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden text-white p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition backdrop-blur-md"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-b from-emerald-800 to-green-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-amber-300">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-white bg-opacity-20"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <nav className="space-y-3 mb-8">
                  {navLinks.map(({ key, path }) => (
                    <Link
                      key={key}
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl text-lg font-semibold transition-all ${
                        isActive(path)
                          ? 'bg-amber-400 text-green-900 shadow-lg'
                          : 'text-white hover:bg-white hover:bg-opacity-20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isActive(path) && <Wheat className="w-6 h-6" />}
                        {t(key)}
                      </div>
                    </Link>
                  ))}
                </nav>

                <div className="border-t-2 border-amber-400 pt-6">
                  <p className="text-amber-200 font-bold mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6" /> {t('selectLanguage')}
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`px-5 py-4 rounded-xl text-left flex items-center gap-4 transition-all shadow-md ${
                          language === lang.code
                            ? 'bg-amber-400 text-green-900 font-bold'
                            : 'bg-white bg-opacity-10 hover:bg-opacity-20 text-white'
                        }`}
                      >
                        <span className="text-3xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {language === lang.code && <span className="ml-auto text-xl">✓</span>}
                      </button>
                    ))}
                  </div>
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