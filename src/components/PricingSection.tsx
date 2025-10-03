import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 24,90",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "2.000+ Canais HD",
      "5.000+ Filmes e Séries",
      "2 Dispositivos simultâneos",
      "Suporte prioritário 24/7",
      "Canais esportivos premium",
      "Conteúdos exclusivo",
      "Todos lançamentos",
    ],
    popular: false,
    variant: "default" as const,
  },
  {
    name: "Premium",
    price: "R$ 44,90",
    period: "/mês",
    description: "Mais popular",
    features: [
      "2.000+ Canais HD",
      "5.000+ Filmes e Séries",
      "2 Dispositivos simultâneos",
      "Suporte prioritário 24/7",
      "Canais esportivos premium",
      "Conteúdo exclusivo",
      "Todos lançamentos",
    ],
    popular: true,
    variant: "default" as const,
  },
  {
    name: "Família",
    price: "R$ 74,90",
    period: "/mês",
    description: "Para toda família",
    features: [
      "2.000+ Canais HD",
      "5.000+ Filmes e Séries",
      "3 Dispositivos simultâneos",
      "Suporte prioritário 24/7",
      "Canais esportivos premium",
      "Conteúdo exclusivo",
      "Todos lançamentos",
    ],
    popular: false,
    variant: "default" as const,
  },
];

export const PricingSection = () => {
  return (
    <section id="planos" className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Planos <span className="text-gradient">Flexíveis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para você. Cancele a qualquer momento. 
            Teste grátis por 6 horas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative gradient-card border-border hover:border-primary/50 transition-smooth hover-lift ${
                plan.popular ? 'ring-2 ring-primary shadow-glow scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Crown className="w-3 h-3 mr-1" />
                  Mais Popular
                </Badge>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
<Button asChild variant={plan.variant} className="w-full" size="lg">
  <a 
    href="https://wa.me/5521988236325?text=Ol%C3%A1,%20quero%20come%C3%A7ar%20meu%20teste%20gr%C3%A1tis!" 
    target="_blank" 
    rel="noopener noreferrer">
    {plan.name === "Premium" && <Zap className="w-4 h-4 mr-2" />}
    Começar Teste Grátis
  </a>
</Button>

                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  6 horas grátis • Assine a qualquer momento
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
<Button asChild variant="outline" size="lg">
  <a 
    href="https://wa.me/5521988236325?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20vendedor." 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Falar com Vendedor
  </a>
</Button>

        </div>
      </div>
    </section>
  );
};
