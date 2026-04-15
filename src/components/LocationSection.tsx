import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">আমাদের ঠিকানা</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            আমাদের খুঁজে পান
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-border/50 min-h-[350px]">
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

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">ঠিকানা</h3>
                  <p className="text-muted-foreground">
                    Sadar Hospital Mor, Dinajpur Sadar<br />
                    Dinajpur-5200
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Dilshad/@25.626095,88.636557,16z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              <Navigation className="w-5 h-5" />
              দিকনির্দেশনা পান
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
