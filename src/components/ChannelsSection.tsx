import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const channels = [
  { name: "Globo HD", category: "Nacional", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/TV_Globo_logo_%28April_2025%29.png/960px-TV_Globo_logo_%28April_2025%29.png" },
  { name: "SBT HD", category: "Nacional", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/500px-Logotipo_do_SBT.svg.png?20150423190334" },
  { name: "Record HD", category: "Nacional", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png?20190726203014" },
  { name: "ESPN HD", category: "Esportes", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg" },
  { name: "Fox Sports", category: "Esportes", quality: "HD", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Fox_Sports_Netherlands_Logo.png" },
  { name: "Discovery Channel", category: "Documentários", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Discovery_Channel_-_Logo_2019.svg" },
  { name: "National Geographic", category: "Documentários", quality: "4K", popular: false, logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Natgeologo.svg" },
  { name: "Cartoon Network", category: "Infantil", quality: "HD", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg" },
  { name: "Disney Channel", category: "Infantil", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/2019_Disney_Channel_logo.svg" },
  { name: "Netflix", category: "Streaming", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Amazon Prime", category: "Streaming", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" },
  { name: "HBO Max", category: "Streaming", quality: "4K", popular: true, logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" },
];

export const ChannelsSection = () => {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Canais Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acesso completo a mais de 2.000 canais de TV liberados, incluindo todos os principais 
            canais nacionais e internacionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {channels.map((channel, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border hover:border-primary/50 transition-smooth hover-lift group cursor-pointer"
            >
              <div className="p-6">
                {/* Logo do Canal */}
                <div className="h-16 mb-4 flex items-center justify-center bg-white rounded-lg p-2">
                  <img 
                    src={channel.logo} 
                    alt={channel.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                      e.currentTarget.alt = `${channel.name} placeholder`;
                      e.currentTarget.classList.add('opacity-70');
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
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/canais">
            <Button variant="hero" size="lg">
              Ver Todos os Canais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
