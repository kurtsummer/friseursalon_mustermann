import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FC] pt-24 pb-32 md:pt-40 md:pb-48">
      {/* Subtle Background Blobs (80% Trust / 20% Innovation) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#6D5EF5]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-[#7FA38A]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Text Content */}
          <div className="flex-1 text-left max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#6D5EF5]/8 text-[#6D5EF5] text-sm font-bold mb-8 uppercase tracking-widest border border-[#6D5EF5]/10">
              <Sparkles className="w-4 h-4" />
              <span>KI-Marketing Strategie für KMU</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1F2A44] mb-8 leading-[1.05]">
              KI-Marketing für KMU — <br />
              <span className="text-[#6D5EF5]">persönlich</span> begleitet, <br />
              <span className="text-[#6D5EF5]">professionell</span> umgesetzt.
            </h1>
            
            <p className="text-xl md:text-2xl text-[#1A1D24]/70 mb-12 leading-relaxed max-w-2xl font-medium">
              Ich unterstütze kleine und mittlere Unternehmen dabei, KI sinnvoll im Marketing einzusetzen — von Social Media über Webseiten bis zu effizienteren Prozessen. Verständlich in der Beratung, modern in der Umsetzung und klar auf Ergebnisse ausgerichtet.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                size="lg"
                className="w-full sm:w-auto h-16 px-10 rounded-2xl bg-[#1F2A44] hover:bg-[#1F2A44]/95 text-white font-bold text-xl shadow-xl shadow-[#1F2A44]/10 transition-all hover-lift active:scale-[0.98]"
              >
                Kostenloses Erstgespräch anfragen
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-16 px-10 rounded-2xl border-[#1F2A44]/10 text-[#1F2A44]/70 font-bold text-xl hover:bg-white hover:text-[#1F2A44] transition-all hover-lift"
              >
                Leistungen ansehen
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-[#1A1D24]/50 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7FA38A]"></span>
                Kostenlos & unverbindlich
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7FA38A]"></span>
                30 Min. Online-Call (Zoom)
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 text-[#1A1D24]/60">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#7FA38A]" />
                <span className="text-base font-bold">Keine Vorkenntnisse nötig</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#7FA38A]" />
                <span className="text-base font-bold">Individuelle Betreuung</span>
              </div>
            </div>
          </div>

          {/* Visual Side (Calm & High-Quality) */}
          <div className="flex-1 relative w-full max-w-2xl animate-fade-in delay-200 hidden lg:block">
            <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-50 overflow-hidden group">
              {/* Mock Content */}
              <div className="space-y-8 opacity-90">
                <div className="flex items-center justify-between border-b border-slate-50 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F9FC] flex items-center justify-center border border-slate-50">
                      <Sparkles className="w-6 h-6 text-[#6D5EF5]" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-32 bg-[#1F2A44]/10 rounded-full"></div>
                      <div className="h-2 w-20 bg-slate-50 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-[#F8F9FC]" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="h-40 rounded-3xl bg-[#F8F9FC] border border-slate-50 p-6 flex flex-col justify-end gap-3">
                    <div className="h-2 w-16 bg-[#1F2A44]/10 rounded-full mb-auto"></div>
                    <div className="h-1.5 w-full bg-[#1F2A44]/5 rounded-full"></div>
                    <div className="h-1.5 w-3/4 bg-[#1F2A44]/5 rounded-full"></div>
                  </div>
                  <div className="h-40 rounded-3xl bg-[#7FA38A]/5 border border-[#7FA38A]/10 p-6 flex flex-col justify-end gap-3">
                    <div className="h-2 w-16 bg-[#7FA38A]/20 rounded-full mb-auto"></div>
                    <div className="h-1.5 w-full bg-[#7FA38A]/10 rounded-full"></div>
                    <div className="h-1.5 w-3/4 bg-[#7FA38A]/10 rounded-full"></div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#1F2A44] text-white flex items-center gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                     <CheckCircle2 className="w-6 h-6 text-white" />
                   </div>
                   <div className="flex-1">
                     <div className="h-2.5 w-1/2 bg-white/20 rounded-full mb-2"></div>
                     <div className="h-2 w-1/3 bg-white/10 rounded-full"></div>
                   </div>
                   <div className="px-4 py-2 rounded-xl bg-[#6D5EF5] text-[10px] font-black uppercase tracking-widest">
                     Live
                   </div>
                </div>
              </div>
              
              {/* Floating Decorative Badge */}
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#6D5EF5]/5 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="w-14 h-14 rounded-2xl bg-[#7FA38A]/5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#7FA38A] animate-pulse"></div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-black uppercase tracking-wider mb-1">Strategie aktiv</div>
                <div className="text-lg font-bold text-[#1F2A44]">KI Content-Workflow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
