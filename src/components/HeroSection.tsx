import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Mail, Facebook } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grain-overlay" />

      {/* Geometric decorations */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-72 h-72 border border-primary/[0.04] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[5%] w-96 h-96 border border-accent/[0.03] rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/3 left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[180px]"
        animate={{ y: [-30, 30, -30], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[12%] w-[350px] h-[350px] rounded-full bg-accent/[0.03] blur-[150px]"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/15 bg-primary/[0.04] backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-xs text-primary/80 font-medium tracking-wider uppercase">Available for freelance</span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              className="text-muted-foreground text-base sm:text-lg font-medium tracking-wide"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black leading-[0.95] tracking-tighter">
              <motion.span
                className="text-foreground block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
              >
                Justine
              </motion.span>
              <motion.span
                className="gradient-text text-glow block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                Ragaza
              </motion.span>
            </h1>
          </div>

          <motion.p
            className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            3rd-Year IT Student at ICCT Colleges – Antipolo Campus • Aspiring Web Developer
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-body font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              <Sparkles className="w-4 h-4" />
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-border/40 text-foreground font-body font-semibold text-sm hover:bg-secondary/30 hover:border-primary/20 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social row */}
          <motion.div
            className="flex items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.5 }}
          >
            {[
              { icon: Github, href: "https://github.com/justinesestina", label: "GitHub" },
              { icon: Facebook, href: "https://www.facebook.com/justine.sestina", label: "Facebook" },
              { icon: Mail, href: "mailto:kisethsestina@gmail.com", label: "Email" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-secondary/30 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/25 transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.2em] font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4 text-primary/40" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
