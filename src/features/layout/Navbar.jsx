import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider.jsx";
import { Button } from "@/components/ui/button.jsx";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map(l => l.href.slice(1));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/85 border-b border-border shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand identity */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group font-bold text-base sm:text-lg tracking-tight"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground font-mono text-xs font-extrabold shadow-glow group-hover:scale-105 transition-transform">
            SK
          </span>
          <span className="text-foreground group-hover:text-primary transition-colors">
            Shiva <span className="text-primary font-serif italic text-sm">Kasaudhan</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 bg-card/60 border border-border/80 rounded-full px-3 py-1 backdrop-blur-md">
          {links.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="navactive_studio"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Action Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full hover:bg-accent text-foreground w-9 h-9"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </Button>

          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-full shadow-glow border-0 text-xs font-semibold px-4"
          >
            <a href="#contact" className="flex items-center gap-1">
              Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Button>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full w-9 h-9 hover:bg-accent"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 py-4 shadow-xl"
          >
            <ul className="flex flex-col gap-1 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl font-medium transition-colors ${
                      active === l.href.slice(1)
                        ? "bg-primary/10 text-primary font-bold border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">📍 Gurgaon, Haryana</span>
              <Button
                asChild
                size="sm"
                className="bg-gradient-primary text-primary-foreground rounded-full text-xs font-semibold px-4"
              >
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
