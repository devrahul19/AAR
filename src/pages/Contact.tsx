import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const whatsappNumber = "+919034002949";
  const whatsappMessage = "Hello! I'm interested in learning more about your products.";

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our products or services? We are here to help.
              Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "aarscind@gmail.com",
                subtext: "Response within 24 hours",
                href: "mailto:aarscind@gmail.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+919034002949",
                subtext: "Mon-Sat, 9AM-8PM IST",
                href: "tel:+919034002949",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "2288, Kacha Bazar, Sadar Bazar, Ambala Cantt",
                subtext: "Ambala, Haryana 133001",
                href: "#map",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="glass-card p-8 text-center hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground font-medium mb-1">{item.content}</p>
                <p className="text-sm text-muted-foreground">{item.subtext}</p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 hover-lift mt-6 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Chat on WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Get instant responses</p>
                </div>
              </a>
            </div>

            {/* Map & Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {/* Map */}
              <div id="map" className="glass-card p-4 aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4317.905516807634!2d76.8413220762418!3d30.334937704747613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb7d24e988fc9%3A0x5f5c72bbe68e55ad!2sAAR%20SCIENTIFIC%20INDUSTRY!5e1!3m2!1sen!2sin!4v1759648982296!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.75rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AAR Scientific Industry Location"
                />
              </div>

              {/* Business Hours */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 7:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className="text-muted-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass-card p-8 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Need Immediate Assistance?</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent inquiries or technical support, our team is available via phone or WhatsApp during business hours.
                </p>
                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild>
                    <a href="tel:+919034002949">Call Now</a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
