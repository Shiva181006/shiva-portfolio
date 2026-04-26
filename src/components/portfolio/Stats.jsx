import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, GitCommit, Coffee, Trophy } from "lucide-react";

const stats = [
  { icon: Code, value: 15, suffix: "+", label: "Projects Built" },
  { icon: GitCommit, value: 800, suffix: "+", label: "Commits Pushed" },
  { icon: Coffee, value: 1200, suffix: "+", label: "Cups of Coffee" },
  { icon: Trophy, value: 8.2, suffix: "/10", label: "Current CGPA", decimals: 1 },
];

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1600;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(start + (value - start) * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {decimals ? n.toFixed(decimals) : Math.floor(n).toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group p-6 rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-glow opacity-0 group-hover:opacity-100 blur-3xl transition-opacity" />
              <div className="relative flex items-center justify-between mb-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-primary/20 border border-primary/30">
                  <s.icon className="w-5 h-5 text-primary" />
                </span>
              </div>
              <div className="relative text-3xl sm:text-4xl font-bold text-gradient">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="relative text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
