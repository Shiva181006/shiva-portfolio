import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Prof. R. Sharma",
    role: "MCA Faculty, PSIT Kanpur",
    text: "Shiva consistently demonstrates a deep curiosity for problem-solving. His project work shows a level of polish, architectural structure, and detail rare among students.",
    rating: 5,
    initial: "RS",
  },
  {
    name: "Aman Verma",
    role: "Senior Developer & Collaborator",
    text: "Worked with Shiva on full-stack web modules. Clean code structure, asks thoughtful architectural questions, and delivers reliably. Highly recommended.",
    rating: 5,
    initial: "AV",
  },
  {
    name: "Priya Singh",
    role: "Hackathon Teammate",
    text: "Shiva excels under high pressure. Knows React and API routing thoroughly and approaches complex requirements with calm, methodical execution.",
    rating: 5,
    initial: "PS",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" /> Peer Reviews & Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            What mentors & collaborators <span className="text-gradient">say</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Feedback on execution, teamwork, and engineering work ethic.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="craft-card p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-primary/40 shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans italic">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-border mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center text-xs font-bold text-primary-foreground shadow-glow select-none">
                    {t.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-xs text-foreground">{t.name}</h3>
                    <p className="text-[10px] text-muted-foreground font-mono">{t.role}</p>
                  </div>
                </div>

                <div className="flex gap-0.5">
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
