import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#unique", label: "Why Saudi?" },
    { href: "#clubs", label: "Clubs" },
    { href: "#tourism", label: "Packages" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            {/* FIFA Logo */}
            <div className="h-12 w-20 relative">
              <img 
                src="/images/fifa-logo.png" 
                alt="FIFA"
                className="h-full w-full object-contain"
                onError={(e) => {
                  // Fallback to text if image not found
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-bold text-primary text-sm">FIFA</span>';
                  }
                }}
              />
            </div>
            
            {/* Divider Line */}
            <div className="h-12 w-px bg-primary/50"></div>
            
            {/* Saudi 2034 Logo */}
            <div className="h-14 w-32 relative">
              <img 
                src="/images/world-cup-2034-logo.png" 
                alt="Saudi 2034"
                className="h-full w-full object-contain"
                onError={(e) => {
                  // Fallback to text if image not found
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-display font-bold text-gradient-gold text-lg">Saudi 2034</span>';
                  }
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-gold text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-gold"
            >
              Plan Your Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/98 border-b border-border/50 shadow-lg">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-lg text-center transition-all duration-300"
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
