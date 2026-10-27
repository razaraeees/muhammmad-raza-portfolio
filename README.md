# Muhammad Raza — Modern Full-Stack Developer Portfolio

A high-performance, responsive portfolio website built with **React (Vite)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with clean aesthetics, subtle glassmorphism, smooth animations, and a synchronized dark/light mode.

---

## 🚀 Live Demo & Preview

- **Portfolio Owner:** Muhammad Raza (Full-Stack Developer: Laravel • PHP • React.js • Vue.js)
- **Email:** [muhraza.dev10@gmail.com](mailto:muhraza.dev10@gmail.com)
- **Phone / WhatsApp:** +92 325 9276877
- **Location:** Karachi, Pakistan

---

## ✨ Key Features & Sections

- **Sticky/Fixed Glassmorphism Navbar**: Persistent top navigation with section tracking via `IntersectionObserver`, mobile dropdown menu, and synchronized theme switch.
- **Hero Section**:
  - Ambient animated gradient blobs with a subtle radial mesh grid.
  - Dynamic rotating role typing effect (`Full-Stack Developer` → `Laravel & PHP Specialist` → `Vue.js & React.js Developer` → `ERP & CRM System Architect`).
  - Interactive syntax-highlighted code terminal with instant copy functionality.
  - Bouncing scroll-down exploration indicator.
- **About Me Section**:
  - Two-column responsive layout with portrait photo frame, subtle hover tilt, and a floating *"Available for work"* badge with pulsing status indicator.
  - Quick Facts grid with icons (Location, Experience, Education, Core Stack, Phone).
  - Animated Count-Up statistics row triggered when scrolled into view.
  - Active *"What I'm Learning Now"* technology badges.
- **Experience Timeline**:
  - Scroll-linked central timeline line drawn dynamically using Framer Motion's `useScroll` and `useSpring`.
  - Alternating cards on desktop and clean single-track layout on mobile.
  - Highlighted "Current" position badge with accent glow and measurable achievement metrics.
  - Structured **Education** and **Certifications** two-column block.
- **Projects Showcase**:
  - Large split featured project card (`KGT Insights Enterprise ERP`) with live mock browser interface.
  - Category filters (*All*, *Full Stack*, *Frontend*, *Backend*) with smooth `AnimatePresence` layout animations.
  - Tech badges, metrics, and direct links to Live Demos and GitHub repositories.
- **Skills & Technical Expertise**:
  - Grouped into 4 core categories: Backend, Frontend, Databases, and Tools/Systems.
  - Visual proficiency progress bars and experience level tags.
  - Infinite marquee ticker continuously scrolling core technologies.
- **Services & Offerings**:
  - Enterprise cards with icons, hover borders, and deliverable bullet points.
- **Testimonials Carousel**:
  - Smooth testimonial slider with quote watermark, star ratings, avatar initials, auto-play with pause-on-hover, and indicator dots.
- **Contact & Footer**:
  - Split contact view with direct email copy button, phone number, location, and timezone details.
  - Contact form with validation and focus rings.
  - High-converting CTA banner above the footer links with a scroll-to-top button.
- **Synchronized Theme Toggle**:
  - 100% harmonized 300ms transition for colors, borders, and backgrounds across all components simultaneously.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Design System:** Custom tokens with tailored `#0E7C66` / `#34D3A7` accent palette and off-white/dark green backdrops.

---

## 📁 Project Architecture

```text
portfolio-react/
├── public/
│   ├── avatar.svg            # Fallback developer portrait vector
│   ├── profile.jpg           # Your custom photo (replace with your own picture)
│   └── resume.pdf            # Your downloadable CV/Resume
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Fixed glassmorphism navbar & mobile menu
│   │   │   └── Footer.tsx    # Footer links & top CTA banner
│   │   ├── sections/
│   │   │   ├── Hero.tsx      # Terminal, rotating roles, ambient background
│   │   │   ├── About.tsx     # Frame photo, facts, count-up stats, learning strip
│   │   │   ├── Skills.tsx    # Proficiency progress bars & marquee strip
│   │   │   ├── Projects.tsx  # Featured split card & filtered projects
│   │   │   ├── Experience.tsx# Scroll-linked timeline & education block
│   │   │   ├── Services.tsx  # Services grid with key deliverables
│   │   │   ├── Testimonials.tsx # Carousel with ratings & autoplay
│   │   │   └── Contact.tsx   # Contact cards & validated message form
│   │   └── ui/
│   │       └── index.tsx     # Reusable building blocks (Card, Badge, Button, CountUp, Reveal, Section)
│   ├── data/                 # ALL project content lives here (pure data separation)
│   │   ├── profile.ts        # Personal details, roles, quick facts, stats
│   │   ├── experience.ts     # Career timeline, education, certifications
│   │   ├── projects.ts       # Projects list, categories, metrics, links
│   │   ├── skills.ts         # Skill categories, proficiency %, marquee items
│   │   └── content.ts        # Services, testimonials, CTA banner text
│   ├── hooks/
│   │   └── useTheme.ts       # Dark/light theme toggle with localStorage persistence
│   ├── types/
│   │   └── index.ts          # Central TypeScript interfaces
│   ├── App.tsx               # Main layout orchestrator
│   ├── index.css             # Tailwind directives & synchronized transitions
│   └── main.tsx              # React DOM entry point
├── index.html                # HTML entry & SEO meta tags
├── tailwind.config.ts        # Color tokens & font configuration
├── tsconfig.json             # TypeScript compiler settings
└── package.json
```

---

## ⚡ Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your machine.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/muhraza/portfolio-react.git
cd portfolio-react
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and visit: `http://localhost:5173`

### 4. Build for Production
To verify TypeScript types and generate the optimized production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📝 Customizing Your Content

All content is cleanly decoupled from components and lives in `src/data/`:

| File | What you can edit |
| :--- | :--- |
| **[`src/data/profile.ts`](src/data/profile.ts)** | Name, rotating roles, bio paragraphs, quick facts, stats numbers, contact details, social URLs. |
| **[`src/data/experience.ts`](src/data/experience.ts)** | Jobs, companies, date ranges, achievements, education, and certifications. |
| **[`src/data/projects.ts`](src/data/projects.ts)** | Project titles, descriptions, categories, tech tags, metrics, live URLs, GitHub repos, and `featured` flag. |
| **[`src/data/skills.ts`](src/data/skills.ts)** | Skill categories, proficiency percentages (1–100), and marquee technologies. |
| **[`src/data/content.ts`](src/data/content.ts)** | Services, deliverables, client testimonials, ratings, and bottom CTA banner copy. |
| **`public/profile.jpg`** | Replace with your portrait photo (or keep `public/avatar.svg`). |
| **`public/resume.pdf`** | Place your actual PDF resume here for the download buttons. |

---

## 📬 Contact Form Configuration

To connect the contact form to your own email:
1. Create a `.env` file in the root directory (refer to `.env.example`):
```env
VITE_FORM_ENDPOINT=https://formspree.io/f/your_form_id
```
2. Any message sent through the contact form will now deliver straight to your inbox.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploy to Netlify
- Build Command: `npm run build`
- Publish Directory: `dist`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
