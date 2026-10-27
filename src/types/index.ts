export type Category = "Full Stack" | "Frontend" | "Backend";

export interface Project {
  title: string;
  description: string;
  category: Category;
  tech: string[];
  live: string;
  github: string;
  featured?: boolean;
  metric?: string;
  image?: string;
  highlights?: string[];
}

export type EmploymentType = "Full-time" | "Contract" | "Internship" | "Freelance";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logoInitial?: string;
  type: EmploymentType;
  location: string;
  period: string;
  duration: string;
  isCurrent?: boolean;
  achievements: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: number; // 1-100 percentage
    badge?: string;
    icon?: string;
  }[];
}

export interface QuickFact {
  label: string;
  value: string;
  iconName: "MapPin" | "Briefcase" | "GraduationCap" | "Languages" | "Sparkles";
}

export interface StatItem {
  numericValue: number;
  suffix: string;
  label: string;
}
