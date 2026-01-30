import { Scissors, User, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    name: "Corte Masculino",
    description: "Cortes modernos e clássicos executados com precisão e técnicas avançadas.",
    price: "R$ 45",
    duration: "30 min",
  },
  {
    icon: User,
    name: "Barba",
    description: "Modelagem e tratamento completo para uma barba impecável e bem cuidada.",
    price: "R$ 35",
    duration: "25 min",
  },
  {
    icon: Sparkles,
    name: "Corte + Barba",
    description: "Combo completo para o homem moderno que quer o visual perfeito.",
    price: "R$ 70",
    duration: "50 min",
  },
  {
    icon: Eye,
    name: "Sobrancelha",
    description: "Design e limpeza de sobrancelhas para um olhar mais expressivo.",
    price: "R$ 20",
    duration: "15 min",
  },
];

const Services = () => {
  const scrollToBooking = () => {
    document.querySelector("#agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-widest text-sm">Nossos Serviços</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Serviços <span className="text-gradient-gold">Premium</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma experiência completa em cuidados masculinos com produtos de alta qualidade e técnicas modernas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group relative bg-gradient-card rounded-xl p-6 border border-border hover:border-gold transition-all duration-500 hover-gold-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Price & Duration */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <span className="font-display text-2xl font-bold text-gold">{service.price}</span>
                </div>
                <span className="text-sm text-muted-foreground">{service.duration}</span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="xl" onClick={scrollToBooking}>
            Agendar Serviço
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
