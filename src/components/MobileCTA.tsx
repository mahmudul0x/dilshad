import { House, MessageCircle, UtensilsCrossed } from "lucide-react";
import { useUserProfile } from "@/contexts/UserProfileContext";

const MobileCTA = () => {
  const { getQuickOrderLink } = useUserProfile();

  return (
    <div className="safe-bottom fixed bottom-0 left-0 right-0 z-50 border-t border-primary-foreground/10 bg-warm-dark/95 px-2 py-2 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around">
        <a
          href="/"
          className="flex flex-col items-center gap-1 px-3 py-1 text-primary-foreground/80 transition-colors hover:text-primary"
          aria-label="হোম"
        >
          <House className="h-5 w-5" />
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a
          href={getQuickOrderLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex -mt-4 flex-col items-center gap-1 rounded-xl bg-primary px-5 py-2 text-primary-foreground shadow-lg"
          aria-label="WhatsApp অর্ডার"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] font-bold">অর্ডার</span>
        </a>
        <a
          href="#menu"
          className="flex flex-col items-center gap-1 px-3 py-1 text-primary-foreground/80 transition-colors hover:text-primary"
          aria-label="মেনু দেখুন"
        >
          <UtensilsCrossed className="h-5 w-5" />
          <span className="text-[10px] font-medium">মেনু</span>
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
