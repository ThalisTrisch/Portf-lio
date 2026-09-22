import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Conhecimentos', href: '#conhecimentos' },
    { label: 'Sobre mim', href: '#sobre' },
    { label: 'Contatos', href: '#contatos' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          id="navbar-brand-link"
          className="group flex items-center gap-2.5 text-neutral-900 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center font-mono text-xs font-bold text-neutral-800 group-hover:border-neutral-500 transition-colors">
            TT
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
              {PERSONAL_INFO.title}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100/90 border border-neutral-200/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                id={`nav-link-${item.href.replace('#', '')}`}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-neutral-900 font-semibold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/70'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-medium text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Disponível</span>
          </div>

          {/* Social icons */}
          <a
            href="https://github.com/ThalisTrisch"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-link"
            aria-label="GitHub de Thalis Trisch"
            className="p-2 text-neutral-600 hover:text-neutral-950 transition-colors rounded-lg hover:bg-neutral-100"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/thalis-trisch-b2879a220/"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-link"
            aria-label="LinkedIn de Thalis Trisch"
            className="p-2 text-neutral-600 hover:text-neutral-950 transition-colors rounded-lg hover:bg-neutral-100"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-button"
            aria-label="Abrir menu"
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-neutral-200 bg-white/95 backdrop-blur-xl px-4 py-4 mt-2"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-neutral-200 flex items-center justify-between px-2">
                <span className="text-xs text-neutral-500">Status</span>
                <span className="text-xs font-mono text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Disponível para trabalho
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
