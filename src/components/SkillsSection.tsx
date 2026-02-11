import { motion } from "framer-motion";
import {
  Globe, Layout, Palette, Server, Database, Shield,
  Code2, FileCode, Braces, Layers, Lock, KeyRound,
  UserCheck, Timer, ClipboardCheck, FileSearch
} from "lucide-react";

const categories = [
  {
    title: "Frontend (Foundations)",
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
    title: "Backend (Learning & Building)",
    icon: Server,
    skills: [
      { name: "Supabase", icon: Server },
      { name: "Authentication (Basic Implementation)", icon: KeyRound },
      { name: "REST API Integration", icon: Globe },
    ],
  },
  {
    title: "Database (Basic Usage)",
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
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text inline-block">Tools I Use</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-6 neon-border hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <cat.icon className="w-5 h-5 text-primary neon-glow-icon" strokeWidth={1.75} />
                </motion.div>
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                  >
                    <skill.icon className="w-4 h-4 text-primary/70 flex-shrink-0 neon-glow-icon" strokeWidth={1.75} />
                    <span>{skill.name}</span>
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
