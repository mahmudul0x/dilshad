import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/menuData";

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">গ্যালারি</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">আমাদের খাবারের ছবি</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/40 transition-colors duration-300 flex items-end p-3">
                <span className="text-primary-foreground text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-warm-dark/95 backdrop-blur-md flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="বন্ধ করুন">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="আগের ছবি">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="পরের ছবি">
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-3xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].alt} className="w-full h-full object-contain rounded-lg" />
            <p className="text-center text-primary-foreground mt-4 font-heading font-semibold text-lg">{galleryImages[lightbox].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
