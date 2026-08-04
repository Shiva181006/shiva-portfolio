export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-8 px-4 sm:px-6 lg:px-8 text-center font-mono text-xs text-muted-foreground">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Shiva Kasaudhan • Handcrafted Studio Portfolio
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/Shiva181006" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shiva-kasaudhan-153858241/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="mailto:shivakasaudhan817@gmail.com" className="hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
