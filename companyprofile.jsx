import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa";
import config from "./config";

export default function CompanyProfile() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors">
      <header className="text-center py-10 bg-gray-100 dark:bg-gray-800 shadow">
        <h1 className="text-4xl font-bold">{config.companyName}</h1>
        <p className="text-lg mt-2">{config.slogan}</p>
        <button
          className="mt-4 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <nav className="flex justify-center gap-6 bg-gray-200 dark:bg-gray-700 py-4 text-sm font-medium">
        <a href="#about">Tentang</a>
        <a href="#services">Layanan</a>
        <a href="#gallery">Galeri</a>
        <a href="#contact">Kontak</a>
      </nav>

      <section className="hero text-center py-16 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">{config.heroTitle}</h1>
          <p className="text-lg">{config.heroSubtitle}</p>
        </motion.div>
      </section>

      <section id="about" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
        <p>{config.about}</p>
      </section>

      <section id="services" className="bg-gray-100 dark:bg-gray-800 p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Layanan Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {config.services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Galeri</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {config.gallery.map((url, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }}>
                <img
                  src={url}
                  alt={`Galeri ${idx + 1}`}
                  className="rounded shadow w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 dark:bg-gray-800 p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Kontak Kami</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p className="mb-4">Hubungi kami melalui platform berikut:</p>
              <div className="flex gap-4 text-2xl">
                <a href={`https://wa.me/${config.contact.whatsapp}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href={`https://instagram.com/${config.contact.instagram}`} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href={`https://facebook.com/${config.contact.facebook}`} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href={`https://x.com/${config.contact.x}`} target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              </div>
              <form action={`https://wa.me/${config.contact.whatsapp}`} method="get" className="mt-6 space-y-2">
                <input type="text" name="text" placeholder="Tulis pesan Anda..." className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Kirim ke WhatsApp</button>
              </form>
            </div>
            <div className="flex-1">
              <iframe
                className="w-full h-48 rounded"
                src={config.mapEmbed}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 bg-gray-200 dark:bg-gray-900 text-sm">
        <p>&copy; 2025 {config.companyName}. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
