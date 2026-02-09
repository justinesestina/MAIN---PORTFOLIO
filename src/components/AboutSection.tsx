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
              <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden neon-border relative group">
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
              <motion.div
                className="absolute -bottom-3 -right-3 w-64 h-80 sm:w-72 sm:h-96 rounded-2xl border border-primary/20 -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary/30 blur-sm"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
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
              I'm a 3rd-year Information Technology student at ICCT Colleges Antipolo Campus with a deep passion for full-stack development and interactive digital products. I thrive on exploring emerging technologies and pushing my boundaries with projects that are both challenging and rewarding.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I specialize in building functional school systems and web applications that are visually appealing and user-friendly. My goal is to become a skilled software engineer, continuously sharpening my expertise in frontend, backend, and UI/UX design.
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
