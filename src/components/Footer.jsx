import { useLanguage } from '../config/LanguageContext.jsx';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Send // for WhatsApp style
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", url: "https://facebook.com/lpiagri" },
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", url: "https://instagram.com/lpiagri" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", url: "https://linkedin.com/company/lpiagri" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", url: "https://twitter.com/lpiagri" },
    { icon: <Youtube className="w-6 h-6" />, name: "YouTube", url: "https://youtube.com/@lpiagri" },
    { icon: <Send className="w-6 h-6" />, name: "WhatsApp", url: "https://wa.me/919876543210", color: "bg-green-500" },
  ];

  const quickLinks = [
    { name: t('home'), href: "#home" },
    { name: t('about'), href: "#about" },
    { name: t('export'), href: "#export" },
    { name: t('import'), href: "#import" },
    { name: t('products'), href: "#products" },
    { name: t('contact'), href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-t from-green-900 to-green-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-yellow-400">LPI</span> Agri
          </h2>
          <p className="text-green-100 leading-relaxed">
            Leading exporter & importer of premium agricultural products from India to the world.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span> <a href="tel:+917505266931">+91 75052 66931</a></span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span><a href="mailto:info@lpiagri.com">info@lpiagri.com</a></span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-yellow-400">{t('quickLinks') || "Quick Links"}</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-yellow-300 transition flex items-center gap-2"
                >
                  <span className="text-green-400">›</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-yellow-400">
            {t('followUs') || "Follow Us"}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition transform hover:scale-110 ${
                  social.color || ''
                }`}
                aria-label={social.name}
              >
                <div className="text-white">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp Floating Style */}
          <a
            href="https://wa.me/917505266931?text=Hello%20LPI%20Agri%20Team!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-full font-medium transition shadow-lg"
          >
            <Send className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Language & Globe */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              {t('selectLanguage')}
            </h3>
            <p className="text-sm text-green-200">
              Currently: <span className="font-bold capitalize">{useLanguage().language}</span>
            </p>
          </div>

          <div className="mt-8 text-center text-green-300 text-xs">
            <p>Exporting Trust • Importing Quality</p>
            <p className="mt-2">APEDA • FSSAI • ISO Certified</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-green-700 text-center text-green-200">
        <p>© {currentYear} <span className="font-bold text-yellow-400"> <a href='https://www.legalpapersindia.com/' target='_blank'>LPI Agri</a> </span>. All Rights Reserved.</p>
        <p className="text-xs mt-2">Proudly Made in India</p>
      </div>
    </footer>
  );
};

export default Footer;