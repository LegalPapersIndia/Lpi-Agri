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

  // Instant scroll to top on every route change (luxury feel)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-green-50">
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
          
          {/* Optional: 404 Page */}
          <Route path="*" element={
            <div className="h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-9xl font-black text-amber-400">404</h1>
                <p className="text-3xl font-bold text-green-800 mt-6">Page Not Found</p>
                <a href="/" className="mt-8 inline-block px-12 py-6 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-full text-xl font-bold hover:scale-105 transition">
                  Back to Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>

      {/* Footer */}
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