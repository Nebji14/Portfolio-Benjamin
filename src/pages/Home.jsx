import DecryptedText from "../components/UI/DecryptedText";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden px-6"
    >
      {/* Conteneur Texte */}
      <div className="z-10 w-full md:w-2/3 flex flex-col items-start md:pl-20 mt-10 md:mt-0">
        {/* --- MODIF MOBILE: Conteneur Glassmorphism --- 
            Ce div ajoute un fond flouté UNIQUEMENT sur mobile (md:bg-transparent retire l'effet sur PC) 
            pour que le texte soit lisible sur le drone centré.
        */}
        <div className="w-full p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 md:bg-transparent md:backdrop-blur-none md:border-none md:p-0">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-4 flex items-center gap-3"
          >
            <div className="h-[2px] w-8 bg-cyan-500"></div>
            <span className="text-xs md:text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase">
              Portfolio 2025
            </span>
          </motion.div>

          {/* Nom */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl font-light text-gray-300 tracking-[0.2em] uppercase mb-4 pl-1"
          >
            Benjamin David
          </motion.h2>

          {/* TITRE PRINCIPAL */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[1] font-display mb-6">
            <div className="overflow-hidden">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 pb-2">
                <DecryptedText text="Développeur" delay={1000} />
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 pb-2">
                <DecryptedText text="Web & Mobile" delay={1200} />
              </span>
            </div>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-white/10 pl-6"
          >
            Je transforme vos besoins en applications web et mobiles
            performantes.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-8"
          >
            <a
              href="#projects"
              className="group relative px-6 py-3 bg-white text-black font-bold text-sm rounded-sm overflow-hidden inline-block hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                EXPLORER MON TRAVAIL
              </span>
              <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
          </motion.div>
        </div>{" "}
        {/* Fin du conteneur Glassmorphism */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">
          Scroll Down
        </span>
        <div className="w-px h-12 bg-gray-800 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-cyan-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
