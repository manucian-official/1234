import React from 'react';
import { HeartHandshake, Users, Sparkles, BookOpen, Music, ShieldAlert, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { activities } from '../data';

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

  const categories = [
    { label: 'Tất cả', value: 'All' },
    { label: 'Câu lạc bộ', value: 'Club' },
    { label: 'Tình nguyện', value: 'Volunteering' },
    { label: 'Nghệ thuật', value: 'Arts' },
  ];

  const filteredActivities = selectedCategory === 'All'
    ? activities
    : activities.filter(act => act.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Club':
        return <Users className="w-4 h-4 text-[#888]" />;
      case 'Volunteering':
        return <HeartHandshake className="w-4 h-4 text-[#888]" />;
      default:
        return <Music className="w-4 h-4 text-[#888]" />;
    }
  };

  const getCategoryTheme = (category: string) => {
    return 'bg-[#151515] border-[#222] text-[#e0e0e0]';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="activities" className="py-12 md:py-20 border-t border-[#1a1a1a]">
      <div className="space-y-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#888] font-mono text-xs font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              Sự phát triển toàn diện
            </div>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-white tracking-tight">
              Hoạt động Ngoại khóa & Sự kiện
            </h2>
            <p className="text-sm text-[#888] max-w-xl font-light">
              Nơi nuôi dưỡng tâm hồn, rèn luyện kỹ năng lãnh đạo và tinh thần phụng sự xã hội bên cạnh những giờ lập trình căng thẳng.
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex bg-[#0d0d0d] border border-[#1a1a1a] p-1 rounded-xl max-w-max self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Activities List / Grid */}
        <motion.div
          id="activities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredActivities.map((act) => (
            <motion.div
              key={act.id}
              variants={itemVariants}
              className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#222] transition-colors relative overflow-hidden"
            >
              {/* Card top row */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <div className={`p-2 rounded-xl border shrink-0 ${getCategoryTheme(act.category)}`}>
                      {getCategoryIcon(act.category)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#555] block tracking-wider">
                        {act.organization}
                      </span>
                      <h3 className="font-serif italic text-base sm:text-lg text-white mt-1">
                        {act.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[#666] text-xs font-mono">
                  <span className="px-2 py-0.5 bg-[#151515] border border-[#222]/50 rounded text-slate-300 font-semibold">
                    {act.role}
                  </span>
                  <span>•</span>
                  <span>{act.period}</span>
                </div>

                <p className="text-[#888] text-xs sm:text-sm leading-relaxed font-light">
                  {act.description}
                </p>

                {/* Achievements list bullets */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[#555] block">Đóng góp tiêu biểu:</span>
                  <ul className="space-y-2">
                    {act.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#999] text-xs sm:text-sm leading-relaxed pl-1">
                        <CheckSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote/Motivation block */}
        <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div id="motivation-quote" className="space-y-2 relative">
            <h3 className="font-serif italic text-[#e0e0e0] text-base flex items-center gap-1.5">
              Phương châm Công việc & Học tập
            </h3>
            <p className="text-[#999] text-xs sm:text-sm italic font-serif leading-relaxed max-w-xl font-light">
              "Logic giúp bạn đi từ A đến B. Trí tưởng tượng và sự nỗ lực bền bỉ sẽ dẫn bạn đến bất cứ đâu."
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#555] animate-pulse" />
            <span className="text-[10px] font-mono text-[#555] font-bold uppercase tracking-widest">
              LÊ TUẤN MINH ・ 2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
