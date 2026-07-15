import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Server, Brain, Braces } from "lucide-react";

const groups = [
  {
    icon: Braces,
    title: "Languages",
    color: "from-amber-500 to-amber-600",
    items: [
      { name: "Java (Core)", note: "OOP principles, collections, DSA" },
      { name: "JavaScript", note: "ES6+, async/await, DOM callbacks" },
      { name: "SQL", note: "Relational queries, index optimizations" },
      { name: "C / C++", note: "NPTEL Elite, pointers, data structs" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    color: "from-yellow-600 to-amber-500",
    items: [
      { name: "React.js", note: "Vite build tools, context hooks, router" },
      { name: "Tailwind CSS", note: "Responsive grids, flex containers" },
      { name: "Sass / SCSS", note: "Nested rulesets, modular layout styling" },
      { name: "HTML5 & CSS3", note: "Semantic layout markup & transitions" },
    ],
  },
  {
    icon: Server,
    title: "Backend & Secure APIs",
    color: "from-amber-600 to-yellow-500",
    items: [
      { name: "Node.js", note: "Runtime execution & NPM dependencies" },
      { name: "Express.js", note: "REST API structures & router routing" },
      { name: "JWT Auth", note: "HTTP-only cookie protection, token keys" },
      { name: "Multer streams", note: "Handling file uploads & file parsing" },
    ],
  },
  {
    icon: Database,
    title: "Databases & Storage",
    color: "from-yellow-500 to-amber-600",
    items: [
      { name: "MongoDB & Mongoose", note: "NoSQL collections, validation checks" },
      { name: "MySQL / PostgreSQL", note: "Relations, indexing, joins, normalization" },
      { name: "ACID transactions", note: "Data consistency & transaction safety" },
    ],
  },
  {
    icon: Brain,
    title: "AI Integration",
    color: "from-amber-500 to-yellow-600",
    items: [
      { name: "Google Gemini API", note: "Prompt engineering, structured JSON returns" },
      { name: "Puppeteer Exporter", note: "Headless HTML-to-PDF rendering" },
      { name: "Model Fallbacks", note: "Catching 429 exceptions, model routing" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflows",
    color: "from-yellow-600 to-amber-500",
    items: [
      { name: "Git & GitHub", note: "Branching, pull requests, version control" },
      { name: "Postman", note: "API endpoint verification & checking" },
      { name: "VS Code", note: "Daily shell logs, debug routines" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute inset-0 layout-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      
      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <Code className="w-3.5 h-3.5" /> Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Tools I use to <span className="text-gradient font-sans font-bold">build & ship</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-sm">
            Not just a list — here is how I actually apply these tools in my projects.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${g.color} grid place-items-center mb-4 text-primary-foreground shadow-glow`}
              >
                <g.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base mb-4 text-foreground">{g.title}</h3>
              <ul className="space-y-3 font-sans">
                {g.items.map((item) => (
                  <li key={item.name} className="text-xs">
                    <div className="font-semibold text-foreground">{item.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{item.note}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
