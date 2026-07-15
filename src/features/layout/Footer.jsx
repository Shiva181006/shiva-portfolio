export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-8 px-6 text-center select-none text-muted-foreground font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Shiva Kasaudhan. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Shiva181006" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shiva-kasaudhan-153858241/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
