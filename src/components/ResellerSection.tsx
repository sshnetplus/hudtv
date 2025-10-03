import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, Users, Zap, Shield, HeadphonesIcon, BarChart3, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const resellerTiers = [
  {
    quantity: "Ilimitado",
    pricePerUnit: "R$ 3,50",
    totalMin: "Sem limite",
    totalMax: "Pague apenas pelos ativos",
    discount: "Preço fixo",
    recommended: true,
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Pagamento Seguro",
    description: "Sistema pós-pago mensal com cobrança automática",
  },
  {
    icon: BarChart3,
    title: "Painel Exclusivo",
    description: "Controle total de vendas e clientes em tempo real",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte VIP",
    description: "Atendimento prioritário 24/7 para revendedores",
  },
  {
    icon: Sparkles,
    title: "Sem Investimento",
    description: "Zero taxa de adesão ou mensalidade fixa",
  },
];

const features = [
  "Renovação automática de créditos",
  "Relatórios detalhados de consumo",
  "API para integração",
  "Marca branca disponível",
  "Gestão de subcontas",
  "Financeiro automatizado",
];

export const ResellerSection = () => {
  return (
    <section id="suporte" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            <TrendingUp className="w-4 h-4 mr-1.5" />
            Programa de Revenda Profissional
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Tabela para Revendedores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sistema pós-pago com <span className="text-primary font-semibold">preço fixo de R$ 3,50</span>. 
            Créditos ilimitados, pague apenas pelos clientes ativos.
          </p>
        </div>

        {/* Main Pricing Table */}
        <Card className="gradient-card mb-12 border-2 shadow-elegant animate-scale-in overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              Tabela de Preços Pós-Pago
            </h3>
            <p className="text-muted-foreground mt-2">Valores por crédito • Faturamento mensal</p>
          </div>
          
          <div className="p-8">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2">
                    <TableHead className="text-foreground font-bold text-base">Quantidade</TableHead>
                    <TableHead className="text-foreground font-bold text-base">Preço/Unidade</TableHead>
                    <TableHead className="text-foreground font-bold text-base">Investimento</TableHead>
                    <TableHead className="text-foreground font-bold text-base text-right">Economia</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resellerTiers.map((tier, index) => (
                    <TableRow 
                      key={index} 
                      className={`hover:bg-primary/5 transition-smooth group ${
                        tier.recommended ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                      }`}
                    >
                      <TableCell className="font-semibold py-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            tier.recommended ? 'bg-primary/20' : 'bg-muted'
                          }`}>
                            <Users className={`w-5 h-5 ${tier.recommended ? 'text-primary' : 'text-muted-foreground'}`} />
                          </div>
                          <div>
                            <div className="text-base">{tier.quantity}</div>
                            {tier.recommended && (
                              <Badge variant="outline" className="mt-1 text-xs bg-primary/10 text-primary border-primary/30">
                                Mais Vendido
                              </Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-6">
                        <div className="text-2xl font-bold text-primary">{tier.pricePerUnit}</div>
                        <div className="text-xs text-muted-foreground">por crédito</div>
                      </TableCell>
                      <TableCell className="py-6">
                        <div className="text-foreground font-medium">{tier.totalMin}</div>
                        <div className="text-sm text-muted-foreground">até {tier.totalMax}</div>
                      </TableCell>
                      <TableCell className="text-right py-6">
                        {tier.discount !== "Base" ? (
                          <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm px-3 py-1 shadow-sm">
                            {tier.discount}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground text-sm">Preço base</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2">Sistema Pós-Pago Simples</h4>
                  <p className="text-muted-foreground mb-3">
                    Preço fixo de R$ 3,50 por crédito, sem limite de quantidade. 
                    Cobrança automática no início do mês, você paga apenas pelos clientes ativos.
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm font-semibold text-foreground">
                      Pagamento apenas pelos clientes ativos no início do mês. Clientes inativos não geram custo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="gradient-card hover-scale hover:border-primary/50 transition-smooth group"
            >
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Features & How it Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <Card className="gradient-card border-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                O que está incluído
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-card-foreground group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* How it Works */}
          <Card className="gradient-card bg-gradient-to-br from-primary/5 to-background border-2 border-primary/20">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Como funciona?</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Cadastro Rápido", desc: "Preencha o formulário e receba acesso imediato ao painel" },
                  { step: "2", title: "Comece a Vender", desc: "Gerencie seus clientes e créditos pelo painel exclusivo" },
                  { step: "3", title: "Pagamento Mensal", desc: "Cobrança automática no início do mês apenas pelos clientes ativos" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-smooth">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="gradient-card bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/20 inline-block">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Torne-se um revendedor oficial e aproveite os melhores preços do mercado
              </p>
             <Button asChild size="lg" className="text-lg px-8 shadow-lg group"><a href="https://wa.me/5551935052237?text=Ol%C3%A1,%20tenho%20interesse%20em%20ser%20revendedor!" target="_blank"  rel="noopener noreferrer">
    <Users className="w-5 h-5 mr-2" />
    Quero ser Revendedor
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
  </a>
</Button>

              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Sem taxa de adesão
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Suporte dedicado
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Pagamento flexível
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
