// src/components/Products.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, CheckCircle, Wheat, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { productCategories } from '../data/products';

const Products = () => {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Title */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-green-700 mb-6 leading-tight">
            {t('ourProducts') || 'Our Premium Harvest'}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed">
            Premium Indian agricultural products — 100% traceable, certified, and export-ready
          </p>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex justify-center mt-8"
          >
            <Wheat className="w-20 h-20 text-amber-500 drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32 md:space-y-40"
        >
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="relative"
            >
              {/* Category Header - Golden Luxury */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 origin-left"
                />
                <div className="relative bg-gradient-to-r from-emerald-800 via-green-800 to-lime-800 p-10 md:p-16 text-center">
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
                  >
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Package className="w-20 h-20 md:w-24 md:h-24 text-amber-300" />
                    </motion.div>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl tracking-tight">
                      {t(category.id) || category.name}
                    </h3>
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                      <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-yellow-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16 px-4">
                {category.products.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, duration: 0.8 }}
                    whileHover={{ y: -16, scale: 1.03 }}
                    className="group relative"
                  >
                    <Link
                      to={`/products/${category.id}/${product.id}`}
                      className="block bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent hover:border-amber-400 transition-all duration-500 transform hover:shadow-3xl"
                    >
                      {/* Product Image */}
                      <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-amber-50 to-green-50">
                        <img
                          src={product.images[0]}
                          alt={t(product.name) || product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-800"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1560493675-0496232ca7ad?w=800&q=80";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Golden Premium Badge */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                          className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider shadow-2xl flex items-center gap-2"
                        >
                          <Sparkles className="w-5 h-5" />
                          Premium Grade
                        </motion.div>
                      </div>

                      {/* Product Info */}
                      <div className="p-8 bg-gradient-to-b from-white to-amber-50">
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[80px]">
                          {t(product.name) || product.name}
                        </h4>
                        <p className="text-gray-600 mt-4 text-sm md:text-base line-clamp-3 leading-relaxed">
                          {t(product.description) || product.description}
                        </p>

                        <div className="mt-10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.div
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                            >
                              <CheckCircle className="w-9 h-9 text-emerald-600" />
                            </motion.div>
                            <span className="text-emerald-600 font-bold text-lg">Export Ready</span>
                          </div>
                          <motion.div
                            whileHover={{ x: 12 }}
                            className="text-emerald-600"
                          >
                            <ArrowRight className="w-12 h-12" />
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA - Pure Luxury */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-32 md:mt-40 relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-green-800 to-lime-900 p-16 md:p-24 text-center shadow-4xl border-8 border-amber-400/30"
        >
          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0 opacity-20 bg-[length:400%_400%] bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"
          />

          <motion.h3
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-8 relative z-10 drop-shadow-2xl"
          >
            {t('lookingForSpecific') || 'Need Something Special?'}
          </motion.h3>
          
          <p className="text-2xl md:text-3xl text-amber-100 mb-12 max-w-5xl mx-auto font-medium relative z-10 leading-relaxed">
            We also export Sugar • Fresh Fruits • Vegetables • Flour • Tea • Coffee • Dairy & more
          </p>

          <Link
            to="/contact"
            className="relative inline-flex items-center gap-8 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-20 py-10 rounded-full text-3xl md:text-4xl font-black uppercase tracking-widest shadow-3xl overflow-hidden group transform hover:scale-105 transition-all duration-500"
          >
            <span className="relative z-10">Request Custom Quote</span>
            <ArrowRight className="w-12 h-12 relative z-10 group-hover:translate-x-6 transition duration-500" />
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.7 }}
            />
          </Link>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 text-amber-400 opacity-10"
          >
            <Wheat className="w-96 h-96" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;  