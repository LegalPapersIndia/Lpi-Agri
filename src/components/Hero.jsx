// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const slides = [
    {
      image: "https://images.prismic.io/innovx/5b2db074-a7c9-4ef2-8b7a-6daa78239c76_innovx-agriculuture.jpg?auto=compress,format&rect=157,0,4650,3100&w=3840&h=2560", // Golden Indian rice fields at sunset
      title: t('exportingTrust') || "Exporting Trust • Importing Quality",
      subtitle: t('certified') || "APEDA • FSSAI • ISO Certified",
      highlight: "LPI Agri"
    },
    {
      image: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_1633_16697334671071295.jpg", // Fresh basmati rice grains close-up
      title: "Premium Indian Basmati Rice & Spices",
      subtitle: "From Fertile Fields to Global Tables",
      highlight: "100% Pure • Farm Fresh"
    },
    {
      image: "https://images.unsplash.com/photo-1711397651462-3b2a22f5cfc8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmUlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D", // Indian farmer in lush green field
      title: "Global Reach • Trusted Partnerships",
      subtitle: "Exporting Excellence to 20+ Countries",
      highlight: "Your Reliable Agri Partner"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.highlight}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"; // fallback
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl mx-auto z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            <span className="text-yellow-400 block text-6xl md:text-7xl lg:text-8xl">
              {slides[currentSlide].highlight}
            </span>
            <span className="block mt-4 text-4xl md:text-5xl lg:text-6xl">
              {slides[currentSlide].title}
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-green-100 font-medium mb-10 tracking-wider">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#products"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <Leaf className="w-7 h-7" />
              {t('products') || 'Explore Products'}
            </a>
            <a
              href="#contact"
              className="bg-transparent border-4 border-white hover:bg-white hover:text-green-900 text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105"
            >
              {t('contact') || 'Get in Touch'}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-green-50 text-sm md:text-base font-semibold">
            <span className="flex items-center gap-2"><Leaf className="w-6 h-6 text-yellow-400" /> APEDA Registered</span>
            <span className="flex items-center gap-2"><Leaf className="w-6 h-6 text-yellow-400" /> FSSAI Certified</span>
            <span className="flex items-center gap-2"><Leaf className="w-6 h-6 text-yellow-400" /> ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur p-4 rounded-full transition z-20"
        aria-label="Previous"
      >
        <ChevronLeft className="w-10 h-10 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur p-4 rounded-full transition z-20"
        aria-label="Next"
      >
        <ChevronRight className="w-10 h-10 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-yellow-400 w-12 h-3'
                : 'bg-white/70 hover:bg-white w-3 h-3'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;