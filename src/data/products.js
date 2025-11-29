// src/data/products.js
// Premium Indian Agricultural Exports - LPI Agri
// Data structure optimized for Products Page, Product Detail Page & Chatbot

export const productCategories = [
  {
    id: "rice",
    name: "Rice & Basmati",
    products: [
      {
        id: "1121-basmati",
        name: "1121 Basmati Rice",
        subtitle: "World's Longest Grain • Premium Aroma",
        description: "The finest 1121 Basmati rice with exceptional grain length and rich aroma. Available in Steam, Golden Sella, White Sella, and Raw varieties.",
        varieties: ["Steam", "Golden Sella", "White Sella", "Raw/Creamy Sella"],
        avgLength: "8.30+ mm",
        moisture: "13% max",
        broken: "2% max",
        pricePerTon: 1350,
        moq: "1,000 KG (1 MT)",
        packing: "1kg, 5kg, 10kg, 20kg, 25kg, 40kg, 50kg • PP/Jute/Non-Woven • Private Label Available",
        images: [
          "https://www.mahavirricemill.com/uploads/product/1121%20Golden%20Sella%20Basmati%20Rice-min_16963308342614.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0xplDP6ibPPBnP9moeWf6k1N7dQBAIqHqw&s"
        ],
        certifications: ["APEDA", "FSSAI", "ISO 22000", "Halal", "USDA Organic", "EU Organic"],
        origin: "Punjab & Haryana, India",
        category: "rice"
      },
      {
        id: "pusa-basmati",
        name: "Pusa Basmati 1509 / 1401 / 1121",
        subtitle: "High-Yield Premium Basmati",
        description: "Excellent cooking results with long, slender grains. Popular across Middle East, Europe, and Africa.",
        varieties: ["Steam", "Sella", "Raw"],
        avgLength: "7.8–8.2 mm",
        pricePerTon: 1150,
        moq: "1,000 KG",
        packing: "Custom packing & branding available",
        images: [
          "https://5.imimg.com/data5/SELLER/Default/2024/9/448963920/GL/RD/MQ/146526101/1509-basmati-rice-500x500.jpg"
        ],
        certifications: ["APEDA", "FSSAI", "Halal", "EU Compliant"],
        origin: "North India",
        category: "rice"
      },
      {
        id: "non-basmati",
        name: "IR64, Sona Masoori & Ponni Rice",
        subtitle: "Premium Non-Basmati • Daily Consumption",
        description: "High-quality non-basmati rice trusted in Africa, Middle East, and Southeast Asia. Available in parboiled and white varieties.",
        varieties: ["IR64 Parboiled", "IR64 White", "Sona Masoori", "Ponni"],
        pricePerTon: 420,
        moq: "1,000 KG",
        packing: "25kg, 50kg PP bags • Private labeling",
        images: [
          "https://www.srisritattva.com/cdn/shop/articles/top-view-raw-rice-inside-plate-dark-desk.jpg?v=1707287123",
          "https://5.imimg.com/data5/KM/BJ/MY-13701092/sona-masoori-rice.jpg"
        ],
        certifications: ["APEDA", "FSSAI"],
        origin: "Andhra Pradesh, Tamil Nadu, Karnataka",
        category: "rice"
      }
    ]
  },

  {
    id: "spices",
    name: "Indian Spices",
    products: [
      {
        id: "cumin",
        name: "Cumin Seeds",
        subtitle: "Singapore & Europe Quality • 99.5% Purity",
        description: "Premium bold cumin seeds with high volatile oil content. Singapore 99.5% and Europe 99% quality available.",
        purity: "99.5% min (Singapore) • 99% (Europe)",
        moisture: "7% max",
        pricePerTon: 2850,
        moq: "1,000 KG",
        packing: "25kg, 50kg PP bags",
        images: [
          "https://5.imimg.com/data5/SELLER/Default/2022/8/RV/RS/BV/144603420/cumin-seeds-26-500x500.jpg"
        ],
        certifications: ["Spices Board India", "FSSAI", "EU Compliant", "ASTA Clean", "Halal"],
        origin: "Gujarat & Rajasthan",
        category: "spices"
      },
      {
        id: "turmeric",
        name: "Turmeric Finger & Powder",
        subtitle: "4%+ Curcumin • Bright Yellow",
        description: "High curcumin turmeric from Salem and Erode. ETO treated and lab tested for export compliance.",
        curcumin: "4%–6%",
        moisture: "10% max",
        pricePerTon: 1450,
        moq: "1,000 KG",
        images: [
          "https://tiimg.tistatic.com/fp/1/008/130/bitter-high-curcumin-yellow-dried-raw-turmeric-fingers-kacchi-haldi--899.jpg"
        ],
        certifications: ["Spices Board", "FSSAI", "USDA Organic Available", "ETO Treated"],
        origin: "Tamil Nadu, India",
        category: "spices"
      },
      {
        id: "red-chilli",
        name: "Red Chilli Whole & Powder",
        subtitle: "High Pungency • Deep Red Color",
        description: "Guntur & Byadgi chilli varieties. Heat level: 20,000–100,000 SHU.",
        pricePerTon: 2200,
        moq: "1,000 KG",
        images: [
          "https://dhanipurespices.com/wp-content/uploads/2022/10/Red-Chilli-Powder-and-Whole.jpeg"
        ],
        certifications: ["Spices Board", "FSSAI", "Sudan Dye Free"],
        origin: "Andhra Pradesh & Karnataka",
        category: "spices"
      }
    ]
  },

  {
    id: "pulses",
    name: "Pulses & Grains",
    products: [
      {
        id: "chana-dal",
        name: "Chana Dal (Split Chickpeas)",
        subtitle: "Bold Size • Australian & MP Origin",
        description: "Premium machine-cleaned chana dal with uniform size and rich taste.",
        pricePerTon: 980,
        moq: "1,000 KG",
        packing: "25kg, 50kg bags",
        images: [
          "https://gonefarmers.com/cdn/shop/products/image_6ea94ae8-8b1a-457e-a116-9ac4a175eaec_2048x.jpg?v=1602329770"
        ],
        certifications: ["APEDA", "FSSAI"],
        origin: "Madhya Pradesh & Australia",
        category: "pulses"
      },
      {
        id: "toor-dal",
        name: "Toor Dal (Arhar / Pigeon Pea)",
        subtitle: "Myanmar & African Origin",
        description: "Clean, polished toor dal with excellent cooking quality.",
        pricePerTon: 1150,
        moq: "1,000 KG",
        images: [
          "https://www.healthyorganic.in/cdn/shop/products/organic-toor-dal-500x500_837491a8-755b-4548-b082-42c110c406aa_grande.jpg?v=1552055341"
        ],
        certifications: ["APEDA", "FSSAI"],
        origin: "Myanmar, Tanzania, Mozambique",
        category: "pulses"
      }
    ]
  },

  {
    id: "oilseeds",
    name: "Oil Seeds & Others",
    products: [
      {
        id: "sesame",
        name: "Sesame Seeds",
        subtitle: "Natural White & Hulled • 99.98% Purity",
        description: "Export-quality sesame with high oil content. Used in tahini, bakery, and oil extraction.",
        purity: "99.98% min",
        pricePerTon: 1950,
        moq: "1,000 KG",
        images: [
          "https://m.media-amazon.com/images/I/61l2fI4cEzL._AC_UF1000,1000_QL80_.jpg"
        ],
        certifications: ["APEDA", "FSSAI", "USDA Organic", "EU Organic"],
        origin: "Gujarat, India",
        category: "oilseeds"
      },
      {
        id: "peanut",
        name: "Groundnut Kernels",
        subtitle: "Bold & Java • Aflatoxin Tested",
        description: "Premium peanuts in 40/50, 50/60, 60/70 counts. Bold and Java types available.",
        counts: "40/50 • 50/60 • 60/70",
        pricePerTon: 1350,
        moq: "1,000 KG",
        images: [
          "https://tiimg.tistatic.com/fp/1/008/550/tj-indian-peanut-groundnut-kernels-480.jpg"
        ],
        certifications: ["APEDA", "Aflatoxin Free Certificate", "FSSAI"],
        origin: "Gujarat & Andhra Pradesh",
        category: "oilseeds"
      }
    ]
  }
];