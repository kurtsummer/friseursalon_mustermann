import { Scissors, Instagram, Facebook, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#2D3436] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#8DA399] p-2 rounded-full text-white">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Max Mustermann <span className="text-[#8DA399] font-light">| Salon</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Ihr Friseurmeister in Musterhausen. Wir stehen für individuelle Beratung, moderne Schnitte und erstklassigen Service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8DA399] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8DA399] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-[#8DA399] transition-colors">Über uns</a></li>
              <li><a href="#services" className="hover:text-[#8DA399] transition-colors">Unsere Services</a></li>
              <li><a href="#gallery" className="hover:text-[#8DA399] transition-colors">Inspiration</a></li>
              <li><a href="#contact" className="hover:text-[#8DA399] transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-[#8DA399] transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-[#8DA399] transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-[#8DA399] transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-[#8DA399] transition-colors">Cookie-Einstellungen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Termin vereinbaren</h4>
            <p className="text-white/60 mb-6">
              Bequem online oder telefonisch Ihren nächsten Termin sichern.
            </p>
            <a href="tel:+49123456789" className="flex items-center gap-3 text-[#8DA399] font-bold text-xl hover:scale-105 transition-transform origin-left">
              <Phone className="w-6 h-6" />
              0123 / 456 789
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Salon Max Mustermann. Alle Rechte vorbehalten.</p>
          <p>Made with ❤️ in Musterhausen</p>
        </div>
      </div>
    </footer>
  );
};
