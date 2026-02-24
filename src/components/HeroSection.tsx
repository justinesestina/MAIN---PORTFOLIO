import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm ambient background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grain-overlay" />
      
      {/* Floating warm orbs */}
      <motion.div 
        className="absolute top-1/4 left-[15%] w-96 h-96 rounded-full bg-primary/8 blur-[150px]"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-[15%] w-72 h-72 rounded-full bg-accent/8 blur-[120px]"
        animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[180px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            className="text-center lg:text-left space-y-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse-neon" />
              <span className="text-xs text-primary font-medium tracking-wider uppercase">Available for freelance</span>
            </motion.div>

            <div>
              <motion.p
                className="text-muted-foreground text-sm sm:text-base font-medium mb-3 tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Hello, I'm
              </motion.p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight">
                <motion.span
                  className="text-foreground block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  Justine
                </motion.span>
                <motion.span
                  className="gradient-text text-glow block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                >
                  Ragaza
                </motion.span>
              </h1>
            </div>

            <motion.p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              3rd-Year IT Student at ICCT Colleges – Antipolo Campus • Aspiring Web Developer
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5 }}
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 40px -10px hsl(28 70% 55% / 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-body font-semibold text-sm transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                View My Work
              </motion.button>
              <motion.button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-border/50 text-foreground font-body font-semibold text-sm hover:bg-secondary/40 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl scale-110 animate-glow-pulse" />
              
              {/* Photo */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 cozy-shadow"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={profilePhoto}
                  alt="Justine Ragaza"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/20 border border-primary/30"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-4 w-5 h-5 rounded-full bg-accent/20 border border-accent/30"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4 text-primary/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
