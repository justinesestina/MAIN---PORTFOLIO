import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Mail, Send, Heart, ArrowUpRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/justine.sestina", label: "Facebook" },
  { icon: Mail, href: "mailto:kisethsestina@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/justinesestina", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/zaps_xz?igsh=emNwN25idGxkamFq", label: "Instagram" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses = "w-full px-5 py-4 rounded-2xl bg-secondary/20 border border-border/20 text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/8 transition-all duration-300";

  return (
    <section id="contact" className="py-32 section-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">Reach out</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 max-w-4xl mx-auto">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="flex gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="w-12 h-12 rounded-xl bg-secondary/30 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/25 hover:bg-primary/6 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:kisethsestina@gmail.com"
              className="block p-5 rounded-2xl bg-primary/[0.04] border border-primary/10 group hover:border-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email me at</p>
                    <span className="text-sm text-foreground font-medium">kisethsestina@gmail.com</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
              />
              {errors.name && <p className="text-destructive text-xs mt-2 ml-2">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
              />
              {errors.email && <p className="text-destructive text-xs mt-2 ml-2">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClasses} resize-none`}
              />
              {errors.message && <p className="text-destructive text-xs mt-2 ml-2">{errors.message}</p>}
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-body font-semibold text-sm flex items-center justify-center gap-2.5 hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/15"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-28 text-center border-t border-border/10 pt-10"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5">
            © 2025 Justine Ragaza. Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
