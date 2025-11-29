// src/pages/ProductDetail.jsx - Professional Corporate Version
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { productCategories } from '../data/products';
import { 
  ArrowLeft, CheckCircle2, Package, Truck, Shield, Globe, 
  Award, PhoneCall, MessageCircle, ArrowRight, MapPin 
} from 'lucide-react';

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);

  const category = productCategories.find(c => c.id === categoryId);
  const product = category?.products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-24 h-24 mx-auto text-green-700 mb-8" />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-xl text-green-700 hover:text-green-800 font-semibold">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const specs = [
    { label: "Average Length", value: product.avgLength || product.length },
    { label: "Moisture", value: product.moisture || "13% max" },
    { label: "Broken Ratio", value: product.broken || "2% max" },
    { label: "Purity", value: product.purity },
    { label: "Curcumin", value: product.curcumin },
    { label: "Counts", value: product.counts },
    { label: "Origin", value: product.origin },
    { label: "Packing", value: product.packing || "25/50 KG PP Bags • Private Label Available" },
  ].filter(spec => spec.value);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-3 text-green-700 hover:text-green-800 font-semibold text-lg group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition" />
          Back to All Products
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Image Gallery */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  className="w-full h-96 md:h-[600px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                  <h1 className="text-4xl md:text-6xl font-bold">{product.name}</h1>
                  {product.subtitle && (
                    <p className="text-xl md:text-2xl mt-2 opacity-90">{product.subtitle}</p>
                  )}
                </div>
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage(i)}
                      className={`rounded-2xl overflow-hidden cursor-pointer border-4 transition-all ${
                        selectedImage === i ? 'border-green-700 shadow-lg' : 'border-gray-200'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-28 object-cover" loading="lazy" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Information */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Price Card */}
              <div className="bg-green-700 text-white rounded-3xl p-10 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xl opacity-90">Export Price (FOB India)</p>
                    <p className="text-6xl md:text-7xl font-bold mt-4">
                      ₹{product.pricePerTon.toLocaleString()}
                    </p>
                    <p className="text-xl mt-2 opacity-90">per Metric Ton</p>
                  </div>
                  <div className="bg-green-300 text-green-900 px-6 py-3 rounded-full font-bold text-lg">
                    LIVE PRICE
                  </div>
                </div>
                <div className="border-t border-white/30 pt-6">
                  <p className="text-xl">
                    <span className="font-bold">MOQ:</span> {product.moq}
                  </p>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                  <Award className="w-12 h-12 text-green-700" />
                  Product Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specs.map((spec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-700">{spec.label}</p>
                        <p className="text-xl font-bold text-green-700">{spec.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                  <Shield className="w-10 h-10 text-green-700" />
                  Certifications & Compliance
                </h3>
                <div className="flex flex-wrap gap-4">
                  {product.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <a
                  href={`https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%20need%20a%20quote%20for%20${encodeURIComponent(product.name)}%20(${product.moq}%20minimum)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-4 bg-green-700 hover:bg-green-800 text-white px-10 py-6 rounded-xl text-xl font-bold uppercase tracking-wider transition-all shadow-xl"
                >
                  <MessageCircle className="w-8 h-8" />
                  WhatsApp Quote
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition" />
                </a>

                <a
                  href="tel:+917505266931"
                  className="inline-flex items-center justify-center gap-4 bg-white border-4 border-green-700 text-green-700 hover:bg-green-50 px-10 py-6 rounded-xl text-xl font-bold uppercase tracking-wider transition-all shadow-xl"
                >
                  <PhoneCall className="w-8 h-8" />
                  Call Now
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex justify-around pt-10 border-t border-gray-200">
                <div className="text-center">
                  <Globe className="w-14 h-14 mx-auto mb-3 text-green-700" />
                  <p className="font-bold text-lg">50+ Countries</p>
                </div>
                <div className="text-center">
                  <Truck className="w-14 h-14 mx-auto mb-3 text-green-700" />
                  <p className="font-bold text-lg">Global Delivery</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-14 h-14 mx-auto mb-3 text-green-700" />
                  <p className="font-bold text-lg">Mundra & Kandla</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-green-700 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Import {product.name}?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
            Join 200+ global importers who trust LPI Agri for premium quality and reliable supply
          </p>
          <a
            href={`https://wa.me/917505266931?text=URGENT:%20Need%20quote%20for%20${encodeURIComponent(product.name)}%20-%20${product.moq}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-6 bg-white text-green-700 px-16 py-8 rounded-xl text-2xl md:text-3xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-2xl"
          >
            Get Instant Quote Now
            <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;