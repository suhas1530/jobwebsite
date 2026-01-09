import { motion } from "framer-motion";
import { Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const brands = [
  {
    name: "STAFITAL",
    tagline: "Complete Healthcare Staffing",
    description: "Medical, Paramedical, Allied Health, Administration & Pharma recruitment. Your one-stop solution for all healthcare staffing needs.",
    icon: Users,
    color: "primary",
    features: ["Medical Staff", "Paramedical", "Administration", "Pharma"],
  },
  {
    name: "NURS24",
    tagline: "Nurse-Only Hiring Platform",
    description: "Dedicated online platform exclusively for nursing professionals. Quick, reliable nurse staffing solutions for healthcare facilities.",
    icon: Heart,
    color: "accent",
    features: ["Staff Nurses", "ICU Nurses", "OT Nurses", "Home Care"],
  },
];

const BrandsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Brands
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mt-3 mb-4">
            Specialized Healthcare Staffing Platforms
          </h2>
          <p className="text-muted-foreground text-lg">
            Two dedicated platforms designed to meet every healthcare staffing requirement
          </p>
        </motion.div>

        {/* Brands */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-card rounded-3xl p-8 shadow-card border-2 overflow-hidden ${
                brand.color === "primary" ? "border-primary/20" : "border-accent/20"
              }`}
            >
              {/* Background Decoration */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2 ${
                  brand.color === "primary"
                    ? "bg-healthcare-blue-light"
                    : "bg-healthcare-green-light"
                }`}
              />

              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    brand.color === "primary"
                      ? "gradient-hero"
                      : "gradient-cta"
                  }`}
                >
                  <brand.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold text-healthcare-navy mb-2">
                  {brand.name}
                </h3>
                <p
                  className={`text-sm font-medium mb-4 ${
                    brand.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  {brand.tagline}
                </p>
                <p className="text-muted-foreground mb-6">{brand.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {brand.features.map((feature) => (
                    <span
                      key={feature}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        brand.color === "primary"
                          ? "bg-healthcare-blue-light text-primary"
                          : "bg-healthcare-green-light text-accent"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant={brand.color === "primary" ? "default" : "outline"}
                  className={brand.color === "accent" ? "border-accent text-accent hover:bg-accent hover:text-accent-foreground" : ""}
                  asChild
                >
                  <Link to="/services">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
