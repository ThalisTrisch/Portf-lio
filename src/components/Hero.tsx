import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden bg-neutral-50"
    >
      {/* Subtle minimalist grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-300 text-xs text-neutral-700 mb-5 font-mono shadow-2xs"
            >
              <Terminal className="w-3.5 h-3.5 text-neutral-700" />
              <span>{PERSONAL_INFO.title}</span>
            </motion.div>

            {/* Main Headline - Decreased font size as requested */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] mb-5"
            >
              Construindo sistemas com{' '}
              <span className="text-neutral-600 font-semibold">
                clareza, arquitetura & foco.
              </span>
            </motion.h1>

            {/* Intro paragraph with clean unrepetitive copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8"
            >
              {PERSONAL_INFO.greeting} Conheça minha trajetória, projetos práticos e soluções que venho desenvolvendo na área de tecnologia e sistemas de informação.
            </motion.p>

            {/* Interactive Call to Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10"
            >
              <a
                href="#projetos"
                id="hero-explore-projects-btn"
                className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-xs flex items-center justify-center gap-2 group"
              >
                <span>Ver Projetos</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contatos"
                id="hero-contact-btn"
                className="px-5 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-800 font-medium text-sm hover:bg-neutral-100 transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-neutral-500" />
                <span>Entrar em Contato</span>
              </a>
            </motion.div>

            {/* Quick meta traits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-5 border-t border-neutral-200 flex flex-wrap gap-6 text-xs text-neutral-500 font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
                <span>IFSUL Gravataí • T.I. & ADS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span>Node.js • React • TypeScript • Bancos de Dados</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image / Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              <div className="relative bg-white border border-neutral-300 rounded-2xl p-3 overflow-hidden shadow-md">
                {/* Photo container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Foto de Thalis Trisch"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                    loading="eager"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />

                  {/* Overlay badge at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xs text-left">
                    <p className="text-xs font-semibold text-neutral-900">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="text-[11px] font-mono text-neutral-500">
                      Gravataí, RS • Brasil
                    </p>
                  </div>
                </div>

                {/* Social Quick Bar below photo */}
                <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs text-neutral-500">
                  <span className="font-mono text-[11px]">thalistrisch</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/ThalisTrisch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:text-neutral-950 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/thalis-trisch-b2879a220/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:text-neutral-950 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
