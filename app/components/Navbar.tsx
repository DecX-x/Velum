"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  variant?: "landing" | "app";
}

export default function Navbar({ variant = "app" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks =
    variant === "landing"
      ? [
          { href: "#solutions", label: "Solutions" },
          { href: "#architecture", label: "Tech" },
          { href: "#features", label: "Docs" },
        ]
      : [
          { href: "/dashboard", label: "Dashboard" },
          { href: "/treasury", label: "Treasury" },
          { href: "/wrap", label: "Wrap" },
          { href: "/strategies", label: "Strategies" },
          { href: "/disclosure", label: "Disclosure" },
        ];

  const isActive = (href: string) => {
    if (variant === "landing") return false;
    return pathname === href;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3 max-w-6xl mx-auto rounded-full mt-4 sm:mt-6 transition-all duration-500 ease-kinetic ${
          variant === "landing"
            ? "bg-[#131313]/80 backdrop-blur-xl shadow-[0_0_64px_rgba(190,253,93,0.06)]"
            : `bg-[#191919]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(190,253,93,0.05)] ${
                isScrolled ? "shadow-[0_20px_50px_rgba(190,253,93,0.1)]" : ""
              }`
        } animate-fade-in-down`}
      >
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-white tracking-tighter font-headline hover:text-primary transition-colors duration-300"
        >
          Velum
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 sm:gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-headline tracking-tight text-sm font-medium transition-all duration-300 ease-kinetic hover:scale-105 ${
                isActive(link.href)
                  ? "text-[#befd5d] font-bold border-b-2 border-[#befd5d] pb-1"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2 sm:gap-4">
          {variant === "app" && (
            <div className="flex gap-1 sm:gap-2">
              <button className="p-2 hover:bg-zinc-800/50 rounded-full transition-all duration-300 text-zinc-400 hover:text-white">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 hover:bg-zinc-800/50 rounded-full transition-all duration-300 text-zinc-400 hover:text-white">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          )}
          <Link
            href={variant === "landing" ? "/dashboard" : "#"}
            className={`bg-primary text-on-primary px-6 py-2 rounded-full font-headline font-bold text-sm transition-all duration-300 ease-kinetic ${
              variant === "landing"
                ? "hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(178,240,81,0.15)]"
                : "hover:bg-primary-dim active:scale-95 shadow-lg shadow-primary/10"
            }`}
          >
            {variant === "landing" ? "Launch App" : "Connect Wallet"}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-20 left-4 right-4 z-40 rounded-2xl p-6 md:hidden border border-outline-variant/20 transition-all duration-500 ease-kinetic ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto bg-[#131313]/95 backdrop-blur-xl"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-headline tracking-tight text-lg transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-[#befd5d] font-bold"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-outline-variant/20">
            <Link
              href={variant === "landing" ? "/dashboard" : "#"}
              className="block w-full text-center bg-primary text-on-primary px-6 py-3 rounded-full font-headline font-bold text-base transition-all duration-300 active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {variant === "landing" ? "Launch App" : "Connect Wallet"}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
