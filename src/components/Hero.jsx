// src/components/Hero.jsx - Ultra-Premium Version
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { ArrowRight, CheckCircle, MousePointer2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const backgrounds = [
  "https://www.azorobotics.com/images/Article_Images/ImageForArticle_751_17453071169997623.jpg",
  "https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/674882e878947fd98ea04607_post-23-small.webp",
  "https://m.economictimes.com/thumb/height-450,width-600,imgsize-190056,msid-121692746/nano-urea-empowering-indian-agriculture.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBX2GkJBcYV7vAN7uiNWRwV-AM0Z7WSVHewA&s",
  "https://upload.wikimedia.org/wikipedia/commons/8/86/PivotWithDrops.JPG",
  "https://www.azocleantech.com/images/Article_Images/ImageForArticle_1633_16697334671071295.jpg",
];

const Hero = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen min-h-[700px] flex items-center overflow-hidden">
      
      {/* Background Layer with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
          />
        </AnimatePresence>
        
        {/* Dynamic Multi-Stage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-4xl">
          

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]"
          >
            LPI <span className="text-green-500">AGRO</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold opacity-90 mt-4 block">
              {t('exportingTrust') || "India's Finest Harvest"}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium"
          >
            Sourcing, processing, and exporting premium agricultural commodities to 25+ countries. From farm to global markets, we ensure 100% purity and traceability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="group relative px-8 py-4 bg-green-600 text-white rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <span className="flex items-center gap-2">
                Explore Products <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-2xl font-bold transition-all hover:scale-105"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-y-4 gap-x-8 border-t border-white/10 pt-8"
          >
            {[
              "APEDA Registered",
              "ISO 9001:2015",
              "FSSAI Certified",
              "Global Traceability"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-default">
                <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-sm font-bold uppercase tracking-tight">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modern Navigation Controls */}
      <div className="absolute bottom-10 right-6 md:right-12 z-30 flex flex-col gap-4">
        {backgrounds.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="group flex items-center gap-4 text-right"
          >
            <span className={`text-xs font-black transition-all duration-500 opacity-0 group-hover:opacity-100 ${currentIndex === i ? 'opacity-100 text-green-500' : 'text-white'}`}>
              0{i + 1}
            </span>
            <div className={`h-1 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-green-500' : 'w-4 bg-white/30 group-hover:bg-white/60'}`} />
          </button>
        ))}
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default Hero;