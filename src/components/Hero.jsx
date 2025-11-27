// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Leaf, Wheat, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Safe client-only detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 768);
      setWindowSize({ width, height });
    };

    handleResize(); // Initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse parallax (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const parallaxX = useTransform(smoothX, [-300, 300], [-40, 40]);
  const parallaxY = useTransform(smoothY, [-300, 300], [-30, 30]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-lime-900">

      {/* Golden Border Reveal */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ clipPath: "inset(100% round 16px)" }}
        animate={{ clipPath: "inset(0% round 16px)" }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 border-8 border-amber-400/20 rounded-3xl m-4 md:m-8" />
        <div className="absolute inset-0 border-4 border-amber-400/40 rounded-3xl m-8 md:m-12" />
      </motion.div>

      {/* Parallax Grain Field - Desktop Only */}
      {!isMobile && (
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute inset-0 opacity-25 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent" />
          {[...Array(45)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1.5 bg-gradient-to-t from-amber-300 via-yellow-400 to-green-300 rounded-t-full"
              style={{
                height: `${100 + Math.random() * 140}px`,
                left: `${(i / 45) * 100}%`,
                transform: `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`,
              }}
              animate={{ y: [0, -50, 0] }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Floating Wheat Icons */}
      {[...Array(isMobile ? 6 : 12)].map((_, i) => (
        <motion.div
          key={`wheat-${i}`}
          className="absolute text-amber-300 opacity-50 pointer-events-none"
          initial={{ y: -150 }}
          animate={{ 
            y: windowSize.height ? windowSize.height + 150 : 1000,
            rotate: 360 
          }}
          transition={{
            duration: 18 + i * 2.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.3,
          }}
          style={{
            left: `${8 + (i * (isMobile ? 15 : 8))}%`,
            top: "-10%",
          }}
        >
          <Wheat className={`${isMobile ? 'w-10 h-10' : 'w-16 h-16'} drop-shadow-2xl`} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center z-10">

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none">
              <span className="inline-block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl">
                LPI
              </span>
              <span className="inline-block text-white ml-6 md:ml-12">
                AGRI
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-2xl lg:text-3xl text-amber-200 font-bold tracking-widest mt-4 uppercase"
            >
              Global Harvest Excellence
            </motion.p>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 md:mt-16"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('exportingTrust') || "Exporting India's Golden Harvest"}
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-green-100 mt-6 font-medium max-w-5xl mx-auto">
              Premium Basmati • Spices • Pulses • Oilseeds • Grains
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 md:mt-24"
          >
            <Link
              to="/products"
              className="group relative px-12 md:px-16 py-7 md:py-9 bg-gradient-to-r from-amber-500 to-yellow-500 text-green-900 rounded-full text-2xl md:text-3xl font-black uppercase tracking-wider shadow-3xl overflow-hidden w-full sm:w-auto text-center hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-5">
                <Leaf className="w-9 h-9 md:w-11 h-11 group-hover:rotate-12 transition" />
                Explore Products
                <ArrowRight className="w-8 h-8 md:w-10 h-10 group-hover:translate-x-4 transition" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0"
                animate={{ x: [-150, 150] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
            </Link>

            <Link
              to="/contact"
              className="px-12 md:px-16 py-7 md:py-9 border-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-green-900 rounded-full text-2xl md:text-3xl font-bold uppercase tracking-wider transition-all duration-500 shadow-3xl w-full sm:w-auto text-center hover:scale-105"
            >
              Get Quote Now
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-5 mt-20 md:mt-28 px-6"
          >
            {[
              "APEDA Registered",
              "FSSAI Certified",
              "ISO 9001:2015",
              "20+ Countries Served",
              "100% Traceable",
              "Farm-to-Fork Quality"
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-full border border-amber-400/40 shadow-2xl"
              >
                <CheckCircle className="w-7 h-7 text-amber-300" />
                <span className="font-bold text-amber-100 text-sm md:text-lg whitespace-nowrap">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-12 h-12 text-amber-300" />
          </motion.div>
        </motion.div>
      )}

      {/* Mouse Glow Effect - Desktop Only */}
      {!isMobile && windowSize.width > 0 && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-10"
          style={{
            background: `radial-gradient(700px at ${mouseX.get() + windowSize.width / 2}px ${mouseY.get() + windowSize.height / 2}px, rgba(120, 219, 120, 0.18), transparent 80%)`,
          }}
        />
      )}
    </section>
  );
};

export default Hero;