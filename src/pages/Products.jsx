// src/pages/Products.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { productCategories } from '../data/products';
import { 
  Search, Filter, IndianRupee, Package, Wheat, Sparkles, 
  ArrowRight, CheckCircle2, Zap, Globe 
} from 'lucide-react';

export default function Products() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const allProducts = useMemo(() => {
    return productCategories.flatMap(cat => 
      cat.products.map(p => ({ 
        ...p, 
        categoryName: t(cat.id) || cat.name, 
        categoryId: cat.id 
      }))
    );
  }, [t]);

  const filtered = allProducts.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = categoryFilter === 'all' || p.categoryId === categoryFilter;
    const matchPrice = p.pricePerTon >= priceRange[0] && p.pricePerTon <= priceRange[1];
    return matchSearch && matchCat && matchPrice;
  });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">

      {/* HERO - Mobile Optimized */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 md:w-2 bg-gradient-to-t from-amber-400 to-yellow-300"
              style={{ 
                height: `${100 + Math.random() * 150}px`, 
                left: `${(i / 25) * 100}%`,
                transform: "translateX(-50%)"
              }}
              animate={{ y: [0, -70, 0] }}
              transition={{ duration: 12 + Math.random() * 8, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          >
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Premium Export
            </span>
            <span className="block text-white mt-2">Products</span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold mt-6 text-amber-100"
          >
            1000 KG MOQ • Live Prices • Direct from India
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {[
              { icon: Globe, text: "50+ Countries" },
              { icon: Zap, text: "Live Pricing" },
              { icon: CheckCircle2, text: "100% Certified" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.15 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-amber-400/30"
              >
                <item.icon className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 text-amber-400" />
                <p className="text-lg md:text-xl font-bold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY FILTER BAR - Mobile-Friendly */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-green-900" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-12 py-5 rounded-full bg-white/95 shadow-lg text-lg font-medium text-green-900 placeholder-green-600 focus:outline-none focus:ring-4 focus:ring-amber-300"
              />
              <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-amber-600" />
            </div>

            {/* Category */}
            <select
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="w-full px-6 py-5 rounded-full bg-white/95 shadow-lg text-lg font-medium text-green-900 focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              <option value="all">All Categories</option>
              {productCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {t(cat.id) || cat.name} ({cat.products.length})
                </option>
              ))}
            </select>

            {/* Price Range */}
            <div className="flex items-center gap-4 bg-white/95 rounded-full px-6 py-5 shadow-lg">
              <IndianRupee className="w-8 h-8 text-green-700 flex-shrink-0" />
              <span className="text-xl font-bold text-green-900">
                ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
              </span>
              <input
                type="range"
                min="0" max="5000" step="100"
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                className="flex-1 h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                variants={item}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={`/products/${product.categoryId}/${product.id}`}
                  className="block bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-4 border-transparent hover:border-amber-400 transition-all duration-400"
                >
                  {/* Image */}
                  <div className="relative h-56 md:h-72 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* MOQ Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-1">
                      <Package className="w-5 h-5" />
                      {product.moq}
                    </div>

                    {/* Live Price Tag
                    <div className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-1">
                      <Zap className="w-5 h-5" />
                      LIVE PRICE
                    </div>
                    */ }
                  </div>

                  <div className="p-6 md:p-8 bg-gradient-to-b from-white to-amber-50">
                    <p className="text-green-600 font-bold text-xs uppercase tracking-wider">
                      {product.categoryName}
                    </p>
                    <h3 className="text-xl md:text-2xl font-black text-gray-800 mt-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="text-2xl md:text-3xl font-black text-emerald-700">
                          ₹{product.pricePerTon.toLocaleString()}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">per MT (FOB India)</p>
                      </div>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="bg-gradient-to-r from-emerald-600 to-green-700 p-3 md:p-4 rounded-full text-white shadow-lg"
                      >
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Wheat className="w-24 h-24 mx-auto text-amber-300 mb-6" />
              <h3 className="text-3xl md:text-4xl font-black text-gray-600">No products found</h3>
              <p className="text-lg text-gray-500 mt-4">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-emerald-900 via-green-800 to-lime-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8"
          >
            Ready to Import from India?
          </motion.h2>

          <motion.a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20see%20latest%20prices"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-10 py-6 md:px-20 md:py-10 rounded-full text-2xl md:text-4xl font-black uppercase tracking-wider shadow-2xl overflow-hidden"
          >
            <Package className="w-10 h-10 md:w-12 md:h-12" />
            Get Live Quote Now
            <ArrowRight className="w-10 h-10 md:w-12 md:h-12" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}