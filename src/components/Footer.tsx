import { Tv, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">SSHNET<span className="text-gradient">PLAY</span></span>
            </div>
            <p className="text-muted-foreground">
              A melhor plataforma de streaming do Brasil. Mais de 5.000 filmes, séries e 2.000+ canais de TV.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><Link to="/canais" className="text-muted-foreground hover:text-primary transition-smooth">Canais de TV</Link></li>
              <li><Link to="/catalogo" className="text-muted-foreground hover:text-primary transition-smooth">Filmes</Link></li>
              <li><Link to="/catalogo" className="text-muted-foreground hover:text-primary transition-smooth">Séries</Link></li>
              <li><Link to="/canais" className="text-muted-foreground hover:text-primary transition-smooth">Esportes</Link></li>
              <li><Link to="/canais" className="text-muted-foreground hover:text-primary transition-smooth">Documentários</Link></li>
              <li><Link to="/canais" className="text-muted-foreground hover:text-primary transition-smooth">E muito mais</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">Central de Ajuda</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">Como Assinar</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">Termos de Uso</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">Política de Privacidade</Link></li>
              <li><a  href="https://wa.me/5551935052237" target="_blank" rel="noopener noreferrer"className="text-muted-foreground hover:text-primary transition-smooth">Contato</a></li>

            </ul>
          </div>
          
          {/* Contact */}
          <div>
           <h3 className="font-semibold text-lg mb-4">Contato</h3>

            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-muted-foreground">(51) 93505-2237</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span className="text-muted-foreground">sshnetplus@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span className="text-muted-foreground">São Paulo, SP</span>
              </div>
            </div>
           <div className="mt-6">
  <a 
    href="https://wa.me/5551935052237" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button variant="hero" size="sm" className="w-full">
      Fale Conosco
    </Button>
  </a>
</div>

          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 SSHNETPLAY. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
