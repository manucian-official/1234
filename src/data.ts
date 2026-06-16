import { Project, Achievement, Activity, EducationStage } from './types';

export const personalInfo = {
  fullName: 'Lê Tuấn Minh',
  title: 'Học sinh Chuyên Tin - THPT Chuyên Hà Nội - Amsterdam',
  shortBio: 'Học sinh lớp 12 Chuyên Tin học với đam mê mãnh liệt về Khoa học Máy tính, Trí tuệ Nhân tạo và Phát triển Phần mềm. Luôn kiên trì tìm tòi các giải pháp công nghệ sáng tạo nhằm giải quyết các thách thức xã hội.',
  avatar: '/src/assets/images/student_avatar_1781590401069.jpg',
  location: 'Cầu Giấy, Hà Nội, Việt Nam',
  email: 'letuanminh.ams@gmail.com',
  github: 'https://github.com/letuanminh-ams',
  facebook: 'https://facebook.com/letuanminh.ams',
  phone: '+84 912 345 678',
  stats: [
    { label: 'GPA Tích lũy', value: '9.7 / 10' },
    { label: 'IELTS Academic', value: '8.0' },
    { label: 'SAT Score', value: '1540 / 1600' },
    { label: 'Dự án hoàn thành', value: '6+' }
  ],
  skills: {
    programming: [
      { name: 'C++', level: 90, comment: 'Sử dụng thi Học sinh giỏi & Thuật toán' },
      { name: 'Python', level: 85, comment: 'Xử lý dữ liệu & Machine Learning' },
      { name: 'TypeScript / React', level: 80, comment: 'Phát triển Frontend & Mobile Apps' },
      { name: 'HTML5 / Tailwind CSS', level: 95, comment: 'Thiết kế UI/UX hiện đại' },
      { name: 'Node.js / Express', level: 75, comment: 'Phát triển API và Backend' }
    ],
    tools: ['Git & GitHub', 'VS Code', 'Figma (UI/UX)', 'Jupyter Notebook', 'Docker', 'Firebase', 'Vercel'],
    softSkills: ['Làm việc nhóm', 'Thuyết trình trước đám đông', 'Giải quyết vấn đề', 'Tư duy logic', 'Quản lý dự án nhỏ']
  },
  interests: ['Lập trình thi đấu (Competitive Programming)', 'Nghiên cứu Trí tuệ Nhân tạo', 'Chơi đàn Guitar', 'Đọc sách khoa học viễn tưởng', 'Chạy bộ thể thao']
};

export const educationStages: EducationStage[] = [
  {
    id: 'hs-y2',
    schoolName: 'Trường THPT Chuyên Hà Nội - Amsterdam',
    level: 'Trung học Phổ thông (Lớp 10 - 12)',
    period: '2024 - 2027 (Dự kiến tốt nghiệp)',
    gpa: '9.7 / 10',
    specializedClass: 'Lớp 12 Chuyên Tin học',
    details: 'Học sinh lớp chuyên chuyên ngành Tin học, tích cực tham gia đội tuyển bồi dưỡng học sinh giỏi và các phong trào nghiên cứu khoa học kỹ thuật cấp trường, thành phố.',
    highlights: [
      'Đại biểu học sinh xuất sắc nhận học bổng Danh dự của Hiệu trưởng trong 4 học kỳ liên tiếp',
      'Thành viên Đội tuyển Học sinh Giỏi môn Tin học của trường',
      'Đạt danh hiệu "Học sinh 3 Tốt" cấp Quận năm học 2024-2025'
    ]
  },
  {
    id: 'secondary-y2',
    schoolName: 'Trường THCS Hà Nội - Amsterdam',
    level: 'Trung học Cơ sở',
    period: '2020 - 2024',
    gpa: '9.6 / 10',
    details: 'Lớp cận chuyên Toán - Tin. Đợt thi tuyển vào lớp 10 đạt thủ khoa đầu ra chuyên Tin học của trường Chuyên Hà Nội - Amsterdam.',
    highlights: [
      'Giải Nhất Học sinh Giỏi môn Vật lý cấp Quận năm 2023',
      'Đạt danh hiệu Thủ khoa đầu vào Chuyên Tin của trường'
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Giải Nhất học sinh giỏi cấp Thành phố môn Tin học',
    organization: 'Sở Giáo dục và Đào tạo Hà Nội',
    year: '2026',
    scope: 'City',
    description: 'Đạt điểm số xuất sắc trong kỳ thi chọn Học sinh Giỏi môn Tin học (bảng A) toàn thành phố Hà Nội dành cho học sinh lớp 12.',
    color: 'amber'
  },
  {
    id: 'ach-2',
    title: 'Giải Nhì Olympic Tin học miền Trung và Tây Nguyên',
    organization: 'Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn',
    year: '2025',
    scope: 'National',
    description: 'Thành tích xuất sắc tại bảng Siêu cúp quốc gia dành riêng cho các trường chuyên môn Tin học trên cả nước.',
    color: 'blue'
  },
  {
    id: 'ach-3',
    title: 'Huy chương Bạc Hội khỏe Phù Đổng cấp Quận môn Cờ vua',
    organization: 'Ủy ban Nhân dân Quận Cầu Giấy',
    year: '2024',
    scope: 'School',
    description: 'Thi đấu môn cờ vua nam hệ trung học, rèn luyện tư duy chiến lược và sự bền bỉ.',
    color: 'emerald'
  },
  {
    id: 'ach-4',
    title: 'Học bổng Danh dự Odon Vallet cho Học sinh giỏi xuất sắc',
    organization: 'Tổ chức Gặp gỡ Việt Nam (Rencontres du Vietnam)',
    year: '2025',
    scope: 'National',
    description: 'Học bổng thường niên hỗ trợ và vinh danh những gương mặt học sinh có tài năng xuất chúng trên khắp cả nước.',
    color: 'purple'
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'AmsMap - Bản đồ Tương tác thông minh',
    description: 'Ứng dụng bản đồ 3D nội khu giúp học sinh và phụ huynh dễ dàng định vị các phòng học, phòng chức năng và các sự kiện tại Chuyên Hà Nội - Amsterdam.',
    longDescription: 'AmsMap bắt đầu từ ý tưởng giải quyết khó khăn của các bạn học sinh lớp 10 mới vào trường hoặc phụ huynh tham dự các ngày hội lớn của trường. Ứng dụng hỗ trợ trải nghiệm duyệt bản đồ thông qua công nghệ đồ họa vector, tìm kiếm phòng học theo mã, định vị vị trí và tìm kiếm đường đi ngắn nhất giữa hai vị trí bất kỳ trong cấu trúc tòa nhà đa tầng phức tạp của trường.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer-Motion', 'A* Search Algorithm'],
    githubLink: 'https://github.com/letuanminh-ams/ams-map-interactive',
    liveLink: '#',
    keyFeatures: [
      'Giao diện trực quan mô phỏng mặt bằng các tầng của trường',
      'Sử dụng thuật toán A* để tính toán đường đi tối ưu thông qua các hành lang',
      'Hệ thống tìm kiếm thông minh hỗ trợ viết tắt, tên gọi quen thuộc của các địa điểm',
      'Tích hợp chế độ Dark Mode độc đáo phù hợp với học sinh'
    ],
    role: 'Trưởng nhóm kỹ thuật & Lập trình toán học thuật toán đường đi',
    category: 'Software'
  },
  {
    id: 'proj-2',
    title: 'EcoTrash Vision - Phân loại Rác thải bằng AI',
    description: 'Mô hình Computer Vision nhỏ gọn chạy thời gian thực trên Web giúp nhận diện và phân loại rác hữu cơ, vô cơ và tái chế để giáo dục trẻ em bảo vệ môi trường.',
    longDescription: 'EcoTrash Vision là một dự án ứng dụng trí tuệ nhân tạo vào thực tế đời sống. Dự án sử dụng mô hình CNN (Convolutional Neural Network) được tối ưu hóa thông qua MobileNetV2 để có thể chạy mượt mà ngay trên các trình duyệt web di động cấu hình thấp. Khi người dùng đưa rác thải trước camera, hệ thống sẽ thực hiện phân tích với độ chính xác >92% để đưa ra đề xuất phân loại chính xác nhất.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600',
    tags: ['TensorFlow.js', 'React', 'Tailwind CSS', 'Camera API', 'Python (Training)'],
    githubLink: 'https://github.com/letuanminh-ams/ecotrash-vision-ai',
    liveLink: '#',
    keyFeatures: [
      'Nhận diện rác thải thời gian thực từ luồng video camera trong 0.1 giây',
      'Mô hình học máy nén gọn chỉ nặng 12MB, tối ưu tải trang trên mạng di động 4G',
      'Hệ thống âm thanh tương tác sinh động hướng dẫn phân loại phù hợp cho học sinh mầm non/tiểu học',
      'Tính năng lưu trữ kỷ lục số lượt phân loại rác đúng tích điểm đổi quà'
    ],
    role: 'Lập trình viên duy nhất (Xây dựng mô hình, thu thập dữ liệu & xây dựng giao diện)',
    category: 'AI & ML'
  },
  {
    id: 'proj-3',
    title: 'AmsTech News Hub',
    description: 'Cổng thông tin tự động thu thập và tóm tắt những tin tức khoa học công nghệ nổi bật hàng tuần bằng ngôn ngữ dễ hiểu cho các bạn học sinh trung học phổ thông.',
    longDescription: 'Dành cho những người yêu khoa học nhưng có ít thời gian đọc các bài báo nghiên cứu dày đặc thuật ngữ. AmsTech News Hub sử dụng kỹ thuật cào dữ liệu (web scraping) tự động từ các nguồn tin công nghệ uy tín thế giới (TechCrunch, Wired, Nature), sau đó áp dụng mô hình tóm tắt văn bản để xuất bản các bản tin song ngữ Anh-Việt ngắn gọn chỉ trong 3 dòng tóm tắt.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600',
    tags: ['React', 'Node.js', 'Express', 'API Integration', 'Puppeteer', 'Tailwind CSS'],
    githubLink: 'https://github.com/letuanminh-ams/amstech-news-hub',
    liveLink: '#',
    keyFeatures: [
      'Tự động cào dữ liệu và phân tích ngữ nghĩa các bài báo khoa học hàng ngày',
      'Áp dụng thuật toán tóm tắt văn bản thông minh để cô đọng ý chính',
      'Bản dịch song ngữ Anh - Việt chính xác cho học sinh ôn tập từ vựng công nghệ',
      'Cho phép đăng ký nhận email bản tin miễn phí vào mỗi sáng thứ Hai'
    ],
    role: 'Phát triển backend thu thập dữ liệu và API xử lý ngôn ngữ tự nhiên',
    category: 'Software'
  }
];

export const activities: Activity[] = [
  {
    id: 'act-1',
    title: 'Chủ tịch / Tech Lead CLB Tin học & Công nghệ Ams Tech Club (ATC)',
    role: 'Chủ tịch điều hành & Hướng dẫn Kỹ thuật',
    organization: 'Hanoi - Amsterdam High School',
    period: '2025 - Nay',
    description: 'Chỉ đạo các hoạt động của câu lạc bộ Tin học phi lợi nhuận lớn nhất trường với hơn 100 thành viên tích cực, chuyên phát triển các sản phẩm phần mềm nội bộ và đào tạo tin học cơ bản.',
    bullets: [
      'Tổ chức thành công cuộc thi lập trình phong trào "Ams Coding Contest 2025-2026" thu hút 120 học sinh tham gia tranh tài',
      'Phụ trách đứng lớp, hướng dẫn lập trình Web cơ bản (HTML/CSS/JS) cho hơn 40 bạn học sinh khối 10 mới vào trường',
      'Thành lập phân ban Phát triển giải pháp phục vụ nhà trường giúp số hóa nhiều hoạt động của CLB'
    ],
    category: 'Club'
  },
  {
    id: 'act-2',
    title: 'Ban Tổ chức Chiến dịch Tình nguyện "Hơi ấm Mùa đông 2025"',
    role: 'Trưởng ban Truyền thông & Hậu cần Công nghệ',
    organization: 'Đoàn Thanh niên Trường THPT Chuyên HN-Amsterdam',
    period: 'Mùa đông năm 2025',
    description: 'Chiến dịch tình nguyện quyên góp sách vở, quần áo và tài trợ xây dựng sân chơi bán trú cho trẻ em vùng cao tại Bản Phố, Bắc Hà, Lào Cai.',
    bullets: [
      'Xây dựng trang landing page giới thiệu chương trình, giúp thu hút hơn 120 triệu đồng tiền quyên góp toàn trường chỉ trong 2 tuần',
      'Trực tiếp tham gia 4 ngày hành trình lên vùng cao lắp ráp bàn học, tổ chức các lớp học sinh hoạt ngoại khóa và trao quà cho các em nhỏ',
      'Điều phối thiết kế các ấn phẩm, video truyền tải thông điệp ấm áp tới cộng đồng học sinh'
    ],
    category: 'Volunteering'
  },
  {
    id: 'act-3',
    title: 'Guitar Lead tại Ams Music Club (AMC)',
    role: 'Thành viên cốt cán nhóm Guitar & Hòa âm',
    organization: 'Trường THPT Chuyên Hà Nội - Amsterdam',
    period: '2024 - Nay',
    description: 'Tham gia trình diễn và hỗ trợ tổ chức âm thanh, nhạc cụ trong các chương trình văn nghệ lớn như Đêm hội Chào tân học sinh "Ams Ambition", ngày hội xuân trường, và các buổi giao lưu âm nhạc học sinh.',
    bullets: [
      'Trực tiếp đệm hát Guitar Acoustic và phối hợp ban hòa thanh trong các buổi hòa nhạc trước 2,000 học sinh',
      'Tìm thấy sự cân bằng tuyệt vời giữa tư duy lập trình logic và tư duy âm nhạc nghệ thuật bay bổng',
      'Hỗ trợ hướng dẫn các thành viên khóa dưới về nhạc lý căn bản và kỹ năng chơi đàn cơ bản'
    ],
    category: 'Arts'
  }
];
