import { Phone, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ContactFormProps {
  formData: { name: string; phone: string };
  serviceName: string | undefined;
  barberName: string | undefined;
  selectedDate: Date | undefined;
  selectedTime: string | null;
  onChange: (field: "name" | "phone", value: string) => void;
}

const ContactForm = ({
  formData,
  serviceName,
  barberName,
  selectedDate,
  selectedTime,
  onChange,
}: ContactFormProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Phone className="w-6 h-6 text-gold" />
        <h3 className="font-display text-2xl font-semibold">Seus Dados</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            Nome Completo
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
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
            <p>
              <span className="text-muted-foreground">Serviço:</span> {serviceName}
            </p>
            <p>
              <span className="text-muted-foreground">Barbeiro:</span> {barberName}
            </p>
            <p>
              <span className="text-muted-foreground">Data:</span>{" "}
              {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : "-"}
            </p>
            <p>
              <span className="text-muted-foreground">Horário:</span> {selectedTime || "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
