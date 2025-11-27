// src/pages/Export.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wheat, Package, Truck, Globe, Award, ArrowRight, 
  Sparkles, Leaf, CheckCircle2 
} from 'lucide-react';
import { productCategories } from '../data/products'; // Your existing data

export default function Export() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-2 bg-gradient-to-t from-amber-400 to-yellow-300"
              style={{
                height: `${120 + Math.random() * 200}px`,
                left: `${(i / 60) * 100}%`,
                transform: `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`,
              }}
              animate={{ y: [0, -80, 0] }}
              transition={{ duration: 10 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Exporting India's
            </span>
            <br />
            <span className="text-white">Golden Harvest</span>
          </motion.h1>

          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-4xl mt-8 font-medium text-amber-100"
          >
            Premium Basmati • Spices • Pulses • Oilseeds • Grains
          </motion.p>

          <div className="flex flex-wrap justify-center gap-10 mt-16">
            {[
              { icon: Globe, text: "50+ Countries" },
              { icon: Truck, text: "Door-to-Door Delivery" },
              { icon: Award, text: "100% Certified" },
              { icon: Leaf, text: "Farm-to-Fork Traceability" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                className="bg-white/10 backdrop-blur-md border border-amber-400/30 rounded-3xl p-8"
              >
                <item.icon className="w-16 h-16 mx-auto mb-4 text-amber-400" />
                <p className="text-2xl font-bold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Categories Grid - Directly from product.js */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black text-emerald-800 mb-6">
              Our Export Categories
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              Premium quality products sourced directly from Indian farmers, processed under strict standards, and exported worldwide
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            {productCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={item}
                whileHover={{ y: -16, scale: 1.03 }}
                className="group relative"
              >
                <Link
                  to={`/products`}
                  className="block bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-transparent hover:border-amber-400 transition-all duration-500"
                >
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-emerald-700 to-green-800 p-10 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="inline-block mb-4"
                    >
                      <Package className="w-16 h-16 text-amber-300" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-white">
                      {t(category.id) || category.name}
                    </h3>
                    <p className="text-amber-200 mt-2 font-bold">
                      {category.products.length} Products
                    </p>
                  </div>

                  {/* Product Preview Grid */}
                  <div className="p-8 bg-gradient-to-b from-amber-50 to-white">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {category.products.slice(0, 4).map((product) => (
                        <div key={product.id} className="relative overflow-hidden rounded-xl">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-8 py-4 rounded-full font-black text-lg shadow-xl">
                        <span>Explore All</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-5 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2"
                  >
                    <Sparkles className="w-6 h-6" />
                    Export Ready
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Export With Us */}
      <section className="py-32 bg-gradient-to-r from-emerald-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-7xl font-black text-center mb-20 text-amber-300"
          >
            Why Global Buyers Choose LPI Agri
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: CheckCircle2, title: "100% Traceable", desc: "Farm-to-Fork documentation" },
              { icon: Award, title: "All Certifications", desc: "APEDA, FSSAI, ISO, Halal" },
              { icon: Truck, title: "Fast Global Shipping", desc: "Mundra & Kandla Ports" },
              { icon: Leaf, title: "Direct from Farmers", desc: "No middlemen, fair prices" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center border border-amber-400/30"
              >
                <item.icon className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-lg text-amber-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-7xl font-black text-emerald-800 mb-10"
          >
            Ready to Import Premium Indian Products?
          </motion.h2>

          <motion.a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20import%20from%20your%20export%20range"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-8 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-20 py-10 rounded-full text-4xl font-black uppercase tracking-wider shadow-3xl overflow-hidden"
          >
            <Wheat className="w-12 h-12 group-hover:rotate-12 transition" />
            <span className="relative z-10">Get Export Quote Now</span>
            <ArrowRight className="w-12 h-12 group-hover:translate-x-6 transition" />
            <motion.div className="absolute inset-0 bg-white" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.8 }} />
          </motion.a>
        </div>
      </section>
    </div>
  );
}