import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoaded }) => {
  const { progress } = useProgress();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // When progress reaches 100%, trigger the finish state
    if (progress === 100) {
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        // Wait for the exit animation (1s) before notifying parent
        setTimeout(() => {
          if (onLoaded) onLoaded();
        }, 1000);
      }, 600);

      return () => clearTimeout(finishTimer);
    }
  }, [progress, onLoaded]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020202] text-white overflow-hidden"
        >
          {/* Background Ambient Glows */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[40vw] h-[40vw] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Glowing Ring Loader */}
            <div className="relative w-40 h-40 flex items-center justify-center mb-8">
              {/* Outer faint ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </svg>

              {/* Animated Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#loaderGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 301.59" }}
                  animate={{ strokeDasharray: `${(progress / 100) * 301.59} 301.59` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                <motion.span
                  className="text-3xl font-light tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {Math.round(progress)}
                </motion.span>
                <span className="text-[10px] text-cyan-500/80 uppercase tracking-widest mt-1">
                  System
                </span>
              </div>
            </div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <h2 className="text-xs md:text-sm font-mono text-cyan-400 tracking-[0.4em] uppercase">
                Initialisation
              </h2>
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
