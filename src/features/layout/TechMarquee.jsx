import { motion } from "framer-motion";

const techs = [
  "React.js", "JavaScript", "Java", "SQL", "HTML5", "CSS3", "Bootstrap",
  "Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "JWT Auth",
  "Gemini AI", "Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"
];

function Row({ reverse = false, speed = 35 }) {
  const list = [...techs, ...techs];
  return (
    <div className="overflow-hidden py-2 select-none [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-3 whitespace-nowrap w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            className="px-4 py-1.5 rounded-full border border-[#1C4E50] bg-[#133637] text-xs font-mono text-[#A1B5B3] hover:text-[#F4EFE6] hover:border-[#E8B84B]/50 transition-colors"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="relative py-8 border-y border-[#1C4E50] bg-[#0E2A2B] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-3">
          <span className="text-[10px] font-mono text-[#E8B84B] font-bold uppercase tracking-widest">
            ⚡ Tech Stack & Core Technologies
          </span>
        </div>
        <Row speed={35} />
        <Row reverse speed={40} />
      </div>
    </section>
  );
}
