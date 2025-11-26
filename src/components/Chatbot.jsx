// src/components/AgriChatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { MessageCircle, X, Send, Bot, User, Leaf, Package } from 'lucide-react';

const Chatbot = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: language === 'hi' ? "नमस्ते! LPI Agri में आपका स्वागत है\nमैं आपका निर्यात सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?" :
            language === 'ar' ? "مرحباً! مرحباً بكم في LPI Agri\nأنا مساعد التصدير الخاص بك. كيف يمكنني مساعدتك اليوم؟" :
            language === 'ru' ? "Здравствуйте! Добро пожаловать в LPI Agri\nЯ ваш помощник по экспорту. Чем могу помочь?" :
            language === 'zh' ? "您好！欢迎来到 LPI Agri\n我是您的出口助手。今天如何为您服务？" :
            "Namaste! Welcome to LPI Agri\nI'm your export assistant. How can I help you today?",
      options: [
        { text: t('rice') || "Rice", action: "rice" },
        { text: t('spices') || "Spices", action: "spices" },
        { text: t('pulsesGrains') || "Pulses & Grains", action: "pulses" },
        { text: t('oilSeedsOthers') || "Oil Seeds & Others", action: "oilseeds" },
        { text: "Request Quote", action: "quote" },
        { text: "Chat on WhatsApp (Instant)", action: "whatsapp" }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleOptionClick = (action) => {
    let response = {};

    switch (action) {
      case "rice":
        response = {
          type: 'bot',
          text: `${t('rice') || "Rice"} Collection:\n• 1121 Basmati Rice (Steam / Sella / Raw)\n• Pusa Basmati 1509 / 1401\n• IR64 Non-Basmati (Parboiled / White)\n• Sona Masoori & Ponni Rice\n\nAll varieties available in 1kg to 50kg packing`,
          options: [
            { text: "Get Latest Rice Prices", action: "quote" },
            { text: "Download Rice Catalog (PDF)", action: "catalog_rice" }
          ]
        };
        break;

      case "spices":
        response = {
          type: 'bot',
          text: `${t('spices') || "Spices"} – Pure & Premium:\n• Cumin Seeds (Singapore/Europe Quality)\n• Red Chilli Whole & Powder\n• Turmeric Fingers & Powder\n• Coriander Seeds & Powder\n• Black Pepper, Cardamom, Cloves\n\nLab tested • ETO treated on request`,
          options: [
            { text: "Request Spice Sample", action: "sample" },
            { text: "View Full Spice List", action: "catalog_spices" }
          ]
        };
        break;

      case "pulses":
        response = {
          type: 'bot',
          text: `${t('pulsesGrains') || "Pulses & Grains"}:\n• Chana Dal (Split Chickpeas)\n• Toor Dal (Pigeon Pea)\n• Moong Dal (Green Gram)\n• Wheat, Maize, Millets (Bajra, Jowar)\n\nDirect from farmer → Machine cleaned & sorted`,
          options: [{ text: "See Complete List", action: "full_pulses" }]
        };
        break;

      case "oilseeds":
        response = {
          type: 'bot',
          text: `${t('oilSeedsOthers') || "Oil Seeds & Others"}:\n• Sesame Seeds (Natural & Hulled)\n• Groundnut (Peanuts) – Bold & Java\n• Castor Seeds & Oil\n• Fresh Onions & Dehydrated Products\n\nHigh oil content • Export quality`,
          options: [{ text: "Request Pricing", action: "quote" }]
        };
        break;

      case "quote":
        response = {
          type: 'bot',
          text: "Excellent choice!\n\nTo give you the best price, please share:\n• Product name\n• Quantity (in MT)\n• Destination country/port\n• Packing type\n\nWe'll reply in under 2 hours!",
          options: [
            { text: "Chat on WhatsApp Now (Fastest)", action: "whatsapp" },
            { text: "Send Email Quote", action: "email" }
          ]
        };
        break;

      case "whatsapp":
        window.open("https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I'm%20interested%20in%20your%20products.", "_blank");
        response = { type: 'bot', text: "Opening WhatsApp... Our export team is online 24/7!" };
        break;

      case "email":
        window.location.href = "mailto:info@lpiagri.com?subject=Export%20Inquiry%20-%20Website%20Chatbot";
        response = { type: 'bot', text: "Opening your email... We'll respond within 1 hour!" };
        break;

      case "catalog_rice":
      case "catalog_spices":
        response = { type: 'bot', text: "Catalog coming soon! Meanwhile, let me send you the latest price list on WhatsApp" };
        setTimeout(() => handleOptionClick("whatsapp"), 1500);
        break;

      default:
        response = {
          type: 'bot',
          text: "I can help you with:\n• All Rice & Basmati varieties\n• Premium Indian Spices\n• Pulses, Grains & Oil Seeds\n• Custom packing & branding\n• Door-to-door delivery worldwide\n\nJust type your requirement!",
          options: messages[0].options
        };
    }

    setMessages(prev => [...prev, response]);
  };

  const handleUserMessage = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("rice") || lower.includes("basmati") || lower.includes("chawal")) handleOptionClick("rice");
    else if (lower.includes("spice") || lower.includes("masala") || lower.includes("jeera") || lower.includes("haldi")) handleOptionClick("spices");
    else if (lower.includes("dal") || lower.includes("pulse") || lower.includes("grain") || lower.includes("wheat")) handleOptionClick("pulses");
    else if (lower.includes("sesame") || lower.includes("peanut") || lower.includes("onion") || lower.includes("oil")) handleOptionClick("oilseeds");
    else if (lower.includes("price") || lower.includes("rate") || lower.includes("quote") || lower.includes("cost")) handleOptionClick("quote");
    else {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "Great question! I can help you with any product from our catalog.\nJust choose a category below or type your need.",
        options: messages[0].options
      }]);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    setTimeout(() => handleUserMessage(input), 800);
    setInput('');
  };

  return (
    <>
      {/* Floating Button - Bottom Left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-5 rounded-full shadow-2xl transition-all transform hover:scale-110 hover:shadow-green-500/50"
      >
        {isOpen ? <X className="w-9 h-9" /> : <MessageCircle className="w-9 h-9" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 h-[600px] bg-white rounded-3xl shadow-2xl border-4 border-green-200 overflow-hidden z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-6 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Package className="w-9 h-9 text-green-900" />
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">LPI Agri Export Bot</h3>
                <p className="text-sm opacity-90">Online • Replies in seconds</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl shadow-md ${
                  msg.type === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-white border border-green-100 text-gray-800'
                }`}>
                  <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                  {msg.options && (
                    <div className="mt-4 grid grid-cols-1 gap-2">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt.action)}
                          className="text-left px-4 py-3 bg-green-50 hover:bg-green-100 text-green-800 rounded-xl text-sm font-medium transition-all border border-green-200"
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t-4 border-green-200">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={t('typeMessage') || "Type your message..."}
                className="flex-1 px-5 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-green-500 text-gray-800"
              />
              <button
                onClick={sendMessage}
                className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full transition transform hover:scale-110"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">
              Powered by LPI Agri • Serving 20+ Countries
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;