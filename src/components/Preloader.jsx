"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setComplete(true);
          document.body.style.overflow = "";
        },
      });

      const letters = textRef.current.children;



      gsap.set(letters, { opacity: 0, color: "#4b5563" }); 

      tl
        // 1. Smooth Fade In
        .to(letters, {
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
        })
        // 2. Color Change (Gray -> White) - Overlapping slightly for smoothness
        .to(letters, {
          color: "#ffffff",
          duration: 1,
          stagger: 0.05,
          ease: "power2.inOut",
        }, "-=0.4") // Start while fading in
        
        .to({}, { duration: 0.2 }) // Brief hold

        .add("exit") 
        // 3. Exit Animation (Letter Spacing + Fade)
        .to(textRef.current, {
           letterSpacing: "0.5em", // Slightly less aggressive expansion
           opacity: 0,
           duration: 1.2,
           ease: "power3.inOut"
        }, "exit")
        .to(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut", 
          onComplete: () => gsap.set(containerRef.current, { display: "none" })
        }, "exit+=0.2");

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  if (complete) return null;

  const text = "Million Holdings";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      <h1 ref={textRef} className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold flex overflow-hidden tracking-[0.15em] uppercase text-center text-gray-400">
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
