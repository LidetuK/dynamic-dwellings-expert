
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/5a2f12d1-d188-4557-bc33-4f2a68ba8f70.png" 
                alt="Qatken Properties" 
                className="h-16 bg-white p-2 rounded"
              />
            </Link>
            <p className="text-gray-300 mt-4">
              Your trusted partner in real estate, providing exceptional property solutions for buyers, sellers, and renters.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-qatken-orange transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-qatken-orange transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-qatken-orange transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-qatken-orange transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-qatken-orange transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Home
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-300 hover:text-qatken-orange transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Properties for Sale
                </Link>
              </li>
              <li>
                <Link to="/rent" className="text-gray-300 hover:text-qatken-orange transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Properties for Rent
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-qatken-orange transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-qatken-orange transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> FAQs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-qatken-orange transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-qatken-orange transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-qatken-orange shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Real Estate Avenue, City Center, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-qatken-orange shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-qatken-orange transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-qatken-orange shrink-0" />
                <a href="mailto:info@qatkenproperties.com" className="text-gray-300 hover:text-qatken-orange transition-colors">
                  info@qatkenproperties.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-qatken-orange shrink-0 mt-0.5" />
                <span className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest property updates and offers.
            </p>
            <form className="space-y-3">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-qatken-orange"
                />
                <Button type="submit" className="bg-qatken-orange hover:bg-qatken-orange/90 text-white">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Qatken Properties. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-qatken-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-qatken-orange text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
