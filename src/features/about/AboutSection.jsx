import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Heart, Lightbulb, Rocket, Code, GitCommit, Trophy, Coffee } from "lucide-react";

const story = [
  {
    icon: GraduationCap,
    title: "From B.Sc. to MCA",
    text: "Pivoted from basic computer science concepts to enterprise application engineering and algorithm structures at PSIT, Kanpur.",
  },
  {
    icon: Lightbulb,
    title: "Building with Intent",
    text: "I build with design in mind. I map schemas, verify route auth keys, and test model failovers before writing core code.",
  },
  {
    icon: Rocket,
    title: "AI Integration Focus",
    text: "Experienced in embedding Gemini API prompt checks, protecting secure cookies, and structuring headless HTML-to-PDF runtimes.",
  },
];

const stats = [
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "CGPA (MCA)", value: 8.2, suffix: "/10", decimals: 1 },
  { label: "Certifications", value: 5, suffix: "" },
  { label: "Git Commits", value: 800, suffix: "+" },
];

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
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

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5" /> About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            A curious developer building <span className="text-gradient font-sans font-bold">resilient solutions</span>
          </h2>
        </motion.div>

        {/* Grid Area */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          
          {/* Story Boxes */}
          <div className="lg:col-span-7 space-y-4">
            {story.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 grid place-items-center rounded-xl bg-gradient-primary shadow-glow shrink-0 text-primary-foreground">
                    <s.icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Boxes */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/50 backdrop-blur p-6 text-center hover:border-primary/30 transition-all"
              >
                <div className="text-3xl font-extrabold text-gradient font-mono">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="mt-2 text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            
            {/* Custom Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-2 rounded-2xl border border-primary/20 bg-gradient-primary p-6 shadow-glow text-primary-foreground"
            >
              <p className="text-sm font-medium leading-relaxed">
                "I don't just write scripts — I build secure, resilient backend routes and design user interfaces that feel premium and organic."
              </p>
              <p className="mt-3 text-xs opacity-80 font-mono">— Shiva, crafting with intent 🚀☕</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
