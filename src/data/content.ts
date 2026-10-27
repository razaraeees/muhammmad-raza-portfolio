export interface ServiceItem {
  id: string;
  title: string;
  text: string;
  iconName: "Code" | "Cpu" | "ShoppingCart" | "Rocket" | "ShieldCheck" | "Gauge";
  deliverables: string[];
}

export const services: ServiceItem[] = [
  {
    id: "srv-1",
    title: "ERP & CRM Systems",
    text: "Tailored business software managing core operations: HR, Payroll, Loans, Expense tracking, and automated Profit & Loss statements.",
    iconName: "Cpu",
    deliverables: ["Role-Based Access Control (RBAC)", "Voucher & payroll workflows", "Automated financial P&L reporting"]
  },
  {
    id: "srv-2",
    title: "Laravel & PHP Development",
    text: "Robust, scalable backends built with clean OOP, MVC architecture, Service Layer patterns, and secure RESTful APIs.",
    iconName: "Code",
    deliverables: ["Secure REST API endpoints", "Custom authentication & CRUD", "Database-driven business logic"]
  },
  {
    id: "srv-3",
    title: "Vue.js & React Frontend",
    text: "Interactive, reactive user interfaces built with Vue.js, Inertia.js, React.js, and modern CSS frameworks like Tailwind & Bootstrap.",
    iconName: "Rocket",
    deliverables: ["Single-Page App interactivity", "Inertia.js seamless full-stack glue", "Responsive cross-device layouts"]
  },
  {
    id: "srv-4",
    title: "E-Commerce Platforms",
    text: "Full-stack e-commerce systems complete with intuitive customer storefronts, cart checkouts, and custom merchant admin portals.",
    iconName: "ShoppingCart",
    deliverables: ["Product & category catalogs", "Shopping cart & order processing", "Live inventory & stock tracking"]
  },
  {
    id: "srv-5",
    title: "Reporting & Export Engines",
    text: "Automated business data pipelines generating printable PDF vouchers, receipts, and filtered Excel data exports.",
    iconName: "Gauge",
    deliverables: ["Printable PDF vouchers & invoices", "Multi-column Excel spreadsheets", "Advanced date & metric filters"]
  },
  {
    id: "srv-6",
    title: "AI & API Integrations",
    text: "Enhance traditional web portals by integrating OpenAI APIs and conversational AI assistants into daily business operations.",
    iconName: "ShieldCheck",
    deliverables: ["OpenAI API conversational flows", "Third-party webhook connections", "Structured prompt orchestration"]
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  text: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Tariq Mahmood",
    role: "Managing Director",
    company: "Raddium Technology",
    avatarText: "TM",
    rating: 5,
    text: "Raza engineered our internal ERP modules—specifically Payroll, HR, and P&L financial statements—with remarkable precision. The system handles daily company vouchers effortlessly and has eliminated manual spreadsheet headaches."
  },
  {
    id: "t-2",
    name: "Farhan Siddiqui",
    role: "Lead Software Architect",
    company: "Diginotive Solutions",
    avatarText: "FS",
    rating: 5,
    text: "An exceptionally dedicated full-stack engineer. Raza built the cab booking and route dispatch system for our Umrah operations with solid Laravel logic, Livewire, and a crystal-clear driver earnings portal."
  },
  {
    id: "t-3",
    name: "Bilal Ahmed",
    role: "Operations Lead",
    company: "KGT Enterprise",
    avatarText: "BA",
    rating: 5,
    text: "The private portal Raza built using Laravel, Inertia, and Vue.js gave our executive team real-time visibility into operations and instant PDF export capabilities. Clean code and dependable execution throughout."
  }
];

export const ctaBanner = {
  tag: "Ready for your next project?",
  title: "Need a robust ERP, CRM, or full-stack Laravel application?",
  description: "Whether you need a full enterprise system built from the ground up or a reliable developer to scale your existing platform, let's connect today.",
  buttonPrimary: "Contact Muhammad Raza",
  buttonSecondary: "Call 0325-9276877",
  calendlyUrl: "mailto:muhraza.dev10@gmail.com"
};
