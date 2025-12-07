import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";

import LogoImg from "../assets/Logo.webp";

const Contact = () => {
  // État pour gérer l'ouverture/fermeture des Mentions Légales
  const [showLegal, setShowLegal] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-between pt-20 lg:pt-0"
    >
      {/* CONTENU PRINCIPAL */}
      <div className="grow flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          {/* 1. COLONNE GAUCHE : INFOS CONTACT (3 colonnes) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 flex flex-col space-y-8 z-10"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase font-display mb-2 leading-tight">
                Let's <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
                  Talk
                </span>
              </h2>
              <p className="text-gray-400 text-sm mt-4 max-w-xs">
                Disponible pour commencer a travailler ensemble.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <a href="mailto:bendav@outlook.fr" className="block group">
                <div className="flex items-center space-x-4 text-gray-300 transition-colors group-hover:text-cyan-400">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-widest">
                      Email
                    </span>
                    <span className="font-mono text-lg break-all">
                      bendav@outlook.fr
                    </span>
                  </div>
                </div>
              </a>

              {/* Téléphone */}
              <a href="tel:+33609136867" className="block group">
                <div className="flex items-center space-x-4 text-gray-300 transition-colors group-hover:text-purple-400">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-purple-400/50 transition-colors">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-widest">
                      Téléphone
                    </span>
                    <span className="font-mono text-lg">06 09 13 68 67</span>
                  </div>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="p-4 bg-white/5 rounded-full border border-white/10">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-widest">
                    Adresse
                  </span>
                  <span className="font-mono text-sm leading-tight">
                    68 rue de Cassel
                    <br />
                    62430 Sallaumines, France
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. COLONNE MILIEU : ESPACE DRONE */}
          <div className="hidden lg:block lg:col-span-6 h-full pointer-events-none"></div>

          {/* 3. COLONNE DROITE : RÉSEAUX  */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end z-10 space-y-6"
          >
            {/* Carte GitHub */}
            <a
              href="https://github.com/Nebji14"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center justify-between transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:-translate-x-2">
                <div className="flex items-center space-x-4">
                  <FaGithub
                    size={32}
                    className="text-gray-300 group-hover:text-white"
                  />
                  <div>
                    <h3 className="text-white font-bold text-lg">GitHub</h3>
                    <p className="text-xs text-gray-500">Voir mes repos</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                  ↗
                </div>
              </div>
            </a>

            {/* Carte LinkedIn */}
            <a
              href="https://www.linkedin.com/in/benjamin-david-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center justify-between transition-all duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 group-hover:-translate-x-2">
                <div className="flex items-center space-x-4">
                  <FaLinkedin
                    size={32}
                    className="text-gray-300 group-hover:text-blue-400"
                  />
                  <div>
                    <h3 className="text-white font-bold text-lg">LinkedIn</h3>
                    <p className="text-xs text-gray-500">Mon parcours pro</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20">
                  ↗
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* FOOTER FINAL */}
      <footer className="w-full py-8 mt-10 lg:mt-0 border-t border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="w-full max-w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* LOGO + Copyright */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={LogoImg}
                alt="Logo Benjamin David"
                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />
            </div>
            <div className="text-left">
              <span className="block text-white font-bold tracking-widest text-sm uppercase">
                BENJAMIN DAVID
              </span>
              <span className="text-[10px] text-gray-500 font-mono">
                © 2025 Portfolio de Benjamin David.
              </span>
            </div>
          </div>

          {/* Liens Rapides + MENTIONS LÉGALES */}
          <div className="flex items-center space-x-6">
            {/* Bouton pour ouvrir les mentions légales */}
            <button
              onClick={() => setShowLegal(true)}
              className="text-[10px] md:text-xs text-gray-500 hover:text-white transition-colors font-mono uppercase border-b border-transparent hover:border-gray-500"
            >
              Mentions Légales
            </button>

            <span className="text-gray-700">|</span>

            <a
              href="mailto:bendav@outlook.fr"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="tel:+33609136867"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <FaPhone size={18} />
            </a>
            <a
              href="https://github.com/Nebji14"
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-david-dev"
              target="_blank"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* MODALE MENTIONS LÉGALES */}
      <AnimatePresence>
        {showLegal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 flex items-center justify-center p-4"
          >
            {/* Fond sombre */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setShowLegal(false)}
            ></div>

            {/* Contenu de la modale */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-[#0f0f0f] border border-white/10 p-8 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto custom-scrollbar shadow-2xl"
            >
              <button
                onClick={() => setShowLegal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <h3 className="text-2xl font-bold text-white mb-6 font-display uppercase">
                Mentions Légales
              </h3>

              <div className="space-y-6 text-sm text-gray-400 font-mono leading-relaxed">
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                    1. Éditeur du site
                  </h4>
                  <p>
                    Le présent site (Portfolio2025) est édité par{" "}
                    <strong>Benjamin David</strong>, agissant en tant que
                    particulier.
                  </p>
                  <p className="mt-1">
                    <strong>Adresse :</strong> 68 rue de Cassel, 62430
                    Sallaumines, France
                    <br />
                    <strong>Email :</strong>{" "}
                    <a
                      href="mailto:bendav@outlook.fr"
                      className="text-cyan-400 hover:underline"
                    >
                      bendav@outlook.fr
                    </a>
                    <br />
                    <strong>Téléphone :</strong> 06 09 13 68 67
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                    2. Hébergement
                  </h4>
                  <p>
                    Le site est hébergé par <strong>GitHub, Inc.</strong>
                    <br />
                    Adresse : 88 Colin P Kelly Jr St, San Francisco, CA 94107,
                    United States.
                    <br />
                    Site web :{" "}
                    <a
                      href="https://pages.github.com/"
                      target="_blank"
                      className="text-cyan-400 hover:underline"
                    >
                      pages.github.com
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                    3. Propriété Intellectuelle
                  </h4>
                  <p>
                    L'ensemble de ce site (structure, design, textes, images)
                    relève de la législation française et internationale sur le
                    droit d'auteur et la propriété intellectuelle.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                    4. Données Personnelles
                  </h4>
                  <p>
                    Ce site ne collecte aucune donnée personnelle et n'utilise
                    pas de cookies de traçage.
                  </p>
                </div>

                {/* CRÉDITS 3D */}
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                    5. Crédits & Attributions
                  </h4>
                  <p>
                    Certains éléments graphiques (Modèles 3D) sont utilisés sous
                    licence Creative Commons Attribution (CC BY 4.0).
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      <strong>Modèle 3D "Happy Drone" :</strong> <br />
                      Créé par{" "}
                      <a
                        href="https://sketchfab.com/3d-models/happy-drone-e5ecdda2b94b44da893bd80a83e64271"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        rick_merks
                      </a>{" "}
                      sur Sketchfab.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <button
                  onClick={() => setShowLegal(false)}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-xs uppercase tracking-widest"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
