import { useState } from "react";
import { Calendar, Clock, User, Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Maintenance", "Lab Setup", "Custom Glass", "Industry News"];

  const blogPosts = [
    {
      id: 1,
      title: "How to Maintain Your Scientific Glassware for Longevity",
      excerpt: "Proper maintenance of laboratory glassware is essential for accurate results and extended lifespan. Learn the best practices for cleaning, storage, and handling.",
      author: "Dr. Sarah Chen",
      date: "2024-03-15",
      readTime: "5 min",
      tag: "Maintenance",
      image: "🧪",
    },
    {
      id: 2,
      title: "Setting Up an Efficient Laboratory: A Complete Guide",
      excerpt: "From equipment selection to workspace organization, discover how to create a laboratory environment that maximizes productivity and safety.",
      author: "Prof. James Wilson",
      date: "2024-03-10",
      readTime: "8 min",
      tag: "Lab Setup",
      image: "🔬",
    },
    {
      id: 3,
      title: "Custom Scientific Glass: Why It Matters",
      excerpt: "Understanding the importance of custom-designed glassware for specialized experiments and how it can improve research outcomes.",
      author: "Dr. Maria Rodriguez",
      date: "2024-03-05",
      readTime: "6 min",
      tag: "Custom Glass",
      image: "⚗️",
    },
    {
      id: 4,
      title: "The Evolution of Laboratory Glassmaking",
      excerpt: "A journey through the history of scientific glassware, from ancient techniques to modern manufacturing innovations.",
      author: "Dr. Rajesh Kumar",
      date: "2024-02-28",
      readTime: "7 min",
      tag: "Industry News",
      image: "📚",
    },
    {
      id: 5,
      title: "Best Practices for Distillation Equipment Care",
      excerpt: "Essential tips for maintaining distillation apparatus, preventing contamination, and ensuring consistent results in your laboratory.",
      author: "Dr. Emily Thompson",
      date: "2024-02-20",
      readTime: "5 min",
      tag: "Maintenance",
      image: "🧪",
    },
    {
      id: 6,
      title: "Choosing the Right Glassware for Your Research",
      excerpt: "A comprehensive guide to selecting appropriate laboratory glassware based on your specific research requirements and chemical compatibility.",
      author: "Prof. Michael Brown",
      date: "2024-02-15",
      readTime: "9 min",
      tag: "Lab Setup",
      image: "🔬",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag = selectedTag === "All" || post.tag === selectedTag;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Knowledge Hub
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert insights, industry trends, and practical guides for laboratory professionals
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-5 h-5 text-muted-foreground" />
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="glass-card overflow-hidden hover-lift animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Tag */}
                  <Badge variant="secondary" className="mb-2">
                    {post.tag}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 pt-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>

                  {/* Read More */}
                  <Button variant="link" className="p-0 h-auto text-secondary">
                    Read Article →
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter for the latest articles, industry insights, and product updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
