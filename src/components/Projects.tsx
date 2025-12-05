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
