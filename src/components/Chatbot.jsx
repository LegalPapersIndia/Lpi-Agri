// src/components/AgriChatbot.jsx - Professional Corporate Version
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../config/LanguageContext.jsx';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

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
            "Hello! Welcome to LPI Agri\nI'm your dedicated export assistant. How can I assist you today?",
      options: [
        { text: t('rice') || "Rice & Basmati", action: "rice" },
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
          text: "Rice Collection:\n• 1121 Basmati (Steam, Sella, Raw)\n• 1509, 1401, 1121 Golden Sella\n• IR64 Parboiled & White Rice\n• Sona Masoori, Ponni Rice\n\nAvailable in 1–50kg packing • Private labeling available",
          options: [
            { text: "Get Current Prices", action: "quote" },
            { text: "Request Rice Catalog", action: "whatsapp" }
          ]
        };
        break;

      case "spices":
        response = {
          type: 'bot',
          text: "Premium Indian Spices:\n• Cumin Seeds (Singapore/Europe Quality)\n• Red Chilli (Whole & Powder)\n• Turmeric Fingers & Powder\n• Coriander, Black Pepper, Cardamom\n\nLab tested • ETO/Fumigation available",
          options: [
            { text: "Request Sample", action: "whatsapp" },
            { text: "View Full Spice Range", action: "whatsapp" }
          ]
        };
        break;

      case "pulses":
        response = {
          type: 'bot',
          text: "Pulses & Grains:\n• Chana Dal • Toor Dal • Moong Dal\n• Urad Dal • Masoor Dal\n• Wheat • Maize • Millets\n\nDirect from farmers • Machine cleaned & sorted",
          options: [{ text: "See Full List & Pricing", action: "quote" }]
        };
        break;

      case "oilseeds":
        response = {
          type: 'bot',
          text: "Oil Seeds & More:\n• Natural & Hulled Sesame Seeds\n• Groundnuts (Bold & Java)\n• Castor Seeds • Fresh Onions\n\nHigh oil content • Export-ready quality",
          options: [{ text: "Request Current Rates", action: "quote" }]
        };
        break;

      case "quote":
        response = {
          type: 'bot',
          text: "Perfect! To give you the best quote, please share:\n• Product name\n• Quantity (MT)\n• Destination port\n• Packing preference\n\nWe reply within 1–2 hours (often faster on WhatsApp)",
          options: [
            { text: "Chat on WhatsApp (Fastest)", action: "whatsapp" },
            { text: "Send Email Inquiry", action: "email" }
          ]
        };
        break;

      case "whatsapp":
        window.open("https://wa.me/917505266931?text=Hello%20LPI%20Agri!%20I'm%20interested%20in%20your%20export%20products", "_blank");
        response = { type: 'bot', text: "Opening WhatsApp... Our team is online 24/7 and ready to assist!" };
        break;

      case "email":
        window.location.href = "mailto:info@lpiagri.com?subject=Export%20Inquiry%20from%20Website";
        response = { type: 'bot', text: "Opening your email client... We'll respond within 1 hour." };
        break;

      default:
        response = {
          type: 'bot',
          text: "I can help you with:\n• Premium Basmati & Non-Basmati Rice\n• Indian Spices, Pulses & Grains\n• Oil Seeds & Private Labeling\n• Global door-to-door logistics\n\nPlease select an option below or type your requirement.",
          options: messages[0].options
        };
    }

    setMessages(prev => [...prev, response]);
  };

  const handleUserMessage = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("rice") || lower.includes("basmati")) handleOptionClick("rice");
    else if (lower.includes("spice") || lower.includes("masala") || lower.includes("cumin")) handleOptionClick("spices");
    else if (lower.includes("dal") || lower.includes("pulse") || lower.includes("wheat")) handleOptionClick("pulses");
    else if (lower.includes("sesame") || lower.includes("peanut") || lower.includes("onion")) handleOptionClick("oilseeds");
    else if (lower.includes("price") || lower.includes("quote") || lower.includes("rate")) handleOptionClick("quote");
    else {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "Thank you! Please choose a category below or tell me exactly what you're looking for.",
        options: messages[0].options
      }]);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    setTimeout(() => handleUserMessage(input), 600);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-green-700 hover:bg-green-800 text-white p-5 rounded-full shadow-xl transition-all hover:scale-110 hover:shadow-green-700/30"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 h-[620px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 flex flex-col">
          {/* Header */}
          <div className="bg-green-700 text-white p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-7 h-7 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">LPI Agri Export Assistant</h3>
                <p className="text-sm text-green-100">Typically replies in seconds</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 bg-gray-50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl ${
                  msg.type === 'user'
                    ? 'bg-green-700 text-white'
                    : 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                  {msg.options && (
                    <div className="mt-4 space-y-2">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt.action)}
                          className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-green-50 text-green-800 rounded-xl text-sm font-medium transition-colors border border-gray-200"
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
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={t('typeMessage') || "Ask about products, prices, or shipping..."}
                className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-600 text-gray-800"
              />
              <button
                onClick={sendMessage}
                className="bg-green-700 hover:bg-green-800 text-white p-3.5 rounded-full transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">
              Serving importers in 25+ countries • 24/7 support
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;