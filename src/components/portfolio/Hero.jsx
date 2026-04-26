import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const roles = [
  "Aspiring Full Stack Developer",
  "React Engineer",
  "Java Coder",
  "Problem Solver",
  "MCA Student",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 50 : 110;
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
          setI((x) => x + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 animate-pulse align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-gradient-glow blur-3xl pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-glow blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Internships & Junior Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Shiva</span>
            <br />
            <span className="text-foreground/90">I'm a</span> <Typewriter />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            MCA student crafting real-world web apps with{" "}
            <span className="text-foreground font-medium">
              React, Java & SQL
            </span>
            . I love solving problems and turning ideas into clean, fast
            interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow border-0 rounded-full"
            >
              <a href="#projects">
                View Projects <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/40 backdrop-blur hover:bg-accent"
            >
              <a href="https://drive.google.com/file/d/1VZQrrhFqv1eo_pYZmuJv_TzGL6RmMbaV/view?preview" target="_blank">
                <Download className="mr-1 w-4 h-4" /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-4 pt-2"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Connect
            </span>
            <div className="h-px w-10 bg-border" />
            <div className="flex gap-2">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Shiva181006",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/shiva-kasaudhan-153858241/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:shivakasaudhan817@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 grid place-items-center rounded-full border border-border bg-card/40 backdrop-blur text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-glow transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-2xl rounded-3xl" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-elegant overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  shiva.tsx
                </span>
              </div>
              <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed text-foreground/90 overflow-x-auto">
                {`const shiva = {
  name: "Shiva Kasaudhan",
  role: "Aspiring Full Stack Developer",
  edu: "MCA @ PSIT",
  stack: ["React", "Java", "SQL"],
  cgpa: 8.2,
  superpower: () => "ship & learn 🚀"
};

shiva.superpower();`}
              </pre>
              <div className="px-5 pb-5 flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="w-3 h-3 text-primary" />
                <span>Always learning. Always shipping.</span>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-card border border-primary/40 text-xs font-mono shadow-glow"
            >
              ⚡ React
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-card border border-primary/40 text-xs font-mono shadow-glow"
            >
              ☕ Java
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono flex flex-col items-center gap-1 hover:text-foreground transition-colors"
      >
        <span>scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.a>
    </section>
  );
}
