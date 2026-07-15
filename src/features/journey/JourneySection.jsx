import { motion } from "framer-motion";
import { Award, GitBranch, GraduationCap, Trophy, Zap, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2021",
    icon: GraduationCap,
    title: "Started B.Sc. Computer Science",
    place: "Maharani Lal Kunwari P.G. College, Balrampur",
    text: "First touch with C language variables, logic building, and compiling procedures.",
  },
  {
    year: "2024",
    icon: GraduationCap,
    title: "Began MCA at PSIT, Kanpur",
    place: "CGPA: 8.2 / 10",
    text: "Stepped into full-stack development. Built modular databases and React routers.",
  },
  {
    year: "2024",
    icon: Award,
    title: "NPTEL Elite — Problem Solving in C",
    place: "IIT Kharagpur accredited",
    text: "Completed course with elite standing, building a firm algorithm basis.",
  },
  {
    year: "2024",
    icon: Trophy,
    title: "Top 10 — Java Coding Contest",
    place: "PSIT internal contest",
    text: "Solved DSA problems and applied strict object-oriented design under time conditions.",
  },
  {
    year: "2025",
    icon: GitBranch,
    title: "Smart Dine Reservation Sync",
    place: "React.js • Bootstrap",
    text: "Engineered restaurant grid bookings. Synchronized tables and pre-orders.",
  },
  {
    year: "2026",
    icon: Sparkles,
    title: "Shipped HireLens AI",
    place: "Google Gemini API • Puppeteer",
    text: "Created the MERN audit application with protected cookies, pdf print triggers, and API failsafe routines.",
  },
  {
    year: "Now",
    icon: Zap,
    title: "Open to Roles & Internships",
    place: "Full-Stack Development",
    text: "Ready to write secure API routes, compile components, and integrate AI pipelines.",
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <GitBranch className="w-3.5 h-3.5" /> Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            From learning basics to <span className="text-gradient font-sans font-bold">shipping products</span>
          </h2>
        </motion.div>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical line helper */}
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
                  {/* Dot icon indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center shadow-glow ring-4 ring-background text-primary-foreground">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="ml-16 sm:ml-0 sm:w-1/2 sm:px-10">
                    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 hover:border-primary/30 transition-all">
                      <div className="text-xs font-mono text-primary font-bold mb-1">{item.year}</div>
                      <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{item.place}</div>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-sans">
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
