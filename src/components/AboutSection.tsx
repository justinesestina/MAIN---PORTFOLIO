import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-border/50 relative group">
                <motion.img
                  src={profilePhoto}
                  alt="Justine Ragaza"
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              {/* Minimal corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-primary/40 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-primary/40 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I'm a 3rd-year Information Technology student at ICCT Colleges Antipolo Campus with a strong interest in full-stack web development and interactive digital products. I enjoy exploring new technologies and challenging myself through hands-on projects that help me grow both technically and creatively.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I focus on building functional school systems and web applications that are clean, structured, and user-friendly. My goal is to continuously improve as a web developer, strengthening my foundations in frontend, backend, and UI design while working toward higher technical responsibilities in the future.
            </p>

            <motion.div
              className="flex flex-wrap gap-3 pt-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="px-4 py-2.5 rounded-lg bg-secondary/60 border border-border/40 flex items-center gap-2.5">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">Web Developer</span>
              </div>
              <div className="px-4 py-2.5 rounded-lg bg-secondary/60 border border-border/40 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground font-medium">UI/UX Enthusiast</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
