import { Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
}

interface ServiceSelectionProps {
  services: Service[];
  selectedService: string | null;
  onSelect: (id: string) => void;
}

const ServiceSelection = ({ services, selectedService, onSelect }: ServiceSelectionProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Scissors className="w-6 h-6 text-gold" />
        <h3 className="font-display text-2xl font-semibold">Escolha o Serviço</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelect(service.id)}
            className={cn(
              "p-4 rounded-xl border text-left transition-all duration-300",
              selectedService === service.id
                ? "border-gold bg-gold/10"
                : "border-border hover:border-gold/50"
            )}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold">{service.name}</span>
              <span className="text-gold font-bold">{service.price}</span>
            </div>
            <span className="text-sm text-muted-foreground">{service.duration}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
