import { Scissors, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <Scissors className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold text-gold">
                CORTE<span className="text-foreground">CERTO</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Barbearia premium com foco em excelência e cuidado masculino. Seu estilo começa aqui.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-gold transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-muted-foreground hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="#barbeiros" className="text-muted-foreground hover:text-gold transition-colors">Barbeiros</a></li>
              <li><a href="#agendamento" className="text-muted-foreground hover:text-gold transition-colors">Agendamento</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Horários</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Seg - Sex: 09:00 - 20:00</li>
              <li>Sábado: 09:00 - 18:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CorteCerto. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com ❤️ para homens de estilo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
