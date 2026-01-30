import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Loader2 } from "lucide-react";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";
import { useBookings } from "@/hooks/useBookings";
import BookingProgress from "@/components/booking/BookingProgress";
import ServiceSelection from "@/components/booking/ServiceSelection";
import BarberSelection from "@/components/booking/BarberSelection";
import DateTimeSelection from "@/components/booking/DateTimeSelection";
import ContactForm from "@/components/booking/ContactForm";

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
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);

  const { isLoading, refreshAvailability, createBooking, bookedSlots } = useBookings();

  // Refresh availability when barber or date changes
  useEffect(() => {
    if (selectedBarber && selectedDate) {
      refreshAvailability(selectedBarber, selectedDate);
    }
  }, [selectedBarber, selectedDate]);

  // Update booked times when slots change
  useEffect(() => {
    if (selectedDate) {
      const dateStr = selectedDate.toISOString().split('T')[0];
      const times = bookedSlots
        .filter(slot => slot.booking_date === dateStr)
        .map(slot => slot.booking_time);
      setBookedTimes(times);
    }
  }, [bookedSlots, selectedDate]);

  const handleSubmit = async () => {
    const service = services.find(s => s.id === selectedService);
    const barber = barbers.find(b => b.id === selectedBarber);
    
    if (!service || !barber || !selectedDate || !selectedTime) return;

    const bookingData = {
      service_id: service.id,
      service_name: service.name,
      service_price: service.price,
      barber_id: barber.id,
      barber_name: barber.name,
      booking_date: selectedDate.toISOString().split('T')[0],
      booking_time: selectedTime,
      client_name: formData.name,
      client_phone: formData.phone,
    };

    const success = await createBooking(bookingData);
    
    if (success) {
      // Send WhatsApp message
      const message = encodeURIComponent(
        `Olá! Gostaria de confirmar meu agendamento:\n\n` +
        `📋 Serviço: ${service.name}\n` +
        `💈 Barbeiro: ${barber.name}\n` +
        `📅 Data: ${format(selectedDate, "dd/MM/yyyy", { locale: ptBR })}\n` +
        `⏰ Horário: ${selectedTime}\n` +
        `👤 Nome: ${formData.name}\n` +
        `📱 Telefone: ${formData.phone}`
      );
      
      window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
      
      toast.success("Agendamento realizado!", {
        description: "Seu horário foi reservado. Confirme pelo WhatsApp.",
      });

      // Reset form
      setStep(1);
      setSelectedService(null);
      setSelectedBarber(null);
      setSelectedDate(undefined);
      setSelectedTime(null);
      setFormData({ name: "", phone: "" });
      setBookedTimes([]);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
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

        <BookingProgress currentStep={step} />

        {/* Booking Card */}
        <div className="max-w-3xl mx-auto bg-gradient-card rounded-2xl border border-border p-6 md:p-10">
          {step === 1 && (
            <ServiceSelection
              services={services}
              selectedService={selectedService}
              onSelect={setSelectedService}
            />
          )}

          {step === 2 && (
            <BarberSelection
              barbers={barbers}
              selectedBarber={selectedBarber}
              onSelect={setSelectedBarber}
            />
          )}

          {step === 3 && (
            <DateTimeSelection
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              timeSlots={timeSlots}
              bookedSlots={bookedTimes}
              onDateSelect={handleDateSelect}
              onTimeSelect={setSelectedTime}
            />
          )}

          {step === 4 && (
            <ContactForm
              formData={formData}
              serviceName={services.find(s => s.id === selectedService)?.name}
              barberName={barbers.find(b => b.id === selectedBarber)?.name}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onChange={(field, value) => setFormData({ ...formData, [field]: value })}
            />
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
                disabled={!canProceed() || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Agendando...
                  </>
                ) : (
                  "Confirmar via WhatsApp"
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
