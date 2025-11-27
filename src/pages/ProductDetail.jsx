// src/pages/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { productCategories } from '../data/products';
import { 
  ArrowLeft, CheckCircle2, Package, Truck, Shield, 
  Globe, Wheat, Zap, PhoneCall, MessageCircle, 
  Award, Sparkles, IndianRupee, ArrowRight 
} from 'lucide-react';

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);

  const category = productCategories.find(c => c.id === categoryId);
  const product = category?.products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Wheat className="w-32 h-32 mx-auto text-amber-300 mb-8" />
          <h1 className="text-6xl font-black text-gray-800">Product Not Found</h1>
          <Link to="/products" className="mt-8 inline-block text-2xl text-green-700 hover:text-green-900">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const specs = [
    { label: "Grain Length", value: product.length },
    { label: "Purity", value: product.purity },
    { label: "Moisture", value: product.moisture },
    { label: "Broken Ratio", value: product.brokenRatio },
    { label: "Sortex", value: product.sortex ? "100% Cleaned" : "Standard" },
    { label: "Packaging", value: product.packaging || "50 KG PP Bags" },
  ].filter(spec => spec.value);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-4 text-green-800 hover:text-emerald-900 font-bold text-xl group"
        >
          <ArrowLeft className="w-8 h-8 group-hover:-translate-x-2 transition" />
          Back to All Products
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Image Gallery */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-3xl group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h1 className="text-5xl md:text-7xl font-black drop-shadow-2xl">
                    {product.name}
                  </h1>
                  <p className="text-2xl font-bold mt-2 opacity-90">
                    Premium Indian {t(categoryId) || category.name}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedImage(i)}
                    className={`rounded-2xl overflow-hidden cursor-pointer border-4 transition-all ${
                      selectedImage === i ? 'border-amber-400 shadow-2xl' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-32 object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-10"
            >
              {/* Price Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-green-800 text-white rounded-3xl p-10 shadow-3xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-2xl font-bold opacity-90">Current Export Price</p>
                    <div className="flex items-center gap-4 mt-4">
                      <IndianRupee className="w-16 h-16" />
                      <span className="text-6xl md:text-8xl font-black">
                        ₹{product.pricePerTon.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xl mt-2">per Metric Ton (FOB India)</p>
                  </div>
                  <div className="bg-amber-400 text-green-900 px-6 py-3 rounded-full font-black text-lg inline-flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    LIVE PRICE
                  </div>
                </div>

                <div className="border-t border-white/30 pt-6">
                  <div className="flex items-center justify-between text-xl">
                    <span className="font-bold">Minimum Order</span>
                    <span className="bg-white/20 px-6 py-3 rounded-full font-black">
                      {product.moq}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-4xl font-black text-emerald-800 mb-8 flex items-center gap-4">
                  <Award className="w-12 h-12 text-amber-500" />
                  Premium Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specs.map((spec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 bg-green-50 rounded-2xl p-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-700">{spec.label}</p>
                        <p className="text-xl font-black text-emerald-700">{spec.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-10 shadow-2xl">
                <h3 className="text-4xl font-black text-emerald-800 mb-8 flex items-center gap-4">
                  <Shield className="w-12 h-12 text-green-600" />
                  Certifications & Compliance
                </h3>
                <div className="flex flex-wrap gap-4">
                  {product.certifications.map((cert, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-6 py-4 rounded-full font-bold shadow-xl flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6" />
                      {cert}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <motion.a
                  href={`https://wa.me/917505266931?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20-%20Please%20send%20latest%20price%20and%20samples`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center gap-6 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-12 py-10 rounded-full text-3xl font-black shadow-3xl overflow-hidden"
                >
                  <MessageCircle className="w-12 h-12 group-hover:rotate-12 transition" />
                  <span className="relative z-10">WhatsApp Quote</span>
                  <motion.div className="absolute inset-0 bg-white" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.8 }} />
                </motion.a>

                <motion.a
                  href="tel:+917505266931"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-12 py-10 rounded-full text-3xl font-black shadow-3xl"
                >
                  <PhoneCall className="w-12 h-12" />
                  Call Now
                </motion.a>
              </div>

              {/* Trust Badges */}
              <div className="flex justify-center gap-12 mt-12 text-green-700">
                <div className="text-center">
                  <Globe className="w-16 h-16 mx-auto mb-3" />
                  <p className="font-bold text-xl">50+ Countries</p>
                </div>
                <div className="text-center">
                  <Truck className="w-16 h-16 mx-auto mb-3" />
                  <p className="font-bold text-xl">Door Delivery</p>
                </div>
                <div className="text-center">
                  <Sparkles className="w-16 h-16 mx-auto mb-3 text-amber-600" />
                  <p className="font-bold text-xl">Premium Quality</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA – NOW FIXED */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 via-green-800 to-lime-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black mb-8"
          >
            Ready to Import {product.name}?
          </motion.h2>

          {/* This was the broken part – now 100% fixed */}
          <motion.a
            href={`https://wa.me/917505266931?text=URGENT:%20Need%20quote%20for%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-8 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-900 px-20 py-10 rounded-full text-4xl font-black shadow-3xl overflow-hidden group"
          >
            <Package className="w-12 h-12 group-hover:rotate-12 transition" />
            <span className="relative z-10">GET INSTANT QUOTE</span>
            <ArrowRight className="w-12 h-12 group-hover:translate-x-6 transition" />
            <motion.div 
              className="absolute inset-0 bg-white" 
              initial={{ x: "-100%" }} 
              whileHover={{ x: "100%" }} 
              transition={{ duration: 0.8 }} 
            />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;