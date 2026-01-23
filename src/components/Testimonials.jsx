// src/components/Testimonials.jsx - Professional Corporate Version
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { Star, Quote, Globe, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Ahmed Al-Mansoori",
      position: "CEO",
      company: "Golden Grains Trading LLC",
      location: "Dubai, UAE",
      flag: "AE",
      rating: 5,
      text: "LPI Agro has been our trusted partner for Basmati rice since 2021. Their 1121 Steam variety consistently delivers exceptional quality, aroma, and cooking results. On-time delivery every single time.",
      product: "1121 Basmati Rice",
      volume: "1,200+ MT per year",
    },
    {
      name: "Maria Petrova",
      position: "Import Director",
      company: "RusAgro Import",
      location: "Moscow, Russia",
      flag: "RU",
      rating: 5,
      text: "Excellent spices with full documentation support. All shipments passed EU quality tests with zero rejections. Professional team, reliable supply — highly recommended for serious importers.",
      product: "Cumin Seeds & Red Chilli",
      volume: "800+ MT annually",
    },
    {
      name: "Fatima Zahra Benali",
      position: "Procurement Head",
      company: "Maroc Distribution S.A.",
      location: "Casablanca, Morocco",
      flag: "MA",
      rating: 5,
      text: "Outstanding quality Chana Dal and Sesame Seeds. Competitive pricing and full support with Arabic labeling and Halal certification. A true partner in growth.",
      product: "Pulses & Oil Seeds",
      volume: "1,500 MT/year",
    },
    {
      name: "John Mutuku",
      position: "Managing Director",
      company: "Nairobi Grain Masters Ltd",
      location: "Nairobi, Kenya",
      flag: "KE",
      rating: 5,
      text: "Best supplier for IR64 Parboiled Rice in East Africa. Private labeling, consistent quality, and containers arriving every 15 days without delay. True reliability.",
      product: "IR64 Parboiled Rice",
      volume: "3,000+ MT per year",
    },
    {
      name: "Li Wei Chen",
      position: "Senior Buyer",
      company: "Shanghai Global Foods Co Ltd",
      location: "Shanghai, China",
      flag: "CN",
      rating: 5,
      text: "Stable quality organic sesame and castor seeds. Full certificates, professional communication, and on-time delivery. We look forward to long-term cooperation.",
      product: "Organic Sesame & Castor Seeds",
      volume: "600 MT/year",
    },
    {
      name: "Rajesh Kumar Sharma",
      position: "Owner",
      company: "Sharma Exports",
      location: "Singapore",
      flag: "SG",
      rating: 5,
      text: "As an NRI, I only trust LPI Agro for Sona Masoori and Ponni rice. Their private labeling and door-to-door logistics make expansion seamless.",
      product: "South Indian Rice + Private Label",
      volume: "900 MT/year",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
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
            Trusted by Importers Worldwide
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
            200+ businesses in 25+ countries rely on LPI Agro for consistent quality and reliable supply
          </p>

          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            {[
              { icon: Globe, text: "25+ Countries Served" },
              { icon: Package, text: "15,000+ MT Exported" },
              { icon: CheckCircle, text: "100% On-Time Delivery" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-700 text-white rounded-full mb-4">
                  <stat.icon className="w-10 h-10" />
                </div>
                <p className="text-lg font-semibold text-gray-800">{stat.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-green-700 mb-6 opacity-20" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-5 h-5 text-green-600 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed italic mb-8">
                  "{t.text}"
                </p>

                {/* Product Info */}
                <div className="bg-green-50 rounded-xl p-5 border border-green-100 mb-8">
                  <div className="flex items-center gap-3 text-green-800 font-semibold">
                    <Package className="w-5 h-5" />
                    <span>{t.product}</span>
                  </div>
                  <p className="text-green-700 font-bold mt-2">
                    Volume: <span className="text-lg">{t.volume}</span>
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {t.flag}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    <p className="text-green-700 font-medium">{t.position}</p>
                    <p className="text-sm text-gray-500">{t.company} • {t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 bg-green-700 rounded-3xl p-16 text-center text-white shadow-2xl"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto font-light">
            Join hundreds of importers who trust LPI Agro for quality, reliability, and growth
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="https://wa.me/917505266931?text=Hi%20LPI%20Agro!%20I%20saw%20your%20testimonials%20and%20want%20to%20discuss%20importing%20from%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-white text-green-700 px-12 py-6 rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-lg"
            >
              Start Importing Today
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </a>

            <Link
              to="/products"
              className="px-12 py-6 border-4 border-white text-white rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              View All Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;