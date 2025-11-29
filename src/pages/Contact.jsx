// src/pages/Contact.jsx - Professional Corporate Version
import React, { useState } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, Building2, Globe, CheckCircle, MessageCircle 
} from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', country: '', product: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    console.log('Inquiry submitted:', formData);
    setFormData({ name: '', company: '', email: '', phone: '', country: '', product: '', message: '' });
  };

  const whatsappLink = "https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I%27m%20interested%20in%20importing%20premium%20Indian%20agri%20products";

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
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t('contact') || 'Contact Us'}
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl text-green-100 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Start Your Import Journey with India’s Most Trusted Agri Exporter
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-white text-green-700 px-12 py-6 rounded-xl text-xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-lg"
            >
              <MessageCircle className="w-8 h-8" />
              Chat on WhatsApp (Fastest)
            </a>
            <a
              href="tel:+917505266931"
              className="inline-flex items-center gap-4 bg-green-700 hover:bg-green-600 px-12 py-6 rounded-xl text-xl font-bold uppercase tracking-wider transition-all shadow-lg border-2 border-white/30"
            >
              <Phone className="w-8 h-8" />
              Call +91 75052 66931
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left: Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  We Reply Within 5 Minutes
                </h2>
                <p className="text-xl text-gray-600">
                  Our export team is online 24/7 — ready to serve you instantly.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  { icon: Building2, title: "Corporate Office", content: "LPI Agri Exports Pvt Ltd\nMumbai, Maharashtra\nIndia" },
                  { icon: Phone, title: "Phone & WhatsApp", content: "+91 75052 66931\n24/7 Global Support" },
                  { icon: Mail, title: "Email", content: "export@lpiagri.com\ninfo@lpiagri.com" },
                  { icon: Clock, title: "Working Hours", content: "Monday–Saturday: 9:00 AM – 8:00 PM IST\nEmergency Support: 24/7" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-16 h-16 bg-green-700 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="w-9 h-9" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 mt-2 whitespace-pre-line leading-relaxed">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block bg-green-700 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-center transition">
                    Open WhatsApp Chat
                  </a>
                  <a href="mailto:export@lpiagri.com" className="block bg-white border-2 border-green-700 text-green-700 hover:bg-green-50 px-6 py-4 rounded-xl font-semibold text-center transition">
                    Send Email Inquiry
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Send Your Inquiry
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-8 p-6 bg-green-50 border-2 border-green-300 rounded-2xl flex items-center gap-4"
                >
                  <CheckCircle className="w-12 h-12 text-green-700 flex-shrink-0" />
                  <div>
                    <p className="text-xl font-bold text-green-800">Thank You!</p>
                    <p className="text-green-700">We’ll contact you within 5 minutes.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name *" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none text-lg" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none text-lg" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address *" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none text-lg" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone (with country code) *" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none text-lg" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder="Your Country *" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none text-lg" />
                  <input type="text" name="product" value={formData.product} onChange={handleChange} placeholder="Interested Product (e.g. Basmati Rice)" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none text-lg" />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Your Requirements / Message *"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none text-lg resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-6 rounded-xl text-xl font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  <Send className="w-7 h-7" />
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Our Location
          </h2>
          <div className="rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.945889731361!2d77.31967657533406!3d28.595428075685028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f9c4c2aa39%3A0x6393f050e681d51e!2sSector%208%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1720000000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LPI Agri Office - Mumbai Region"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Globe className="w-20 h-20 mx-auto mb-8 text-green-300" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Partner from India to the World
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto font-light">
            200+ global importers trust LPI Agri for quality, reliability, and on-time delivery
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-green-700 px-12 py-6 rounded-xl text-2xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-xl"
          >
            <MessageCircle className="w-10 h-10" />
            Start Chat Now
          </a>
        </div>
      </section>
    </div>
  );
}