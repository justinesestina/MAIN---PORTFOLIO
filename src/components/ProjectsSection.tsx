import { motion } from "framer-motion";
import { ExternalLink, Code2, Database, Github } from "lucide-react";
import zapGatewayImg from "@/assets/project-zap-gateway.png";
import voteNetImg from "@/assets/project-votenet.png";
import cyberverseImg from "@/assets/project-cyberverse.png";
import icctAttendanceImg from "@/assets/project-icct-attendance.png";
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
    fullStack: true,
    showAiBadge: true,
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
    demoCredentials: { studentId: "123456790", email: "joserizal@gmail.com" },
    fullStack: true,
    showAiBadge: true,
  },
  {
    title: "CyberVerse Explorer",
    subtitle: "Interactive Cybersecurity Learning Platform",
    description:
      "CyberVerse Explorer helps beginners understand cybersecurity through interactive hacker types, career pathways, and safe coding examples—all in a responsive, animated web experience.",
    link: "https://cyberverse-zap.vercel.app/",
    github: "https://github.com/justinesestina",
    image: cyberverseImg,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    showAiBadge: false,
    frontendOnly: true,
  },
  {
    title: "ICCT Attendance Portal",
    subtitle: "Frontend Attendance Tracking System",
    description:
      "A frontend attendance management system, featuring a responsive dashboard, smart attendance tracking, and Excel export functionality. Designed with a corporate-academic UI approach and optimized for lightweight deployment.",
    link: "https://icct-track.vercel.app/",
    github: "https://github.com/justinesestina",
    image: icctAttendanceImg,
    tech: ["HTML5", "Tailwind CSS", "Vanilla JS"],
    showAiBadge: false,
    frontendOnly: true,
  },
];

const ProjectCard = ({ project, idx }: { project: typeof projects[0]; idx: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: idx * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group rounded-xl overflow-hidden bg-card/40 border border-border/30 hover:border-border/60 transition-all duration-400"
    >
      {/* Browser Frame */}
      <div className="relative">
        {/* Browser Top Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/40 border-b border-border/20">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-secondary/60 rounded-md px-3 py-1 text-[10px] text-muted-foreground font-mono truncate max-w-[280px] mx-auto text-center">
              {project.link.replace("https://", "")}
            </div>
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <motion.img
            src={project.image}
            alt={`${project.title} preview`}
            className={`w-full h-full object-center ${project.title === "Zap Gateway Academy" ? "object-contain bg-secondary/30" : "object-cover"}`}
            loading="lazy"
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-start gap-2.5 py-5 px-3 overflow-y-auto bg-card/92 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="font-display font-bold text-lg text-foreground text-center px-4"
              initial={{ y: 8 }}
              animate={{ y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-muted-foreground text-xs text-center px-6 max-w-md leading-relaxed"
              initial={{ y: 8 }}
              animate={{ y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.description}
            </motion.p>

            {/* Tech tags */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mt-1"
              initial={{ y: 8 }}
              animate={{ y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border/30"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Credentials */}
            {project.demoCredentials && (
              <motion.div
                className="w-full max-w-xs mx-auto flex flex-col gap-1.5"
                initial={{ y: 8 }}
                animate={{ y: isHovered ? 0 : 8 }}
                transition={{ duration: 0.3, delay: 0.18 }}
              >
                <div className="px-3 py-2 rounded-lg bg-secondary/50 border border-border/30 text-center">
                  <p className="text-[9px] uppercase tracking-wider text-primary/70 font-semibold mb-0.5">Login Page Credentials</p>
                  <p className="text-[10px] text-muted-foreground">
                    Username: <span className="text-foreground font-mono">VoteNet25</span>
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Password: <span className="text-foreground font-mono">votenet2k25</span>
                  </p>
                </div>
                <div className="px-3 py-2 rounded-lg bg-secondary/50 border border-border/30 text-center">
                  <p className="text-[9px] uppercase tracking-wider text-primary/70 font-semibold mb-0.5">Demo Account (Registered)</p>
                  <p className="text-[10px] text-muted-foreground">
                    Student ID: <span className="text-foreground font-mono">{project.demoCredentials.studentId}</span>
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Email: <span className="text-foreground font-mono">{project.demoCredentials.email}</span>
                  </p>
                </div>
              </motion.div>
            )}

            {/* Buttons */}
            <motion.div
              className="flex gap-3 mt-2"
              initial={{ y: 8 }}
              animate={{ y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.22 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 text-foreground text-xs font-medium hover:bg-secondary/50 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="px-5 py-4 border-t border-border/20">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display font-semibold text-foreground text-sm">
                {project.title}
              </h3>
              {project.showAiBadge !== false && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-accent/8 text-accent border border-accent/15 font-medium">
                  AI-Assisted
                </span>
              )}
              {project.frontendOnly && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-neon-cyan/8 text-neon-cyan border border-neon-cyan/15 font-medium">
                  <Code2 className="w-3 h-3" />
                  Frontend
                </span>
              )}
              {project.fullStack && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-primary/8 text-primary border border-primary/15 font-medium">
                  <Database className="w-3 h-3" />
                  Full-Stack
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-xs mt-1">{project.subtitle}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">My work</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            A selection of real-world applications showcasing full-stack development, secure authentication, and polished UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
