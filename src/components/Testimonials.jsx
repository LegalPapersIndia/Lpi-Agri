// src/components/Testimonials.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { Star, Quote, Globe, Package, CheckCircle, Wheat, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const card = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-amber-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Golden Wheat Field */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-2 bg-gradient-to-t from-amber-400 to-yellow-300 rounded-t-full"
            style={{
              height: `${120 + Math.random() * 180}px`,
              left: `${(i / 50) * 100}%`,
              transform: `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`,
            }}
            animate={{ y: [0, -60, 0] }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Epic Header */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-green-700 to-lime-700 mb-6">
            Trusted by Importers Worldwide
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-5xl mx-auto leading-relaxed">
            Join 200+ satisfied buyers from 25+ countries who choose LPI Agri for unmatched quality and reliability
          </p>

          <div className="flex flex-wrap justify-center gap-12 mt-12 text-emerald-700 font-bold text-xl">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-4">
              <Globe className="w-12 h-12 text-amber-500" />
              <span>25+ Countries</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-4">
              <Package className="w-12 h-12 text-amber-500" />
              <span>15,000+ MT Exported</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-4">
              <CheckCircle className="w-12 h-12 text-amber-500" />
              <span>100% On-Time Delivery</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Luxury Testimonial Cards */}
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
              variants={card}
              whileHover={{ y: -20, scale: 1.03 }}
              className="group relative"
            >
              {/* Golden Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />

              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-transparent group-hover:border-amber-400 transition-all duration-500">
                {/* Gradient Top Bar */}
                <div className="h-3 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600" />

                <div className="p-10">
                  {/* Quote Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-8 right-8 text-green-200 opacity-40"
                  >
                    <Quote className="w-16 h-16" />
                  </motion.div>

                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(t.rating)].map((_, s) => (
                      <motion.div
                        key={s}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: s * 0.1 }}
                      >
                        <Star className="w-8 h-8 text-yellow-500 fill-current drop-shadow-lg" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-8 font-medium">
                    "{t.text}"
                  </p>

                  {/* Product Info */}
                  <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-2xl p-6 border-2 border-amber-200 mb-8">
                    <div className="flex items-center gap-3 text-emerald-800 font-bold">
                      <Package className="w-7 h-7 text-amber-600" />
                      <span className="text-lg">{t.product}</span>
                    </div>
                    <p className="text-emerald-700 font-bold mt-2 text-sm">
                      Volume: <span className="text-xl">{t.volume}</span>
                    </p>
                  </div>

                  {/* Client */}
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-1">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-emerald-700 shadow-inner">
                          {t.flag}
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-2 -right-2 text-amber-500"
                      >
                        <Sparkles className="w-8 h-8" />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-800">{t.name}</h4>
                      <p className="text-emerald-700 font-bold">{t.position}</p>
                      <p className="text-sm text-gray-600">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Trust CTA */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-green-700 to-lime-800 p-20 text-center shadow-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 text-amber-400 opacity-10"
          >
            <Wheat className="w-96 h-96" />
          </motion.div>

          <h3 className="text-5xl md:text-7xl font-black text-white mb-8 relative z-10">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-2xl md:text-3xl text-amber-100 mb-12 max-w-4xl mx-auto font-medium relative z-10">
            Join hundreds of happy importers who trust LPI Agri for their business growth
          </p>

          <motion.a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20saw%20your%20amazing%20testimonials%20and%20want%20to%20start%20importing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-16 py-8 rounded-full text-3xl font-black uppercase tracking-wider shadow-2xl overflow-hidden"
          >
            <Globe className="w-10 h-10 group-hover:rotate-12 transition" />
            <span className="relative z-10">Start Importing Today</span>
            <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition" />
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;