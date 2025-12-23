import { MapPin, Building } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clubs = [
  {
    name: "Al Nassr FC",
    city: "Riyadh",
    stadium: "Mrsool Park",
    color: "from-yellow-500 to-yellow-600",
    founded: "1955",
    notable: "Home of Cristiano Ronaldo",
    logo: "/images/clubs/al-nassr-logo.png",
    stadiumImage: "/images/stadiums/mrsool-park.jpg",
  },
  {
    name: "Al Hilal SFC",
    city: "Riyadh",
    stadium: "Kingdom Arena",
    color: "from-blue-500 to-blue-700",
    founded: "1957",
    notable: "Most successful Asian club",
    logo: "/images/clubs/al-hilal-logo.png",
    stadiumImage: "/images/stadiums/kingdom-arena.jpg",
  },
  {
    name: "Al Ittihad FC",
    city: "Jeddah",
    stadium: "King Abdullah Sports City",
    color: "from-yellow-400 to-black",
    founded: "1927",
    notable: "Home of Karim Benzema",
    logo: "/images/clubs/al-ittihad-logo.png",
    stadiumImage: "/images/stadiums/king-abdullah-sports-city.jpg",
  },
  {
    name: "Al Ahli SFC",
    city: "Jeddah",
    stadium: "King Abdullah Sports City",
    color: "from-green-600 to-green-800",
    founded: "1937",
    notable: "Historic Saudi club",
    logo: "/images/clubs/al-ahli-logo.png",
    stadiumImage: "/images/stadiums/king-abdullah-sports-city.jpg",
  },
  {
    name: "Al Ettifaq FC",
    city: "Dammam",
    stadium: "Prince Mohamed bin Fahd",
    color: "from-green-500 to-yellow-500",
    founded: "1945",
    notable: "Steven Gerrard's club",
    logo: "/images/clubs/al-ettifaq-logo.png",
    stadiumImage: "/images/stadiums/prince-mohamed-bin-fahd.jpg",
  },
  {
    name: "Al Shabab FC",
    city: "Riyadh",
    stadium: "Prince Faisal bin Fahd",
    color: "from-white to-gray-300",
    founded: "1947",
    notable: "Rising Saudi talent hub",
    logo: "/images/clubs/al-shabab-logo.png",
    stadiumImage: "/images/stadiums/prince-faisal-bin-fahd.jpg",
  },
];

const ClubsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="clubs" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Saudi Pro League
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Elite Clubs{" "}
            <span className="text-gradient-gold">Showcase</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the powerhouse clubs transforming Saudi football into a global phenomenon
          </p>
        </div>

        {/* Clubs Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-gold scroll-animate ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stadium Background Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={club.stadiumImage} 
                  alt={club.stadium}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.className = `h-48 bg-gradient-to-r ${club.color} relative overflow-hidden`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Club Logo */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full p-2 shadow-lg">
                  <img 
                    src={club.logo} 
                    alt={`${club.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Club Name */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg">
                    {club.name}
                  </h3>
                </div>
              </div>

              {/* Club Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">{club.city}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="text-sm">{club.stadium}</span>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-primary font-medium">{club.notable}</p>
                  <p className="text-xs text-muted-foreground mt-1">Founded {club.founded}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
