import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    // { name: "Custom Orders", path: "/custom-orders" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10  rounded-lg flex items-center justify-center">
              <img src={logo} alt="AAR Logo" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AAR Scientific</h1>
              <p className="text-xs text-muted-foreground">Industry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                  isActive(link.path)
                    ? "text-secondary font-semibold"
                    : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/custom-orders">
              <Button variant="default" size="sm" className="ml-4">
               Order as per your need?
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 animate-fade-in-up border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-secondary/10 text-secondary font-semibold"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/custom-orders" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full mt-2">
                  Custom Order? Submit your Quotation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
