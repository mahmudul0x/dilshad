import { useState } from "react";
import { MessageCircle, Users, CalendarDays, UtensilsCrossed } from "lucide-react";
import { useUserProfile } from "@/contexts/UserProfileContext";
import { buildCateringMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const CateringSection = () => {
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
    <section id="catering" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">ক্যাটারিং সার্ভিস</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">বিশেষ অনুষ্ঠানের জন্য</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            বিয়ে, জন্মদিন, অফিস পার্টি বা যেকোনো অনুষ্ঠানে আমাদের ক্যাটারিং সেবা নিন। বাল্ক অর্ডারে বিশেষ
            মূল্য।
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: Users, title: "১০-৫০০+ অতিথি", desc: "ছোট থেকে বড় যেকোনো অনুষ্ঠানে সেবা প্রদান করি।" },
              { icon: UtensilsCrossed, title: "কাস্টম মেনু", desc: "আপনার পছন্দমতো মেনু তৈরি করে দেওয়া হবে।" },
              { icon: CalendarDays, title: "আগাম বুকিং", desc: "অন্তত ৩ দিন আগে বুকিং দিন সেরা সেবা পেতে।" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5"
              >
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-border/50 bg-card p-6 shadow-lg"
          >
            <h3 className="mb-2 font-heading text-lg font-bold text-foreground">ক্যাটারিং অনুসন্ধান</h3>
            <input
              type="text"
              placeholder="আপনার নাম"
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              required
              maxLength={100}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              placeholder="ফোন নম্বর"
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              required
              maxLength={20}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="অতিথি সংখ্যা"
                value={form.guests}
                onChange={(event) => update("guests", event.target.value)}
                min={1}
                max={9999}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="date"
                value={form.date}
                onChange={(event) => update("date", event.target.value)}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <input
              type="text"
              placeholder="পছন্দের খাবার (যেমন: বিরিয়ানি, কারি)"
              value={form.items}
              onChange={(event) => update("items", event.target.value)}
              maxLength={200}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="অতিরিক্ত তথ্য (ঐচ্ছিক)"
              value={form.notes}
              onChange={(event) => update("notes", event.target.value)}
              rows={3}
              maxLength={500}
              className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp এ জানান
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
