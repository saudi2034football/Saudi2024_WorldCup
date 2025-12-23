import { Users, Building2, Trophy, TrendingUp, Star, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Users,
    title: "Passionate Fan Culture",
    description: "Experience the electric atmosphere as millions of dedicated Saudi fans create an unmatched matchday experience.",
  },
  {
    icon: Building2,
    title: "Massive Investment",
    description: "Over $500 billion invested in sports infrastructure, bringing world-class facilities and legendary players to the Kingdom.",
  },
  {
    icon: Trophy,
    title: "World-Class Stadiums",
    description: "Cutting-edge architectural marvels designed to host the biggest matches and provide unforgettable experiences.",
  },
  {
    icon: TrendingUp,
    title: "Saudi Pro League Growth",
    description: "One of the fastest-growing leagues globally, featuring international superstars and rising talents.",
  },
  {
    icon: Star,
    title: "Vision 2030 Sports",
    description: "A transformative national initiative making Saudi Arabia a global hub for sports entertainment and tourism.",
  },
  {
    icon: Globe,
    title: "International Superstars",
    description: "Home to football legends like Cristiano Ronaldo, Neymar, Benzema, and many more world-class players.",
  },
];

const UniqueSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="unique" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saudi-green/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Why Saudi Arabia?
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Makes Saudi Football{" "}
            <span className="text-gradient-gold">Unique</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the transformation that's making Saudi Arabia the new epicenter of world football
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-gold hover:-translate-y-2 scroll-animate ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
