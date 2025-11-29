// src/components/Hero.jsx - Professional Agriculture Corporate Version
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Globe, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const backgrounds = [
  "https://images.unsplash.com/photo-1592982537506-7f2f8e5b5e8f?w=1920&q=90",
  "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=1920&q=90",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90",
  "https://images.unsplash.com/photo-1560493676-04071c5f4678?w=1920&q=90",
  "https://images.unsplash.com/photo-1589924691995-400dc9ecc0af?w=1920&q=90",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=90",
];

const Hero = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 8000); // Slower, more premium feel
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[750px] overflow-hidden mt-20">

      {/* Background Carousel - Subtle Parallax Effect */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgrounds[currentIndex]})`,
            }}
          />
        </AnimatePresence>

        {/* Professional Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Subtle Texture (optional, remove if too much) */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Hero Content - Clean & Authoritative */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* Logo & Tagline */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white">
              LPI <span className="text-green-700">AGRI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-widest mt-4 uppercase">
              Global Harvest Excellence Since 1998
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto"
          >
            {t('exportingTrust') || "Exporting India's Finest Agricultural Produce"}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-xl md:text-2xl text-gray-200 font-light mt-8 max-w-4xl mx-auto leading-relaxed"
          >
            Premium Basmati Rice • Spices • Pulses • Oilseeds • Grains
          </motion.p>

          {/* CTA Buttons - Professional Green */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          >
            <Link
              to="/products"
              className="group px-10 py-5 bg-green-700 text-white rounded-xl text-xl font-semibold uppercase tracking-wider shadow-xl hover:bg-green-800 hover:shadow-2xl transition-all duration-300 flex items-center gap-4"
            >
              Explore Our Products
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-white/80 text-white rounded-xl text-xl font-semibold uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Trust Indicators - Clean & Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-center gap-6 mt-20 flex-wrap"
          >
            {[
              "APEDA Registered",
              "FSSAI Certified",
              "ISO 9001:2015",
              "Exporting to 25+ Countries",
              "100% Traceable Supply Chain"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium text-sm md:text-base">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>

      {/* Carousel Dots - Minimal */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {backgrounds.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex
                ? 'bg-green-500 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;