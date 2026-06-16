import React from 'react';
import { Send, MessageSquareCode, BadgeCheck, Users, Globe, Smile, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GuestbookMessage } from '../types';

const defaultMessages: GuestbookMessage[] = [
  {
    id: 'msg-1',
    author: 'Cô Nguyễn Mai Phương',
    relationship: 'Giáo viên Chủ nhiệm',
    message: 'Minh là một học sinh đặc biệt xuất sắc, không chỉ có tư duy toán học và lập trình nhạy bén mà còn rất chủ động, có trách nhiệm với tập thể. Cô tin rằng với ngọn lửa đam mê này, em sẽ còn tiến vô cùng xa trong tương lai kỹ thuật số!',
    timestamp: '2026-06-12 14:30',
    avatarColor: 'bg-indigo-600 text-white'
  },
  {
    id: 'msg-2',
    author: 'Nguyễn Hoàng Nam',
    relationship: 'Bạn cùng bàn & Ams Tech Club',
    message: 'Nhờ có ông làm Tech Lead mà CLB mình mới code xong được con app AmsMap đúng hạn á! Ông thần đỉnh từ thuật toán đến thiết kế UI luôn. Chúc người anh em đỗ Học bổng tuyển thẳng đại học nha!',
    timestamp: '2026-06-14 09:15',
    avatarColor: 'bg-teal-600 text-white'
  },
  {
    id: 'msg-3',
    author: 'Phạm Quỳnh Anh',
    relationship: 'Thành viên AMC (Music Club)',
    message: 'Anh Minh đánh Guitar Acoustic siêu đỉnh luôn ạ! Cảm ơn anh đã kiên nhẫn hướng dẫn nhạc lý cho các em khóa dưới. Chúc anh Minh gặt hái thật nhiều thành tích khủng nữa nha!',
    timestamp: '2026-06-15 16:45',
    avatarColor: 'bg-rose-600 text-white'
  }
];

export default function Guestbook() {
  const [messages, setMessages] = React.useState<GuestbookMessage[]>([]);
  const [author, setAuthor] = React.useState('');
  const [relationship, setRelationship] = React.useState('Bạn bè');
  const [messageText, setMessageText] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('bg-[#151515] text-[#e0e0e0] border border-[#222]');
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem('ams_tuanminh_guestbook');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages(defaultMessages);
      }
    } else {
      setMessages(defaultMessages);
      localStorage.setItem('ams_tuanminh_guestbook', JSON.stringify(defaultMessages));
    }
  }, []);

  const colorOptions = [
    { value: 'bg-[#151515] text-[#e0e0e0] border border-[#222]', label: 'Default Dark' },
    { value: 'bg-white text-black border border-white', label: 'Classic Paper' },
    { value: 'bg-[#222] text-[#888] border border-[#333]', label: 'Chamber Metal' }
  ];

  const relations = ['Bạn học', 'Giáo viên', 'Anh/Chị/Em khóa trên dưới', 'Nhà tuyển dụng / Đại diện Đại học', 'Khách ghé thăm'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!author.trim()) {
      newErrors.author = 'Vui lòng nhập tên của bạn.';
    }
    if (!messageText.trim()) {
      newErrors.message = 'Vui lòng nhập lời chúc / nhận xét.';
    } else if (messageText.trim().length < 5) {
      newErrors.message = 'Lời chúc nên có độ dài từ 5 ký tự trở lên.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
      return;
    }

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newMessage: GuestbookMessage = {
      id: `msg-${Date.now()}`,
      author: author.trim(),
      relationship: relationship,
      message: messageText.trim(),
      timestamp: formattedDate,
      avatarColor: selectedColor
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('ams_tuanminh_guestbook', JSON.stringify(updated));

    // Reset Form
    setAuthor('');
    setMessageText('');
    setErrors({});
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="guestbook" className="py-12 md:py-20 border-t border-[#1a1a1a]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Entry Form */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#888] font-mono text-xs font-semibold uppercase tracking-wider">
              <MessageSquareCode className="w-4 h-4" />
              Sổ lưu niệm số
            </div>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-white tracking-tight">
              Gửi một Lời nhắn cổ vũ!
            </h2>
            <p className="text-sm text-[#888] font-light">
              Bạn có kỷ niệm, lời chúc hay đóng góp ý kiến nào muốn gửi tới Minh không? Hãy để lại bút tích của bạn ở đây nhé!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-6 sm:p-8 space-y-5 shadow-none">
            {/* Success feedback */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-[#0d0d0d] border border-[#1a1a1a] text-[#a0af93] rounded-2xl p-4 flex items-start gap-2.5 text-xs sm:text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <div>
                    <span className="font-semibold block font-mono text-xs uppercase tracking-wider">Gửi lời chúc thành công!</span>
                    Lời của bạn đã được ghi lại trong Sổ lưu niệm của Tuấn Minh. Cảm ơn tình cảm của bạn!
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Author Name */}
            <div className="space-y-1.5">
              <label htmlFor="guestbook-name-input" className="text-xs font-semibold text-[#888] block font-mono">
                Tên của bạn/Đơn vị <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="guestbook-name-input"
                placeholder="Ví dụ: Nguyễn Văn A, CLB Ams..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={`w-full px-4 py-2.5 bg-[#050505] border ${
                  errors.author ? 'border-red-500' : 'border-[#222] focus:border-white'
                } rounded-xl text-sm focus:outline-none text-white transition-all`}
              />
              {errors.author && <p className="text-xs text-red-400 font-medium font-mono">{errors.author}</p>}
            </div>

            {/* Relationship select option */}
            <div className="space-y-1.5">
              <label htmlFor="guestbook-relation-select" className="text-xs font-semibold text-[#888] block font-mono">
                Vai trò / Mối quan hệ
              </label>
              <select
                id="guestbook-relation-select"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#050505] border border-[#222] text-slate-300 focus:border-white rounded-xl text-sm focus:outline-none transition-all cursor-pointer"
              >
                {relations.map((rel, index) => (
                  <option key={index} value={rel} className="bg-black text-white">{rel}</option>
                ))}
              </select>
            </div>

            {/* Message payload */}
            <div className="space-y-1.5">
              <label htmlFor="guestbook-msg-textarea" className="text-xs font-semibold text-[#888] block font-mono">
                Nội dung lời nhắn <span className="text-red-500">*</span>
              </label>
              <textarea
                id="guestbook-msg-textarea"
                rows={4}
                placeholder="Viết những lời khích lệ, đóng góp ý kiến hoặc kỷ niệm thú vị của bạn..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className={`w-full px-4 py-3 bg-[#050505] border ${
                  errors.message ? 'border-red-500' : 'border-[#222] focus:border-white'
                } rounded-xl text-sm focus:outline-none text-white transition-all resize-none`}
              />
              {errors.message && <p className="text-xs text-red-400 font-medium font-mono">{errors.message}</p>}
            </div>

            {/* Avatar theme color badge input list */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#888] block font-mono">Chọn phong cách thương hiệu:</span>
              <div className="flex gap-2">
                {colorOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedColor(opt.value)}
                    className={`w-7 h-7 rounded-full border ${opt.value.split(' ')[0]} ${
                      selectedColor === opt.value ? 'ring-1 ring-white scale-110' : 'opacity-85 hover:opacity-100 scale-100'
                    } transition-all cursor-pointer`}
                    title={opt.label}
                  />
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              id="guestbook-submit-btn"
              className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-slate-100 text-black font-bold uppercase tracking-wider font-mono text-xs rounded-xl cursor-pointer transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Gửi lưu bút của bạn
            </button>
          </form>
        </div>

        {/* Right column: Message listings */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-3">
            <span className="font-serif italic text-base text-white flex items-center gap-1.5">
              Lời nhắn đã nhận <Sparkles className="w-4 h-4 text-[#555] inline" />
            </span>
            <span className="text-[10px] font-mono font-bold bg-[#151515] border border-[#222] text-[#888] px-2.5 py-1 rounded-full uppercase tracking-wider">
              {messages.length} Bút tích
            </span>
          </div>

          <div id="guestbook-scroller-box" className="space-y-4 overflow-y-auto max-h-[600px] pr-2 scrollbar-thin">
            <AnimatePresence initial={false}>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 rounded-2xl flex gap-4 items-start hover:border-[#222] transition-colors"
                >
                  {/* Circle author avatar letter initials */}
                  <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                    msg.avatarColor.includes('bg-') ? msg.avatarColor : 'bg-[#151515] text-[#888] border border-[#222]'
                  }`}>
                    {getInitials(msg.author)}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-white text-sm sm:text-base leading-snug">{msg.author}</span>
                        {/* Render verified check for teacher */}
                        {msg.relationship.includes('Giáo viên') && (
                          <BadgeCheck className="w-4 h-4 text-white fill-black shrink-0" title="Giáo viên đã xác nhận" />
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-[#555]">{msg.timestamp}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 bg-[#111] border border-[#222] rounded text-[10px] font-medium text-[#888] font-mono">
                        {msg.relationship}
                      </span>
                    </div>

                    <p className="text-[#999] text-xs sm:text-sm leading-relaxed pt-1 whitespace-pre-line font-light">
                      "{msg.message}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
