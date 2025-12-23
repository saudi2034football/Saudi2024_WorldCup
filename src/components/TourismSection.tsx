import { Plane, Hotel, Utensils, Bus, Trophy, ShoppingBag, Ticket, Map, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const inclusions = [
  { icon: Plane, text: "Round-trip Business Class Airfare" },
  { icon: Hotel, text: "5 days Luxury Accommodation" },
  { icon: Utensils, text: "All Meals & Fine Dining Experiences" },
  { icon: Bus, text: "Private Chauffeur & Transportation" },
  { icon: Trophy, text: "Exclusive Club Tours & Training Sessions" },
  { icon: ShoppingBag, text: "Official Merchandise & Shopping Tours" },
  { icon: Ticket, text: "Premium Match Tickets (5+ Games)" },
  { icon: Map, text: "Guided Cultural & Heritage Tours" },
];

const TourismSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: packageRef, isVisible: packageVisible } = useScrollAnimation();

  return (
    <section id="tourism" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Exclusive Package
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Saudi Football{" "}
            <span className="text-gradient-gold">Tourism Package</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience Saudi Pro League matches and explore the Kingdom's rich culture
          </p>
        </div>

        {/* Main Package Card */}
        <div ref={packageRef} className="max-w-5xl mx-auto">
          <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card to-secondary border border-border/50 shadow-gold-lg scroll-animate-scale ${packageVisible ? 'visible' : ''}`}>
            {/* Price Banner */}
            <div className="absolute top-6 -right-12 bg-gradient-gold text-primary-foreground px-12 py-2 rotate-45 font-bold text-sm shadow-lg">
              PREMIUM
            </div>

            <div className="p-8 md:p-12">
              {/* Price Header */}
              <div className="text-center mb-12 pb-8 border-b border-border/50">
                <p className="text-muted-foreground mb-2">Starting from</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl text-primary">USD</span>
                  <span className="font-display text-7xl md:text-8xl font-bold text-gradient-gold">
                    35,000
                  </span>
                </div>
                <p className="text-muted-foreground mt-2">per person • All-inclusive</p>
              </div>

              {/* Inclusions Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {inclusions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Additional Benefits */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <h4 className="font-display text-xl font-bold text-center mb-6">Also Included</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "24/7 Concierge",
                    "Travel Insurance",
                    "VIP Airport Transfer",
                    "Desert Safari",
                    "Red Sea Excursion",
                    "Riyadh City Tour",
                  ].map((benefit, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      <Check className="w-4 h-4" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <a
                  href="#contact"
                  className="inline-block px-10 py-4 bg-gradient-gold text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-gold"
                >
                  Reserve Your Experience
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Limited spots available • Book early for best dates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
