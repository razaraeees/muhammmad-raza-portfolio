import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "KGT Insights — Enterprise ERP & Portal",
    description: "Multi-user private business portal / mini-ERP built to streamline company operations, financial reporting, and departmental workflows in a unified system.",
    category: "Full Stack",
    tech: ["Laravel", "PHP", "Vue.js", "Inertia.js", "MySQL", "RBAC", "PDF Generation"],
    live: "https://example.com/kgt-insights",
    github: "https://github.com/muhraza/kgt-insights",
    featured: true,
    metric: "Centralizes HR, Payroll, Vouchers & P&L with instant reporting",
    highlights: [
      "Built multi-user private business portal to manage company operations and business data",
      "Implemented strict RBAC with granular user roles and permission matrices",
      "Engineered interactive dashboards, business modules, data workflows, and printable PDF & Excel reports"
    ]
  },
  {
    title: "Umrah Cab Management System",
    description: "End-to-end transportation dispatch and booking platform engineered for Umrah cab fleets, connecting travelers, dispatch operators, and drivers.",
    category: "Full Stack",
    tech: ["PHP", "Laravel", "Laravel Livewire", "MySQL", "Bootstrap", "RBAC"],
    live: "https://example.com/umrah-cabs",
    github: "https://github.com/muhraza/umrah-cab-system",
    featured: false,
    metric: "End-to-end route scheduling & driver earnings portal",
    highlights: [
      "Customer self-service online booking plus staff telephone booking portal",
      "Dynamic route management covering key regional transit routes and fares",
      "Dedicated driver portal with authenticated ride assignments and automated earnings logs",
      "Fleet operations workflow managing daily driver assignment and real-time statuses"
    ]
  },
  {
    title: "Uzme Store — Full-Stack E-Commerce",
    description: "Comprehensive e-commerce platform featuring high-converting customer storefront, shopping cart, checkout, and custom merchant administrative panel.",
    category: "Full Stack",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    live: "https://example.com/uzme-store",
    github: "https://github.com/muhraza/uzme-store",
    featured: false,
    metric: "Complete product catalog, cart, and live inventory sync",
    highlights: [
      "Customer storefront with catalog navigation, quick search, and intuitive cart",
      "Comprehensive admin panel for product & category management and order processing",
      "Automated stock level tracking and order fulfillment status updates"
    ]
  },
  {
    title: "Custom Mini PHP Framework",
    description: "Custom lightweight MVC framework built from scratch inspired by Laravel architecture, employing pure Object-Oriented Programming (OOP) and PSR-4 standards.",
    category: "Backend",
    tech: ["Pure PHP", "OOP", "Composer (PSR-4)", "MVC", "Custom Architecture"],
    live: "https://github.com/muhraza/mini-php-framework",
    github: "https://github.com/muhraza/mini-php-framework",
    featured: false,
    metric: "PSR-4 autoloaded core router, container & custom auth engine",
    highlights: [
      "Designed and built custom mini-framework inspired by Laravel using pure OOP principles",
      "Implemented Composer PSR-4 autoloading for clean namespace class resolution",
      "Separation of concerns across routing engine, core controllers, and service layers",
      "Custom authentication system including session management and registration from scratch"
    ]
  },
  {
    title: "AI Chatbot Assistant",
    description: "Conversational artificial intelligence web application offering real-time streaming responses and contextual dialogue utilizing OpenAI's API.",
    category: "Frontend",
    tech: ["JavaScript", "OpenAI API", "HTML5", "CSS3", "REST APIs"],
    live: "https://example.com/ai-chatbot",
    github: "https://github.com/muhraza/ai-chatbot",
    featured: false,
    metric: "Fast real-time responses with OpenAI API integration",
    highlights: [
      "Direct integration with OpenAI API endpoints for intelligent dialogue generation",
      "Clean, modern, responsive chat interface with message history preservation",
      "Robust error handling and API rate-limit state management"
    ]
  }
];
