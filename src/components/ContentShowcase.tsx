import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Play, Star, Clock, Film, Drama, Globe, Baby } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const featuredContent: Array<{
  title: string;
  subtitle: string;
  count: string;
  Icon: LucideIcon;
  description: string;
}> = [
  {
    title: "Action Movies",
    subtitle: "Filmes de Ação",
    count: "5000+",
    Icon: Film,
    description: "Os melhores filmes de ação em 4K"
  },
  {
    title: "Drama Series",
    subtitle: "Séries Dramáticas",
    count: "4000+",
    Icon: Drama,
    description: "Séries aclamadas pela crítica"
  },
  {
    title: "Documentaries",
    subtitle: "Documentários",
    count: "3000+",
    Icon: Globe,
    description: "Conhecimento e entretenimento"
  },
  {
    title: "Kids Content",
    subtitle: "Infantil",
    count: "4000+",
    Icon: Baby,
    description: "Diversão segura para crianças"
  }
];

const topRated = [
  { title: "Breaking Bad", rating: 9.5, duration: "5 temporadas", genre: "Drama", image: "https://upload.wikimedia.org/wikipedia/pt/e/e9/Breaking_bad_2_temporada_poster.jpg", trailer: "HhesaQXLuRY" },
  { title: "Stranger Things", rating: 9.0, duration: "4 temporadas", genre: "Ficção", image: "https://upload.wikimedia.org/wikipedia/pt/2/29/Stranger_Things_Temporada_1_Poster.jpg", trailer: "b9EkMc79ZSU" },
  { title: "The Crown", rating: 8.8, duration: "6 temporadas", genre: "Drama", image: "https://upload.wikimedia.org/wikipedia/pt/e/e2/The-Crown-Poster-S2.jpg", trailer: "JWtnJjn6ng0" },
  { title: "Money Heist", rating: 8.7, duration: "5 temporadas", genre: "Ação", image: "https://m.media-amazon.com/images/I/51-XRXp-aML._SL1200_.jpg", trailer: "_InqQJRqGW4" },
  { title: "The Witcher", rating: 8.5, duration: "3 temporadas", genre: "Fantasia", image: "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png", trailer: "ndl1W4ltcmg" },
  { title: "Narcos", rating: 8.9, duration: "3 temporadas", genre: "Crime", image: "https://i0.wp.com/jornalcomunicacao.ufpr.br/wp-content/uploads/2015/09/21939810.jpg?ssl=1", trailer: "xl8zdCY-abw" },
];

export const ContentShowcase = () => {
  const [selectedTrailer, setSelectedTrailer] = useState<{ title: string; trailer: string } | null>(null);

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Trailer Modal */}
        <Dialog open={!!selectedTrailer} onOpenChange={() => setSelectedTrailer(null)}>
          <DialogContent className="max-w-4xl w-full p-0">
            <DialogHeader className="px-6 pt-6">
              <DialogTitle className="text-2xl font-bold">{selectedTrailer?.title}</DialogTitle>
              <DialogDescription>
                Assista ao trailer oficial de {selectedTrailer?.title}
              </DialogDescription>
            </DialogHeader>
            <div className="aspect-video w-full">
              {selectedTrailer && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedTrailer.trailer}?autoplay=1`}
                  title={selectedTrailer.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-b-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
        {/* Featured Categories */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Conteúdo Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 5.000 títulos cuidadosamente selecionados para oferecer 
            a melhor experiência de entretenimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredContent.map((category, index) => {
            const IconComponent = category.Icon;
            return (
              <Card 
                key={index} 
                className="gradient-card border-border hover:border-primary/50 transition-smooth hover-lift group cursor-pointer overflow-hidden"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {category.count}
                  </h3>
                  <h4 className="font-semibold text-lg mb-2">{category.subtitle}</h4>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Top Rated Content */}
        <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-gradient">Mais Assistidos</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              As séries e filmes com melhor avaliação da nossa plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRated.map((content, index) => (
              <Card 
                key={index} 
                onClick={() => setSelectedTrailer({ title: content.title, trailer: content.trailer })}
                className="gradient-card border-border hover:border-primary/50 transition-smooth hover-lift group overflow-hidden cursor-pointer"
              >
                {/* Poster da Série/Filme */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={content.image} 
                    alt={`Poster de ${content.title}`}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = `https://via.placeholder.com/300x450/1a1a2e/3b82f6?text=${encodeURIComponent(content.title)}`;
                      target.alt = `${content.title} - Poster indisponível`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTrailer({ title: content.title, trailer: content.trailer });
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                        {content.title}
                      </h4>
                      <Badge variant="secondary" className="mb-2">
                        {content.genre}
                      </Badge>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-primary mr-1 fill-primary" />
                      <span className="font-semibold text-primary">{content.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.duration}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/catalogo">
              <Button variant="hero" size="lg">
                Ver Todo Catálogo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
