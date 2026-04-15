import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { menuItems, categories } from "@/data/menuData";
import { useUserProfile } from "@/contexts/UserProfileContext";

const MenuPreview = () => {
  const [active, setActive] = useState("সব");
  const { getQuickOrderLink } = useUserProfile();
  const filtered = active === "সব" ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">আমাদের মেনু</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">সুস্বাদু খাবারের তালিকা</h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
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
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-warm-dark/60 via-transparent to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-primary/90 px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                    বিস্তারিত দেখুন
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground md:text-base">{item.name}</h3>
                <p className="mt-1 text-sm font-bold text-primary">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-4 font-semibold text-foreground transition-all duration-300 hover:bg-secondary"
          >
            সম্পূর্ণ মেনু দেখুন
            <ArrowRight className="h-4 w-4" />
          </Link>
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
    </section>
  );
};

export default MenuPreview;
