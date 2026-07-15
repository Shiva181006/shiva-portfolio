import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Prof. R. Sharma",
    role: "MCA Faculty, PSIT",
    text: "Shiva consistently demonstrates a deep curiosity for problem-solving. His project work shows a level of polish rare among students.",
    rating: 5,
    initial: "RS",
    color: "from-amber-500 to-yellow-600",
  },
  {
    name: "Aman Verma",
    role: "Senior Developer, Collaborator",
    text: "Worked with Shiva on an open-source UI project. Clean code, asks great questions, and ships on time. Definitely a hire-worthy developer.",
    rating: 5,
    initial: "AV",
    color: "from-yellow-600 to-amber-500",
  },
  {
    name: "Priya Singh",
    role: "Hackathon Teammate",
    text: "Our team won 2nd place because of Shiva's calm execution under pressure. Knows React inside-out and is always learning new backend concepts.",
    rating: 5,
    initial: "PS",
    color: "from-amber-500 to-yellow-500",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" /> Kind Words
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What people <span className="text-gradient font-sans font-bold">say about me</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xl hover:border-primary/30 transition-all overflow-hidden group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-primary/20 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-border/20 mt-6 shrink-0">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} grid place-items-center text-xs font-bold text-primary-foreground shadow-glow select-none`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-xs text-foreground">{t.name}</div>
                  <div className="text-[10px] text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
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
