import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ChannelsSection } from "@/components/ChannelsSection";
import { ContentShowcase } from "@/components/ContentShowcase";
import { PricingSection } from "@/components/PricingSection";
import { ResellerSection } from "@/components/ResellerSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ChannelsSection />
        <ContentShowcase />
        <PricingSection />
        <ResellerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
