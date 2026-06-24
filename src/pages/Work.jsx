import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaCheckCircle, FaArrowRight, FaPlus, FaMinus, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiThreedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiSanity,
  SiFramer,
} from "react-icons/si";

import StellionImg from "../assets/StellionWeb.webp";
import JulisamaImg from "../assets/Julisama.webp";
import TemplateCommerceImg from "../assets/Template-commerce1.webp";
import TemplateCommerce2Img from "../assets/Template-commerce2.webp";
import TemplateVitrine2Img from "../assets/Template_vitrine2.webp";
import TemplateVitrine4Img from "../assets/Template_vitrine4.webp";
import RollupImg from "../assets/RollUp.webp";
import AnnaImg from "../assets/Photographe.webp";
import PortfolioImg from "../assets/Portfolio2025.webp";

const projects = [
  {
    id: "01",
    title: "StellionWeb",
    category: "Agence Web",
    description: "Site vitrine officiel de ma micro-entreprise StellionWeb.",
    details:
      "Mon agence digitale spécialisée. Site vitrine haute performance utilisant Next.js et Sanity CMS pour une gestion de contenu dynamique. Interface immersive avec animations complexes et architecture moderne.",
    features: ["Performance Next.js", "Design Immersif", "CMS Sanity", "SEO & Vitesse"],
    stack: [SiNextdotjs, SiSanity, SiFramer, SiTailwindcss],
    image: StellionImg,
    color: "indigo",
    link: "https://stellionweb.fr/",
  },
  {
    id: "02",
    title: "Julisama Decor",
    category: "Site Vitrine",
    description: "Site vitrine réalisé sur mesure pour une décoratrice d'intérieur.",
    details:
      "Projet basé sur un de mes templates Next.js personnalisé. Intégration complète avec Sanity pour gérer le portfolio des réalisations et système de contact via Resend.",
    features: ["Gestion de Projet", "Galerie Photo", "Responsive Design", "Contact Email"],
    stack: [SiNextdotjs, SiSanity, SiTailwindcss],
    image: JulisamaImg,
    color: "orange",
    link: "https://julisama.fr/",
  },
  {
    id: "03",
    title: "Master E-commerce",
    category: "Template E-commerce",
    description: "Template e-commerce conçu pour accélérer le développement.",
    details:
      "Le client choisit ce design épuré pour son projet. Le front-end moderne (Next.js, Shadcn, Zustand) est relié à un backend complet pré-configuré en PHP avec une base de données SQL (type Bagisto) pour un déploiement ultra-rapide.",
    features: ["Panier Zustand", "CMS Sanity", "Backend PHP/SQL", "Composants Shadcn"],
    stack: [SiNextdotjs, SiSanity, SiFramer, SiTailwindcss],
    image: TemplateCommerceImg,
    color: "emerald",
    link: "https://template-e-commerce1.vercel.app/",
  },
  {
    id: "04",
    title: "Origin E-commerce",
    category: "Template E-commerce",
    description: "Template e-commerce alternatif pour un lancement rapide.",
    details:
      "Seconde option de design proposée aux clients pour accélérer la création de leur boutique. Utilise le même système de backend tout préparé en PHP/SQL avec une interface frontend audacieuse et des animations fluides.",
    features: ["Panier Zustand", "Backend PHP/SQL", "Design Audacieux", "Animations fluides"],
    stack: [SiNextdotjs, SiSanity, SiFramer, SiTailwindcss],
    image: TemplateCommerce2Img,
    color: "rose",
    link: "https://template-e-commerce2-to-deploy.vercel.app/",
  },
  {
    id: "05",
    title: "Agence Impact",
    category: "Template Vitrine",
    description: "Template minimaliste pour agence ou freelance.",
    details:
      "Modèle de site vitrine épuré conçu pour un déploiement express. Intégration d'animations au défilement avec AOS et stylisation ultra-rapide via Tailwind CSS v4.",
    features: ["Déploiement Rapide", "Animations AOS", "Design Minimaliste", "Tailwind v4"],
    stack: [SiNextdotjs, SiReact, SiTailwindcss],
    image: TemplateVitrine2Img,
    color: "blue",
    link: "https://template2-next.vercel.app/",
  },
  {
    id: "06",
    title: "L'Éclipse",
    category: "Template Vitrine",
    description: "Template immersif pour bar ou événementiel.",
    details:
      "Modèle de site vitrine à l'ambiance nocturne et néon pour accélérer le processus de création. Développé avec Next.js et animé au scroll avec AOS pour une expérience captivante.",
    features: ["Ambiance Nocturne", "Animations AOS", "Lancement Express", "Responsive"],
    stack: [SiNextdotjs, SiReact, SiTailwindcss],
    image: TemplateVitrine4Img,
    color: "fuchsia",
    link: "https://template4-next.vercel.app/",
  },
  {
    id: "07",
    title: "RollUp!",
    category: "FullStack App",
    description: "Plateforme sociale pour rôlistes.",
    details:
      "Application complexe avec relations BDD multiples. Système d'authentification JWT et protection des routes. Architecture MVC pour le backend.",
    features: ["Auth JWT", "Matchmaking", "CRUD Tables", "Profils"],
    stack: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
    image: RollupImg,
    color: "cyan",
  },
  {
    id: "08",
    title: "AnnaStudio",
    category: "Site Vitrine",
    description: "Portfolio photographe minimaliste.",
    details:
      "Site statique optimisé pour le référencement (SEO) et la vitesse de chargement. Utilisation de formats d'images next-gen (WebP).",
    features: ["Responsive", "SEO Friendly", "Fast Load", "Galerie CSS"],
    stack: [SiHtml5, SiCss3],
    image: AnnaImg,
    color: "pink",
  },
  {
    id: "09",
    title: "Portfolio 2025",
    category: "Creative Dev",
    description: "Expérience 3D interactive.",
    details:
      "Intégration de modèles 3D glTF optimisés. Synchronisation des animations au scroll via GSAP et Framer Motion.",
    features: ["3D Interactive", "GSAP Scroll", "React Ecosystem", "Modern UI"],
    stack: [SiReact, SiThreedotjs, SiTailwindcss],
    image: PortfolioImg,
    color: "purple",
  },
];

const ProjectModal = ({ project, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex justify-center px-4 pb-4 items-start pt-28 sm:items-center sm:pt-0 sm:p-8"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        className={`relative w-full max-w-5xl max-h-[80vh] sm:max-h-[85vh] flex flex-col md:flex-row bg-[#0a0a0a] border border-${project.color}-500/30 rounded-2xl shadow-2xl overflow-hidden`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 bg-black/60 hover:bg-white/20 backdrop-blur-md rounded-full text-white border border-white/10 transition-colors shadow-lg"
        >
          <FaTimes size={16} />
        </button>

        <div className="relative shrink-0 w-full h-48 md:w-1/2 md:h-auto bg-[#1a1a1a]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-white/5 animate-pulse" />
          )}
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-90" : "opacity-0"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-none" />
        </div>

        <div className="w-full md:w-1/2 overflow-y-auto custom-scrollbar bg-[#0f0f0f] flex flex-col">
          <div className="p-6 md:p-10 flex flex-col h-full">
            <span className={`text-${project.color}-400 font-mono text-xs font-bold tracking-widest uppercase`}>
              Mission {project.id}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mt-1 mb-4">{project.title}</h3>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-gray-300 uppercase mb-2">Description</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{project.details}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-gray-300 uppercase mb-3">Features</h4>
              <ul className="grid grid-cols-1 gap-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 p-2 rounded-lg border border-white/5">
                    <FaCheckCircle className={`text-${project.color}-500`} size={12} /> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Technologies</p>
                <div className="flex gap-2 flex-wrap">
                  {project.stack.map((Icon, i) => (
                    <div key={i} className="p-2 rounded bg-white/5 border border-white/10 text-gray-300">
                      <Icon size={18} />
                    </div>
                  ))}
                </div>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${project.color}-500/10 border border-${project.color}-500/50 text-${project.color}-400 text-xs font-bold hover:bg-${project.color}-500 hover:text-white transition-all`}
                >
                  EXPLORER <FaExternalLinkAlt size={10} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onClick={() => onClick(project)}
      className="group relative h-64 w-full rounded-xl overflow-hidden border border-white/10 bg-gray-800 cursor-pointer transition-all duration-300 hover:border-white/30 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-[#121212]">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
        )}
        <img
          src={project.image}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? "opacity-50 group-hover:opacity-60" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <div className="flex justify-between items-end">
          <div>
            <span className={`text-${project.color}-400 font-mono text-[10px] font-bold tracking-widest uppercase mb-1 block`}>
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white uppercase leading-none mb-2">{project.title}</h3>
          </div>
          <button className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-${project.color}-500 transition-colors`}>
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="relative w-full min-h-screen py-20 lg:py-0 lg:h-screen px-6 flex items-center justify-center bg-transparent">
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        <div className="hidden lg:block lg:col-span-5 relative"></div>

        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center lg:pt-48">
          <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase font-display">
                Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projets</span>
              </h2>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-xs font-mono text-gray-500 uppercase">
                {showAll ? "Navigation Complète ↓" : "Dernières Missions ↓"}
              </span>
            </div>
          </div>

          <div className="w-full lg:relative lg:flex-1 lg:overflow-hidden lg:max-h-[60vh]">
            <div className="w-full lg:absolute lg:inset-0 lg:overflow-y-auto lg:pr-2 lg:custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                {displayedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                ))}

                {(showAll || projects.length < 4) && (
                  <div className="h-64 rounded-xl border border-white/5 bg-white/5 flex flex-col items-center justify-center text-gray-600 border-dashed transition-all">
                    <span className="text-2xl mb-2">+</span>
                    <span className="font-mono text-xs uppercase text-center px-4">Analyse de nouvelles opportunités...</span>
                  </div>
                )}
              </div>

              <div className="flex justify-center pb-12 mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs tracking-widest hover:bg-white/10 transition-all uppercase group"
                >
                  {showAll ? (
                    <>
                      Voir Moins <FaMinus className="group-hover:rotate-180 transition-transform" />
                    </>
                  ) : (
                    <>
                      Voir plus de projets <FaPlus className="group-hover:rotate-90 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;