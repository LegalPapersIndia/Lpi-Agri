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
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Title */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-green-700 mb-6">
            {t('ourProducts') || 'Our Premium Harvest'}
          </h2>
          <p className="text-2xl text-gray-700 font-medium max-w-4xl mx-auto">
            Premium Indian agricultural products — 100% traceable, certified, and export-ready
          </p>
          <div className="flex justify-center mt-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-amber-500"
            >
              <Wheat className="w-16 h-16" />
            </motion.div>
          </div>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {productCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              variants={item}
              className="relative"
            >
              {/* Category Header - Golden Luxury */}
              <div className="relative overflow-hidden rounded-3xl">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 origin-left"
                />
                <div className="relative bg-gradient-to-r from-emerald-800 via-green-800 to-lime-800 p-12 text-center">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-6"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Package className="w-16 h-16 text-amber-300" />
                    </motion.div>
                    <h3 className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl">
                      {t(category.id) || category.name}
                    </h3>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      <Sparkles className="w-14 h-14 text-yellow-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 px-4">
                {category.products.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -12 }}
                    className="group relative"
                  >
                    <Link
                      to={`/products/${category.id}/${product.id}`}
                      className="block bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent hover:border-amber-400 transition-all duration-500"
                    >
                      {/* Product Image with Grain Overlay */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-100 to-green-50">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1560493675-0496232ca7ad?w=800&q=80";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Animated Grain Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity">
                          {[...Array(20)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute bottom-0 w-1 bg-amber-400"
                              style={{
                                height: `${30 + Math.random() * 60}px`,
                                left: `${(i / 20) * 100}%`,
                                transform: "translateX(-50%)",
                              }}
                              animate={{ y: [0, -20, 0] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                            />
                          ))}
                        </div>

                        {/* Golden Badge */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5 }}
                          className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-5 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2"
                        >
                          <Sparkles className="w-5 h-5" />
                          Premium
                        </motion.div>
                      </div>

                      <div className="p-8 bg-gradient-to-b from-white to-amber-50">
                        <h4 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[64px]">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 mt-3 line-clamp-2 text-sm">
                          {product.description}
                        </p>

                        <div className="mt-8 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <CheckCircle className="w-8 h-8 text-emerald-600" />
                            </motion.div>
                            <span className="text-emerald-600 font-bold text-lg">Export Ready</span>
                          </div>
                          <motion.div
                            whileHover={{ x: 10 }}
                            className="text-emerald-600"
                          >
                            <ArrowRight className="w-10 h-10" />
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

        {/* Final CTA - Shimmer Luxury */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-green-700 to-lime-800 p-20 text-center shadow-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-transparent to-amber-400/20" />
          
          <motion.h3
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            className="text-5xl md:text-6xl font-black text-white mb-8 relative z-10"
          >
            {t('lookingForSpecific') || 'Need Something Special?'}
          </motion.h3>
          
          <p className="text-2xl text-amber-100 mb-12 max-w-4xl mx-auto font-medium relative z-10">
            We also export Sugar • Fresh Fruits • Vegetables • Flour • Tea • Coffee • Dairy & more
          </p>

          <Link
            to="/contact"
            className="relative inline-flex items-center gap-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-16 py-8 rounded-full text-3xl font-black uppercase tracking-wider shadow-2xl overflow-hidden group"
          >
            <span className="relative z-10">Request Custom Quote</span>
            <ArrowRight className="w-10 h-10 relative z-10 group-hover:translate-x-4 transition" />
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Link>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 text-amber-400 opacity-20"
          >
            <Wheat className="w-64 h-64" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;