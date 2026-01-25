"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const sideNavRef = useRef(null);
  const overlayRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Header Intro Animation
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, headerRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Open Menu
      setIsMenuOpen(true);
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.5,
        pointerEvents: "auto",
        ease: "power2.out",
      });
      gsap.to(sideNavRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });
      // Stagger links animation
      gsap.fromTo(sideNavRef.current.querySelectorAll(".nav-link"), 
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
      );
    } else {
      // Close Menu
      gsap.to(sideNavRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
        ease: "power2.in",
        onComplete: () => setIsMenuOpen(false)
      });
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-3 md:py-4 border-b border-white/10" : "bg-transparent py-4"
        }`}
      >
        <div className="w-full px-4 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
             <img src="/logo-white.png" alt="Million Holding" className="h-10 md:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav - Hidden as per new request for side nav only or kept? 
              User said "Search icon pinne athinte sideil ayitt toggle menu icon". 
              Usually this implies replacing desktop nav, but I'll keep desktop nav hidden on mobile and show sidebar on mobile?
              Wait, user said "click cheyumbol side nav". 
              I will hide the standard desktop nav for now to strictly follow "Toggle menu icon" instruction 
              OR I will keep desktop nav for large screens and only show toggle on mobile?
              The request "Search icon... sideil ayitt toggle menu... click cheyumbol side nav" sounds like the PRIMARY navigation method.
              However, for UX on desktop, visible links are better.
              I will keep the desktop nav hidden on mobile, and on desktop I'll SHOW the toggle icon AS WELL 
              OR replace the links with the toggle?
              "headrinte right side ulla contact now button venda search icon venam pinne athinte sideil ayitt toogle menu icon"
              This sounds like the Right Side Element replacement. 
              The middle nav might still be there. I will keep the middle nav for Desktop as it's standard, 
              but ensure the Toggle is visible on Mobile (and maybe Desktop if they want a side menu too).
              Actually, "toggle menu icon... click... side nav... athil links Home, About..." implies the links moves to the side nav.
              Reflecting on "Modern" trends: Often desktop has links, mobile has hamburger.
              I will keep Desktop Nav for large screens (hidden md:flex) as in previous code, 
              BUT add the Toggle Icon to the right side (visible on all or mobile?).
              The user didn't explicitly say "remove desktop center nav". 
              But if the side nav has "Home, About", maybe they want that everywhere?
              I'll keep the desktop nav for now as it's a good practice, but DEFINITELY add the Toggle button to the right group.
          */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm md:text-base font-medium transition-colors duration-300 relative group ${
                    isActive ? "text-[#f01c27]" : "text-gray-300 hover:text-[#f01c27]"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#f01c27] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-white hover:text-[#f01c27] transition-colors duration-300">
              <FiSearch className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
                onClick={toggleMenu}
                className="text-white hover:text-[#f01c27] transition-colors duration-300 focus:outline-none"
            >
                <FiMenu className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Side Navigation Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] opacity-0 pointer-events-none"
        onClick={toggleMenu}
      />

      {/* Side Navigation Panel */}
      <div 
        ref={sideNavRef}
        className="fixed top-0 right-0 h-full w-[300px] md:w-[400px] bg-black z-[70] shadow-2xl transform translate-x-full border-l border-white/10 flex flex-col p-10"
      >
        <div className="flex justify-end mb-12">
            <button 
                onClick={toggleMenu}
                className="text-white hover:text-[#f01c27] transition-colors duration-300"
            >
                <FiX size={32} />
            </button>
        </div>

        <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
                <Link 
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="nav-link text-3xl font-serif text-white hover:text-[#f01c27] transition-colors duration-300 pl-4 py-2 border-l-2 border-transparent hover:border-[#f01c27]"
                >
                    {link.name}
                </Link>
            ))}
        </nav>

        <div className="mt-auto">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Contact Us</p>
            <p className="text-white text-lg font-light">+91 95674 39402</p>
            <p className="text-white text-lg font-light">info@millionholdings.com</p>
        </div>
      </div>
    </>
  );
}
