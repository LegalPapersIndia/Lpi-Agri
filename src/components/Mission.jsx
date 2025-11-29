// src/components/MissionVision.jsx - Professional Corporate Version
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { HeartHandshake, Target, Leaf, Globe, Award, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t('ourMissionVision') || 'Our Mission & Vision'}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Building a sustainable bridge between Indian farmers and global markets
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">

          {/* Mission Card */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 lg:p-12 shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-green-700 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <HeartHandshake className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">
                {t('Our Mission') || 'Our Mission'}
              </h3>
            </div>

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-10">
              To empower Indian farmers by providing direct access to international markets, ensuring fair compensation for their premium produce while delivering exceptional quality grains, spices, and agro-products to customers worldwide — with full transparency and trust.
            </p>

            <ul className="space-y-6">
              {[
                "Connect farmers directly to global buyers",
                "Ensure 100% traceability from farm to fork",
                "Promote sustainable and ethical farming practices",
                "Deliver premium1616 quality at competitive prices"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sprout className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-10 lg:p-12 shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-green-700 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">
                {t('Our Vision') || 'Our Vision'}
              </h3>
            </div>

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-10">
              To become the most trusted and preferred global partner for Indian agricultural exports by 2030 — leading in quality, sustainability, and farmer prosperity while proudly representing “Made in India” excellence across the world.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, label: "Leading Indian Agri Exporter" },
                { icon: Leaf, label: "100% Sustainable Supply Chain" },
                { icon: Globe, label: "Presence in 50+ Countries" },
                { icon: HeartHandshake, label: "Empowering 1M+ Farmers" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-green-200 transition-all duration-300"
                >
                  <item.icon className="w-12 h-12 text-green-700 mx-auto mb-3" />
                  <span className="text-sm lg:text-base font-semibold text-gray-800 leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 text-center"
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 italic leading-tight max-w-5xl mx-auto px-8">
            “From India’s Soil to the World’s Table — With Trust & Pride”
          </blockquote>
          <div className="flex justify-center gap-8 mt-8 text-green-700">
            <Leaf className="w-10 h-10" />
            <Sprout className="w-14 h-14" />
            <Leaf className="w-10 h-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;