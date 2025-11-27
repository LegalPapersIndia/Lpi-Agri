// src/components/Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { Leaf, Wheat, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Only enable advanced mouse parallax on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const parallaxX = useTransform(smoothX, [-300, 300], [-30, 30]);
  const parallaxY = useTransform(smoothY, [-300, 300], [-20, 20]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const rect = document.body.getBoundingClientRect();
      mouseX.set(e.clientX - rect.width / 2);
      mouseY.set(e.clientY - rect.height / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-lime-900">

      {/* Golden Border - Mobile Optimized */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ clipPath: "inset(100% round 12px)" }}
        animate={{ clipPath: "inset(0% round 12px)" }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 border-8 border-amber-400/20 rounded-3xl m-4 md:m-8" />
        <div className="absolute inset-0 border-4 border-amber-400/40 rounded-3xl m-8 md:m-12" />
      </motion.div>

      {/* Parallax Grain Field - Disabled on Mobile */}
      {!isMobile && (
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute inset-0 opacity-30 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1.5 bg-gradient-to-t from-amber-300 via-yellow-400 to-green-400 rounded-t-full"
              style={{
                height: `${80 + Math.random() * 100}px`,
                left: `${(i / 60) * 100}%`,
                transform: `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`,
              }}
              animate={{ y: [0, -30, 0] }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Floating Wheat Icons - Reduced on Mobile */}
      {[...Array(isMobile ? 5 : 10)].map((_, i) => (
        <motion.div
          key={`wheat-${i}`}
          className="absolute text-amber-300 opacity-60 pointer-events-none"
          initial={{ y: -100 }}
          animate={{ y: window.innerHeight + 100, rotate: 360 }}
          transition={{
            duration: 18 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
          style={{
            left: `${10 + (i * (isMobile ? 18 : 10))}%`,
            top: "-10%",
          }}
        >
          <Wheat className={`drop-shadow-2xl ${isMobile ? 'w-10 h-10' : 'w-14 h-14'}`} />
        </motion.div>
      ))}

      {/* Main Content - Fully Responsive */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center z-10">

          {/* Brand Name */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none">
              <span className="inline-block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl mt-7">
                LPI
              </span>
              <span className="inline-block text-white ml-4 md:ml-8">
                AGRI
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-3xl lg:text-4xl text-amber-200 font-bold tracking-widest mt-6 uppercase"
            >
              Global Harvest Excellence
            </motion.p>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 md:mt-16"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
              {t('exportingTrust') || "Exporting India's Golden Harvest"}
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-green-100 mt-6 font-medium max-w-5xl mx-auto">
              Premium Basmati • Spices • Pulses • Oilseeds • Grains
            </p>
          </motion.div>

          {/* CTA Buttons - Mobile Stacked */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 md:mt-20"
          >
            <Link
              to="/products"
              className="group relative px-10 md:px-14 py-6 md:py-7 bg-gradient-to-r from-amber-500 to-yellow-500 text-green-900 rounded-full text-xl md:text-2xl font-black uppercase tracking-wider shadow-2xl overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <Leaf className="w-8 h-8 md:w-9 h-9 group-hover:rotate-12 transition" />
                Explore Products
                <ArrowRight className="w-7 h-7 md:w-8 h-8 group-hover:translate-x-2 transition" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </Link>

            <Link
              to="/contact"
              className="px-10 md:px-14 py-6 md:py-7 border-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-green-900 rounded-full text-xl md:text-2xl font-bold uppercase tracking-wider transition-all duration-500 shadow-xl w-full sm:w-auto text-center"
            >
              Get Quote Now
            </Link>
          </motion.div>

          {/* Trust Badges - Responsive Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 mt-16 md:mt-24 px-6"
          >
            {[
              "APEDA Registered",
              "FSSAI Certified",
              "ISO 9001:2015",
              "20+ Countries Served",
              "100% Traceable Supply",
              "Farm-to-Fork Quality"
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-full border border-amber-400/40 shadow-xl"
              >
                <CheckCircle className="w-6 h-6 text-amber-300" />
                <span className="font-bold text-amber-100 text-sm md:text-base">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-amber-300"
          >
            <ChevronDown className="w-10 h-10" />
          </motion.div>
        </motion.div>
      )}

      {/* Mouse Glow - Desktop Only */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-20"
          style={{
            background: `radial-gradient(600px at ${mouseX + window.innerWidth / 2}px ${mouseY + window.innerHeight / 2}px, rgba(120, 219, 120, 0.15), transparent 80%)`,
          }}
        />
      )}
    </section>
  );
};

export default Hero;