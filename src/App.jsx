import { Suspense, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import TechBackground from "./components/Canvas/TechBackground";

// Smooth Scroll
function SmoothScrollManager() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (!target || !target.hash || !target.hash.startsWith("#")) return;
      e.preventDefault();
      const element = document.querySelector(target.hash);
      if (!element) return;
      const duration = 1500;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeOutCubic(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
      function easeOutCubic(t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
      }
      requestAnimationFrame(animation);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return null;
}

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-white font-sans selection:bg-cyan-500/30 selection:text-white">
      <SmoothScrollManager />

      <Suspense fallback={null}>
        <TechBackground />
      </Suspense>

      <Header />

      <div className="relative z-10 flex flex-col w-full">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </main>
  );
}

export default App;
