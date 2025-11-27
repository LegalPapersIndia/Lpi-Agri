// src/pages/Home.jsx
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';

const Home = () => {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Full-screen Hero */}
      <section id="hero" className="relative">
        <Hero />
      </section>

      {/* Featured Products */}
      <section id="products" className="relative bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Products />
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Mission />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <WhyUs />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Testimonials />
        </div>
      </section>
    </main>
  );
};

export default Home;