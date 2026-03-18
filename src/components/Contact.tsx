import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-[#8DA399] font-bold tracking-widest uppercase text-sm">Kontakt</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#2D3436]">Besuchen Sie uns in Musterhausen</h3>
              <p className="text-lg text-[#2D3436]/60">
                Wir freuen uns darauf, Sie bald persönlich in unserem Salon begrüßen zu dürfen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#8DA399]">
                  <MapPin className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-xs">Standort</span>
                </div>
                <p className="text-[#2D3436]/70">
                  Hauptstraße 123<br />
                  12345 Musterhausen
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#8DA399]">
                  <Clock className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-xs">Öffnungszeiten</span>
                </div>
                <div className="text-[#2D3436]/70 space-y-1">
                  <p className="flex justify-between"><span>Mo - Fr:</span> <span>09:00 - 18:30</span></p>
                  <p className="flex justify-between"><span>Sa:</span> <span>08:30 - 14:00</span></p>
                  <p className="flex justify-between"><span>So:</span> <span>Geschlossen</span></p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#8DA399]">
                  <Phone className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-xs">Anrufen</span>
                </div>
                <p className="text-[#2D3436]/70">0123 / 456 789</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#8DA399]">
                  <Mail className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-xs">Schreiben</span>
                </div>
                <p className="text-[#2D3436]/70">info@salon-mustermann.de</p>
              </div>
            </div>

            {/* Mock Map */}
            <div className="w-full h-64 bg-gray-100 rounded-[40px] relative overflow-hidden group border border-[#8DA399]/10">
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/10.0,51.0,12/800x400?access_token=pk.xxx')] bg-cover bg-center grayscale opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-[#8DA399] fill-current animate-bounce" />
                  <span className="text-xs font-bold text-[#2D3436] mt-2">Max Mustermann Salon</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F9FA] p-10 md:p-12 rounded-[48px] border border-[#8DA399]/10">
            <h4 className="text-2xl font-bold text-[#2D3436] mb-8">Schreiben Sie uns</h4>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2D3436]/60 ml-1">Name</label>
                <Input placeholder="Ihr Name" className="rounded-2xl border-none shadow-sm focus-visible:ring-[#8DA399] h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2D3436]/60 ml-1">E-Mail</label>
                <Input type="email" placeholder="ihre@email.de" className="rounded-2xl border-none shadow-sm focus-visible:ring-[#8DA399] h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2D3436]/60 ml-1">Nachricht</label>
                <Textarea placeholder="Wie können wir Ihnen helfen?" className="rounded-[24px] border-none shadow-sm focus-visible:ring-[#8DA399] min-h-[150px]" />
              </div>
              <Button className="w-full bg-[#8DA399] hover:bg-[#7A8E85] text-white rounded-2xl h-14 text-lg font-bold">
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
