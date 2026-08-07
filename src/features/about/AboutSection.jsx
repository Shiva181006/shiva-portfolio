import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Heart, Lightbulb, Rocket, Code2, Compass, ShieldCheck } from "lucide-react";

const story = [
  {
    icon: GraduationCap,
    title: "Academic Foundation (B.Sc. → MCA)",
    text: "Graduated with B.Sc. Computer Science and recently graduated MCA at PSIT Kanpur (8.46 CGPA). Built a strong foundation in core computer science, database administration, and algorithms.",
  },
  {
    icon: Lightbulb,
    title: "Crafting Solutions with Intent",
    text: "I prioritize clean application architecture — defining route contracts, handling database schemas, and testing security before writing visual elements.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliable API Systems",
    text: "Experienced in protecting user credentials with HTTP-only JWT cookies, implementing error fallbacks, and structuring headless PDF export pipelines.",
  },
];

const stats = [
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "MCA CGPA", value: 8.46, suffix: "/10", decimals: 1 },
  { label: "Certifications", value: 5, suffix: "" },
  { label: "Git Commits", value: 500, suffix: "+" },
];

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
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
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5" /> About Me & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Building software with <span className="text-gradient">clarity & craft</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            I'm a full-stack engineer who values code quality, user experience, and robust systems design over flashiness.
          </p>
        </motion.div>

        {/* Counter Stats Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="craft-card p-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="mt-1.5 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-mono font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative & Quote Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Story Boxes */}
          <div className="lg:col-span-7 space-y-4">
            {story.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="craft-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 grid place-items-center rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">{s.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">{s.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal Studio Signature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 craft-card p-7 space-y-6 bg-gradient-to-br from-card to-background"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
              <Compass className="w-4 h-4" /> Personal Developer Ethos
            </div>
            
            <blockquote className="text-sm sm:text-base text-foreground font-serif italic leading-relaxed">
              "Great software isn't built by stacking random dependencies. It's crafted when every database collection, API endpoint, and UI interaction serves a clear purpose for the end user."
            </blockquote>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-foreground">Shiva Kasaudhan</div>
                <div className="text-xs text-muted-foreground font-mono">Full-Stack & AI Engineer</div>
              </div>
              <div className="font-serif italic text-primary text-xl font-bold">
                Shiva K.
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
