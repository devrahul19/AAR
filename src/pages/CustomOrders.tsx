import { useState } from "react";
import { Upload, FileText, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CustomOrders = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productType: "",
    description: "",
    quantity: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Order Submitted Successfully!",
        description: "We'll review your request and get back to you within 24 hours.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        productType: "",
        description: "",
        quantity: "",
      });
      setFile(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Create Quotation
            </h1>
            <p className="text-lg text-muted-foreground">
              Have specific requirements? We manufacture custom scientific glassware tailored to
              your exact specifications. Upload your drawings or describe your needs, and our
              experts will bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in-up">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Submit Your Quoatation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Product Type */}
                  <div className="space-y-2">
                    <Label htmlFor="productType">Product Type *</Label>
                    <Select
                      value={formData.productType}
                      onValueChange={(value) => setFormData({ ...formData, productType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flask">Flask</SelectItem>
                        <SelectItem value="condenser">Condenser</SelectItem>
                        <SelectItem value="distillation">Distillation Unit</SelectItem>
                        <SelectItem value="custom">Custom Design</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      required
                      min="1"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="10"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description & Specifications *</Label>
                    <Textarea
                      id="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your requirements, dimensions, special features, etc."
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="file">Upload Drawing or Specification (PDF, JPG, PNG)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-secondary transition-colors cursor-pointer">
                      <input
                        id="file"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="file" className="cursor-pointer">
                        {file ? (
                          <div className="flex items-center justify-center gap-2 text-foreground">
                            <FileText className="w-5 h-5 text-secondary" />
                            <span className="font-medium">{file.name}</span>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Upload className="w-8 h-8 text-muted-foreground mx-auto" />
                            <p className="text-sm text-muted-foreground">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PDF, JPG, PNG (max 10MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Order
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">How It Works</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Submit Your Request",
                      desc: "Fill out the form with your specifications and upload any drawings or documents.",
                    },
                    {
                      step: "2",
                      title: "Expert Review",
                      desc: "Our team reviews your requirements and provides a detailed quote within 24 hours.",
                    },
                    {
                      step: "3",
                      title: "Manufacturing",
                      desc: "Once approved, our craftsmen begin precision manufacturing to your exact specs.",
                    },
                    {
                      step: "4",
                      title: "Quality Check & Delivery",
                      desc: "Each piece undergoes rigorous quality control before secure packaging and delivery.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 bg-secondary/5 border-secondary/20">
                <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  Every custom piece is crafted to meet or exceed industry standards. We stand
                  behind our work with a comprehensive quality guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomOrders;
