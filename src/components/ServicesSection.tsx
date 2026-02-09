import { motion } from "framer-motion";
import { Globe, Layout, Lightbulb, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Applications",
    description: "End-to-end web application development with modern frameworks, authentication, and database integration.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Pixel-perfect, responsive, and performant user interfaces built with React and modern CSS.",
  },
  {
    icon: Lightbulb,
    title: "Interactive Digital Products",
    description: "Engaging digital experiences with smooth animations, real-time features, and intuitive workflows.",
  },
  {
    icon: Palette,
    title: "UI/UX & Web App Design",
    description: "Clean, user-centered design systems that balance aesthetics with usability and accessibility.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text inline-block">What I Offer</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 neon-border text-center hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-3 text-sm">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
