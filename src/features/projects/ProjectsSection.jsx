import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, FolderGit2, Sparkle, Layers, CheckCircle2, Bot, AlertTriangle, Code } from "lucide-react";

function HireLensInteractiveWidget() {
  const [activeTab, setActiveTab] = useState("ats"); // ats | gaps | qa
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-background/80 p-4 sm:p-5 font-sans space-y-4 shadow-sm w-full text-foreground overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Bot className="w-3.5 h-3.5 text-primary" /> HireLens AI Core Engine
        </span>
        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-mono font-semibold">
          Active Sandbox
        </span>
      </div>

      {/* Tab Switcher */}
      <div className="flex bg-card p-1 rounded-xl border border-border gap-1 font-mono text-[11px]">
        <button
          onClick={() => setActiveTab("ats")}
          className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === "ats" ? "bg-primary text-primary-foreground font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          ATS Analyzer
        </button>
        <button
          onClick={() => setActiveTab("gaps")}
          className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === "gaps" ? "bg-primary text-primary-foreground font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Skill Gap Check
        </button>
        <button
          onClick={() => setActiveTab("qa")}
          className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === "qa" ? "bg-primary text-primary-foreground font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          AI Prep QA
        </button>
      </div>

      {/* Tab Contents */}
      <div className="min-h-[140px] flex flex-col justify-center">
        {activeTab === "ats" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="flex flex-col items-center justify-center p-3 bg-card rounded-xl border border-border text-center">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="absolute w-full h-full -rotate-90">
                  <circle cx="28" cy="28" r="22" className="stroke-muted/30 fill-none" strokeWidth="4" />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    className="stroke-primary fill-none"
                    strokeWidth="4"
                    strokeDasharray={2 * Math.PI * 22}
                    strokeDashoffset={2 * Math.PI * 22 * (1 - 0.88)}
                  />
                </svg>
                <span className="text-sm font-bold font-mono text-foreground">88%</span>
              </div>
              <span className="text-[10px] text-muted-foreground mt-1.5 font-mono">Role Match Score</span>
            </div>

            <div className="p-3 bg-card rounded-xl border border-border flex flex-col justify-between text-xs space-y-1.5">
              <div className="text-[10px] font-mono text-muted-foreground uppercase font-bold">Key Keywords</div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-foreground font-medium">Node.js / Express</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-foreground font-medium">JWT Security</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-foreground font-medium">Puppeteer Export</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "gaps" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2 text-xs"
          >
            <div className="p-2.5 bg-card rounded-xl border border-border flex items-center justify-between">
              <span className="text-foreground font-medium">System Scalability & Caching</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 text-[10px] font-mono font-bold border border-amber-500/20">Recommended</span>
            </div>
            <div className="p-2.5 bg-card rounded-xl border border-border flex items-center justify-between">
              <span className="text-foreground font-medium">REST API Auth Pipeline</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-bold border border-emerald-500/20">Proficient</span>
            </div>
          </motion.div>
        )}

        {activeTab === "qa" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <div className="text-xs font-medium text-foreground bg-card p-2.5 rounded-xl border border-border">
              "How do you resolve Google Gemini API rate limits (429 status code)?"
            </div>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="w-full text-left text-[11px] text-primary font-mono font-semibold px-3 py-1.5 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-between hover:bg-primary/20 transition-colors"
            >
              <span>{showAnswer ? "Hide Solution" : "Reveal Solution"}</span>
              <span>{showAnswer ? "▲" : "▼"}</span>
            </button>
            {showAnswer && (
              <div className="text-[10px] text-muted-foreground font-mono bg-card p-2.5 rounded-xl border border-border leading-relaxed">
                <strong>Model Fallback:</strong> Automatic retry decorator catches 429 status codes and seamlessly redirects prompts to backup LLM models without breaking user experience.
              </div>
            )}
          </motion.div>
        )}
      </div>

    </div>
  );
}

const categories = ["All", "AI & Full-Stack", "Frontend Web Apps", "Core Java & Machine Learning"];

const projects = [
  {
    title: "HireLens AI",
    category: "AI & Full-Stack",
    tag: "AI Interview Preparation Platform",
    status: "Completed",
    isFeatured: true,
    problem:
      "Job seekers struggle to customize their resumes and prepare effectively for role-specific technical interviews.",
    solution:
      "Full-stack AI interview preparation platform built with React.js, Node.js, Express.js, MongoDB, and Gemini AI. Analyzes resumes against job descriptions to generate personalized interview prep reports.",
    impact:
      "Secured with HTTP-only JWT authentication & RESTful APIs, and deployed on Vercel and Render.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT Auth", "REST APIs"],
    github: "https://github.com/Shiva181006/HireLens-AI",
    demo: null,
  },
  {
    title: "Smart Dine",
    category: "Frontend Web Apps",
    tag: "Restaurant Web Application",
    status: "Completed",
    isFeatured: false,
    problem:
      "Diners experience slow navigation workflows when reviewing menu categories and selecting items.",
    solution:
      "Responsive React restaurant web application featuring menu browsing, category filtering, cart interactions, and a mobile-friendly interface.",
    impact:
      "Improves user experience with modular React components and responsive CSS/Bootstrap layouts.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/Shiva181006/smartdine",
    demo: null,
  },
  {
    title: "LoopLearn",
    category: "Frontend Web Apps",
    tag: "Spaced Repetition Platform",
    status: "Completed",
    isFeatured: false,
    problem:
      "Software developers struggle to systematically organize and revise coding questions over time.",
    solution:
      "React-based educational platform designed to help users organize coding problems, track revision progress, and follow a 4-11-21 day spaced repetition methodology.",
    impact:
      "Saves problem links, technical topics, and user notes to browser Local Storage for efficient progress tracking.",
    tech: ["React.js", "JavaScript", "Local Storage"],
    github: "https://github.com/Shiva181006/looplearn",
    demo: null,
  },
  {
    title: "Spam Detection System",
    category: "Core Java & Machine Learning",
    tag: "Java ML Application",
    status: "Completed",
    isFeatured: false,
    problem:
      "Classifying unsolicited spam messages accurately requires probabilistic classification algorithms.",
    solution:
      "Java-based spam detection system that applies the Naive Bayes machine learning algorithm to classify messages as spam or legitimate.",
    impact:
      "Demonstrates object-oriented programming principles and probabilistic classification algorithms.",
    tech: ["Core Java", "OOP", "Naive Bayes", "Machine Learning"],
    github: "https://github.com/Shiva181006/SpamShield-Java",
    demo: null,
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> Selected Portfolio Projects
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Crafted with <span className="text-gradient whitespace-nowrap">purpose & precision</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Real applications built to solve genuine technical and user challenges.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-border pb-4 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground font-bold shadow-sm"
                  : "bg-card hover:bg-accent text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="craft-card p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Interactive Widget or Visual Card */}
                  <div className="lg:col-span-5 w-full">
                    {p.isFeatured ? (
                      <HireLensInteractiveWidget />
                    ) : (
                      <div className="rounded-2xl border border-border bg-background/80 p-6 flex flex-col justify-between aspect-[4/3] relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-muted-foreground">{p.tag}</span>
                          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {p.status}
                          </span>
                        </div>
                        <div className="my-auto text-center">
                          <div className="text-5xl font-mono font-extrabold text-primary/30 mb-2">0{i + 1}</div>
                          <h4 className="text-xl font-bold text-foreground">{p.title}</h4>
                        </div>
                        <div className="text-[11px] font-mono text-muted-foreground">
                          {p.category}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Details & Impact */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono text-primary font-semibold">{p.tag}</span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1 tracking-tight">
                          {p.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Source Code on GitHub"
                          title="View Source Code on GitHub"
                          className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            title="Live Demo"
                            className="w-9 h-9 grid place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Problem / Solution / Impact Triad */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                      <div className="p-3 rounded-xl bg-background/50 border border-border/70 space-y-1">
                        <div className="font-mono text-[10px] uppercase font-bold text-primary">Problem</div>
                        <p className="text-muted-foreground leading-relaxed text-[11px]">{p.problem}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-background/50 border border-border/70 space-y-1">
                        <div className="font-mono text-[10px] uppercase font-bold text-primary">Solution</div>
                        <p className="text-muted-foreground leading-relaxed text-[11px]">{p.solution}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-background/50 border border-border/70 space-y-1">
                        <div className="font-mono text-[10px] uppercase font-bold text-primary">Impact</div>
                        <p className="text-muted-foreground leading-relaxed text-[11px]">{p.impact}</p>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full border border-border bg-background/80 text-muted-foreground"
                        >
                          <Sparkle className="w-2.5 h-2.5 text-primary" /> {t}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
