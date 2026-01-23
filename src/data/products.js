

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
        packing: "1kg–50kg • PP/Jute/Non-Woven • Private Label",
        images: ["https://www.mahavirricemill.com/uploads/product/1121%20Golden%20Sella%20Basmati%20Rice-min_16963308342614.jpg"],
        certifications: ["APEDA", "FSSAI", "ISO 22000", "Halal"],
        origin: "Punjab & Haryana, India",
        category: "rice"
      },
      {
        id: "sugandha",
        name: "Sugandha Basmati Rice",
        subtitle: "Soft Texture • Export Favorite",
        description: "Affordable basmati rice with pleasant aroma and excellent elongation after cooking.",
        varieties: ["Steam", "Sella", "Raw"],
        avgLength: "7.8+ mm",
        pricePerTon: 1050,
        moq: "1,000 KG",
        packing: "10kg–50kg PP bags",
        images: ["https://images.jdmagicbox.com/quickquotes/images_main/mahi-sugandha-sella-basmati-rices-377584811-jpen0.jpg"],
        certifications: ["APEDA", "FSSAI", "Halal"],
        origin: "Uttar Pradesh, India",
        category: "rice"
      },
      {
        id: "pusa-basmati",
        name: "Pusa Basmati 1509",
        subtitle: "High Yield • Fast Cooking",
        description: "Shorter grain basmati with excellent taste and fast cooking properties.",
        varieties: ["Steam", "Sella"],
        avgLength: "7.5–7.9 mm",
        pricePerTon: 1150,
        moq: "1,000 KG",
        images: ["https://5.imimg.com/data5/SELLER/Default/2024/9/448963920/GL/RD/MQ/146526101/1509-basmati-rice-500x500.jpg"],
        certifications: ["APEDA", "FSSAI"],
        origin: "North India",
        category: "rice"
      },
      {
        id: "ir64",
        name: "IR64 Parboiled Rice",
        subtitle: "Cost Effective • Bulk Supply",
        description: "Widely consumed non-basmati rice ideal for Africa and Southeast Asia.",
        varieties: ["Parboiled", "White"],
        pricePerTon: 420,
        moq: "1,000 KG",
        images: ["https://www.srisritattva.com/cdn/shop/articles/top-view-raw-rice-inside-plate-dark-desk.jpg"],
        certifications: ["APEDA", "FSSAI"],
        origin: "Andhra Pradesh, India",
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
        subtitle: "99.5% Purity • Export Grade",
        description: "Bold cumin seeds with high volatile oil content.",
        pricePerTon: 2850,
        moq: "1,000 KG",
        images: ["https://5.imimg.com/data5/SELLER/Default/2022/8/RV/RS/BV/144603420/cumin-seeds-26-500x500.jpg"],
        certifications: ["Spices Board", "FSSAI", "EU Compliant"],
        origin: "Gujarat",
        category: "spices"
      },
      {
        id: "turmeric",
        name: "Turmeric Fingers",
        subtitle: "High Curcumin • Bright Color",
        description: "Salem and Erode turmeric with 4–6% curcumin content.",
        pricePerTon: 1450,
        moq: "1,000 KG",
        images: ["https://tiimg.tistatic.com/fp/1/008/130/bitter-high-curcumin-yellow-dried-raw-turmeric-fingers-kacchi-haldi--899.jpg"],
        certifications: ["Spices Board", "FSSAI"],
        origin: "Tamil Nadu",
        category: "spices"
      },
      {
        id: "red-chilli",
        name: "Red Chilli",
        subtitle: "High Pungency • Guntur Quality",
        description: "Whole and powder chilli with rich red color.",
        pricePerTon: 2200,
        moq: "1,000 KG",
        images: ["https://dhanipurespices.com/wp-content/uploads/2022/10/Red-Chilli-Powder-and-Whole.jpeg"],
        certifications: ["Spices Board", "FSSAI"],
        origin: "Andhra Pradesh",
        category: "spices"
      },
      {
        id: "coriander",
        name: "Coriander Seeds",
        subtitle: "Aromatic • Eagle Quality",
        description: "Fresh coriander seeds used in masala and spice blends.",
        pricePerTon: 950,
        moq: "1,000 KG",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXzJTxpEs-QpUmQS9VVqYMAO5t6z7wsjTvA&s"],
        certifications: ["Spices Board", "FSSAI"],
        origin: "Rajasthan",
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
        name: "Chana Dal",
        subtitle: "Bold • Premium Quality",
        description: "Machine cleaned split chickpeas.",
        pricePerTon: 980,
        moq: "1,000 KG",
        images: ["https://gonefarmers.com/cdn/shop/products/image_6ea94ae8-8b1a-457e-a116-9ac4a175eaec_2048x.jpg"],
        certifications: ["APEDA", "FSSAI"],
        origin: "Madhya Pradesh",
        category: "pulses"
      },
      {
        id: "toor-dal",
        name: "Toor Dal",
        subtitle: "Clean & Polished",
        description: "High quality pigeon pea dal.",
        pricePerTon: 1150,
        moq: "1,000 KG",
        images: ["https://www.healthyorganic.in/cdn/shop/products/organic-toor-dal-500x500_837491a8-755b-4548-b082-42c110c406aa_grande.jpg"],
        certifications: ["APEDA", "FSSAI"],
        origin: "Myanmar",
        category: "pulses"
      },
      {
        id: "urad-dal",
        name: "Urad Dal",
        subtitle: "Black & White",
        description: "Used for idli, dosa, and papad production.",
        pricePerTon: 1100,
        moq: "1,000 KG",
        images: ["https://c.ndtvimg.com/2023-09/a9ubmmd8_urad-dal_625x300_06_September_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"],
        certifications: ["APEDA", "FSSAI"],
        origin: "India",
        category: "pulses"
      },
      {
        id: "moong-dal",
        name: "Moong Dal",
        subtitle: "Natural Green",
        description: "High protein split green gram.",
        pricePerTon: 1250,
        moq: "1,000 KG",
        images: ["https://5.imimg.com/data5/SELLER/Default/2022/2/IG/KT/ET/143056589/green-moong-dal.jpg"],
        certifications: ["APEDA", "FSSAI"],
        origin: "Rajasthan",
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
        subtitle: "99.98% Purity",
        description: "Natural white and hulled sesame seeds.",
        pricePerTon: 1950,
        moq: "1,000 KG",
        images: ["https://m.media-amazon.com/images/I/61l2fI4cEzL._AC_UF1000,1000_QL80_.jpg"],
        certifications: ["APEDA", "FSSAI"],
        origin: "Gujarat",
        category: "oilseeds"
      },
      {
        id: "peanut",
        name: "Groundnut Kernels",
        subtitle: "Bold & Java",
        description: "Aflatoxin tested export peanuts.",
        pricePerTon: 1350,
        moq: "1,000 KG",
        images: ["https://tiimg.tistatic.com/fp/1/008/550/tj-indian-peanut-groundnut-kernels-480.jpg"],
        certifications: ["APEDA", "FSSAI"],
        origin: "Gujarat",
        category: "oilseeds"
      },
      {
        id: "soybean",
        name: "Soybean",
        subtitle: "High Protein",
        description: "Non-GMO soybeans for food and feed industry.",
        pricePerTon: 620,
        moq: "1,000 KG",
        images: ["https://5.imimg.com/data5/ZR/AN/TA/SELLER-19153449/soybean-seeds.jpg"],
        certifications: ["APEDA", "FSSAI"],
        origin: "Madhya Pradesh",
        category: "oilseeds"
      },
      {
        id: "mustard",
        name: "Mustard Seeds",
        subtitle: "Bold Size",
        description: "Used in oil extraction and spices.",
        pricePerTon: 780,
        moq: "1,000 KG",
        images: ["https://sapanpapadwala.co.in/wp-content/uploads/2024/05/mustard-seeds2-500x500-1.webp"],
        certifications: ["APEDA", "FSSAI"],
        origin: "Rajasthan",
        category: "oilseeds"
      }
    ]
  }
];
