import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Vue E-commerce',
      description:
        'A scalable full-stack e-commerce platform featuring secure JWT authentication, persistent shopping cart, and a responsive UI.',
      technologies: [
        { name: 'Vue 3', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Pinia', color: 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300' },
        { name: 'Node.js', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'MongoDB', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
      ],
      github: 'https://github.com/DUCANHTRA/vue-commerce-app',
      demo: 'https://vueclients.netlify.app/',
    },
    {
      title: 'React Firebase Hotel Booking Application',
      description:
        'A comprehensive hotel booking and management platform with secure Firebase authentication, role-based admin dashboard, interactive analytics, and responsive UI for seamless hotel and room management.',
      technologies: [
        { name: 'React', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Tailwind CSS', color: 'text-cyan-800 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300' },
        { name: 'Zustand', color: 'text-pink-800 bg-pink-100 dark:bg-pink-900 dark:text-pink-300' },
        { name: 'React Query', color: 'text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300' },
        { name: 'Firebase', color: 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300' },
        { name: 'Firestore', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Chart.js', color: 'text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300' },
        { name: 'React Router DOM', color: 'text-orange-800 bg-orange-100 dark:bg-orange-900 dark:text-orange-300' },
      ],
      github: 'https://github.com/your-username/react-firebase-app',
      demo: 'https://your-demo-link.netlify.app/',
    },
    {
      title: 'Movie Ticket Booking System',
      description:
        'A full-stack movie ticket booking platform with secure JWT authentication, role-based admin dashboard, real-time seat selection, and a responsive UI.',
      technologies: [
        { name: 'React', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Tailwind CSS', color: 'text-cyan-800 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300' },
        { name: 'Zustand', color: 'text-pink-800 bg-pink-100 dark:bg-pink-900 dark:text-pink-300' },
        { name: 'React Query', color: 'text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300' },
        { name: 'Node.js', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Express', color: 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300' },
        { name: 'MongoDB', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'JWT', color: 'text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300' },
      ],
      github: 'https://github.com/DUCANHTRA/movie_ticket',
      demo: 'https://movietickek.netlify.app/',
    },
    {
      title: 'Note-Taking Application',
      description:
        'A full-stack MERN note-taking application, JWT authentication, tag filtering, and feature-level debug logging.',
      technologies: [
        { name: 'React', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Tailwind CSS', color: 'text-cyan-800 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300' },
        { name: 'Node.js', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Express', color: 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300' },
        { name: 'MongoDB', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Zustand', color: 'text-pink-800 bg-pink-100 dark:bg-pink-900 dark:text-pink-300' },
        { name: 'Google Gemini AI', color: 'text-indigo-800 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300' },
      ],
      github: 'https://github.com/DUCANHTRA/note-taking',
      demo: 'https://notetaki.netlify.app/',
    },
    {
      title: 'Robot Stacker Simulation',
      description:
        'A full-stack web app simulating a robot navigating a 3×3 grid to pick up and stack colored circles under rule-based constraints with real-time visualization and action history logging.',
      technologies: [
        { name: 'React', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Vite', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Node.js', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Express', color: 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300' },
        { name: 'Axios', color: 'text-cyan-800 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300' },
      ],
      github: 'https://github.com/DUCANHTRA/robot-stacker',
      demo: 'https://robostacke.netlify.app/',
    },
    {
      title: 'Job Tracker Application',
      description:
        'A responsive job tracking web app with dashboard analytics, import/export functionality, and local storage persistence.',
      technologies: [
        { name: 'React 19', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Tailwind CSS', color: 'text-cyan-800 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300' },
        { name: 'Context API', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
      ],
      github: 'https://github.com/DUCANHTRA/react-job-tracker',
      demo: 'https://jobquestn.netlify.app/',
    },
    {
      title: 'Simple Logistics Path Finder',
      description:
        'A full-stack logistics route planning application featuring JWT authentication, interactive maps, shortest-path calculation, and saved route management.',
      technologies: [
        { name: 'React', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Vite', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Leaflet', color: 'text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300' },
        { name: 'React Query', color: 'text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300' },
        { name: 'Zustand', color: 'text-pink-800 bg-pink-100 dark:bg-pink-900 dark:text-pink-300' },
        { name: 'Tailwind CSS', color: 'text-cyan-800 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300' },
        { name: 'Node.js', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Express', color: 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300' },
        { name: 'MongoDB', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'JWT', color: 'text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300' },
      ],
      github: 'https://github.com/DUCANHTRA/react-leaflet_pathfinder',
    },
    {
      title: 'Orbital React: Simple Solar System Simulator',
      description:
        'An interactive 3D solar system simulator featuring animated planetary orbits, camera controls, and backend persistence for simulation settings.',
      technologies: [
        { name: 'React', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Vite', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Three.js', color: 'text-indigo-800 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300' },
        { name: 'React Three Fiber', color: 'text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300' },
        { name: 'Zustand', color: 'text-pink-800 bg-pink-100 dark:bg-pink-900 dark:text-pink-300' },
        { name: 'React Query', color: 'text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300' },
        { name: 'Tailwind CSS', color: 'text-cyan-800 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300' },
        { name: 'Node.js', color: 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300' },
        { name: 'Express', color: 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300' },
        { name: 'MongoDB', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
      ],
      github: 'https://github.com/DUCANHTRA/orbital_react',
    },
    {
      title: 'Simple Todo List App',
      description:
        'A Trello-like to-do list application allowing users to manage boards, lists, and cards with a modern UI.',
      technologies: [
        { name: 'React', color: 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300' },
        { name: 'Tailwind CSS', color: 'text-cyan-800 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300' },
      ],
      github: 'https://github.com/DUCANHTRA/react-trello-clone',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
      <div className="text-center mb-16 px-4">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A selection of projects I've worked on.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {/* Iterate over the projects array to create project cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900/50 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">
                {project.title}
              </h4>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                    title="View Code"
                  >
                    {/* Github Icon from lucide-react */}
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                    title="Live Demo"
                  >
                    {/* External Link Icon from lucide-react */}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
