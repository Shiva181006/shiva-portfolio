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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
    setOpen(false);
  };

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
          ? "bg-[#0E2A2B]/95 backdrop-blur-md border-b border-[#1C4E50] shadow-subtle py-3"
          : "bg-transparent py-4.5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand identity */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group font-bold text-base sm:text-lg tracking-tight"
        >
          <span className="w-8 h-8 rounded bg-[#E8B84B] grid place-items-center text-[#0E2A2B] font-mono text-xs font-bold transition-transform group-hover:scale-105">
            SK
          </span>
          <span className="text-[#F4EFE6] group-hover:text-[#E8B84B] transition-colors font-sans">
            Shiva <span className="text-[#E8B84B] font-serif italic text-base font-normal">Kasaudhan</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 bg-[#133637] border border-[#1C4E50] rounded-full px-3 py-1 shadow-subtle">
          {links.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-[#0E2A2B] font-bold"
                      : "text-[#A1B5B3] hover:text-[#F4EFE6]"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="navactive_studio"
                      className="absolute inset-0 -z-10 rounded-full bg-[#E8B84B]"
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
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-[#E8B84B] hover:bg-[#D4A338] text-[#0E2A2B] rounded-md shadow-subtle border-0 text-xs font-bold px-4 transition-colors"
          >
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="flex items-center gap-1">
              Contact <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Button>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-md w-9 h-9 hover:bg-[#133637] text-[#F4EFE6]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5 text-[#F4EFE6]" /> : <Menu className="w-5 h-5 text-[#F4EFE6]" />}
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
            className="md:hidden overflow-hidden border-b border-[#1C4E50] bg-[#0E2A2B] px-4 py-4 shadow-md"
          >
            <ul className="flex flex-col gap-1 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className={`block px-4 py-2.5 rounded-md font-medium transition-colors ${
                      active === l.href.slice(1)
                        ? "bg-[#E8B84B] text-[#0E2A2B] font-bold"
                        : "text-[#A1B5B3] hover:text-[#F4EFE6] hover:bg-[#133637]"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-[#1C4E50] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A1B5B3]">📍 Gurgaon, Haryana</span>
              <Button
                asChild
                size="sm"
                className="bg-[#E8B84B] hover:bg-[#D4A338] text-[#0E2A2B] rounded-md text-xs font-bold px-4"
              >
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
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
