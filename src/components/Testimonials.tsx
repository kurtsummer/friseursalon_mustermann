import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Julia Müller",
      role: "Stammkundin",
      text: "Max ist einfach der Beste! Er versteht sofort, was ich möchte und die Farbe ist jedes Mal perfekt. Die Atmosphäre im Salon ist so entspannend.",
      avatar: "https://i.pravatar.cc/150?u=12"
    },
    {
      name: "Thomas Weber",
      role: "Business-Schnitt",
      text: "Habe lange nach einem Friseur gesucht, der einen sauberen Fade hinbekommt. Hier passt einfach alles. Sehr zu empfehlen!",
      avatar: "https://i.pravatar.cc/150?u=15"
    },
    {
      name: "Sarah Schmidt",
      role: "Brautfrisur",
      text: "Vielen Dank für das wunderschöne Styling an meiner Hochzeit. Ich habe mich den ganzen Tag wie eine Prinzessin gefühlt.",
      avatar: "https://i.pravatar.cc/150?u=20"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#B4D3B2]/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#8DA399] font-bold tracking-widest uppercase text-sm">Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#2D3436]">Was unsere Kunden sagen</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm relative group hover:shadow-md transition-shadow">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#8DA399]/10 group-hover:text-[#8DA399]/20 transition-colors" />
              
              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-[#2D3436]/70 mb-8 italic leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[#2D3436]">{review.name}</p>
                  <p className="text-sm text-[#2D3436]/50">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
