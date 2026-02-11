import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text inline-block">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden neon-border relative group">
                <motion.img
                  src={profilePhoto}
                  alt="Justine Ragaza"
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Corner animated accents */}
              <motion.div
                className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-primary rounded-tl-xl"
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-accent rounded-tr-xl"
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-accent rounded-bl-xl"
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-primary rounded-br-xl"
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
              {/* Glow orbs at corners */}
              <motion.div
                className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary/40 blur-md"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-accent/40 blur-md"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I'm a 3rd-year Information Technology student at ICCT Colleges Antipolo Campus with a strong interest in full-stack web development and interactive digital products. I enjoy exploring new technologies and challenging myself through hands-on projects that help me grow both technically and creatively.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I focus on building functional school systems and web applications that are clean, structured, and user-friendly. My goal is to continuously improve as a web developer, strengthening my foundations in frontend, backend, and UI design while working toward higher technical responsibilities in the future.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="glass-card px-4 py-3 flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "hsl(270 80% 65% / 0.4)" }}
              >
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">Full-Stack Developer</span>
              </motion.div>
              <motion.div
                className="glass-card px-4 py-3 flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "hsl(280 100% 70% / 0.4)" }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground font-medium">UI/UX Enthusiast</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
