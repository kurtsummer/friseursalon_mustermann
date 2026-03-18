import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Services = () => {
  const servicesData = {
    damen: [
      { name: "Waschen, Schneiden, Stylen", price: "ab 55€", desc: "Inkl. Beratung, Haarwäsche und Föhnen." },
      { name: "Färben & Coloration", price: "ab 70€", desc: "Brillante Farben und langanhaltender Glanz." },
      { name: "Balayage / Highlights", price: "ab 120€", desc: "Natürliche Farbverläufe mit modernster Technik." },
      { name: "Festfrisur / Hochstecken", price: "ab 85€", desc: "Für Ihren besonderen Anlass." },
    ],
    herren: [
      { name: "Herrenschnitt Classic", price: "28€", desc: "Präziser Maschinenschnitt oder Schere." },
      { name: "Waschen, Schneiden, Styling", price: "35€", desc: "Das volle Programm für den modernen Mann." },
      { name: "Bartpflege & Konturen", price: "ab 15€", desc: "Perfekt getrimmt und gepflegt." },
      { name: "Grauhaarkaschierung", price: "25€", desc: "Dezente Abdeckung für ein natürliches Ergebnis." },
    ],
    styling: [
      { name: "Augenbrauen zupfen", price: "12€", desc: "Perfekte Form für Ihr Gesicht." },
      { name: "Wimpern färben", price: "15€", desc: "Für einen intensiven Augenaufschlag." },
      { name: "Intensive Haarpflegekur", price: "18€", desc: "Tiefenpflege für geschädigtes Haar." },
      { name: "Kopfmassage", price: "10€", desc: "10 Minuten pure Entspannung." },
    ]
  };

  return (
    <section id="services" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-[#8DA399] font-bold tracking-widest uppercase text-sm">Unsere Leistungen</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#2D3436]">Was wir für Sie tun</h3>
          <p className="text-lg text-[#2D3436]/60">
            Wir bieten eine breite Palette an Dienstleistungen für jeden Haartyp und Stil. 
            Entdecken Sie unsere Preise und Behandlungen.
          </p>
        </div>

        <Tabs defaultValue="damen" className="w-full max-w-5xl mx-auto">
          <TabsList className="bg-white p-1 rounded-full shadow-sm mb-12 border border-[#8DA399]/20 h-auto flex flex-wrap justify-center">
            <TabsTrigger value="damen" className="rounded-full px-8 py-3 data-[state=active]:bg-[#8DA399] data-[state=active]:text-white text-lg">Damen</TabsTrigger>
            <TabsTrigger value="herren" className="rounded-full px-8 py-3 data-[state=active]:bg-[#8DA399] data-[state=active]:text-white text-lg">Herren</TabsTrigger>
            <TabsTrigger value="styling" className="rounded-full px-8 py-3 data-[state=active]:bg-[#8DA399] data-[state=active]:text-white text-lg">Extra & Styling</TabsTrigger>
          </TabsList>

          {Object.entries(servicesData).map(([key, services]) => (
            <TabsContent key={key} value={key} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[32px] text-left border border-[#8DA399]/10 hover:border-[#8DA399]/40 hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-[#2D3436] group-hover:text-[#8DA399] transition-colors">{service.name}</h4>
                      <span className="text-xl font-bold text-[#8DA399]">{service.price}</span>
                    </div>
                    <p className="text-[#2D3436]/60 mb-4">{service.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8DA399] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Check className="w-4 h-4" />
                      JETZT BUCHEN
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 p-8 bg-[#E9D5CA]/30 rounded-[40px] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h4 className="text-2xl font-bold text-[#2D3436]">Nicht das Richtige dabei?</h4>
            <p className="text-[#2D3436]/70">Rufen Sie uns an für eine individuelle Preisauskunft.</p>
          </div>
          <a href="tel:+49123456789" className="text-2xl font-bold text-[#8DA399] hover:underline">
            0123 / 456 789
          </a>
        </div>
      </div>
    </section>
  );
};
