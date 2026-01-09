import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-healthcare-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">STAFITAL</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Healthcare Staffing Made Simple. We connect hospitals and healthcare 
              organizations with trusted medical professionals across India.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              A brand of KAAMAN TECHNO GLOBAL SERVICES PVT LTD
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Staffing Models", path: "/staffing-models" },
                { name: "Why Stafital", path: "/why-stafital" },
                { name: "Recruitment Process", path: "/process" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Medical Recruitment",
                "Paramedical Staffing",
                "Hospital Administration",
                "Contract Staffing",
                "Outsourcing Services",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70 mt-0.5" />
                <a
                  href="mailto:info@stafital.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@stafital.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-primary-foreground/70 mt-0.5" />
                <a
                  href="https://www.stafital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  www.stafital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Stafital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
