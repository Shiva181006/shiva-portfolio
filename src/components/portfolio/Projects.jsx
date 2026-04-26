import { motion } from "framer-motion";
import { ArrowUpRight, Github, FolderGit2, Sparkle } from "lucide-react";

const projects = [
  {
    title: "Smart Dine",
    tag: "Restaurant Web App",
    status: "In Progress",
    problem:
      "Restaurants need a simple way to let guests browse menus, pre-order food, and reserve tables in real-time.",
    solution:
      "A full-featured React app with reusable components and centralized state — cutting code duplication by ~40%.",
    impact: "Speeds up ordering & reduces wait times for diners.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    accent: "from-fuchsia-500 to-purple-600",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Spam Detection System",
    tag: "Core Java • OOP",
    status: "Completed",
    problem:
      "Spam clogs inboxes — and most learners think detection requires heavy ML libraries.",
    solution:
      "A modular Core Java console app using keyword filtering & string processing — zero external libraries.",
    impact: "Demonstrates clean OOP design and algorithmic thinking.",
    tech: ["Java", "OOP", "String Processing"],
    accent: "from-cyan-500 to-blue-600",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Portfolio v2",
    tag: "This Site ✨",
    status: "Live",
    problem:
      "A static resume tells employers what you did. A portfolio shows how you think.",
    solution:
      "A motion-rich, dark-mode-first React + Tailwind portfolio with animated sections and a real story.",
    impact: "Built to stand out — and to be a sandbox for new ideas.",
    tech: ["React", "Tailwind", "Framer Motion", "TanStack"],
    accent: "from-amber-500 to-pink-500",
    github: "https://github.com",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <FolderGit2 className="w-3.5 h-3.5" /> Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Things I've <span className="text-gradient">built & shipped</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each project is a problem I cared about — not a tutorial clone.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-card/60 backdrop-blur overflow-hidden hover:border-primary/40 transition-all"
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent} opacity-60`}
              />
              <div className="grid lg:grid-cols-12 gap-8 p-8">
                {/* Left: Visual */}
                <div className="lg:col-span-4 relative">
                  <div
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${p.accent} p-1 shadow-glow`}
                  >
                    <div className="w-full h-full rounded-2xl bg-card grid place-items-center relative overflow-hidden">
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="relative text-7xl font-bold text-gradient">
                        0{i + 1}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">
                          {p.tag}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full border border-primary/40 bg-primary/10 text-primary">
                          {p.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {p.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-10 h-10 grid place-items-center rounded-full border border-border bg-card hover:bg-accent hover:border-primary/50 transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={p.demo}
                        aria-label="Live demo"
                        className="w-10 h-10 grid place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-primary mb-1.5">
                        Problem
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-primary mb-1.5">
                        Solution
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{p.solution}</p>
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-primary mb-1.5">
                        Impact
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{p.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                      >
                        <Sparkle className="w-3 h-3 text-primary" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
