import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { toast } from "sonner";

export function ContactSection() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Opening email client!", {
        description: "Drafting message to Shiva Kasaudhan."
      });
      const form = e.currentTarget;
      const data = new FormData(form);
      const subject = encodeURIComponent(`Portfolio Contact: ${data.get("name")}`);
      const body = encodeURIComponent(
        `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
      );
      window.location.href = `mailto:shivakasaudhan817@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    }, 500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Let's <span className="text-gradient">connect & collaborate</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Interested in hiring me for software development roles, internships, or technical projects? Drop a message below.
          </p>
        </motion.div>

        {/* Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "shivakasaudhan817@gmail.com",
                href: "mailto:shivakasaudhan817@gmail.com",
              },
              { icon: Phone, label: "Phone", value: "+91 73984 19325", href: "tel:+917398419325" },
              { icon: MapPin, label: "Location", value: "Kanpur, Uttar Pradesh, India", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="craft-card p-4.5 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <item.icon className="w-4.5 h-4.5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] text-muted-foreground font-mono uppercase">{item.label}</div>
                  <div className="font-bold text-xs sm:text-sm mt-0.5 text-foreground truncate">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Shiva181006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex-1 h-11 grid place-items-center rounded-xl border border-border bg-card hover:bg-accent text-muted-foreground hover:text-foreground transition-colors font-mono text-xs font-semibold"
              >
                <span className="flex items-center gap-1.5"><Github className="w-4 h-4" /> GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shiva-kasaudhan-153858241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-1 h-11 grid place-items-center rounded-xl border border-border bg-card hover:bg-accent text-muted-foreground hover:text-foreground transition-colors font-mono text-xs font-semibold"
              >
                <span className="flex items-center gap-1.5"><Linkedin className="w-4 h-4" /> LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 craft-card p-6 sm:p-8 space-y-4 font-sans"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block font-bold">
                  Your Name
                </label>
                <Input
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="bg-background border-border h-11 text-xs rounded-xl focus-visible:ring-primary"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block font-bold">
                  Your Email
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="bg-background border-border h-11 text-xs rounded-xl focus-visible:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block font-bold">
                Your Message
              </label>
              <Textarea
                name="message"
                required
                rows={4}
                placeholder="Share your opportunity or project details..."
                className="bg-background border-border resize-none text-xs rounded-xl focus-visible:ring-primary"
              />
            </div>

            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-95 shadow-glow border-0 rounded-xl font-semibold text-xs py-3"
            >
              {sending ? "Sending..." : (
                <span className="flex items-center justify-center gap-2">
                  Send Message <Send className="w-3.5 h-3.5" />
                </span>
              )}
            </Button>
          </motion.form>

        </div>

      </div>
    </section>
  );
}
