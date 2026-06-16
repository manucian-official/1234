import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Guestbook from './components/Guestbook';
import AIAssistant from './components/AIAssistant';
import { Mail, Github, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button visibility
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Detection matching active tab during page scroll
      const sections = ['about', 'education', 'projects', 'activities', 'guestbook'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#e0e0e0]">
      
      {/* Dynamic Header (Top menu) */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-8">
        
        {/* Decorative alert banners */}
        <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-4 flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#888]"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#999] font-serif italic">
              Chào mừng bạn đến với Góc Sáng Tạo của học sinh <strong className="text-white font-serif not-italic">Lê Tuấn Minh</strong>!
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#888] font-semibold font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> AMSER CHUYÊN TIN
          </div>
        </div>

        {/* 1. Hero & Biography Section */}
        <Hero onContactClick={() => scrollToSection('guestbook')} />

        {/* 2. Educational Path & Highlights */}
        <Education />

        {/* 3. Tech Projects Grid with details modal */}
        <Projects />

        {/* 4. Extracurricular club and volunteer works */}
        <Activities />

        {/* 5. AI Assistant Consultation */}
        <AIAssistant />

        {/* 6. Guestbook greeting forum */}
        <Guestbook />

      </main>

      {/* Footer information */}
      <footer className="bg-[#0d0d0d]/40 border-t border-[#1a1a1a] py-12 mt-16 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Branding details */}
            <div className="text-center md:text-left space-y-1">
              <h4 className="font-serif italic text-white text-base">Lê Tuấn Minh</h4>
              <p className="text-xs mt-1 text-[#666]">Trang Portfolio giới thiệu thành tích & dự án Công nghệ</p>
              <p className="text-[11px] text-[#444]">© 2026. Designed with Sophisticated Dark aesthetics.</p>
            </div>

            {/* Direct Contact Handles */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <a 
                href="mailto:letuanminh.ams@gmail.com" 
                className="flex items-center gap-1.5 hover:text-white text-[#888] transition-colors"
                title="Email Lê Tuấn Minh"
              >
                <Mail className="w-4 h-4" /> letuanminh.ams@gmail.com
              </a>
              <span className="text-[#333]">•</span>
              <a 
                href="https://github.com/letuanminh-ams" 
                target="_blank" 
                className="flex items-center gap-1.5 hover:text-white text-[#888] transition-colors"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <Github className="w-4 h-4" /> letuanminh-ams
              </a>
            </div>

          </div>
        </div>
      </footer>

      {/* Floating Scroll back to top widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 bg-[#0d0d0d] border border-[#333] hover:border-[#555] text-white rounded-xl shadow-lg cursor-pointer z-40 transition-all"
            aria-label="Cuộn về đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

