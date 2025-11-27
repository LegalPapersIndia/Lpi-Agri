// src/pages/Import.jsx
import React from 'react';
import { useLanguage } from '../config/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Package, Truck, Warehouse, IndianRupee, ShieldCheck, 
  Clock, PhoneCall, ArrowRight, Wheat, Sparkles, BadgeCheck,
  Factory, Store, Hotel, ShoppingCart, MessageCircle
} from 'lucide-react';

const Import = () => {
  const { t } = useLanguage();

  const products = [
    { 
      name: "Australian Almonds", 
      origin: "Australia", 
      icon: Factory, 
      volume: "500+ MT/Month",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhMWGBUWFxcYFxcZFxcVGBgXFxUXGhcYHSggGB0mGxcVITEhJSktLi4uGR8zODMtNygtLisBCgoKDg0OGhAQGy0iICUrLS0tLzItLS0tNS0vLS0tLS0tLS8vLSstLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKwBJAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQCBQYBBwj/xAA/EAABAwICBwQIBAUDBQAAAAABAAIRAyEEMQUGEkFRYXEigZGhEzJSscHR4fAHI0JiFHKSsvEzU6IkQ4OT0v/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACgRAAICAQQCAQMFAQAAAAAAAAABAhEDBBIhMUFRMhMikVJhobHBgf/aAAwDAQACEQMRAD8A+4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCLwuXqAIqmkNJUqAmq9rRunM9Gi57lQw2tOFeYFSP5gWjxOSg8kYumyaxyatI3SLwFeqZAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAi8lVsfj6dFpfVeGt57zwAzJ5BcbS7OpX0WlodO614fDHYc4Oq27AIkTEbRJhuYz4rUYjXBzzNMFlMGASAXvJiBBs0X57slxGtTx/FtxBkvqU2HZmzTdstGUuDWnvPFZJ6pO1A2YtK7Tn0fRMHrW57do0NkbpeJPgOvgosZre6mC51IQBJgnLwutHo3FipbLZDZHAkNcB5+UqTTNIOYWxMjKPBee9ZlT5f8ARsWkxev7NHpzWhuLxDXMcQzYa1gJs2oJLuhMxPILeaI1hqscGOdO7tXHf8wvkWGxXocVVoOAbLtpgEWmJBjou80djA9odbabE9R8wrcrknuTGOEa2tcdEOt2ExLajsRUearCbvFiwey5v6RzFukrVUtJnZs6c/vmu70diNo7BAIIIAN9oD1mHnBMfVcTrjq//DRWpf6DiAR/tOPqx+x26cjbgqd+/vs0QSi9rOswmun8Nh8NWe5xpOJovbG0dqNpjxJmAGvneZbwX0TR2kWVqYqMPZPl1XwmviKWLbSoOdFKiTVcG2c8BpaGjhJcZPhxHS6KfdgbDabRDWDcLBvnF7Z3JV+LPPGufwZs2mhkf28fufVxi6ftt/qHzUoK4fDNLoN4PBjtxzvkFsMJiS27TvHDtdQO/mroa63yjJPR10zqUWNN0gHiAVkvQMQREQBERAEREAREQBERAEREAREQBERAEREAREQBCi8cUB8l0zpOs6rUbUc4xUeIk9mHZQABG63DevcFpDce0OEi39Sz/EDFUxi3bMCGs2zmC8gn+3Zn6rjnaUAdZ1xwheRlx22rPZxS+1cHZYljHDsiCJIIEEE7y3Kb8FyesmkGGpRN2PaxlMsNyXUgBttdk5rmweIIMjInKnrO5hBMSPAjeDwsthUoUsfS2XQHWLXCA5jx1tH3vUYKUO+ibUZddm01SxLHNgesXTJJ7XBt7yA0xdb/ABo7JJLhY/cr4vg9LYnCV3UnNaXA7OyCSHzlsi89eXEL6RgtMVzT/NbsmMru2erhI7rqnLgknfsnHJF/8PlOv1H0eJ2mSLTNvWB3RnHFbTQumbAhw2gIcBkQeR3LrsRqbhMW4uqmqXZBzamVhaCIF+S5TT34d4jDj02FLq1MSSIiq0b5aLPHHZvbK0rXCeOUFBvlGae+M3KuGdlorSYIaWETMkTwvLTnuiOY3ZdhssrU3tc1r2VA5rmnKPWPv7l+f8Jpt7YLJ2pHZGc5CIz7l9LwWn61OkA7ZD8yYkE5uJGRgATGZFlTkwuPJcpqfCOK1gwL9GYo0XS6i7t0anFhmxPtNmD47wtxoTWxgO0WzAAsSbAg5E8QF1mkWNxLGnEMFZliWuAOyTaWkQWuIIgA7lrMT+HlAhr6Ms3FpNp4bWfK6SnCS+7s7CMo8cUbvCa7UXmBTeXZkASXbgA26k1m1nqUcM3EikabHVGU6bKkFzyRtOlrXdhoaHesQZjsxBXB6V1ZNCXU3uY8GLHf98Vk/A4rF0mUsRXljHyAIJ2i0tA8xZSxxx1d8EJqW6q/3g+naqa4VMQ0Ona9psAEcrDzXcYTFtqCW943hfGND6CdgKZxW278qNpsyx7XODCMhucb9M13mhtLsqhtWi6W9IvvaVPFqJQly7RVn00ZK4qjs0UWGrB7QR/g8FKvUTTVo8tqnTCIi6cCIiAIiIAiIgCIiAIiIAiIgCIiAIi0um9LGm70bPWgOJ4AkgeMFcbo6lZtMRiWMEvcB1+S+f6+6ZFf/pmEmlnUAttmxDLkSALkc+S80vpD0VKpXfJFNjnu4kATHwXIVKwqN2i4hz+1f1STfPdmsupyNRpeTZpcScrfgxpU2gbLQBAjZjZI6Nyjko6ujKFZkOa08oMg8ZzAPtDeFjXqna7be1OY3/NetrtkFtt8TcO37J48t8lee1Ls9RU1RyGseiqmGIc0mpRcdkG+013suG/IwY3EdYtF1cXS7dKlW5HZdB8V3ldoqsIdGyRc7p/S4d4HeFzmG0o69N87TZBGcEWz3iVdHJcaaKJ49srTItB6ZOIxR9OzZqCmQwlpacxtWO/1ct0rsKVR4jMCAQQAcxwK4bSDJO1cEGQRMg5Z7uitYbWzYhr3bDuMdg9D+nfbJJw3L7URhLb8mfQcFRhxIE7QvFi2ImG5ObfJdHoxhgm3Axa+V2/pMAXC+eYHW5hG0Xscd8OEETzBj/CvM19otJO00ce11tbcsf05XyjRJprhmo/EjVllHE08XRAAeXF7Rb85oLmuAyBdF+JbO9UKGL2qTgcuxTjgLE+IAVbXjXcYrZp0rgFpLhlI3Dv7s1BhH+uJs4bQ7hZbVGe1biiEoptRPoOFrN2KRBOw1wE7yWRAPG7oW7wryKTRN7i3N2d911xGh8V+Ww7m1WwMwJifcfBdtRtLeLrX3kh5+Hmsk4U6NN2rOc/EXBWp4hpiTsPF7gy5pA42IPdwVTU2gHnaIgU5gn1BlmMo5b1uvxCe0Yak0gkmqwBosXQx9p3bp5StTg9Itp0yGw50mI9UWvsgZAceM8Em5KKSO44ppsm/EjTrhgvRCC97mtdBAIYx4O3s5ntNa23PgtFqJpjEUn3pVBSfG1LdkfzDajnlzUoql1Qvc2m58AAiXkNEkNmBF/Ek8b7ahh3uA/SAI7RDQIN+JIMAz5qW5KG1/kisbTddej6JoTWCjJaX8P0uzy4fcLpaGIa8S0gjl92XzvRNOkwdqp6Rx3AHZ4mMgRcZTC6jQ+KAM7Ia0jZtPiZ+81q0updqHg8/VadcyVnQogRemecEREAREQBERAEREAREQBERAEREAXGa0gtxG232WtcOIEkdDcrs1ymtDPzerR7zHuVWX4luL5GlxOFZiKT6bp2ajXMc02Oy4Qct/NcAMNVoA0ntL2sljX57TW2ZtAXa4Dfku9ezuVKoJJ2wCeN58lhyylJUbsSjF2cIMcLgOtvkZdQoqOJEyctxvc7rjeu1xGicNV/1Kd+MAnucIK1eJ1JoH/Tqvp9DI79sE+ap3e0zQpK+yngXQ7Zc0yTYc94+K4f+MD8RUIhzTUqEfylxgj3rtMZqNi3tLaOLYQRvaWlw4FzXOjqAucP4dY9h9Rjo9lxH9wCsxOFNtkck22kkXDSDgYDj3T4/NcvpikS7ZDbyAOJcbAeK6tmgMY0duhVPCNkx4ErX4jQ2I9M0uw9aGhxkU3wXAHZuAbzHgpYppS7IZI3GixoHV+i0ta4Bzjdzj7P7eA967GloejkKbQC0uAgTAtfhnl04LmarKm078uoBLW+o4WtJEiy6z0x2mVCCIbBEH1W1Gt/+j5KjLKTd2acUYxVJHBfiBq+yjFakNkTBAykGxjcqeisUHNDx0I4cQfh1Xc614f0uGqtI7TSDEXMtA78l8uwNGtSfam8i0gMcQfJasMvqQp9oyZl9PJa6Z3ejXAkNnsuJd3wQPNq+gaIftlpm/YJH7YPz8l800VS22gtOzcH+WYBDgfVIgGDxXev/AIijQe7D0hWrAQ1g9XasG52IGZHAQqsm32XxlUbJ9Kaw0BiP4d5hzdkTEjaddwHQbM9Vcp0qFVsHti3aMNPKHDLxXy2hqVpSoS59G7iXOL6jZLiZc4lpJkyfFdhoTUzHtEPextrEB9Qjvhs9/FZ8mKN2nZOOWNJPg2mkNVagE4V1ryx0bR/lfIB7/ErhsTp4UXbDg70rTs7LxL9qwLdg5EwLQvrGidC4ikB+aSeBDWt/pJcR4qdmrbfSGq8tNZ0Ava2HbIyG3YxwCjDG7txb/g5LU1wpI4fVv+MrQ6pTNJm81AfSOG5rWC7W83RlkZX0PAsLmi0RbKApsPoymDlPMmfLJbD78FowYnGTl1+xkzZtyrsu0BDQOQWaxp5Dosl6y6PNYREXQEREAREQBERAEREAREQBERAFy2tY/Mb/ACjycV1K5rWwdph5H3/VV5fiWYvkaCofP3qCqwEcCpXcN25ROPivPfZuRWAix3L2d32VIQCozaygyRE9hGSlpYgjeR3koF7ZVyJInZXdntnx+asNrOGcHuCosoBTsa4ZE+SpZM2NKu72W+ClOJPsjyVCm52+D1C9FQzkD3j5KG4bS/6ef0DyUlN4P6GqjTqn2D4iPerArOGTf+QXNzG0vNptObGf0g+9XKQA3DwC11J7zwHmrlOnOd1oxy9FM4l1lXh5QvZO9QggKQFalJsoaMliRK9KyAhSqyPQAhB99F6QvWZhWRXJwvBeoi2mYIiIAiIgCIiAIiIAiIgCIiAIiIAuf1tbamebh4wfgV0C02tjJoF3suae71T71DJ8WTx/JHHF3koy+eqie/f9wsZ3+a86R6CRLzC8N/vLnzXk7wh4j4KB0wdbmsmHh5r0O4rI0wVXIkjxkdOina47iD1+ijaCM/fB8lkxjeBb98lUyaJqZPs+BJ95Csis0Z27lVbR4VPEgrMUak5tjw+arJcFtldvH3qX0gORPdf3hRU6Z4j+r6Kw2k7iB5pyc4J6dU7h3mystqcT3D7lVGAb3zyH0urNH9o71dCyqSRYY6OQ5qRrpy8VhTp8SpNqLb1ojZQzOwWQKwA3lZA7yrUyDPVJQHaHiogrGEF5VuPmSIS4RaREWwzhERAEREAREQBERAEWJcon1EBKXLB1VVKlZV6ldAbA4hYHFLUvrlQmqUsG6OKCrY54qU3s9ppHfFvOFrdpegrjCOKpVNx++IWQfBvvyWenaPo6xjJ3bb3+sPGfFVg4ESvMmtrpnqQe5WWQYUg4hV6bv0n/AD9VnJGeSrsnRML/ACWTSRuJUdjyPFStfA7QkcfoosE9Iz93UwaoA0HK6kpUnDK3mqmdJhSB3T1+qxGDHADvA+Cypz+po++5TsqH2fvxUKJWzGlhf3f8irNPCcget/gsqbuXkpQ48PILqiiLkyenSjcFPtQq7Q7p0hTtbzV0SmRmHE8lnYdVGHbh9Fk22dyVYmQZI0bz/hZErCfvgsgYViIMy5K5hhZVKbfErYNEBa8K8lOR+D1ERaCkIiIAiIgCIiAIiICN4VeoFbIUb2IDW1VTqlbapSVSrQQGtK8lWamHVd1IhRABWQKhlNpDpQ1kwXpaUtHbpy5vEj9Te8X6gLjqVfeO/nzC7yriIXCaaw/o6heyzHGeTXHMdDu8Fk1EL5Rs086+1lsPBv5qxRqzY5+9aWhifqPiFfp1ARyPksTNlGxa3/G4qemYt7/mqmHrRZ1xx+fzVpoabCL+HkotnKJmhp5c/qFJTYZs7qooIyRg/aOqgzqLlMR+mfH3lW2O5R5qpSI/cPH3KzTvk7xn3LiOMsNdyHgQpBV/ae4rFjoGY++9ZU3Z9oeSkRJgXbhCzA9o9yhAGdz3x7rKemeUeCnEgyRpjKy9DifmvA3ismuj5K1FbMsl6y9ysGiTJU9NhKsirISdE+FZvVpYsbAhZL0IR2qjLJ2wiIpEQiIgCIiAIiIAiIgCIiAxLVE6kp0QFJ9BQuw62ULzYCA078JyVarglvzSCwdQXKBx2MwT9y02JwToIc2QcxuX0N+F5KF+jwdyg4lkZ0fI8XoZzb0/6TmOh396p08U6mYeC08DYO6HivsFTQ7TuVPEas03WLQQqJYEy+OoaOAwuPDsiOhVujUi4Md9vBbvE/h9SJlssP7THlkqh1Grt9SvI4PaD5tI9yzS0svBfHUw8kTMS4Ztk8QfgfmrVCsDE26z7yq7tW8c0+rSf0e4HwLY81I3RuLbnhnno+mR5vnyVLwZF4LVlxvybJoBGYPgVOyAtXSw2ImXYaqOgn+0wrbRU30a/wD63/AKH08n6X+Bvh7RsG93iFMWzuVFlJ5/7dYf+N3xCtDDVCP9KofAf3OCkseT9LIOUPaJ2GMz7lmyqDlJ4x9V5RwNT/aLepZ8CVcZo9/7R3k+UBXRw5H4KpZIeyC/Tpmsg0BXGYHi7wEfNWKeHa3IfH3rRHTS8lLzLwUqNEn57u7ir1KmApEWmGJRKZTcgiIrCAREQBERAEREAREQBERAEREAREQBERAEREASERAISERAEhEQCEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/Z" // Close-up almonds from Unsplash
    },
    { 
      name: "California Walnuts", 
      origin: "USA", 
      icon: Store, 
      volume: "300+ MT/Month",
      image: "https://safadryfruitsandspices.com/wp-content/uploads/2023/06/Untitled-design-7.jpg" // Walnut halves close-up from Pexels
    },
    { 
      name: "Afghan Dry Grapes (Raisins)", 
      origin: "Afghanistan", 
      icon: Hotel, 
      volume: "800+ MT/Month",
      image: "https://cdn.shopaccino.com/adfs/products/afghan-raisins-kismis-503244_l.jpg?v=625" // Golden raisins close-up from Unsplash
    },
    { 
      name: "Iranian Pistachio", 
      origin: "Iran", 
      icon: ShoppingCart, 
      volume: "200+ MT/Month",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1CvUgIc6iwSHLNrlYoY-715eSO0zPStDAA&s" // Green pistachios close-up from Unsplash
    },
    { 
      name: "Turkish Hazelnuts", 
      origin: "Turkey", 
      icon: Factory, 
      volume: "150+ MT/Month",
      image: "https://i.etsystatic.com/54102561/r/il/27d26e/6453322089/il_570xN.6453322089_r9ov.jpg" // Hazelnuts close-up from Pexels
    },
    { 
      name: "Vietnamese Cashew W320", 
      origin: "Vietnam", 
      icon: Store, 
      volume: "1000+ MT/Month",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmwPiqxb2gDgoaIVJq1-7eDNc5nNhELZwoA&s" // Cashew nuts close-up from Unsplash
    },
    { 
      name: "Indonesian Cloves & Nutmeg", 
      origin: "Indonesia", 
      icon: Hotel, 
      volume: "400+ MT/Month",
      image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2025/05/02/4598026-1038924797.jpg?itok=DU4mElu0" // Spices (cloves/nutmeg) close-up from Unsplash
    },
    { 
      name: "Brazilian White Sugar ICUMSA 45", 
      origin: "Brazil", 
      icon: Warehouse, 
      volume: "5000+ MT/Month",
      image: "https://img500.exportersindia.com/product_images/bc-500/dir_115/3444881/brazilian-sugar-icumsa-45-white-refined-sugar-1496398453-3033055.jpeg" // White sugar crystals close-up from Pexels
    },
  ];

  const benefits = [
    { icon: IndianRupee, title: "Best Wholesale Rates", desc: "Direct import prices – no middlemen" },
    { icon: Truck, title: "All India Delivery", desc: "Door delivery in 7–12 days across India" },
    { icon: ShieldCheck, title: "100% Genuine Quality", desc: "Lab tested with COA & original documents" },
    { icon: Clock, title: "Ready Stock Available", desc: "Immediate dispatch from Mumbai & Delhi warehouses" },
    { icon: Warehouse, title: "Bulk & Break-Bulk", desc: "1 container or 1 ton – both possible" },
    { icon: BadgeCheck, title: "GST Invoice + Proper Bills", desc: "Full documentation for your business" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">

      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 overflow-hidden">
        {/* wheat animation background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-2 bg-gradient-to-t from-white to-transparent"
              style={{ height: `${150 + Math.random() * 200}px`, left: `${Math.random() * 100}%` }}
              animate={{ y: [0, -100, 0] }}
              transition={{ duration: 8 + Math.random() * 6, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block mb-8"
          >
            <IndianRupee className="w-32 h-32 mx-auto text-white drop-shadow-2xl" />
          </motion.div>

          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black mb-8"
          >
            Import Premium Imported Dry Fruits
            <br />
            <span className="text-yellow-300">Direct for Indian Market</span>
          </motion.h1>

          <motion.p className="text-3xl md:text-4xl font-bold">
            Best Rates • Ready Stock • All India Delivery
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-center text-green-800 mb-16"
          >
            Our Imported Product Range
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-transparent hover:border-orange-400 transition-all"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1542994980-3e5d8a4a4a4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"; // Fallback to generic nuts
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Icon & Details */}
                  <div className="p-8 text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">{item.origin}</p>
                    <p className="text-gray-600 text-lg">Ready Stock</p>
                    <p className="text-3xl font-black text-orange-600 mt-3">{item.volume}</p>
                    <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition">
                      <PhoneCall className="w-6 h-6" />
                      <a href="tel:+917505266931">
                      Get Price
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-r from-green-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-center text-amber-300 mb-16"
          >
            Why Buy Imported Goods From Us?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center border border-amber-400/30"
                >
                  <Icon className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                  <h3 className="text-2xl font-black mb-4">{benefit.title}</h3>
                  <p className="text-lg text-amber-100">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready Stock Cities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-green-800 mb-12"
          >
            Ready Stock Available At
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-12 text-3xl font-bold">
            {["Mumbai", "Delhi NCR", "Ahmedabad", "Hyderabad", "Bangalore", "Chennai"].map((city, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="bg-gradient-to-br from-orange-400 to-amber-500 text-white px-10 py-6 rounded-2xl shadow-2xl"
              >
                {city}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA – Fixed */}
      <section className="py-32 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-10"
          >
            <Wheat className="w-32 h-32 text-yellow-300" />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black mb-10">
            Need Imported Dry Fruits & Spices?
          </h2>
          <p className="text-3xl md:text-4xl mb-12 font-bold">
            Call / WhatsApp Now for Best Rates in India
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {/* Call Button – Fixed closing tag */}
            <motion.a
              href="tel:+917505266931"
              className="group relative inline-flex items-center gap-6 bg-white text-orange-600 px-16 py-10 rounded-full text-4xl font-black shadow-3xl overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneCall className="w-12 h-12" />
              Call +91 75052 66931
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/917505266931?text=Hello!%20Send%20me%20latest%20rates%20of%20imported%20dry%20fruits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-green-600 hover:bg-green-700 px-16 py-10 rounded-full text-4xl font-bold shadow-3xl"
              whileHover={{ scale: 1.1 }}
            >
              <MessageCircle className="w-12 h-12" />
              WhatsApp Quote
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Import;