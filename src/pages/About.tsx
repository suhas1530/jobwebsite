import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Target, Eye, Users, Building, Award, Globe } from "lucide-react";

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-healthcare-navy mt-3 mb-6">
              Redefining Healthcare Staffing in India
            </h1>
            <p className="text-xl text-muted-foreground">
              STAFITAL is a dedicated healthcare recruitment brand under KAAMAN TECHNO 
              GLOBAL SERVICES PVT LTD, committed to connecting healthcare organizations 
              with the right talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  STAFITAL was founded with a clear vision: to bridge the gap between 
                  healthcare organizations and qualified professionals. We recognized 
                  that healthcare staffing requires specialized expertise, understanding 
                  of medical credentials, and a deep commitment to patient care.
                </p>
                <p>
                  As a brand under KAAMAN TECHNO GLOBAL SERVICES PVT LTD, we bring 
                  technological innovation to traditional recruitment, creating a 
                  seamless experience for both employers and healthcare professionals.
                </p>
                <p>
                  Today, STAFITAL serves hospitals, clinics, and healthcare facilities 
                  across India, providing comprehensive staffing solutions that range 
                  from medical specialists to administrative staff.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Building, label: "Parent Company", value: "KAAMAN TECHNO" },
                { icon: Users, label: "Professionals", value: "1000+" },
                { icon: Award, label: "Healthcare Focus", value: "100%" },
                { icon: Globe, label: "Pan India", value: "Coverage" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border text-center"
                >
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-healthcare-navy">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border"
            >
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-healthcare-navy mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver the right healthcare talent at the right time. We are 
                committed to understanding the unique needs of each healthcare facility 
                and matching them with professionals who share their commitment to 
                excellence in patient care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border"
            >
              <div className="w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-healthcare-navy mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted healthcare staffing partner, expanding 
                our reach to global markets while maintaining our core values of 
                quality, integrity, and commitment to excellence in healthcare 
                recruitment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-healthcare-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do at STAFITAL
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Quality First",
                description: "Every candidate is thoroughly vetted to ensure they meet the highest professional standards.",
              },
              {
                title: "Integrity",
                description: "We maintain transparency and honesty in all our dealings with clients and candidates.",
              },
              {
                title: "Excellence",
                description: "We continuously strive to exceed expectations and deliver outstanding results.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-healthcare-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
