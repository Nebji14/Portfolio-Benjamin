import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiAdobephotoshop,
  SiSupabase,
  SiNetlify,
  SiThreedotjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbInfinity } from "react-icons/tb";

// --- DONNÉES ---
const skillCategories = [
  {
    title: "Front-End",
    color: "cyan",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
      { name: "Framer Motion", icon: SiFramer, color: "#E10098" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
    ],
  },
  {
    title: "Back-End",
    color: "purple",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    title: "Outils & CI/CD",
    color: "pink",
    items: [
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
    ],
  },
  {
    title: "Conception & Design",
    color: "orange",
    items: [
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Looping", icon: TbInfinity, color: "#FF4785" },
    ],
  },
];

// --- COMPOSANT CARTE "LUMINOUS" ---
const SkillCard = ({ title, items, color, index, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mapping des couleurs pour le gradient dynamique
  const colorMap = {
    cyan: "rgba(6, 182, 212, 0.15)",
    purple: "rgba(139, 92, 246, 0.15)",
    pink: "rgba(236, 72, 153, 0.15)",
    orange: "rgba(249, 115, 22, 0.15)",
  };

  const gradientColor = colorMap[color] || colorMap.cyan;

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col h-full bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors ${className}`}
    >
      {/* EFFET DE GLOW SOURIS */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 80%)`,
        }}
      />

      {/* Header HUD */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 relative z-10">
        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">
          {title}
        </h3>
        <div
          className={`w-2 h-2 rounded-full bg-${color}-500 shadow-[0_0_10px_currentColor]`}
        />
      </div>

      {/* Grille d'icônes */}
      <div
        className={`p-6 gap-6 relative z-10 ${
          items.length <= 4
            ? "flex flex-wrap justify-around items-center"
            : "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5"
        }`}
      >
        {items.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 group/icon relative"
          >
            {/* Icône */}
            <div className="relative p-3 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 group-hover/icon:border-white/20 group-hover/icon:bg-white/10 group-hover/icon:-translate-y-1">
              <skill.icon
                size={28}
                style={{ color: skill.color }}
                className="opacity-70 transition-all duration-300 group-hover/icon:opacity-100 group-hover/icon:scale-110 drop-shadow-lg"
              />
            </div>

            {/* Tooltip */}
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 absolute -bottom-4 whitespace-nowrap z-20 bg-black/80 px-1 rounded">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-32 px-6 flex flex-col justify-center"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* CONTENU (Gauche - 7 colonnes) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-12">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            {/* MODIF : "Stack Technique" */}
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase font-display">
              Stack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Technique
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mt-4"></div>
          </motion.div>

          {/* GRILLE BENTO OPTIMISÉE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. FRONT-END (Prend toute la largeur en haut) */}
            <div className="md:col-span-2">
              <SkillCard {...skillCategories[0]} index={0} color="cyan" />
            </div>

            {/* 2. BACK-END (1 colonne) */}
            <SkillCard {...skillCategories[1]} index={1} color="purple" />

            {/* 3. OUTILS (1 colonne) */}
            <SkillCard {...skillCategories[2]} index={2} color="pink" />

            {/* 4. DESIGN (Toute la largeur en bas, compact) */}
            <div className="md:col-span-2">
              <SkillCard
                {...skillCategories[3]}
                index={3}
                color="orange"
                className="h-auto"
              />
            </div>
          </div>
        </div>

        {/* ESPACE DRONE (Droite - 5 colonnes) */}
        {/* MODIF : Suppression des traits décoratifs, zone vide pour le drone */}
        <div className="hidden lg:block lg:col-span-5 relative">
          {/* Le drone viendra se placer ici grâce au TechBackground */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
