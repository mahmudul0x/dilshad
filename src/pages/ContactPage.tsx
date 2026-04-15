import { ArrowLeft, Phone, MessageCircle, Mail, Facebook, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { useUserProfile } from "@/contexts/UserProfileContext";

const ContactPage = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-padding pt-20">
        <div className="container mx-auto">
          <div className="mb-8 flex items-center gap-3">
            <Link to="/" className="rounded-lg bg-muted p-2 transition-colors hover:bg-secondary">
              <ArrowLeft className="h-5 w-5 text-foreground" />
            </Link>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">যোগাযোগ</p>
              <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
                আমাদের সাথে যোগাযোগ করুন
              </h1>
            </div>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="grid items-stretch gap-8 md:grid-cols-2">
            <div className="min-h-[350px] overflow-hidden rounded-xl border border-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0!2d88.6365569!3d25.6260952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb529c31baa23f%3A0xd49f9f03e7e58e8d!2sDilshad!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dilshad Restaurant Location"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-lg font-bold text-foreground">ঠিকানা</h3>
                    <p className="text-muted-foreground">
                      Sadar Hospital Mor, Dinajpur Sadar
                      <br />
                      Dinajpur-5200
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-lg font-bold text-foreground">সময়সূচি</h3>
                    <p className="text-muted-foreground">প্রতিদিন: সকাল ৭টা - রাত ১১টা</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default ContactPage;
