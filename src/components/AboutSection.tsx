import { motion } from "framer-motion";
import { Code2, Sparkles, GraduationCap, Heart } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  { icon: Code2, label: "Web Developer", desc: "Building real projects" },
  { icon: Sparkles, label: "UI/UX Enthusiast", desc: "Design-driven approach" },
  { icon: GraduationCap, label: "IT Student", desc: "ICCT Antipolo Campus" },
  { icon: Heart, label: "Passionate Learner", desc: "Always improving" },
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

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Photo - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden relative cozy-shadow-lg"
                whileHover={{ scale: 1.02 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-primary/5" />
              </motion.div>

              {/* Decorative border */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl border border-primary/10" />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-accent/8" />

              <motion.div
                className="absolute -bottom-5 -right-5 px-5 py-3 rounded-2xl bg-card border border-border/30 cozy-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs font-mono text-primary">✦ ICCT Antipolo</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-3 space-y-7"
          >
            <p className="text-muted-foreground leading-[1.85] text-base sm:text-lg">
              I'm a 3rd-year Information Technology student at ICCT Colleges Antipolo Campus with a strong interest in full-stack web development and interactive digital products. I enjoy exploring new technologies and challenging myself through hands-on projects that help me grow both technically and creatively.
            </p>
            <p className="text-muted-foreground leading-[1.85] text-base sm:text-lg">
              I focus on building functional school systems and web applications that are clean, structured, and user-friendly. My goal is to continuously improve as a web developer, strengthening my foundations in frontend, backend, and UI design while working toward higher technical responsibilities in the future.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="px-4 py-4 rounded-2xl bg-secondary/30 border border-border/20 card-hover group"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <item.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground font-semibold block">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
