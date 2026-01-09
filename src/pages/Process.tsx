import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Search,
  ShieldCheck,
  Users,
  Rocket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Requirement Understanding",
    description: "We begin with a detailed consultation to understand your staffing needs, organizational culture, and specific requirements.",
    details: [
      "In-depth discussion of role requirements",
      "Understanding organizational culture",
      "Defining candidate profiles",
      "Timeline and budget alignment",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "Candidate Sourcing & Screening",
    description: "Our team identifies and screens candidates from our extensive database and network of healthcare professionals.",
    details: [
      "Database search for matching profiles",
      "Active sourcing from networks",
      "Initial telephonic screening",
      "Skills and experience assessment",
    ],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Credential Verification",
    description: "Thorough verification of all credentials, certifications, and background checks for shortlisted candidates.",
    details: [
      "Medical license verification",
      "Educational credential check",
      "Employment history verification",
      "Background and reference checks",
    ],
  },
  {
    number: "04",
    icon: Users,
    title: "Interview Coordination",
    description: "We coordinate interviews between candidates and your team, providing full support throughout the process.",
    details: [
      "Profile presentation to client",
      "Interview scheduling",
      "Feedback collection",
      "Offer negotiation support",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment & Support",
    description: "Seamless onboarding support and ongoing assistance to ensure successful placement and integration.",
    details: [
      "Joining formalities assistance",
      "Onboarding support",
      "Regular check-ins",
      "Post-placement support",
    ],
  },
];

const Process = () => {
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
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-healthcare-navy mt-3 mb-6">
              5-Step Hiring Process
            </h1>
            <p className="text-xl text-muted-foreground">
              A structured, transparent recruitment process designed to deliver 
              the right healthcare talent efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 w-0.5 h-full bg-border hidden md:block" />
                )}

                <div className="flex gap-6 mb-12">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-healthcare-navy">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="ml-16 grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              Our efficient process ensures quick turnaround without compromising quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                time: "Day 1-2",
                title: "Requirement & Sourcing",
                description: "Understanding needs and initial candidate identification",
              },
              {
                time: "Day 2-4",
                title: "Screening & Verification",
                description: "Candidate assessment and credential verification",
              },
              {
                time: "Day 4-7",
                title: "Interview & Deployment",
                description: "Interview coordination and successful placement",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {phase.time}
                </div>
                <h3 className="text-lg font-semibold text-healthcare-navy mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              For urgent requirements, we can expedite the process to deliver 
              within 24-48 hours.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Hiring Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
