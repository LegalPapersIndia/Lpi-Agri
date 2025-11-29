// src/pages/Import.jsx - Professional Corporate Version
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Package, Truck, Warehouse, IndianRupee, ShieldCheck, Clock, PhoneCall, 
  ArrowRight, BadgeCheck, Factory, Store, MessageCircle, Globe 
} from 'lucide-react';

const Import = () => {
  const { t } = useLanguage();

  const products = [
    { name: "Australian Almonds", origin: "Australia", volume: "500+ MT/Month" },
    { name: "California Walnuts", origin: "USA", volume: "300+ MT/Month" },
    { name: "Afghan Dry Grapes", origin: "Afghanistan", volume: "800+ MT/Month" },
    { name: "Iranian Pistachio", origin: "Iran", volume: "200+ MT/Month" },
    { name: "Turkish Hazelnuts", origin: "Turkey", volume: "150+ MT/Month" },
    { name: "Vietnamese Cashew W320", origin: "Vietnam", volume: "1000+ MT/Month" },
    { name: "Indonesian Cloves & Nutmeg", origin: "Indonesia", volume: "400+ MT/Month" },
    { name: "Brazilian Sugar ICUMSA 45", origin: "Brazil", volume: "5000+ MT/Month" },
  ];

  const benefits = [
    { icon: IndianRupee, title: "Best Wholesale Rates", desc: "Direct import prices – no middlemen" },
    { icon: Truck, title: "All India Delivery", desc: "Door delivery in 7–12 days" },
    { icon: ShieldCheck, title: "100% Genuine Quality", desc: "Lab tested with COA & documents" },
    { icon: Clock, title: "Ready Stock Available", desc: "Immediate dispatch from warehouses" },
    { icon: Warehouse, title: "Bulk & Break-Bulk", desc: "Full container or small lots" },
    { icon: BadgeCheck, title: "GST Invoice + Bills", desc: "Complete documentation for business" },
  ];

  const cities = ["Mumbai", "Delhi NCR", "Ahmedabad", "Hyderabad", "Bangalore", "Chennai", "Kolkata", "Pune"];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO - Clean & Powerful */}
      <section className="bg-green-800 py-24 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <Globe className="w-20 h-20 md:w-28 md:h-28 text-green-300" />
          </motion.div>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Import Premium Dry Fruits
            <br className="hidden sm:block" />
            <span className="text-green-300"> & Global Commodities</span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl text-green-100 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Best Rates • Ready Stock • All India Door Delivery
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <a
              href="https://wa.me/917505266931?text=Hello!%20Please%20send%20latest%20rates%20for%20imported%20dry%20fruits"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-white text-green-700 px-12 py-6 rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-lg"
            >
              <MessageCircle className="w-8 h-8" />
              WhatsApp for Rates
            </a>
            <a
              href="tel:+917505266931"
              className="inline-flex items-center gap-4 bg-green-700 hover:bg-green-600 px-12 py-6 rounded-xl text-xl font-bold uppercase tracking-wider transition-all shadow-lg border-2 border-white/30"
            >
              <PhoneCall className="w-8 h-8" />
              Call +91 75052 66931
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Imported Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium global dry fruits, nuts, and spices — directly imported and ready for Indian businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:border-green-700 transition-all"
              >
                <div className="h-48 bg-gray-200 border-2 border-dashed rounded-t-3xl flex items-center justify-center">
                  <Package className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-green-700 font-semibold text-lg">{item.origin}</p>
                  <p className="text-2xl font-bold text-green-600 mt-4">{item.volume}</p>
                  <div className="mt-6">
                    <span className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold text-sm">
                      Ready Stock
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-green-100"
          >
            Why Import With LPI Agri?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition"
                >
                  <Icon className="w-16 h-16 mx-auto mb-6 text-green-300" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-green-100 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* READY STOCK CITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-12"
          >
            Ready Stock Available Across India
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {cities.map((city, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-green-700 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-lg hover:bg-green-600 transition"
              >
                {city}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Warehouse className="w-20 h-20 mx-auto mb-8 text-green-300" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Need Imported Dry Fruits & Commodities?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto font-light">
            Call or WhatsApp now for the best wholesale rates in India
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+917505266931"
              className="group inline-flex items-center gap-4 bg-white text-green-700 px-12 py-6 rounded-xl text-2xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-xl"
            >
              <PhoneCall className="w-10 h-10" />
              Call Now
            </a>
            <a
              href="https://wa.me/917505266931?text=Hello!%20Please%20send%20latest%20rates%20for%20imported%20dry%20fruits%20and%20sugar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-500 px-12 py-6 rounded-xl text-2xl font-bold uppercase tracking-wider transition-all shadow-xl"
            >
              <MessageCircle className="w-10 h-10" />
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Import;