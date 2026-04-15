import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { galleryImages } from "@/data/menuData";

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Link to="/" className="p-2 rounded-lg bg-muted hover:bg-secondary transition-colors">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest">গ্যালারি</p>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">আমাদের খাবারের ছবি</h1>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/40 transition-colors duration-300 flex items-end p-3">
                  <span className="text-primary-foreground text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-warm-dark/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 p-2 text-primary-foreground/80 hover:text-primary-foreground" aria-label="বন্ধ করুন">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 p-2 text-primary-foreground/80 hover:text-primary-foreground" aria-label="আগের ছবি">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 p-2 text-primary-foreground/80 hover:text-primary-foreground" aria-label="পরের ছবি">
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-3xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].alt} className="w-full h-full object-contain rounded-lg" />
            <p className="text-center text-primary-foreground mt-4 font-heading font-semibold text-lg">{galleryImages[lightbox].caption}</p>
          </div>
        </div>
      )}

      <Footer />
      <MobileCTA />
    </div>
  );
};

export default GalleryPage;
