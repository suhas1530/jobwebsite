import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  HeartPulse,
  Building2,
  FileText,
  ArrowRight,
  CheckCircle,
  UserCheck,
  Pill,
  Activity,
} from "lucide-react";

const services = [
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical Recruitment",
    subtitle: "Doctors & Specialists",
    description: "Comprehensive recruitment for all medical professionals from duty doctors to super specialists.",
    items: [
      "MBBS Doctors",
      "Duty Doctors / Medical Officers",
      "Specialists (Medicine, Surgery, Pediatrics, etc.)",
      "Super Specialists (Cardiology, Neurology, etc.)",
      "Consultants",
    ],
    color: "primary",
  },
  {
    id: "paramedical",
    icon: HeartPulse,
    title: "Paramedical & Allied Staffing",
    subtitle: "Technical & Clinical Support",
    description: "Skilled paramedical professionals to support clinical operations and patient care.",
    items: [
      "Lab Technicians",
      "Radiology Technicians",
      "Dialysis Technicians",
      "OT Technicians",
      "ICU Technicians",
      "Physiotherapists",
    ],
    color: "accent",
  },
  {
    id: "pharma",
    icon: Pill,
    title: "Pharmacy Staffing",
    subtitle: "Pharmaceutical Professionals",
    description: "Qualified pharmacists and pharmaceutical professionals for healthcare settings.",
    items: [
      "Hospital Pharmacists",
      "Clinical Pharmacists",
      "Pharmacy Assistants",
      "Drug Store Managers",
    ],
    color: "primary",
  },
  {
    id: "admin",
    icon: Building2,
    title: "Hospital Administration",
    subtitle: "Operations & Management",
    description: "Administrative professionals to ensure smooth hospital operations and quality management.",
    items: [
      "Front Office Executives",
      "Billing & TPA Executives",
      "Medical Records Staff",
      "Medical Coders",
      "NABH / Quality Coordinators",
      "Hospital Administrators",
    ],
    color: "accent",
  },
  {
    id: "contract",
    icon: FileText,
    title: "Contract & Outsourcing",
    subtitle: "Flexible Staffing Solutions",
    description: "Comprehensive outsourcing solutions with staff on STAFITAL payroll and compliance managed.",
    items: [
      "Staff on STAFITAL payroll",
      "Bulk staffing for hospitals",
      "Multi-location deployment",
      "Complete compliance handling",
      "Payroll management",
    ],
    color: "primary",
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-healthcare-navy mt-3 mb-6">
              Comprehensive Healthcare Staffing Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              From doctors to administrators, we provide end-to-end recruitment 
              solutions for all your healthcare staffing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      service.color === "primary"
                        ? "bg-healthcare-blue-light"
                        : "bg-healthcare-green-light"
                    }`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${
                        service.color === "primary" ? "text-primary" : "text-accent"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      service.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  >
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <Button asChild>
                    <Link to="/contact">
                      Request Staff
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`bg-card rounded-3xl p-8 shadow-card border border-border ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h4 className="font-semibold text-healthcare-navy mb-6">
                    Positions We Fill:
                  </h4>
                  <ul className="space-y-4">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            service.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mb-6">
              Need Custom Staffing Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand every healthcare facility has unique needs. Contact us 
              to discuss customized staffing solutions tailored to your requirements.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get a Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
