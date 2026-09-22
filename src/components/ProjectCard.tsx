import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Info } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 transition-all duration-300 shadow-2xs hover:shadow-md"
    >
      {/* Top Image Preview */}
      <div
        onClick={() => onSelect(project)}
        className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden cursor-pointer"
      >
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-300" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 shadow-2xs">
            {project.category === 'fullstack'
              ? 'Full Stack'
              : project.category === 'backend'
              ? 'Backend'
              : project.category === 'mobile'
              ? 'Mobile'
              : 'Frontend'}
          </span>
        </div>

        {/* Live indicator if deployed */}
        {project.liveUrl && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 backdrop-blur-md border border-emerald-200 text-emerald-800 flex items-center gap-1 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Online
            </span>
          </div>
        )}

        {/* Overlay hover prompt */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/20 backdrop-blur-[1px]">
          <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs text-neutral-900 font-medium flex items-center gap-1.5 shadow-sm">
            <Info className="w-3.5 h-3.5 text-neutral-600" />
            <span>Ver Detalhes</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            {/* Title font size slightly decreased */}
            <h3
              onClick={() => onSelect(project)}
              className="text-base font-bold text-neutral-900 tracking-tight cursor-pointer hover:text-neutral-600 transition-colors"
            >
              {project.title}
            </h3>
          </div>

          <p className="text-xs font-medium text-neutral-500 mb-2">
            {project.subtitle}
          </p>

          <p className="text-xs text-neutral-600 line-clamp-3 mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-100 text-neutral-700 border border-neutral-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-100 text-neutral-500 border border-neutral-200">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Actions Bar */}
          <div className="pt-3 border-t border-neutral-200 flex items-center justify-between gap-2">
            <button
              onClick={() => onSelect(project)}
              id={`project-details-btn-${project.id}`}
              className="text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1 group/btn"
            >
              <span>Detalhes</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>

            <div className="flex items-center gap-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-github-btn-${project.id}`}
                aria-label={`Código no GitHub de ${project.title}`}
                className="p-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                title="Ver no GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-live-btn-${project.id}`}
                  aria-label={`Demonstração online de ${project.title}`}
                  className="p-1.5 rounded-lg text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                  title="Acessar projeto online"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
