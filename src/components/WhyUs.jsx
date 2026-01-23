// src/components/WhyChooseUs.jsx - Professional Corporate Agriculture Version
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import {
  Shield, Truck, Leaf, Award, Globe, Clock, Users, Handshake,
  CheckCircle2, Wheat, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Shield, title: "qualityGuarantee", desc: "qualityDesc" },
    { icon: Leaf, title: "directFromFarmers", desc: "farmerDesc" },
    { icon: Truck, title: "globalDelivery", desc: "deliveryDesc" },
    { icon: Award, title: "allCertifications", desc: "certificationDesc" },
    { icon: Clock, title: "onTimeDeliveryText", desc: "onTimeDesc" },
    { icon: Handshake, title: "privateLabeling", desc: "labelingDesc" },
    { icon: Globe, title: "globalReach", desc: "reachDesc" },
    { icon: Users, title: "dedicatedSupport", desc: "supportDesc" },
  ];

  const stats = [
    { number: "15,000+", label: "exportedStat", icon: Wheat },
    { number: "25+", label: "countriesStat", icon: Globe },
    { number: "200+", label: "clientsStat", icon: Users },
    { number: "6+", label: "yearsStat", icon: Award },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t('whyChooseUs') || 'Why Leading Importers Trust LPI Agro'}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {t('whyChooseUsDesc') || 'We deliver more than products — we deliver reliability, transparency, and long-term partnership success'}
          </p>
        </motion.div>

        {/* Reason Cards - Clean & Professional */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-700 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {t(reason.title)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(reason.desc)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section - Clean & Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-700 text-white rounded-full mb-6">
                  <Icon className="w-10 h-10" />
                </div>
                <div className="text-5xl md:text-6xl font-black text-gray-900">
                  {stat.number}
                </div>
                <p className="text-lg text-gray-600 font-medium mt-3">
                  {t(stat.label)}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Final CTA - Professional & Conversion-Focused */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 bg-green-700 rounded-3xl p-16 text-center text-white shadow-2xl"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            {t('readyToImport') || 'Ready to Grow Your Business with Premium Indian Agro Products?'}
          </h3>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto font-light">
            {t('readyToImportDesc') || 'Join 200+ importers worldwide who rely on LPI Agro for consistent quality and reliable supply'}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="https://wa.me/917505266931?text=Hello%20LPI%20Agro!%20I%27m%20interested%20in%20importing%20premium%20Indian%20agricultural%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-white text-green-700 px-12 py-6 rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Handshake className="w-8 h-8" />
              Start Importing Today
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </a>

            <Link
              to="/products"
              className="px-12 py-6 border-4 border-white text-white rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
            >
              Explore All Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;