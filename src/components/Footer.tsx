import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-gradient-gold">
              Saudi 2034
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              FIFA World Cup Tourism
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 items-start">
            <a href="#unique" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#clubs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Clubs
            </a>
            <a href="#tourism" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Packages
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Office Address */}
          <div className="text-center md:text-right">
            <div className="flex items-start justify-center md:justify-end gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="text-sm font-semibold text-foreground mb-2">Our Office</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Prince Mohammed Street – Intersection 6/7</p>
                  <p>P.O. Box 4508, Al Khobar 31952</p>
                  <p>Al-Khobar, South Rakah – Scheme 2/301 Plot – Unit 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Saudi 2034 Football. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Vision 2030 Initiative
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              Powered by{" "}
              <a 
                href="https://wamatechnology.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Wama Technology
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
