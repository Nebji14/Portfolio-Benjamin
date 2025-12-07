import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.webp"; // Vérifie l'extension

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

// --- 1. LIEN DESKTOP (Au survol) ---
const ScrambleLink = ({ href, label, isActive, onClick }) => {
  const [displayText, setDisplayText] = useState(label);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  const intervalRef = useRef(null);

  const startScramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) return label[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= label.length) clearInterval(intervalRef.current);
      iteration += 1 / 3;
    }, 30);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setDisplayText(label);
  };

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      className="relative px-5 py-2 group overflow-hidden"
    >
      <span
        className={`relative z-10 font-mono text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
          isActive ? "text-black" : "text-gray-300 group-hover:text-cyan-400"
        }`}
      >
        {displayText}
      </span>
      {isActive && (
        <motion.div
          layoutId="nav-background"
          className="absolute inset-0 bg-cyan-500 z-0 rounded-sm"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      {!isActive && (
        <span className="absolute bottom-0 left-0 w-full h-px bg-cyan-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left" />
      )}
    </a>
  );
};

// --- 2. LIEN MOBILE (Décryptage LENT / CINÉMATIQUE) ---
const MobileDecryptedLink = ({ href, label, index, isActive, onClick }) => {
  const [displayText, setDisplayText] = useState(label);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    let iteration = 0;

    // MODIF : Vitesse ralentie pour bien voir l'effet
    const scramble = setInterval(() => {
      setDisplayText(() =>
        label
          .split("")
          .map((letter, i) => {
            // Si l'index est plus petit que l'itération, on affiche la vraie lettre
            if (i < iteration) return label[i];
            // Sinon on affiche un caractère random
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      // Condition de fin
      if (iteration >= label.length) {
        clearInterval(scramble);
      }

      // MODIF : On incrémente doucement (0.2 au lieu de 0.5)
      // Plus ce chiffre est petit, plus le décryptage est long
      iteration += 0.2;
    }, 60); // MODIF : Délai entre chaque changement (60ms au lieu de 40ms)

    return () => clearInterval(scramble);
  }, [label]);

  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`text-4xl md:text-5xl font-black font-display uppercase tracking-tighter transition-all duration-300 flex items-baseline gap-4 ${
        isActive ? "text-cyan-500" : "text-gray-600 hover:text-white"
      }`}
    >
      <span className="text-sm font-mono tracking-widest opacity-50 text-white">
        0{index + 1}
      </span>
      <span>{displayText}</span>
    </motion.a>
  );
};

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // nav items are a stable module-level constant; run this effect once
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });
    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent"
      >
        <div className="flex-1 flex justify-start">
          <a href="#home" className="relative z-50 group">
            <img
              src={logo}
              alt="Logo"
              className="h-12 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => (
            <ScrambleLink
              key={item.id}
              {...item}
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </nav>

        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10 pointer-events-none">
              {Array.from({ length: 400 }).map((_, i) => (
                <div key={i} className="border border-white/5" />
              ))}
            </div>

            <nav className="flex flex-col gap-8 relative z-10 text-left">
              {NAV_ITEMS.map((item, index) => (
                <MobileDecryptedLink
                  key={item.id}
                  {...item}
                  index={index}
                  isActive={activeTab === item.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </nav>

            <div className="absolute bottom-10 w-full text-center">
              <p className="text-gray-600 font-mono text-xs tracking-[0.2em]">
                SYSTEM READY
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
