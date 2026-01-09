import { motion } from "framer-motion";
import { 
  Target, 
  ShieldCheck, 
  Zap, 
  Users, 
  HeadphonesIcon, 
  Database 
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "100% Healthcare-Focused",
    description: "We exclusively specialize in healthcare recruitment, ensuring deep industry expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description: "Every candidate undergoes thorough screening and credential verification.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Get qualified candidates within 24-72 hours for urgent staffing needs.",
  },
  {
    icon: Users,
    title: "Flexible Models",
    description: "Choose from permanent, contract, or outsourcing engagement models.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account managers for seamless communication and support.",
  },
  {
    icon: Database,
    title: "Tech-Enabled Database",
    description: "Access to a vast, technology-powered database of healthcare professionals.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mt-3 mb-6">
              Your Trusted Partner in Healthcare Staffing
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              STAFITAL stands apart with our singular focus on healthcare recruitment. 
              We understand the critical nature of medical staffing and deliver 
              professionals who meet the highest standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex-shrink-0 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-healthcare-navy mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-healthcare-blue-light to-healthcare-green-light rounded-3xl p-8 lg:p-12">
              <div className="absolute inset-0 gradient-hero opacity-5 rounded-3xl" />
              
              <div className="relative space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-healthcare-navy mb-2">
                    STAFITAL Promise
                  </h3>
                  <p className="text-muted-foreground">
                    Quality healthcare professionals, every time
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    { label: "Candidate Screening Rate", value: "100%" },
                    { label: "Client Satisfaction", value: "98%" },
                    { label: "Average Response Time", value: "< 24 hrs" },
                    { label: "Replacement Support", value: "Guaranteed" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-card rounded-xl p-4 shadow-soft flex items-center justify-between"
                    >
                      <span className="text-muted-foreground text-sm">
                        {stat.label}
                      </span>
                      <span className="text-primary font-bold text-lg">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-primary/10 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
