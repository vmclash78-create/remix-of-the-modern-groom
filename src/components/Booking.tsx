import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Check, User, Scissors, Clock, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

const services = [
  { id: "corte", name: "Corte Masculino", price: "R$ 45", duration: "30 min" },
  { id: "barba", name: "Barba", price: "R$ 35", duration: "25 min" },
  { id: "combo", name: "Corte + Barba", price: "R$ 70", duration: "50 min" },
  { id: "sobrancelha", name: "Sobrancelha", price: "R$ 20", duration: "15 min" },
];

const barbers = [
  { id: "carlos", name: "Carlos Silva", image: barber1 },
  { id: "lucas", name: "Lucas Mendes", image: barber2 },
  { id: "roberto", name: "Roberto Alves", image: barber3 },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00",
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", whatsapp: "" });

  const handleSubmit = () => {
    const service = services.find(s => s.id === selectedService);
    const barber = barbers.find(b => b.id === selectedBarber);
    
    const message = encodeURIComponent(
      `Olá! Gostaria de confirmar meu agendamento:\n\n` +
      `📋 Serviço: ${service?.name}\n` +
      `💈 Barbeiro: ${barber?.name}\n` +
      `📅 Data: ${selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : ""}\n` +
      `⏰ Horário: ${selectedTime}\n` +
      `👤 Nome: ${formData.name}\n` +
      `📱 Telefone: ${formData.phone}`
    );
    
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
    
    toast.success("Agendamento enviado!", {
      description: "Você será redirecionado para o WhatsApp para confirmar.",
    });

    // Reset form
    setStep(1);
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedDate(undefined);
    setSelectedTime(null);
    setFormData({ name: "", phone: "", whatsapp: "" });
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService !== null;
      case 2: return selectedBarber !== null;
      case 3: return selectedDate !== undefined && selectedTime !== null;
      case 4: return formData.name.trim() !== "" && formData.phone.trim() !== "";
      default: return false;
    }
  };

  return (
    <section id="agendamento" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-gold font-medium uppercase tracking-widest text-sm">Agendamento</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Agende Seu <span className="text-gradient-gold">Horário</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Reserve seu horário em poucos passos e garanta seu atendimento.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                    step >= s
                      ? "bg-gradient-gold text-primary-foreground shadow-gold"
                      : "bg-secondary text-muted-foreground border border-border"
                  )}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={cn(
                      "w-12 md:w-20 h-1 mx-2 rounded transition-all duration-300",
                      step > s ? "bg-gradient-gold" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Card */}
        <div className="max-w-3xl mx-auto bg-gradient-card rounded-2xl border border-border p-6 md:p-10">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Scissors className="w-6 h-6 text-gold" />
                <h3 className="font-display text-2xl font-semibold">Escolha o Serviço</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
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
          )}

          {/* Step 2: Barber Selection */}
          {step === 2 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-gold" />
                <h3 className="font-display text-2xl font-semibold">Escolha o Barbeiro</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    onClick={() => setSelectedBarber(barber.id)}
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
          )}

          {/* Step 3: Date & Time Selection */}
          {step === 3 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-gold" />
                <h3 className="font-display text-2xl font-semibold">Data e Horário</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">Selecione a Data</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="dark"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP", { locale: ptBR }) : "Escolha uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">Horários Disponíveis</label>
                  <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "py-2 px-3 rounded-lg border text-sm transition-all duration-300",
                          selectedTime === time
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-border hover:border-gold/50"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-6 h-6 text-gold" />
                <h3 className="font-display text-2xl font-semibold">Seus Dados</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">Nome Completo</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-gold" />
                    Resumo do Agendamento
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Serviço:</span> {services.find(s => s.id === selectedService)?.name}</p>
                    <p><span className="text-muted-foreground">Barbeiro:</span> {barbers.find(b => b.id === selectedBarber)?.name}</p>
                    <p><span className="text-muted-foreground">Data:</span> {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : "-"}</p>
                    <p><span className="text-muted-foreground">Horário:</span> {selectedTime || "-"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            {step > 1 ? (
              <Button variant="dark" onClick={() => setStep(step - 1)}>
                Voltar
              </Button>
            ) : (
              <div />
            )}
            {step < 4 ? (
              <Button
                variant="gold"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
              >
                Continuar
              </Button>
            ) : (
              <Button
                variant="gold"
                onClick={handleSubmit}
                disabled={!canProceed()}
              >
                Confirmar via WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
