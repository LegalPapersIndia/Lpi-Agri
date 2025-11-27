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
      cat.products.map(p => ({ ...p, categoryName: t(cat.id) || cat.name, categoryId: cat.id }))
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
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50 overflow-hidden">

      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900">
        <div className="absolute inset-0 opacity-20">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-2 bg-gradient-to-t from-amber-400 to-yellow-300"
              style={{
                height: `${150 + Math.random() * 200}px`,
                left: `${(i / 60) * 100}%`,
                transform: `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`,
              }}
              animate={{ y: [0, -100, 0] }}
              transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 5 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Premium Export
            </span>
            <br />
            <span className="text-white">Products</span>
          </motion.h1>

          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-5xl font-bold mt-8 text-amber-100"
          >
            1000 KG MOQ • Real-Time Prices • Direct from India
          </motion.p>

          <div className="flex justify-center gap-12 mt-16 text-2xl font-bold">
            <div className="flex items-center gap-4">
              <Globe className="w-12 h-12 text-amber-400" />
              <span>50+ Countries</span>
            </div>
            <div className="flex items-center gap-4">
              <Zap className="w-12 h-12 text-amber-400" />
              <span>Live Pricing</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-12 h-12 text-amber-400" />
              <span>100% Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters - Sticky Golden Bar */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative"
            >
              <Search className="absolute left-6 top-6 w-8 h-8 text-green-900" />
              <input
                type="text"
                placeholder="Search 100+ premium products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-20 pr-8 py-6 rounded-full bg-white/90 backdrop-blur-lg shadow-xl text-xl font-medium text-green-900 placeholder-green-600 focus:outline-none focus:ring-4 focus:ring-amber-300"
              />
              <Sparkles className="absolute right-6 top-6 w-8 h-8 text-amber-600" />
            </motion.div>

            {/* Category Filter */}
            <motion.select
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="px-10 py-6 rounded-full bg-white/90 backdrop-blur-lg shadow-xl text-xl font-medium text-green-900 focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              <option value="all">All Categories</option>
              {productCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {t(cat.id) || cat.name} ({cat.products.length})
                </option>
              ))}
            </motion.select>

            {/* Price Range */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 bg-white/90 backdrop-blur-lg rounded-full px-8 py-6 shadow-xl"
            >
              <IndianRupee className="w-10 h-10 text-green-700" />
              <span className="text-2xl font-black text-green-900">
                ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
              </span>
              <input
                type="range"
                min="0" max="5000" step="100"
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                className="flex-1 h-3 bg-amber-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid - Luxury Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                variants={item}
                whileHover={{ y: -20, scale: 1.03 }}
                className="group relative"
              >
                {/* Golden Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />

                <Link
                  to={`/products/${product.categoryId}/${product.id}`}
                  className="block relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-transparent hover:border-amber-400 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* MOQ Badge */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-6 py-3 rounded-full font-black shadow-xl flex items-center gap-2">
                      <Package className="w-6 h-6" />
                      {product.moq}
                    </div>

                    {/* Live Price Tag */}
                    <div className="absolute bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full font-black shadow-xl flex items-center gap-2">
                      <Zap className="w-6 h-6" />
                      LIVE PRICE
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 bg-gradient-to-b from-white to-amber-50">
                    <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
                      {product.categoryName}
                    </p>
                    <h3 className="text-2xl font-black text-gray-800 mt-3 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-4 line-clamp-2 text-sm">
                      {product.description}
                    </p>

                    <div className="mt-8 flex items-end justify-between">
                      <div>
                        <p className="text-4xl font-black text-emerald-700">
                          ₹{product.pricePerTon.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 font-medium">per Metric Ton (FOB)</p>
                      </div>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="bg-gradient-to-r from-emerald-600 to-green-700 p-4 rounded-full text-white shadow-xl"
                      >
                        <ArrowRight className="w-8 h-8" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <Wheat className="w-32 h-32 mx-auto text-amber-300 mb-8" />
              <h3 className="text-4xl font-black text-gray-600">No products found</h3>
              <p className="text-xl text-gray-500 mt-4">Try adjusting your filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-emerald-900 via-green-800 to-lime-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-8xl font-black mb-10"
          >
            Ready to Import Premium Indian Products?
          </motion.h2>

          <motion.a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20want%20to%20see%20latest%20prices"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-8 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-20 py-10 rounded-full text-4xl font-black uppercase tracking-wider shadow-3xl overflow-hidden"
          >
            <Package className="w-12 h-12 group-hover:rotate-12 transition" />
            <span className="relative z-10">Get Live Quote Now</span>
            <ArrowRight className="w-12 h-12 group-hover:translate-x-6 transition" />
            <motion.div className="absolute inset-0 bg-white" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.8 }} />
          </motion.a>
        </div>
      </section>
    </div>
  );
}