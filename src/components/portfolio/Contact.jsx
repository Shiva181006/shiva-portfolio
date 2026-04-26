import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message ready!", {
        description: "Email client opening — let's connect.",
      });
      const form = e.currentTarget;
      const data = new FormData(form);
      const subject = encodeURIComponent(`Portfolio: ${data.get("name")}`);
      const body = encodeURIComponent(
        `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
      );
      window.location.href = `mailto:shivakasaudhan817@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" /> Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">build something</span> together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project, an internship, or just want to chat about tech? My inbox is open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              { icon: MapPin, label: "Location", value: "Kanpur, India", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 hover:border-primary/40 hover:shadow-glow transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow shrink-0">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="font-medium text-sm">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Shiva181006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex-1 h-12 grid place-items-center rounded-xl border border-border bg-card/60 backdrop-blur hover:border-primary/40 hover:bg-accent transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shiva-kasaudhan-153858241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-1 h-12 grid place-items-center rounded-xl border border-border bg-card/60 backdrop-blur hover:border-primary/40 hover:bg-accent transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 block">
                  Name
                </label>
                <Input
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-background/50 border-border h-11"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 block">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="bg-background/50 border-border h-11"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 block">
                Message
              </label>
              <Textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project, idea or opportunity…"
                className="bg-background/50 border-border resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow border-0 rounded-xl"
            >
              {sending ? "Sending..." : (
                <>
                  Send Message <Send className="ml-1 w-4 h-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
