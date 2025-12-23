import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const clubs = [
  "Al Nassr FC",
  "Al Hilal SFC",
  "Al Ittihad FC",
  "Al Ahli SFC",
  "Al Ettifaq FC",
  "Al Shabab FC",
];

const cities = ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina", "NEOM"];

const experiences = ["Standard", "Premium", "VIP", "Ultra Luxury"];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    favoriteClub: "",
    preferredCity: "",
    numberOfPeople: "",
    dateRange: "",
    experienceType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and phone are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c1cd054e-0104-494b-940d-5d3a9484fa6b', // Replace with your actual key
          subject: 'New Saudi 2034 World Cup Inquiry',
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          favorite_club: formData.favoriteClub || 'Not specified',
          preferred_city: formData.preferredCity || 'Not specified',
          number_of_people: formData.numberOfPeople || 'Not specified',
          date_range: formData.dateRange || 'Not specified',
          experience_type: formData.experienceType || 'Not specified',
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Success message
        toast({
          title: "Request Submitted Successfully!",
          description: "Our team will contact you within 24 hours to discuss your Saudi football experience.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          favoriteClub: "",
          preferredCity: "",
          numberOfPeople: "",
          dateRange: "",
          experienceType: "",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Start Planning
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Build Your{" "}
            <span className="text-gradient-gold">Visit</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're planning for FIFA World Cup 2034 or Riyadh club tours, tell us about your dream experience
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-background border border-border/50 p-8 md:p-12 shadow-gold">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Favorite Club / Stadium
                  </label>
                  <select
                    name="favoriteClub"
                    value={formData.favoriteClub}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select a club</option>
                    {clubs.map((club) => (
                      <option key={club} value={club}>{club}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Preferred City
                  </label>
                  <select
                    name="preferredCity"
                    value={formData.preferredCity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Number of People
                  </label>
                  <input
                    type="number"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    placeholder="1"
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Preferred Date Range
                  </label>
                  <input
                    type="text"
                    name="dateRange"
                    value={formData.dateRange}
                    onChange={handleChange}
                    placeholder="e.g., June 15 - July 10, 2034"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Type of Experience
                  </label>
                  <select
                    name="experienceType"
                    value={formData.experienceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select experience type</option>
                    {experiences.map((exp) => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-gold text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-gold animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Your Plan'}
                </button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  By submitting, you agree to be contacted by our team about your travel plans.
                </p>
              </div>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-3">Or contact us directly</p>
            <a 
              href="tel:+13475233196" 
              className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +1 (347) 523-3196
            </a>
            <p className="text-sm text-muted-foreground mt-2">USA Contact Line</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
