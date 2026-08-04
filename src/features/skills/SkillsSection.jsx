import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Server, Brain, Braces, Check } from "lucide-react";

const groups = [
  {
    icon: Braces,
    title: "Core Languages",
    items: [
      { name: "Java (Core)", note: "OOP principles, collection framework & algorithms", level: "Advanced" },
      { name: "JavaScript", note: "ES6+, async/await promises, DOM & event loop", level: "Proficient" },
      { name: "SQL", note: "Relational queries, index optimization & joins", level: "Proficient" },
      { name: "C / C++", note: "NPTEL Elite certified, pointers & data structures", level: "Core" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend Engineering",
    items: [
      { name: "React.js", note: "Context hooks, custom state management & Vite", level: "Advanced" },
      { name: "Tailwind CSS", note: "Responsive layouts, flex containers & CSS variables", level: "Advanced" },
      { name: "Sass / SCSS", note: "Modular mixins, nesting rulesets & styling architecture", level: "Proficient" },
      { name: "HTML5 & CSS3", note: "Semantic layout structure, accessibility & transitions", level: "Advanced" },
    ],
  },
  {
    icon: Server,
    title: "Backend & Secure APIs",
    items: [
      { name: "Node.js", note: "Asynchronous runtime execution & NPM modules", level: "Proficient" },
      { name: "Express.js", note: "RESTful API routes, middleware & error handling", level: "Proficient" },
      { name: "JWT Auth", note: "HTTP-only secure cookie tokens & role protection", level: "Advanced" },
      { name: "Multer", note: "Streamed multipart file uploads & validation", level: "Proficient" },
    ],
  },
  {
    icon: Database,
    title: "Databases & Storage",
    items: [
      { name: "MongoDB & Mongoose", note: "Document collections, schema validation & indexing", level: "Proficient" },
      { name: "MySQL / PostgreSQL", note: "Relational tables, foreign keys & normalization", level: "Proficient" },
      { name: "ACID Compliance", note: "Transaction integrity & data consistency", level: "Core" },
    ],
  },
  {
    icon: Brain,
    title: "AI Integration & Workflows",
    items: [
      { name: "Google Gemini API", note: "Prompt engineering & structured JSON returns", level: "Proficient" },
      { name: "Puppeteer Exporter", note: "Headless HTML rendering to PDF documents", level: "Proficient" },
      { name: "Model Fallbacks", note: "429 rate limit exceptions & dynamic model switching", level: "Advanced" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflows",
    items: [
      { name: "Git & GitHub", note: "Branch management, pull requests & version control", level: "Advanced" },
      { name: "Postman", note: "API testing, payload verification & environment vars", level: "Proficient" },
      { name: "VS Code", note: "Integrated terminal, debugging & extension setups", level: "Advanced" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
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
            <Code className="w-3.5 h-3.5" /> Technical Skills & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tools I use to <span className="text-gradient">build & ship</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
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
              className="craft-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0">
                    <g.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">{g.title}</h3>
                </div>

                <ul className="space-y-4 font-sans">
                  {g.items.map((item) => (
                    <li key={item.name} className="text-xs space-y-0.5">
                      <div className="flex items-center justify-between font-semibold text-foreground">
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-primary" /> {item.name}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.2 rounded bg-background border border-border text-muted-foreground">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground pl-4 leading-relaxed font-sans">
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
