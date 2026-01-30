import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale Conosco
      </span>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </button>
  );
};

export default WhatsAppButton;
