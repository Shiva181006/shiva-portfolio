import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, FolderGit2, Sparkle, CheckCircle2, Bot } from "lucide-react";

function HireLensInteractiveWidget() {
  const [activeTab, setActiveTab] = useState("ats"); // ats | gaps | qa
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="rounded-md border border-[#1C4E50] bg-[#0E2A2B] p-4 sm:p-5 font-sans space-y-4 shadow-subtle w-full text-[#F4EFE6] overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#1C4E50] pb-3">
        <span className="text-xs font-mono text-[#E8B84B] font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Bot className="w-3.5 h-3.5 text-[#E8B84B]" /> HireLens AI Core Engine
        </span>
        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#E8B84B]/10 text-[#E8B84B] border border-[#E8B84B]/30 font-mono font-semibold">
          Active Sandbox
        </span>
      </div>

      {/* Tab Switcher */}
      <div className="flex bg-[#133637] p-1 rounded-md border border-[#1C4E50] gap-1 font-mono text-[11px]">
        <button
          onClick={() => setActiveTab("ats")}
          className={`flex-1 py-1.5 rounded font-medium transition-all ${
            activeTab === "ats" ? "bg-[#E8B84B] text-[#0E2A2B] font-bold shadow-sm" : "text-[#A1B5B3] hover:text-[#F4EFE6]"
          }`}
        >
          ATS Analyzer
        </button>
        <button
          onClick={() => setActiveTab("gaps")}
          className={`flex-1 py-1.5 rounded font-medium transition-all ${
            activeTab === "gaps" ? "bg-[#E8B84B] text-[#0E2A2B] font-bold shadow-sm" : "text-[#A1B5B3] hover:text-[#F4EFE6]"
          }`}
        >
          Skill Gap Check
        </button>
        <button
          onClick={() => setActiveTab("qa")}
          className={`flex-1 py-1.5 rounded font-medium transition-all ${
            activeTab === "qa" ? "bg-[#E8B84B] text-[#0E2A2B] font-bold shadow-sm" : "text-[#A1B5B3] hover:text-[#F4EFE6]"
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
            <div className="flex flex-col items-center justify-center p-3 bg-[#133637] rounded-md border border-[#1C4E50] text-center">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="absolute w-full h-full -rotate-90">
                  <circle cx="28" cy="28" r="22" className="stroke-[#1C4E50] fill-none" strokeWidth="4" />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    className="stroke-[#E8B84B] fill-none"
                    strokeWidth="4"
                    strokeDasharray={2 * Math.PI * 22}
                    strokeDashoffset={2 * Math.PI * 22 * (1 - 0.88)}
                  />
                </svg>
                <span className="text-sm font-bold font-mono text-[#F4EFE6]">88%</span>
              </div>
              <span className="text-[10px] text-[#A1B5B3] mt-1.5 font-mono">Role Match Score</span>
            </div>

            <div className="p-3 bg-[#133637] rounded-md border border-[#1C4E50] flex flex-col justify-between text-xs space-y-1.5">
              <div className="text-[10px] font-mono text-[#A1B5B3] uppercase font-bold">Key Keywords</div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#F4EFE6] font-medium">Node.js / Express</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B84B]" />
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#F4EFE6] font-medium">JWT Security</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B84B]" />
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#F4EFE6] font-medium">Puppeteer Export</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B84B]" />
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
            <div className="p-2.5 bg-[#133637] rounded-md border border-[#1C4E50] flex items-center justify-between">
              <span className="text-[#F4EFE6] font-medium">System Scalability & Caching</span>
              <span className="px-2 py-0.5 rounded bg-[#D96C4A]/20 text-[#D96C4A] text-[10px] font-mono font-bold border border-[#D96C4A]/30">Recommended</span>
            </div>
            <div className="p-2.5 bg-[#133637] rounded-md border border-[#1C4E50] flex items-center justify-between">
              <span className="text-[#F4EFE6] font-medium">REST API Auth Pipeline</span>
              <span className="px-2 py-0.5 rounded bg-[#E8B84B]/20 text-[#E8B84B] text-[10px] font-mono font-bold border border-[#E8B84B]/30">Proficient</span>
            </div>
          </motion.div>
        )}

        {activeTab === "qa" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <div className="text-xs font-medium text-[#F4EFE6] bg-[#133637] p-2.5 rounded-md border border-[#1C4E50]">
              "How do you resolve Google Gemini API rate limits (429 status code)?"
            </div>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="w-full text-left text-[11px] text-[#E8B84B] font-mono font-semibold px-3 py-1.5 bg-[#E8B84B]/10 rounded border border-[#E8B84B]/20 flex items-center justify-between hover:bg-[#E8B84B]/20 transition-colors"
            >
              <span>{showAnswer ? "Hide Solution" : "Reveal Solution"}</span>
              <span>{showAnswer ? "▲" : "▼"}</span>
            </button>
            {showAnswer && (
              <div className="text-[10px] text-[#A1B5B3] font-mono bg-[#133637] p-2.5 rounded-md border border-[#1C4E50] leading-relaxed">
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
    demo: "https://hire-lens-mzm5pjeuu-shiva-kasaudhan-dev.vercel.app/",
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
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0E2A2B] overflow-hidden border-t border-[#1C4E50]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8B84B] font-bold uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> 02 — Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4EFE6]">
            Crafted with <span className="text-[#E8B84B] font-serif italic font-normal">purpose & precision</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1B5B3] leading-relaxed font-sans">
            Real applications built to solve genuine technical and user challenges.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#1C4E50] pb-4 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#E8B84B] text-[#0E2A2B] font-bold shadow-subtle"
                  : "bg-[#133637] hover:bg-[#184143] text-[#A1B5B3] hover:text-[#F4EFE6] border border-[#1C4E50]"
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
                className="editorial-card p-6 sm:p-8 bg-[#133637] border border-[#1C4E50] rounded-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Interactive Widget or Visual Card */}
                  <div className="lg:col-span-5 w-full">
                    {p.isFeatured ? (
                      <HireLensInteractiveWidget />
                    ) : (
                      <div className="rounded-md border border-[#1C4E50] bg-[#0E2A2B] p-6 flex flex-col justify-between aspect-[4/3] relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-[#A1B5B3]">{p.tag}</span>
                          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#133637] text-[#E8B84B] border border-[#1C4E50]">
                            {p.status}
                          </span>
                        </div>
                        <div className="my-auto text-center">
                          <div className="text-5xl font-mono font-extrabold text-[#1C4E50] mb-2">0{i + 1}</div>
                          <h4 className="text-xl font-bold text-[#F4EFE6] font-sans">{p.title}</h4>
                        </div>
                        <div className="text-[11px] font-mono text-[#A1B5B3]">
                          {p.category}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Details & Impact */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono text-[#E8B84B] font-semibold">{p.tag}</span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4EFE6] mt-1 tracking-tight font-sans">
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
                          className="w-9 h-9 grid place-items-center rounded-md border border-[#1C4E50] bg-[#0E2A2B] hover:bg-[#184143] text-[#A1B5B3] hover:text-[#E8B84B] transition-colors"
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
                            className="w-9 h-9 grid place-items-center rounded-md bg-[#E8B84B] hover:bg-[#D4A338] text-[#0E2A2B] transition-colors font-bold"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Problem / Solution / Impact Triad */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                      <div className="p-3 rounded-md bg-[#0E2A2B] border border-[#1C4E50] space-y-1">
                        <div className="font-mono text-[10px] uppercase font-bold text-[#E8B84B]">Problem</div>
                        <p className="text-[#A1B5B3] leading-relaxed text-[11px]">{p.problem}</p>
                      </div>
                      <div className="p-3 rounded-md bg-[#0E2A2B] border border-[#1C4E50] space-y-1">
                        <div className="font-mono text-[10px] uppercase font-bold text-[#E8B84B]">Solution</div>
                        <p className="text-[#A1B5B3] leading-relaxed text-[11px]">{p.solution}</p>
                      </div>
                      <div className="p-3 rounded-md bg-[#0E2A2B] border border-[#1C4E50] space-y-1">
                        <div className="font-mono text-[10px] uppercase font-bold text-[#E8B84B]">Impact</div>
                        <p className="text-[#A1B5B3] leading-relaxed text-[11px]">{p.impact}</p>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full border border-[#1C4E50] bg-[#0E2A2B] text-[#A1B5B3]"
                        >
                          <Sparkle className="w-2.5 h-2.5 text-[#E8B84B]" /> {t}
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
