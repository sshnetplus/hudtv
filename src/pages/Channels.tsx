import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, Star, Zap, Tv, Search, Phone } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const allChannels = [
  // Canais Nacionais
  { name: "Globo HD", category: "Nacional", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/TV_Globo_logo_%28April_2025%29.png/960px-TV_Globo_logo_%28April_2025%29.png" },
  { name: "SBT HD", category: "Nacional", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/pt/4/41/Logotipo_do_SBT.svg" },
  { name: "Record HD", category: "Nacional", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" },
  { name: "Band HD", category: "Nacional", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Rede_Bandeirantes_logo_2011.svg/500px-Rede_Bandeirantes_logo_2011.svg.png" },
  { name: "RedeTV! HD", category: "Nacional", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/pt/8/89/Logotipo_da_RedeTV%21.png" },
  { name: "TV Cultura", category: "Nacional", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Cultura_logo_2013.svg" },
  { name: "TV Gazeta", category: "Nacional", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/TV_Gazeta.svg/1920px-TV_Gazeta.svg.png" },
  { name: "TV Brasil", category: "Nacional", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/TV_Brasil_logo_2019.svg" },

  // Esportes
  { name: "ESPN HD", category: "Esportes", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg" },
  { name: "Fox Sports", category: "Esportes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Fox_Sports_Netherlands_Logo.png" },
  { name: "SporTV HD", category: "Esportes", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/SporTV_logo_2011.png" },
  { name: "ESPN 2 HD", category: "Esportes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/ESPN2_logo.svg" },
  { name: "Premiere FC", category: "Esportes", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Premiere_FC_logo.png" },
  { name: "TNT Sports", category: "Esportes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/TNT_Sports_%282023%29.svg" },
  { name: "Band Sports", category: "Esportes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/BandSports2024.png" },
  { name: "ESPN Extra", category: "Esportes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Espn_extra_2015.PNG" },

  // Documentários
  { name: "Discovery Channel", category: "Documentários", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/2019_Discovery_logo.svg" },
  { name: "National Geographic", category: "Documentários", quality: "4K", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Natgeologo.svg" },
  { name: "History Channel", category: "Documentários", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/History_Logo.svg" },
  { name: "Animal Planet", category: "Documentários", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/2018_Animal_Planet_logo.svg" },
  { name: "Discovery Science", category: "Documentários", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Discovery_Science_-_Logo_2017.svg" },
  { name: "Investigation Discovery", category: "Documentários", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Investigation_Discovery_Logo_2018.svg" },
  { name: "Discovery Home & Health", category: "Documentários", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Discovery_H%26H_Logo_2022.webp" },
  { name: "Discovery Theater", category: "Documentários", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/2015_Discovery_theater_HD_logo.svg" },

  // Infantil
  { name: "Cartoon Network", category: "Infantil", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg" },
  { name: "Disney Channel", category: "Infantil", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/2019_Disney_Channel_logo.svg" },
  { name: "Nickelodeon", category: "Infantil", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg" },
  { name: "Disney Junior", category: "Infantil", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/2024_Disney_Jr._Logo.svg" },
  { name: "Discovery Kids", category: "Infantil", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Discovery_kids_logo.png" },
  { name: "Gloob", category: "Infantil", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Gloob_logo.svg" },
  { name: "Nick Jr.", category: "Infantil", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nick_Jr._logo_2009.svg" },
  { name: "Boomerang", category: "Infantil", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Boomerang_tv_logo.png" },

  // Filmes e Séries
  { name: "HBO Max", category: "Filmes", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" },
  { name: "Netflix", category: "Filmes", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Amazon Prime", category: "Filmes", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" },
  { name: "Telecine Premium", category: "Filmes", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Rede_Telecine_vertical_logo.svg" },
  { name: "Space HD", category: "Filmes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/SpaceLogo.svg" },
  { name: "FX HD", category: "Filmes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/FX_International_logo.svg" },
  { name: "Universal TV", category: "Filmes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Universal_TV_logo.svg" },
  { name: "Warner Channel", category: "Filmes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Warner2018LA.png" },
  { name: "TNT HD", category: "Filmes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/TNT_Logo_2016.svg" },
  { name: "Paramount Channel", category: "Filmes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Paramount_Network.svg" },

  // Notícias
  { name: "GloboNews", category: "Notícias", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Logotipo_da_GloboNews.png" },
  { name: "CNN Brasil", category: "Notícias", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/CNN_Brasil.svg" },
  { name: "Band News", category: "Notícias", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/BandNews_TV_logo_2010.svg" },
  { name: "Record News", category: "Notícias", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Record_News_logo_2022.svg" },
  { name: "RedeTV! News", category: "Notícias", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/pt/9/9f/RedeTV_News.jpg" },
  { name: "SBT News", category: "Notícias", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/SBT_News_logo.svg" },

  // Música
  { name: "Multishow", category: "Música", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Multishow_logo_red_2012.svg" },
  { name: "MTV Brasil", category: "Música", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/LOGO_MTV_BRASIL.png" },
  { name: "Music Box Brazil", category: "Música", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/LogoMusicRoxo.png" },
  { name: "VH1", category: "Música", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/VH1_logonew.svg" },
  { name: "BIS", category: "Música", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_of_Bis.svg" },

  // Variedades
  { name: "Comedy Central", category: "Variedades", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Comedy_Central_2018.svg" },
  { name: "E! Entertainment", category: "Variedades", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/E%21_Logo.svg" },
  { name: "Food Network", category: "Variedades", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Food_Network_New_Logo.png" },
  { name: "TLC", category: "Variedades", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/TLC_Logo.svg" },
  { name: "Lifetime", category: "Variedades", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Logo_Lifetime_2020.svg" },
  { name: "A&E", category: "Variedades", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/A%26E_Network_logo.svg" },
  { name: "Home & Health", category: "Variedades", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/H%26h_Logo.svg" },
];

const categories = [
  "Todos",
  "Nacional", 
  "Esportes", 
  "Documentários", 
  "Infantil", 
  "Filmes", 
  "Notícias", 
  "Música", 
  "Variedades"
];

export default function Channels() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChannels = allChannels.filter(channel => {
    const matchesCategory = selectedCategory === "Todos" || channel.category === selectedCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         channel.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderChannelCard = (channel: any) => (
    <Card 
      key={channel.name}
      className="gradient-card border-border hover:border-primary/50 transition-smooth hover-lift group cursor-pointer"
    >
      <div className="p-6">
        {/* Logo do Canal */}
        <div className="h-20 mb-4 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-border/20">
          <img 
            src={channel.logo} 
            alt={`Logo do canal ${channel.name}`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            className="max-h-full max-w-full object-contain filter brightness-100 contrast-110"
            style={{ 
              imageRendering: 'crisp-edges'
            }}
            onError={(e) => {
              const target = e.currentTarget;
              target.src = '/placeholder.svg';
              target.alt = `${channel.name} - Logo indisponível`;
              target.classList.add('opacity-50', 'grayscale');
            }}
          />
        </div>
        
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
              {channel.name}
            </h3>
            <Badge variant="secondary" className="mb-2">
              {channel.category}
            </Badge>
          </div>
          {channel.popular && (
            <Crown className="w-5 h-5 text-primary" />
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {channel.quality === "4K" ? (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                <Zap className="w-3 h-3 mr-1" />
                {channel.quality}
              </Badge>
            ) : (
              <Badge variant="outline">
                <Star className="w-3 h-3 mr-1" />
                {channel.quality}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Todos os Canais</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Navegue por nossa coleção completa de mais de 200 canais premium em alta definição. 
              Encontre seus canais favoritos organizados por categoria.
            </p>
            
            {/* Aviso de mais canais disponíveis */}
            <div className="max-w-3xl mx-auto">
              <Card className="gradient-card border-primary/30 bg-primary/5">
                <div className="p-4 flex items-center justify-center gap-3">
                  <Tv className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm font-medium">
                    ✨ Muitos mais canais estão liberados em nosso sistema! Esta é apenas uma amostra da nossa programação completa.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar canais..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 lg:grid-cols-5 mb-12">
              {categories.slice(0, 5).map(category => (
                <TabsTrigger key={category} value={category} className="text-xs lg:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.length > 5 && (
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
                {categories.slice(5).map(category => (
                  <TabsTrigger key={category} value={category} className="text-xs lg:text-sm">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            )}

            {/* Channels Grid */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Tv className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">
                  {selectedCategory === "Todos" ? "Todos os Canais" : `Canais de ${selectedCategory}`}
                  <span className="text-lg text-muted-foreground ml-3">
                    ({filteredChannels.length} canais)
                  </span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredChannels.map(renderChannelCard)}
              </div>
              
              {filteredChannels.length === 0 && (
                <div className="text-center py-12">
                  <Tv className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Nenhum canal encontrado</h3>
                  <p className="text-muted-foreground">
                    Tente ajustar sua busca ou escolher uma categoria diferente.
                  </p>
                </div>
              )}
            </div>
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-16 p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Assistir?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Assine agora e tenha acesso imediato a todos estes canais em alta definição
            </p>
            <Button variant="hero" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Assinar Agora
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
