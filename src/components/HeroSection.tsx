import { useState, useEffect } from "react";
import { MessageCircle, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroFood from "@/assets/hero-food.jpg";
import { useUserProfile } from "@/contexts/UserProfileContext";

const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4, heroFood];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const { getQuickOrderLink } = useUserProfile();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((count) => (count + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((count) => (count - 1 + slides.length) % slides.length);
  const next = () => setCurrent((count) => (count + 1) % slides.length);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={src}
            alt={`দিলশাদ স্লাইড ${index + 1}`}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            {...(index !== 0 ? { loading: "lazy" as const } : {})}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/80 via-warm-dark/60 to-warm-dark/80" />

      <button
        onClick={prev}
        className="absolute left-4 z-20 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-2 text-primary-foreground/80 backdrop-blur-md transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground"
        aria-label="আগের স্লাইড"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 z-20 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-2 text-primary-foreground/80 backdrop-blur-md transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground"
        aria-label="পরের স্লাইড"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center md:px-8">
        <div className="mx-auto max-w-2xl space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/15 px-4 py-2 text-sm text-amber-100 shadow-lg backdrop-blur-sm">
            <Clock className="h-4 w-4 text-amber-200" />
            <span>প্রতিদিন সকাল ৭টা - রাত ১১টা</span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            দিলশাদ
            <span className="mt-2 block text-3xl text-primary md:text-4xl lg:text-5xl">
              পছন্দের সেরা স্বাদ
            </span>
          </h1>

          <p className="mx-auto max-w-lg font-body text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            দেশীয় ঐতিহ্যের স্বাদ এখন আরও কাছাকাছি — পরিবার ও বন্ধুদের সঙ্গে উপভোগ করুন আমাদের বিশেষ
            খাবারসমূহ।
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <MapPin className="h-4 w-4 text-primary" />
            <span>সদর হাসপাতাল মোড়, দিনাজপুর সদর, দিনাজপুর-৫২০০</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl"
            >
              মেনু দেখুন
            </a>
            <a
              href={getQuickOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp অর্ডার
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"}`}
            aria-label={`স্লাইড ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
