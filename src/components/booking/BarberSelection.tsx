import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Barber {
  id: string;
  name: string;
  image: string;
}

interface BarberSelectionProps {
  barbers: Barber[];
  selectedBarber: string | null;
  onSelect: (id: string) => void;
}

const BarberSelection = ({ barbers, selectedBarber, onSelect }: BarberSelectionProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-6 h-6 text-gold" />
        <h3 className="font-display text-2xl font-semibold">Escolha o Barbeiro</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {barbers.map((barber) => (
          <button
            key={barber.id}
            onClick={() => onSelect(barber.id)}
            className={cn(
              "p-4 rounded-xl border text-center transition-all duration-300",
              selectedBarber === barber.id
                ? "border-gold bg-gold/10"
                : "border-border hover:border-gold/50"
            )}
          >
            <img
              src={barber.image}
              alt={barber.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
            />
            <span className="font-semibold">{barber.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BarberSelection;
