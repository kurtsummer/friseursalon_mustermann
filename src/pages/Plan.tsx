import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChefHat, 
  ArrowLeft, 
  Calendar, 
  ShoppingCart, 
  Printer, 
  Share2, 
  Clock, 
  Flame, 
  Wallet,
  CheckCircle2,
  UtensilsCrossed,
  ListChecks,
  Info
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Meal {
  type: string;
  name: string;
  calories: number;
  time: string;
  ingredients: string[];
  instructions: string[];
}

interface DayPlan {
  day: string;
  meals: Meal[];
}

const Plan = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState<DayPlan[]>([]);
  const [inputData, setInputData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("prep_master_input");
    if (saved) {
      const data = JSON.parse(saved);
      setInputData(data);
      generateMockPlan(data);
    } else {
      navigate("/generator");
    }
  }, [navigate]);

  const generateMockPlan = (data: any) => {
    const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    
    const recipes: Record<string, Omit<Meal, "type">[]> = {
      Omnivor: [
        { 
          name: "Hähnchen-Reis-Pfanne", 
          calories: 650, 
          time: "25 Min", 
          ingredients: ["150g Hähnchenbrust", "80g Reis (ungekocht)", "150g Brokkoli", "1 EL Sojasauce", "1 TL Öl"],
          instructions: ["Reis nach Packungsanweisung kochen.", "Hähnchen in Würfel schneiden und in Öl goldbraun braten.", "Brokkoli kurz mitdünsten.", "Mit Sojasauce ablöschen und alles vermengen."]
        },
        { 
          name: "Pasta Bolognese", 
          calories: 750, 
          time: "30 Min", 
          ingredients: ["100g Rinderhack", "100g Vollkornpasta", "200ml Tomatensauce", "1 EL Parmesan", "Zwiebel, Knoblauch"],
          instructions: ["Pasta kochen.", "Hackfleisch mit Zwiebeln und Knoblauch anbraten.", "Tomatensauce hinzufügen und 10 Min. köcheln lassen.", "Mit Parmesan servieren."]
        },
      ],
      Vegetarisch: [
        { 
          name: "Linsencurry", 
          calories: 600, 
          time: "30 Min", 
          ingredients: ["80g rote Linsen", "100ml Kokosmilch", "60g Reis", "Eine Handvoll Spinat", "Currygewürz"],
          instructions: ["Linsen und Reis separat kochen.", "Linsen mit Kokosmilch und Gewürzen erhitzen.", "Zum Schluss Spinat unterrühren, bis er zusammenfällt."]
        },
        { 
          name: "Kichererbsen-Salat", 
          calories: 500, 
          time: "15 Min", 
          ingredients: ["1 Dose Kichererbsen (abgespült)", "1/2 Gurke", "50g Feta", "1 EL Olivenöl", "Zitrone"],
          instructions: ["Gurke würfeln.", "Kichererbsen, Gurke und zerbröselten Feta mischen.", "Dressing aus Öl und Zitrone darübergeben."]
        },
      ],
      Vegan: [
        { 
          name: "Tofu Stir-fry", 
          calories: 550, 
          time: "20 Min", 
          ingredients: ["150g Tofu (fest)", "1 Paprika", "100g Reisnudeln", "2 EL Erdnusssauce"],
          instructions: ["Reisnudeln mit heißem Wasser übergießen.", "Tofu würfeln und kross anbraten.", "Paprika dazugeben und kurz mitbraten.", "Mit Erdnusssauce und Nudeln vermischen."]
        },
      ],
      "High Protein": [
        { 
          name: "Putensteak mit Quark", 
          calories: 600, 
          time: "20 Min", 
          ingredients: ["200g Putensteak", "150g Magerquark", "Gemischtes Pfannengemüse", "Kräuter"],
          instructions: ["Pute von beiden Seiten ca. 4 Min. braten.", "Quark mit Kräutern glatt rühren.", "Gemüse in der gleichen Pfanne dünsten."]
        },
      ],
      "Low Carb": [
        { 
          name: "Zucchini-Nudeln mit Pesto", 
          calories: 400, 
          time: "15 Min", 
          ingredients: ["2 große Zucchini", "2 EL Basilikumpesto", "10g Pinienkerne", "Parmesan (optional)"],
          instructions: ["Zucchini mit Spiralschneider zu Nudeln verarbeiten.", "In der Pfanne 2-3 Min. andünsten.", "Mit Pesto und Pinienkernen vermengen."]
        },
      ]
    };

    const selectedPool = recipes[data.diet as keyof typeof recipes] || recipes.Omnivor;

    const mockPlan = days.map(day => ({
      day,
      meals: [
        { 
          type: "Frühstück", 
          name: "Haferflocken mit Beeren", 
          calories: Math.round(data.calories * 0.25), 
          time: "10 Min", 
          ingredients: ["50g Haferflocken", "100g TK-Beeren", "150ml Milch oder Pflanzendrink", "1 TL Honig"],
          instructions: ["Haferflocken mit Milch aufkochen oder einweichen.", "Beeren und Honig unterrühren."]
        },
        { 
          type: "Mittagessen", 
          ...selectedPool[Math.floor(Math.random() * selectedPool.length)],
          type: "Mittagessen" // Ensure type is correct
        },
        { 
          type: "Abendessen", 
          name: "Protein-Salat-Bowl", 
          calories: Math.round(data.calories * 0.35), 
          time: "15 Min", 
          ingredients: ["100g Mix-Salat", "1 Dose Thunfisch (im eigenen Saft) oder Kichererbsen", "1/2 Avocado", "Leichtes Dressing"],
          instructions: ["Salat waschen.", "Thunfisch/Kichererbsen abtropfen lassen.", "Avocado aufschneiden und alles in einer Bowl anrichten."]
        }
      ].map(m => ({ ...m, type: m.type })) as Meal[]
    }));

    setPlan(mockPlan);
  };

  if (!inputData) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 border-b bg-white sticky top-0 z-50 flex items-center px-4 md:px-8">
        <Button variant="ghost" onClick={() => navigate("/generator")} className="gap-2 text-muted-foreground hover:text-primary">
          <ArrowLeft className="w-4 h-4" /> Zurück
        </Button>
        <div className="flex-1 flex justify-center items-center gap-2 pr-20">
          <ChefHat className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline">PrepMaster</span>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2">
              <CheckCircle2 className="w-4 h-4" /> Plan erfolgreich erstellt
            </div>
            <h1 className="text-4xl md:text-5xl font-black">Dein 7-Tage Plan</h1>
            <p className="text-slate-500 mt-2 font-medium">Alle Rezepte sind für <span className="text-primary font-bold">1 Person</span> berechnet.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-xl gap-2 font-bold border-slate-200" onClick={() => window.print()}>
              <Printer className="w-4 h-4" /> Drucken
            </Button>
            <Button className="rounded-xl gap-2 font-bold bg-primary hover:bg-primary/90">
              <ShoppingCart className="w-4 h-4" /> Einkaufsliste
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Summary Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="rounded-[2rem] border-none shadow-sm overflow-hidden">
              <CardHeader className="bg-primary text-white pb-6">
                <CardTitle className="text-lg">Zusammenfassung</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <Flame className="w-4 h-4" /> Kalorien Ziel
                    </div>
                    <span className="font-bold">{inputData.calories} kcal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <UtensilsCrossed className="w-4 h-4" /> Diät
                    </div>
                    <span className="font-bold">{inputData.diet}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <Wallet className="w-4 h-4" /> Budget
                    </div>
                    <span className="font-bold">~{inputData.budget}€ / Woche</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50 border border-blue-100">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-blue-700 font-medium leading-relaxed">
                      Die Mengenangaben beziehen sich auf eine Portion pro Mahlzeit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-[2rem] bg-secondary/10 border border-secondary/20">
              <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <ListChecks className="w-4 h-4" /> Batch Cooking
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Bereite Fleisch/Tofu und Kohlenhydrate (Reis/Pasta) für 2-3 Tage vor, um Zeit zu sparen.
              </p>
            </div>
          </div>

          {/* Plan Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="Montag" className="space-y-8">
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
                <TabsList className="bg-transparent h-auto p-0 flex justify-start sm:justify-between min-w-max">
                  {plan.map(day => (
                    <TabsTrigger 
                      key={day.day} 
                      value={day.day}
                      className="rounded-xl px-5 py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                    >
                      {day.day}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {plan.map(day => (
                <TabsContent key={day.day} value={day.day} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Accordion type="single" collapsible className="space-y-4">
                    {day.meals.map((meal, i) => (
                      <AccordionItem 
                        key={i} 
                        value={`item-${i}`}
                        className="bg-white px-6 md:px-8 py-2 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all"
                      >
                        <AccordionTrigger className="hover:no-underline py-6">
                          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center w-full text-left">
                            <div className="w-full md:w-24 flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 group-hover:bg-primary/5 transition-colors">
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{meal.type}</span>
                              <span className="text-2xl">
                                {meal.type === "Frühstück" ? "🥣" : meal.type === "Mittagessen" ? "🥘" : "🥗"}
                              </span>
                            </div>

                            <div className="flex-1 space-y-2">
                              <h3 className="text-xl font-black">{meal.name}</h3>
                              <div className="flex items-center gap-3">
                                <Badge variant="secondary" className="rounded-full font-bold">
                                  <Clock className="w-3 h-3 mr-1 text-primary" /> {meal.time}
                                </Badge>
                                <Badge variant="secondary" className="rounded-full font-bold">
                                  <Flame className="w-3 h-3 mr-1 text-orange-500" /> {meal.calories} kcal
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-8 pt-4 border-t border-slate-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <ListChecks className="w-4 h-4 text-primary" /> Zutaten (1 Person)
                              </h4>
                              <ul className="space-y-2">
                                {meal.ingredients.map((ing, j) => (
                                  <li key={j} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                    {ing}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <ChefHat className="w-4 h-4 text-primary" /> Zubereitung
                              </h4>
                              <ol className="space-y-4">
                                {meal.instructions.map((step, j) => (
                                  <li key={j} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                                    <span className="font-black text-primary/40 shrink-0">{j + 1}.</span>
                                    {step}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Dein Plan wurde mit künstlicher Intelligenz optimiert. Guten Appetit!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Plan;
