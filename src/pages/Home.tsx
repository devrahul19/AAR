import { Link } from "react-router-dom";
import { ArrowRight, Beaker, Award, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-glassmaking.jpg";
import heroPrecision from "@/assets/hero-precision.jpg";
import heroLaboratory from "@/assets/hero-laboratory.jpg";
import productsHero from "@/assets/products-hero.jpg";
import tubesImage from "@/assets/Tubes.jpg";
import distillersImage from "@/assets/Distillers.jpg";
import labBurnersImage from "@/assets/lab burners.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Carousel */}
        <div className="absolute inset-0">
          <HeroCarousel 
            images={[heroImage, heroPrecision, heroLaboratory]} 
            interval={6000}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-secondary-light" />
              <span className="text-sm font-medium text-white">Established in 1965</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premier Manufacturers of Laboratory Glassware
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Serving schools, colleges, universities & research institutions with high-quality scientific glassware and instruments since 1965.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto group">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/custom-orders">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {[
                { icon: Award, label: "20+ Years", desc: "Experience" },
                { icon: Beaker, label: "10000+", desc: "Products Sold" },
                { icon: Users, label: "100+", desc: "Clients Satified" },
                { icon: Sparkles, label: "100%", desc: "Quality" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose AAR Scientific?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by educational institutions since 1965
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Range",
                desc: "From basic labware to specialized research equipment, all under one roof",
                icon: "🔬",
              },
              {
                title: "Timely Delivery",
                desc: "Prompt supplies and reliable service for all your laboratory needs",
                icon: "⚡",
              },
              {
                title: "Educational Focus",
                desc: "Specialized in serving schools, colleges, and research institutions",
                icon: "�",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsHero})` }}
        />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete range of laboratory glassware and scientific instruments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Essential Labware", desc: "Test tubes, beakers, measuring cylinders, pipettes, and volumetric flasks" },
              { name: "Specialized Equipment", desc: "Water distillers, NPL distillation apparatus, and Soxhlet apparatus" },
              { name: "Research Instruments", desc: "Desiccators, filter apparatus, interchangeable joints up to 5000/10000ml" },
            ].map((product, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index === 0 ? (
                  <div className="aspect-square rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={tubesImage} 
                      alt="Essential Labware"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : index === 1 ? (
                  <div className="aspect-square rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={distillersImage} 
                      alt="Specialized Equipment"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-square rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={labBurnersImage} 
                      alt="Research Instruments"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Link to="/products">
              <Button size="lg" variant="default">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Equip Your Laboratory
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Get in touch for all your scientific glassware and laboratory equipment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/custom-orders">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
