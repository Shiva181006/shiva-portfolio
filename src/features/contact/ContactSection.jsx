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
      toast.success("Connection packaged!", {
        description: "Opening system mail client parameters."
      });
      const form = e.currentTarget;
      const data = new FormData(form);
      const subject = encodeURIComponent(`Portfolio Contact: ${data.get("name")}`);
      const body = encodeURIComponent(
        `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
      );
      window.location.href = `mailto:shivakasaudhan817@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 px-6 layout-grid">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" /> Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's <span className="text-gradient font-sans font-bold">build something</span> together
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-sm">
            Have a project, an internship, or just want to chat about AI models? My inbox is open.
          </p>
        </motion.div>

        {/* Layout split */}
        <div className="grid lg:grid-cols-5 gap-8">
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
              { icon: MapPin, label: "Location", value: "Kanpur, India", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 hover:border-primary/40 hover:shadow-glow transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow shrink-0 text-primary-foreground">
                  <item.icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-mono">{item.label}</div>
                  <div className="font-bold text-xs mt-0.5 text-foreground">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Shiva181006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex-1 h-11 grid place-items-center rounded-xl border border-border bg-card/60 backdrop-blur hover:border-primary/40 hover:bg-accent transition-all text-muted-foreground hover:text-foreground"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shiva-kasaudhan-153858241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-1 h-11 grid place-items-center rounded-xl border border-border bg-card/60 backdrop-blur hover:border-primary/40 hover:bg-accent transition-all text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="w-4.5 h-4.5" />
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
            className="lg:col-span-3 rounded-3xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 space-y-4 font-sans"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2 block">
                  Name
                </label>
                <Input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-background/50 border-border h-11 text-xs"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2 block">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="bg-background/50 border-border h-11 text-xs"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2 block">
                Message
              </label>
              <Textarea
                name="message"
                required
                rows={4}
                placeholder="Connection message template details..."
                className="bg-background/50 border-border resize-none text-xs"
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
