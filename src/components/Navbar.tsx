import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Über uns", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Galerie", href: "#gallery" },
    { name: "Bewertungen", href: "#testimonials" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-[#8DA399] p-2 rounded-full text-white group-hover:rotate-12 transition-transform">
            <Scissors className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#2D3436]">
            Max Mustermann <span className="text-[#8DA399] font-light">| Salon</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#2D3436]/70 hover:text-[#8DA399] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-[#8DA399] hover:bg-[#7A8E85] text-white rounded-full px-6">
            Termin buchen
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#2D3436]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-[#2D3436]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-[#8DA399] hover:bg-[#7A8E85] text-white rounded-full w-full py-6 text-lg">
            Termin buchen
          </Button>
        </div>
      )}
    </nav>
  );
};
