import { motion } from "framer-motion";
import { Award, GitBranch, GraduationCap, Zap, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "Jun 2021 – Jul 2024",
    icon: GraduationCap,
    title: "B.Sc. in Computer Science",
    place: "MLK P.G. College, Balrampur, India • 7.02/10 CGPA",
    text: "Completed Bachelor of Science in Computer Science, building core foundations in programming and computer science.",
  },
  {
    year: "Sep 2024 – Jun 2026",
    icon: GraduationCap,
    title: "Master of Computer Applications (MCA)",
    place: "Pranveer Singh Institute of Technology, Kanpur • 8.46/10 CGPA",
    text: "Graduated with First Division (Honours). Focused on software engineering, database management, web applications, and algorithms.",
  },
  {
    year: "2024",
    icon: Award,
    title: "NPTEL Elite — Problem Solving in C",
    place: "NPTEL (Elite Grade)",
    text: "Earned Elite Grade accreditation in C programming, logic building, and data structures.",
  },
  {
    year: "2025",
    icon: GitBranch,
    title: "Engineered Smart Dine & LoopLearn",
    place: "React.js • State Architecture",
    text: "Built frontend web applications including Smart Dine restaurant UI and LoopLearn spaced repetition platform.",
  },
  {
    year: "2026",
    icon: Sparkles,
    title: "Built HireLens AI",
    place: "React.js, Node.js, Express.js, MongoDB & Gemini AI",
    text: "Developed full-stack AI interview preparation platform with Gemini AI resume analysis, JWT auth, and REST APIs.",
  },
  {
    year: "Present",
    icon: Zap,
    title: "Available for Frontend & Software Roles",
    place: "Gurgaon, Haryana, India",
    text: "Seeking Frontend Developer or Software Developer opportunities.",
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0E2A2B] overflow-hidden border-t border-[#1C4E50]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8B84B] font-bold uppercase tracking-widest mb-3">
            <GitBranch className="w-3.5 h-3.5" /> 05 — Growth & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4EFE6]">
            My developer <span className="text-[#E8B84B] font-serif italic font-normal">timeline</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1B5B3] leading-relaxed font-sans">
            The path of continuous learning, certifications, and project engineering.
          </p>
        </motion.div>

        {/* Timeline Body */}
        <div className="relative">
          {/* Vertical line: Left-aligned on mobile, center-aligned on md screens */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#1C4E50] md:-translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const isEven = i % 2 === 0;
              const isLatest = i === timeline.length - 1;
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
                    <div className={`w-8 h-8 rounded-full grid place-items-center shadow-subtle ring-4 ring-[#0E2A2B] ${
                      isLatest ? "bg-[#D96C4A] text-[#F4EFE6] font-bold" : "bg-[#E8B84B] text-[#0E2A2B]"
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8 w-full">
                    <div className="editorial-card p-5 space-y-1.5 bg-[#133637] border border-[#1C4E50] rounded-md">
                      <div className="text-[11px] font-mono font-bold text-[#E8B84B]">{item.year}</div>
                      <h3 className="font-bold text-base text-[#F4EFE6] font-sans">{item.title}</h3>
                      <div className="text-xs text-[#A1B5B3] font-mono">{item.place}</div>
                      <p className="mt-2 text-xs text-[#A1B5B3] leading-relaxed font-sans">
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
