import { Phone, MessageCircle, Mail, Facebook } from "lucide-react";
import { useUserProfile } from "@/contexts/UserProfileContext";

const ContactSection = () => {
  const { getQuickOrderLink } = useUserProfile();

  const contacts = [
    {
      icon: Phone,
      label: "কল করুন",
      value: "+880 1911-719476",
      href: "tel:+8801911719476",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+880 1911-719476",
      href: getQuickOrderLink(),
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Mail,
      label: "ইমেইল",
      value: "dilshad@example.com",
      href: "mailto:dilshad@example.com",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "dilshadrestaurant",
      href: "https://www.facebook.com/dilshadrestaurant",
      color: "bg-blue-600/10 text-blue-700",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">যোগাযোগ</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-3 inline-flex rounded-xl p-3 transition-transform group-hover:scale-110 ${contact.color}`}
              >
                <contact.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold text-foreground">{contact.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
