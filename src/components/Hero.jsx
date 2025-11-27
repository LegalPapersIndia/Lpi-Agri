// src/components/Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { Leaf, Wheat, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const parallaxX = useTransform(smoothX, [-300, 300], [-50, 50]);
  const parallaxY = useTransform(smoothY, [-300, 300], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return; // Disable on mobile
      const rect = document.body.getBoundingClientRect();
      mouseX.set(e.clientX - rect.width / 2);
      mouseY.set(e.clientY - rect.height / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <section className="relative h-screen min-h-[700px] overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-lime-900">
        {/* Animated Golden Border - Draws Itself */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ clipPath: "inset(100% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 border-8 border-amber-400/20 rounded-3xl m-4" />
          <div className="absolute inset-0 border-4 border-amber-400/40 rounded-3xl m-8" />
        </motion.div>

        {/* Parallax Grain Field */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute inset-0 opacity-40"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1.5 bg-gradient-to-t from-amber-300 via-yellow-400 to-green-400 rounded-t-full"
              style={{
                height: `${60 + Math.random() * 120}px`,
                left: `${(i / 80) * 100}%`,
                transform: `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`,
              }}
              animate={{ y: [0, -40, 0] }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </motion.div>

        {/* Floating Wheat with Cursor Interaction */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`wheat-${i}`}
            className="absolute text-amber-300 opacity-50 pointer-events-none"
            initial={{ y: -150 }}
            animate={{ y: [window.innerHeight + 150], rotate: 720 }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              left: `${10 + (i * 10)}%`,
            }}
          >
            <Wheat className="w-14 h-14 drop-shadow-2xl" />
          </motion.div>
        ))}

        {/* Main Content */}
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto text-center z-10">
            {/* Brand Name - Ultra Premium */}
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none mt-5">
                <motion.span
                  className="inline-block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent mt-10"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    textShadow: "0 20px 40px rgba(0,0,0,0.8)",
                    filter: "drop-shadow(0 0 30px rgba(251,191,36,0.5))",
                  }}
                >
                  LPI
                </motion.span>
                <motion.span
                  className="inline-block text-white ml-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  AGRI
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-2xl md:text-4xl text-amber-200 font-bold tracking-widest mt-6 uppercase"
              >
                Global Harvest Excellence
              </motion.p>
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {t('exportingTrust') || "Exporting India's Golden Harvest"}
              </h2>
              <p className="text-2xl md:text-4xl text-green-100 mt-6 font-medium">
                Premium Basmati • Spices • Pulses • Oilseeds • Grains
              </p>
            </motion.div>

            {/* CTA Buttons - With Inner Glow */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16"
            >
              <Link
                to="/products"
                className="group relative px-14 py-7 bg-gradient-to-r from-amber-500 to-yellow-500 text-green-900 rounded-full text-2xl font-black uppercase tracking-wider shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Leaf className="w-9 h-9 group-hover:rotate-12 transition" />
                  {t( 'Explore  Products' )}
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </Link>

              <Link
                to="/contact"
                className="px-14 py-7 border-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-green-900 rounded-full text-2xl font-bold uppercase tracking-wider transition-all duration-500 backdrop-blur-sm shadow-xl"
              >
                {t('Get Quote')}
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10 mt-20"
            >
              {[
                "APEDA Registered",
                "FSSAI Certified",
                "ISO 9001:2015",
                "20+ Countries Served",
                "100% Traceable Supply",
                "Farm-to-Fork Quality"
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-8 py-5 rounded-full border border-amber-400/40 shadow-xl"
                >
                  <CheckCircle className="w-7 h-7 text-amber-300" />
                  <span className="font-bold text-amber-100 text-lg">{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
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

        {/* Mouse Follow Glow - Desktop Only */}
        {typeof window !== 'undefined' && window.innerWidth >= 768 && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-20"
            style={{
              background: `radial-gradient(800px at ${mouseX + window.innerWidth / 2}px ${mouseY + window.innerHeight / 2}px, rgba(120, 219, 120, 0.2), transparent 70%)`,
            }}
          />
        )}
      </section>
    </>
  );
};

export default Hero;