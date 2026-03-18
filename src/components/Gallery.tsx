export const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1976&auto=format&fit=crop", category: "Haarschnitt" },
    { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop", category: "Styling" },
    { src: "https://images.unsplash.com/photo-1582095133179-bf108920186a?q=80&w=2070&auto=format&fit=crop", category: "Coloration" },
    { src: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=1974&auto=format&fit=crop", category: "Interior" },
    { src: "https://images.unsplash.com/photo-1492162300535-32bd1e9a1c75?q=80&w=2070&auto=format&fit=crop", category: "Herrenschnitt" },
    { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop", category: "Balayage" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-xl text-left">
            <h2 className="text-[#8DA399] font-bold tracking-widest uppercase text-sm">Inspiration</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#2D3436]">Galerie unserer Arbeiten</h3>
          </div>
          <p className="text-[#2D3436]/60 max-w-xs text-left md:text-right">
            Ein kleiner Einblick in das, was wir täglich im Salon kreieren. Folgen Sie uns auch auf Instagram.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group rounded-3xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src={img.src} 
                alt={img.category} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
