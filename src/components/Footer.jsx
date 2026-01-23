// src/components/Footer.jsx - Professional Corporate Version
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { 
  Phone, Mail, MapPin, Globe, Facebook, Instagram, Linkedin, Youtube, Send 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('home') || 'Home', href: "/" },
    { name: t('about') || 'About Us', href: "/about" },
    { name: t('products') || 'Products', href: "/products" },
    { name: t('export') || 'Export', href: "/export" },
    { name: t('import') || 'Import', href: "/import" },
    { name: t('contact') || 'Contact', href: "/contact" },
  ];

  const certifications = ["APEDA", "FSSAI", "ISO 9001:2015", "HACCP", "HALAL", "USDA Organic"];

  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & Contact Info */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">
                  LPI <span className="text-green-400">AGRI</span>
                </h1>
                <p className="text-green-300 text-sm font-medium tracking-wider">
                  Global Harvest Excellence
                </p>
              </div>
            </div>

            <p className="text-green-200 leading-relaxed max-w-xs">
              Leading exporter of premium Indian Basmati rice, spices, pulses, and oilseeds to over 25 countries with full traceability and international certifications.
            </p>

            <div className="space-y-4 text-green-200">
              <a href="tel:+917505266931" className="flex items-center gap-4 hover:text-white transition">
                <Phone className="w-5 h-5" />
                <span>+91 75052 66931</span>
              </a>
              <a href="mailto:info@lpiagri.com" className="flex items-center gap-4 hover:text-white transition">
                <Mail className="w-5 h-5" />
                <span>info@lpiagri.com</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Noida , Uttar Pradesh <br />India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-green-400 mb-6">
              {t('quickLinks') || 'Quick Links'}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-green-200 hover:text-white transition flex items-center gap-3 text-lg"
                  >
                    <span className="text-green-400">→</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & WhatsApp */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-6">
                {t('followUs') || 'Connect With Us'}
              </h3>
              <div className="flex gap-5">
                <a href="https://facebook.com/lpiagri" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/lpiagri" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/company/lpiagri" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://youtube.com/@lpiagri" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20would%20like%20to%20discuss%20import%20opportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-600 px-8 py-5 rounded-xl font-bold text-white shadow-lg transition-all"
            >
              <Send className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Certifications & Language */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-6">
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="bg-green-800/50 border border-green-700 rounded-lg px-4 py-3 text-center text-sm font-medium text-green-100"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-800/50 rounded-xl p-5 border border-green-700">
              <div className="flex items-center gap-3 text-green-300">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Language</span>
              </div>
              <p className="text-xl font-bold mt-2">
                {language === 'en' ? 'English' : 
                 language === 'hi' ? 'हिन्दी' : 
                 language === 'ar' ? 'العربية' :
                 language === 'ru' ? 'Русский' :
                 language === 'zh' ? '中文' : language.toUpperCase()}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-10 border-t border-green-700 text-center"
        >
          <p className="text-green-300 font-medium">
            © {currentYear} <span className="text-white font-bold">LPI AGRO</span> • All Rights Reserved
          </p>
          <p className="text-green-400 text-sm mt-3">
            Proudly Exporting India’s Finest Harvest Worldwide
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;