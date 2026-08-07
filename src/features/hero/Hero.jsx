import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Code2, Terminal, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const roles = [
  "MERN Stack Engineer",
  "React & Sass",
  "Java & Algorithms Coder",
  "Problem Solver"
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDel(true), 1600);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI(x => x + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-primary font-semibold">
      {text}
      <span className="inline-block w-[2px] h-[0.8em] bg-primary ml-1 animate-pulse align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden studio-grid"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-md px-3.5 py-1.5 text-xs text-muted-foreground shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-medium text-foreground flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary" /> Kanpur, UP
              </span>
              <span className="text-muted-foreground/60">•</span>
              <span>Available for Roles & Internships</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-foreground">
                Hi, I'm <span className="text-gradient font-serif italic font-bold">Shiva Kasaudhan</span>
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-foreground/90">
                Crafting human-centric digital tools ➜ <Typewriter />
              </p>
            </motion.div>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed"
            >
              MCA candidate at PSIT Kanpur building full-stack web products with{" "}
              <strong className="text-foreground font-semibold">React, Node.js, Express & Java</strong>. 
              I focus on clean API architecture, intuitive user interfaces, and smart Gemini AI workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3.5 pt-1"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-95 shadow-glow border-0 rounded-full text-xs sm:text-sm font-semibold px-6"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Selected Work <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-card/60 backdrop-blur hover:bg-accent text-xs sm:text-sm font-medium px-5"
              >
                <a
                  href="https://drive.google.com/file/d/1VZQrrhFqv1eo_pYZmuJv_TzGL6RmMbaV/view?preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-primary" /> Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-3"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-bold">Connect</span>
              <div className="h-px w-8 bg-border" />
              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/Shiva181006", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/shiva-kasaudhan-153858241/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:shivakasaudhan817@gmail.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:shadow-glow transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Handcrafted Human Developer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl rounded-3xl" />
              
              <div className="relative rounded-2xl border border-border bg-card/90 backdrop-blur-xl p-6 shadow-elegant space-y-5">
                
                {/* Header Profile Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground font-extrabold text-base shadow-glow">
                      SK
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground leading-tight">Shiva Kasaudhan</h3>
                      <p className="text-xs text-muted-foreground font-mono">MCA @ PSIT Kanpur • 8.2 CGPA</p>
                    </div>
                  </div>
                  <span className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <UserCheck className="w-4 h-4" />
                  </span>
                </div>

                {/* Craftsmanship Highlights */}
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-background/60 border border-border/80 space-y-1">
                    <div className="flex items-center justify-between font-mono text-[11px] text-primary font-bold">
                      <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5" /> Primary Stack</span>
                      <span>MERN + Java</span>
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">
                      React.js, Node.js, Express, MongoDB, Core Java Algorithms & Gemini LLM APIs.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-background/60 border border-border/80 space-y-1">
                    <div className="flex items-center justify-between font-mono text-[11px] text-primary font-bold">
                      <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> Flagship Build</span>
                      <span>HireLens AI</span>
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">
                      AI Resume & ATS Evaluator with automated JWT auth, Puppeteer PDF exports & Gemini model fallbacks.
                    </p>
                  </div>
                </div>

                {/* Personal Motto Quote */}
                <div className="p-3.5 rounded-xl bg-gradient-primary/10 border border-primary/20 text-xs">
                  <p className="text-foreground/90 font-serif italic leading-relaxed text-sm">
                    "I believe in clean architecture, intentional UI design, and code that solves genuine human problems."
                  </p>
                </div>

                {/* Quick stats pills */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono">
                  <div className="p-2 rounded-lg bg-background/40 border border-border/60">
                    <div className="text-sm font-bold text-primary">15+</div>
                    <div className="text-[9px] text-muted-foreground uppercase">Projects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-background/40 border border-border/60">
                    <div className="text-sm font-bold text-primary">800+</div>
                    <div className="text-[9px] text-muted-foreground uppercase">Commits</div>
                  </div>
                  <div className="p-2 rounded-lg bg-background/40 border border-border/60">
                    <div className="text-sm font-bold text-primary">5</div>
                    <div className="text-[9px] text-muted-foreground uppercase">Certs</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
