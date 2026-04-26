import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} <span className="text-foreground font-medium">Shiva Kasaudhan</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> using React, Tailwind & Framer Motion
        </div>
      </div>
    </footer>
  );
}
