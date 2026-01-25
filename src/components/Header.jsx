"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? "bg-black py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
           <img src="/logo-white.png" alt="Million Holding" className="h-24 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors duration-300 relative group ${
                  isActive ? "text-[#f01c27]" : "text-gray-300 hover:text-[#f01c27]"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#f01c27] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-white hover:text-[#f01c27] transition-colors duration-300">
            <FiSearch size={20} />
          </button>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#f01c27] hover:bg-[#d0151f] transition-all duration-300 shadow-lg hover:shadow-xl rounded-none"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </header>
  );
}
