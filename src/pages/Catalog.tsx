import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Star, Calendar, TrendingUp } from "lucide-react";
import { useState } from "react";

const recentMovies = [
  { title: "Oppenheimer", rating: 9.2, year: "2024", genre: "Drama", duration: "3h", image: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", isNew: true, trailer: "uYPbbksJxIg" },
  { title: "Barbie", rating: 8.8, year: "2024", genre: "Comédia", duration: "2h", image: "https://image.tmdb.org/t/p/w300/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", isNew: true, trailer: "pBk4NYhWNMM" },
  { title: "Dune: Part Two", rating: 9.0, year: "2024", genre: "Ficção", duration: "2h 46min", image: "https://image.tmdb.org/t/p/w300/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", isNew: true, trailer: "Way9Dexny3w" },
  { title: "Guardians of the Galaxy Vol. 3", rating: 8.5, year: "2023", genre: "Ação", duration: "2h 30min", image: "https://image.tmdb.org/t/p/w300/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", isNew: false, trailer: "u3V5KDHRQvk" },
  { title: "The Killer", rating: 8.3, year: "2023", genre: "Thriller", duration: "1h 58min", image: "https://image.tmdb.org/t/p/w300/e7Jvsry47JJQruuezjU2X1Z6J77.jpg", isNew: false, trailer: "5S7FR_HCg9g" },
  { title: "Napoleon", rating: 8.1, year: "2023", genre: "História", duration: "2h 38min", image: "https://upload.wikimedia.org/wikipedia/pt/9/95/Napoleon_poster.jpg", isNew: false, trailer: "OAZWXUkrjPc" },
  { title: "Wonka", rating: 8.4, year: "2023", genre: "Aventura", duration: "1h 56min", image: "https://image.tmdb.org/t/p/w300/qhb1qOilapbapxWQn9jtRCMwXJF.jpg", isNew: false, trailer: "otNh9bTjXWg" },
  { title: "The Marvels", rating: 7.9, year: "2023", genre: "Ação", duration: "1h 45min", image: "https://image.tmdb.org/t/p/w300/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg", isNew: false, trailer: "wS_qbDztgVY" },
  { title: "Aquaman 2", rating: 8.2, year: "2023", genre: "Ação", duration: "2h 4min", image: "https://image.tmdb.org/t/p/w300/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg", isNew: false, trailer: "UGc5Tzz19UY" },
];

const recentSeries = [
  { title: "The Last of Us S2", rating: 9.4, year: "2024", genre: "Drama", episodes: "8 episódios", image: "https://image.tmdb.org/t/p/w300/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", isNew: true, trailer: "GGbbtV_Gpzw" },
  { title: "House of the Dragon S2", rating: 9.1, year: "2024", genre: "Fantasia", episodes: "8 episódios", image: "https://image.tmdb.org/t/p/w300/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg", isNew: true, trailer: "YN2H_sKcmGw" },
  { title: "The Boys S4", rating: 8.9, year: "2024", genre: "Ação", episodes: "8 episódios", image: "https://image.tmdb.org/t/p/w300/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg", isNew: true, trailer: "EzFXDvC-EwM" },
  { title: "The Mandalorian S3", rating: 8.7, year: "2023", genre: "Ficção", episodes: "8 episódios", image: "https://image.tmdb.org/t/p/w300/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg", isNew: false, trailer: "aOC8E8z_ifw" },
  { title: "Wednesday S2", rating: 8.8, year: "2024", genre: "Mistério", episodes: "8 episódios", image: "https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", isNew: true, trailer: "Di310WS8zLk" },
  { title: "Loki S2", rating: 9.0, year: "2023", genre: "Ficção", episodes: "6 episódios", image: "https://image.tmdb.org/t/p/w300/voHUmluYmKyleFkTu3lOXQG702u.jpg", isNew: false, trailer: "dug56u8NN7g" },
  { title: "Gen V", rating: 8.3, year: "2023", genre: "Ação", episodes: "8 episódios", image: "https://image.tmdb.org/t/p/w300/uuot1N5AgZ7xRCKgm4ZCwOhgIJu.jpg", isNew: false, trailer: "mmkLMXN_lpI" },
  { title: "Percy Jackson", rating: 8.5, year: "2023", genre: "Aventura", episodes: "8 episódios", image: "https://m.media-amazon.com/images/I/A1UjcPz4gZL._SL1500_.jpg", isNew: false, trailer: "82xS4goDWZY" },
  { title: "Echo", rating: 8.2, year: "2024", genre: "Ação", episodes: "5 episódios", image: "https://image.tmdb.org/t/p/w300/uf3PqgFfctAB8AhdLw87krgG8Bo.jpg", isNew: true, trailer: "QR9IUvLxiMk" },
];

export default function Catalog() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedTrailer, setSelectedTrailer] = useState<{ title: string; trailer: string } | null>(null);

  const renderContentCard = (content: any, type: "movie" | "series") => (
    <Card 
      key={content.title}
      onClick={() => setSelectedTrailer({ title: content.title, trailer: content.trailer })}
      className="gradient-card border-border hover:border-primary/50 transition-smooth hover-lift group overflow-hidden cursor-pointer"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={content.image} 
          alt={content.title}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        
        {content.isNew && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            <TrendingUp className="w-3 h-3 mr-1" />
            LANÇAMENTO
          </Badge>
        )}
        
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
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth line-clamp-1">
              {content.title}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">{content.genre}</Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                {content.year}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-primary mr-1 fill-primary" />
            <span className="font-bold text-primary">{content.rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm">
          {type === "movie" ? content.duration : (content as any).episodes}
        </p>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Trailer Modal */}
      <Dialog open={!!selectedTrailer} onOpenChange={() => setSelectedTrailer(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle className="text-2xl font-bold">{selectedTrailer?.title}</DialogTitle>
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
      
      <main className="pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Catálogo Completo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Descubra os lançamentos mais recentes em filmes e séries. 
              Conteúdo atualizado semanalmente com as melhores produções.
            </p>
            
            {/* Aviso de mais conteúdo disponível */}
            <div className="max-w-3xl mx-auto">
              <Card className="gradient-card border-primary/30 bg-primary/5">
                <div className="p-4 flex items-center justify-center gap-3">
                  <Play className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm font-medium">
                    ✨ Muitos mais filmes e séries estão liberados em nosso sistema! Esta é apenas uma amostra do nosso catálogo completo.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Tabs Navigation */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="movies">Filmes</TabsTrigger>
              <TabsTrigger value="series">Séries</TabsTrigger>
            </TabsList>

            {/* All Content */}
            <TabsContent value="all" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Lançamentos Recentes - Filmes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {recentMovies.slice(0, 8).map((movie) => renderContentCard(movie, "movie"))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Lançamentos Recentes - Séries
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {recentSeries.slice(0, 8).map((series) => renderContentCard(series, "series"))}
                </div>
              </div>
            </TabsContent>

            {/* Movies Only */}
            <TabsContent value="movies">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                Filmes Recentes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recentMovies.map((movie) => renderContentCard(movie, "movie"))}
              </div>
            </TabsContent>

            {/* Series Only */}
            <TabsContent value="series">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                Séries Recentes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recentSeries.map((series) => renderContentCard(series, "series"))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-16 p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-3xl font-bold mb-4">
              Quer Acesso Completo?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Assine agora e tenha acesso ilimitado a todo nosso catálogo com mais de 5000 títulos
            </p>
            <Button variant="hero" size="lg">
              Ver Planos
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
