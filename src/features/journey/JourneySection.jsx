import { motion } from "framer-motion";
import { Award, GitBranch, GraduationCap, Trophy, Zap, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2021 - 2024",
    icon: GraduationCap,
    title: "B.Sc. Computer Science",
    place: "Maharani Lal Kunwari P.G. College",
    text: "Discovered programming fundamentals, building algorithms in C and understanding logic structures.",
  },
  {
    year: "2024 - 2026",
    icon: GraduationCap,
    title: "MCA candidate at PSIT Kanpur",
    place: "Kanpur, UP • 8.46 CGPA",
    text: "Focused on enterprise full-stack development, database architecture, and security protocols.",
  },
  {
    year: "2024",
    icon: Award,
    title: "NPTEL Elite — Problem Solving in C",
    place: "IIT Kharagpur accredited",
    text: "Earned Elite accreditation in C programming, logic building, and data structures.",
  },
  {
    year: "2024",
    icon: Trophy,
    title: "Top 10 Rank — Java Coding Contest",
    place: "PSIT Kanpur",
    text: "Competed in high-pressure algorithmic coding challenges applying OOP and Java logic.",
  },
  {
    year: "2025",
    icon: GitBranch,
    title: "Engineered Smart Dine App",
    place: "React.js • State Architecture",
    text: "Designed restaurant menu management and real-time pre-ordering interface.",
  },
  {
    year: "2026",
    icon: Sparkles,
    title: "Launched HireLens AI",
    place: "Full-Stack MERN & Gemini API",
    text: "Shipped flagship career AI evaluation platform with PDF exports, JWT security, and fallback APIs.",
  },
  {
    year: "Present",
    icon: Zap,
    title: "Available for Software Roles",
    place: "Kanpur / Remote",
    text: "Actively seeking Frontend Developer or Software Engineer opportunities.",
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-3">
            <GitBranch className="w-3.5 h-3.5" /> Growth & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            My developer <span className="text-gradient">timeline</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            The path of continuous learning, certifications, and project engineering.
          </p>
        </motion.div>

        {/* Timeline Body */}
        <div className="relative">
          {/* Vertical line: Left-aligned on mobile, center-aligned on md screens */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 top-0 md:top-auto">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary grid place-items-center shadow-glow ring-4 ring-background text-primary-foreground">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8 w-full">
                    <div className="craft-card p-5 space-y-1.5">
                      <div className="text-[11px] font-mono font-bold text-primary">{item.year}</div>
                      <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                      <div className="text-xs text-muted-foreground font-mono">{item.place}</div>
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
