import { UtensilsCrossed, Truck, Clock, ChefHat } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "ডাইন-ইন",
    description: "পরিবার ও বন্ধুবান্ধবদের সাথে আরামদায়ক পরিবেশে খাবার উপভোগ করুন।",
  },
  {
    icon: Truck,
    title: "ডেলিভারি",
    description: "আপনার পছন্দের খাবার ঘরে বসেই অর্ডার করুন WhatsApp এ।",
  },
  {
    icon: ChefHat,
    title: "বৈচিত্র্যময় খাবার",
    description: "বিরিয়ানি, কারি, ফাস্টফুড, মিষ্টি সহ ৪০+ আইটেম।",
  },
  {
    icon: Clock,
    title: "সকাল ৭টা - রাত ১১টা",
    description: "প্রতিদিন সকাল থেকে রাত পর্যন্ত আমরা আপনার সেবায়।",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">আমাদের সেবা</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            কেন দিলশাদ বেছে নেবেন
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
