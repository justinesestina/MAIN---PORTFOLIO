import { motion } from "framer-motion";
import {
  Globe, Layout, Palette, Server, Database,
  Code2, FileCode, Braces, Layers, KeyRound,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    subtitle: "Foundations",
    icon: Layout,
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Code2 },
      { name: "Tailwind CSS", icon: FileCode },
      { name: "Responsive Layouts", icon: Layers },
    ],
  },
  {
    title: "Backend",
    subtitle: "Learning & Building",
    icon: Server,
    skills: [
      { name: "Supabase", icon: Server },
      { name: "Authentication", icon: KeyRound },
      { name: "REST API Integration", icon: Globe },
    ],
  },
  {
    title: "Database",
    subtitle: "Basic Usage",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "CRUD Operations", icon: FileCode },
      { name: "Supabase Database", icon: Server },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />

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
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.12 }}
              whileHover={{ y: -5 }}
              className="p-7 rounded-3xl bg-card/60 border border-border/30 card-hover group cozy-shadow"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                  <cat.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-base">{cat.title}</h3>
                  <p className="text-muted-foreground text-xs">{cat.subtitle}</p>
                </div>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.06 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 py-1.5 px-3 rounded-xl hover:bg-secondary/40 group/item"
                  >
                    <skill.icon className="w-3.5 h-3.5 text-primary/60 group-hover/item:text-primary flex-shrink-0 transition-colors" strokeWidth={1.75} />
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
