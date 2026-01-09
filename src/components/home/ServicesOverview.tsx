import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Building2, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Recruitment",
    description: "MBBS Doctors, Duty Doctors, Medical Officers, Specialists & Super Specialists for your healthcare facility.",
    color: "primary",
  },
  {
    icon: HeartPulse,
    title: "Paramedical Staffing",
    description: "Lab, Radiology, Dialysis, OT, ICU Technicians, Pharmacists, and Physiotherapists ready to deploy.",
    color: "accent",
  },
  {
    icon: Building2,
    title: "Hospital Administration",
    description: "Front Office, Billing & TPA, Medical Coders, NABH/Quality Coordinators for seamless operations.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Contract & Outsourcing",
    description: "Staff on STAFITAL payroll with bulk & multi-location staffing. Compliance fully handled.",
    color: "accent",
  },
];

const ServicesOverview = () => {
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mt-3 mb-4">
            Complete Healthcare Staffing Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From medical professionals to administrative staff, we provide end-to-end 
            recruitment solutions tailored to your healthcare organization's needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  service.color === "primary"
                    ? "bg-healthcare-blue-light"
                    : "bg-healthcare-green-light"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold text-healthcare-navy mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
