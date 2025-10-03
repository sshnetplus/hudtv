import { Button } from "@/components/ui/button";
import { Menu, User, Phone, X } from "lucide-react"; // removi o Tv pois não vai mais usar
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group transition-smooth">
            <div className="relative">
              <div className="absolute inset-0 gradient-hero blur-xl opacity-50 group-hover:opacity-75 transition-smooth"></div>
              <img 
                src="/logo.png"   // <<-- coloque sua logo na pasta "public" com esse nome
                alt="Logo HUB TV" 
                className="w-12 h-12 object-contain relative z-10 group-hover:scale-110 transition-spring"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient tracking-tight">HUB TV</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Streaming Premium</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link 
              to="/canais" 
              className="relative px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-smooth group"
            >
              <span className="relative z-10">Canais</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-hero opacity-0 group-hover:opacity-10 transition-smooth"></div>
            </Link>
            <Link 
              to="/catalogo" 
              className="relative px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-smooth group"
            >
              <span className="relative z-10">Filmes & Séries</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-hero opacity-0 group-hover:opacity-10 transition-smooth"></div>
            </Link>
            <a 
              href="#planos" 
              className="relative px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-smooth group"
            >
              <span className="relative z-10">Planos</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-hero opacity-0 group-hover:opacity-10 transition-smooth"></div>
            </a>
            <a 
              href="#suporte" 
              className="relative px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-smooth group"
            >
              <span className="relative z-10">Revenda</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-hero opacity-0 group-hover:opacity-10 transition-smooth"></div>
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="font-medium">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <Button asChild variant="hero" size="sm" className="font-semibold shadow-glow">
              <a href="https://wa.me/5551935052237" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Assinar Agora
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-lg animate-fade-in">
            <nav className="flex flex-col space-y-1">
              <Link 
                to="/canais" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/90 hover:text-primary hover:bg-primary/10 transition-smooth font-medium"
              >
                Canais
              </Link>
              <Link 
                to="/catalogo" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/90 hover:text-primary hover:bg-primary/10 transition-smooth font-medium"
              >
                Filmes & Séries
              </Link>
              <a 
                href="#planos" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/90 hover:text-primary hover:bg-primary/10 transition-smooth font-medium"
              >
                Planos
              </a>
              <a 
                href="#suporte" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/90 hover:text-primary hover:bg-primary/10 transition-smooth font-medium"
              >
                Revenda
              </a>
              <div className="flex flex-col space-y-2 pt-4 px-2">
                <Button variant="outline" size="sm" className="justify-start font-medium w-full">
                  <User className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
                <Button asChild variant="hero" size="sm" className="justify-start font-semibold w-full shadow-glow">
                  <a 
                    href="https://wa.me/5551935052237" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Assinar Agora
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
