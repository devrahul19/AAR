import { Award, Users, Target, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import workshopImage from "@/assets/workshop.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground">
              Four decades of dedication to precision, quality, and innovation in scientific glassmaking.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div 
                className="aspect-video rounded-2xl bg-cover bg-center shadow-premium"
                style={{ backgroundImage: `url(${workshopImage})` }}
              />
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Crafting Excellence Since 1984
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AAR Scientific Industry was founded with a singular vision: to bridge the gap between traditional
                glassmaking craftsmanship and modern scientific precision. What began as a small workshop has grown
                into a leading manufacturer of scientific glassware, trusted by laboratories worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey has been defined by an unwavering commitment to quality, innovation, and customer
                satisfaction. Each piece we create represents the perfect marriage of time-honored techniques and
                cutting-edge technology.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { value: "40+", label: "Years Experience" },
                  { value: "500+", label: "Happy Clients" },
                  { value: "1000+", label: "Products" },
                  { value: "100%", label: "Quality Guaranteed" },
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-4 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Quality First",
                desc: "Every piece undergoes rigorous quality control to meet the highest standards.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                desc: "Your satisfaction and success are our top priorities in everything we do.",
              },
              {
                icon: Target,
                title: "Precision",
                desc: "Microscopic accuracy in every measurement, every time, without compromise.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                desc: "Constantly evolving our techniques while honoring traditional craftsmanship.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our four-decade history
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                year: "1984",
                title: "The Beginning",
                desc: "Founded as a small workshop with a focus on precision glassmaking for local laboratories.",
              },
              {
                year: "1995",
                title: "Expansion",
                desc: "Expanded operations and introduced computer-aided design for custom glassware production.",
              },
              {
                year: "2005",
                title: "International Recognition",
                desc: "Achieved ISO certification and began exporting to laboratories across three continents.",
              },
              {
                year: "2015",
                title: "Technology Integration",
                desc: "Integrated advanced manufacturing technologies while maintaining artisanal quality standards.",
              },
              {
                year: "2024",
                title: "Innovation Leader",
                desc: "Recognized as an industry leader in custom scientific glassware with 500+ satisfied clients.",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="glass-card p-6 flex-1 hover-lift">
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
              👨‍🔬
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Message from Our Founder
            </h2>
            <blockquote className="text-xl text-white/90 leading-relaxed italic mb-6">
              "Quality is not an act, it is a habit. For over four decades, we have dedicated ourselves to the
              pursuit of perfection in every piece of glassware we create. Our commitment to excellence, precision,
              and innovation remains as strong today as it was in 1984. Thank you for trusting us with your
              scientific endeavors."
            </blockquote>
            <p className="text-lg font-semibold">Dr. Rajesh Kumar</p>
            <p className="text-white/70">Founder & Chief Craftsman</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
