// src/pages/Contact.jsx
import React, { useState } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, Building2,
  Globe, CheckCircle, MessageCircle
} from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', product: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    console.log('Form submitted:', formData);
    setFormData({ name: '', company: '', email: '', phone: '', country: '', product: '', message: '' });
  };

  const whatsappNumber = "+917505266931";
  const whatsappMessage = "Hello LPI Agri! I'm interested in importing from India.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">

      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-800 via-emerald-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-1 md:w-2 bg-gradient-to-t from-amber-400 to-transparent"
              style={{ height: `${100 + Math.random() * 150}px`, left: `${(i / 20) * 100}%` }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            {t('contact') || 'Get In Touch'}
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl mt-6 opacity-95 max-w-3xl mx-auto"
          >
            Start Importing Premium Indian Agri Products Today
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 px-10 py-6 rounded-full text-xl md:text-2xl font-bold transition-all hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="w-10 h-10" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+917505266931"
              className="inline-flex items-center justify-center gap-4 bg-white text-green-800 hover:bg-green-50 px-10 py-6 rounded-full text-xl md:text-2xl font-bold transition-all hover:scale-105 shadow-2xl"
            >
              <Phone className="w-10 h-10" />
              Call +91 75052 66931
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Contact Details */}
            <div className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-black text-green-800">
                We Reply Within 5 Minutes
              </h2>

              <div className="space-y-10">
                {[
                  { icon: Building2, title: "Corporate Office", content: "LPI Agri Exports Pvt Ltd\nF-2 Sector 8,\nNoida, Uttar Pradesh, India - 201301" },
                  { icon: Phone, title: "Phone & WhatsApp", content: <><a href="tel:+917505266931" className="font-bold text-green-700">+91 75052 66931</a><br />24/7 Support Available</> },
                  { icon: Mail, title: "Email Us", content: <><a href="mailto:export@lpiagri.com" className="font-bold text-green-700">export@lpiagri.com</a><br /><a href="mailto:info@lpiagri.com" className="font-bold text-green-700">info@lpiagri.com</a></> },
                  { icon: Clock, title: "Working Hours", content: "Mon-Sat: 9:00 AM - 8:00 PM\nSunday: Emergency Support Only" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="bg-green-100 p-4 rounded-2xl flex-shrink-0">
                      <item.icon className="w-10 h-10 md:w-12 md:h-12 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{item.title}</h3>
                      <div className="text-base md:text-lg text-gray-600 mt-2 whitespace-pre-line">
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Photos */}
              <div className="mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                  Our Office & Warehouse
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800",
                    "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800",
                    "https://images.pexels.com/photos/4498140/pexels-photo-4498140.jpeg?w=800",
                    "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?w=800"
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Office ${i + 1}`}
                      loading="lazy"
                      className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover h-48"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-black text-green-800 mb-8">
                Send Us a Message
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-8 p-6 bg-green-100 border-2 border-green-300 rounded-2xl flex items-center gap-4"
                >
                  <CheckCircle className="w-12 h-12 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-green-800">Thank You!</p>
                    <p className="text-base md:text-lg text-green-700">We’ll contact you within 5 minutes!</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name *" className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address *" className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone with Country Code *" className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder="Your Country *" className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg" />
                  <input type="text" name="product" value={formData.product} onChange={handleChange} placeholder="Interested Product" className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg" />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Your Message / Requirements *"
                  className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-700 to-emerald-800 hover:from-green-800 hover:to-emerald-900 text-white py-6 rounded-2xl text-xl md:text-2xl font-black transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-4"
                >
                  <Send className="w-8 h-8" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-green-800 mb-10">
            Our Location - Noida, Uttar Pradesh
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.945889731361!2d77.31967657533406!3d28.595428075685028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f9c4c2aa39%3A0x6393f050e681d51e!2sSector%208%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1720000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LPI Agri Office Location"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Globe className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Your Trusted Partner from India to the World
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            200+ importers trust LPI Agri for quality & on-time delivery
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 px-12 py-6 rounded-full text-2xl md:text-3xl font-bold transition-all hover:scale-110 shadow-2xl"
          >
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12" />
            Start Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}