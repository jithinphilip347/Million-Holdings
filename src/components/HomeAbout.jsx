"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { FiArrowRight } from "react-icons/fi";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

export default function HomeAbout() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Image Reveal Animation
      gsap.fromTo(
        imgRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          scale: 1.1,
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom center",
          },
        },
      );

      // 2. Text Reveal Animation (Staggered Lines)
      const textElements = textRef.current.children;
      gsap.fromTo(
        textElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        },
      );

      // 3. Stats Counter Animation
      const stats = statsRef.current.querySelectorAll(".stat-item");
      gsap.fromTo(
        stats,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-32 bg-transparent text-white overflow-hidden z-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-[45%] relative">
            <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden">
              <div ref={imgRef} className="w-full h-full relative">
                <img
                  src="/about-us.png"
                  alt="Corporate Excellence"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Decorative Border Frame */}
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Badge (Example: Years of Excellence) */}
            <div className="absolute -bottom-8 -right-8 md:bottom-10 md:-right-10 bg-[#f01c27] p-8 md:p-10 text-white z-20 hidden md:block">
              <span
                className={`block text-5xl md:text-6xl font-bold ${montserrat.className}`}
              >
                15+
              </span>
              <span className="block text-xs uppercase tracking-widest mt-2">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center relative">
            <div ref={textRef}>
              <h6 className="text-[#f01c27] uppercase tracking-[0.2em] text-sm font-bold mb-6 flex items-center gap-4">
                <span className="w-10 h-px bg-[#f01c27]"></span> About Company
              </h6>

              <h2
                className={`${montserrat.className} text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white`}
              >
                Global Vision <br />
                <span className="font-light text-gray-400">Local Action</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl font-light">
                At Million Holdings International, we bridge the gap between
                exceptional talent and global enterprises. Our rigorous
                selection process and deep industry insights ensure that we find
                the perfect fit for both candidates and organizations.
              </p>

              <div className="flex flex-wrap items-center gap-8 mb-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">
                    50+
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    Partners
                  </span>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">
                    10k+
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    Placements
                  </span>
                </div>
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-white uppercase tracking-[0.15em] text-xs font-bold border-b border-white hover:border-[#f01c27] pb-2 transition-colors duration-300 w-fit"
              >
                Discover More
                <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300 text-[#f01c27]" />
              </Link>
            </div>

            {/* Background Big Text for Aesthetics */}
            <div className="absolute -top-20 -right-20 pointer-events-none opacity-[0.03] select-none z-0">
              <span
                className={`${montserrat.className} text-[200px] font-bold uppercase leading-none`}
              >
                About
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Stats Clean Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 mt-24 pt-10"
        >
          {/* Can add more detailed stats or features here if needed, keeping it minimal for now based on user request for "good design" */}
        </div>
      </div>
    </section>
  );
}
