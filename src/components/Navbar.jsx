// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  ];

  const navItems = ['home', 'about', 'export', 'import', 'products', 'contact'];

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="AgriTrade India" className="h-14 w-auto" />
            <span className="ml-3 text-white text-2xl font-bold hidden sm:block">
              Lpi Agri
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:bg-green-800 px-4 py-2 rounded-md text-lg font-medium transition"
              >
                {t(item)}
              </a>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 text-white hover:bg-green-800 px-4 py-2 rounded-md text-lg font-medium transition"
              >
                <span>🌐</span>
                <span>{languages.find(l => l.code === language)?.flag}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200">
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-green-50 transition ${
                          language === lang.code ? 'bg-green-100 font-semibold' : ''
                        }`}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="text-gray-800">{lang.name}</span>
                        {language === lang.code && <span className="ml-auto text-green-600">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-green-800 p-2 rounded-md"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-green-800">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-white px-4 py-3 text-lg hover:bg-green-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item)}
              </a>
            ))}
            <div className="px-4 py-3 border-t border-green-700">
              <p className="text-white text-sm mb-2">{t('selectLanguage')}</p>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded flex items-center space-x-3 ${
                      language === lang.code ? 'bg-green-900' : 'hover:bg-green-700'
                    } text-white`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;