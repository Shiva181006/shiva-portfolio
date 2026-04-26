import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Prof. R. Sharma",
    role: "MCA Faculty, PSIT",
    text: "Shiva consistently demonstrates a deep curiosity for problem-solving. His project work shows a level of polish rare among students.",
    rating: 5,
    initial: "RS",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "Aman Verma",
    role: "Senior Developer, Startup",
    text: "Worked with Shiva on an open-source UI kit. Clean code, asks great questions, and ships on time. Definitely a hire-worthy mind.",
    rating: 5,
    initial: "AV",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Priya Singh",
    role: "Hackathon Teammate",
    text: "Our team won 2nd place because of Shiva's calm execution under pressure. Knows React inside-out and is always learning.",
    rating: 5,
    initial: "PS",
    color: "from-amber-500 to-pink-500",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" /> Kind Words
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            What people <span className="text-gradient">say about me</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Feedback from professors, peers, and collaborators I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-7 rounded-3xl border border-border bg-card/70 backdrop-blur-xl hover:border-primary/40 transition-all overflow-hidden group"
            >
              <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${t.color} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity`} />
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="relative text-foreground/90 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>
              <div className="relative flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} grid place-items-center text-sm font-bold text-white shadow-glow`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
