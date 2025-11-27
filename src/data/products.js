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
        images: ["https://www.mahavirricemill.com/uploads/product/1121%20Golden%20Sella%20Basmati%20Rice-min_16963308342614.jpg"],
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
        images: ["https://5.imimg.com/data5/SELLER/Default/2024/9/448963920/GL/RD/MQ/146526101/1509-basmati-rice-500x500.jpg"],
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
        images: ["https://www.srisritattva.com/cdn/shop/articles/top-view-raw-rice-inside-plate-dark-desk.jpg?v=1707287123"],
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
        images: ["https://5.imimg.com/data5/SELLER/Default/2022/8/RV/RS/BV/144603420/cumin-seeds-26-500x500.jpg"],
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
        images: ["https://tiimg.tistatic.com/fp/1/008/130/bitter-high-curcumin-yellow-dried-raw-turmeric-fingers-kacchi-haldi--899.jpg"],
        certifications: ["Spices Board", "FSSAI", "USDA Organic Available"],
        category: "spices"
      },
      {
        id: "red-chilli",
        name: "Red Chilli Whole & Powder",
        description: "High pungency, bright red color.",
        pricePerTon: 2200,
        moq: "1000 KG",
        images: ["https://dhanipurespices.com/wp-content/uploads/2022/10/Red-Chilli-Powder-and-Whole.jpeg"],
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
        images: ["https://gonefarmers.com/cdn/shop/products/image_6ea94ae8-8b1a-457e-a116-9ac4a175eaec_2048x.jpg?v=1602329770"],
        certifications: ["APEDA", "FSSAI"],
        category: "pulses"
      },
      {
        id: "toor-dal",
        name: "Toor Dal (Pigeon Pea)",
        description: "Myanmar & African origin, premium quality.",
        pricePerTon: 1150,
        moq: "1000 KG",
        images: ["https://www.healthyorganic.in/cdn/shop/products/organic-toor-dal-500x500_837491a8-755b-4548-b082-42c110c406aa_grande.jpg?v=1552055341"],
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
        images: ["https://m.media-amazon.com/images/I/61l2fI4cEzL._AC_UF1000,1000_QL80_.jpg"],
        certifications: ["APEDA", "FSSAI", "USDA Organic"],
        category: "oilseeds"
      },
      {
        id: "peanut",
        name: "Groundnut Kernels (Bold & Java)",
        description: "40/50, 50/60 count, aflatoxin tested.",
        pricePerTon: 1350,
        moq: "1000 KG",
        images: ["https://tiimg.tistatic.com/fp/1/008/550/tj-indian-peanut-groundnut-kernels-480.jpg"],
        certifications: ["APEDA", "Aflatoxin Free"],
        category: "oilseeds"
      }
    ]
  }
];