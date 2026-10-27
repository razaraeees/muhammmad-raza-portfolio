import { CertificationItem, EducationItem, ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Raddium Technology (Pvt) Ltd.",
    logoInitial: "R",
    type: "Full-time",
    location: "Karachi, Pakistan",
    period: "Mar 2026 – Present",
    duration: "Present",
    isCurrent: true,
    achievements: [
      "Developed and maintained a private enterprise ERP system supporting core company operations (HR, Payroll, Loan, Expense, Voucher modules).",
      "Implemented complete business workflows, data validations, and database-driven logic for HR Management and Payroll processing.",
      "Built automated Profit & Loss (P&L) statements with real-time transaction processing and comprehensive financial reporting capabilities.",
      "Designed and implemented fine-grained Role-Based Access Control (RBAC) with granular user permissions across ERP modules.",
      "Engineered dynamic data filters, PDF report generation, direct printing, and Excel export features for operational business analytics."
    ],
    tech: ["Laravel", "PHP", "Vue.js", "Inertia.js", "REST APIs", "MySQL", "RBAC"]
  },
  {
    id: "exp-2",
    role: "Backend Developer (PHP/Laravel)",
    company: "Diginotive Solutions",
    logoInitial: "D",
    type: "Full-time",
    location: "Karachi, Pakistan",
    period: "May 2025 – Feb 2026",
    duration: "10 mos",
    isCurrent: false,
    achievements: [
      "Engineered high-performance web applications and business management systems using PHP and the Laravel framework.",
      "Constructed CRM and e-commerce applications featuring custom administration panels and database-driven business logic.",
      "Architected and implemented secure REST APIs, authentication flows, robust CRUD systems, and service-layer backend workflows."
    ],
    tech: ["PHP", "Laravel", "MySQL", "REST APIs", "Bootstrap", "CRUD", "Git"]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Ziauddin University Examination Board (ZUEB)",
    period: "2025 – Present",
    location: "Karachi, Pakistan",
    details: "Private Candidate · Expected Completion: 2026/2027. Coursework in Computer Science, Mathematics, and Algorithmic Thinking."
  },
  {
    degree: "Secondary School Certificate (SSC) — Science (Biology)",
    institution: "Erum Public School",
    period: "Completed Sep 2022",
    location: "Karachi, Pakistan",
    details: "Science matriculation with a focus on analytical thinking, biology, and scientific methodology."
  }
];

export const certifications: CertificationItem[] = [
  {
    name: "Full-Stack Web Development (Laravel & React)",
    issuer: "Professional Practice & Practical Experience",
    year: "2025",
    url: "#"
  },
  {
    name: "Relational Database Design & Query Optimization",
    issuer: "MySQL & Database Architecture",
    year: "2025",
    url: "#"
  },
  {
    name: "OpenAI API Integration & Modern Workflows",
    issuer: "AI-Assisted Development",
    year: "2025",
    url: "#"
  }
];
