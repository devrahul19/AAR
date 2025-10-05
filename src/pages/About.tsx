import { useState, useEffect } from "react";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import workshopImage from "@/assets/workshop.jpg";
import founderImage from "@/assets/founder.jpg";
import videoImage from "@/assets/video1.mp4";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const aboutImages = [workshopImage, founderImage, videoImage];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const moveToNextSlide = () => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    };

    if (aboutImages[currentImageIndex] === videoImage) {
      // For video, wait for 3 seconds
      timeoutId = setTimeout(moveToNextSlide, 3000);
    } else {
      // For images, wait for 4 seconds
      timeoutId = setTimeout(moveToNextSlide, 4000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentImageIndex]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Legacy Since 1965
            </h1>
            <p className="text-lg text-muted-foreground">
              Nearly six decades of excellence in manufacturing premium laboratory glassware and scientific instruments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up relative overflow-hidden rounded-2xl shadow-premium">
              {aboutImages.map((media, index) => (
                <div
                  key={index}
                  className={`aspect-video transition-all duration-1000 ${
                    index === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110 absolute inset-0"
                  }`}
                >
                  {media === videoImage ? (
                    <video
                      className="w-full h-full object-cover"
                      src={media}
                      autoPlay
                      muted
                      playsInline
                    />
                  ) : (
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${media})` }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Excellence in Scientific Glassware Since 1965
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Established in 1965, The Surindra Sc. Glassware co., now known as AAR Scientific Industry, is a leading manufacturer,
                exporter & supplier of laboratory glassware and scientific instruments. We serve schools, colleges, universities
                & research institutions worldwide with our comprehensive range of high-quality products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the decades, we have built our reputation through prompt supplies, timely deliveries, and exceptional quality.
                Our extensive product range makes us a one-stop shop for all scientific, laboratory, and research equipment requirements.
                From basic laboratory essentials to specialized research apparatus, we deliver excellence in every piece we craft.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { value: "20+ Years", label: "Experience" },
                  { value: "10000+", label: "Products Sold" },
                  { value: "100+", label: "Clients Satified" },
                  { value: "100%", label: "Quality" },
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
                title: "Premium Quality",
                desc: "Ensuring excellence in every product, from basic glassware to sophisticated apparatus.",
              },
              {
                icon: Users,
                title: "Educational Focus",
                desc: "Dedicated to serving schools, colleges, universities, and research institutions.",
              },
              {
                icon: Target,
                title: "Comprehensive Range",
                desc: "One-stop solution for all laboratory glassware and scientific instrument needs.",
              },
              {
                icon: TrendingUp,
                title: "Timely Delivery",
                desc: "Committed to prompt supplies and reliable service for all our customers.",
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
                year: "1965",
                title: "The Foundation",
                desc: "Established as The Surindra Sc. Glassware co., focusing on laboratory glassware manufacturing.",
              },
              {
                year: "1980",
                title: "Product Range Expansion",
                desc: "Expanded our product line to include comprehensive scientific instruments and educational materials.",
              },
              {
                year: "1995",
                title: "Market Leadership",
                desc: "Became a leading supplier for schools, colleges, and research institutions across the region.",
              },
              {
                year: "2010",
                title: "Manufacturing Excellence",
                desc: "Modernized facilities with advanced manufacturing capabilities for precision glassware production.",
              },
              {
                year: "2025",
                title: "Global Presence",
                desc: "Established as AAR Scientific Industry, serving educational and research institutions worldwide.",
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
              A Message from Our Team
            </h2>
            <blockquote className="text-xl text-white/90 leading-relaxed italic mb-6">
              "Since 1965, we have been at the forefront of manufacturing premium laboratory glassware and scientific instruments.
              Our comprehensive range includes everything from basic test tubes to sophisticated distillation apparatus.
              We take pride in our ability to serve as a one-stop solution for all laboratory and research equipment needs,
              maintaining the highest standards of quality and reliability in every product we deliver."
            </blockquote>
            <p className="text-lg font-semibold">Rajinder Dhiman</p>
            <p className="text-white/70">AAR Scientific Industry</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
