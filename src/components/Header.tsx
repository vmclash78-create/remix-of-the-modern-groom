import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#servicos" },
  { name: "Barbeiros", href: "#barbeiros" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <Scissors className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-gold">
              CORTE<span className="text-foreground">CERTO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => scrollToSection("#agendamento")}
            >
              Agendar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="block py-3 text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="gold" 
              className="w-full mt-4"
              onClick={() => scrollToSection("#agendamento")}
            >
              Agendar Agora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
