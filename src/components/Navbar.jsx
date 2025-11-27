// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Globe, Wheat, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Only one new install!

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close menus when clicking outside
  useEffect(() => {
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-emerald-700 via-green-700 to-lime-800 shadow-2xl sticky top-0 z-50 border-b-4 border-amber-500 backdrop-blur-xl bg-opacity-95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo - With Glow & Bounce */}
          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="bg-amber-400 p-3 rounded-full shadow-xl group-hover:shadow-amber-400/50 transition-all duration-300">
                <Wheat className="w-9 h-9 text-green-900" />
              </div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 bg-white p-1.5 rounded-full shadow-lg"
              >
                <Globe className="w-5 h-5 text-emerald-600" />
              </motion.div>
            </motion.div>

            <div>
              <h1 className="text-3xl font-black text-white tracking-tight">
                LPI <span className="text-amber-300 drop-shadow-md">AGRI</span>
              </h1>
              <p className="text-xs text-amber-200 font-bold tracking-widest uppercase opacity-90">
                Global Harvest Traders
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(({ key, path }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={path}
                  className={`relative px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 overflow-hidden group ${
                    isActive(path)
                      ? 'bg-amber-400 text-green-900 shadow-xl'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  {isActive(path) && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-amber-400 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {isActive(path) && <Leaf className="w-5 h-5 relative z-10" />}
                  <span className="relative z-10">{t(key)}</span>
                  {!isActive(path) && (
                    <motion.div
                      className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-20 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Language Selector */}
            <div className="relative ml-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full transition backdrop-blur-md border border-white/20 shadow-lg"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">
                  {languages.find(l => l.code === language)?.flag}
                </span>
                <motion.div
                  animate={{ rotate: isLangOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                    className="absolute right-0 mt-3 w-72 bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden z-50"
                  >
                    <div className="p-5 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-t-3xl">
                      <p className="font-bold text-lg flex items-center gap-2">
                        <Globe className="w-6 h-6" /> {t('selectLanguage') || 'Select Language'}
                      </p>
                    </div>
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileHover={{ x: 8 }}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-6 py-4 flex items-center justify-between transition-all ${
                          language === lang.code
                            ? 'bg-emerald-50 font-bold text-emerald-800 border-l-4 border-emerald-600'
                            : 'text-gray-800 hover:bg-amber-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{lang.flag}</span>
                          <span className="font-medium text-lg">{lang.name}</span>
                        </div>
                        {language === lang.code && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-emerald-600 text-2xl"
                          >
                            ✓
                          </motion.span>
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition backdrop-blur-md"
          >
            <motion.svg
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu - Slide Down */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-gradient-to-b from-green-800 to-emerald-900 rounded-b-3xl overflow-hidden border-t-4 border-amber-400"
            >
              <div className="py-4 px-6 space-y-2">
                {navLinks.map(({ key, path }) => (
                  <motion.div
                    key={key}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-8 py-4 text-white text-lg font-semibold rounded-xl transition flex items-center gap-3 ${
                        isActive(path)
                          ? 'bg-amber-400 text-green-900 shadow-lg'
                          : 'hover:bg-amber-500 hover:bg-opacity-20'
                      }`}
                    >
                      {isActive(path) && <Wheat className="w-6 h-6" />}
                      {t(key)}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-6 pb-6 border-t-2 border-amber-400 pt-6">
                <p className="text-amber-200 font-bold mb-4 flex items-center gap-2 text-lg">
                  <Globe className="w-6 h-6" /> {t('selectLanguage')}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-4 rounded-2xl text-white text-left flex items-center gap-3 transition-all shadow-md ${
                        language === lang.code
                          ? 'bg-amber-400 text-green-900 font-bold'
                          : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                      }`}
                    >
                      <span className="text-3xl">{lang.flag}</span>
                      <span className="text-base font-medium">{lang.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;