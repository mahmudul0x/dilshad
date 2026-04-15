import { useState } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Users,
  CalendarDays,
  UtensilsCrossed,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import cateringHero from "@/assets/catering-hero.jpg";
import { useUserProfile } from "@/contexts/UserProfileContext";
import { buildCateringMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const packages = [
  { name: "স্ট্যান্ডার্ড", guests: "১০-৫০", items: ["বিরিয়ানি", "কারি", "সালাদ", "পানীয়"], highlight: false },
  {
    name: "প্রিমিয়াম",
    guests: "৫০-২০০",
    items: ["কাচ্চি বিরিয়ানি", "চিকেন মাসালা", "নান", "মিষ্টি", "পানীয়"],
    highlight: true,
  },
  { name: "গ্র্যান্ড", guests: "২০০-৫০০+", items: ["ফুল কোর্স মেনু", "ডেজার্ট", "লাইভ কাউন্টার", "ডেকোরেশন"], highlight: false },
];

const CateringPage = () => {
  const { fullName } = useUserProfile();
  const [form, setForm] = useState({
    name: fullName,
    phone: "",
    guests: "",
    date: "",
    items: "",
    notes: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.open(buildWhatsAppLink(buildCateringMessage(fullName, form)), "_blank");
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative h-[40vh] overflow-hidden md:h-[50vh]">
        <img src={cateringHero} alt="ক্যাটারিং সার্ভিস" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/90 via-warm-dark/50 to-warm-dark/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10 md:px-8">
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">হোমে ফিরুন</span>
            </Link>
            <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
              ক্যাটারিং সার্ভিস
            </h1>
            <p className="mt-2 max-w-lg text-primary-foreground/70">
              বিয়ে, জন্মদিন, অফিস পার্টি বা যেকোনো অনুষ্ঠানে আমাদের প্রিমিয়াম ক্যাটারিং সেবা নিন।
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container mx-auto">
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: Users, title: "১০-৫০০+ অতিথি", desc: "ছোট থেকে বড় যেকোনো অনুষ্ঠানে সেবা প্রদান করি।" },
              { icon: UtensilsCrossed, title: "কাস্টম মেনু", desc: "আপনার পছন্দমতো মেনু তৈরি করে দেওয়া হবে।" },
              { icon: CalendarDays, title: "আগাম বুকিং", desc: "অন্তত ৩ দিন আগে বুকিং দিন সেরা সেবা পেতে।" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">প্যাকেজসমূহ</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                আপনার অনুষ্ঠানের জন্য
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl ${
                    pkg.highlight
                      ? "scale-105 border-primary bg-primary text-primary-foreground shadow-lg"
                      : "border-border/50 bg-card"
                  }`}
                >
                  {pkg.highlight ? (
                    <div className="mb-3 flex items-center gap-1 text-sm font-semibold">
                      <Star className="h-4 w-4 fill-current" />
                      সবচেয়ে জনপ্রিয়
                    </div>
                  ) : null}
                  <h3 className="mb-1 font-heading text-xl font-bold">{pkg.name}</h3>
                  <p className={`mb-4 text-sm ${pkg.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {pkg.guests} অতিথি
                  </p>
                  <ul className="space-y-2">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className={`h-4 w-4 flex-shrink-0 ${
                            pkg.highlight ? "text-primary-foreground/80" : "text-primary"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">বুকিং</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                ক্যাটারিং অনুসন্ধান
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-border/50 bg-card p-6 shadow-xl md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="আপনার নাম"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="ফোন নম্বর"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  required
                  maxLength={20}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="অতিথি সংখ্যা"
                  value={form.guests}
                  onChange={(event) => update("guests", event.target.value)}
                  min={1}
                  max={9999}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="date"
                  value={form.date}
                  onChange={(event) => update("date", event.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <input
                type="text"
                placeholder="পছন্দের খাবার (যেমন: বিরিয়ানি, কারি)"
                value={form.items}
                onChange={(event) => update("items", event.target.value)}
                maxLength={200}
                className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                placeholder="অতিরিক্ত তথ্য (ঐচ্ছিক)"
                value={form.notes}
                onChange={(event) => update("notes", event.target.value)}
                rows={3}
                maxLength={500}
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp এ জানান
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default CateringPage;
