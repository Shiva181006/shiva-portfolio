import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Code2, Terminal, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const roles = [
  "Frontend Developer",
  "React & JavaScript Developer",
  "Java Developer",
  "AI Project Builder",
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

function ProfileAvatar() {
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
    <div className="relative group shrink-0">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border border-[#D5CCBC] bg-[#F8F4EC] shadow-subtle grid place-items-center">
        {!hasError ? (
          <img
            src={imgSrc}
            alt="Shiva Kasaudhan"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            onError={handleErr}
          />
        ) : (
          <div className="w-full h-full bg-[#A3432F] grid place-items-center text-white font-bold text-xl">
            SK
          </div>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#F2EDE3]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D5CCBC] bg-[#F8F4EC] px-3.5 py-1.5 text-xs text-[#716B61] shadow-subtle"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#A3432F] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A3432F]" />
              </span>
              <span className="font-medium text-[#181715] flex items-center gap-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#A3432F]" /> Gurgaon, Haryana, India
              </span>
              <span className="text-[#716B61]/60">•</span>
              <span className="font-mono text-[11px]">Available for Software & Frontend Roles</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="text-xs font-mono text-[#A3432F] font-bold tracking-widest uppercase">
                AVAILABLE FOR OPPORTUNITIES
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#181715]">
                Hi, I'm <span className="text-[#A3432F] font-serif italic font-bold">Shiva Kasaudhan</span>
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-[#181715]/90 font-sans">
                Frontend Developer | React.js ➜ <Typewriter />
              </p>
            </motion.div>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-[#716B61] max-w-xl leading-relaxed"
            >
              MCA graduate with an <strong className="text-[#181715] font-semibold">8.46/10 CGPA</strong> and hands-on experience building responsive React applications, full-stack projects, and AI-powered solutions using <strong className="text-[#181715] font-semibold">JavaScript, Java, React.js & Node.js</strong>.
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
                className="bg-[#A3432F] hover:bg-[#863525] text-white border-0 rounded-md text-xs sm:text-sm font-semibold px-6 shadow-subtle transition-colors"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Selected Work <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md border-[#D5CCBC] bg-[#F8F4EC] hover:bg-[#EBE4D8] text-[#181715] text-xs sm:text-sm font-medium px-5 transition-colors"
              >
                <a
                  href="https://drive.google.com/file/d/1VZQrrhFqv1eo_pYZmuJv_TzGL6RmMbaV/view?preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-[#A3432F]" /> Download Resume
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
              <span className="text-xs uppercase tracking-widest text-[#716B61] font-mono font-bold">Connect</span>
              <div className="h-px w-8 bg-[#D5CCBC]" />
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
                    className="w-9 h-9 grid place-items-center rounded-md border border-[#D5CCBC] bg-[#F8F4EC] text-[#716B61] hover:text-[#A3432F] hover:border-[#A3432F]/50 transition-all shadow-subtle"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Handcrafted Editorial Developer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-md border border-[#D5CCBC] bg-[#F8F4EC] p-6 shadow-card space-y-5">
              
              {/* Header Profile Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D5CCBC]">
                <div className="flex items-center gap-3.5">
                  <ProfileAvatar />
                  <div>
                    <h3 className="font-bold text-base text-[#181715] leading-tight">Shiva Kasaudhan</h3>
                    <p className="text-xs text-[#716B61] font-mono">MCA Graduate • PSIT Kanpur • 8.46 CGPA</p>
                  </div>
                </div>
                <span className="p-1.5 rounded-md bg-[#F2EDE3] border border-[#D5CCBC] text-[#D6A756]">
                  <UserCheck className="w-4 h-4" />
                </span>
              </div>

              {/* Craftsmanship Highlights */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-md bg-[#F2EDE3] border border-[#D5CCBC] space-y-1">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#A3432F] font-bold">
                    <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5" /> Core Tech</span>
                    <span>React + JS + Java</span>
                  </div>
                  <p className="text-[#716B61] text-[11px] leading-relaxed">
                    React.js, JavaScript, Java, SQL, HTML5, CSS3, Bootstrap, Node.js, Express & MongoDB.
                  </p>
                </div>

                <div className="p-3 rounded-md bg-[#F2EDE3] border border-[#D5CCBC] space-y-1">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#A3432F] font-bold">
                    <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> Flagship Build</span>
                    <span>HireLens AI</span>
                  </div>
                  <p className="text-[#716B61] text-[11px] leading-relaxed">
                    Full-stack AI Interview Prep platform with Gemini AI API analysis, JWT authentication & REST APIs.
                  </p>
                </div>
              </div>

              {/* Personal Motto Quote */}
              <div className="p-3.5 rounded-md bg-[#F2EDE3] border border-[#D5CCBC] text-xs">
                <p className="text-[#181715]/90 font-serif italic leading-relaxed text-sm">
                  "Passionate about creating efficient, responsive web applications with clean code and intuitive user experiences."
                </p>
              </div>

              {/* Quick stats pills */}
              <div className="grid grid-cols-4 gap-1.5 text-center pt-1 font-mono">
                <div className="p-2 rounded-md bg-[#F2EDE3] border border-[#D5CCBC]">
                  <div className="text-sm font-bold text-[#A3432F]">8.46</div>
                  <div className="text-[8px] text-[#716B61] uppercase">MCA CGPA</div>
                </div>
                <div className="p-2 rounded-md bg-[#F2EDE3] border border-[#D5CCBC]">
                  <div className="text-sm font-bold text-[#A3432F]">100+</div>
                  <div className="text-[8px] text-[#716B61] uppercase">DSA Solved</div>
                </div>
                <div className="p-2 rounded-md bg-[#F2EDE3] border border-[#D5CCBC]">
                  <div className="text-sm font-bold text-[#A3432F]">100%</div>
                  <div className="text-[8px] text-[#716B61] uppercase">Attendance</div>
                </div>
                <div className="p-2 rounded-md bg-[#F2EDE3] border border-[#D5CCBC]">
                  <div className="text-sm font-bold text-[#A3432F]">3+</div>
                  <div className="text-[8px] text-[#716B61] uppercase">Featured Projects</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
