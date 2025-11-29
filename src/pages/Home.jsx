// src/pages/Home.jsx
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Mission from '../components/Mission';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section id="products" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Products />
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Mission />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <WhyUs />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Home;