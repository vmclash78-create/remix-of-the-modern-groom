import { Clock, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DateTimeSelectionProps {
  selectedDate: Date | undefined;
  selectedTime: string | null;
  timeSlots: string[];
  bookedSlots: string[];
  onDateSelect: (date: Date | undefined) => void;
  onTimeSelect: (time: string) => void;
}

const DateTimeSelection = ({
  selectedDate,
  selectedTime,
  timeSlots,
  bookedSlots,
  onDateSelect,
  onTimeSelect,
}: DateTimeSelectionProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-6 h-6 text-gold" />
        <h3 className="font-display text-2xl font-semibold">Data e Horário</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            Selecione a Data
          </label>
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
                onSelect={onDateSelect}
                disabled={(date) => date < new Date() || date.getDay() === 0}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            Horários Disponíveis
          </label>
          <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
            {timeSlots.map((time) => {
              const isBooked = bookedSlots.includes(time);
              return (
                <button
                  key={time}
                  onClick={() => !isBooked && onTimeSelect(time)}
                  disabled={isBooked}
                  className={cn(
                    "py-2 px-3 rounded-lg border text-sm transition-all duration-300",
                    isBooked
                      ? "border-border bg-muted text-muted-foreground cursor-not-allowed line-through"
                      : selectedTime === time
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-border hover:border-gold/50"
                  )}
                >
                  {time}
                </button>
              );
            })}
          </div>
          {bookedSlots.length > 0 && (
            <p className="text-xs text-muted-foreground mt-2">
              Horários riscados já estão reservados
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
