import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Boxes,
  Database,
  Code2,
  FileCode,
  Layout,
  Palette,
  Sparkles,
  HardDrive,
  Coffee,
  Binary,
  Layers,
  Network,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/portfolioData';
import { Technology } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'backend' | 'frontend' | 'database'>('all');
  const [selectedSkill, setSelectedSkill] = useState<Technology | null>(null);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4 text-neutral-800' };
    switch (iconName) {
      case 'Terminal': return <Terminal {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'HardDrive': return <HardDrive {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Binary': return <Binary {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Network': return <Network {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  const filteredSkills = TECHNOLOGIES.filter(
    skill => selectedCategory === 'all' || skill.category === selectedCategory
  );

  return (
    <section id="conhecimentos" className="py-20 px-4 sm:px-6 relative bg-neutral-100/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
              <span>Stack & Tecnologias</span>
            </div>
            {/* Title decreased slightly as requested */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Conhecimentos Técnicos
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 max-w-xl">
              Linguagens, frameworks e bancos de dados utilizados no desenvolvimento de soluções práticas e funcionais.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 sm:mt-0 flex flex-wrap gap-1 bg-white p-1 rounded-xl border border-neutral-200 shadow-2xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-neutral-900 text-white font-semibold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Todas ({TECHNOLOGIES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('backend')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'backend'
                  ? 'bg-neutral-900 text-white font-semibold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setSelectedCategory('frontend')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'frontend'
                  ? 'bg-neutral-900 text-white font-semibold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setSelectedCategory('database')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'database'
                  ? 'bg-neutral-900 text-white font-semibold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Bancos de Dados
            </button>
          </div>
        </div>

        {/* Skills Grid - Decreased card size and removed subtitles/descriptions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredSkills.map((tech, index) => {
            const isSelected = selectedSkill?.name === tech.name;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => setSelectedSkill(isSelected ? null : tech)}
                className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white border-neutral-900 shadow-sm ring-1 ring-neutral-900'
                    : 'bg-white border-neutral-200 hover:border-neutral-400 hover:shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="p-2 rounded-lg bg-neutral-100 border border-neutral-200 group-hover:bg-neutral-200/70 transition-colors">
                    {getIcon(tech.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">
                    {tech.category === 'database' ? 'DB' : tech.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 leading-snug">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                    {tech.experienceLevel || 'Prático'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Skill Quick Info Banner */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-xl bg-white border border-neutral-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs"
          >
            <div>
              <p className="text-[11px] font-mono uppercase text-neutral-500 mb-0.5">Foco Selecionado</p>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                {selectedSkill.name} — <span className="font-normal text-neutral-600">{selectedSkill.description}</span>
              </h4>
            </div>
            <a
              href="#projetos"
              className="px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-800 shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <span>Ver projetos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
