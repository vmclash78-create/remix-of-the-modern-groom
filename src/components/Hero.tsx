import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.querySelector("#agendamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-muted-foreground">Barbearia Premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Seu Estilo{" "}
            <span className="text-gradient-gold">Começa Aqui</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experiência premium em barbearia masculina. Cortes precisos, ambiente exclusivo e profissionais especializados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="xl" onClick={scrollToBooking}>
              Agendar Agora
            </Button>
            <Button 
              variant="goldOutline" 
              size="xl"
              onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">8+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">5K+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">4.9</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-gold" />
      </div>
    </section>
  );
};

export default Hero;
