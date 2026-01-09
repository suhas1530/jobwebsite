import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Globe, MapPin, Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  organization: z.string().trim().min(1, "Organization is required").max(200),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  city: z.string().trim().min(1, "City is required").max(100),
  requirementType: z.string().min(1, "Please select requirement type"),
  staffCount: z.string().min(1, "Please select staff count"),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    city: "",
    requirementType: "",
    staffCount: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
    
    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      city: "",
      requirementType: "",
      staffCount: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-healthcare-navy mt-3 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to find the right healthcare talent? Fill out the form below 
              and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-healthcare-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions? Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:info@stafital.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-healthcare-navy">Email</p>
                    <p className="text-muted-foreground">info@stafital.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-healthcare-navy">Phone</p>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <a
                  href="https://www.stafital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-healthcare-navy">Website</p>
                    <p className="text-muted-foreground">www.stafital.com</p>
                  </div>
                </a>
              </div>

              {/* Quick Facts */}
              <div className="bg-secondary rounded-2xl p-6 mt-8">
                <h4 className="font-semibold text-healthcare-navy mb-4">
                  Why Contact Us?
                </h4>
                <ul className="space-y-3">
                  {[
                    "Free consultation",
                    "No obligation quote",
                    "Response within 24 hours",
                    "Expert staffing advice",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
                <h3 className="text-2xl font-bold text-healthcare-navy mb-6">
                  Request Staff
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-healthcare-navy mb-2">
                        Your Name *
                      </label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-healthcare-navy mb-2">
                        Hospital / Organization *
                      </label>
                      <Input
                        placeholder="Enter organization name"
                        value={formData.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        className={errors.organization ? "border-destructive" : ""}
                      />
                      {errors.organization && (
                        <p className="text-sm text-destructive mt-1">{errors.organization}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-healthcare-navy mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-healthcare-navy mb-2">
                        Phone Number *
                      </label>
                      <Input
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-healthcare-navy mb-2">
                        Requirement Type *
                      </label>
                      <Select
                        value={formData.requirementType}
                        onValueChange={(value) => handleChange("requirementType", value)}
                      >
                        <SelectTrigger className={errors.requirementType ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medical">Medical Staff</SelectItem>
                          <SelectItem value="paramedical">Paramedical Staff</SelectItem>
                          <SelectItem value="nursing">Nursing Staff</SelectItem>
                          <SelectItem value="admin">Administrative Staff</SelectItem>
                          <SelectItem value="pharma">Pharmacy Staff</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.requirementType && (
                        <p className="text-sm text-destructive mt-1">{errors.requirementType}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-healthcare-navy mb-2">
                        Number of Staff *
                      </label>
                      <Select
                        value={formData.staffCount}
                        onValueChange={(value) => handleChange("staffCount", value)}
                      >
                        <SelectTrigger className={errors.staffCount ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1-5 Staff</SelectItem>
                          <SelectItem value="6-10">6-10 Staff</SelectItem>
                          <SelectItem value="11-25">11-25 Staff</SelectItem>
                          <SelectItem value="26-50">26-50 Staff</SelectItem>
                          <SelectItem value="50+">50+ Staff</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.staffCount && (
                        <p className="text-sm text-destructive mt-1">{errors.staffCount}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-healthcare-navy mb-2">
                      City *
                    </label>
                    <Input
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      className={errors.city ? "border-destructive" : ""}
                    />
                    {errors.city && (
                      <p className="text-sm text-destructive mt-1">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-healthcare-navy mb-2">
                      Additional Details (Optional)
                    </label>
                    <Textarea
                      placeholder="Tell us more about your requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
