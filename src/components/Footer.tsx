import { Link } from "react-router-dom";
import { Beaker, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <img src={logo} alt="AAR Logo" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">AAR Scientific</h3>
                <p className="text-xs text-primary-foreground/80">Industry</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Nearly six decades of excellence in manufacturing premium laboratory glassware and scientific instruments. Trusted by educational institutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Test Tubes & Culture Tubes</li>
              <li className="text-sm text-primary-foreground/80">Beakers & Volumetric Flasks</li>
              <li className="text-sm text-primary-foreground/80">Distillation Apparatus</li>
              <li className="text-sm text-primary-foreground/80">Water & Glass Stills</li>
              <li className="text-sm text-primary-foreground/80">Laboratory Equipment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>aarscind@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 90340 02949</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>2288, Kacha Bazar, Sadar Bazar, Ambala Cantt, Haryana 133001</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} AAR Scientific Industry (Est. 1965). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
