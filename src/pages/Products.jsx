// src/pages/Products.jsx - Professional Corporate Version
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { productCategories } from '../data/products';
import { 
  Search, Filter, Package, ArrowRight, CheckCircle2, Globe, Truck 
} from 'lucide-react';

export default function Products() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

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
    return matchSearch && matchCat;
  });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1 }
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
            Premium Export Products
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl text-green-100 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Basmati Rice • Spices • Pulses • Oilseeds • Direct from India’s Best Farms
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {[
              { icon: Globe, text: "50+ Countries Served" },
              { icon: CheckCircle2, text: "100% Certified & Traceable" },
              { icon: Truck, text: "Global Door Delivery" }
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
                <p className="text-xl md:text-2xl font-bold">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY FILTER BAR - Clean & Professional */}
      <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-green-700" />
              <input
                type="text"
                placeholder="Search products (e.g. 1121 Basmati, Turmeric)"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-700 focus:outline-none text-lg font-medium"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-6 h-6 text-green-700 flex-shrink-0" />
              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-700 focus:outline-none text-lg font-medium"
              >
                <option value="all">All Categories ({allProducts.length} products)</option>
                {productCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {t(cat.id) || cat.name} ({cat.products.length})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-2xl font-bold text-gray-700">
              {filtered.length} {filtered.length === 1 ? 'Product' : 'Products'} Available
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  to={`/products/${product.categoryId}/${product.id}`}
                  className="block bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:border-green-700 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {product.moq}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-green-700 font-semibold text-sm uppercase tracking-wider">
                      {product.categoryName}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2 line-clamp-2">
                      {product.name}
                    </h3>
                    {product.subtitle && (
                      <p className="text-gray-600 text-sm mt-1">{product.subtitle}</p>
                    )}

                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-green-700">
                          ₹{product.pricePerTon.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">per MT • FOB India</p>
                      </div>
                      <div className="bg-green-700 text-white p-4 rounded-full shadow-lg group-hover:bg-green-600 transition">
                        <ArrowRight className="w-7 h-7" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filtered.length === 0 && (
            <div className="text-center py-32">
              <Package className="w-24 h-24 mx-auto text-gray-300 mb-8" />
              <h3 className="text-3xl font-bold text-gray-600">No products found</h3>
              <p className="text-xl text-gray-500 mt-4">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-green-700 text-white text-center">
        <div className招待="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Import Premium Indian Products?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto font-light">
            Get live prices and samples — reply within 5 minutes
          </p>
          <a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20Please%20send%20latest%20export%20prices"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-6 bg-white text-green-700 px-16 py-8 rounded-xl text-2xl md:text-3xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-2xl"
          >
            Get Live Quote Now
            <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition" />
          </a>
        </div>
      </section>
    </div>
  );
}