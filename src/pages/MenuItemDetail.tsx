import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, Plus, Minus, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { menuItems } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const MenuItemDetail = () => {
  const { id } = useParams();
  const item = menuItems.find((i) => i.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">আইটেম পাওয়া যায়নি</h1>
          <Link to="/menu" className="text-primary hover:underline">মেনুতে ফিরে যান</Link>
        </div>
      </div>
    );
  }

  const related = menuItems.filter((i) => i.category === item.category && i.id !== item.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(item, quantity);
    toast({ title: "কার্টে যোগ হয়েছে", description: `${item.name} × ${quantity} কার্টে যোগ করা হয়েছে।` });
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="container mx-auto">
          <Link to="/menu" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">মেনুতে ফিরুন</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-muted">
              <img src={item.image} alt={item.name} className="w-full aspect-square object-cover" />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{item.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{item.name}</h1>
              <p className="text-2xl font-bold text-primary">{item.price}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">পরিমাণ:</span>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-1">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 rounded-md hover:bg-secondary transition-colors" aria-label="কমান">
                    <Minus className="w-4 h-4 text-foreground" />
                  </button>
                  <span className="text-lg font-bold text-foreground w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 rounded-md hover:bg-secondary transition-colors" aria-label="বাড়ান">
                    <Plus className="w-4 h-4 text-foreground" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg flex-1 justify-center"
                >
                  <ShoppingCart className="w-5 h-5" />
                  কার্টে যোগ করুন
                </button>
                <a href="tel:+8801911719476" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  কল
                </a>
              </div>

              <div className="bg-card rounded-xl p-4 border border-border/50 space-y-2 text-sm text-muted-foreground">
                <p>✅ ডেলিভারি পাওয়া যায়</p>
                <p>⏰ প্রতিদিন সকাল ৭টা - রাত ১১টা</p>
                <p>📍 সদর হসপিটাল মোড়, দিনাজপুর</p>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">আরও দেখুন</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map((r) => (
                  <Link to={`/menu/${r.id}`} key={r.id} className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-3">
                      <h3 className="font-heading font-semibold text-foreground text-sm">{r.name}</h3>
                      <p className="text-primary font-bold text-xs mt-1">{r.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default MenuItemDetail;
