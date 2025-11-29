// src/pages/Export.jsx - Professional Corporate Version
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, Truck, Award, Leaf, Package, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { productCategories } from '../data/products';

export default function Export() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7 } }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO - Clean & Powerful */}
      <section className="bg-green-800 py-24 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Exporting India’s Finest Harvest
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl text-green-100 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Premium Basmati Rice • Spices • Pulses • Oilseeds • Direct from India’s Best Farmers
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Globe, text: "50+ Countries" },
              { icon: Truck, text: "Global Door-to-Door" },
              { icon: Award, text: "Fully Certified" },
              { icon: Leaf, text: "100% Traceable" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <stat.icon className="w-14 h-14 mx-auto mb-4 text-green-300" />
                <p className="text-2xl font-bold">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT CATEGORIES GRID */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Export Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality products sourced directly from Indian farmers — export-ready and fully compliant
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            {productCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  to="/products"
                  className="block bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:border-green-700 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="bg-green-700 p-10 text-center">
                    <Package className="w-16 h-16 mx-auto mb-4 text-white" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {t(category.id) || category.name}
                    </h3>
                    <p className="text-green-100 mt-2 font-medium">
                      {category.products.length} Premium Products
                    </p>
                  </div>

                  {/* Product Preview */}
                  <div className="p-6 bg-gray-50">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {category.products.slice(0, 4).map((product) => (
                        <div key={product.id} className="overflow-hidden rounded-lg">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <span className="inline-flex items-center gap-2 text-green-700 font-bold text-lg group-hover:text-green-800 transition">
                        Explore Category
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
                      </span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Export Ready
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-green-100"
          >
            Why Global Importers Choose LPI Agri
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: CheckCircle2, title: "100% Traceable", desc: "Complete farm-to-port documentation" },
              { icon: Award, title: "All Certifications", desc: "APEDA • FSSAI • ISO • Halal • USDA Organic" },
              { icon: Truck, title: "Fast Global Shipping", desc: "Direct from Mundra & Kandla Ports" },
              { icon: Leaf, title: "Farmer Direct", desc: "No middlemen • Fair prices • Ethical sourcing" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition"
              >
                <item.icon className="w-16 h-16 mx-auto mb-6 text-green-300" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-green-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Ready to Import Premium Indian Products?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Join 200+ global partners who trust LPI Agri for quality, reliability, and growth
          </motion.p>

          <a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%27m%20ready%20to%20import%20from%20your%20export%20range"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-green-700 hover:bg-green-800 text-white px-12 py-6 rounded-xl text-2xl font-bold uppercase tracking-wider transition-all shadow-xl"
          >
            Get Export Quote Now
            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition" />
          </a>
        </div>
      </section>
    </div>
  );
}