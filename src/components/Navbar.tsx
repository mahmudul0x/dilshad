import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CartSheet from "@/components/CartSheet";
import { useUserProfile } from "@/contexts/UserProfileContext";

const links = [
  { label: "হোম", href: "/", type: "route" },
  { label: "মেনু", href: "/menu", type: "route" },
  { label: "গ্যালারি", href: "/gallery", type: "route" },
  { label: "সম্পর্কে", href: "/about", type: "route" },
  { label: "ক্যাটারিং", href: "/catering", type: "route" },
  { label: "যোগাযোগ", href: "/contact", type: "route" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { getQuickOrderLink } = useUserProfile();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        showTransparent ? "bg-transparent" : "bg-background/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="pl-3 font-heading text-2xl font-bold transition-colors md:pl-4 md:text-3xl">
          <span className="text-destructive">দিলশাদ</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                showTransparent ? "text-primary-foreground/80" : "text-foreground"
              } ${location.pathname === l.href ? "text-primary" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <div className={showTransparent ? "text-primary-foreground" : "text-foreground"}>
            <CartSheet />
          </div>
          <a
            href={getQuickOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            অর্ডার করুন
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className={showTransparent ? "text-primary-foreground" : "text-foreground"}>
            <CartSheet />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 ${showTransparent ? "text-primary-foreground" : "text-foreground"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border/50 bg-background/95 backdrop-blur-md md:hidden">
          <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`py-2 font-medium transition-colors hover:text-primary ${
                  location.pathname === l.href ? "text-primary" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
