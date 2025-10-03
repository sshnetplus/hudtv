import { Button } from "@/components/ui/button";
import { Play, Monitor, Tv } from "lucide-react";
import heroImage from "@/assets/hero-streaming.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Streaming Platform" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient"></span>
            <br />
            Teste iptv 
            <br />
            <span className="text-premium">gratis</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
Acesse milhares de canais de TV, filmes e séries em qualidade HD/4K. Suporte 24/7 e instalação gratuita em todos os dispositivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
<Button asChild variant="hero" size="lg" className="text-lg px-10 py-6 shadow-glow hover-lift"><a 
    href="https://wa.me/5551935052237?text=Ol%C3%A1,%20quero%20come%C3%A7ar%20agora!" 
    target="_blank" 
    rel="noopener noreferrer">
    <Play className="w-6 h-6 mr-2" />
    Começar Agora
  </a>
</Button>

            <Button variant="outline" size="lg" className="text-lg px-10 py-6 glass hover-lift">
              <Monitor className="w-6 h-6 mr-2" />
              Ver Demonstração
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-primary">5.000</div>
              <div className="text-muted-foreground">Filmes & Séries</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-accent">2.000</div>
              <div className="text-muted-foreground">Canais de TV</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-premium">24/7</div>
              <div className="text-muted-foreground">Suporte</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 opacity-20 animate-pulse">
        <Tv className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-32 right-32 opacity-20 animate-pulse delay-1000">
        <Monitor className="w-12 h-12 text-accent" />
      </div>
    </section>
  );
};
