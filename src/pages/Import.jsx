// src/pages/Import.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Package, Truck, Warehouse, IndianRupee, ShieldCheck, 
  Clock, PhoneCall, ArrowRight, Wheat, Sparkles, BadgeCheck,
  Factory, Store, Hotel, ShoppingCart, MessageCircle
} from 'lucide-react';

const Import = () => {
  const { t } = useLanguage();

  const products = [
    { 
      name: "Australian Almonds", 
      origin: "Australia", 
      icon: Factory, 
      volume: "500+ MT/Month",
      image: "https://images.unsplash.com/photo-1574876242352-596b9a59f064?w=800&q=80"
    },
    { 
      name: "California Walnuts", 
      origin: "USA", 
      icon: Store, 
      volume: "300+ MT/Month",
      image: "https://images.unsplash.com/photo-1606913093693-0733842804b1?w=800&q=80"
    },
    { 
      name: "Afghan Dry Grapes", 
      origin: "Afghanistan", 
      icon: Hotel, 
      volume: "800+ MT/Month",
      image: "https://images.unsplash.com/photo-1598373182133-812373d7917a?w=800&q=80"
    },
    { 
      name: "Iranian Pistachio", 
      origin: "Iran", 
      icon: ShoppingCart, 
      volume: "200+ MT/Month",
      image: "https://images.unsplash.com/photo-1606890658317-947d6bc46560?w=800&q=80"
    },
    { 
      name: "Turkish Hazelnuts", 
      origin: "Turkey", 
      icon: Factory, 
      volume: "150+ MT/Month",
      image: "https://images.unsplash.com/photo-1606890658317-947d6bc46560?w=800&q=80"
    },
    { 
      name: "Vietnamese Cashew W320", 
      origin: "Vietnam", 
      icon: Store, 
      volume: "1000+ MT/Month",
      image: "https://images.unsplash.com/photo-1606890658317-947d6bc46560?w=800&q=80"
    },
    { 
      name: "Indonesian Cloves & Nutmeg", 
      origin: "Indonesia", 
      icon: Hotel, 
      volume: "400+ MT/Month",
      image: "https://images.unsplash.com/photo-1596040061995-39f6e4d2e92e?w=800&q=80"
    },
    { 
      name: "Brazilian Sugar ICUMSA 45", 
      origin: "Brazil", 
      icon: Warehouse, 
      volume: "5000+ MT/Month",
      image: "https://images.unsplash.com/photo-1622138443536-3b0ece3e6a82?w=800&q=80"
    },
  ];

  const benefits = [
    { icon: IndianRupee, title: "Best Wholesale Rates", desc: "Direct import prices – no middlemen" },
    { icon: Truck, title: "All India Delivery", desc: "Door delivery in 7–12 days" },
    { icon: ShieldCheck, title: "100% Genuine Quality", desc: "Lab tested with COA & documents" },
    { icon: Clock, title: "Ready Stock Available", desc: "Immediate dispatch from warehouses" },
    { icon: Warehouse, title: "Bulk & Break-Bulk", desc: "1 container or 1 ton – both possible" },
    { icon: BadgeCheck, title: "GST Invoice + Bills", desc: "Full documentation for business" },
  ];

  const cities = ["Mumbai", "Delhi NCR", "Ahmedabad", "Hyderabad", "Bangalore", "Chennai"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">

      {/* HERO - Mobile Optimized */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 md:w-2 bg-gradient-to-t from-white to-transparent"
              style={{ 
                height: `${100 + Math.random() * 150}px`, 
                left: `${(i / 20) * 100}%` 
              }}
              animate={{ y: [0, -80, 0] }}
              transition={{ duration: 10 + Math.random() * 8, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <IndianRupee className="w-20 h-20 md:w-32 md:h-32 drop-shadow-2xl" />
          </motion.div>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            Import Premium
            <br className="sm:hidden" />
            <span className="text-yellow-300"> Dry Fruits & Spices</span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-3xl font-bold mt-6 text-yellow-100"
          >
            Best Rates • Ready Stock • All India Delivery
          </motion.p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-green-800 mb-12"
          >
            Our Imported Product Range
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-4 border-transparent hover:border-orange-400 transition-all duration-300"
                >
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => e.target.src = "https://images.unsplash.com/photo-1541692641318-9a2c8a6f9c19?w=800&q=80"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <div className="p-6 md:p-8 text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 shadow-lg">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-orange-600 font-bold text-base md:text-lg">{item.origin}</p>
                    <p className="text-gray-600 text-sm md:text-base mt-3 font-medium">Ready Stock</p>
                    <p className="text-2xl md:text-3xl font-black text-orange-600 mt-2">{item.volume}</p>

                    <a
                      href="tel:+917505266931"
                      className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base shadow-lg hover:bg-green-700 transition"
                    >
                      <PhoneCall className="w-5 h-5" />
                      Get Price
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-amber-300 mb-12"
          >
            Why Buy From Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-amber-400/30"
                >
                  <Icon className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-5 text-amber-400" />
                  <h3 className="text-xl md:text-2xl font-black mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-amber-100 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* READY STOCK CITIES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-green-800 mb-12"
          >
            Ready Stock Available At
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {cities.map((city, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-orange-400 to-amber-500 text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl shadow-xl font-bold text-lg md:text-2xl"
              >
                {city}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <Wheat className="w-24 h-24 md:w-32 md:h-32 text-yellow-300" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Need Imported Dry Fruits?
          </h2>
          <p className="text-xl md:text-3xl mb-10 font-bold">
            Call / WhatsApp Now for Best Rates in India
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="tel:+917505266931"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-white text-orange-600 px-10 py-6 md:px-16 md:py-10 rounded-full text-2xl md:text-4xl font-black shadow-2xl"
            >
              <PhoneCall className="w-10 h-10 md:w-12 md:h-12" />
              Call +91 75052 66931
            </motion.a>

            <motion.a
              href="https://wa.me/917505266931?text=Hello!%20Send%20me%20latest%20rates%20of%20imported%20dry%20fruits"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-green-600 hover:bg-green-700 px-10 py-6 md:px-16 md:py-10 rounded-full text-2xl md:text-4xl font-bold shadow-2xl"
            >
              <MessageCircle className="w-10 h-10 md:w-12 md:h-12" />
              WhatsApp Quote
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Import;