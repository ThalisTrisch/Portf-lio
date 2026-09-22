import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Check, Copy, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleCopyRepo = () => {
    if (!project) return;
    navigator.clipboard.writeText(project.githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden my-8 z-10"
          >
            {/* Header image / screenshot preview */}
            <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden border-b border-neutral-200">
              <img
                src={project.image}
                alt={`Screenshot de ${project.title}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                id="modal-close-button"
                aria-label="Fechar detalhes do projeto"
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Category tag */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 text-neutral-300">
                  {project.category === 'fullstack'
                    ? 'Full Stack'
                    : project.category === 'backend'
                    ? 'Backend & API'
                    : project.category === 'mobile'
                    ? 'Mobile App'
                    : 'Frontend & UI'}
                </span>
                {project.liveUrl && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 max-h-[60vh] overflow-y-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-1">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 mb-5">
                {project.subtitle}
              </p>

              {/* Long Description */}
              <div className="space-y-3 mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Sobre o Projeto & Arquitetura</span>
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 mb-5 bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-600 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Destaques Técnicos</span>
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2.5">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="modal-live-link"
                    className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <span>Acessar Online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-github-link"
                  className="px-4 py-2 rounded-xl bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-300 transition-colors font-medium text-xs sm:text-sm flex items-center gap-2 shadow-2xs"
                >
                  <Github className="w-4 h-4" />
                  <span>Repositório GitHub</span>
                </a>

                <button
                  onClick={handleCopyRepo}
                  id="modal-copy-repo-btn"
                  className="px-3 py-2 rounded-xl bg-white hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 border border-neutral-300 transition-colors text-xs font-mono flex items-center gap-1.5 shadow-2xs"
                  title="Copiar link do repositório"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
