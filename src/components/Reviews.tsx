import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marcelo Santos",
    rating: 5,
    text: "Melhor barbearia da região! Atendimento impecável e o ambiente é muito agradável. Recomendo demais!",
    date: "Há 2 semanas",
  },
  {
    name: "Felipe Costa",
    rating: 5,
    text: "Carlos é um artista! Sempre saio satisfeito com o corte. A barba fica perfeita.",
    date: "Há 1 mês",
  },
  {
    name: "Ricardo Lima",
    rating: 5,
    text: "Ambiente premium, profissionais qualificados e resultado excelente. Vale cada centavo!",
    date: "Há 3 semanas",
  },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-widest text-sm">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            O Que Nossos <span className="text-gradient-gold">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Avaliações reais de clientes que confiam em nosso trabalho.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-xl border border-border p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold/20 absolute top-4 right-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="text-gold">★</span> Google
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
