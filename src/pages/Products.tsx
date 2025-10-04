import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import productFlask from "@/assets/product-flask.jpg";
import productCondenser from "@/assets/product-condenser.jpg";
import productDistillation from "@/assets/product-distillation.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Flasks", "Condensers", "Distillation Units"];

  const products = [
    {
      id: 1,
      name: "Round Bottom Flask",
      category: "Flasks",
      capacity: "250ml - 5000ml",
      material: "Borosilicate Glass 3.3",
      images: [productFlask, productFlask],
      specs: "Heat resistant up to 500°C",
    },
    {
      id: 2,
      name: "Erlenmeyer Flask",
      category: "Flasks",
      capacity: "100ml - 2000ml",
      material: "Borosilicate Glass 3.3",
      images: [productFlask, productFlask],
      specs: "Narrow neck design",
    },
    {
      id: 3,
      name: "Liebig Condenser",
      category: "Condensers",
      length: "200mm - 600mm",
      material: "Borosilicate Glass 3.3",
      images: [productCondenser, productCondenser, productCondenser],
      specs: "Straight tube design",
    },
    {
      id: 4,
      name: "Graham Condenser",
      category: "Condensers",
      length: "300mm - 500mm",
      material: "Borosilicate Glass 3.3",
      images: [productCondenser, productCondenser],
      specs: "Coil tube design",
    },
    {
      id: 5,
      name: "Allihn Condenser",
      category: "Condensers",
      length: "300mm - 400mm",
      material: "Borosilicate Glass 3.3",
      images: [productCondenser, productCondenser],
      specs: "Bulb design for efficiency",
    },
    {
      id: 6,
      name: "Complete Distillation Unit",
      category: "Distillation Units",
      capacity: "1L - 10L",
      material: "Borosilicate Glass 3.3",
      images: [productDistillation, productDistillation, productDistillation],
      specs: "Complete setup with accessories",
    },
    {
      id: 7,
      name: "Fractional Distillation Column",
      category: "Distillation Units",
      length: "300mm - 1000mm",
      material: "Borosilicate Glass 3.3",
      images: [productDistillation, productDistillation],
      specs: "Multiple theoretical plates",
    },
    {
      id: 8,
      name: "Vacuum Distillation Setup",
      category: "Distillation Units",
      capacity: "500ml - 5L",
      material: "Borosilicate Glass 3.3",
      images: [productDistillation, productDistillation],
      specs: "Includes vacuum adapter",
    },
    {
      id: 9,
      name: "Flat Bottom Flask",
      category: "Flasks",
      capacity: "100ml - 5000ml",
      material: "Borosilicate Glass 3.3",
      images: [productFlask, productFlask],
      specs: "Stable base design",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Product Range
            </h1>
            <p className="text-lg text-muted-foreground">
              Precision-crafted scientific glassware for laboratories worldwide. Each piece
              manufactured to exact specifications using premium borosilicate glass.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="hover-lift animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <ProductImageCarousel 
                    images={product.images} 
                    productName={product.name}
                  />
                  <CardTitle className="text-xl mt-4">{product.name}</CardTitle>
                  <div className="text-sm text-muted-foreground">{product.category}</div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Material:</span>{" "}
                    <span className="text-muted-foreground">{product.material}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-foreground">
                      {product.capacity ? "Capacity:" : "Length:"}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {product.capacity || product.length}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Features:</span>{" "}
                    <span className="text-muted-foreground">{product.specs}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full">
                    Request Quote
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need Something Custom?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We specialize in creating custom glassware to your exact specifications. Upload your
            design or describe your needs.
          </p>
          <Button size="lg" variant="secondary">
            Submit Custom Order
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
