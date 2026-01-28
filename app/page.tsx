import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 dark:bg-slate-950 dark:text-gray-100">
      {/* Header / Hero */}
      <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
            AMIT KUMAR
          </h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Skills
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* About / Intro */}
        <section
          id="about"
          className="flex flex-col md:flex-row gap-8 items-start animate-fade-in"
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Senior Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Senior Frontend Developer with 3.4+ years of experience building
              scalable, high-performance web applications using React.js,
              Next.js, TypeScript, and Tailwind CSS. Strong expertise in
              dashboard development, reusable component libraries, state
              management (Redux, Zustand), and automated testing (Jest, RTL,
              Cypress).
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:mern.amitkumar@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-sm font-medium"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href="https://linkedin.com/in/amit-g0swami"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 dark:bg-slate-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 transition"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/amit-g0swami?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 dark:bg-slate-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 transition"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 dark:text-gray-400 mt-4">
              <span className="flex items-center gap-1">
                <Mail size={14} /> mern.amitkumar@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone size={14} /> 8368554766
              </span>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* Experience */}
        <section id="experience" className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Professional Experience
          </h3>

          <div className="space-y-8">
            {/* Radiansys */}
            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 space-y-2">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Software Engineer
                </h4>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Calendar size={14} /> 09/2025 - 11/2025
                </div>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium">
                Radiansys Inc.
              </div>
              <ul className="list-disc list-outside ml-4 text-gray-600 dark:text-gray-300 space-y-1 mt-2">
                <li>
                  Worked on simpplr Design System (SDS) library built on top of
                  Radix UI, enabling consistent UI and UX across all company
                  products.
                </li>
              </ul>
            </div>

            {/* Stantech AI */}
            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 space-y-2">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Senior Frontend Developer
                </h4>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Calendar size={14} /> 04/2024 - 09/2025
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="text-blue-600 dark:text-blue-400 font-medium">
                  Stantech AI
                </div>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <MapPin size={12} /> Gurgaon
                </span>
              </div>
              <a
                href="https://salesappdashboardnew.stanvac.com/"
                target="_blank"
                className="text-sm text-blue-500 hover:underline flex items-center gap-1 w-fit"
              >
                salesappdashboardnew.stanvac.com <ExternalLink size={12} />
              </a>
              <ul className="list-disc list-outside ml-4 text-gray-600 dark:text-gray-300 space-y-1 mt-2">
                <li>
                  Designed and developed a scalable sales dashboard application
                  from scratch using React, Vite, and Tailwind CSS.
                </li>
                <li>
                  Built core modules for attendance tracking, sales targets,
                  performance analytics, and Daily Activity Reports (DAR).
                </li>
                <li>
                  Implemented real-time activity tracking, including distance
                  traveled and client visit counts for sales representatives.
                </li>
                <li>
                  Developed sales order management and dynamic sales
                  questionnaire modules for field agents.
                </li>
                <li>
                  Delivered responsive, high-performance UI with scalable
                  frontend architecture.
                </li>
              </ul>
            </div>

            {/* Rentickle */}
            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 space-y-2">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Frontend Developer
                </h4>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Calendar size={14} /> 11/2022 - 01/2024
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="text-blue-600 dark:text-blue-400 font-medium">
                  Rentickle
                </div>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <MapPin size={12} /> Gurgaon
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-gray-600 dark:text-gray-300 space-y-1 mt-2">
                <li>
                  Led end-to-end development of an internal dashboard management
                  system from initiation to production.
                </li>
                <li>
                  Built a reusable React component library using TypeScript,
                  Material-UI, Tailwind CSS, and Styled Components following
                  Atomic Design principles.
                </li>
                <li>
                  Implemented Storybook for UI documentation and component
                  visualization.
                </li>
                <li>
                  Developed unit tests using Jest and React Testing Library to
                  ensure component reliability.
                </li>
                <li>
                  Implemented end-to-end testing using Cypress across multiple
                  browsers.
                </li>
                <li>
                  Integrated Redux and Zustand for eﬃcient centralized state
                  management.
                </li>
                <li>
                  Created and published a custom reusable NPM package using
                  TSDX.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-md transition bg-white dark:bg-slate-900">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  React UI Library
                </h4>
                <a
                  href="https://www.npmjs.com/package/@amit_g0swami/react-ui-library"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                Developed and published a reusable React UI component library
                based on Material-UI.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs font-medium">
                  NPM Package
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs font-medium">
                  React
                </span>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-md transition bg-white dark:bg-slate-900">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  Baha
                </h4>
                <a
                  href="https://baha.co.in/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                Built a custom travel website for a small business client with a
                focus on performance and usability.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs font-medium">
                  Website
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs font-medium">
                  Performance
                </span>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-md transition bg-white dark:bg-slate-900 col-span-1 md:col-span-2">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  Shippivot
                </h4>
                <a
                  href="https://shippivot.in"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                Developed a full-stack order management platform for sellers and
                users.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Firebase Auth",
                  "Tailwind CSS",
                  "Twilio",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="Frontend"
              skills={[
                "React.js",
                "Next.js",
                "JavaScript (ES6+)",
                "TypeScript",
                "HTML5",
                "CSS3",
              ]}
            />
            <SkillCard
              title="Styling & UI"
              skills={[
                "Tailwind CSS",
                "Material-UI (MUI)",
                "Styled Components",
                "Theme UI",
              ]}
            />
            <SkillCard
              title="State Management"
              skills={["Redux", "Zustand", "TanStack Query"]}
            />
            <SkillCard
              title="Testing"
              skills={["Jest", "React Testing Library (RTL)", "Cypress"]}
            />
            <SkillCard
              title="Architecture & Tools"
              skills={["Atomic Design", "Storybook", "Vite", "TSDX", "NPM"]}
            />
            <SkillCard
              title="Backend & DevOps"
              skills={[
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase Auth",
                "NGINX",
                "Azure VM",
                "Git/GitHub",
              ]}
            />
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Education
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white dark:bg-slate-900 rounded-lg border border-gray-100 dark:border-slate-800">
            <div>
              <h4 className="font-bold text-lg">Bachelor of Technology</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Guru Gobind Singh Indraprastha University
              </p>
            </div>
            <div className="mt-2 sm:mt-0 font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full text-sm">
              CGPA: 8.5
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-100 dark:border-slate-800">
          <p>© {new Date().getFullYear()} Amit Kumar. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-gray-200 dark:border-slate-800 hover:shadow-sm transition">
      <h4 className="font-bold text-gray-900 dark:text-white mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
