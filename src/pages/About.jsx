// src/pages/About.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { 
  Globe, Users, Award, Target, Eye, Shield, Truck, Leaf,
  Building2, Handshake, CheckCircle, Sparkles, Wheat, ArrowRight, Zap
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
    { name: "Mr. Rajesh Patel", role: "Founder & CEO", desc: "25+ years in agri export. Built LPI Agri from ground up.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80" },
    { name: "Mrs. Priya Sharma", role: "Director - Quality", desc: "Former FSSAI auditor. Zero-compromise quality.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
    { name: "Mr. Ahmed Khan", role: "Export Manager - MEA", desc: "Fluent in Arabic. Serves UAE, KSA, Africa.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
    { name: "Ms. Elena Petrova", role: "Export Manager - CIS", desc: "Native Russian. Leads Russia & Central Asia.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50 overflow-hidden">

      {/* HERO - Golden Luxury */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-green-900 to-lime-900 py-32">
        <div className="absolute inset-0 opacity-30">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-2 bg-gradient-to-t from-amber-400 to-yellow-300"
              style={{ height: `${150 + Math.random() * 200}px`, left: `${(i / 40) * 100}%`, transform: "translateX(-50%)" }}
              animate={{ y: [0, -80, 0] }}
              transition={{ duration: 12 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 5 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 drop-shadow-2xl"
          >
            LPI AGRI
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-3xl md:text-5xl text-amber-100 font-bold mt-6 tracking-widest"
          >
            Connecting India’s Golden Harvest to the World
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[
              { icon: Globe, text: "50+ Countries" },
              { icon: Truck, text: "Door-to-Door Global Delivery" },
              { icon: Shield, text: "100% Quality Guarantee" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.2, type: "spring", stiffness: 200 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-amber-400/30"
              >
                <item.icon className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                <p className="text-2xl font-bold text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW + STATS */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-black text-emerald-800 mb-10">Who We Are</h2>
              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                <strong className="text-amber-600">LPI Agri</strong> is India’s most trusted agri-export powerhouse, 
                founded in 2015 from the heart of Gujarat — India’s farming capital.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                We eliminated middlemen and built direct relationships with <strong className="text-emerald-700">over 1 Million farmers</strong> across Punjab, Haryana, Rajasthan & MP.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                From our own warehouses at <strong className="text-amber-600">Mundra & Kandla Ports</strong>, we deliver premium Basmati, Spices, Pulses & Oilseeds to <strong className="text-emerald-700">50+ countries</strong> with full traceability and zero compromise.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-3xl p-10 shadow-2xl text-center"
                  >
                    <Icon className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-5xl font-black">{stat.number}</div>
                    <p className="text-lg font-bold mt-3">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-32 bg-gradient-to-r from-emerald-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-7xl font-black text-center mb-20 text-amber-300"
          >
            Our Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-16 border border-amber-400/30"
            >
              <Target className="w-24 h-24 mx-auto mb-10 text-amber-400" />
              <h3 className="text-5xl font-black text-center mb-10">Our Mission</h3>
              {[
                "Connect farmers directly to global buyers",
                "100% traceability from farm to fork",
                "Promote sustainable & organic farming",
                "Deliver premium quality at fair prices"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-6 text-2xl mb-8"
                >
                  <CheckCircle className="w-10 h-10 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-3xl p-16 shadow-3xl"
            >
              <Eye className="w-24 h-24 mx-auto mb-10" />
              <h3 className="text-5xl font-black text-center mb-10 text-green-900">Our Vision 2030</h3>
              <p className="text-3xl font-bold text-center leading-relaxed text-green-900">
                To become the <span className="text-white">#1 Most Trusted Indian Agri Brand Worldwide</span> — 
                known for unmatched quality, transparency, and farmer-first values.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <Leaf className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-2xl font-black">100% Sustainable</p>
                </div>
                <div className="text-center">
                  <Handshake className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-2xl font-black">Farmer-First</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS - Golden Gallery */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-7xl font-black text-center text-emerald-800 mb-20"
          >
            Certifications & Compliance
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="bg-gradient-to-br from-amber-100 to-green-50 rounded-3xl p-10 text-center shadow-xl border-4 border-amber-300 hover:border-amber-500 transition-all"
              >
                <Award className="w-20 h-20 mx-auto mb-6 text-amber-600" />
                <p className="text-lg font-black text-emerald-800">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-32 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-7xl font-black text-center text-emerald-800 mb-20"
          >
            Meet Our Leadership
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -20 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl blur-3xl opacity-0 group-hover:opacity-70 transition-opacity" />
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent group-hover:border-amber-400 transition-all">
                  <img src={member.img} alt={member.name} className="w-full h-96 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-black">{member.name}</h3>
                    <p className="text-xl font-bold text-amber-300">{member.role}</p>
                    <p className="mt-4 text-lg">{member.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL EPIC CTA */}
      <section className="py-32 bg-gradient-to-r from-emerald-900 via-green-800 to-lime-900 text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 text-amber-400 opacity-10"
        >
          <Wheat className="w-96 h-96" />
        </motion.div>

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <Building2 className="w-32 h-32 mx-auto mb-10 text-amber-400" />
          <h2 className="text-6xl md:text-8xl font-black mb-10">
            Ready to Partner with India’s Most Trusted Agri Exporter?
          </h2>
          <p className="text-3xl mb-16 text-amber-100 font-medium">
            Join 200+ global importers who chose LPI Agri for quality, reliability & growth
          </p>

          <motion.a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20start%20importing%20from%20India"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-8 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-20 py-10 rounded-full text-4xl font-black uppercase tracking-wider shadow-3xl overflow-hidden"
          >
            <Handshake className="w-14 h-14 group-hover:rotate-12 transition" />
            <span className="relative z-10">Start Importing Today</span>
            <ArrowRight className="w-14 h-14 group-hover:translate-x-6 transition" />
            <motion.div className="absolute inset-0 bg-white" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.8 }} />
          </motion.a>
        </div>
      </section>
    </div>
  );
}