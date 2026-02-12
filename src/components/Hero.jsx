"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const slides = [
  {
    id: 1,
    image: "/banner-1.jpg",
    mainTextPart1: "GLOBAL",
    mainTextPart2: "RECRUITMENT",
    description:
      "Connecting top-tier talent with world-class organizations to drive business success and innovation.",
  },
  {
    id: 2,
    image: "/banner-3.jpg",
    mainTextPart1: "EXPERT",
    mainTextPart2: "CONSULTANCY",
    description:
      "Providing strategic insights and tailored solutions to optimize your workforce and operational efficiency.",
  },
  {
    id: 3,
    image: "/banner-2.jpg",
    mainTextPart1: "CAREER",
    mainTextPart2: "GROWTH",
    description:
      "Empowering professionals to achieve their diverse career goals through our extensive network and guidance.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full h-screen bg-transparent text-white overflow-hidden flex items-center justify-center pt-20 md:pt-0 z-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="w-full h-full z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Content Wrapper */}
            <div className="w-full h-full flex items-center justify-center relative px-4 md:px-0">
              {/* Image Container - Left Side */}
              <div
                className={`absolute left-[5%] md:left-[15%] top-1/2 -translate-y-1/2 w-[85%] md:w-[40%] aspect-video md:aspect-16/10 overflow-hidden z-20 transition-all duration-1000 ease-out ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <img
                  src={slide.image}
                  alt={slide.mainTextPart1}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for integration */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Text Content - Right Side Overlapping */}
              <div
                className={`absolute right-[5%] md:right-[12%] top-1/2 -translate-y-1/2 z-30 flex flex-col items-end text-right transition-all duration-1000 ease-out delay-200 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
              >
                <div className="relative mix-blend-screen pointer-events-none">
                  <h1
                    className={`${montserrat.className} text-5xl md:text-[80px] lg:text-[100px] font-normal tracking-wide leading-[0.85] text-white uppercase`}
                  >
                    <span className="block">{slide.mainTextPart1}</span>
                    <span className="block">{slide.mainTextPart2}</span>
                  </h1>
                </div>

                <div className="max-w-md mt-8 md:mt-10 mr-1 md:mr-2">
                  <p className="text-gray-400 font-serif italic text-base md:text-lg leading-relaxed mb-8 tracking-wide">
                    {slide.description}
                  </p>

                  {/* Button with Offset Border Effect */}
                  <div className="relative inline-block group cursor-pointer pointer-events-auto">
                    <div className="absolute inset-0 border border-white translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <button className="relative bg-[#0a0a0a] text-white px-8 md:px-10 py-3 md:py-4 text-[11px] md:text-xs tracking-[0.2em] font-bold uppercase border border-white/20 hover:bg-white hover:text-black transition-colors duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows - Using larger thin arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-40 cursor-pointer custom-prev text-white opacity-50 hover:opacity-100 transition-opacity">
          <FiArrowLeft size={40} className="stroke-[0.5]" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-40 cursor-pointer custom-next text-white opacity-50 hover:opacity-100 transition-opacity">
          <FiArrowRight size={40} className="stroke-[0.5]" />
        </div>

        {/* Pagination - Bottom Center */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-6">
          {slides.map((_, idx) => (
            <div key={idx} className="flex items-center">
              <span
                className={`text-sm md:text-base font-medium transition-all duration-300 ${currentSlide === idx ? "text-white -translate-y-1 scale-110" : "text-white/40"}`}
              >
                {idx + 1}
              </span>
              {idx < slides.length - 1 && (
                <span
                  className={`ml-6 w-12 h-px transition-colors duration-300 skew-x-[-45deg] origin-left scale-x-125 ${currentSlide === idx ? "bg-white" : "bg-white/20"}`}
                ></span>
              )}
            </div>
          ))}
        </div>
      </Swiper>
    </section>
  );
}
