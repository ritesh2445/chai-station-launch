import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Find Us", href: "#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav bg-chai-ivory/90 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <SteamIcon className={`w-8 h-8 ${scrolled ? "text-chai-terracotta" : "text-chai-gold"}`} />
            <span className={`font-display text-xl lg:text-2xl font-bold ${scrolled ? "text-chai-charcoal" : "text-chai-ivory"}`}>
              The Chai Station
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm tracking-wide transition-colors duration-300 hover:text-chai-terracotta ${
                  scrolled ? "text-chai-charcoal" : "text-chai-ivory/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2 bg-chai-charcoal" : scrolled ? "bg-chai-charcoal" : "bg-chai-ivory"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : scrolled ? "bg-chai-charcoal" : "bg-chai-ivory"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2 bg-chai-charcoal" : scrolled ? "bg-chai-charcoal" : "bg-chai-ivory"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-chai-ivory shadow-xl border-t border-border"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-lg text-chai-charcoal hover:text-chai-terracotta transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const SteamIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 28h16a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" fill="currentColor" opacity="0.8"/>
    <path d="M12 18c0-2 1-3 1-5s-1-3-1-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M16 18c0-2 1-3 1-5s-1-3-1-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M20 18c0-2 1-3 1-5s-1-3-1-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

export default Navbar;
