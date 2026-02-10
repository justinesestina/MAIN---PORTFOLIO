import { motion } from "framer-motion";
import { ExternalLink, Code2, Database, Shield, Users } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    subtitle: "Full-Stack Application",
    description:
      "A comprehensive full-stack student management system featuring role-based authentication, complete CRUD operations, and a polished responsive interface. Demonstrates practical mastery of frontend, backend, and database integration.",
    link: "https://zap-gateway.vercel.app/",
    tech: ["React.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
    icons: [Code2, Database, Shield, Users],
  },
  {
    title: "Department Voting System",
    subtitle: "All School Departments",
    description:
      "An interactive and secure voting platform built for all school departments, featuring login authentication, real-time vote tallying, and a clean user interface designed for maximum usability and transparency.",
    link: "https://z4-election-votenet.vercel.app/",
    tech: ["React.js", "Supabase", "Authentication", "Real-time"],
    icons: [Code2, Shield, Users, Database],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text inline-block">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 neon-border group hover:border-primary/40 transition-all duration-300 block cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary/80 text-sm mt-1">{project.subtitle}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
