// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

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
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/export" element={<Export />} />
          <Route path="/import" element={<Import />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:categoryId/:productId" element={<ProductDetail />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
                <div className="text-center max-w-md">
                  <h1 className="text-8xl sm:text-9xl font-black text-green-700">404</h1>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-6">
                    Page Not Found
                  </h2>
                  <p className="text-lg text-gray-600 mt-4 mb-10">
                    The page you are looking for doesn't exist or has been moved.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 sm:px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp-style button */}
      <div className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50">
        <AgriChatbot />
      </div>
    </div>
  );
};

const App = () => <AppContent />;

export default App;