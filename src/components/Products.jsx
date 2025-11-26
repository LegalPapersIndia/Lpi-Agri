// src/components/Products.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { Leaf, Package, Globe, CheckCircle } from 'lucide-react';

const Products = () => {
  const { t } = useLanguage();

  const categories = [
    {
      name: "Rice",
      items: [
        { name: "1121 Basmati Rice (Steam / Sella / Raw)", img: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Pusa Basmati 1509 / 1401", img: "https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "IR64 Non-Basmati (Parboiled / White)", img: "https://images.pexels.com/photos/4113457/pexels-photo-4113457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Sona Masoori & Ponni Rice", img: "https://images.pexels.com/photos/4113458/pexels-photo-4113458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ]
    },
    {
      name: "Spices",
      items: [
        { name: "Cumin Seeds (Jeera) – Singapore/Europe Quality", img: "https://images.pexels.com/photos/4199093/pexels-photo-4199093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Red Chilli (Whole & Powder)", img: "https://images.pexels.com/photos/4198762/pexels-photo-4198762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Turmeric Fingers & Powder", img: "https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Coriander Seeds & Powder", img: "https://images.pexels.com/photos/4199089/pexels-photo-4199089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Black Pepper, Cardamom, Cloves", img: "https://images.pexels.com/photos/4198765/pexels-photo-4198765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ]
    },
    {
      name: "Pulses & Grains",
      items: [
        { name: "Chana Dal (Split Chickpeas)", img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Toor Dal (Pigeon Pea)", img: "https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Moong Dal (Green Gram)", img: "https://images.pexels.com/photos/264908/pexels-photo-264908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Wheat, Maize, Millets (Bajra, Jowar)", img: "https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ]
    },
    {
      name: "Oil Seeds & Others",
      items: [
        { name: "Sesame Seeds (Natural & Hulled)", img: "https://images.pexels.com/photos/4199095/pexels-photo-4199095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Groundnut (Peanuts) – Bold & Java", img: "https://images.pexels.com/photos/4199091/pexels-photo-4199091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Castor Seeds & Oil", img: "https://images.pexels.com/photos/4199096/pexels-photo-4199096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Fresh Onions & Dehydrated Products", img: "https://images.pexels.com/photos/533289/pexels-photo-533289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            {t('products') || 'Our Premium Products'}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We export the finest quality Indian agricultural products — sourced directly from farmers, 
            processed under strict quality control, and delivered worldwide with full traceability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-20">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-8 text-center">
                <h3 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-4">
                  <Package className="w-10 h-10" />
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                {category.items.map((product, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-green-500 transition-all duration-500 transform hover:-translate-y-3"
                  >
                    <div className="aspect-w-1 aspect-h-1 h-56 overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-5 text-center">
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                        {product.name}
                      </h4>
                      <div className="mt-3 flex justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">Export Ready</span>
                      </div>
                    </div>

                    {/* Hover Badge */}
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      APEDA Certified
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-green-700 to-green-900 text-white rounded-3xl p-12 shadow-2xl">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Looking for Something Specific?
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            We also export Sugar, Fresh Fruits, Vegetables, Flour (Ma ida/Atta), Tea, Coffee, and more.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-green-800 hover:bg-green-50 px-10 py-5 rounded-full text-xl font-bold transition transform hover:scale-105 shadow-lg"
          >
            <Leaf className="w-7 h-7" />
            Request Custom Quote
          </a>
        </div>

        {/* Quality Assurance Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "100% Traceability",
            "FSSAI & APEDA Certified",
            "Global GAP Compliant",
            "Organic Options Available"
          ].map((item, i) => (
            <div key={i} className="bg-green-800 text-white p-6 rounded-2xl shadow-lg">
              <CheckCircle className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
              <p className="font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;