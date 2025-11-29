// src/pages/About.jsx - Professional Corporate Version
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { 
  Globe, Users, Award, Target, Shield, Truck, Leaf, Building2, Handshake, CheckCircle, ArrowRight 
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
    "Halal Certified", "Global GAP", "USDA Organic", "Spices Board India"
  ];

  const team = [
    { name: "Mr. Rajesh Patel", role: "Founder & CEO", desc: "25+ years in agricultural exports", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80" },
    { name: "Mrs. Priya Sharma", role: "Director - Quality Assurance", desc: "Ensures zero-compromise quality standards", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
    { name: "Mr. Ahmed Khan", role: "Export Manager - Middle East & Africa", desc: "Fluent in Arabic • Serves UAE, KSA, Egypt, Kenya", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
    { name: "Ms. Elena Petrova", role: "Export Manager - Russia & CIS", desc: "Native Russian speaker • Leads Moscow & Central Asia", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO - Clean & Powerful */}
      <section className="bg-green-800 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            LPI AGRI
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl text-green-100 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Connecting India’s FinOD Harvest to Global Markets Since 2015
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Globe, text: "50+ Countries" },
              { icon: Truck, text: "Door-to-Door Delivery" },
              { icon: Shield, text: "100% Quality Guaranteed" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <item.icon className="w-16 h-16 mx-auto mb-4 text-green-300" />
                <p className="text-2xl font-bold text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW + STATS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-green-700">LPI Agri</strong> is a leading Indian agricultural export company founded in 2015, headquartered in Mumbai with direct operations from Gujarat and Punjab.
                </p>
                <p>
                  We work directly with over <strong className="text-green-700">1 million farmers</strong>, eliminating middlemen to ensure fair prices and complete traceability.
                </p>
                <p>
                  From our own warehouses at <strong className="text-green-700">Mundra & Kandla Ports</strong>, we export premium Basmati rice, spices, pulses, and oilseeds to over <strong className="text-green-700">50 countries</strong> worldwide.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-green-700 text-white rounded-2xl p-8 text-center shadow-lg"
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold">{stat.number}</div>
                    <p className="mt-2 font-medium">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 md:py-32 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-green-100"
          >
            Our Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-3xl p-10 border border-white/20"
            >
              <Target className="w-16 h-16 mx-auto mb-8 text-green-300" />
              <h3 className="text-3xl font-bold text-center mb-8">Our Mission</h3>
              <ul className="space-y-5">
                {[
                  "Connect farmers directly to global buyers",
                  "Ensure 100% traceability from farm to fork",
                  "Promote sustainable and ethical farming",
                  "Deliver premium quality at competitive prices"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-green-600 rounded-3xl p-10 text-center"
            >
              <Globe className="w-20 h-20 mx-auto mb-8 text-white" />
              <h3 className="text-3xl font-bold mb-6">Vision 2030</h3>
              <p className="text-2xl leading-relaxed font-light">
                To become the <strong className="text-white font-bold">#1 trusted Indian agricultural brand worldwide</strong> — leading in quality, sustainability, and farmer prosperity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-16"
          >
            Certifications & Compliance
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:border-green-300 transition-all"
              >
                <Award className="w-12 h-12 mx-auto mb-4 text-green-700" />
                <p className="font-semibold text-gray-800">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-16"
          >
            Meet Our Leadership
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-green-700 font-semibold mt-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-3">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Handshake className="w-20 h-20 mx-auto mb-8 text-green-300" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Partner with India’s Leading Exporter?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto font-light">
            Join 200+ global importers who trust LPI Agri for quality, reliability, and growth
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20start%20importing%20premium%20Indian%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-white text-green-700 px-12 py-6 rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-lg"
            >
              Start Importing Today
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}