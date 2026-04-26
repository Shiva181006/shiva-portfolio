import { motion } from "framer-motion";

const techs = [
  "React", "JavaScript", "TypeScript", "Java", "Node.js", "Tailwind CSS",
  "MySQL", "MongoDB", "Git", "GitHub", "Vite", "Framer Motion",
  "HTML5", "CSS3", "Bootstrap", "REST API", "Express", "Figma",
];

function Row({ reverse = false, speed = 30 }) {
  const list = [...techs, ...techs];
  return (
    <div className="overflow-hidden py-3" style={{ maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)" }}>
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            className="px-5 py-2 rounded-full border border-border bg-card/60 backdrop-blur text-sm font-mono text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="relative py-10 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            ⚡ Tech I work with
          </span>
        </div>
        <Row speed={35} />
        <Row reverse speed={45} />
      </div>
    </section>
  );
}
