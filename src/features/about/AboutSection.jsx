import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Heart, Lightbulb, Compass, ShieldCheck, Award, CheckCircle2, Code2 } from "lucide-react";

const story = [
  {
    icon: GraduationCap,
    title: "Academic Excellence (B.Sc. → MCA Graduate)",
    text: "Graduated with B.Sc. in Computer Science (7.02 CGPA) and Master of Computer Applications (MCA) at Pranveer Singh Institute of Technology, Kanpur (8.46/10 CGPA). Built a strong foundation in core CS, software engineering, and algorithms.",
  },
  {
    icon: Lightbulb,
    title: "Frontend Development Focus",
    text: "Prioritize clean React.js component architecture, responsive layouts with HTML5/CSS3/Bootstrap, structured state management, and intuitive user experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Full-Stack & AI Integration",
    text: "Implemented JWT authentication with HTTP-only cookies in full-stack web applications, integrated Google Gemini AI APIs for automated resume analysis, and structured RESTful endpoints.",
  },
];

const stats = [
  { label: "MCA CGPA", value: 8.46, suffix: "/10", decimals: 1 },
  { label: "LeetCode DSA", value: 100, suffix: "+" },
  { label: "MCA Attendance", value: 100, suffix: "%" },
  { label: "Certifications", value: 9, suffix: "" },
];

const achievements = [
  {
    title: "100% AKTU Tuition Fee Waiver",
    desc: "Awarded a 100% Tuition Fee Waiver under the AKTU Fee Waiver Scheme, covering academic tuition fees for the entire 2-year MCA program based on academic excellence.",
    tag: "Academic Excellence",
  },
  {
    title: "First Division (Honours)",
    desc: "Graduated with First Division (Honours) in the Master of Computer Applications (MCA) program at PSIT Kanpur.",
    tag: "Graduation Honor",
  },
  {
    title: "100+ DSA Problems Solved",
    desc: "Solved 100+ Data Structures and Algorithms problems on platforms such as LeetCode, focusing on arrays, strings, dynamic programming & recursion.",
    tag: "Problem Solving",
  },
  {
    title: "100% Attendance Record",
    desc: "Achieved a perfect 100% attendance record across three consecutive MCA semesters and received ₹15,000 in institutional recognition awards.",
    tag: "Discipline & Commitment",
  },
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

function AboutAvatar() {
  const [imgSrc, setImgSrc] = useState("/profile.jpg");
  const [hasError, setHasError] = useState(false);

  const handleErr = () => {
    if (imgSrc === "/profile.jpg") {
      setImgSrc("/profile.png");
    } else if (imgSrc === "/profile.png") {
      setImgSrc("/profile.jpeg");
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="relative shrink-0">
      <div className="w-11 h-11 rounded-xl overflow-hidden border border-primary/40 bg-card shadow-sm grid place-items-center">
        {!hasError ? (
          <img
            src={imgSrc}
            alt="Shiva Kasaudhan"
            className="w-full h-full object-cover object-top"
            onError={handleErr}
          />
        ) : (
          <div className="w-full h-full bg-gradient-primary grid place-items-center text-primary-foreground font-extrabold text-sm">
            SK
          </div>
        )}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main About Block */}
        <div>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-3">
              <Heart className="w-3.5 h-3.5" /> About Me & Background
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Building software with <span className="text-gradient whitespace-nowrap">clarity & craft</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              I'm an MCA graduate and frontend-focused developer who cares about clean code, thoughtful user experiences, and building practical web applications with React.js, JavaScript, Java, and AI APIs.
            </p>
          </motion.div>

          {/* Counter Stats Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
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

            {/* Personal Developer Ethos Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 craft-card p-7 space-y-6 bg-gradient-to-br from-card to-background"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
                <Compass className="w-4 h-4" /> Professional Philosophy
              </div>
              
              <blockquote className="text-sm sm:text-base text-foreground font-serif italic leading-relaxed">
                "Great web products are created when intentional UI design, structured code, and performance serve real user goals."
              </blockquote>

              <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <AboutAvatar />
                  <div>
                    <div className="font-bold text-sm text-foreground">Shiva Kasaudhan</div>
                    <div className="text-xs text-muted-foreground font-mono">Frontend Developer • MCA Graduate</div>
                  </div>
                </div>
                <div className="font-serif italic text-primary text-lg sm:text-xl font-bold shrink-0">
                  Shiva K.
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Verified Achievements Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-2">
              <Award className="w-3.5 h-3.5" /> Key Honors & Recognitions
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Verified <span className="text-gradient">Academic Achievements</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="craft-card p-5 space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {ach.tag}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h4 className="font-bold text-base text-foreground leading-snug">{ach.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
