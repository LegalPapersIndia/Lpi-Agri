// src/data/products.js
export const productCategories = [
  {
    id: "rice",
    name: "Rice",
    products: [
      {
        id: "1121-basmati",
        name: "1121 Basmati Rice (Steam / Sella / Raw)",
        description: "World's longest grain basmati rice with rich aroma.",
        varieties: ["Steam", "Golden Sella", "White Sella", "Raw"],
        length: "8.30+ mm",
        pricePerTon: 1350,
        moq: "1000 KG (1 Ton)",
        images: ["https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["APEDA", "FSSAI", "ISO 22000", "Halal", "USDA Organic", "EU Organic"],
        category: "rice"
      },
      {
        id: "pusa-basmati",
        name: "Pusa Basmati 1509 / 1401",
        description: "High-yield premium basmati rice.",
        varieties: ["Steam", "Sella", "Raw"],
        length: "7.8+ mm",
        pricePerTon: 1150,
        moq: "1000 KG",
        images: ["https://images.pexels.com/photos/4113458/pexels-photo-4113458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["APEDA", "FSSAI", "Halal"],
        category: "rice"
      },
      {
        id: "ir64",
        name: "IR64 / Sona Masoori / Ponni Rice",
        description: "Premium non-basmati rice for daily consumption.",
        varieties: ["Parboiled", "White", "Steam"],
        pricePerTon: 420,
        moq: "1000 KG",
        images: ["APEDA", "FSSAI"],
        images: ["https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        category: "rice"
      }
    ]
  },
  {
    id: "spices",
    name: "Spices",
    products: [
      {
        id: "cumin",
        name: "Cumin Seeds – Singapore & Europe Quality",
        description: "99.5% purity, bold size, high volatile oil.",
        purity: "99.5% min",
        pricePerTon: 2850,
        moq: "1000 KG",
        images: ["https://images.pexels.com/photos/4199093/pexels-photo-4199093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["Spices Board India", "FSSAI", "EU Compliant", "ASTA Clean", "Halal"],
        category: "spices"
      },
      {
        id: "turmeric",
        name: "Turmeric Finger & Powder (4%+ Curcumin)",
        description: "Bright yellow, ETO treated, export quality.",
        curcumin: "4%+",
        pricePerTon: 1450,
        moq: "1000 KG",
        images: ["https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["Spices Board", "FSSAI", "USDA Organic Available"],
        category: "spices"
      },
      {
        id: "red-chilli",
        name: "Red Chilli Whole & Powder",
        description: "High pungency, bright red color.",
        pricePerTon: 2200,
        moq: "1000 KG",
        images: ["https://images.pexels.com/photos/4198762/pexels-photo-4198762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["Spices Board", "FSSAI"],
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
        description: "Bold size, machine cleaned, Australian & MP origin.",
        pricePerTon: 980,
        moq: "1000 KG",
        images: ["https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["APEDA", "FSSAI"],
        category: "pulses"
      },
      {
        id: "toor-dal",
        name: "Toor Dal (Pigeon Pea)",
        description: "Myanmar & African origin, premium quality.",
        pricePerTon: 1150,
        moq: "1000 KG",
        images: ["https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["APEDA", "FSSAI"],
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
        name: "Sesame Seeds (Natural & Hulled)",
        description: "99.98% purity, export quality.",
        pricePerTon: 1950,
        moq: "1000 KG",
        images: ["https://images.pexels.com/photos/4199095/pexels-photo-4199095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["APEDA", "FSSAI", "USDA Organic"],
        category: "oilseeds"
      },
      {
        id: "peanut",
        name: "Groundnut Kernels (Bold & Java)",
        description: "40/50, 50/60 count, aflatoxin tested.",
        pricePerTon: 1350,
        moq: "1000 KG",
        images: ["https://images.pexels.com/photos/4199091/pexels-photo-4199091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        certifications: ["APEDA", "Aflatoxin Free"],
        category: "oilseeds"
      }
    ]
  }
];