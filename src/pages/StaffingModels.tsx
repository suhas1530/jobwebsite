import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  UserCheck,
  Clock,
  Building,
  AlertCircle,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const models = [
  {
    icon: UserCheck,
    title: "Permanent Placement",
    description: "Full-time, permanent positions for long-term healthcare staffing needs.",
    features: [
      "Comprehensive candidate screening",
      "Cultural fit assessment",
      "Credential verification",
      "Replacement guarantee",
      "Smooth onboarding support",
    ],
    ideal: "Hospitals looking for long-term team members",
  },
  {
    icon: Clock,
    title: "Contract Staffing",
    description: "Flexible staffing for specific projects, leave coverage, or temporary needs.",
    features: [
      "Flexible contract duration",
      "Staff on STAFITAL payroll",
      "Compliance managed by us",
      "Easy extension or termination",
      "Quick mobilization",
    ],
    ideal: "Seasonal demands or project-based requirements",
  },
  {
    icon: Building,
    title: "Outsourced Workforce",
    description: "Complete workforce management with staff employed by STAFITAL.",
    features: [
      "Full HR management",
      "Payroll administration",
      "Statutory compliance",
      "Performance management",
      "Scalable team size",
    ],
    ideal: "Organizations wanting to focus on core healthcare delivery",
  },
  {
    icon: AlertCircle,
    title: "Emergency / Short-term Staffing",
    description: "Rapid deployment of qualified staff for urgent requirements.",
    features: [
      "24-48 hour deployment",
      "Pre-vetted candidate pool",
      "Immediate availability",
      "Shift-based options",
      "Weekend & holiday coverage",
    ],
    ideal: "Sudden staff shortages or emergency situations",
  },
  {
    icon: MapPin,
    title: "Bulk & PAN-India Deployment",
    description: "Large-scale staffing across multiple locations nationwide.",
    features: [
      "Multi-city coordination",
      "Centralized management",
      "Standardized processes",
      "Regional compliance handling",
      "Dedicated project managers",
    ],
    ideal: "Hospital chains and multi-location healthcare groups",
  },
];

const StaffingModels = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-healthcare-blue-light to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Staffing Models
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-healthcare-navy mt-3 mb-6">
              Flexible Engagement Models
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the staffing model that best fits your organization's needs, 
              budget, and operational requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {models.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-3xl p-8 shadow-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Header */}
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <model.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-healthcare-navy mb-3">
                      {model.title}
                    </h3>
                    <p className="text-muted-foreground">{model.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-healthcare-navy mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col justify-between">
                    <div className="bg-muted/50 rounded-xl p-4 mb-4">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-healthcare-navy">
                          Ideal for:
                        </span>{" "}
                        {model.ideal}
                      </p>
                    </div>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mb-4">
              Not Sure Which Model to Choose?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our staffing experts will help you determine the best engagement model 
              based on your specific requirements, budget, and timeline.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default StaffingModels;
