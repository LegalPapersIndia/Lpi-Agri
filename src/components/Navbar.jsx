import React, { useState, useEffect } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Menu, X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  // Animation variants
  const sidebarVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 40 } },
    opened: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 40, staggerChildren: 0.07 } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 30 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 sm:py-4 bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
          : 'py-4 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group relative z-10">
            <div className="bg-green-700 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-md shadow-green-900/20 group-hover:scale-105 transition-transform">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                LPI <span className="text-green-700">AGRO</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-[0.18em] mt-0.5">
                Global Harvest
              </span>
            </div>
          </Link>

          {/* Desktop / Tablet Navigation */}
          <div className="hidden md:flex items-center bg-white/60 backdrop-blur-sm px-1.5 py-1.5 rounded-2xl border border-gray-200/60 shadow-sm">
            {navLinks.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`relative px-4 lg:px-5 py-2.5 text-sm lg:text-base font-semibold transition-colors rounded-xl ${
                  isActive(path)
                    ? 'text-green-700'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {isActive(path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm -z-10 border border-gray-100"
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
                <span className="relative z-10">{t(key)}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">

            {/* Language Selector – Desktop/Tablet */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow transition-all bg-white/80 backdrop-blur-sm"
                aria-label="Change language"
              >
                <span className="text-xl sm:text-2xl leading-none">
                  {languages.find(l => l.code === language)?.flag || 'GB'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    className="absolute right-0 mt-3 w-64 sm:w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/70 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium transition-colors ${
                          language === lang.code
                            ? 'bg-green-600 text-white'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          {lang.name}
                        </div>
                        {language === lang.code && <Check className="w-5 h-5" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 sm:p-3 rounded-xl bg-green-700 text-white hover:bg-green-800 transition-colors shadow-md"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile Sidebar ──────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed inset-y-0 right-0 w-[85vw] max-w-[380px] bg-white z-[1000] shadow-2xl flex flex-col md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-700 p-2.5 rounded-xl">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-black tracking-tight">
                    LPI <span className="text-green-700">AGRI</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-8 space-y-8">
                {/* Navigation */}
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 mb-3">
                    {t('navigation') || 'Navigation'}
                  </p>
                  {navLinks.map(({ key, path }) => (
                    <motion.div key={key} variants={itemVariants}>
                      <Link
                        to={path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-semibold transition-all ${
                          isActive(path)
                            ? 'bg-green-600 text-white shadow-md'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        {t(key)}
                        <ArrowRight
                          className={`w-5 h-5 transition-transform ${
                            isActive(path) ? 'translate-x-1 opacity-100' : 'opacity-40'
                          }`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Language Selector – Mobile */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 mb-4">
                    Language / اللغة
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex flex-col items-center p-4 rounded-2xl border transition-all text-center ${
                          language === lang.code
                            ? 'border-green-600 bg-green-50 text-green-800'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-4xl mb-2">{lang.flag}</span>
                        <span className="text-xs font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50 mt-auto border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  LPI AGRO © {new Date().getFullYear()}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;