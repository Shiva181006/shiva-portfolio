import { motion } from "framer-motion";
import { Award, GitBranch, GraduationCap, Trophy, Zap } from "lucide-react";

const timeline = [
  {
    year: "2021",
    icon: GraduationCap,
    title: "Started B.Sc. Computer Science",
    place: "Maharani Lal Kunwari P.G. College, Balrampur",
    text: "First touch with C, problem solving and the spark that started it all.",
  },
  {
    year: "2024",
    icon: GraduationCap,
    title: "Began MCA at PSIT, Kanpur",
    place: "CGPA: 8.2 / 10",
    text: "Stepped into full-stack development, started building real-world apps.",
  },
  {
    year: "2024",
    icon: Award,
    title: "NPTEL Elite — Problem Solving in C",
    place: "Top tier nationally",
    text: "Cleared with elite grade. Realized I love algorithms more than I expected.",
  },
  {
    year: "2024",
    icon: Trophy,
    title: "Top 10 — Internal Java Coding Contest",
    place: "PSIT",
    text: "Practiced DSA & OOP weekly — finally paid off in a live contest.",
  },
  {
    year: "2025",
    icon: GitBranch,
    title: "Smart Dine in development",
    place: "React • JS • Bootstrap",
    text: "Building a real restaurant app — menu, reservations, pre-orders.",
  },
  {
    year: "Now",
    icon: Zap,
    title: "Open to Internships",
    place: "Looking for first dev role",
    text: "Ready to ship code, learn from seniors, and contribute from day one.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <GitBranch className="w-3.5 h-3.5" /> My Journey
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            From curious student to <span className="text-gradient">shipping dev</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every line of code has a story. Here's mine, so far.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className={`relative flex sm:items-center ${
                    left ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center shadow-glow ring-4 ring-background">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="ml-16 sm:ml-0 sm:w-1/2 sm:px-10">
                    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 hover:border-primary/40 transition-all">
                      <div className="text-xs font-mono text-primary mb-1">{item.year}</div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <div className="text-xs text-muted-foreground mb-2">{item.place}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
