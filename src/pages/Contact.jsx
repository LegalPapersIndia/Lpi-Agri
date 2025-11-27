// src/pages/Contact.jsx
import React, { useState } from 'react';
import { useLanguage } from '../config/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Building2,
  Globe,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '', company: '', email: '', phone: '', country: '', product: '', message: ''
    });
  };

  // WhatsApp Link
  const whatsappNumber = "+917505266931"; 
  const whatsappMessage = "Hello LPI Agri! I'm interested in importing from India.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            {t('contact') || 'Get In Touch'}
          </h1>
          <p className="text-2xl md:text-3xl opacity-95 max-w-4xl mx-auto">
            Start Importing Premium Indian Agri Products Today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 px-10 py-6 rounded-full text-2xl font-bold transition transform hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="w-10 h-10" />
              Chat on WhatsApp Now
            </a>
            <a 
              href="tel:+919879879879"
              className="inline-flex items-center gap-4 bg-white text-green-800 hover:bg-green-50 px-10 py-6 rounded-full text-2xl font-bold transition transform hover:scale-105 shadow-2xl"
            >
              <Phone className="w-10 h-10" />
              Call +91 98798 79879
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-12">
                We Reply Within 5 Minutes
              </h2>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="bg-green-100 p-4 rounded-2xl">
                    <Building2 className="w-12 h-12 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Corporate Office</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      LPI Agri Exports Pvt Ltd<br />
                      F-2 Sector 8 ,<br />
                      Noida, Uttar Pradesh, India - 201301
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-green-100 p-4 rounded-2xl">
                    <Phone className="w-12 h-12 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Phone & WhatsApp</h3>
                    <p className="text-xl text-green-700 font-bold mt-2"> <a href="tel: +917505266931">+91 75052 66931</a></p>
                    <p className="text-lg text-gray-600">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-green-100 p-4 rounded-2xl">
                    <Mail className="w-12 h-12 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Email Us</h3>
                    <p className="text-xl text-green-700 font-bold mt-2"> <a href="mailto:export@lpiagri.com">export@lpiagri.com</a></p>
                    <p className="text-xl text-green-700 font-bold"> <a href="mailto:info@lpiagri.com">info@lpiagri.com</a></p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-green-100 p-4 rounded-2xl">
                    <Clock className="w-12 h-12 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Working Hours</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: Emergency Support Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Photos */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-green-800 mb-8">Our Office & Warehouse</h3>
                <div className="grid grid-cols-2 gap-6">
                  <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Office" className="rounded-2xl shadow-xl hover:scale-105 transition" />
                  <img src="https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Warehouse" className="rounded-2xl shadow-xl hover:scale-105 transition" />
                  <img src="https://images.pexels.com/photos/4498140/pexels-photo-4498140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team" className="rounded-2xl shadow-xl hover:scale-105 transition" />
                  <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Loading" className="rounded-2xl shadow-xl hover:scale-105 transition" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <h2 className="text-4xl font-bold text-green-800 mb-8">
                Send Us a Message
              </h2>

              {isSubmitted && (
                <div className="mb-8 p-6 bg-green-100 border-2 border-green-300 rounded-2xl flex items-center gap-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-green-800">Thank You!</p>
                    <p className="text-lg text-green-700">We have received your message. Our team will contact you within 5 minutes!</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name *"
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number with Country Code *"
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Your Country *"
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg"
                  />
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Product Interested In (e.g. Basmati Rice, Cumin)"
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Your Message / Requirements *"
                  required
                  className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-lg resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white py-6 rounded-2xl text-2xl font-bold transition transform hover:scale-105 shadow-2xl flex items-center justify-center gap-4"
                >
                  <Send className="w-8 h-8" />
                  Send Message 
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            Our Location - Mundra Port, Gujarat
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.3033497832166!2d77.31967657533406!3d28.595428075685028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2290a24adc2aa39f%3A0x6393f050e681d51e!2sLegal%20Papers%20India!5e1!3m2!1sen!2sin!4v1764234384519!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LPI Agri Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Globe className="w-24 h-24 mx-auto mb-8" />
          <h2 className="text-5xl font-bold mb-8">
            Your Trusted Partner from India to the World
          </h2>
          <p className="text-2xl mb-12 opacity-95">
            200+ importers trust LPI Agri for quality, on-time delivery & long-term partnership
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-12 py-6 rounded-full text-2xl font-bold transition transform hover:scale-110 inline-flex items-center gap-4 justify-center">
              <MessageCircle className="w-10 h-10" />
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}