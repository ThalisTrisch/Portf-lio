import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 py-10 px-4 sm:px-6 bg-white text-xs text-neutral-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Left branding */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          <span className="font-semibold text-neutral-800">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-neutral-300">•</span>
          <span className="font-mono text-[11px] text-neutral-500">
            {PERSONAL_INFO.title}
          </span>
        </div>

        {/* Middle Credits */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500">
          <span>Copyright © {new Date().getFullYear()} Thalis Trisch</span>
          <span>•</span>
          <span>IFSUL Gravataí</span>
        </div>

        {/* Right Quick Links & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ThalisTrisch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/thalis-trisch-b2879a220/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="p-1.5 px-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            aria-label="Voltar ao início da página"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono hidden sm:inline">Topo</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
