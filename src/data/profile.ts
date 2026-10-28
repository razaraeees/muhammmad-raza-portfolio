import { QuickFact, StatItem } from "@/types";

export const profile = {
  name: "Muhammad Raza",
  role: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Laravel & PHP Specialist",
    "Vue.js & React.js Developer",
    "ERP & Business Applications"
  ],
  location: "Karachi, Pakistan",
  phone: "0325-9276877",
  tagline: "I build high-performance ERPs, business CRMs, e-commerce platforms, and scalable web solutions with Laravel, PHP, Vue.js, React.js, and MySQL.",

  aboutStory: "I am a Full-Stack Developer with 1.3+ years of professional experience engineering private ERPs, CRM platforms, e-commerce engines, and high-impact business applications. My work spans full-lifecycle development—from architecting database schemas and complex business logic in Laravel/PHP to delivering dynamic, responsive user experiences with Vue.js, Inertia.js, and React.js.",
  aboutPhilosophy: "I specialize in clean MVC architecture, Service Layer patterns, robust RBAC systems, and AI API integrations. Whether calculating automated Profit & Loss statements or engineering real-time dispatch systems, I take pride in crafting software that is maintainable, highly secure, and built for real business workflows.",

  email: "muhraza.dev10@gmail.com",
  github: "https://github.com/muhraza",
  linkedin: "https://linkedin.com/in/muhammad-raza",
  resume: "/resume.pdf",
  availableForWork: true,
  availabilityText: "Available for full-time roles & projects",

  quickFacts: [
    { label: "Location", value: "Karachi, Pakistan", iconName: "MapPin" },
    { label: "Experience", value: "1.3+ Years Hands-on", iconName: "Briefcase" },
    { label: "Education", value: "ICS (ZUEB) · Karachi", iconName: "GraduationCap" },
    { label: "Core Stack", value: "Laravel, PHP, Vue.js, React.js, MySQL", iconName: "Sparkles" },
    { label: "Phone", value: "0325-9276877", iconName: "Languages" }
  ] as QuickFact[],

  learningNow: [
    { name: "Custom PHP Framework Design", badge: "Architecture" },
    { name: "OpenAI API & AI Integrations", badge: "GenAI" },
    { name: "Next.js & React Ecosystem", badge: "Frontend" },
    { name: "Advanced Query Optimization", badge: "Database" }
  ],

  animatedStats: [
    { numericValue: 1, suffix: ".3+ Yrs", label: "Professional Experience" },
    { numericValue: 5, suffix: "+", label: "Major Enterprise & Web Apps" },
    { numericValue: 100, suffix: "%", label: "Production Delivery Rate" },
    { numericValue: 14, suffix: "+", label: "Technologies Mastered" }
  ] as StatItem[],

  contactInfo: {
    responseTime: "Typically replies within a few hours",
    timezone: "PKT (UTC +5:00) · Karachi, Pakistan",
    openTo: "Full-time Full Stack Developer roles, ERP/CRM development, and web consulting"
  }
};

export const nav = ["About", "Skills", "Projects", "Experience", "Services", "Testimonials", "Contact"];
