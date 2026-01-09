import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  DollarSign,
  HeadphonesIcon,
  ShieldCheck,
  Zap,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const advantages = [
  {
    icon: Target,
    title: "100% Healthcare-Focused",
    description: "Unlike general staffing agencies, we exclusively specialize in healthcare recruitment. This singular focus gives us deep industry expertise, understanding of medical credentials, and insight into healthcare operations.",
  },
  {
    icon: Heart,
    title: "Separate Nurse Platform (NURS24)",
    description: "Our dedicated nurse-only platform NURS24 ensures specialized attention to nursing recruitment, with a vast database of qualified nurses across all specializations.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden charges or surprise fees. We believe in complete transparency with clear, competitive pricing that delivers value for your investment.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Each client gets a dedicated account manager who understands your facility, requirements, and preferences, ensuring consistent and personalized service.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description: "Every candidate undergoes thorough background checks, credential verification, and skills assessment before being presented to clients.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Our tech-enabled database and streamlined processes ensure you receive qualified candidates within 24-72 hours for urgent requirements.",
  },
  {
    icon: Users,
    title: "Replacement Guarantee",
    description: "If a placed candidate doesn't work out within the guarantee period, we provide a free replacement at no additional cost.",
  },
  {
    icon: Award,
    title: "Post-Deployment Support",
    description: "Our relationship doesn't end at placement. We provide ongoing support to ensure smooth integration and address any concerns.",
  },
];

const testimonials = [
  {
    quote: "STAFITAL has been our trusted partner for over 2 years. Their understanding of healthcare staffing needs is unmatched.",
    author: "HR Director",
    company: "Multi-Specialty Hospital, Mumbai",
  },
  {
    quote: "Quick turnaround and quality candidates. They delivered 15 nurses within 48 hours during our emergency staffing crisis.",
    author: "Operations Head",
    company: "Private Hospital Chain, Delhi",
  },
  {
    quote: "The dedicated account manager makes all the difference. They truly understand our facility's culture and requirements.",
    author: "Administrator",
    company: "Clinic Network, Bangalore",
  },
];

const WhyStafital = () => {
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
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-healthcare-navy mt-3 mb-6">
              The STAFITAL Advantage
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover why leading healthcare organizations trust STAFITAL 
              for their staffing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-healthcare-navy mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mb-4">
              Numbers That Speak
            </h2>
            <p className="text-lg text-muted-foreground">
              Our track record of delivering excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "1000+", label: "Healthcare Professionals Placed" },
              { value: "100%", label: "Verified & Screened Candidates" },
              { value: "98%", label: "Client Satisfaction Rate" },
              { value: "< 48hrs", label: "Average Response Time" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border"
              >
                <div className="text-4xl text-primary/20 mb-4">"</div>
                <p className="text-muted-foreground mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-healthcare-navy">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Experience the STAFITAL Difference
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join the growing list of healthcare organizations that trust 
              STAFITAL for their staffing needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyStafital;
