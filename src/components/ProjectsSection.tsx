import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, LayoutGrid, Sparkles, Filter, X, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('todos');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'spotlight'>('grid');
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  // Extract all distinct technologies used in projects
  const allProjectTechs = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return Array.from(techs);
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'todos' || project.category === selectedCategory;

      // Tech filter
      const matchesTech = !selectedTech || project.technologies.includes(selectedTech);

      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'mobile', label: 'Mobile' },
  ];

  return (
    <section id="projetos" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
              <span>Portfólio de Trabalhos</span>
            </div>
            {/* Title decreased slightly */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Projetos Desenvolvidos
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 max-w-xl">
              Aplicações web, APIs e experimentos práticos com foco em organização de código, banco de dados e responsividade.
            </p>
          </div>

          {/* View mode toggle (Grid vs Spotlight) */}
          <div className="mt-4 sm:mt-0 flex items-center gap-1 bg-white p-1 rounded-xl border border-neutral-200 shadow-2xs">
            <button
              onClick={() => setViewMode('grid')}
              id="view-grid-btn"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-neutral-900 text-white font-semibold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grade</span>
            </button>
            <button
              onClick={() => setViewMode('spotlight')}
              id="view-spotlight-btn"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'spotlight'
                  ? 'bg-neutral-900 text-white font-semibold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Destaque</span>
            </button>
          </div>
        </div>

        {/* Interactive Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-3 justify-between items-start md:items-center mb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`category-tab-${cat.id}`}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-900 text-white font-semibold shadow-2xs'
                    : 'bg-white text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar projeto ou tecnologia..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Interactive Technology Chips Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 text-xs scrollbar-none">
          <span className="text-neutral-500 font-mono text-[11px] shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Filtrar:
          </span>
          {selectedTech && (
            <button
              onClick={() => setSelectedTech(null)}
              className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-300 text-neutral-700 text-[11px] font-mono flex items-center gap-1 hover:bg-neutral-200"
            >
              <span>Limpar ({selectedTech})</span>
              <X className="w-3 h-3" />
            </button>
          )}
          {allProjectTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors shrink-0 ${
                selectedTech === tech
                  ? 'bg-neutral-900 text-white font-semibold'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Content Display: Grid or Spotlight */}
        {filteredProjects.length === 0 ? (
          <div className="py-14 text-center bg-white rounded-2xl border border-dashed border-neutral-300">
            <p className="text-neutral-500 text-sm mb-3">Nenhum projeto encontrado com os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSelectedTech(null);
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-xs text-white hover:bg-neutral-800 transition-colors"
            >
              Resetar todos os filtros
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        ) : (
          /* Spotlight / Interactive Showcase Mode */
          <div className="bg-white border border-neutral-300 rounded-3xl p-6 sm:p-8 shadow-sm">
            {/* Quick selector tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-neutral-200">
              {filteredProjects.map((p, idx) => {
                const isSelected = idx === (spotlightIndex % filteredProjects.length);
                return (
                  <button
                    key={p.id}
                    onClick={() => setSpotlightIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all shrink-0 flex items-center gap-2 ${
                      isSelected
                        ? 'bg-neutral-900 text-white font-semibold shadow-2xs'
                        : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950 border border-neutral-200'
                    }`}
                  >
                    <span>{p.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Spotlight Item */}
            {(() => {
              const currentProject = filteredProjects[spotlightIndex % filteredProjects.length];
              if (!currentProject) return null;

              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <div
                      onClick={() => setActiveProject(currentProject)}
                      className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 cursor-pointer group"
                    >
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 shadow-xs">
                          Clique para expandir
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-neutral-100 text-neutral-700 border border-neutral-200">
                          {currentProject.category === 'fullstack'
                            ? 'Full Stack'
                            : currentProject.category === 'backend'
                            ? 'Backend'
                            : currentProject.category === 'mobile'
                            ? 'Mobile'
                            : 'Frontend'}
                        </span>
                        {currentProject.liveUrl && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Online
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-1.5">
                        {currentProject.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mb-3 font-medium">
                        {currentProject.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-5">
                        {currentProject.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {currentProject.technologies.map(t => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200">
                      <button
                        onClick={() => setActiveProject(currentProject)}
                        className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors shadow-xs"
                      >
                        Ver Detalhes
                      </button>
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white text-neutral-700 hover:text-neutral-950 border border-neutral-300 transition-colors shadow-2xs"
                        title="Ver no GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:text-emerald-800 border border-emerald-200 transition-colors shadow-2xs"
                          title="Acessar projeto"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Modal for In-Depth Inspection */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};
