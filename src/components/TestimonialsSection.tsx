import { Star } from "lucide-react";

const testimonials = [
  {
    name: "তানভীর হোসেন",
    text: "আমি আমার পরিবার নিয়ে Dilshad এ ডিনার করতে যাই প্রায় প্রতি মাসে। খাবারের মান ও স্বাদের কোন তুলনা হয় না। পরিবেশনও খুব আন্তরিক।",
    image: "https://dilshadvandar.com/customers/customer1.png",
  },
  {
    name: "ফারিয়া ইসলাম",
    text: "বাচ্চাদের সাথে রেস্টুরেন্টে যাওয়া সবসময় একটু চিন্তার বিষয়। কিন্তু Dilshad এর পরিবেশ এতটাই নিরাপদ ও আরামদায়ক যে আমি বারবার এখানে আসতে চাই। বাচ্চাদের জন্য আলাদা মেনু থাকাও বড় প্লাস।",
    image: "https://dilshadvandar.com/customers/customer2.png",
  },
  {
    name: "মেহেদী হাসান",
    text: "আমি ভোজন রসিক একজন মানুষ। দেশের নানা প্রান্তে খেয়ে দেখেছি। কিন্তু Dilshad এর 'খাসির চাপ' এবং 'চিকেন রোস্ট' এক কথায় অনবদ্য। ধন্যবাদ এমন স্বাদের খাবার পরিবেশন করার জন্য।",
    image: "https://dilshadvandar.com/customers/customer3.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">কাস্টমারদের মন্তব্য</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            আমাদের অতিথিদের কথা
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover bg-muted"
                />
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
