import { motion } from "framer-motion";
import {
  Globe, Layout, Palette, Server, Database,
  Code2, FileCode, Braces, Layers, KeyRound, FileType,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    subtitle: "Core Technologies",
    icon: Layout,
    color: "primary",
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileType },
      { name: "React", icon: Code2 },
      { name: "Tailwind CSS", icon: FileCode },
      { name: "Responsive Design", icon: Layers },
    ],
  },
  {
    title: "Backend",
    subtitle: "Learning & Building",
    icon: Server,
    color: "accent",
    skills: [
      { name: "Supabase", icon: Server },
      { name: "Authentication", icon: KeyRound },
      { name: "REST API Integration", icon: Globe },
    ],
  },
  {
    title: "Database",
    subtitle: "Data Management",
    icon: Database,
    color: "primary",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "CRUD Operations", icon: FileCode },
      { name: "Supabase Database", icon: Server },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 section-gradient-alt relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">Tech Stack</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.12 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-card/40 border border-border/20 card-hover group cozy-shadow relative overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 group-hover:scale-105 transition-all duration-300">
                  <cat.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-base">{cat.title}</h3>
                  <p className="text-muted-foreground text-xs">{cat.subtitle}</p>
                </div>
              </div>
              <div className="space-y-1">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 py-2.5 px-3 rounded-xl hover:bg-secondary/30 group/item cursor-default"
                  >
                    <skill.icon className="w-3.5 h-3.5 text-primary/50 group-hover/item:text-primary flex-shrink-0 transition-colors" strokeWidth={1.75} />
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
