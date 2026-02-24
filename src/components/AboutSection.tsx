import { motion } from "framer-motion";
import { Code2, Sparkles, GraduationCap, Heart } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  { icon: Code2, label: "Web Developer", color: "text-primary" },
  { icon: Sparkles, label: "UI/UX Enthusiast", color: "text-accent" },
  { icon: GraduationCap, label: "IT Student", color: "text-primary" },
  { icon: Heart, label: "Passionate Learner", color: "text-accent" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 section-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get to know me
          </motion.p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div 
                className="w-60 h-72 sm:w-68 sm:h-84 md:w-72 md:h-96 rounded-3xl overflow-hidden relative group cozy-shadow"
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={profilePhoto}
                  alt="Justine Ragaza"
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-primary/5" />
              </motion.div>
              
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-primary/15" />
              <motion.div
                className="absolute -bottom-6 -right-6 px-5 py-3 rounded-2xl bg-card border border-border/40 cozy-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs font-medium text-primary">✦ ICCT Antipolo</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-7"
          >
            <p className="text-muted-foreground leading-[1.8] text-base sm:text-lg">
              I'm a 3rd-year Information Technology student at ICCT Colleges Antipolo Campus with a strong interest in full-stack web development and interactive digital products. I enjoy exploring new technologies and challenging myself through hands-on projects that help me grow both technically and creatively.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base sm:text-lg">
              I focus on building functional school systems and web applications that are clean, structured, and user-friendly. My goal is to continuously improve as a web developer, strengthening my foundations in frontend, backend, and UI design while working toward higher technical responsibilities in the future.
            </p>

            <motion.div
              className="grid grid-cols-2 gap-3 pt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="px-4 py-3.5 rounded-2xl bg-secondary/50 border border-border/30 flex items-center gap-3 hover:border-primary/20 transition-all duration-300 group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <item.icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm text-foreground font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
