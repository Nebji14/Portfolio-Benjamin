import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function DecryptedText({ text, className, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  
  const [displayText, setDisplayText] = useState(() => 
    text.split("").map(() => letters[Math.floor(Math.random() * letters.length)]).join("")
  );
  
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null); // Pour gérer le délai

  useEffect(() => {
    if (!isInView) return;

    // On nettoie tout avant de commencer
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);

    // ON ATTEND (delay) AVANT DE LANCER L'ANIMATION
    timeoutRef.current = setTimeout(() => {
      
      let iteration = 0;
      
      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
        }

        iteration += 1 / 2; 
      }, 30);

    }, delay); // Utilisation du délai passé en prop

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [text, isInView, delay]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}