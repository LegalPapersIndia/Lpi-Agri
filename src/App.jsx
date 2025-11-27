// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'; // ← lightweight & perfect
// OR you can use window.scrollTo if you don't want an extra dependency

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Export from './pages/Export';
import Import from './pages/Import';
import Contact from './pages/Contact';
import AgriChatbot from './components/Chatbot';
import ProductDetail from './pages/ProductDetail';

const AppContent = () => {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    // Option 1: Instant (recommended for luxury feel)
    window.scrollTo(0, 0);

    // Option 2: Smooth scroll (uncomment if you prefer smooth)
    // scroll.scrollToTop({
    //   duration: 600,
    //   smooth: "easeInOutQuart",
    // });
  }, [location.pathname]); // ← triggers on every route change

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/export" element={<Export />} />
          <Route path="/import" element={<Import />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:categoryId/:productId" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Golden WhatsApp + Chatbot */}
      <div className="fixed bottom-6 left-6 z-50">
        <AgriChatbot />
      </div>
    </div>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;