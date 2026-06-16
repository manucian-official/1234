import React from 'react';
import { Menu, X, Code, GraduationCap, FolderGit2, HeartHandshake, MessageSquareCode, Github, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: 'about', label: 'Giới thiệu', icon: Code },
    { id: 'education', label: 'Học vấn & Giải thưởng', icon: GraduationCap },
    { id: 'projects', label: 'Dự án nổi bật', icon: FolderGit2 },
    { id: 'activities', label: 'Hoạt động', icon: HeartHandshake },
    { id: 'guestbook', label: 'Sổ lưu niệm', icon: MessageSquareCode },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <motion.div 
              id="header-logo-icon"
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0d0d0d] border border-[#333] text-[#e0e0e0] shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#888]" />
            </motion.div>
            <div id="header-brand">
              <span className="font-serif italic font-medium text-lg text-white tracking-tight block">Lê Tuấn Minh</span>
              <span className="text-[10px] uppercase font-mono text-[#888] block tracking-widest leading-3 mt-0.5">Học sinh Chuyên Tin ・ Ams</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-[#888] hover:text-white hover:bg-[#0d0d0d]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[1px] bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <div className="h-4 w-[1px] bg-[#222] mx-2" />
            <a 
              id="header-github-shortcut"
              href="https://github.com/letuanminh-ams" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-xl bg-[#0d0d0d] hover:bg-[#151515] border border-[#222] text-[#888] hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#888] hover:text-white hover:bg-[#0d0d0d] border border-transparent hover:border-[#222] focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#1a1a1a] bg-[#0d0d0d] text-[#e0e0e0]"
          >
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-sm uppercase tracking-wider font-semibold transition-colors ${
                      isActive ? 'bg-[#151515] text-white border-l-2 border-white' : 'text-[#888] hover:bg-[#111] hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#555]" />
                    {item.label}
                  </button>
                );
              })}
              <div className="border-t border-[#1a1a1a] pt-3 flex items-center justify-between px-4">
                <span className="text-xs font-mono text-[#555]">letuanminh.ams@gmail.com</span>
                <a 
                  id="mobile-github-shortcut"
                  href="https://github.com/letuanminh-ams" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151515] text-xs font-mono font-medium text-[#888] hover:text-white border border-[#222]"
                >
                  <Github className="w-3.5 h-3.5" /> GITHUB
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
