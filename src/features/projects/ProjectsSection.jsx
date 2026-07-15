import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, FolderGit2, Sparkle } from "lucide-react";

function HireLensDashboard() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="rounded-2xl border border-border/60 bg-background/50 p-5 font-sans space-y-4 shadow-elegant text-foreground">
      <div className="flex items-center justify-between border-b border-border/20 pb-3">
        <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">AI Evaluation Portal</span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">Active</span>
      </div>

      {/* ATS & Gap Analysis */}
      <div className="grid grid-cols-2 gap-3">
        {/* ATS Progress Ring */}
        <div className="flex flex-col items-center justify-center p-3 bg-card/65 rounded-xl border border-border/30">
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* SVG circle */}
            <svg className="absolute w-full h-full -rotate-90">
              <circle cx="32" cy="32" r="26" className="stroke-muted/20 fill-none" strokeWidth="5" />
              <motion.circle
                cx="32"
                cy="32"
                r="26"
                className="stroke-primary fill-none"
                strokeWidth="5"
                strokeDasharray={2 * Math.PI * 26}
                initial={{ strokeDashoffset: 2 * Math.PI * 26 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 26 * (1 - 0.87) }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <span className="text-sm font-bold font-mono text-foreground">87%</span>
          </div>
          <span className="text-[10px] text-muted-foreground mt-2 font-mono">ATS Match</span>
        </div>

        {/* Skill Gap Check */}
        <div className="p-3 bg-card/65 rounded-xl border border-border/30 flex flex-col justify-between">
          <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Skill Gaps</span>
          <div className="space-y-1 mt-1">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">System Design</span>
              <span className="px-1.5 py-0.1 rounded bg-amber-500/10 text-amber-400 font-mono text-[8px] border border-amber-500/20">Mid</span>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">Node.js API</span>
              <span className="px-1.5 py-0.1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[8px] border border-emerald-500/20">Pass</span>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">Docker</span>
              <span className="px-1.5 py-0.1 rounded bg-rose-500/10 text-rose-400 font-mono text-[8px] border border-rose-500/20">High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mock Interview Question Widget */}
      <div className="bg-card/45 p-3.5 rounded-xl border border-border/30 space-y-2.5">
        <div className="flex items-center gap-1.5">
          <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 text-[8px] font-mono uppercase tracking-wider">AI Question</span>
          <span className="text-[9px] text-muted-foreground font-mono">Systems • Fallbacks</span>
        </div>
        <p className="text-xs text-foreground/95 font-medium leading-relaxed">
          "How do you handle API fallback logic when the primary Gemini model hits rate limits?"
        </p>

        {/* Answer Button */}
        <div className="pt-0.5">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="w-full text-left text-[10px] text-primary hover:text-primary-glow font-mono font-medium flex items-center justify-between transition-colors bg-secondary/50 hover:bg-secondary/80 px-2.5 py-1.5 rounded-lg border border-border/20"
          >
            <span>{showAnswer ? "Hide AI Solution" : "Reveal AI Solution"}</span>
            <span className="text-[8px]">{showAnswer ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-2 text-[9px] text-muted-foreground leading-relaxed bg-background/50 p-2.5 rounded-lg border border-border/10 font-mono max-h-[85px] overflow-y-auto">
                  <strong>Gemini Fallback:</strong> If primary model triggers a 429 status code, automatically shift queries to backup models <code className="bg-secondary px-1 py-0.2 rounded font-mono text-foreground">['gemini-2.5-pro', 'gemini-2.0-flash']</code>, preventing user downtime.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "HireLens AI",
    tag: "Flagship AI Platform",
    status: "Live",
    isFeatured: true,
    problem:
      "Job candidates struggle to tailor their resumes and prep for specific role requirements, resulting in low ATS matching scores and high interview anxiety.",
    solution:
      "A MERN stack platform featuring cookie-based JWT protection, PDF resume parsing, custom study roadmaps, and mock interviews using fallback Google Gemini API models.",
    impact:
      "Supports dynamic, job-tailored resume generation down to PDF via headless Puppeteer, and automates JWT cookie management for dev/prod environments.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Puppeteer", "Sass", "JWT"],
    accent: "from-amber-500 via-yellow-600 to-amber-500",
    github: "https://github.com/Shiva181006/HireLens-AI",
    demo: "https://github.com/Shiva181006/HireLens-AI",
  },
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
    accent: "from-amber-600 to-yellow-500",
    github: "https://github.com/Shiva181006",
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
    tech: ["Java", "OOP", "String Processing", "Algorithms"],
    accent: "from-yellow-500 to-amber-600",
    github: "https://github.com/Shiva181006",
    demo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <FolderGit2 className="w-3.5 h-3.5" /> Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Things I've <span className="text-gradient font-sans font-bold">built & shipped</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-sm">
            Each project is a problem I cared about — not a copy-paste template.
          </p>
        </motion.div>

        {/* Projects Cards List */}
        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-border bg-card/50 backdrop-blur overflow-hidden hover:border-primary/40 transition-all font-sans"
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent} opacity-60`}
              />
              <div className="grid lg:grid-cols-12 gap-8 p-8 items-center">
                
                {/* Left side: Visual representation / Custom dashboard */}
                <div className="lg:col-span-5 relative">
                  {p.isFeatured ? (
                    <HireLensDashboard />
                  ) : (
                    <div
                      className={`aspect-square rounded-2xl bg-gradient-to-br ${p.accent} p-1 shadow-glow`}
                    >
                      <div className="w-full h-full rounded-2xl bg-card grid place-items-center relative overflow-hidden">
                        <div className="absolute inset-0 layout-grid opacity-20" />
                        <div className="relative text-7xl font-bold text-gradient font-mono">
                          0{i + 1}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className="text-xs font-mono text-muted-foreground">
                            {p.tag}
                          </span>
                          <span className="text-xs px-2.5 py-0.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-mono font-bold">
                            {p.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side: Project Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono text-muted-foreground">
                        {p.tag}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card hover:bg-accent hover:border-primary/50 transition-all text-muted-foreground hover:text-foreground"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={p.demo}
                        aria-label="Live demo"
                        className="w-9 h-9 grid place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 text-xs font-sans">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
                        Problem
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
                        Solution
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{p.solution}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
                        Impact
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{p.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                      >
                        <Sparkle className="w-2.5 h-2.5 text-primary" /> {t}
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
