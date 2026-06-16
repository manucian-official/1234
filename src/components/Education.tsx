import React from 'react';
import { Trophy, GraduationCap, Calendar, Award, Star, CheckCircle2, Medal, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { educationStages, achievements } from '../data';

export default function Education() {
  const [selectedScope, setSelectedScope] = React.useState<string>('All');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  const filteredAchievements = selectedScope === 'All' 
    ? achievements 
    : achievements.filter(ach => ach.scope === selectedScope);

  const scopeTabs = [
    { label: 'Tất cả', value: 'All' },
    { label: 'Cấp Quốc gia', value: 'National' },
    { label: 'Cấp Thành phố', value: 'City' },
    { label: 'Cấp Trường/Quận', value: 'School' }
  ];

  const getScopeBadge = (scope: string) => {
    switch (scope) {
      case 'National':
        return <span className="px-2.5 py-1 bg-[#222] text-white border border-[#333] rounded-lg text-xs font-mono font-medium uppercase tracking-wider">Chọn lọc Quốc gia</span>;
      case 'City':
        return <span className="px-2.5 py-1 bg-[#151515] text-[#999] border border-[#222] rounded-lg text-xs font-mono font-medium uppercase tracking-wider">Cấp Thành phố</span>;
      default:
        return <span className="px-2.5 py-1 bg-[#0d0d0d] text-[#666] border border-[#1a1a1a] rounded-lg text-xs font-mono font-medium uppercase tracking-wider">Cấp Trường</span>;
    }
  };

  return (
    <section id="education" className="py-12 md:py-20 border-t border-[#1a1a1a]">
      <div className="space-y-12">
        
        {/* Academic timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left section: Education stages */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0d0d0d] border border-[#333] text-white rounded-xl">
                <GraduationCap className="w-5 h-5 text-[#888]" />
              </div>
              <h2 className="font-serif font-light text-2xl text-white tracking-tight">Học vấn & Trường học</h2>
            </div>
            
            <div id="education-timeline" className="relative pl-6 border-l border-[#1a1a1a] space-y-10">
              {educationStages.map((stage, idx) => (
                <div key={stage.id} id={`education-stage-${stage.id}`} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-white border-4 border-[#050505] shadow-sm" />
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-semibold text-white bg-[#151515] border border-[#222] px-2 py-1 rounded">
                      {stage.period}
                    </span>
                    <h3 className="font-serif italic text-lg text-white mt-2 font-normal">{stage.schoolName}</h3>
                    <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#888] font-mono uppercase">{stage.level} {stage.specializedClass && `・ ${stage.specializedClass}`}</p>
                    
                    {stage.gpa && (
                      <p className="text-sm font-medium text-[#c5c6c0] flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> GPA Học thuật: {stage.gpa}
                      </p>
                    )}

                    <p className="text-[#999] text-xs sm:text-sm leading-relaxed mt-2 font-light">{stage.details}</p>

                    <div className="mt-4 flex flex-col gap-2">
                      <span className="text-[10px] font-mono text-[#555] font-semibold uppercase tracking-wider">Điểm nhấn nổi bật:</span>
                      <ul className="space-y-1.5 pl-1.5">
                        {stage.highlights.map((hl, i) => (
                          <li key={i} className="text-[#888] text-xs flex items-start gap-2 leading-relaxed">
                            <Star className="w-3.5 h-3.5 text-slate-400 fill-slate-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right section: Achievements & Awards */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0d0d0d] border border-[#333] text-white rounded-xl">
                  <Trophy className="w-5 h-5 text-[#888]" />
                </div>
                <h2 className="font-serif font-light text-2xl text-white tracking-tight">Bảng vàng Thành tích</h2>
              </div>
            </div>

            {/* Scope Filter tabs */}
            <div className="flex flex-wrap gap-1 p-1 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl max-w-max">
              {scopeTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedScope(tab.value)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedScope === tab.value
                      ? 'bg-white text-black font-semibold'
                      : 'text-[#888] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Achievements vertical list */}
            <motion.div 
              id="achievements-scroller"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {filteredAchievements.length > 0 ? (
                filteredAchievements.map((ach) => (
                  <motion.div
                    key={ach.id}
                    variants={itemVariants}
                    layout
                    className={`p-5 rounded-2xl bg-[#0d0d0d] border border-[#1a1a1a] flex gap-4 items-start relative overflow-hidden transition-all hover:border-[#333]`}
                  >
                    {/* Left Colored Ribbon Indicator */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                      ach.scope === 'National' ? 'bg-white' : 
                      ach.scope === 'City' ? 'bg-slate-400' : 'bg-[#333]'
                    }`} />

                    <div className="p-2.5 rounded-xl bg-[#111] border border-[#222] text-white shrink-0">
                      <Medal className="w-5 h-5 text-[#888]" />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-serif italic font-medium text-base text-white leading-snug">
                          {ach.title}
                        </h3>
                        {getScopeBadge(ach.scope)}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[#666] text-xs font-mono">
                        <span className="text-[#888] font-semibold">{ach.organization}</span>
                        <span className="text-[#333]">•</span>
                        <span>Năm {ach.year}</span>
                      </div>
                      <p className="text-xs text-[#888] leading-relaxed pt-1 font-light">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 border border-[#1a1a1a] bg-[#0d0d0d] rounded-2xl text-[#555] font-mono text-xs uppercase tracking-wider">
                  Không tìm thấy thành tích nào thỏa mãn bộ lọc.
                </div>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
