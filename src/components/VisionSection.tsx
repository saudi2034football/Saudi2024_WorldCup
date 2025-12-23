import { Trophy, Target, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VisionSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: fifaRef, isVisible: fifaVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-saudi-green-dark/20 to-background">
     

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Vision 2034
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            A Vision for{" "}
            <span className="text-gradient-gold">The Future</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Under the leadership of Crown Prince Mohammed bin Salman, Saudi Arabia is transforming into a global sports destination
          </p>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* MBS Portrait */}
          <div className={`relative scroll-animate-left ${contentVisible ? 'visible' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-gold-lg">
              <img 
                src="/images/mbs-portrait.jpg" 
                alt="Crown Prince Mohammed bin Salman"
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=1000&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  Crown Prince Mohammed bin Salman
                </h3>
                <p className="text-white/90">
                  Leading Saudi Arabia's transformation into a global sports powerhouse
                </p>
              </div>
            </div>
          </div>

          {/* Vision Points */}
          <div className={`space-y-8 scroll-animate-right ${contentVisible ? 'visible' : ''}`}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">World Cup 2034</h3>
                <p className="text-muted-foreground">
                  Hosting the most ambitious FIFA World Cup ever, with state-of-the-art stadiums and infrastructure across the Kingdom.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Vision 2030</h3>
                <p className="text-muted-foreground">
                  Part of the broader Vision 2030 initiative to diversify the economy and establish Saudi Arabia as a global hub for sports, culture, and tourism.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-muted-foreground">
                  Attracting world-class talent, hosting international events, and creating unforgettable experiences for millions of visitors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FIFA World Cup Section */}
        <div 
          ref={fifaRef}
          className={`relative rounded-3xl overflow-hidden bg-gradient-to-r from-card to-card/50 border border-border/50 p-8 md:p-12 scroll-animate-scale ${fifaVisible ? 'visible' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                FIFA World Cup 2034
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                The Greatest Show on Earth
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the pinnacle of football excellence as 48 nations compete for glory in the most technologically advanced and luxurious World Cup ever hosted.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-background rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-display font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Stadiums</div>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-display font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Host Cities</div>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-display font-bold text-primary">64</div>
                  <div className="text-sm text-muted-foreground">Matches</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/images/fifa-world-cup-trophy.jpg" 
                  alt="FIFA World Cup Trophy"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=800&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              {/* World Cup Logo Overlay */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full p-3 shadow-gold">
                <img 
                  src="/images/world-cup-2034-logo.png" 
                  alt="World Cup 2034 Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
