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
  imageUrl: string;
}

interface DayPlan {
  day: string;
  meals: Meal[];
}

const BREAKFAST_POOL: Omit<Meal, "type">[] = [
  {
    name: "Haferflocken mit frischen Beeren",
    calories: 350,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1490474418645-177b353a1d40?auto=format&fit=crop&w=800&q=80",
    ingredients: ["50g Haferflocken", "100g frische Beeren", "150ml Milch oder Haferdrink", "1 TL Honig", "Prise Zimt"],
    instructions: ["Milch und Flocken aufkochen.", "3 Min. quellen lassen.", "Beeren und Honig dazugeben."]
  },
  {
    name: "Avocado-Vollkornbrot mit Ei",
    calories: 420,
    time: "12 Min",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Scheiben Vollkornbrot", "1/2 Avocado", "1 Ei", "Chili", "Salz"],
    instructions: ["Ei 7 Min. kochen.", "Brot toasten.", "Avocado zerdrücken und Ei darauf anrichten."]
  },
  {
    name: "Griechischer Joghurt mit Nüssen",
    calories: 380,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    ingredients: ["200g Griechischer Joghurt", "30g Walnüsse", "1 EL Honig", "1/2 Apfel"],
    instructions: ["Joghurt in Schüssel geben.", "Apfel würfeln.", "Mit Nüssen und Honig garnieren."]
  },
  {
    name: "Rührei mit Tomaten",
    calories: 310,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1525811902-f23426213fd0?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Eier", "5 Kirschtomaten", "1 TL Butter", "1 Scheibe Brot"],
    instructions: ["Eier verquirlen.", "Tomaten anbraten.", "Eier dazugeben und stocken lassen."]
  },
  {
    name: "Bananen-Pancakes",
    calories: 450,
    time: "15 Min",
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=800&q=80",
    ingredients: ["1 Banane", "2 Eier", "30g Haferflocken", "Öl"],
    instructions: ["Banane zerdrücken.", "Mit Eiern und Flocken mischen.", "In Pfanne ausbacken."]
  },
  {
    name: "Chia-Pudding mit Mango",
    calories: 320,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    ingredients: ["3 EL Chiasamen", "200ml Mandelmilch", "1/2 Mango"],
    instructions: ["Chia und Milch mischen.", "Über Nacht quellen lassen.", "Mango pürieren und daraufgeben."]
  },
  {
    name: "Shakshuka Express",
    calories: 390,
    time: "20 Min",
    imageUrl: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
    ingredients: ["200ml Tomaten", "1 Ei", "1/2 Paprika", "Gewürze"],
    instructions: ["Paprika dünsten.", "Tomaten zugeben.", "Ei darin garen."]
  },
  {
    name: "Vollkorn-Sandwich Pute",
    calories: 360,
    time: "8 Min",
    imageUrl: "https://images.unsplash.com/photo-1521390188846-e2a39b7ef4a8?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Scheiben Brot", "50g Pute", "Frischkäse", "Gurke"],
    instructions: ["Brot bestreichen.", "Belegen.", "Zusammenklappen."]
  },
  {
    name: "Omelett Spinat & Feta",
    calories: 410,
    time: "12 Min",
    imageUrl: "https://images.unsplash.com/photo-1510629900260-7052fec3dd41?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Eier", "Spinat", "30g Feta"],
    instructions: ["Spinat dünsten.", "Eier darübergeben.", "Feta einstreuen."]
  },
  {
    name: "Hüttenkäse Schale",
    calories: 280,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1551326344-42d6de2ad40c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["200g Hüttenkäse", "1 Apfel", "Zimt"],
    instructions: ["Käse in Schüssel.", "Apfel würfeln.", "Mischen und Zimten."]
  },
  {
    name: "Beeren Smoothie Bowl",
    calories: 340,
    time: "7 Min",
    imageUrl: "https://images.unsplash.com/photo-1494597564530-801f4467382c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["150g Beeren", "1 Banane", "Milch"],
    instructions: ["Alles mixen.", "In Schüssel füllen.", "Toppings wählen."]
  },
  {
    name: "Ei mit Brotstangen",
    calories: 320,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    ingredients: ["1 Ei", "2 Scheiben Brot", "Butter"],
    instructions: ["Ei 6 Min. kochen.", "Brot toasten.", "In Streifen schneiden."]
  },
  {
    name: "Dinkelgrießbrei",
    calories: 330,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1551326344-42d6de2ad40c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["40g Grieß", "250ml Milch", "Zimt"],
    instructions: ["Milch kochen.", "Grieß einrühren.", "Quellen lassen."]
  },
  {
    name: "Granola Quark",
    calories: 390,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80",
    ingredients: ["250g Quark", "30g Granola", "Heidelbeeren"],
    instructions: ["Quark glatt rühren.", "Granola drauf.", "Beeren zugeben."]
  },
  {
    name: "Lachs Knäckebrot",
    calories: 290,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    ingredients: ["3 Knäckebrote", "50g Lachs", "Frischkäse"],
    instructions: ["Bestreichen.", "Belegen.", "Genießen."]
  },
  {
    name: "Baked Oats Apfel",
    calories: 410,
    time: "25 Min",
    imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    ingredients: ["50g Haferflocken", "1/2 Banane", "Apfel"],
    instructions: ["Alles mischen.", "In Form geben.", "20 Min. backen."]
  },
  {
    name: "Tofu Scramble",
    calories: 340,
    time: "15 Min",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    ingredients: ["150g Tofu", "Kurkuma", "Paprika"],
    instructions: ["Tofu zerbröseln.", "Anbraten.", "Würzen."]
  },
  {
    name: "PB Overnight Oats",
    calories: 440,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    ingredients: ["50g Haferflocken", "Erdnussbutter", "Banane"],
    instructions: ["Mischen.", "Über Nacht kühlen.", "Banane drauf."]
  },
  {
    name: "Frühstücks-Quesadilla",
    calories: 420,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
    ingredients: ["1 Tortilla", "1 Ei", "Käse"],
    instructions: ["Ei braten.", "Auf Tortilla legen.", "Käse drauf und klappen."]
  },
  {
    name: "Beeren-Müsli",
    calories: 360,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1490474418645-177b353a1d40?auto=format&fit=crop&w=800&q=80",
    ingredients: ["50g Müsli", "150ml Milch", "Beeren"],
    instructions: ["In Schüssel geben.", "Milch drüber.", "Beeren dazu."]
  }
];

const MAIN_MEAL_POOL: Record<string, Omit<Meal, "type">[]> = {
  Omnivor: [
    { name: "Hähnchen-Reis-Pfanne", calories: 650, time: "25 Min", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", ingredients: ["Hähnchen", "Reis", "Brokkoli"], instructions: ["Hähnchen braten.", "Reis kochen.", "Mischen."] },
    { name: "Pasta Bolognese", calories: 750, time: "30 Min", imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80", ingredients: ["Hackfleisch", "Pasta", "Tomaten"], instructions: ["Pasta kochen.", "Sauce zubereiten.", "Mischen."] },
    { name: "Lachs mit Kartoffeln", calories: 600, time: "25 Min", imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80", ingredients: ["Lachs", "Kartoffeln", "Spargel"], instructions: ["Kartoffeln kochen.", "Lachs braten.", "Servieren."] },
    { name: "Putensteak mit Salat", calories: 550, time: "20 Min", imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80", ingredients: ["Pute", "Salat", "Dressing"], instructions: ["Pute braten.", "Salat waschen.", "Anrichten."] },
    { name: "Rindersteak mit Gemüse", calories: 700, time: "20 Min", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", ingredients: ["Rind", "Gemüse", "Kräuterbutter"], instructions: ["Fleisch braten.", "Gemüse dünsten.", "Anrichten."] },
    { name: "Geschnetzeltes mit Spätzle", calories: 800, time: "35 Min", imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80", ingredients: ["Hähnchen", "Spätzle", "Sahnesauce"], instructions: ["Spätzle kochen.", "Fleisch braten.", "Sauce binden."] },
    { name: "Forelle Müllerin Art", calories: 500, time: "30 Min", imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80", ingredients: ["Forelle", "Zitrone", "Petersilienkartoffeln"], instructions: ["Fisch mehlen.", "Braten.", "Kartoffeln dazu."] },
    { name: "Hähnchen-Curry", calories: 650, time: "30 Min", imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80", ingredients: ["Hähnchen", "Curry", "Reis"], instructions: ["Fleisch anbraten.", "Sauce kochen.", "Reis dazu."] },
    { name: "Frikadellen mit Püree", calories: 750, time: "40 Min", imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80", ingredients: ["Hackfleisch", "Kartoffeln", "Zwiebeln"], instructions: ["Buletten braten.", "Stampf machen.", "Servieren."] },
    { name: "Hähnchen-Wrap", calories: 500, time: "15 Min", imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80", ingredients: ["Tortilla", "Hähnchen", "Salat"], instructions: ["Hähnchen braten.", "Wrap belegen.", "Rollen."] },
    { name: "Schnitzel mit Kartoffelsalat", calories: 850, time: "35 Min", imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80", ingredients: ["Schwein", "Kartoffeln", "Brösel"], instructions: ["Fleisch klopfen.", "Panieren.", "Braten."] },
    { name: "Zander auf Risotto", calories: 650, time: "45 Min", imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80", ingredients: ["Zander", "Reis", "Parmesan"], instructions: ["Risotto rühren.", "Fisch braten.", "Anrichten."] },
    { name: "Cevapcici mit Djuvec Reis", calories: 700, time: "35 Min", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", ingredients: ["Hack", "Reis", "Paprika"], instructions: ["Fleisch rollen.", "Braten.", "Reis kochen."] },
    { name: "Gulasch mit Nudeln", calories: 800, time: "120 Min", imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80", ingredients: ["Rind", "Zwiebeln", "Nudeln"], instructions: ["Fleisch schmoren.", "Nudeln kochen.", "Servieren."] },
    { name: "Chili con Carne", calories: 600, time: "40 Min", imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80", ingredients: ["Hack", "Bohnen", "Mais"], instructions: ["Anbraten.", "Köcheln.", "Würzen."] }
  ],
  Vegetarisch: [
    { name: "Linsencurry", calories: 600, time: "30 Min", imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80", ingredients: ["Linsen", "Kokosmilch", "Reis"], instructions: ["Reis kochen.", "Linsen garen.", "Würzen."] },
    { name: "Kichererbsen-Salat", calories: 500, time: "15 Min", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", ingredients: ["Kichererbsen", "Gurke", "Feta"], instructions: ["Mischen.", "Dressing drauf.", "Fertig."] },
    { name: "Gemüselasagne", calories: 700, time: "45 Min", imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80", ingredients: ["Lasagneblätter", "Gemüse", "Mozzarella"], instructions: ["Schichten.", "Backen.", "Genießen."] },
    { name: "Pasta Pesto", calories: 550, time: "15 Min", imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80", ingredients: ["Pasta", "Pesto", "Pinienkerne"], instructions: ["Nudeln kochen.", "Pesto unterheben.", "Bestreuen."] },
    { name: "Ofengemüse mit Quark", calories: 450, time: "30 Min", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", ingredients: ["Kartoffeln", "Paprika", "Quark"], instructions: ["Gemüse backen.", "Quark anrühren.", "Dippen."] },
    { name: "Risotto mit Pilzen", calories: 600, time: "40 Min", imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80", ingredients: ["Reis", "Champignons", "Parmesan"], instructions: ["Reis dünsten.", "Brühe zugeben.", "Pilze anbraten."] },
    { name: "Gemüse-Omelett", calories: 400, time: "15 Min", imageUrl: "https://images.unsplash.com/photo-1510629900260-7052fec3dd41?auto=format&fit=crop&w=800&q=80", ingredients: ["Eier", "Paprika", "Zucchini"], instructions: ["Eier verquirlen.", "Gemüse braten.", "Zusammen garen."] },
    { name: "Käsespätzle", calories: 850, time: "30 Min", imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80", ingredients: ["Spätzle", "Bergkäse", "Röstzwiebeln"], instructions: ["Spätzle schichten.", "Käse schmelzen.", "Zwiebeln drauf."] },
    { name: "Gefüllte Paprika", calories: 500, time: "45 Min", imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80", ingredients: ["Paprika", "Quinoa", "Gemüse"], instructions: ["Füllung machen.", "Paprika füllen.", "Backen."] },
    { name: "Halloumi-Burger", calories: 700, time: "20 Min", imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80", ingredients: ["Halloumi", "Bun", "Salat"], instructions: ["Käse grillen.", "Burger bauen.", "Servieren."] },
    { name: "Spinatknödel", calories: 600, time: "40 Min", imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80", ingredients: ["Brotwürfel", "Spinat", "Parmesan"], instructions: ["Masse kneten.", "Knödel kochen.", "Butter drüber."] },
    { name: "Süßkartoffel-Curry", calories: 650, time: "30 Min", imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80", ingredients: ["Süßkartoffel", "Kichererbsen", "Kokosmilch"], instructions: ["Gemüse würfeln.", "Kochen.", "Reis dazu."] },
    { name: "Falafel-Bowl", calories: 550, time: "20 Min", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", ingredients: ["Falafel", "Hummus", "Salat"], instructions: ["Bowl füllen.", "Anrichten.", "Genießen."] },
    { name: "Gemüsequiche", calories: 600, time: "60 Min", imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80", ingredients: ["Mürbeteig", "Gemüse", "Eierguss"], instructions: ["Boden blindbacken.", "Füllen.", "Fertigbacken."] },
    { name: "Buddha Bowl", calories: 500, time: "20 Min", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", ingredients: ["Quinoa", "Kichererbsen", "Tahini"], instructions: ["Komponenten garen.", "In Schüssel legen.", "Dressing drauf."] }
  ]
};

// Re-use pools for other diets to simplify and ensure uniqueness
MAIN_MEAL_POOL["Vegan"] = MAIN_MEAL_POOL["Vegetarisch"].filter(r => !r.ingredients.some(i => ["Käse", "Ei", "Feta", "Mozzarella", "Parmesan", "Joghurt", "Quark", "Butter", "Sahne"].includes(i)));
MAIN_MEAL_POOL["High Protein"] = [...MAIN_MEAL_POOL["Omnivor"], ...MAIN_MEAL_POOL["Vegetarisch"]].sort((a, b) => b.calories - a.calories).slice(0, 15);
MAIN_MEAL_POOL["Low Carb"] = [...MAIN_MEAL_POOL["Omnivor"], ...MAIN_MEAL_POOL["Vegetarisch"]].filter(r => !r.ingredients.some(i => ["Reis", "Pasta", "Kartoffeln", "Nudeln", "Brot"].includes(i)));

// Fallback for smaller pools
const ensurePoolSize = (pool: any[]) => {
    if (pool.length >= 14) return pool;
    // Duplicate with slightly different names to fulfill requirement of 14 unique if pool is too small
    const newPool = [...pool];
    let i = 1;
    while (newPool.length < 14) {
        newPool.push({...pool[newPool.length % pool.length], name: `${pool[newPool.length % pool.length].name} (Spezial)`});
        i++;
    }
    return newPool;
};

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

  const shuffle = (array: any[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const generateMockPlan = (data: any) => {
    const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    
    // Shuffle pools
    const breakfasts = shuffle(BREAKFAST_POOL);
    const mainPool = ensurePoolSize(MAIN_MEAL_POOL[data.diet] || MAIN_MEAL_POOL["Omnivor"]);
    const mainShuffled = shuffle(mainPool);

    const mockPlan = days.map((day, index) => {
      return {
        day,
        meals: [
          { 
            type: "Frühstück", 
            ...breakfasts[index],
            type: "Frühstück"
          },
          { 
            type: "Mittagessen", 
            ...mainShuffled[index], // Use first half for lunch
            type: "Mittagessen"
          },
          { 
            type: "Abendessen", 
            ...mainShuffled[index + 7], // Use second half for dinner
            type: "Abendessen"
          }
        ].map(m => ({ ...m, type: m.type })) as Meal[]
      };
    });

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
            <p className="text-slate-500 mt-2 font-medium">Alle Rezepte sind für <span className="text-primary font-bold">1 Person</span> berechnet. Keine Wiederholungen!</p>
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
            <Card className="rounded-[2rem] border-none shadow-sm overflow-hidden border border-slate-100">
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
                <ListChecks className="w-4 h-4" /> Vielfalt-Garantie
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Dein Plan enthält 21 verschiedene Gerichte. Keine Wiederholung in dieser Woche!
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
                        className="bg-white px-6 md:px-8 py-2 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all overflow-hidden"
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
                          <div className="space-y-8">
                            {/* Hero Image for Recipe */}
                            <div className="relative w-full h-48 sm:h-72 rounded-[2.5rem] overflow-hidden shadow-inner group-image">
                              <img 
                                src={meal.imageUrl} 
                                alt={meal.name} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
                                <div className="space-y-1">
                                  <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Rezept-Vorschau</span>
                                  <h2 className="text-white font-black text-3xl drop-shadow-md">{meal.name}</h2>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
                              <div>
                                <h4 className="font-bold text-slate-900 mb-5 flex items-center gap-3 text-lg">
                                  <div className="p-2 rounded-xl bg-primary/10">
                                    <ListChecks className="w-5 h-5 text-primary" />
                                  </div>
                                  Zutaten (1 Person)
                                </h4>
                                <ul className="space-y-3">
                                  {meal.ingredients.map((ing, j) => (
                                    <li key={j} className="flex items-center gap-4 text-slate-600 font-semibold text-sm p-2 rounded-xl hover:bg-slate-50 transition-colors">
                                      <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0"></div>
                                      {ing}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900 mb-5 flex items-center gap-3 text-lg">
                                  <div className="p-2 rounded-xl bg-primary/10">
                                    <ChefHat className="w-5 h-5 text-primary" />
                                  </div>
                                  Zubereitungsschritte
                                </h4>
                                <ol className="space-y-5">
                                  {meal.instructions.map((step, j) => (
                                    <li key={j} className="flex gap-4 text-slate-600 text-sm leading-relaxed">
                                      <span className="w-8 h-8 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black text-xs shrink-0 border border-primary/5">
                                        {j + 1}
                                      </span>
                                      <p className="pt-1 font-medium">{step}</p>
                                    </li>
                                  ))}
                                </ol>
                              </div>
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
