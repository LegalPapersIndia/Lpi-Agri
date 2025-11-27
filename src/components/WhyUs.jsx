// src/components/WhyChooseUs.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import {
  Shield, Truck, Leaf, Award, Globe, Clock, Users, Handshake,
  CheckCircle2, Wheat, Sparkles, ArrowRight, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Shield, title: "qualityGuarantee", desc: "qualityDesc", highlight: "labReports", gradient: "from-emerald-500 to-green-600" },
    { icon: Leaf, title: "directFromFarmers", desc: "farmerDesc", highlight: "farmerFirst", gradient: "from-lime-500 to-emerald-600" },
    { icon: Truck, title: "globalDelivery", desc: "deliveryDesc", highlight: "hassleFreeLogistics", gradient: "from-cyan-500 to-blue-600" },
    { icon: Award, title: "allCertifications", desc: "certificationDesc", highlight: "documentationExperts", gradient: "from-amber-500 to-orange-600" },
    { icon: Clock, title: "onTimeDeliveryText", desc: "onTimeDesc", highlight: "onTimeHighlight", gradient: "from-purple-500 to-pink-600" },
    { icon: Handshake, title: "privateLabeling", desc: "labelingDesc", highlight: "buildYourBrand", gradient: "from-rose-500 to-red-600" },
    { icon: Globe, title: "globalReach", desc: "reachDesc", highlight: "provenTrackRecord", gradient: "from-indigo-500 to-purple-600" },
    { icon: Users, title: "dedicatedSupport", desc: "supportDesc", highlight: "neverAlone", gradient: "from-teal-500 to-cyan-600" },
  ];

  const stats = [
    { number: "15,000+", label: "exportedStat", icon: Wheat },
    { number: "25+", label: "countriesStat", icon: Globe },
    { number: "200+", label: "clientsStat", icon: Users },
    { number: "6+", label: "yearsStat", icon: Award },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-amber-50 via-white to-green-50 overflow-hidden relative">
      {/* Animated Golden Wheat Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1.5 bg-gradient-to-t from-amber-400 to-yellow-300"
            style={{
              height: `${100 + Math.random() * 150}px`,
              left: `${(i / 40) * 100}%`,
              transform: `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`,
            }}
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Epic Header */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-600 to-lime-700 mb-6">
            {t('whyChooseUs') || 'Why Top Importers Choose Us'}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-5xl mx-auto leading-relaxed">
            {t('whyChooseUsDesc') || 'We don\'t just export products — we deliver trust, quality, and long-term partnerships'}
          </p>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="inline-block mt-8"
          >
            <Wheat className="w-20 h-20 text-amber-500" />
          </motion.div>
        </motion.div>

        {/* Luxury Reason Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -20, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl blur-3xl"
                  style={{ backgroundImage: `linear-gradient(to bottom right, ${reason.gradient.split(' ')[1]}, ${reason.gradient.split(' ')[3]})` }}
                />
                <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:border-transparent hover:shadow-3xl transition-all duration-500 backdrop-blur-xl">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className={`inline-flex p-6 rounded-3xl text-white shadow-2xl mb-8 bg-gradient-to-br ${reason.gradient}`}
                  >
                    <Icon className="w-12 h-12" />
                  </motion.div>

                  <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors">
                    {t(reason.title)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t(reason.desc)}
                  </p>

                  {/* Golden Highlight Badge */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-6 py-4 rounded-full font-bold text-lg shadow-xl"
                  >
                    <Zap className="w-6 h-6" />
                    {t(reason.highlight)}
                  </motion.div>

                  {/* Floating Sparkles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4 text-amber-400 opacity-60"
                  >
                    <Sparkles className="w-12 h-12" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section - Golden Luxury */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="group relative bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-10 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-10"
                >
                  <Icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl md:text-6xl font-black">{stat.number}</div>
                  <p className="text-amber-100 font-bold text-lg mt-3 text-center">
                    {t(stat.label)}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Final Epic CTA */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-green-700 to-lime-800 p-20 text-center shadow-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 text-amber-400 opacity-10"
          >
            <Wheat className="w-96 h-96" />
          </motion.div>

          <h3 className="text-5xl md:text-7xl font-black text-white mb-8 relative z-10">
            {t('readyToImport') || 'Ready to Import the Best from India?'}
          </h3>
          <p className="text-2xl md:text-3xl text-amber-100 mb-12 max-w-4xl mx-auto font-medium relative z-10">
            {t('readyToImportDesc') || 'Join 200+ happy importers who trust LPI Agri for quality, reliability & growth'}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center relative z-10">
            <motion.a
              href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20start%20importing%20premium%20Indian%20products"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-16 py-8 rounded-full text-3xl font-black uppercase tracking-wider shadow-2xl overflow-hidden"
            >
              <Handshake className="w-10 h-10 group-hover:rotate-12 transition" />
              <span className="relative z-10">{t('startImportingNow') || 'Start Importing Now'}</span>
              <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition" />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>

            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              className="px-16 py-8 border-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-green-900 rounded-full text-3xl font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              {t('viewAllProducts') || 'View All Products'}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;