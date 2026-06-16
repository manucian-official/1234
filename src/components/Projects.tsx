import React from 'react';
import { Github, ExternalLink, Code2, Tag, Layers, CheckCircle2, X, Sparkles, FolderGit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  const categories = ['All', 'Software', 'AI & ML'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="projects" className="py-12 md:py-20 border-t border-[#1a1a1a]">
      <div className="space-y-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#888] font-mono text-xs font-semibold uppercase tracking-wider">
              <FolderGit2 className="w-4 h-4" />
              Sản phẩm tâm huyết
            </div>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-white tracking-tight">
              Dự án Cá nhân & Đội nhóm
            </h2>
            <p className="text-sm text-[#888] max-w-xl font-light">
              Nơi ý tưởng biến thành những dòng code thực thi, giải quyết các thách thức học đường và đời sống.
            </p>
          </div>

          {/* Filtering Categories */}
          <div className="flex bg-[#0d0d0d] border border-[#1a1a1a] p-1 rounded-xl max-w-max self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                {cat === 'All' ? 'Tất cả' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          id="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl overflow-hidden shadow-none transition-all flex flex-col h-full"
            >
              {/* Product Card Image Banner */}
              <div id={`project-image-box-${proj.id}`} className="relative h-48 w-full overflow-hidden bg-[#111]">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md text-[#e0e0e0] border border-[#222]/40 rounded-lg text-[10px] font-semibold tracking-widest font-mono uppercase">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="font-serif italic text-lg text-white group-hover:text-slate-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-[#888] text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#1a1a1a] space-y-4">
                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2.5 py-0.5 bg-[#111] border border-[#1e1e1e] text-[10px] text-[#888] rounded font-mono">
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-[#111] text-[10px] font-mono text-[#555] rounded">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions footer inside card */}
                  <div className="flex items-center justify-between">
                    <button
                      id={`project-details-btn-${proj.id}`}
                      onClick={() => setActiveProject(proj)}
                      className="text-xs font-mono font-bold text-white hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      XEM CHI TIẾT →
                    </button>
                    {proj.githubLink && (
                      <a 
                        id={`project-github-link-${proj.id}`}
                        href={proj.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#111] hover:bg-[#151515] border border-[#222] text-[#888] hover:text-white rounded-xl transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Overlay detail view */}
        <AnimatePresence>
          {activeProject && (
            <div id="project-detail-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative w-full max-w-3xl bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col z-10 text-[#e0e0e0]"
              >
                {/* Header Banner */}
                <div className="relative h-56 sm:h-64 w-full bg-[#111] shrink-0">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/30 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    id="close-project-modal"
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/45 hover:bg-black/60 text-white rounded-full transition-all cursor-pointer border border-[#222]"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                    <span className="px-2.5 py-1 bg-white text-black rounded text-[10px] font-mono tracking-wider font-semibold uppercase">
                      {activeProject.category}
                    </span>
                    <h3 className="font-serif italic font-medium text-xl sm:text-2xl tracking-tight mt-1.5">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Main body content (Scrollable area) */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-semibold text-[#555] uppercase tracking-wider">Mô tả chi tiết:</h4>
                    <p className="text-[#999] text-sm sm:text-base leading-relaxed font-light">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  {/* Role in project */}
                  <div className="bg-[#111] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 border border-[#1a1a1a]">
                    <div className="p-2 bg-[#151515] text-white border border-[#222] rounded-xl shrink-0 mt-0.5">
                      <Layers className="w-4 h-4 text-[#888]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono font-semibold text-[#555] uppercase tracking-wider">Vai trò đảm nhiệm:</h4>
                      <p className="text-xs sm:text-sm font-semibold text-[#e0e0e0] mt-1 uppercase tracking-wide font-mono">{activeProject.role}</p>
                    </div>
                  </div>

                  {/* Core Features list */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono font-semibold text-[#555] uppercase tracking-wider flex items-center gap-1">
                      <Code2 className="w-4 h-4 text-[#555] inline" /> Các chức năng trọng tâm:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeProject.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 p-3.5 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-[#888] text-xs sm:text-sm leading-snug font-light">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Full Tech Stack Tags */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-semibold text-[#555] uppercase tracking-wider">Công nghệ sử dụng:</h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {activeProject.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#151515] border border-[#222] text-[#888] text-xs font-medium rounded-lg font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Navigation bars */}
                <div className="p-4 sm:p-6 bg-[#0c0c0c] border-t border-[#1a1a1a] flex items-center justify-end gap-3 shrink-0">
                  {activeProject.githubLink && (
                    <a
                      id="modal-github-link"
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#111] hover:bg-[#151515] border border-[#222] text-[#888] hover:text-white rounded-xl text-xs font-semibold uppercase tracking-wider font-mono flex items-center gap-2 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Mã nguồn GitHub
                    </a>
                  )}
                  {activeProject.liveLink && activeProject.liveLink !== '#' && (
                    <a
                      id="modal-live-link"
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-white hover:bg-slate-100 text-black rounded-xl text-xs font-semibold uppercase tracking-wider font-mono flex items-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Trải nghiệm
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
