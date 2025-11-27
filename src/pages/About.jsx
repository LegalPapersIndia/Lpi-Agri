// src/pages/About.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { 
  Globe, Users, Award, Target, Eye, Shield, Truck, Leaf,
  Building2, Handshake, CheckCircle, Sparkles, Wheat, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { number: "15,000+", label: "MT Exported Annually", icon: Truck },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "200+", label: "Global Clients", icon: Users },
    { number: "1 Million+", label: "Farmers Empowered", icon: Leaf }
  ];

  const certifications = [
    "APEDA Registered", "FSSAI Certified", "ISO 9001:2015", "ISO 22000:2018",
    "Halal Certified", "Global GAP", "USDA Organic", "Spices Board India",
    "Phytosanitary", "Fumigation Certificate"
  ];

  const team = [
    { name: "Mr. Rajesh Patel", role: "Founder & CEO", desc: "25+ years in agri export. Built LPI Agri from ground up.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
    { name: "Mrs. Priya Sharma", role: "Director - Quality", desc: "Former FSSAI auditor. Zero-compromise quality.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
    { name: "Mr. Ahmed Khan", role: "Export Manager - MEA", desc: "Fluent in Arabic. Serves UAE, KSA, Africa.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { name: "Ms. Elena Petrova", role: "Export Manager - CIS", desc: "Native Russian. Leads Russia & Central Asia.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">

      {/* HERO - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-green-900 to-lime-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 md:w-2 bg-gradient-to-t from-amber-400 to-yellow-300"
              style={{ 
                height: `${100 + Math.random() * 150}px`, 
                left: `${(i / 20) * 100}%`, 
                transform: "translateX(-50%)" 
              }}
              initial={{ y: 0 }}
              animate={{ y: [-60, 0] }}
              transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 3 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200"
          >
            LPI AGRI
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-3xl lg:text-5xl text-amber-100 font-bold mt-4 md:mt-6 tracking-wide"
          >
            Connecting India’s Golden Harvest to the World
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-20">
            {[
              { icon: Globe, text: "50+ Countries" },
              { icon: Truck, text: "Global Delivery" },
              { icon: Shield, text: "100% Quality" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-10 border border-amber-400/30"
              >
                <item.icon className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-4 text-amber-400" />
                <p className="text-lg md:text-2xl font-bold text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW + STATS */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-emerald-800 mb-6 md:mb-10">Who We Are</h2>
              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-6">
                <strong className="text-amber-600">LPI Agri</strong> is India’s most trusted agri-export powerhouse, 
                founded in 2015 from the heart of Gujarat — India’s farming capital.
              </p>
              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-6">
                We eliminated middlemen and built direct relationships with <strong className="text-emerald-700">over 1 Million farmers</strong> across India.
              </p>
              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
                From our warehouses at <strong className="text-amber-600">Mundra & Kandla Ports</strong>, we deliver premium grains & spices to <strong className="text-emerald-700">50+ countries</strong> with full traceability.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-2xl p-6 md:p-10 shadow-xl text-center"
                  >
                    <Icon className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3" />
                    <div className="text-3xl md:text-5xl font-black">{stat.number}</div>
                    <p className="text-sm md:text-lg font-bold mt-2">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 md:py-32 bg-gradient-to-r from-emerald-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black text-center mb-12 md:mb-20 text-amber-300"
          >
            Our Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-8 md:p-16 border border-amber-400/30"
            >
              <Target className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-6 md:mb-10 text-amber-400" />
              <h3 className="text-3xl md:text-5xl font-black text-center mb-8">Our Mission</h3>
              {[
                "Connect farmers directly to global buyers",
                "100% traceability from farm to fork",
                "Promote sustainable & organic farming",
                "Deliver premium quality at fair prices"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-4 text-lg md:text-2xl mb-6"
                >
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl md:rounded-3xl p-8 md:p-16 shadow-2xl"
            >
              <Eye className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-6 md:mb-10" />
              <h3 className="text-3xl md:text-5xl font-black text-center mb-6 text-green-900">Vision 2030</h3>
              <p className="text-xl md:text-3xl font-bold text-center leading-relaxed text-green-900">
                To become the <span className="text-white">#1 Trusted Indian Agri Brand Worldwide</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black text-center text-emerald-800 mb-12"
          >
            Certifications
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-amber-100 to-green-50 rounded-2xl p-6 text-center shadow-lg border-2 border-amber-300"
              >
                <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 text-amber-600" />
                <p className="text-sm md:text-base font-bold text-emerald-800">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black text-center text-emerald-800 mb-12"
          >
            Meet Our Leadership
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-black text-emerald-800">{member.name}</h3>
                    <p className="text-amber-600 font-bold text-lg">{member.role}</p>
                    <p className="mt-3 text-gray-600 text-sm md:text-base">{member.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-emerald-900 via-green-800 to-lime-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Handshake className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-6 text-amber-400" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Ready to Import from India?
          </h2>
          <p className="text-xl md:text-3xl mb-10 text-amber-100">
            Join 200+ global partners who trust LPI Agri
          </p>

          <motion.a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20start%20importing%20from%20India"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-10 py-6 rounded-full text-2xl md:text-3xl font-black shadow-2xl"
          >
            Start Importing Today
            <ArrowRight className="w-10 h-10" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}