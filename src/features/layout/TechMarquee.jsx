import { motion } from "framer-motion";

const techs = [
  "React.js", "JavaScript", "Node.js", "Tailwind CSS", "Bootstrap",
  "MySQL", "MongoDB", "Git", "GitHub", "Vite", "Framer Motion",
  "HTML5", "CSS3", "Sass / SCSS", "REST API", "Express.js", "Mongoose", "Puppeteer"
];

function Row({ reverse = false, speed = 35 }) {
  const list = [...techs, ...techs];
  return (
    <div className="overflow-hidden py-2.5 select-none [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-3 whitespace-nowrap w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            className="px-4 py-1.5 rounded-full border border-border bg-card/80 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
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
    <section className="relative py-8 border-y border-border bg-card/30 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-3">
          <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
            ⚡ Tech Stack & Technologies
          </span>
        </div>
        <Row speed={35} />
        <Row reverse speed={40} />
      </div>
    </section>
  );
}
