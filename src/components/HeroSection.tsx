const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/bg.webp" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-saudi-green-dark/80" />
 

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div> 

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto"> 

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up">
            <span className="text-foreground">Experience Saudi</span>
            <br />
            <span className="text-gradient-gold">Football Like Never Before</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-200">
            Join us for the FIFA World Cup 2034 or experience exclusive Riyadh club tours today. 
            Luxury packages, world-class stadiums, and unforgettable moments await.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-gold animate-pulse-glow"
            >
              <span className="relative z-10">Plan Your Visit</span>
              <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#tourism"
              className="px-8 py-4 border-2 border-primary/50 text-primary font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary"
            >
              Discover More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 opacity-0 animate-fade-in-up delay-400">
            {[
              { value: "2034", label: "World Cup Year" },
              { value: "15+", label: "World-Class Stadiums" },
              { value: "48", label: "Nations Competing" },
              { value: "1M+", label: "Expected Visitors" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
