import { motion } from "framer-motion";
import { GraduationCap, Heart, Lightbulb, Rocket } from "lucide-react";

const stats = [
  { label: "CGPA (MCA)", value: "8.2" },
  { label: "Projects Built", value: "5+" },
  { label: "Certifications", value: "5" },
  { label: "Years Coding", value: "3+" },
];

const story = [
  {
    icon: GraduationCap,
    title: "From B.Sc. to MCA",
    text: "Started with Computer Science fundamentals, now diving deep into full-stack engineering at PSIT, Kanpur.",
  },
  {
    icon: Lightbulb,
    title: "Why I Code",
    text: "I love that feeling when a stubborn bug finally surrenders — and shipping things real people can use.",
  },
  {
    icon: Rocket,
    title: "What I'm Improving",
    text: "Currently leveling up on system design, advanced React patterns, and clear communication.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5" /> About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            A curious dev who builds <span className="text-gradient">with intent.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          {/* Story */}
          <div className="lg:col-span-7 space-y-5">
            {story.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/40 hover:shadow-glow transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-primary shadow-glow shrink-0">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 text-center hover:border-primary/40 transition-all"
              >
                <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-2 rounded-2xl border border-primary/30 bg-gradient-primary p-6 shadow-glow text-primary-foreground"
            >
              <p className="text-sm font-medium leading-relaxed">
                "I don't just write code — I solve problems, ship features, and grow with every
                line."
              </p>
              <p className="mt-3 text-xs opacity-80">— Shiva, in caffeine-fueled sincerity ☕</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
