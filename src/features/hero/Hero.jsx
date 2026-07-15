import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const roles = [
  "Full-Stack AI Developer",
  "MERN Stack Engineer",
  "React & Sass Specialist",
  "Java & Algorithms Coder",
  "Problem Solver"
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 50 : 100;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDel(true), 1500);
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
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[0.8em] bg-primary ml-1 animate-pulse align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden layout-grid"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      {/* Background glow meshes */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-glow blur-3xl pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 -right-32 w-[350px] h-[350px] rounded-full bg-gradient-glow blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Internships & Junior Developer Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
          >
            Hi, I'm <span className="text-gradient font-sans">Shiva Kasaudhan</span>
            <br />
            <span className="text-foreground/90 text-3xl sm:text-4xl lg:text-5xl font-semibold">I build with intent ➜ </span> 
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl"><Typewriter /></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-muted-foreground max-w-xl leading-relaxed font-sans"
          >
            MCA student crafting real-world web applications with{" "}
            <span className="text-foreground font-medium">React, Node.js, Express & Java</span>.
            I focus on secure routing, binary document compilation, and integrating robust LLM pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow border-0 rounded-full"
            >
              <a href="#projects">
                Explore Projects <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/40 backdrop-blur hover:bg-accent"
            >
              <a href="https://drive.google.com/file/d/1VZQrrhFqv1eo_pYZmuJv_TzGL6RmMbaV/view?preview" target="_blank">
                <Download className="mr-1.5 w-4 h-4" /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 pt-2"
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
                  className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card/40 backdrop-blur text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-glow transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl border border-border bg-card/85 backdrop-blur-xl shadow-elegant overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40 select-none">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">shiva.js</span>
              </div>
              <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed text-foreground/90 overflow-x-auto select-text selection:bg-primary/20">
                {`const developer = {
  name: "Shiva Kasaudhan",
  education: "MCA @ PSIT, Kanpur",
  gpa: 8.2,
  coreStack: ["React.js", "Node.js", "Express", "MongoDB"],
  integrations: ["Google Gemini API", "Puppeteer Exporter"],
  superpower: () => "build dynamic, secure AI tools"
};

developer.superpower();`}
              </pre>
              <div className="px-5 pb-5 flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Always learning. Always shipping.</span>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-mono font-bold shadow-glow text-foreground"
            >
              ⚡ React
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-mono font-bold shadow-glow text-foreground"
            >
              🤖 Gemini API
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono flex flex-col items-center gap-1 hover:text-foreground transition-colors select-none"
      >
        <span>scroll</span>
        <span className="w-px h-6 bg-gradient-to-b from-primary to-transparent" />
      </motion.a>
    </section>
  );
}
