const AboutSection = () => {
  const promoters = [
    {
      name: "Faisal bin Abdul Rahman Al Saud",
      nameArabic: "فيصل بن عبد الرحمن آل سعود",
      bio: "Faisal bin Abdul Rahman Al Saud (Arabic: فيصل بن عبد الرحمن آل سعود Fayṣal bin 'Abd ar Raḥman Āl Su'ūd) is a Saudi prince who was the 8th president of Al-Nassr Club. He was the head of Al-Nassr from 1997 to 2000, where he led the club to the FIFA Club World Cup in Brazil, and from 2006 onward. He is a grandson of King Saud and the son of Prince Abdul Rahman bin Saud Al Saud, the godfather of Al-Nassr Club. In addition, he is the nephew of Prince Sultan bin Saud, the 6th president of Al-Nassr, and the half-brother of Mamdouh bin Abdul Rahman bin Saud, the 10th president of the club."
    },
    {
      name: "Fareed Asad",
      bio: "Fareed Asad is President and Chief Executive Officer of Algosaibi International Group domiciled in the United States with expertise in facilitating privileged access. Fareed Asad is from Saudi Arabia's Algosaibi Family and maintains special business and social relationships with the Saudi Royal Family. Fareed Asad has effected numerous meetings, collaborationist and introductions in the United States Government and C-Level management in Wall Street for entity's outside the United States. Fareed Asad is deeply connected to the leadership of the United Arab Emirates and China and with industry captains of India. As President and Chief Executive Officer, Fareed Asad oversaw Algosaibi International Group's first investment in a technology start up (Airacer.com) in the United States. Fareed Asad sits on the board of Humena Club, a Virginia based blockchain marketplace for Human Enhancement products."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-gradient-gold">
            Our Promoters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders behind our mission
          </p>
        </div>

        {/* Main Image */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/al-saud.jpeg"
              alt="Our Promoters"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Promoters */}
        <div className="grid md:grid-cols-2 gap-8">
          {promoters.map((promoter, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {promoter.name}
                </h3>
                {promoter.nameArabic && (
                  <p className="text-lg text-muted-foreground mb-2" dir="rtl">
                    {promoter.nameArabic}
                  </p>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {promoter.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
