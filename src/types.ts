export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  keyFeatures: string[];
  role: string;
  category: 'Software' | 'AI & ML' | 'Hardware' | 'Creative';
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  scope: 'National' | 'City' | 'School' | 'International';
  description: string;
  color: string;
}

export interface Activity {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  bullets: string[];
  category: 'Club' | 'Volunteering' | 'Academic' | 'Arts';
  imagePlaceholder?: string;
}

export interface EducationStage {
  id: string;
  schoolName: string;
  level: string;
  period: string;
  gpa?: string;
  details: string;
  specializedClass?: string;
  highlights: string[];
}

export interface GuestbookMessage {
  id: string;
  author: string;
  relationship: string;
  message: string;
  timestamp: string;
  avatarColor: string;
  isApproved?: boolean;
}
