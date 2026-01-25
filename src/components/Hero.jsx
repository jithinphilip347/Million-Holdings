"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { type: "image", src: "/banner-1.jpg" },
  { type: "video", src: "/banner-2.mp4" },
  { type: "image", src: "/banner-3.jpg" },
  { type: "video", src: "/banner-4.mp4" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      const totalSlides = slides.length;
      const stayDuration = 5; 
      const transitionDuration = 1.5; 

      slideRefs.current.forEach((el, i) => {
        gsap.set(el, { zIndex: i === 0 ? 1 : 0, opacity: i === 0 ? 1 : 0 });
        
        const content = el.querySelector(".slide-content");
        if (slides[i].type === "image") {
          gsap.set(content, { scale: 1 });
        }
      });

      slides.forEach((slide, i) => {
        const nextIndex = (i + 1) % totalSlides;
        const currentSlide = slideRefs.current[i];
        const nextSlide = slideRefs.current[nextIndex];
        const currentContent = currentSlide.querySelector(".slide-content");
        
        tl.addLabel(`slide-${i}`);

        if (slide.type === "image") {
          tl.fromTo(currentContent, 
            { scale: 1 },
            { 
              scale: 1.15, 
              duration: stayDuration + transitionDuration, 
              ease: "none" 
            },
            `slide-${i}`
          );
        }
        
        tl.to({}, { duration: stayDuration }, `slide-${i}`);

        tl.set(nextSlide, { zIndex: 2 }, ">"); 
        
        tl.to(nextSlide, { 
            opacity: 1, 
            duration: transitionDuration,
            ease: "power2.inOut" 
        }, "<"); 
        
        tl.set(currentSlide, { opacity: 0, zIndex: 0 });
        tl.set(nextSlide, { zIndex: 1 });
        
        if (slide.type === "image") {
             tl.set(currentContent, { scale: 1 });
        }
      });

      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0 }} 
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                className="slide-content absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : (
              <div
                className="slide-content absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.src}')` }}
              />
            )}
            <div className="absolute inset-0 bg-black/60 z-10" />
          </div>
        ))}
      </div>

      <div className="relative z-20 w-full px-4 md:px-6 flex flex-col items-center text-center">
        <div ref={textRef} className="max-w-4xl text-white">
          <span className="inline-block py-1 px-3 border border-[#fff] text-[#fff] text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wide uppercase">
            Recruitment Experts
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Connecting <span className="">Talent</span> with <span className="text-[#f01c27]">Opportunity.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            Million holdings with million opportunities
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contain"
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-[#f01c27] text-white font-medium hover:bg-[#d0151f] transition-all duration-300 shadow-lg rounded-none uppercase tracking-wide text-sm md:text-base"
            >
              Connect Now
            </Link>
             <button
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 rounded-none uppercase tracking-wide text-sm md:text-base"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
