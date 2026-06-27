import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-medium text-foreground">Anmol Mishra</span>. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-sm text-muted-foreground text-center">
          Built with React • Tailwind CSS • Framer Motion
        </p>

        {/* Right */}
        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2 rounded-full border border-border hover:bg-primary hover:text-white transition-all duration-300"
        >
          <ArrowUp size={18} />
        </a>

      </div>
    </footer>
  );
};