import { motion } from "framer-motion";
import { ExternalLink, Code2, Database, Github } from "lucide-react";
import zapGatewayImg from "@/assets/project-zap-gateway.png";
import voteNetImg from "@/assets/project-votenet.png";
import cyberverseImg from "@/assets/project-cyberverse.png";
import icctAttendanceImg from "@/assets/project-icct-attendance.png";
import nocturneImg from "@/assets/project-nocturne.png";
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
  {
    title: "Nocturne Café",
    subtitle: "Cinematic Café Experience Website",
    description:
      "A frontend immersive café website focused on visual storytelling, interaction design, and responsive editorial layouts, built as a portfolio project to demonstrate advanced UI/UX and motion-driven frontend development.",
    link: "https://nocturnecafe-ph.vercel.app/",
    github: "https://github.com/justinesestina",
    image: nocturneImg,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    showAiBadge: false,
    frontendOnly: true,
  },
];

const ProjectCard = ({ project, idx }: { project: typeof projects[0]; idx: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group rounded-2xl overflow-hidden bg-card/50 border border-border/30 card-hover cozy-shadow"
    >
      {/* Browser Frame */}
      <div className="relative">
        <div className="flex items-center gap-2 px-5 py-3 bg-secondary/30 border-b border-border/20">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-secondary/50 rounded-lg px-3 py-1.5 text-[10px] text-muted-foreground font-mono truncate max-w-[280px] mx-auto text-center">
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
            animate={{ scale: isHovered ? 1.04 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-50" />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-start gap-3 py-6 px-4 overflow-y-auto bg-card/95 backdrop-blur-md"
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
              className="text-muted-foreground text-xs text-center px-6 max-w-md leading-relaxed"
              initial={{ y: 10 }}
              animate={{ y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-2 mt-1"
              initial={{ y: 10 }}
              animate={{ y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-3 py-1.5 rounded-full bg-primary/8 text-primary/80 border border-primary/15 font-medium"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {project.demoCredentials && (
              <motion.div
                className="w-full max-w-xs mx-auto flex flex-col gap-2"
                initial={{ y: 10 }}
                animate={{ y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.18 }}
              >
                <div className="px-4 py-3 rounded-2xl bg-secondary/40 border border-border/30 text-center">
                  <p className="text-[9px] uppercase tracking-wider text-primary/70 font-semibold mb-1">Login Page Credentials</p>
                  <p className="text-[11px] text-muted-foreground">
                    Username: <span className="text-foreground font-mono">VoteNet25</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Password: <span className="text-foreground font-mono">votenet2k25</span>
                  </p>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-secondary/40 border border-border/30 text-center">
                  <p className="text-[9px] uppercase tracking-wider text-primary/70 font-semibold mb-1">Demo Account (Registered)</p>
                  <p className="text-[11px] text-muted-foreground">
                    Student ID: <span className="text-foreground font-mono">{project.demoCredentials.studentId}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Email: <span className="text-foreground font-mono">{project.demoCredentials.email}</span>
                  </p>
                </div>
              </motion.div>
            )}

            <motion.div
              className="flex gap-3 mt-2"
              initial={{ y: 10 }}
              animate={{ y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.22 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/50 text-foreground text-xs font-semibold hover:bg-secondary/50 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="px-6 py-5 border-t border-border/15">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="font-display font-semibold text-foreground text-sm">
                {project.title}
              </h3>
              {project.showAiBadge !== false && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/15 font-medium">
                  AI-Assisted
                </span>
              )}
              {project.frontendOnly && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15 font-medium">
                  <Code2 className="w-3 h-3" />
                  Frontend
                </span>
              )}
              {project.fullStack && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/15 font-medium">
                  <Database className="w-3 h-3" />
                  Full-Stack
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-xs mt-1.5">{project.subtitle}</p>
          </div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 section-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">My work</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground mt-5 max-w-lg mx-auto text-sm leading-relaxed">
            A selection of real-world applications showcasing full-stack development, secure authentication, and polished UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
