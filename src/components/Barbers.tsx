import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";
import { Instagram } from "lucide-react";

const barbers = [
  {
    name: "Carlos Silva",
    specialty: "Especialista em Degradê",
    image: barber1,
    instagram: "@carlos.barber",
    experience: "8 anos",
  },
  {
    name: "Lucas Mendes",
    specialty: "Especialista em Fade",
    image: barber2,
    instagram: "@lucas.cuts",
    experience: "5 anos",
  },
  {
    name: "Roberto Alves",
    specialty: "Barba Clássica",
    image: barber3,
    instagram: "@roberto.barbearia",
    experience: "12 anos",
  },
];

const Barbers = () => {
  return (
    <section id="barbeiros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-widest text-sm">Nossa Equipe</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Barbeiros <span className="text-gradient-gold">Especializados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Profissionais experientes e apaixonados pela arte de barbear, prontos para transformar seu visual.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {barbers.map((barber, index) => (
            <div
              key={barber.name}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover:border-gold transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-bold mb-1">{barber.name}</h3>
                <p className="text-gold font-medium mb-2">{barber.specialty}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{barber.experience} de experiência</span>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="text-sm">{barber.instagram}</span>
                  </a>
                </div>
              </div>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
