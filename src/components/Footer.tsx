import { Instagram, Facebook, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#2D3436] text-white pt-24 pb-12" role="contentinfo">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="inline-block group" aria-label="Max Mustermann Salon Homepage">
              <img
                src="/logo.png"
                alt="Max Mustermann Friseurmeister Logo"
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90 transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-white/60 leading-relaxed">
              Ihr Friseurmeister in Musterhausen. Wir stehen für individuelle Beratung, moderne Schnitte und erstklassigen Service.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Folgen Sie uns auf Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8DA399] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Besuchen Sie uns auf Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8DA399] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <nav aria-label="Footer Quick Links">
              <ul className="space-y-4 text-white/60">
                <li><Link to="/#about" className="hover:text-[#8DA399] transition-colors">Über uns</Link></li>
                <li><Link to="/#services" className="hover:text-[#8DA399] transition-colors">Unsere Services</Link></li>
                <li><Link to="/#gallery" className="hover:text-[#8DA399] transition-colors">Inspiration</Link></li>
                <li><Link to="/#contact" className="hover:text-[#8DA399] transition-colors">Kontakt</Link></li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Rechtliches</h4>
            <nav aria-label="Rechtliche Informationen">
              <ul className="space-y-4 text-white/60">
                <li><Link to="/impressum" className="hover:text-[#8DA399] transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-[#8DA399] transition-colors">Datenschutz</Link></li>
                <li><Link to="/agb" className="hover:text-[#8DA399] transition-colors">AGB</Link></li>
                <li><button type="button" className="hover:text-[#8DA399] transition-colors text-left">Cookie-Einstellungen</button></li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Termin vereinbaren</h4>
            <p className="text-white/60 mb-6">
              Bequem online oder telefonisch Ihren nächsten Termin sichern.
            </p>
            <a href="tel:+49123456789" className="flex items-center gap-3 text-[#8DA399] font-bold text-xl hover:scale-105 transition-transform origin-left">
              <Phone className="w-6 h-6" aria-hidden="true" />
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
