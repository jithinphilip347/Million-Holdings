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

      gsap.set(letters, { opacity: 0, color: "#9ca3af" }); 

      const stepDuration = 1.0; 
      const staggerAmount = 0.2; 

      tl
        .to(letters, {
          opacity: 1,
          duration: stepDuration,
          stagger: staggerAmount,
          ease: "power3.out",
        }, "start")
        
        .to(letters, {
          color: "#ffffff",
          duration: stepDuration,
          stagger: staggerAmount,
          ease: "power3.out",
        }, `start+=${staggerAmount}`) 

        .to({}, { duration: 0.5 })

        .add("exit") 
        .to(textRef.current, {
           letterSpacing: "1em", 
           duration: 1.5,
           ease: "power2.inOut"
        }, "exit")
        .to(containerRef.current, {
          opacity: 0,
          scale: 1.1, 
          duration: 1.5,
          ease: "power2.inOut",
        }, "exit");

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
      <h1 ref={textRef} className="text-4xl md:text-6xl font-bold flex overflow-hidden tracking-[0.2em] uppercase text-center">
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
