// src/components/WhyChooseUs.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import {
  Shield,
  Truck,
  Leaf,
  Award,
  Globe,
  Clock,
  Users,
  CheckCircle2,
  Wheat,
  Handshake,
} from 'lucide-react';

const WhyUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <Shield className="w-10 h-10" />,
      titleKey: "qualityGuarantee",
      descKey: "qualityDesc",
      highlightKey: "labReports"
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      titleKey: "directFromFarmers",
      descKey: "farmerDesc",
      highlightKey: "farmerFirst"
    },
    {
      icon: <Truck className="w-10 h-10" />,
      titleKey: "globalDelivery",
      descKey: "deliveryDesc",
      highlightKey: "hassleFreeLogistics"
    },
    {
      icon: <Award className="w-10 h-10" />,
      titleKey: "allCertifications",
      descKey: "certificationDesc",
      highlightKey: "documentationExperts"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      titleKey: "onTimeDeliveryText",
      descKey: "onTimeDesc",
      highlightKey: "onTimeHighlight"
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      titleKey: "privateLabeling",
      descKey: "labelingDesc",
      highlightKey: "buildYourBrand"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      titleKey: "globalReach",
      descKey: "reachDesc",
      highlightKey: "provenTrackRecord"
    },
    {
      icon: <Users className="w-10 h-10" />,
      titleKey: "dedicatedSupport",
      descKey: "supportDesc",
      highlightKey: "neverAlone"
    }
  ];

  const stats = [
    { number: "15,000+", labelKey: "exportedStat" },
    { number: "25+", labelKey: "countriesStat" },
    { number: "200+", labelKey: "clientsStat" },
    { number: "6+", labelKey: "yearsStat" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            {t('whyChooseUs')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t('whyChooseUsDesc')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 bg-green-600 text-white rounded-2xl group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                {t(reason.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {t(reason.descKey)}
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">
                <CheckCircle2 className="w-5 h-5" />
                {t(reason.highlightKey)}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 opacity-5 rounded-bl-3xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-green-700 to-green-900 text-white p-8 rounded-3xl shadow-xl">
              <Wheat className="w-12 h-12 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold">{stat.number}</div>
              <div className="text-green-100 mt-2">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-green-800 to-green-900 text-white rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {t('readyToImport')}
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            {t('readyToImportDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20import%20from%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 px-10 py-5 rounded-full text-xl font-bold transition transform hover:scale-105 shadow-xl"
            >
              <Handshake className="w-8 h-8" />
              {t('startImportingNow')}
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur px-10 py-5 rounded-full text-xl font-bold transition"
            >
              {t('viewAllProducts')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;