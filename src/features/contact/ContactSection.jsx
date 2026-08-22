import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { toast } from "sonner";

export function ContactSection() {
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    try {
      // Direct FormSubmit background dispatch - 100% reliable, zero public key errors!
      const res = await fetch("https://formsubmit.co/ajax/shivakasaudhan817@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Portfolio Contact from ${name}`,
          _captcha: "false",
        }),
      });

      const data = await res.json();

      if (res.ok && (data.success === "true" || data.success === true)) {
        toast.success("Message sent directly to Shiva's inbox!", {
          description: "Thank you for reaching out! Shiva will reply to your email soon.",
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
        });
        form.reset();
      } else {
        toast.error("Message could not be sent. Please try again.", {
          description: "Alternatively, feel free to email me directly at shivakasaudhan817@gmail.com.",
        });
        // Retain user input on failure - do not reset form
      }
    } catch (err) {
      console.error("Submission Error:", err);
      toast.error("Message could not be sent due to network error.", {
        description: "Please check your internet connection and try again or email shivakasaudhan817@gmail.com.",
      });
      // Retain user input on failure - do not reset form
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background bg-stone-dots bg-emerald-glow-top overflow-hidden">
      {/* Soft ambient background wash */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[350px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Let's <span className="text-primary whitespace-nowrap">connect & collaborate</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Interested in hiring me for frontend development or software developer roles? Drop a message below.
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
              { icon: MapPin, label: "Location", value: "Gurgaon, Haryana, India", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="craft-card p-4.5 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0 group-hover:scale-105 transition-transform">
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
                className="flex-1 h-11 grid place-items-center rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors font-mono text-xs font-semibold"
              >
                <span className="flex items-center gap-1.5"><Github className="w-4 h-4" /> GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shiva-kasaudhan-153858241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-1 h-11 grid place-items-center rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors font-mono text-xs font-semibold"
              >
                <span className="flex items-center gap-1.5"><Linkedin className="w-4 h-4" /> LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
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
                  className="bg-card border-border h-11 text-xs rounded-lg focus-visible:ring-primary"
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
                  className="bg-card border-border h-11 text-xs rounded-lg focus-visible:ring-primary"
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
                className="bg-card border-border resize-none text-xs rounded-lg focus-visible:ring-primary"
              />
            </div>

            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-xs py-3 border-0 transition-colors shadow-subtle"
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
