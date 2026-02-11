import { motion } from "framer-motion";
import { ExternalLink, Code2, Database, Shield, Users, Github } from "lucide-react";
import zapGatewayImg from "@/assets/project-zap-gateway.png";
import voteNetImg from "@/assets/project-votenet.png";
import { useState } from "react";

const projects = [
  {
    title: "Zap Gateway Academy",
    subtitle: "Full-Stack Student Management System",
    description:
      "A comprehensive full-stack student management system featuring role-based authentication, complete CRUD operations, and a polished responsive dashboard. Built for real academic workflows.",
    link: "https://zap-gateway.vercel.app/",
    github: "https://github.com/justinesestina",
    image: zapGatewayImg,
    tech: ["React.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
    icons: [Code2, Database, Shield, Users],
  },
  {
    title: "Campus Vote (VoteNet)",
    subtitle: "Department Voting System",
    description:
      "A secure, real-time voting platform for all school departments with login authentication, live vote tallying, and a clean interface designed for transparency and usability.",
    link: "https://z4-election-votenet.vercel.app/",
    github: "https://github.com/justinesestina",
    image: voteNetImg,
    tech: ["React.js", "Supabase", "Authentication", "Real-time"],
    icons: [Code2, Shield, Users, Database],
  },
];

const ProjectCard = ({ project, idx }: { project: typeof projects[0]; idx: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Glow border effect */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-accent/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative glass-card rounded-2xl overflow-hidden border-0">
        {/* Browser Frame */}
        <div className="relative">
          {/* Browser Top Bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[hsl(270_20%_8%)] border-b border-border/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-3">
              <div className="bg-[hsl(270_20%_12%)] rounded-md px-3 py-1 text-[10px] text-muted-foreground font-mono truncate max-w-[280px] mx-auto text-center">
                {project.link.replace("https://", "")}
              </div>
            </div>
          </div>

          {/* Screenshot Container */}
          <div className="relative overflow-hidden aspect-[16/10]">
            <motion.img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top"
              loading="lazy"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Gradient overlay - always visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270_15%_5%)] via-[hsl(270_15%_5%/0.3)] to-transparent" />

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[hsl(270_15%_5%/0.85)] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="font-display font-bold text-xl text-foreground text-center px-4"
                initial={{ y: 10 }}
                animate={{ y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground text-sm text-center px-8 max-w-md leading-relaxed"
                initial={{ y: 10 }}
                animate={{ y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project.description}
              </motion.p>

              {/* Tech icons */}
              <motion.div
                className="flex gap-3 mt-1"
                initial={{ y: 10 }}
                animate={{ y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex gap-3 mt-2"
                initial={{ y: 10 }}
                animate={{ y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="px-6 py-4 border-t border-border/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-foreground text-base">
                {project.title}
              </h3>
              <p className="text-primary/70 text-xs mt-0.5">{project.subtitle}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text inline-block">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            A selection of real-world applications showcasing full-stack development, secure authentication, and polished UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
