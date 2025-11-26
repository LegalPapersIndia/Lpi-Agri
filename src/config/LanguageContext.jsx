// src/config/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    // Navigation & General
    home: "Home",
    about: "About",
    export: "Export",
    import: "Import",
    products: "Products",
    contact: "Contact",
    selectLanguage: "Select Language",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    chatOnWhatsApp: "Chat on WhatsApp",
    phone: "Phone",
    email: "Email",
    address: "Address",
    copyright: "© {year} LPI Agri. All Rights Reserved.",
    madeInIndia: "Proudly Made in India",

    // Hero
    exportingTrust: "Exporting Trust • Importing Quality",
    certified: "APEDA • FSSAI • ISO Certified",

    // Mission & Vision (used in Mission.jsx)
    ourMissionVision: "Our Mission & Vision",
    mission: "Our Mission",
    vision: "Our Vision",
    connectFarmers: "Connect farmers directly to global buyers",
    ensureTraceability: "Ensure 100% traceability from farm to fork",
    promoteSustainable: "Promote sustainable & organic farming",
    deliverPremium: "Deliver premium quality at competitive prices",
    no1Exporter: "No.1 Indian Agri Exporter",
    sustainableChain: "100% Sustainable Supply Chain",
    globalPresence: "Present in 50+ Countries",
    farmersEmpowered: "1 Million+ Farmers Empowered",

    // Products
    ourProducts: "Our Premium Products",
    rice: "Rice",
    spices: "Spices",
    pulsesGrains: "Pulses & Grains",
    oilSeedsOthers: "Oil Seeds & Others",
    exportReady: "Export Ready",
    apedaCertified: "APEDA Certified",
    lookingForSpecific: "Looking for Something Specific?",
    alsoExport: "We also export Sugar, Fresh Fruits, Vegetables, Flour (Maida/Atta), Tea, Coffee, and more.",
    requestQuote: "Request Custom Quote",
    traceability: "100% Traceability",
    fssaiApeda: "FSSAI & APEDA Certified",
    globalGap: "Global GAP Compliant",
    organicAvailable: "Organic Options Available",

    // Testimonials
    trustedByImporters: "Trusted by Importers Worldwide",
    happyClients: "Happy Clients",
    mtExported: "MT Exported",
    countriesServed: "Countries Served",
    onTimeDelivery: "On-Time Delivery",
    onTimeDeliveryValue: "98.7%",
    startImporting: "Start Importing Today",

    // Why Choose Us
    whyChooseUs: "Why Top Importers Choose LPI Agri",
    whyChooseUsDesc: "We don't just sell products — we deliver trust, quality, and long-term partnerships",
    qualityGuarantee: "100% Quality Guarantee",
    qualityDesc: "Every grain is lab-tested. We reject any lot that doesn't meet APEDA, FSSAI & international standards. Zero compromise on quality.",
    labReports: "Lab Reports Provided",

    directFromFarmers: "Direct From Farmers",
    farmerDesc: "We source directly from 50,000+ registered Indian farmers. No middlemen = Better price for you, fair pay for farmers.",
    farmerFirst: "Farmer-First Approach",

    globalDelivery: "Door-to-Door Global Delivery",
    deliveryDesc: "From our warehouse in Mundra/Kandla to your port — FOB, CIF, DDP. We handle everything: stuffing, sealing, documentation.",
    hassleFreeLogistics: "Hassle-Free Logistics",

    allCertifications: "All Certifications Ready",
    certificationDesc: "APEDA • FSSAI • ISO 9001 • Phytosanitary • Fumigation • Halal • COA • Health Certificate — All documents issued within 24 hours.",
    documentationExperts: "Export Documentation Experts",

    onTimeDeliveryText: "On-Time, Every Time",
    onTimeDesc: "98.7% on-time delivery record in 2024-25. We load containers within 7 days of confirmed order. Your trust is our priority.",
    onTimeHighlight: "15,000+ MT Delivered On Time",

    privateLabeling: "Private Labeling & Customization",
    labelingDesc: "Your brand on our products! Custom packing (1kg to 50kg), Arabic/English/Russian labels, barcode, design support.",
    buildYourBrand: "Build Your Own Brand",

    globalReach: "Serving 25+ Countries",
    reachDesc: "Trusted partner in UAE, Saudi Arabia, Russia, Morocco, Kenya, Malaysia, Singapore, Iraq, Egypt, and growing every month.",
    provenTrackRecord: "Proven Global Track Record",

    dedicatedSupport: "24/7 Dedicated Support",
    supportDesc: "Our export team replies on WhatsApp within 5 minutes. Personal account manager for every client.",
    neverAlone: "You're Never Alone",

    exportedStat: "MT Exported",
    countriesStat: "Countries Served",
    clientsStat: "Happy Clients",
    yearsStat: "Years of Excellence",

    readyToImport: "Ready to Import the Best from India?",
    readyToImportDesc: "Join 200+ successful importers who made LPI Agri their trusted partner",
    startImportingNow: "Start Importing Now",
    viewAllProducts: "View All Products",

    // Chatbot
    typeMessage: "Type your message...",
    chatbotGreeting: "Namaste! Welcome to LPI Agri\nI'm your export assistant. How can I help you today?",
  },

  // Russian
  ru: {
    // Navigation & General
    home: "Главная", about: "О нас", export: "Экспорт", import: "Импорт", products: "Продукты", contact: "Контакты",
    selectLanguage: "Выберите язык", quickLinks: "Быстрые ссылки", followUs: "Следите за нами", chatOnWhatsApp: "WhatsApp",
    phone: "Телефон", email: "Эл. почта", address: "Адрес",
    copyright: "© {year} LPI Agri. Все права защищены.", madeInIndia: "С гордостью сделано в Индии",

    // Hero
    exportingTrust: "Экспортируем доверие • Импортируем качество", certified: "APEDA • FSSAI • ISO",

    // Mission & Vision (used in Mission.jsx)
    ourMissionVision: "Наша миссия и видение", mission: "Миссия", vision: "Видение",
    connectFarmers: "Прямое соединение фермеров с покупателями", ensureTraceability: "100% прослеживаемость",
    promoteSustainable: "Устойчивое и органическое земледелие", deliverPremium: "Премиум качество по лучшим ценам",
    no1Exporter: "Экспортер №1 из Индии", sustainableChain: "100% устойчивая цепочка", globalPresence: "50+ стран", farmersEmpowered: "1 млн+ фермеров",

    // Products
    ourProducts: "Наша премиум-продукция", rice: "Рис", spices: "Специи", pulsesGrains: "Бобовые и зерновые", oilSeedsOthers: "Масличные и другое",
    exportReady: "Готов к экспорту", apedaCertified: "Сертификат APEDA", lookingForSpecific: "Ищете что-то особенное?",
    alsoExport: "Также экспортируем сахар, фрукты, овощи, муку, чай, кофе и др.", requestQuote: "Запросить предложение",
    traceability: "100% прослеживаемость", fssaiApeda: "FSSAI и APEDA", globalGap: "Global GAP", organicAvailable: "Органика доступна",

    // Testimonials
    trustedByImporters: "Нам доверяют Импортеры по всему Миру",
    happyClients: "Довольных Клиентов",
    mtExported: "МТ Экспортировано",
    countriesServed: "Обслужено Стран",
    onTimeDelivery: "Своевременная Доставка",
    onTimeDeliveryValue: "98.7%",
    startImporting: "Начать Импорт Сегодня",

    // Why Choose Us
    whyChooseUs: "Почему лучшие импортеры выбирают LPI Agri",
    whyChooseUsDesc: "Мы не просто продаем продукты — мы поставляем доверие, качество и долгосрочные партнерские отношения",
    qualityGuarantee: "100% Гарантия Качества",
    qualityDesc: "Каждое зерно проходит лабораторные испытания. Мы отклоняем партии, не соответствующие APEDA, FSSAI и международным стандартам. Никаких компромиссов по качеству.",
    labReports: "Предоставляются лабораторные отчеты",

    directFromFarmers: "Напрямую от Фермеров",
    farmerDesc: "Мы закупаем напрямую у 50 000+ зарегистрированных индийских фермеров. Без посредников = лучшая цена для вас, справедливая оплата фермерам.",
    farmerFirst: "Подход «Фермер на первом месте»",

    globalDelivery: "Глобальная Доставка «От двери до двери»",
    deliveryDesc: "С нашего склада в Мундре/Кандле до вашего порта — FOB, CIF, DDP. Мы берем на себя все: загрузку, опломбирование, документацию.",
    hassleFreeLogistics: "Беспроблемная Логистика",

    allCertifications: "Все Сертификаты Готовы",
    certificationDesc: "APEDA • FSSAI • ISO 9001 • Фитосанитарный • Фумигация • Халяль • COA • Сертификат здоровья — Все документы выдаются в течение 24 часов.",
    documentationExperts: "Эксперты по Экспортной Документации",

    onTimeDeliveryText: "Всегда Вовремя",
    onTimeDesc: "98,7% своевременная доставка в 2024-25 годах. Мы загружаем контейнеры в течение 7 дней с момента подтверждения заказа. Ваше доверие — наш приоритет.",
    onTimeHighlight: "15,000+ МТ Доставлено Вовремя",

    privateLabeling: "Частная Маркировка и Кастомизация",
    labelingDesc: "Ваш бренд на нашей продукции! Индивидуальная упаковка (от 1 кг до 50 кг), арабские/английские/русские этикетки, штрих-код, поддержка дизайна.",
    buildYourBrand: "Создайте Свой Собственный Бренд",

    globalReach: "Обслуживаем 25+ Стран",
    reachDesc: "Надежный партнер в ОАЭ, Саудовской Аравии, России, Марокко, Кении, Малайзии, Сингапуре, Ираке, Египте, и мы растем каждый месяц.",
    provenTrackRecord: "Проверенный Глобальный Опыт",

    dedicatedSupport: "Круглосуточная Поддержка",
    supportDesc: "Наша экспортная команда отвечает в WhatsApp в течение 5 минут. Персональный менеджер для каждого клиента.",
    neverAlone: "Вы Никогда Не Останетесь Одни",

    exportedStat: "МТ Экспортировано",
    countriesStat: "Обслужено Стран",
    clientsStat: "Довольных Клиентов",
    yearsStat: "Лет Превосходства",

    readyToImport: "Готовы Импортировать Лучшее из Индии?",
    readyToImportDesc: "Присоединяйтесь к 200+ успешным импортерам, которые выбрали LPI Agri своим надежным партнером",
    startImportingNow: "Начать Импорт Сейчас",
    viewAllProducts: "Посмотреть Все Продукты",

    // Chatbot
    typeMessage: "Напишите сообщение...",
    chatbotGreeting: "Здравствуйте! Добро пожаловать в LPI Agri\nЯ ваш помощник по экспорту. Чем могу помочь?",
  },

  // Arabic (RTL)
  ar: {
    // Navigation & General
    home: "الرئيسية", about: "عنا", export: "تصدير", import: "استيراد", products: "المنتجات", contact: "اتصل بنا",
    selectLanguage: "اختر اللغة", quickLinks: "روابط سريعة", followUs: "تابعنا", chatOnWhatsApp: "واتساب",
    phone: "الهاتف", email: "البريد", address: "العنوان",
    copyright: "© {year} إل بي آي أجري. جميع الحقوق محفوظة.", madeInIndia: "بفخر صنع في الهند",

    // Hero
    exportingTrust: "نصدر الثقة • نستورد الجودة", certified: "معتمد من APEDA • FSSAI • ISO",

    // Mission & Vision (used in Mission.jsx)
    ourMissionVision: "مهمتنا ورؤيتنا", mission: "مهمتنا", vision: "رؤيتنا",
    connectFarmers: "ربط المزارعين مباشرة بالمشترين", ensureTraceability: "تتبع 100%",
    promoteSustainable: "زراعة مستدامة وعضوية", deliverPremium: "جودة ممتازة بأسعار منافسة",
    no1Exporter: "المصدّر الأول في الهند", sustainableChain: "سلسلة توريد مستدامة", globalPresence: "50+ دولة", farmersEmpowered: "أكثر من مليون مزارع",

    // Products
    ourProducts: "منتجاتنا المتميزة", rice: "أرز", spices: "توابل", pulsesGrains: "بقوليات وحبوب", oilSeedsOthers: "بذور زيتية وغيرها",
    exportReady: "جاهز للتصدير", apedaCertified: "معتمد من APEDA", lookingForSpecific: "تبحث عن شيء محدد؟",
    alsoExport: "نصدر أيضاً السكر والفواكه والخضروات والدقيق والشاي والقهوة...", requestQuote: "اطلب عرض سعر",
    traceability: "تتبع 100%", fssaiApeda: "FSSAI و APEDA", globalGap: "Global GAP", organicAvailable: "عضوي متوفر",

    // Testimonials
    trustedByImporters: "موثوق بنا من قبل المستوردين في جميع أنحاء العالم",
    happyClients: "عملاء سعداء",
    mtExported: "طن متري تم تصديره",
    countriesServed: "بلدان مخدومة",
    onTimeDelivery: "التسليم في الموعد",
    onTimeDeliveryValue: "98.7%",
    startImporting: "ابدأ الاستيراد اليوم",

    // Why Choose Us
    whyChooseUs: "لماذا يختار كبار المستوردين LPI Agri",
    whyChooseUsDesc: "نحن لا نبيع المنتجات فحسب - بل نقدم الثقة والجودة والشراكات طويلة الأمد",
    qualityGuarantee: "ضمان الجودة 100%",
    qualityDesc: "يتم اختبار كل حبة في المختبر. نرفض أي دفعة لا تلبي معايير APEDA وFSSAI والمعايير الدولية. لا تنازل عن الجودة.",
    labReports: "يتم توفير تقارير المختبر",

    directFromFarmers: "مباشرة من المزارعين",
    farmerDesc: "نحن نشتري مباشرة من أكثر من 50,000 مزارع هندي مسجل. لا وسطاء = سعر أفضل لك، وأجر عادل للمزارعين.",
    farmerFirst: "نهج المزارع أولاً",

    globalDelivery: "التسليم العالمي من الباب إلى الباب",
    deliveryDesc: "من مستودعاتنا في موندرا/كاندلا إلى مينائك — FOB، CIF، DDP. نتعامل مع كل شيء: التعبئة، الختم، التوثيق.",
    hassleFreeLogistics: "خدمات لوجستية خالية من المتاعب",

    allCertifications: "جميع الشهادات جاهزة",
    certificationDesc: "APEDA • FSSAI • ISO 9001 • الصحة النباتية • التبخير • حلال • COA • الشهادة الصحية — جميع المستندات تصدر خلال 24 ساعة.",
    documentationExperts: "خبراء التوثيق للتصدير",

    onTimeDeliveryText: "في الوقت المحدد، في كل مرة",
    onTimeDesc: "سجل تسليم في الوقت المحدد بنسبة 98.7% في 2024-2025. نقوم بتحميل الحاويات خلال 7 أيام من تأكيد الطلب. ثقتكم هي أولويتنا.",
    onTimeHighlight: "أكثر من 15,000 طن متري تم تسليمه في الموعد",

    privateLabeling: "التوسيم الخاص والتخصيص",
    labelingDesc: "علامتك التجارية على منتجاتنا! تعبئة مخصصة (1 كجم إلى 50 كجم)، ملصقات باللغة العربية/الإنجليزية/الروسية، باركود، دعم التصميم.",
    buildYourBrand: "ابنِ علامتك التجارية الخاصة",

    globalReach: "نخدم 25+ دولة",
    reachDesc: "شريك موثوق به في الإمارات، المملكة العربية السعودية، روسيا، المغرب، كينيا، ماليزيا، سنغافورة، العراق، مصر، والمزيد في كل شهر.",
    provenTrackRecord: "سجل عالمي مثبت",

    dedicatedSupport: "دعم مخصص 24/7",
    supportDesc: "يرد فريق التصدير لدينا على واتساب في غضون 5 دقائق. مدير حساب شخصي لكل عميل.",
    neverAlone: "أنت لست وحدك أبدًا",

    exportedStat: "طن متري تم تصديره",
    countriesStat: "بلدان مخدومة",
    clientsStat: "عملاء سعداء",
    yearsStat: "سنوات من التميز",

    readyToImport: "هل أنت مستعد لاستيراد الأفضل من الهند؟",
    readyToImportDesc: "انضم إلى أكثر من 200 مستورد ناجح جعلوا LPI Agri شريكهم الموثوق به",
    startImportingNow: "ابدأ الاستيراد الآن",
    viewAllProducts: "عرض جميع المنتجات",

    // Chatbot
    typeMessage: "اكتب رسالتك...",
    chatbotGreeting: "مرحباً! مرحباً بكم في LPI Agri\nأنا مساعد التصدير. كيف يمكنني مساعدتك؟",
  },

  // French
  fr: {
    // Navigation & General
    home: "Accueil", about: "À propos", export: "Exportation", import: "Importation", products: "Produits", contact: "Contact",
    selectLanguage: "Choisir la langue", quickLinks: "Liens rapides", followUs: "Suivez-nous", chatOnWhatsApp: "WhatsApp",
    phone: "Téléphone", email: "E-mail", address: "Adresse",
    copyright: "© {year} LPI Agri. Tous droits réservés.", madeInIndia: "Fièrement fabriqué en Inde",

    // Hero
    exportingTrust: "Exportons la confiance • Importons la qualité", certified: "APEDA • FSSAI • ISO",

    // Mission & Vision (used in Mission.jsx)
    ourMissionVision: "Notre Mission & Vision", mission: "Notre Mission", vision: "Notre Vision",
    connectFarmers: "Connecter les agriculteurs directement aux acheteurs mondiaux", ensureTraceability: "Assurer une traçabilité à 100%",
    promoteSustainable: "Promouvoir l'agriculture durable et biologique", deliverPremium: "Livrer une qualité supérieure à des prix compétitifs",
    no1Exporter: "Exportateur Agri Indien N°1", sustainableChain: "Chaîne d'approvisionnement 100% durable", globalPresence: "Présent dans plus de 50 pays", farmersEmpowered: "Plus d'un million d'agriculteurs autonomisés",

    // Products
    ourProducts: "Nos Produits Premium", rice: "Riz", spices: "Épices", pulsesGrains: "Légumineuses & Céréales", oilSeedsOthers: "Graines oléagineuses",
    exportReady: "Prêt à l'Exportation", apedaCertified: "Certifié APEDA", lookingForSpecific: "Vous cherchez quelque chose de spécifique ?",
    alsoExport: "Nous exportons également du sucre, des fruits frais, des légumes, de la farine (Maida/Atta), du thé, du café, et plus encore.",
    requestQuote: "Demander un Devis Personnalisé",
    traceability: "Traçabilité à 100%", fssaiApeda: "Certifié FSSAI et APEDA", globalGap: "Conforme Global GAP", organicAvailable: "Options Biologiques Disponibles",

    // Testimonials
    trustedByImporters: "Reconnu par les Importateurs du Monde Entier",
    happyClients: "Clients Satisfaits",
    mtExported: "MT Exportés",
    countriesServed: "Pays Desservis",
    onTimeDelivery: "Livraison à Temps",
    onTimeDeliveryValue: "98.7%",
    startImporting: "Commencer l'Importation Aujourd'hui",

    // Why Choose Us
    whyChooseUs: "Pourquoi les Meilleurs Importateurs Choisissent LPI Agri",
    whyChooseUsDesc: "Nous ne vendons pas seulement des produits — nous livrons la confiance, la qualité et des partenariats à long terme",
    qualityGuarantee: "Garantie de Qualité à 100%",
    qualityDesc: "Chaque grain est testé en laboratoire. Nous rejetons tout lot ne respectant pas les normes APEDA, FSSAI et internationales. Zéro compromis sur la qualité.",
    labReports: "Rapports de Laboratoire Fournis",

    directFromFarmers: "Directement des Agriculteurs",
    farmerDesc: "Nous nous approvisionnons directement auprès de plus de 50 000 agriculteurs indiens enregistrés. Pas d'intermédiaires = Meilleur prix pour vous, juste rémunération pour les agriculteurs.",
    farmerFirst: "Approche axée sur les Agriculteurs",

    globalDelivery: "Livraison Mondiale Porte-à-Porte",
    deliveryDesc: "De notre entrepôt à Mundra/Kandla jusqu'à votre port — FOB, CIF, DDP. Nous gérons tout : empotage, scellement, documentation.",
    hassleFreeLogistics: "Logistique Sans Tracas",

    allCertifications: "Toutes les Certifications Prêtes",
    certificationDesc: "APEDA • FSSAI • ISO 9001 • Phytosanitaire • Fumigation • Halal • COA • Certificat de Santé — Tous les documents émis sous 24 heures.",
    documentationExperts: "Experts en Documentation d'Exportation",

    onTimeDeliveryText: "À l'Heure, À Chaque Fois",
    onTimeDesc: "98,7% de livraisons à temps en 2024-2025. Nous chargeons les conteneurs dans les 7 jours suivant la confirmation de commande. Votre confiance est notre priorité.",
    onTimeHighlight: "15 000+ MT Livrés à Temps",

    privateLabeling: "Marque Privée & Personnalisation",
    labelingDesc: "Votre marque sur nos produits ! Emballage personnalisé (1kg à 50kg), étiquettes Arabe/Anglais/Russe, code-barres, support de conception.",
    buildYourBrand: "Construisez Votre Propre Marque",

    globalReach: "Desservant 25+ Pays",
    reachDesc: "Partenaire de confiance aux EAU, Arabie Saoudite, Russie, Maroc, Kenya, Malaisie, Singapour, Irak, Égypte, et de plus en plus chaque mois.",
    provenTrackRecord: "Historique Mondial Éprouvé",

    dedicatedSupport: "Support Dédié 24/7",
    supportDesc: "Notre équipe d'exportation répond sur WhatsApp dans les 5 minutes. Gestionnaire de compte personnel pour chaque client.",
    neverAlone: "Vous n'êtes Jamais Seul",

    exportedStat: "MT Exportés",
    countriesStat: "Pays Desservis",
    clientsStat: "Clients Satisfaits",
    yearsStat: "Années d'Excellence",

    readyToImport: "Prêt à Importer le Meilleur de l'Inde ?",
    readyToImportDesc: "Rejoignez plus de 200 importateurs prospères qui ont fait de LPI Agri leur partenaire de confiance",
    startImportingNow: "Commencer l'Importation Maintenant",
    viewAllProducts: "Voir Tous les Produits",

    // Chatbot
    typeMessage: "Tapez votre message...",
    chatbotGreeting: "Bonjour ! Bienvenue chez LPI Agri\nJe suis votre assistant export. Comment puis-je vous aider ?",
  },

  // Spanish
  es: {
    // Navigation & General
    home: "Inicio", about: "Nosotros", export: "Exportar", import: "Importar", products: "Productos", contact: "Contacto",
    selectLanguage: "Seleccionar idioma", quickLinks: "Enlaces rápidos", followUs: "Síguenos", chatOnWhatsApp: "WhatsApp",
    phone: "Teléfono", email: "Correo", address: "Dirección",
    copyright: "© {year} LPI Agri. Todos los derechos reservados.", madeInIndia: "Orgullosamente hecho en India",

    // Hero
    exportingTrust: "Exportando confianza • Importando calidad", certified: "APEDA • FSSAI • ISO",

    // Mission & Vision (used in Mission.jsx)
    ourMissionVision: "Nuestra Misión y Visión", mission: "Nuestra Misión", vision: "Nuestra Visión",
    connectFarmers: "Conectar a los agricultores directamente con compradores globales", ensureTraceability: "Asegurar 100% de trazabilidad de la granja a la mesa",
    promoteSustainable: "Promover la agricultura sostenible y orgánica", deliverPremium: "Entregar calidad premium a precios competitivos",
    no1Exporter: "Exportador Agrícola Indio N°1", sustainableChain: "Cadena de Suministro 100% Sostenible", globalPresence: "Presencia en más de 50 Países", farmersEmpowered: "Más de 1 Millón de Agricultores Empoderados",

    // Products
    ourProducts: "Nuestros Productos Premium", rice: "Arroz", spices: "Especias", pulsesGrains: "Legumbres y Cereales", oilSeedsOthers: "Semillas oleaginosas",
    exportReady: "Listo para Exportar", apedaCertified: "Certificado APEDA", lookingForSpecific: "¿Buscas Algo Específico?",
    alsoExport: "También exportamos Azúcar, Frutas Frescas, Verduras, Harina (Maida/Atta), Té, Café y más.",
    requestQuote: "Solicitar Presupuesto Personalizado",
    traceability: "100% Trazabilidad", fssaiApeda: "Certificado FSSAI y APEDA", globalGap: "Cumple con Global GAP", organicAvailable: "Opciones Orgánicas Disponibles",

    // Testimonials
    trustedByImporters: "Con la Confianza de Importadores de Todo el Mundo",
    happyClients: "Clientes Felices",
    mtExported: "TM Exportadas",
    countriesServed: "Países Atendidos",
    onTimeDelivery: "Entrega a Tiempo",
    onTimeDeliveryValue: "98.7%",
    startImporting: "Comenzar a Importar Hoy",

    // Why Choose Us
    whyChooseUs: "Por Qué los Mejores Importadores Eligen LPI Agri",
    whyChooseUsDesc: "No solo vendemos productos — entregamos confianza, calidad y asociaciones a largo plazo",
    qualityGuarantee: "Garantía de Calidad 100%",
    qualityDesc: "Cada grano es probado en laboratorio. Rechazamos cualquier lote que no cumpla con los estándares APEDA, FSSAI e internacionales. Cero compromiso con la calidad.",
    labReports: "Informes de Laboratorio Proporcionados",

    directFromFarmers: "Directo de Agricultores",
    farmerDesc: "Nos abastecemos directamente de más de 50,000 agricultores indios registrados. Sin intermediarios = Mejor precio para ti, pago justo para los agricultores.",
    farmerFirst: "Enfoque en el Agricultor Primero",

    globalDelivery: "Entrega Global Puerta a Puerta",
    deliveryDesc: "Desde nuestro almacén en Mundra/Kandla hasta su puerto — FOB, CIF, DDP. Manejamos todo: estiba, sellado, documentación.",
    hassleFreeLogistics: "Logística Sin Complicaciones",

    allCertifications: "Todas las Certificaciones Listas",
    certificationDesc: "APEDA • FSSAI • ISO 9001 • Fitosanitario • Fumigación • Halal • COA • Certificado de Salud — Todos los documentos emitidos en 24 horas.",
    documentationExperts: "Expertos en Documentación de Exportación",

    onTimeDeliveryText: "A Tiempo, Siempre",
    onTimeDesc: "Récord de entrega a tiempo del 98.7% en 2024-2025. Cargamos contenedores dentro de los 7 días de la orden confirmada. Su confianza es nuestra prioridad.",
    onTimeHighlight: "Más de 15,000 TM Entregadas a Tiempo",

    privateLabeling: "Etiquetado Privado y Personalización",
    labelingDesc: "¡Su marca en nuestros productos! Embalaje personalizado (1kg a 50kg), etiquetas en árabe/inglés/ruso, código de barras, soporte de diseño.",
    buildYourBrand: "Construye Tu Propia Marca",

    globalReach: "Sirviendo a Más de 25 Países",
    reachDesc: "Socio de confianza en EAU, Arabia Saudita, Rusia, Marruecos, Kenia, Malasia, Singapur, Irak, Egipto, y creciendo cada mes.",
    provenTrackRecord: "Historial Global Comprobado",

    dedicatedSupport: "Soporte Dedicado 24/7",
    supportDesc: "Nuestro equipo de exportación responde en WhatsApp en 5 minutos. Gerente de cuenta personal para cada cliente.",
    neverAlone: "Nunca Estás Solo",

    exportedStat: "TM Exportadas",
    countriesStat: "Países Atendidos",
    clientsStat: "Clientes Felices",
    yearsStat: "Años de Excelencia",

    readyToImport: "¿Listo para Importar lo Mejor de la India?",
    readyToImportDesc: "Únete a más de 200 importadores exitosos que hicieron de LPI Agri su socio de confianza",
    startImportingNow: "Comenzar a Importar Ahora",
    viewAllProducts: "Ver Todos los Productos",

    // Chatbot
    typeMessage: "Escribe tu mensaje...",
    chatbotGreeting: "¡Hola! Bienvenido a LPI Agri\nSoy tu asistente de exportación. ¿Cómo puedo ayudarte?",
  },

  // Chinese (Simplified)
  zh: {
    // Navigation & General
    home: "首页", about: "关于我们", export: "出口", import: "进口", products: "产品", contact: "联系",
    selectLanguage: "选择语言", quickLinks: "快速链接", followUs: "关注我们", chatOnWhatsApp: "WhatsApp",
    phone: "电话", email: "电子邮件", address: "地址",
    copyright: "© {year} LPI Agri. 版权所有。", madeInIndia: "印度制造，自豪出品",

    // Hero
    exportingTrust: "出口信任 • 进口品质", certified: "APEDA • FSSAI • ISO 认证",

    // Mission & Vision (used in Mission.jsx)
    ourMissionVision: "我们的使命和愿景", mission: "我们的使命", vision: "我们的愿景",
    connectFarmers: "将农民直接连接到全球买家", ensureTraceability: "确保从农场到餐桌的100%可追溯性",
    promoteSustainable: "推广可持续和有机农业", deliverPremium: "以有竞争力的价格提供优质产品",
    no1Exporter: "印度第一农业出口商", sustainableChain: "100% 可持续供应链", globalPresence: "业务遍及 50 多个国家", farmersEmpowered: "赋权超过 100 万农民",

    // Products
    ourProducts: "我们的优质产品", rice: "大米", spices: "香料", pulsesGrains: "豆类与谷物", oilSeedsOthers: "油料种子及其他",
    exportReady: "准备出口", apedaCertified: "APEDA 认证", lookingForSpecific: "寻找特定产品？",
    alsoExport: "我们还出口糖、新鲜水果、蔬菜、面粉（Maida/Atta）、茶、咖啡等。",
    requestQuote: "请求定制报价",
    traceability: "100% 可追溯性", fssaiApeda: "FSSAI 和 APEDA 认证", globalGap: "符合 Global GAP 标准", organicAvailable: "提供有机选项",

    // Testimonials
    trustedByImporters: "深受全球进口商信赖",
    happyClients: "满意客户",
    mtExported: "吨出口量",
    countriesServed: "服务国家",
    onTimeDelivery: "准时交货",
    onTimeDeliveryValue: "98.7%",
    startImporting: "立即开始进口",

    // Why Choose Us
    whyChooseUs: "顶尖进口商为何选择 LPI Agri",
    whyChooseUsDesc: "我们不仅仅销售产品 — 我们提供信任、质量和长期合作伙伴关系",
    qualityGuarantee: "100% 质量保证",
    qualityDesc: "每粒谷物都经过实验室检测。我们拒绝任何不符合 APEDA、FSSAI 和国际标准的批次。对质量零妥协。",
    labReports: "提供实验室报告",

    directFromFarmers: "直接来自农民",
    farmerDesc: "我们直接从 50,000+ 注册印度农民采购。没有中间商 = 您的价格更好，农民获得公平报酬。",
    farmerFirst: "农民优先方针",

    globalDelivery: "全球门到门交付",
    deliveryDesc: "从我们在蒙德拉/坎德拉的仓库到您的港口 — FOB、CIF、DDP。我们处理所有事宜：装货、封箱、文件。",
    hassleFreeLogistics: "无忧物流",

    allCertifications: "所有证书齐全",
    certificationDesc: "APEDA • FSSAI • ISO 9001 • 植物检疫 • 熏蒸 • 清真 • COA • 健康证书 — 所有文件在 24 小时内签发。",
    documentationExperts: "出口文件专家",

    onTimeDeliveryText: "准时，每一次都准时",
    onTimeDesc: "2024-2025 年准时交付记录为 98.7%。我们在确认订单后 7 天内装载集装箱。您的信任是我们的首要任务。",
    onTimeHighlight: "15,000+ 吨准时交付",

    privateLabeling: "自有品牌和定制",
    labelingDesc: "您的品牌印在我们的产品上！定制包装（1kg 至 50kg）、阿拉伯语/英语/俄语标签、条形码、设计支持。",
    buildYourBrand: "建立您自己的品牌",

    globalReach: "服务 25+ 个国家",
    reachDesc: "在阿联酋、沙特阿拉伯、俄罗斯、摩洛哥、肯尼亚、马来西亚、新加坡、伊拉克、埃及等地值得信赖的合作伙伴，并且每月都在增长。",
    provenTrackRecord: "经验证的全球业绩记录",

    dedicatedSupport: "24/7 专属支持",
    supportDesc: "我们的出口团队在 5 分钟内回复 WhatsApp。每位客户都有私人客户经理。",
    neverAlone: "您永不孤单",

    exportedStat: "吨出口量",
    countriesStat: "服务国家",
    clientsStat: "满意客户",
    yearsStat: "卓越年份",

    readyToImport: "准备好从印度进口最好的产品了吗？",
    readyToImportDesc: "加入 200+ 成功的进口商，他们选择 LPI Agri 作为其值得信赖的合作伙伴",
    startImportingNow: "立即开始进口",
    viewAllProducts: "查看所有产品",

    // Chatbot
    typeMessage: "输入您的消息...",
    chatbotGreeting: "您好！欢迎来到 LPI Agri\n我是您的出口助手。今天如何为您服务？",
  },

  // Hindi
  hi: {
    // Navigation & General
    home: "होम", about: "हमारे बारे में", export: "निर्यात", import: "आयात", products: "उत्पाद", contact: "संपर्क",
    selectLanguage: "भाषा चुनें", quickLinks: "त्वरित लिंक", followUs: "हमें फॉलो करें", chatOnWhatsApp: "व्हाट्सएप पर चैट",
    phone: "फ़ोन", email: "ईमेल", address: "पता",
    copyright: "© {year} एलपीआई एग्री। सर्वाधिकार सुरक्षित।", madeInIndia: "गर्व से बना भारत में",

    // Hero
    exportingTrust: "विश्वास का निर्यात • गुणवत्ता का आयात", certified: "APEDA • FSSAI • ISO प्रमाणित",

    // Mission & Vision (used in Mission.jsx)
    ourMissionVision: "हमारा मिशन और विज़न", mission: "हमारा मिशन", vision: "हमारा विज़न",
    connectFarmers: "किसानों को सीधे वैश्विक खरीदारों से जोड़ना", ensureTraceability: "खेत से थाली तक 100% ट्रेसबिलिटी सुनिश्चित करना",
    promoteSustainable: "टिकाऊ और जैविक खेती को बढ़ावा देना", deliverPremium: "प्रतिस्पर्धी कीमतों पर प्रीमियम गुणवत्ता प्रदान करना",
    no1Exporter: "नंबर 1 भारतीय कृषि निर्यातक", sustainableChain: "100% टिकाऊ आपूर्ति श्रृंखला", globalPresence: "50+ देशों में उपस्थिति", farmersEmpowered: "1 मिलियन+ किसानों को सशक्त बनाना",

    // Products
    ourProducts: "हमारे प्रीमियम उत्पाद", rice: "चावल", spices: "मसाले", pulsesGrains: "दालें और अनाज", oilSeedsOthers: "तिलहन और अन्य",
    exportReady: "निर्यात के लिए तैयार", apedaCertified: "APEDA प्रमाणित", lookingForSpecific: "कुछ विशिष्ट खोज रहे हैं?",
    alsoExport: "हम चीनी, ताज़े फल, सब्जियां, आटा (मैदा/आटा), चाय, कॉफी और बहुत कुछ निर्यात करते हैं।",
    requestQuote: "अनुरोध कस्टम उद्धरण",
    traceability: "100% ट्रेसबिलिटी", fssaiApeda: "FSSAI और APEDA प्रमाणित", globalGap: "ग्लोबल गैप के अनुरूप", organicAvailable: "जैविक विकल्प उपलब्ध",

    // Testimonials
    trustedByImporters: "दुनिया भर के आयातकों द्वारा विश्वसनीय",
    happyClients: "खुश ग्राहक",
    mtExported: "मीट्रिक टन निर्यात किया गया",
    countriesServed: "देशों को सेवा दी गई",
    onTimeDelivery: "समय पर डिलीवरी",
    onTimeDeliveryValue: "98.7%",
    startImporting: "आज ही आयात शुरू करें",

    // Why Choose Us
    whyChooseUs: "शीर्ष आयातक LPI Agri को क्यों चुनते हैं",
    whyChooseUsDesc: "हम सिर्फ उत्पाद नहीं बेचते — हम विश्वास, गुणवत्ता और दीर्घकालिक साझेदारी प्रदान करते हैं",
    qualityGuarantee: "100% गुणवत्ता की गारंटी",
    qualityDesc: "प्रत्येक अनाज का लैब-टेस्ट किया जाता है। हम APEDA, FSSAI और अंतर्राष्ट्रीय मानकों को पूरा न करने वाले किसी भी लॉट को अस्वीकार करते हैं। गुणवत्ता पर शून्य समझौता।",
    labReports: "लैब रिपोर्ट प्रदान की जाती है",

    directFromFarmers: "सीधे किसानों से",
    farmerDesc: "हम 50,000+ पंजीकृत भारतीय किसानों से सीधे सोर्स करते हैं। कोई बिचौलिया नहीं = आपके लिए बेहतर कीमत, किसानों के लिए उचित भुगतान।",
    farmerFirst: "किसान-प्रथम दृष्टिकोण",

    globalDelivery: "डोर-टू-डोर ग्लोबल डिलीवरी",
    deliveryDesc: "हमारे मुंद्रा/कांडला गोदाम से आपके बंदरगाह तक — FOB, CIF, DDP। हम सब कुछ संभालते हैं: स्टफिंग, सीलिंग, दस्तावेज़ीकरण।",
    hassleFreeLogistics: "परेशानी मुक्त लॉजिस्टिक्स",

    allCertifications: "सभी प्रमाणन तैयार",
    certificationDesc: "APEDA • FSSAI • ISO 9001 • फाइटोसैनिटरी • धूमन • हलाल • COA • स्वास्थ्य प्रमाण पत्र — सभी दस्तावेज़ 24 घंटे के भीतर जारी किए जाते हैं।",
    documentationExperts: "निर्यात दस्तावेज़ीकरण विशेषज्ञ",

    onTimeDeliveryText: "समय पर, हर बार",
    onTimeDesc: "2024-25 में 98.7% ऑन-टाइम डिलीवरी रिकॉर्ड। हम पुष्ट आदेश के 7 दिनों के भीतर कंटेनर लोड करते हैं। आपका विश्वास हमारी प्राथमिकता है।",
    onTimeHighlight: "15,000+ मीट्रिक टन समय पर वितरित",

    privateLabeling: "निजी लेबलिंग और अनुकूलन",
    labelingDesc: "हमारे उत्पादों पर आपका ब्रांड! कस्टम पैकिंग (1 किग्रा से 50 किग्रा), अरबी/अंग्रेजी/रूसी लेबल, बारकोड, डिज़ाइन समर्थन।",
    buildYourBrand: "अपना खुद का ब्रांड बनाएं",

    globalReach: "25+ देशों की सेवा",
    reachDesc: "यूएई, सऊदी अरब, रूस, मोरक्को, केन्या, मलेशिया, सिंगापुर, इराक, मिस्र में भरोसेमंद भागीदार, और हर महीने बढ़ रहे हैं।",
    provenTrackRecord: "सिद्ध वैश्विक ट्रैक रिकॉर्ड",

    dedicatedSupport: "24/7 समर्पित समर्थन",
    supportDesc: "हमारी निर्यात टीम 5 मिनट के भीतर व्हाट्सएप पर जवाब देती है। प्रत्येक ग्राहक के लिए व्यक्तिगत खाता प्रबंधक।",
    neverAlone: "आप कभी अकेले नहीं हैं",

    exportedStat: "मीट्रिक टन निर्यात किया गया",
    countriesStat: "देशों को सेवा दी गई",
    clientsStat: "खुश ग्राहक",
    yearsStat: "उत्कृष्टता के वर्ष",

    readyToImport: "भारत से सर्वश्रेष्ठ आयात करने के लिए तैयार हैं?",
    readyToImportDesc: "200+ सफल आयातकों से जुड़ें जिन्होंने LPI Agri को अपना विश्वसनीय भागीदार बनाया",
    startImportingNow: "अभी आयात शुरू करें",
    viewAllProducts: "सभी उत्पाद देखें",

    // Chatbot
    typeMessage: "अपना संदेश टाइप करें...",
    chatbotGreeting: "नमस्ते! LPI Agri में आपका स्वागत है\nमैं आपका निर्यात सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?",
  },
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("lpi-agri-language");
    return saved || "en";
  });

  useEffect(() => {
    localStorage.setItem("lpi-agri-language", language);
    // Auto RTL for Arabic
    if (language === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key, values = {}) => {
    let text = translations[language]?.[key] || translations.en[key] || key;
    // Replace {year}
    text = text.replace("{year}", new Date().getFullYear());
    // Replace other values
    Object.keys(values).forEach((k) => {
      text = text.replace(`{${k}}`, values[k]);
    });
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};