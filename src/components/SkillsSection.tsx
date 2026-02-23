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
    <section id="skills" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Tech Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-xl bg-card/40 border border-border/30 hover:border-border/60 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors">
                  <cat.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{cat.title}</h3>
                  <p className="text-muted-foreground text-[11px]">{cat.subtitle}</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-1"
                  >
                    <skill.icon className="w-3.5 h-3.5 text-primary/60 flex-shrink-0" strokeWidth={1.75} />
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
