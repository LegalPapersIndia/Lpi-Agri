// src/components/Footer.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { 
  Facebook, Instagram, Linkedin, Twitter, Youtube, 
  Phone, Mail, MapPin, Globe, Send, Wheat, Sparkles 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "https://facebook.com/lpiagri", color: "from-blue-600 to-blue-700" },
    { icon: Instagram, name: "Instagram", url: "https://instagram.com/lpiagri", color: "from-pink-500 via-purple-500 to-red-500" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/company/lpiagri", color: "from-blue-700 to-blue-800" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/lpiagri", color: "from-sky-500 to-sky-600" },
    { icon: Youtube, name: "YouTube", url: "https://youtube.com/@lpiagri", color: "from-red-600 to-red-700" },
    { icon: Send, name: "WhatsApp", url: "https://wa.me/917505266931", color: "from-green-500 to-emerald-600" },
  ];

  const quickLinks = [
    { name: t('home'), href: "/" },
    { name: t('about'), href: "/about" },
    { name: t('export'), href: "/export" },
    { name: t('import'), href: "/import" },
    { name: t('products'), href: "/products" },
    { name: t('contact'), href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-emerald-950 via-green-900 to-emerald-900 overflow-hidden">
      {/* Animated Golden Wheat Field Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-2 bg-gradient-to-t from-amber-400 to-yellow-300 rounded-t-full"
            style={{
              height: `${80 + Math.random() * 120}px`,
              left: `${(i / 30) * 100}%`,
              transform: `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`,
            }}
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & Tagline */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 12 }}
                className="bg-gradient-to-br from-amber-400 to-yellow-500 p-4 rounded-2xl shadow-2xl"
              >
                <Wheat className="w-12 h-12 text-green-900" />
              </motion.div>
              <div>
                <h1 className="text-5xl font-black text-white">
                  LPI <span className="text-amber-300">AGRI</span>
                </h1>
                <p className="text-amber-200 font-bold tracking-widest text-sm">Global Harvest Excellence</p>
              </div>
            </div>

            <p className="text-green-100 leading-relaxed max-w-xs">
              Leading exporter of premium Indian Basmati, Spices, Pulses & Oilseeds to 20+ countries with full traceability.
            </p>

            <div className="space-y-4 text-green-200">
              <motion.a href="tel:+917505266931" className="flex items-center gap-4 group">
                <div className="bg-amber-400/20 p-3 rounded-full group-hover:bg-amber-400 transition">
                  <Phone className="w-6 h-6 text-amber-300" />
                </div>
                <span className="group-hover:text-amber-300 transition">+91 75052 66931</span>
              </motion.a>
              <motion.a href="mailto:info@lpiagri.com" className="flex items-center gap-4 group">
                <div className="bg-amber-400/20 p-3 rounded-full group-hover:bg-amber-400 transition">
                  <Mail className="w-6 h-6 text-amber-300" />
                </div>
                <span className="group-hover:text-amber-300 transition">info@lpiagri.com</span>
              </motion.a>
              <div className="flex items-start gap-4">
                <div className="bg-amber-400/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-amber-300" />
                </div>
                <span>Mumbai, Maharashtra<br/>India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-amber-300 mb-8 flex items-center gap-3">
              <Sparkles className="w-7 h-7" /> {t('quickLinks') || 'Quick Links'}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-amber-300 transition flex items-center gap-3 text-lg font-medium group"
                  >
                    <span className="text-amber-400 group-hover:translate-x-2 transition">→</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media - 3D Hover Cards */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-amber-300 mb-8 flex items-center gap-3">
              <Globe className="w-7 h-7" /> {t('followUs') || 'Connect With Us'}
            </h3>

            <div className="grid grid-cols-3 gap-5 mb-8">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} blur-xl opacity-70 group-hover:opacity-100 transition`} />
                  <div className="relative bg-black/30 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl group-hover:shadow-amber-400/50 transition-all">
                    <social.icon className="w-8 h-8 text-white mx-auto" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20would%20like%20to%20inquire%20about..."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 px-8 py-5 rounded-full font-bold text-white shadow-2xl text-lg"
            >
              <Send className="w-6 h-6" />
              Chat on WhatsApp Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Certifications & Language */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-amber-300 mb-6">Certifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {["APEDA", "FSSAI", "ISO 9001", "HACCP", "HALAL", "ORGANIC"].map((cert) => (
                  <motion.div
                    key={cert}
                    whileHover={{ scale: 1.1 }}
                    className="bg-amber-400/20 border border-amber-400/50 rounded-xl p-4 text-center font-bold text-amber-200 backdrop-blur-sm"
                  >
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-amber-400/30">
              <div className="flex items-center gap-3 text-amber-300 mb-3">
                <Globe className="w-6 h-6" />
                <span className="font-bold">Current Language</span>
              </div>
              <p className="text-2xl font-bold text-white">
                {language === 'en' ? 'GB English' : language === 'hi' ? 'IN हिन्दी' : language.toUpperCase()}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Final Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t-2 border-amber-400/30 text-center"
        >
          <p className="text-amber-200 font-medium text-lg">
            © {currentYear} <span className="text-amber-400 font-black">LPI AGRI</span> • Exporting India's Golden Harvest
          </p>
          <p className="text-green-300 text-sm mt-3 flex items-center justify-center gap-2">
            Proudly Made in India with Love
            <span className="text-2xl">India Flag</span>
          </p>
        </motion.div>
      </div>

      {/* Floating Golden Wheat Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-400 opacity-30 pointer-events-none"
          initial={{ y: "100vh" }}
          animate={{ y: "-100px" }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
          style={{ left: `${10 + i * 15}%` }}
        >
          <Wheat className="w-16 h-16" />
        </motion.div>
      ))}
    </footer>
  );
};

export default Footer;