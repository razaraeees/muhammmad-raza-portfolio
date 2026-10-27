export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  badge?: string;
  experience?: string;
}

export interface SkillCategoryGroup {
  category: string;
  description: string;
  iconName: "Code2" | "Server" | "Database" | "Cloud" | "Layers";
  skills: SkillItem[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    category: "Backend Development",
    description: "Robust business logic, clean MVC/Service architectures, and APIs",
    iconName: "Server",
    skills: [
      { name: "PHP", level: 95, badge: "Core Language" },
      { name: "Laravel Framework", level: 95, badge: "Expert" },
      { name: "REST APIs & Endpoints", level: 92, badge: "Advanced" },
      { name: "OOP & MVC Patterns", level: 90, badge: "Advanced" },
      { name: "Auth & RBAC Systems", level: 92, badge: "Specialist" },
      { name: "Custom Framework Design", level: 85, badge: "Architectural" }
    ]
  },
  {
    category: "Frontend Engineering",
    description: "Interactive, reactive, and responsive user interfaces",
    iconName: "Code2",
    skills: [
      { name: "Vue.js", level: 90, badge: "Advanced" },
      { name: "Inertia.js", level: 92, badge: "Advanced" },
      { name: "React.js", level: 86, badge: "Proficient" },
      { name: "JavaScript (ES6+)", level: 90, badge: "Advanced" },
      { name: "Tailwind CSS & Bootstrap", level: 94, badge: "Expert" },
      { name: "HTML5 & Modern CSS3", level: 96, badge: "Expert" }
    ]
  },
  {
    category: "Databases & Optimization",
    description: "Relational modeling, query tuning, and transactional integrity",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 92, badge: "Advanced" },
      { name: "Relational Schema Design", level: 90, badge: "Advanced" },
      { name: "Query Optimization", level: 86, badge: "Proficient" },
      { name: "CRUD & Stored Procedures", level: 94, badge: "Expert" },
      { name: "Database Migrations & Seeders", level: 92, badge: "Advanced" }
    ]
  },
  {
    category: "Tools, Integrations & Systems",
    description: "Modern developer workflows, report pipelines, and AI APIs",
    iconName: "Layers",
    skills: [
      { name: "Git & GitHub", level: 92, badge: "Advanced" },
      { name: "Composer (PSR-4)", level: 90, badge: "Advanced" },
      { name: "OpenAI API Integration", level: 88, badge: "AI Specialist" },
      { name: "PDF Generation & Printing", level: 92, badge: "Advanced" },
      { name: "Excel Export & Data Filtering", level: 92, badge: "Advanced" },
      { name: "Role-Based Access Control (RBAC)", level: 95, badge: "Expert" }
    ]
  }
];

export const marqueeTechnologies: string[] = [
  "Laravel",
  "PHP",
  "Vue.js",
  "Inertia.js",
  "React.js",
  "MySQL",
  "REST APIs",
  "RBAC",
  "JavaScript",
  "Tailwind CSS",
  "OpenAI API",
  "Bootstrap",
  "Composer",
  "Git",
  "PDF Reports"
];
