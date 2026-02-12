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

const services = [
  {
    id: 1,
    num: "01",
    title: "Strategic Consulting",
    description:
      "Driving operational efficiency and sustainable growth through data-driven insights and expert guidance.",
    categories: ["Business Strategy", "Operations", "Growth", "Efficiency"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    num: "02",
    title: "Talent Acquisition",
    description:
      "Connecting organizations with world-class leadership and building high-performance teams for the future.",
    categories: ["Executive Search", "Recruitment", "HR Consulting"],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    num: "03",
    title: "Market Analysis",
    description:
      "Deep insights to navigate global market dynamics, identify opportunities, and mitigate risks effectively.",
    categories: ["Market Research", "Data Analysis", "Trends", "Forecasting"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 4,
    num: "04",
    title: "Financial Advisory",
    description:
      "Maximizing value through expert financial planning, risk management, and strategic investment advice.",
    categories: [
      "Financial Planning",
      "Risk Management",
      "Investment",
      "Audit",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function HomeServices() {
  const containerRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      serviceRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const img = ref.querySelector(".service-img");

        // Parallax Effect
        gsap.fromTo(
          img,
          { y: "-20%" },
          {
            y: "20%",
            ease: "none",
            scrollTrigger: {
              trigger: ref,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 bg-transparent text-white z-10"
    >
      {/* Header Section Restored from Image */}
      <div className="relative container mx-auto px-6 mb-20 z-10 w-full pt-10">
        {/* Background Services Text */}
        <div className="absolute top-0 left-0 -translate-y-1/2 md:-translate-y-1/3 pointer-events-none z-0">
          <span
            className={`${montserrat.className} text-[120px] md:text-[200px] font-bold uppercase leading-none opacity-[0.04] text-white select-none block`}
          >
            Services
          </span>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mt-12 md:mt-20">
          <div>
            <h6 className="text-[#f01c27] uppercase tracking-[0.2em] text-sm font-bold mb-6 flex items-center gap-4">
              <span className="w-10 h-px bg-[#f01c27]"></span> What We Do
            </h6>
            <h2
              className={`${montserrat.className} text-4xl md:text-6xl font-bold leading-tight`}
            >
              Expertise That <br />
              <span className="text-gray-500 font-light">Delivers Results</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border border-white/20 hover:border-[#f01c27] hover:bg-[#f01c27] transition-all duration-300 rounded-full text-sm uppercase tracking-widest font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 md:gap-32">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="w-full"
          >
            {/* Full Width Image Container */}
            <div className="w-full h-[300px] md:h-[500px] overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="service-img w-full h-[140%] object-cover absolute top-0 left-0"
              />
            </div>

            {/* Content Below Image */}
            <div className="container mx-auto px-6 mt-24 md:mt-32">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 border-b border-white/20 pb-12">
                {/* Title Section */}
                <div className="w-full md:w-1/3">
                  <span
                    className={`${montserrat.className} text-sm text-[#f01c27] font-bold block mb-2`}
                  >
                    [{service.num}]
                  </span>
                  <h3
                    className={`${montserrat.className} text-2xl md:text-4xl font-bold`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description Section */}
                <div className="w-full md:w-1/3">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Categories/Tags Section */}
                <div className="w-full md:w-1/3">
                  <h6 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                    Categories
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {service.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-300 hover:border-[#f01c27] transition-colors duration-300 cursor-default"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
