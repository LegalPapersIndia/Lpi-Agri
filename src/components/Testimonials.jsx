// src/components/Testimonials.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { Star, Quote, Globe, Package, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Ahmed Al-Mansoori",
      position: "CEO, Golden Grains Trading LLC",
      company: "Dubai, UAE",
      flag: "AE",
      rating: 5,
      text: "LPI Agri is our trusted partner for Basmati Rice since 2021. Their 1121 Steam Basmati is the best in the market — perfect cooking result, amazing aroma, and consistent quality in every container. Delivery always on time!",
      product: "1121 Basmati Rice (40ft containers)",
      volume: "1200+ MT per year",
      logo: "https://flagcdn.com/w80/ae.png"
    },
    {
      name: "Maria Ivanovna Petrova",
      position: "Import Director",
      company: "RusAgro Import, Moscow",
      flag: "RU",
      rating: 5,
      text: "Excellent Cumin Seeds and Red Chilli Powder! We passed all European quality tests with zero rejection. LPI team provides full documents: COA, Phytosanitary, Fumigation. Very professional and reliable supplier.",
      product: "Spices (Cumin, Chilli, Turmeric)",
      volume: "800+ MT annually",
      logo: "https://flagcdn.com/w80/ru.png"
    },
    {
      name: "Fatima Zahra Benali",
      position: "Procurement Head",
      company: "Maroc Distribution S.A.",
      flag: "MA",
      rating: 5,
      text: "We import Chana Dal and Sesame Seeds from LPI Agri. The quality is outstanding and pricing is very competitive. They even helped us with Arabic labeling and Halal certification. Highly recommended!",
      product: "Pulses & Oil Seeds",
      volume: "1500 MT/year",
      logo: "https://flagcdn.com/w80/ma.png"
    },
    {
      name: "John Mutuku",
      position: "Managing Director",
      company: "Nairobi Grain Masters Ltd",
      flag: "KE",
      rating: 5,
      text: "Best supplier for IR64 Parboiled Rice in East Africa! 25kg PP bags with our branding, perfect moisture level, and fast loading at Mundra Port. We receive containers every 15 days without delay.",
      product: "IR64 Parboiled Rice",
      volume: "3000+ MT per year",
      logo: "https://flagcdn.com/w80/ke.png"
    },
    {
      name: "Li Wei Chen",
      position: "Senior Buyer",
      company: "Shanghai Global Foods Co Ltd",
      flag: "CN",
      rating: 5,
      text: "我们从LPI Agri进口有机芝麻和蓖麻籽。产品质量稳定，证书齐全，交货准时。团队沟通非常专业，下次还会继续合作！(We import organic sesame & castor seeds. Excellent quality, fast delivery, great team!)",
      product: "Organic Sesame & Castor Seeds",
      volume: "600 MT/year",
      logo: "https://flagcdn.com/w80/cn.png"
    },
    {
      name: "Rajesh Kumar Sharma",
      position: "Owner",
      company: "Sharma Exports, Singapore",
      flag: "SG",
      rating: 5,
      text: "As an NRI, I trust only LPI Agri for my Sona Masoori and Ponni Rice business in Southeast Asia. Their private labeling service and door-to-door logistics make everything so easy.",
      product: "South Indian Rice + Private Label",
      volume: "900 MT/year",
      logo: "https://flagcdn.com/w80/sg.png"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Trusted by Importers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Join 200+ satisfied buyers from 25 countries who choose LPI Agri for premium quality, reliability, and exceptional service
          </p>
          <div className="flex justify-center gap-8 mt-8 text-green-700 font-bold text-lg">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8" />
              <span>25+ Countries</span>
            </div>
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8" />
              <span>15,000+ MT Exported</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8" />
              <span>100% On-Time Delivery</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-100 overflow-hidden"
            >
              {/* Top Accent */}
              <div className="h-2 bg-gradient-to-r from-green-600 to-green-800"></div>

              <div className="p-8">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-green-200 absolute top-6 right-6 opacity-50" />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>

                {/* Product & Volume */}
                <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-green-800">
                    <Package className="w-5 h-5" />
                    <span>{t.product}</span>
                  </div>
                  <div className="text-sm text-green-700 mt-1">
                    Volume: <strong>{t.volume}</strong>
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.logo}
                      alt={t.flag}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 text-2xl">{t.flag}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{t.name}</h4>
                    <p className="text-green-700 font-medium">{t.position}</p>
                    <p className="text-sm text-gray-600">{t.company}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-20 text-center bg-green-800 text-white rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of happy importers who trust LPI Agri for their business
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-300 text-green-900 px-10 py-5 rounded-full text-xl font-bold transition transform hover:scale-105 shadow-xl"
          >
            <Globe className="w-8 h-8" />
            Start Importing Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;