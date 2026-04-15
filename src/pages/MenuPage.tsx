import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, Search, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { menuItems, categories } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useUserProfile } from "@/contexts/UserProfileContext";

const MenuPage = () => {
  const [active, setActive] = useState("সব");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"default" | "name" | "price-low" | "price-high">("default");
  const { addItem } = useCart();
  const { toast } = useToast();
  const { getQuickOrderLink } = useUserProfile();

  const filtered = useMemo(() => {
    let items = active === "সব" ? [...menuItems] : menuItems.filter((item) => item.category === active);

    if (search.trim()) {
      const query = search.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
      );
    }

    if (sort === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }, [active, search, sort]);

  const handleAddToCart = (event: React.MouseEvent, item: (typeof menuItems)[0]) => {
    event.preventDefault();
    event.stopPropagation();
    addItem(item);
    toast({
      title: "কার্টে যোগ হয়েছে",
      description: `${item.name} কার্টে যোগ করা হয়েছে।`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-padding pt-20">
        <div className="container mx-auto">
          <div className="mb-8 flex items-center gap-3">
            <Link to="/" className="rounded-lg bg-muted p-2 transition-colors hover:bg-secondary">
              <ArrowLeft className="h-5 w-5 text-foreground" />
            </Link>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">আমাদের মেনু</p>
              <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
                সুস্বাদু খাবারের তালিকা
              </h1>
            </div>
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="খাবার খুঁজুন..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as typeof sort)}
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="default">ডিফল্ট</option>
              <option value="name">নাম অনুযায়ী</option>
            </select>
          </div>

          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mb-4 text-sm text-muted-foreground">{filtered.length} টি আইটেম পাওয়া গেছে</p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {filtered.map((item) => (
              <Link
                to={`/menu/${item.id}`}
                key={item.id}
                className="group overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <button
                    onClick={(event) => handleAddToCart(event, item)}
                    className="absolute bottom-3 right-3 rounded-full bg-primary p-2.5 text-primary-foreground opacity-0 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90 group-hover:opacity-100"
                    aria-label="কার্টে যোগ করুন"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm font-semibold text-foreground md:text-base">{item.name}</h3>
                  <p className="mt-1 text-sm font-bold text-primary">{item.price}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.category}</p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center text-muted-foreground">
              <p className="text-lg">কোনো আইটেম পাওয়া যায়নি</p>
              <p className="mt-1 text-sm">অন্য কিছু খুঁজে দেখুন</p>
            </div>
          ) : null}

          <div className="mt-10 text-center">
            <a
              href={getQuickOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp এ অর্ডার করুন
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default MenuPage;
