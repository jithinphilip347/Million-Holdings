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
      gsap.fromTo(
        sideNavRef.current.querySelectorAll(".nav-link"),
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        },
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
        onComplete: () => setIsMenuOpen(false),
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
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-3 md:py-4"
            : "bg-transparent py-4"
        }`}
      >
        <div className="w-full px-4 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo-white.png"
                alt="Million Holding"
                className="h-12 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav - Moved next to Logo */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-300 relative group ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-8">
            <button className="text-white hover:text-[#f01c27] transition-colors duration-300">
              <FiSearch className="size-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="flex flex-col gap-2 group cursor-pointer"
            >
              <span className="w-[60px] h-px bg-white group-hover:bg-[#f01c27] transition-colors duration-300"></span>
              <span className="w-[60px] h-px bg-white group-hover:bg-[#f01c27] transition-colors duration-300"></span>
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
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <p className="text-white text-lg font-light">+91 95674 39402</p>
          <p className="text-white text-lg font-light">
            info@millionholdings.com
          </p>
        </div>
      </div>
    </>
  );
}
