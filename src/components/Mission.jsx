// src/components/MissionVision.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { Leaf, Globe, HeartHandshake, Award } from 'lucide-react';

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            {'Our Mission & Vision'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building a sustainable bridge between Indian farmers and global markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission Card */}
          <div className="group bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-200">
            <div className="flex items-center gap-5 mb-8">
              <div className="p-5 bg-green-600 rounded-2xl group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-800">
                {'Our Mission'}
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To empower Indian farmers by providing direct access to international markets, ensuring fair prices for their premium produce while delivering the finest quality grains, spices, and agro-products to customers worldwide with complete transparency and trust.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Connect farmers directly to global buyers",
                "Ensure 100% traceability from farm to fork",
                "Promote sustainable & organic farming",
                "Deliver premium quality at competitive prices"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t(item) || item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="group bg-gradient-to-bl from-yellow-50 to-amber-100/50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-200">
            <div className="flex items-center gap-5 mb-8">
              <div className="p-5 bg-yellow-500 rounded-2xl group-hover:scale-110 transition-transform">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-800">
                {'Our Vision'}
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To become the most trusted and preferred global partner for Indian agricultural exports by 2030 — leading the way in quality, sustainability, and farmer prosperity while proudly representing "Made in India" excellence across the world.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { icon: Award, label: "No.1 Indian Agri Exporter" },
                { icon: Leaf, label: "100% Sustainable Supply Chain" },
                { icon: Globe, label: "Present in 50+ Countries" },
                { icon: HeartHandshake, label: "1 Million+ Farmers Empowered" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 bg-white/70 rounded-2xl">
                  <item.icon className="w-10 h-10 text-green-600 mb-2" />
                  <span className="text-sm font-semibold text-gray-700">
                    {t(item.label) || item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-green-700 italic">
            "From India's Soil to the World's Table — With Trust & Pride"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;