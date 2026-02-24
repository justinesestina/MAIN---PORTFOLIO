import { motion } from "framer-motion";
import { Globe, Layout, Lightbulb, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Practical Web Applications",
    description: "I build structured and functional web applications with authentication and database integration. With every project, I aim to strengthen my understanding of backend fundamentals and real-world system development.",
    gradient: "from-primary/10 to-transparent",
  },
  {
    icon: Layout,
    title: "Responsive Frontend Development",
    description: "I create clean and mobile-friendly interfaces using React and modern CSS tools. I focus on usability, clarity, and continuously improving my frontend foundations.",
    gradient: "from-accent/10 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Academic & System-Based Projects",
    description: "I enjoy building practical systems such as student management platforms and voting systems, applying structured thinking and problem-solving.",
    gradient: "from-primary/8 to-transparent",
  },
  {
    icon: Palette,
    title: "UI-Focused Web Design",
    description: "I design simple, user-friendly interfaces with smooth interactions. I continue learning better UI/UX practices to improve both aesthetics and functionality.",
    gradient: "from-accent/8 to-transparent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">What I do</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            What I'm Building
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${service.gradient} border border-border/30 hover:border-primary/20 transition-all duration-500 group cozy-shadow`}
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-display font-semibold text-foreground mb-3 text-lg">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
