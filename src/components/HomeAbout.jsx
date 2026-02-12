"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HomeAbout() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Parallax & Reveal
      // Image Reveal
      gsap.fromTo(imgRef.current, 
        { clipPath: "polygon(0 0, 0% 100%, 0% 100%, 0 0)" }, 
        { 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
          duration: 1.2, 
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content Stagger Reveal
      const contentElements = contentRef.current.children;
      gsap.fromTo(contentElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Stats Counter Animation
      const stats = contentRef.current.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        gsap.from(stat, {
           innerHTML: 0,
           duration: 2,
           snap: { innerHTML: 1 },
           scrollTrigger: {
             trigger: stat,
             start: "top 85%",
           }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div ref={imgRef} className="relative h-[300px] md:h-[500px] lg:h-[700px] w-full overflow-hidden shadow-2xl">
              <img 
                src="/about-us.png" 
                alt="Corporate Meeting" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 font-serif text-white">
              We Provide Global <br/>
              <span className="text-[#f01c27]">Recruitment Excellence</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-light">
              At Million Holdings International, we bridge the gap between exceptional talent and global enterprises. Our rigorous selection process and deep industry insights ensure that we find the perfect fit for both candidates and organizations.
            </p>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 font-light">
              With a commitment to integrity and professionalism, we have established ourselves as a premier consultancy service, driving business growth through strategic human capital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 w-full border-t border-white/10 pt-10 mb-10">
              <div className="text-center md:text-left">
                <span className="block text-3xl md:text-5xl font-bold text-white mb-2 stat-number">15+</span>
                <span className="text-[10px] md:text-sm text-gray-400 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-3xl md:text-5xl font-bold text-white mb-2 stat-number">50+</span>
                <span className="text-[10px] md:text-sm text-gray-400 uppercase tracking-wider">Global Partners</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-3xl md:text-5xl font-bold text-white mb-2 stat-number">10k+</span>
                <span className="text-[10px] md:text-sm text-gray-400 uppercase tracking-wider">Placements</span>
              </div>
            </div>

            <Link href="/services" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white hover:text-[#f01c27] transition-colors duration-300">
              <span className="border-b border-white group-hover:border-[#f01c27] pb-1 transition-colors duration-300">Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
