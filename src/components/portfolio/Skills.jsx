import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Cpu, Braces } from "lucide-react";

const groups = [
  {
    icon: Braces,
    title: "Languages",
    color: "from-purple-500 to-fuchsia-500",
    items: [
      { name: "Java (Core)", note: "OOP, DSA fundamentals" },
      { name: "JavaScript", note: "ES6+, async patterns" },
      { name: "C", note: "NPTEL Elite — top tier" },
      { name: "SQL", note: "Joins, indexing, design" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    color: "from-pink-500 to-rose-500",
    items: [
      { name: "React.js", note: "Built dynamic UI projects" },
      { name: "HTML5 / CSS3", note: "Semantic & responsive" },
      { name: "Bootstrap", note: "Rapid responsive layouts" },
      { name: "Responsive Design", note: "Mobile-first approach" },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-cyan-500 to-blue-500",
    items: [
      { name: "MySQL", note: "Schema design & queries" },
      { name: "DBMS Concepts", note: "Normalization, ACID" },
    ],
  },
  {
    icon: Cpu,
    title: "CS Core",
    color: "from-amber-500 to-orange-500",
    items: [
      { name: "DSA", note: "Problem-solving daily" },
      { name: "OOP", note: "Modular, maintainable code" },
      { name: "OS / CN / SE", note: "Strong fundamentals" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-emerald-500 to-teal-500",
    items: [
      { name: "Git & GitHub", note: "Version control workflow" },
      { name: "VS Code", note: "Daily driver IDE" },
    ],
  },
  {
    icon: Code,
    title: "Currently Learning",
    color: "from-violet-500 to-indigo-500",
    items: [
      { name: "Node.js & Express", note: "Backend APIs" },
      { name: "TypeScript", note: "Safer React apps" },
      { name: "System Design", note: "Scaling fundamentals" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <Code className="w-3.5 h-3.5" /> Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Tools I use to <span className="text-gradient">build & ship</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Not just a list — here's how I actually use each one.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.color} grid place-items-center mb-4 shadow-lg`}
              >
                <g.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{g.title}</h3>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item.name} className="text-sm">
                    <div className="font-medium text-foreground">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.note}</div>
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
