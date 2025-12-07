import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUserAstronaut,
  FaCode,
} from "react-icons/fa";
import BenPhoto from "../assets/Ben.webp";

// COMPOSANT CARTE BENTO
const BentoCard = ({ children, className, delay = 0 }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`group relative border border-white/10 bg-gray-900/60 backdrop-blur-md overflow-hidden rounded-xl hover:border-cyan-500/30 transition-colors duration-500 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative h-full p-6 flex flex-col justify-center">
        {children}
      </div>
    </motion.div>
  );
};

// COMPOSANT TRUST BAR
const InfiniteMarquee = ({ items }) => {
  return (
    <div className="relative flex overflow-hidden w-full mask-linear-fade">
      <motion.div
        className="flex gap-10 whitespace-nowrap py-2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest"
          >
            <span className="text-cyan-500">❖</span>
            {item}
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-10 bg-linear-to-r from-[#020202]/0 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-10 bg-linear-to-l from-[#020202]/0 to-transparent z-10"></div>
    </div>
  );
};

// COMPOSANT ABOUT
const About = () => {
  const softSkills = [
    "Autonomie",
    "Rigueur",
    "Curiosité",
    "Esprit d'équipe",
    "Résolution",
    "Adaptabilité",
    "Communication",
    "Créativité",
  ];

  return (
    <section
      id="about"
      className="relative w-full pt-48 pb-24 px-6 min-h-screen flex flex-col justify-start"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* ESPACE DRONE (Gauche) */}
        <div className="hidden lg:block lg:col-span-5"></div>

        {/* CONTENU (Droite) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-8">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
              À Propos
            </h2>
            <div className="h-1 w-16 bg-linear-to-r from-cyan-500 to-purple-500 mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/*  PROFIL */}
            <BentoCard className="md:col-span-2 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Photo */}
                <div className="relative shrink-0">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 transition-transform group-hover:rotate-0 duration-500">
                    <img
                      src={BenPhoto}
                      alt="Benjamin David"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Dev
                  </div>
                </div>

                {/* Texte de Présentation */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center md:justify-start gap-2">
                    Benjamin David{" "}
                    <span className="text-gray-500 font-normal text-sm">
                      / Profil
                    </span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Développeur exigeant, je place la structure et la{" "}
                    <strong>performance</strong> au cœur de mes projets. Je
                    produis un code propre et optimisé pour garantir une
                    expérience utilisateur fluide et sans faille.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Ma plus grande qualité est ma{" "}
                    <strong>capacité d'adaptation</strong>. Face à un bug ou une
                    nouvelle techno, je suis tenace et analytique. Je transforme
                    la complexité en solutions techniques efficaces.
                  </p>
                </div>
              </div>

              <div className="absolute top-0 right-0 p-4 opacity-5">
                <FaUserAstronaut size={100} />
              </div>
            </BentoCard>

            {/*  FORMATION */}
            <BentoCard delay={0.1}>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-purple-500" /> Formation
              </h3>
              <ul className="space-y-5">
                <li className="relative pl-4 border-l-2 border-purple-500/30">
                  <span className="block text-white font-bold text-sm">
                    Titre Professionnel DWWM
                  </span>
                  <span className="text-xs text-purple-400 font-mono mb-1">
                    Niveau 5 (Bac+2)
                  </span>
                  <span className="text-xs text-gray-500 block">
                    Centre SOFIP • 2025
                  </span>
                </li>
                <li className="relative pl-4 border-l-2 border-purple-500/30">
                  <span className="block text-white font-bold text-sm">
                    Baccalauréat Scientifique
                  </span>
                  <span className="text-xs text-gray-500 block">
                    Lycée Condorcet Lens • 2014
                  </span>
                </li>
              </ul>
            </BentoCard>

            {/*  PARCOURS */}
            <BentoCard delay={0.2}>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <FaBriefcase className="text-pink-500" /> Parcours
              </h3>
              <ul className="space-y-5">
                <li className="relative pl-4 border-l-2 border-pink-500/30">
                  <span className="block text-white font-bold text-sm">
                    Technicien Préleveur Air
                  </span>
                  <span className="text-xs text-gray-500 block">
                    CERECO • 2019-2024
                  </span>
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                    Rigueur & Procédures
                  </span>
                </li>
                <li className="relative pl-4 border-l-2 border-pink-500/30">
                  <span className="block text-white font-bold text-sm">
                    Promoteur des Ventes
                  </span>
                  <span className="text-xs text-gray-500 block">
                    Multi-marques • 2018-2019
                  </span>
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                    Relation Client
                  </span>
                </li>
              </ul>
            </BentoCard>

            {/* TRUST BAR */}
            <BentoCard
              className="md:col-span-2 py-4 bg-linear-to-r from-cyan-900/10 to-purple-900/10"
              delay={0.3}
            >
              <div className="flex flex-col justify-center h-full">
                <h4 className="text-xs font-bold text-cyan-500 uppercase mb-3 text-center tracking-[0.2em]">
                  ATOUTS PERSONNELS
                </h4>
                <InfiniteMarquee items={softSkills} />
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
