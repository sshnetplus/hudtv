import { Button } from "@/components/ui/button";
import { Menu, Tv, User, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-smooth">
            <img 
              src={logo} 
              alt="SSHNETPLAY Logo" 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/canais" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-smooth font-medium">
              Canais
            </Link>
            <Link to="/catalogo" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-smooth font-medium">
              Filmes & Séries
            </Link>
            <a href="#planos" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-smooth font-medium">
              Planos
            </a>
            <a href="#suporte" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-smooth font-medium">
              Revenda
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button><Button asChild variant="hero" size="sm">
              <a href="https://wa.me/5521988236325" target="_blank" rel="noopener noreferrer"><Phone className="w-4 h-4 mr-2" /> Assinar Agora</a></Button>

          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/canais" className="text-foreground hover:text-primary transition-smooth">
                Canais
              </Link>
              <Link to="/catalogo" className="text-foreground hover:text-primary transition-smooth">
                Filmes & Séries
              </Link>
              <a href="#planos" className="text-foreground hover:text-primary transition-smooth">
                Planos
              </a>
              <a href="#suporte" className="text-foreground hover:text-primary transition-smooth">
                Revenda
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Entrar
                </Button><Button asChild variant="hero" size="sm"><a href="https://wa.me/5521988236325" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />Assinar Agora</a></Button>

              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
