import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-warm-dark text-primary-foreground/80">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-3"><span className="text-destructive">দিলশাদ</span></h3>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              পছন্দের সেরা স্বাদ — দেশীও ঐতিহ্যের স্বাদ এখন আরও কাছাকাছি।
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">দ্রুত লিংক</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-primary transition-colors">হোম</Link>
              <Link to="/menu" className="hover:text-primary transition-colors">মেনু</Link>
              <Link to="/about" className="hover:text-primary transition-colors">সম্পর্কে</Link>
              <Link to="/catering" className="hover:text-primary transition-colors">ক্যাটারিং</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">যোগাযোগ</Link>
            </nav>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-semibold text-primary-foreground mb-4">যোগাযোগ</h4>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Sadar Hospital Mor, Dinajpur Sadar, Dinajpur-5200</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="tel:+8801911719476" className="hover:text-primary transition-colors">+880 1911-719476</a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="https://wa.me/8801911719476" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span>প্রতিদিন: সকাল ৭টা - রাত ১১টা</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Dilshad Vandar. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
};

export default Footer;
