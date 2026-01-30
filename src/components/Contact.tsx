import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-widest text-sm">Contato</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Venha Nos <span className="text-gradient-gold">Visitar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para recebê-lo em nosso espaço.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua das Barbearias, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP: 01234-567
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Telefone / WhatsApp</h3>
                <p className="text-muted-foreground">(11) 99999-9999</p>
                <Button variant="gold" className="mt-3" onClick={openWhatsApp}>
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Horário de Funcionamento</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Segunda a Sexta: 09:00 - 20:00</p>
                  <p>Sábado: 09:00 - 18:00</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-4">Siga-nos</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1598388584366!2d-46.65390498502155!3d-23.564611184683365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1629300000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
