import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, Center } from "@react-three/drei";
import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const DroneModel = () => {
  const { scene } = useGLTF("/happy_drone.glb");
  const droneRef = useRef();
  const mouseRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useLayoutEffect(() => {
    if (!droneRef.current) return;
    const drone = droneRef.current;

    gsap.killTweensOf(drone.position);
    gsap.killTweensOf(drone.rotation);
    gsap.killTweensOf(drone.scale);

    let mm = gsap.matchMedia();

    // CONFIG PC
    mm.add("(min-width: 1024px)", () => {
      // HOME
      gsap.set(drone.position, { x: 3, y: 2, z: -4 });
      gsap.set(drone.rotation, { x: 0, y: -0.5, z: 0 });
      gsap.set(drone.scale, { x: 0, y: 0, z: 0 });

      gsap.to(drone.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2,
        ease: "elastic.out(1, 0.75)",
        delay: 0.5,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // ABOUT
      tl.to(drone.position, { x: -5, y: 2, z: -8 }, "step1").to(
        drone.rotation,
        { x: 0.2, y: 0.8, z: 0.1 },
        "step1"
      );

      // SKILLS
      tl.to(drone.position, { x: 5, y: 2.2, z: -6 }, "step2").to(
        drone.rotation,
        { x: -0.2, y: -0.5, z: -0.1 },
        "step2"
      );

      //  WORK
      tl.to(drone.position, { x: -4, y: 2, z: -5 }, "step3").to(
        drone.rotation,
        { x: 0.1, y: 0.5, z: 0 },
        "step3"
      );

      // CONTACT
      tl.to(drone.position, { x: 0, y: 2.2, z: -3 }, "step4").to(
        drone.rotation,
        { x: 0, y: 0, z: 0 },
        "step4"
      );
    });

    // CONFIG MOBILE
    mm.add("(max-width: 1023px)", () => {
      gsap.set(drone.position, { x: 0, y: 2.5, z: -7 });
      gsap.set(drone.rotation, { x: 0.2, y: 0, z: 0 });
      gsap.set(drone.scale, { x: 0, y: 0, z: 0 });

      gsap.to(drone.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 2,
        ease: "elastic.out(1, 0.75)",
        delay: 0.5,
      });
      // PAS DE SCROLL
    });

    return () => mm.revert();
  }, []);

  useFrame(() => {
    if (window.innerWidth >= 1024 && mouseRef.current) {
      mouseRef.current.rotation.y = THREE.MathUtils.lerp(
        mouseRef.current.rotation.y,
        mousePos.current.x * 0.3,
        0.05
      );
      mouseRef.current.rotation.x = THREE.MathUtils.lerp(
        mouseRef.current.rotation.x,
        -mousePos.current.y * 0.2,
        0.05
      );
    }
  });

  return (
    <group ref={droneRef}>
      <Float
        speed={4}
        rotationIntensity={0.5}
        floatIntensity={2}
        floatingRange={[-0.2, 0.2]}
      >
        <Center>
          <group ref={mouseRef}>
            <primitive object={scene} scale={20} />
          </group>
        </Center>
      </Float>
    </group>
  );
};

const TechBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020202] overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600 rounded-full blur-[80px] md:blur-[120px] opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-cyan-600 rounded-full blur-[80px] md:blur-[120px] opacity-20 pointer-events-none"
      />
      <Canvas
        camera={{ position: [0, 0, 12], fov: 30 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
      >
        <ambientLight intensity={2.5} />
        <directionalLight position={[0, 0, 5]} intensity={2} />
        <spotLight
          position={[15, 5, 10]}
          angle={0.5}
          penumbra={1}
          intensity={200}
          color="#06b6d4"
        />
        <spotLight
          position={[-15, -5, 10]}
          angle={0.5}
          penumbra={1}
          intensity={200}
          color="#d946ef"
        />
        <Environment preset="city" />
        <DroneModel />
      </Canvas>
    </div>
  );
};

export default TechBackground;
