
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10 py-4
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-merriweather font-bold text-xl tracking-tight text-navy">TutorAnalytics</span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="font-medium text-sm hover:text-blue transition-colors text-navy">Features</a>
          <a href="#how-it-works" className="font-medium text-sm hover:text-blue transition-colors text-navy">How It Works</a>
          <a href="#contact" className="font-medium text-sm hover:text-blue transition-colors text-navy">Contact</a>
        </nav>
        <Button 
          className="rounded-full px-6 shadow-md bg-blue hover:bg-blue/90 text-white" 
          onClick={scrollToContact}
        >
          Get Early Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
