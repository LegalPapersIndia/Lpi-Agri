// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AgriChatbot from './components/Chatbot'; 

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">
        <Home />
      </main>
      
      <Footer />

      {/* Chatbot Fixed at Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <AgriChatbot />
      </div>
    </div>
  );
};

export default App;