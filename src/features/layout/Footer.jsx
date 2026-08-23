export function Footer() {
  return (
    <footer className="border-t border-[#1C4E50] bg-[#0E2A2B] py-8 px-4 sm:px-6 lg:px-8 text-center font-mono text-xs text-[#A1B5B3]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Shiva Kasaudhan • Editorial Engineering Notebook
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/Shiva181006" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8B84B] transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shiva-kasaudhan-153858241/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8B84B] transition-colors">
            LinkedIn
          </a>
          <a href="mailto:shivakasaudhan817@gmail.com" className="hover:text-[#E8B84B] transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
