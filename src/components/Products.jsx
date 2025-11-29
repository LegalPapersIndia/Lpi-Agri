// src/components/Products.jsx - Professional Corporate Version
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { productCategories } from '../data/products';

const Products = () => {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t('ourProducts') || 'Our Premium Agricultural Exports'}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Premium Indian products — 100% traceable, certified, and ready for global markets
          </p>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
            >
              {/* Category Header - Clean & Authoritative */}
              <div className="mb-16">
                <div className="flex items-center justify-center gap-6">
                  <div className="w-20 h-20 bg-green-700 text-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Package className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-gray-900">
                    {t(category.id) || category.name}
                  </h3>
                </div>
                <div className="h-1 w-32 bg-green-700 mx-auto mt-6 rounded-full" />
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.products.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.7 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Link
                      to={`/products/${category.id}/${product.id}`}
                      className="block bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Product Image */}
                      <div className="relative h-64 overflow-hidden bg-gray-100">
                        <img
                          src={product.images[0]}
                          alt={t(product.name) || product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1560493675-0496232ca7ad?w=800&q=80";
                          }}
                        />
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                          {t(product.name) || product.name}
                        </h4>
                        <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-3">
                          {t(product.description) || product.description}
                        </p>

                        <div className="mt-8 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-7 h-7 text-green-600" />
                            <span className="text-green-700 font-semibold">Export Ready</span>
                          </div>
                          <ArrowRight className="w-8 h-8 text-green-700 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA - Clean & Professional */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 bg-green-700 rounded-3xl p-16 text-center text-white shadow-2xl"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Need a Custom Product or Private Label?
          </h3>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            We also export Sugar • Fresh Fruits & Vegetables • Flour • Tea • Coffee • Dairy • Spices in bulk
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 bg-white text-green-700 px-12 py-6 rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-lg"
            >
              Request Custom Quote
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>

            <a
              href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20discuss%20bulk%20or%20private%20label%20requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 border-4 border-white text-white rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;