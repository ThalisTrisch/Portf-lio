import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Compass, Code, CheckCircle, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 relative bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 pb-5 border-b border-neutral-200">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <span>Minha Trajetória</span>
          </div>
          {/* Section heading decreased slightly */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Sobre Mim & Formação
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Bio & Values */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xs">
              <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2.5">
                <Compass className="w-4.5 h-4.5 text-neutral-700" />
                <span>Perfil Profissional</span>
              </h3>

              <p className="text-sm text-neutral-700 leading-relaxed">
                {PERSONAL_INFO.aboutMe}
              </p>

              <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-600">
                  <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-600">
                  <GraduationCap className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSUL)</span>
                </div>
              </div>
            </div>

            {/* Core Competencies - Unrepetitive titles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 shadow-2xs">
                <h4 className="text-sm font-bold text-neutral-900 mb-1 flex items-center gap-2">
                  <Code className="w-4 h-4 text-neutral-700" />
                  <span>Arquitetura & APIs</span>
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Construção de rotas estruturadas, regras de negócio, autenticação e integrações seguras com Node.js e TypeScript.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 shadow-2xs">
                <h4 className="text-sm font-bold text-neutral-900 mb-1 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neutral-700" />
                  <span>Aplicações Web</span>
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Componentização modular em React com Tailwind CSS, focando em usabilidade, boa navegação e interfaces rápidas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic & Technical Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-7 shadow-2xs">
              <h3 className="text-lg font-bold text-neutral-900 mb-5 flex items-center gap-2.5">
                <BookOpen className="w-4.5 h-4.5 text-neutral-700" />
                <span>Educação no IFSUL</span>
              </h3>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-200">
                {TIMELINE.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Dot on line */}
                    <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-900 ring-4 ring-neutral-50" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white text-neutral-800 border border-neutral-200">
                        {item.period}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-700 font-medium">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-neutral-500 mb-1.5">
                      {item.institution}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#contatos"
                className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2 shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Conversar sobre Oportunidades</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
