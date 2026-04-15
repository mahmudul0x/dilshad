import { Award, Users, Utensils, Heart } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const highlights = [
  { icon: Award, label: "প্রতিষ্ঠাকাল", value: "১৯৫৩" },
  { icon: Utensils, label: "দেশি খাবার", value: "৪০+" },
  { icon: Users, label: "পরিবারবান্ধব", value: "পরিবেশ" },
  { icon: Heart, label: "আন্তরিক", value: "সেবা" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={aboutBg} alt="দিলশাদ রেস্টুরেন্ট" loading="lazy" width={1280} height={720} className="w-full h-80 md:h-[28rem] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="glass rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground">
                ১৯৫৩ সাল থেকে
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">আমাদের সম্পর্কে</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Dilshad রেস্টুরেন্টে স্বাগতম
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ঘরোয়া স্বাদের দেশি খাবার, পরিবারের জন্য একটি নির্ভরযোগ্য রেস্টুরেন্ট। স্বাদ, পরিবেশ, পরিষেবা — সবকিছুতেই Dilshad আপনাদের পাশে।
            </p>
            <p className="text-muted-foreground leading-relaxed">
              দেশি খাবারে দেশি স্বাদ — পরিবার ও বন্ধুবান্ধবদের নিয়ে উপভোগ করুন আমাদের আতিথেয়তা।
            </p>

            {/* Founder */}
            <div className="bg-card rounded-xl p-5 border border-border/50">
              <p className="text-sm text-muted-foreground mb-1">প্রতিষ্ঠাতা ও প্রধান ব্যবস্থাপক</p>
              <p className="font-heading font-bold text-foreground text-lg">মোঃ মাহফুজ ভাই</p>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                তার হাত ধরেই শুরু এই রেস্টুরেন্টের যাত্রা, দেশের ঐতিহ্যবাহী রান্নাকে নতুন রূপে উপস্থাপন করার লক্ষ্য নিয়ে। অতিথিদের সর্বোচ্চ সেবা প্রদানই তার অঙ্গীকার।
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 bg-card rounded-lg p-3 border border-border/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <h.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{h.value}</p>
                    <p className="text-xs text-muted-foreground">{h.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
