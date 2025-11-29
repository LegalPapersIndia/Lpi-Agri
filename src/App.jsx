// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AgriChatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Export from './pages/Export';
import Import from './pages/Import';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

const AppContent = () => {
  const location = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/export" element={<Export />} />
          <Route path="/import" element={<Import />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:categoryId/:productId" element={<ProductDetail />} />

          {/* 404 Page - Professional */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-9xl font-black text-green-700">404</h1>
                <p className="text-4xl font-bold text-gray-800 mt-6">Page Not Found</p>
                <p className="text-xl text-gray-600 mt-4">The page you're looking for doesn't exist.</p>
                <a 
                  href="/" 
                  className="mt-10 inline-flex items-center gap-4 bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-xl text-xl font-bold uppercase tracking-wider transition-all shadow-xl"
                >
                  Back to Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <AgriChatbot />
      </div>
    </div>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;