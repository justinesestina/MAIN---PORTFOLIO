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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden neon-border">
                <img
                  src={profilePhoto}
                  alt="Justine Ragaza"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border border-primary/20 -z-10" />
            </div>
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

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="glass-card px-4 py-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">Full-Stack Developer</span>
              </div>
              <div className="glass-card px-4 py-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground font-medium">UI/UX Enthusiast</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
