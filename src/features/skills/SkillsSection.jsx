import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Server, Brain, Braces, Check } from "lucide-react";

const groups = [
  {
    icon: Braces,
    title: "Programming Languages",
    items: [
      { name: "Java", note: "Core Java, OOP principles, data structures & algorithms", level: "Core" },
      { name: "JavaScript", note: "ES6+, async/await promises, DOM manipulation & event loop", level: "Proficient" },
      { name: "SQL", note: "Relational queries, index optimization, joins & table schemas", level: "Proficient" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend Technologies",
    items: [
      { name: "React.js", note: "Context hooks, custom state management, Vite & component architecture", level: "Advanced" },
      { name: "HTML5 & CSS3", note: "Semantic layout structure, flexbox, grid & responsive design", level: "Advanced" },
      { name: "Bootstrap", note: "Grid system, responsive utilities & component styling", level: "Proficient" },
    ],
  },
  {
    icon: Server,
    title: "Backend Technologies",
    items: [
      { name: "Node.js", note: "Asynchronous runtime execution & module management", level: "Proficient" },
      { name: "Express.js", note: "RESTful API routes, middleware & error handling", level: "Proficient" },
      { name: "JWT Authentication", note: "HTTP-only cookie tokens & route security", level: "Proficient" },
      { name: "REST APIs", note: "HTTP methods, status codes & JSON payload contracts", level: "Advanced" },
    ],
  },
  {
    icon: Database,
    title: "Databases & Storage",
    items: [
      { name: "MySQL", note: "Relational tables, foreign keys, normalization & queries", level: "Proficient" },
      { name: "MongoDB", note: "Document collections, schema validation & indexing", level: "Proficient" },
    ],
  },
  {
    icon: Brain,
    title: "AI & Application Integrations",
    items: [
      { name: "Google Gemini AI API", note: "Prompt engineering, resume analysis & JSON API responses", level: "Proficient" },
      { name: "Local Storage", note: "Browser client storage for app state & progress tracking", level: "Proficient" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Core Competencies",
    items: [
      { name: "Git & GitHub", note: "Version control, commit history & repository hosting", level: "Advanced" },
      { name: "VS Code & Postman", note: "IDE extensions, API endpoint testing & payload verification", level: "Proficient" },
      { name: "Vercel & Render", note: "Application deployment & environment configurations", level: "Proficient" },
      { name: "DSA & OOP", note: "Data Structures, Algorithms & Object-Oriented Programming", level: "Core" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F2EDE3] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A3432F] font-bold uppercase tracking-widest mb-3">
            <Code className="w-3.5 h-3.5" /> 03 — Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181715]">
            Tools I use to <span className="text-[#A3432F] whitespace-nowrap">build & ship</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#716B61] leading-relaxed">
            Practical competencies tested and applied across real project deployments.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="craft-card p-6 flex flex-col justify-between bg-[#F8F4EC] border border-[#D5CCBC] rounded-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-md bg-[#F2EDE3] border border-[#D5CCBC] grid place-items-center text-[#A3432F] shrink-0">
                    <g.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#181715]">{g.title}</h3>
                </div>

                <ul className="space-y-4 font-sans">
                  {g.items.map((item) => (
                    <li key={item.name} className="text-xs space-y-0.5">
                      <div className="flex items-center justify-between font-semibold text-[#181715]">
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#A3432F]" /> {item.name}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.2 rounded bg-[#F2EDE3] border border-[#D5CCBC] text-[#716B61]">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#716B61] pl-4 leading-relaxed font-sans">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
