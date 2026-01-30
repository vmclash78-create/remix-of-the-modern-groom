import { Scissors } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="text-gold font-medium uppercase tracking-widest text-sm">Nossa História</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Sobre a <span className="text-gradient-gold">CorteCerto</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundada em 2016, a CorteCerto nasceu da paixão por transformar a experiência 
                masculina em barbearias. Nosso compromisso é oferecer mais do que um simples 
                corte – entregamos um momento de cuidado pessoal em um ambiente sofisticado.
              </p>
              <p>
                Com profissionais altamente qualificados e constantemente atualizados nas 
                últimas tendências, garantimos resultados impecáveis que realçam a 
                personalidade de cada cliente.
              </p>
              <p>
                Utilizamos produtos premium e técnicas modernas para proporcionar uma 
                experiência única de bem-estar masculino.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-gold" />
                </div>
                <span className="font-medium">Produtos Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-gold" />
                </div>
                <span className="font-medium">Ambiente Exclusivo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-gold" />
                </div>
                <span className="font-medium">Técnicas Modernas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-gold" />
                </div>
                <span className="font-medium">Atendimento VIP</span>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl border border-border p-8 md:p-12">
              <h3 className="font-display text-3xl font-bold mb-8 text-center">
                Números que <span className="text-gradient-gold">Impressionam</span>
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-gold mb-2">8+</div>
                  <div className="text-muted-foreground">Anos no Mercado</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-gold mb-2">5K+</div>
                  <div className="text-muted-foreground">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-gold mb-2">3</div>
                  <div className="text-muted-foreground">Barbeiros Expert</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-gold mb-2">4.9</div>
                  <div className="text-muted-foreground">Avaliação Google</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
