"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ComingSoon() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling - Optimized settings
    const lenis = new Lenis({
      duration: 1.5, // Slower duration for smoother feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Context for GSAP animations
    let ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline();

      tl.from(textRef.current.querySelectorAll(".animate-text"), {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
      })
      .from(".hero-line", {
        scaleX: 0,
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.8");

      // Features/Details Reveal
      gsap.from(".feature-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        },
      });

      // Footer Reveal
      gsap.from(footerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Video - Fixed & Premium */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-image w-full h-full object-cover opacity-50 scale-105 filter grayscale-[30%]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />
      </div>

      <header className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-50" style={{ fontFamily: "Avenir, 'Nunito', sans-serif" }}>
          <a href="#" className="text-sm uppercase tracking-[0.15em] hover:text-[#f01c27] transition-colors duration-300 font-medium w-24 text-center">Home</a>
          
          <div className="flex-grow flex justify-center">
             <img src="/logo-white.png" alt="Million Holdings Logo" className="h-20 md:h-28 w-auto object-contain" />
          </div>

          <a href="#" className="text-sm uppercase tracking-[0.15em] hover:text-[#f01c27] transition-colors duration-300 font-medium w-24 text-center">Contact</a>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-4">
        <div ref={textRef} className="text-center max-w-6xl mx-auto flex flex-col items-center">
          
          <h1 className="animate-text text-5xl md:text-7xl lg:text-9xl font-medium leading-tight text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Coming <span className="text-[#8c8c8c]">Soon</span>
          </h1>

          <div className="hero-line w-24 h-[1px] bg-[#f01c27] mb-10"></div>

          <p className="animate-text text-gray-300 text-sm md:text-lg tracking-wider max-w-xl mx-auto font-light leading-relaxed" style={{ fontFamily: "Avenir, 'Nunito', sans-serif" }}>
            Million holdings with million opportunities<br className="hidden md:block"/> 
          </p>
      
          <button className="animate-text mt-12 px-10 py-4 border border-[#f01c27]/30 text-[#f01c27] hover:bg-[#f01c27] hover:text-white transition-all duration-500 uppercase tracking-[0.2em] text-xs md:text-sm font-medium">
            Get Notified
          </button>
        </div>
      </section>

      {/* Expertise / Details Section */}
      <section className="features-section relative z-10 w-full py-20 bg-black/50 backdrop-blur-sm border-t border-white/5">
         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 text-center max-w-4xl">
            {[
              {
                title: "Vision",
                desc: "To be the provider of choice for our client's recruitment solutions. Our executive recruitment and executive search consultants operate with the highest levels of professionalism, integrity and ethics. We strive to always exceed our client's Expectations by adding real value to their business."
              },
              {
                title: "Mission",
                desc: "To provide professional & efficient recruitment solution to meet each client's needs & requirements. To provide a bridge for individuals to career opportunities to achieve their career goal."
              }
            ].map((item, i) => (
              <div key={i} className="feature-item p-8 border border-white/5 hover:border-[#f01c27]/30 transition-colors duration-300 bg-white/5 rounded-sm">
                <h3 className="text-2xl text-[#f01c27] mb-4 font-serif">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
         </div>
      </section>

      {/* Newsletter / Footer Section */}
      <section ref={footerRef} className="relative z-10 w-full py-24 bg-[#050505] text-white flex flex-col items-center border-t border-white/5">
        <div className="container px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stay Informed
          </h2>
          <p className="text-gray-500 mb-10 text-sm tracking-wide">Be the first to know when we launch.</p>
          
          <form className="w-full flex flex-col md:flex-row gap-4 mb-12" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-transparent border-b border-gray-700 py-3 px-2 text-white placeholder-gray-600 focus:border-[#f01c27] focus:outline-none transition-colors"
                style={{ fontFamily: "Avenir, 'Nunito', sans-serif" }}
                required
            />
            <button type="submit" className="px-8 py-3 bg-[#f01c27] text-white font-semibold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300">
                Subscribe
            </button>
          </form>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-sm group"
          >
            {/* WhatsApp Icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c1.005.572 1.943.832 3.209.832 3.182 0 5.768-2.586 5.768-5.767s-2.586-5.767-5.767-5.767zm6.521 1.8h-.004a8.67 8.67 0 0 0-5.87-2.6c-4.785 0-8.674 3.886-8.678 8.667a8.6 8.6 0 0 0 1.282 4.41l-1.396 5.1 5.215-1.368a8.64 8.64 0 0 0 4.153 1.054h.004c4.786 0 8.675-3.886 8.679-8.667a8.65 8.65 0 0 0-3.385-6.596z"/>
            </svg>
            Chat on WhatsApp
          </a>

          <footer className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest gap-4">
             <span>&copy; 2026 Million Holdings International.</span>
             <div className="flex gap-6">
                <a href="#" className="hover:text-[#f01c27] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#f01c27] transition-colors">Twitter</a>
             </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
