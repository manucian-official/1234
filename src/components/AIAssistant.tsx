import React from 'react';
import { MessageSquare, Sparkles, Send, Bot, User, ArrowRight, CornerDownLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

const FAQ_PAIRS = [
  {
    question: '🎯 Các dự án nổi bật nhất của Tuấn Minh là gì?',
    answer: 'Minh đã phát triển 3 sản phẩm chính:\n1. **AmsMap**: Bản đồ tương tác mượt mà hỗ trợ tìm kiếm phòng học & tìm đường tối ưu trong trường Chuyên Hà Nội - Amsterdam.\n2. **EcoTrash Vision**: Ứng dụng AI nhận diện và phân loại rác thải thời gian thực phục vụ giáo dục xanh.\n3. **AmsTech News Hub**: Cổng tổng hợp tin tức công nghệ song ngữ hữu ích cho học sinh.'
  },
  {
    question: '🏆 Minh sở hữu các thành tích nổi bật nào?',
    answer: 'Về học thuật, Minh đạt:\n- **Giải Nhất Học sinh Giỏi cấp Thành phố môn Tin học** (2026)\n- **Giải Nhì Olympic Tin học miền Trung & Tây Nguyên** (2025)\n- **Học bổng Odon Vallet** dành cho học sinh xuất sắc toàn quốc (2025)\n- Điểm số học thuật xuất sắc với GPA **9.7/10** và SAT **1540**, IELTS **8.0**.'
  },
  {
    question: '🎸 Minh có những sở thích cá nhân nào ngoài lập trình?',
    answer: 'Bên cạnh máy tính, Minh đam mê nghệ thuật và thể thao. Minh là thành viên chính của ban nhạc trường (Ams Music Club) trong vai trò **Guitarist**, đam mê cờ vua (đạt giải cấp Quận) và thường chạy bộ để duy trì sức khỏe dẻo dai.'
  },
  {
    question: '🤝 Làm sao để liên hệ hay thảo luận dự án với Minh?',
    answer: 'Rất đơn giản! Bạn có thể gửi tin nhắn trực tiếp qua mục **Sổ lưu niệm** ở trang web này hoặc gửi Email đến địa chỉ: `letuanminh.ams@gmail.com`. Minh luôn sẵn lòng đón nhận các lời mời cộng tác phát triển phần mềm phi lợi nhuận!'
  }
];

export default function AIAssistant() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: 'Xin chào! Mình là Trợ lý ảo của Lê Tuấn Minh. Mình có thể chia sẻ thông tin về học tập, các dự án công nghệ, hoạt động tình nguyện hay sở thích âm nhạc của Minh. Hãy hỏi mình nhé!'
    }
  ]);
  const [inputText, setInputText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let aiResponseText = 'Cảm ơn câu hỏi của bạn! Mình là Trợ lý phản hồi nhanh về Lê Tuấn Minh. Dưới đây là thông tin liên quan:\n\n';
      
      // Basic local keyword match
      const query = text.toLowerCase();
      if (query.includes('dự án') || query.includes('sản phẩm') || query.includes('project') || query.includes('amsmap') || query.includes('ecotrash')) {
        aiResponseText += FAQ_PAIRS[0].answer;
      } else if (query.includes('thành tích') || query.includes('giải thưởng') || query.includes('gpa') || query.includes('ielts') || query.includes('học tập')) {
        aiResponseText += FAQ_PAIRS[1].answer;
      } else if (query.includes('sở thích') || query.includes('guitar') || query.includes('âm nhạc') || query.includes('ngoại khóa')) {
        aiResponseText += FAQ_PAIRS[2].answer;
      } else if (query.includes('liên hệ') || query.includes('email') || query.includes('hợp tác') || query.includes('github')) {
        aiResponseText += FAQ_PAIRS[3].answer;
      } else {
        aiResponseText += 'Minh hiện là học sinh Chuyên Tin Trường THPT Chuyên Hà Nội - Amsterdam. Bạn hãy thử nhấn một trong các nút câu hỏi gợi ý bên dưới để tìm hiểu nhanh các chủ đề mong muốn nhé!';
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section id="ai-assistant" className="py-12 md:py-20 border-t border-[#1a1a1a]">
      <div className="bg-[#0d0d0d] text-[#e0e0e0] rounded-3xl overflow-hidden border border-[#1a1a1a] grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        
        {/* left column: Header / Description */}
        <div className="lg:col-span-12 xl:col-span-4 p-8 bg-[#080808]/40 border-b xl:border-b-0 xl:border-r border-[#1a1a1a] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-mono text-[10px] tracking-widest font-semibold uppercase">
              <Bot className="w-4 h-4 text-[#888] animate-pulse" />
              Tích hợp thông minh
            </div>
            
            <h2 className="font-serif font-light text-2xl tracking-tight text-white">
              Hỏi đáp về Tuấn Minh
            </h2>
            
            <p className="text-[#888] text-xs sm:text-sm leading-relaxed font-light">
              Hãy thử trò chuyện với Trợ lý Hỏi đáp của Tuấn Minh để tìm hiểu thông tin tổng quan, kỹ năng kỹ thuật, sở thích cá nhân một cách tức thời nhất!
            </p>
          </div>

          <div className="pt-8 border-t border-[#1a1a1a] hidden xl:block">
            <span className="text-[10px] uppercase font-mono text-[#555] font-semibold">Tốc độ phản hồi:</span>
            <span className="text-xs text-white font-mono font-medium block mt-1">Truy cập tức thì (~1s)</span>
          </div>
        </div>

        {/* Right column: Interactive Chat interface */}
        <div className="lg:col-span-12 xl:col-span-8 flex flex-col h-[500px] bg-transparent">
          
          {/* Messages window spacer */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                {/* Avatar dot */}
                <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                  msg.sender === 'user' ? 'bg-white border border-[#222] text-black' : 'bg-[#151515] border border-[#222] text-[#888]'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4 text-black" /> : <Bot className="w-4 h-4 text-[#888]" />}
                </div>

                <div className={`p-4 rounded-2xl text-xs sm:text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-white text-black rounded-tr-none font-medium' 
                    : 'bg-[#151515] text-[#e0e0e0] border border-[#222]/30 rounded-tl-none font-light'
                }`}>
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-[#151515] border border-[#222] text-white shrink-0 flex items-center justify-center text-xs font-bold">
                  <Bot className="w-4 h-4 text-[#888]" />
                </div>
                <div className="bg-[#151515] text-[#888] border border-[#222]/30 p-4 rounded-2xl rounded-tl-none font-mono text-[11px] flex items-center gap-1">
                  Đang soạn phản hồi
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Suggestion Chips */}
          <div className="px-6 py-2 border-t border-[#1a1a1a] flex flex-wrap gap-2 shrink-0">
            {FAQ_PAIRS.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(faq.question.slice(2))}
                className="px-3 py-1.5 bg-[#111] hover:bg-[#151515] border border-[#222] rounded-xl text-xs text-[#888] hover:text-white tracking-wide transition-all text-left cursor-pointer duration-300"
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* User message writing field */}
          <div className="p-4 border-t border-[#1a1a1a] bg-[#0c0c0c] shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage(inputText);
                }}
                placeholder="Nhập tin nhắn để hỏi trợ lý..."
                className="flex-1 px-4 py-2.5 bg-[#050505] border border-[#222] hover:border-[#333] focus:border-white rounded-xl text-xs sm:text-sm focus:outline-none text-white transition-all"
              />
              <button
                onClick={() => handleSendMessage(inputText)}
                className="px-4 py-2.5 bg-white hover:bg-slate-100 text-black rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center cursor-pointer transition-colors"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
