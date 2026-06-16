import { MapPin, Mail, Phone, Calendar, Download, ExternalLink, Github, MessageSquareCode, Award, Code, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section id="about" className="py-12 md:py-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Column: Avatar & Quick Info Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-12 xl:col-span-5 bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Decorative Subtle Background Gradients */}
          <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-48 h-48 bg-[#111111] rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 w-48 h-48 bg-[#151515] rounded-full blur-3xl opacity-40 pointer-events-none" />

          {/* Profile Image container */}
          <div className="relative group mb-6">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#222] to-[#444] opacity-25 group-hover:opacity-40 blur transition duration-500" />
            <div id="hero-avatar-wrapper" className="relative w-40 h-40 rounded-2xl overflow-hidden border border-[#222] bg-[#050505] shadow-xl">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.fullName}
                id="hero-avatar-img"
                className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#1a1a1a] text-white p-2 rounded-xl shadow-md border border-[#333]">
              <Award className="w-4 h-4 text-[#888]" />
            </div>
          </div>

          <h1 id="hero-student-name" className="font-serif font-light text-3xl text-white tracking-tight">
            {personalInfo.fullName}
          </h1>
          <p id="hero-student-title" className="text-[10px] tracking-widest uppercase font-mono text-[#888] mt-2.5 font-medium">
            {personalInfo.title}
          </p>

          <p id="hero-student-bio" className="text-[#999] text-sm mt-4 leading-relaxed max-w-sm italic font-serif">
            "{personalInfo.shortBio}"
          </p>

          <div className="w-full border-t border-[#1a1a1a] my-6" />

          {/* Contact Details List */}
          <div id="hero-contact-list" className="w-full space-y-3.5 text-left text-xs font-mono tracking-wide">
            <div className="flex items-center gap-3 text-[#999]">
              <MapPin className="w-4 h-4 text-[#555] shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-[#999]">
              <Mail className="w-4 h-4 text-[#555] shrink-0" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white hover:underline transition-colors break-all">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-[#999]">
              <Phone className="w-4 h-4 text-[#555] shrink-0" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-white hover:underline transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="w-full border-t border-[#1a1a1a] my-6" />

          {/* Social Links & Resume buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              id="hero-contact-cta"
              onClick={onContactClick}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-black rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer transition-all"
            >
              <MessageSquareCode className="w-4 h-4" />
              Gửi lời chúc
            </button>
            <a
              id="hero-github-cta"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0d0d0d] hover:bg-[#151515] text-[#888] hover:text-white border border-[#222] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right Column: Achievements Metrics & Core Competencies */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-8">
          {/* Bento Stats Panel */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {personalInfo.stats.map((stat, i) => (
              <div 
                key={i} 
                id={`stat-box-${i}`}
                className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-5 flex flex-col justify-between"
              >
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-mono font-medium">{stat.label}</span>
                <span className="text-2xl font-serif italic text-white mt-2 block">{stat.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack skills presentation */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-4 h-4 text-[#888]" />
              <h2 className="font-serif italic text-lg text-white">Kỹ năng chuyên môn</h2>
            </div>

            <div className="space-y-5">
              {personalInfo.skills.programming.map((skill, index) => (
                <div key={index} id={`skill-bar-wrapper-${index}`}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-semibold text-[#e0e0e0] uppercase tracking-wider">{skill.name}</span>
                    <span className="text-[11px] font-mono text-[#666]">{skill.comment}</span>
                  </div>
                  <div className="w-full h-1 bg-[#151515] border border-[#222] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-slate-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 * index }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1a1a1a] my-6" />

            {/* Tools Grid info */}
            <div>
              <span className="text-[10px] font-mono text-[#555] block mb-3 uppercase tracking-wider font-semibold">Công cụ & Công nghệ quen thuộc:</span>
              <div id="skills-badge-grid" className="flex flex-wrap gap-2">
                {personalInfo.skills.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#111] border border-[#222] rounded-lg text-xs font-medium text-[#888] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick statement details card */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-6 sm:p-8 flex items-start gap-4"
          >
            <div className="p-2.5 bg-[#111] border border-[#222] text-[#888] rounded-2xl shrink-0 mt-0.5">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif italic text-white text-base flex items-center gap-1.5">
                Định hướng phát triển <Sparkles className="w-4 h-4 text-slate-400 inline" />
              </h3>
              <p className="text-[#999] text-xs sm:text-sm leading-relaxed mt-2 font-light">
                Tập trung nghiên cứu sâu về thuật toán, kỹ nghệ phần mềm và các giải pháp khai phá dữ liệu thông minh ứng dụng trong giáo dục và môi trường. Mục tiêu trong 3 năm tới là chinh phục tấm vé đại học ngành Khoa học Máy tính hàng đầu trong nước hoặc quốc tế, đồng thời viết tiếp những dòng mã có ích cho cộng đồng.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
