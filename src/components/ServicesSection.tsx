import { motion } from "framer-motion";
import { Globe, Layout, Lightbulb, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Practical Web Applications",
    description: "I build structured and functional web applications with authentication and database integration. With every project, I aim to strengthen my understanding of backend fundamentals and real-world system development.",
  },
  {
    icon: Layout,
    title: "Responsive Frontend Development",
    description: "I create clean and mobile-friendly interfaces using React and modern CSS tools. I focus on usability, clarity, and continuously improving my frontend foundations.",
  },
  {
    icon: Lightbulb,
    title: "Academic & System-Based Projects",
    description: "I enjoy building practical systems such as student management platforms and voting systems, applying structured thinking and problem-solving.",
  },
  {
    icon: Palette,
    title: "UI-Focused Web Design",
    description: "I design simple, user-friendly interfaces with smooth interactions. I continue learning better UI/UX practices to improve both aesthetics and functionality.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">What I do</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">What I'm Currently Building & Improving</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-card/40 border border-border/30 hover:border-border/60 transition-all duration-300 text-center group"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/12 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
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
