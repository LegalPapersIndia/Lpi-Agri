// src/pages/Export.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wheat, Package, Truck, Globe, Award, ArrowRight, 
  Sparkles, Leaf, CheckCircle2 
} from 'lucide-react';
import { productCategories } from '../data/products';

export default function Export() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">

      {/* HERO - Mobile Optimized */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 md:w-2 bg-gradient-to-t from-amber-400 to-yellow-300"
              style={{
                height: `${80 + Math.random() * 120}px`,
                left: `${(i / 25) * 100}%`,
                transform: "translateX(-50%)"
              }}
              animate={{ y: [0, -50, 0] }}
              transition={{ duration: 12 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 3 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight"
          >
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Exporting India's
            </span>
            <span className="block text-white mt-2">Golden Harvest</span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl lg:text-4xl mt-6 font-medium text-amber-100"
          >
            Premium Basmati • Spices • Pulses • Oilseeds • Grains
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-16">
            {[
              { icon: Globe, text: "50+ Countries" },
              { icon: Truck, text: "Global Delivery" },
              { icon: Award, text: "100% Certified" },
              { icon: Leaf, text: "Farm Traceability" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.15 }}
                className="bg-white/10 backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 md:p-8"
              >
                <item.icon className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 text-amber-400" />
                <p className="text-sm md:text-xl font-bold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT CATEGORIES GRID */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-emerald-800 mb-4">
              Our Export Categories
            </h2>
            <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Premium quality products sourced directly from Indian farmers
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {productCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={item}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={`/products`}
                  className="block bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-4 border-transparent hover:border-amber-400 transition-all duration-400"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-emerald-700 to-green-800 p-8 md:p-10 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="inline-block mb-4"
                    >
                      <Package className="w-12 h-12 md:w-16 md:h-16 text-amber-300" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-black text-white">
                      {t(category.id) || category.name}
                    </h3>
                    <p className="text-amber-200 mt-2 font-bold text-sm md:text-base">
                      {category.products.length} Products
                    </p>
                  </div>

                  {/* Product Preview */}
                  <div className="p-6 md:p-8 bg-gradient-to-b from-amber-50 to-white">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {category.products.slice(0, 4).map((product) => (
                        <div key={product.id} className="relative overflow-hidden rounded-lg">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-28 md:h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition" />
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-lg">
                        <span>Explore All</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-xl flex items-center gap-1"
                  >
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                    Export Ready
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-32 bg-gradient-to-r from-emerald-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12 md:mb-20 text-amber-300"
          >
            Why Global Buyers Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle2, title: "100% Traceable", desc: "Farm-to-Fork documentation" },
              { icon: Award, title: "All Certifications", desc: "APEDA, FSSAI, ISO, Halal" },
              { icon: Truck, title: "Fast Shipping", desc: "Mundra & Kandla Ports" },
              { icon: Leaf, title: "Farmer Direct", desc: "No middlemen, fair prices" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-amber-400/30"
              >
                <item.icon className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-5 text-amber-400" />
                <h3 className="text-xl md:text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-sm md:text-lg text-amber-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-emerald-800 mb-8"
          >
            Ready to Import from India?
          </motion.h2>

          <motion.a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20import%20from%20your%20export%20range"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-10 md:px-20 py-6 md:py-10 rounded-full text-2xl md:text-4xl font-black uppercase tracking-wider shadow-2xl overflow-hidden"
          >
            <Wheat className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-12 transition" />
            <span>Get Export Quote Now</span>
            <ArrowRight className="w-10 h-10 md:w-12 md:h-12 group-hover:translate-x-4 transition" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}