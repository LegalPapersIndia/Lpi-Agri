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

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Click outside to close mobile menu
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-emerald-800 via-green-700 to-lime-800 shadow-2xl z-50 border-b-4 border-amber-500 backdrop-blur-xl bg-opacity-95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO - FIXED: added missing </div> */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="bg-amber-400 p-3 rounded-full shadow-2xl group-hover:shadow-amber-400/70 transition-all">
                <Wheat className="w-8 h-8 text-green-900" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 bg-white p-1.5 rounded-full shadow-lg"
              >
                <Globe className="w-5 h-5 text-emerald-700" />
              </motion.div>
            </motion.div>

            {/* THIS </div> WAS MISSING BEFORE - caused mobile layout to break! */}
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black text-white tracking-tighter">
                LPI <span className="text-amber-300">AGRI</span>
              </h1>
              <p className="text-xs text-amber-200 font-bold tracking-widest uppercase">
                Global Harvest Traders
              </p>
            </div>
          </Link>
          {/* END LOGO */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map(({ key, path }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={path}
                  className={`relative px-6 py-3 rounded-full text-base font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive(path) ? 'text-green-900' : 'text-white hover:text-amber-200'
                  }`}
                >
                  {isActive(path) && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-amber-400 rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive(path) && <Leaf className="w-5 h-5 relative z-10" />}
                  <span className="relative z-10 px-2">{t(key)}</span>
                </Link>
              </motion.div>
            ))}

            {/* Desktop Language Selector */}
            <div className="relative ml-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition backdrop-blur-md border border-white/30 font-medium"
              >
                <Globe className="w-5 h-5" />
                <span>{languages.find(l => l.code === language)?.flag}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border-2 border-amber-200 overflow-hidden z-50"
                  >
                    <div className="p-5 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
                      <p className="font-black text-lg flex items-center gap-2">
                        <Globe className="w-6 h-6" /> {t('selectLanguage') || 'Select Language'}
                      </p>
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                        className={`w-full text-left px-6 py-5 flex items-center justify-between font-medium transition-all ${
                          language === lang.code
                            ? 'bg-amber-50 text-emerald-800 border-l-4 border-emerald-600'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{lang.flag}</span>
                          <span className="text-lg">{lang.name}</span>
                        </div>
                        {language === lang.code && <span className="text-2xl text-emerald-600">Check</span>}
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
            className="lg:hidden text-white p-3 rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur-md"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Now works perfectly */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-gradient-to-b from-emerald-900 via-green-800 to-lime-900 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-400 p-3 rounded-full">
                      <Wheat className="w-8 h-8 text-green-900" />
                    </div>
                    <h2 className="text-2xl font-black text-white">LPI AGRI</h2>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
                  >
                    <X className="w-7 h-7 text-white" />
                  </button>
                </div>

                <nav className="space-y-4 mb-10">
                  {navLinks.map(({ key, path }) => (
                    <Link
                      key={key}
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-5 rounded-2xl text-xl font-bold transition-all ${
                        isActive(path)
                          ? 'bg-amber-400 text-green-900 shadow-xl'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {isActive(path) && <Wheat className="w-7 h-7" />}
                        {t(key)}
                      </div>
                    </Link>
                  ))}
                </nav>

                <div className="border-t-4 border-amber-400 pt-8">
                  <p className="text-amber-300 font-black text-lg mb-6 flex items-center gap-3">
                    <Globe className="w-7 h-7" /> {t('selectLanguage')}
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`px-6 py-5 rounded-2xl text-left flex items-center justify-between font-bold transition-all shadow-lg ${
                          language === lang.code
                            ? 'bg-amber-400 text-green-900'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <div className="flex items-center gap-5">
                          <span className="text-4xl">{lang.flag}</span>
                          <span className="text-lg">{lang.name}</span>
                        </div>
                        {language === lang.code && <span className="text-2xl">Check</span>}
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