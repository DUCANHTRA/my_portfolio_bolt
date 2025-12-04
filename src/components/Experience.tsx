import { Code, Network } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Volunteer Web Developer',
      company: 'Beta Builders',
      period: 'July 2025 – Present',
      isCurrent: true,
      icon: Code,
      responsibilities: [
        'Support early-stage startups to transform ideas into polished, high-impact landing pages.',
        'Build responsive, user-friendly web interfaces using modern HTML, CSS, Tailwind and JavaScript.',
        'Collaborate closely with UI/UX designers to implement designs for the website.',
        'Set up basic SEO and Google Analytics tracking to monitor traffic and improve page performance.',
        'Contribute to meaningful projects while expanding my technical knowledge and portfolio.',
      ],
    },
    {
      title: 'IT & Digital Transformation Intern',
      company: 'Ho Chi Minh City University of Management and Technology (UMT)',
      period: 'Dec 2024 – Feb 2025',
      isCurrent: false,
      icon: Network,
      responsibilities: [
        'Learned about the tools and systems used for managing campus-wide digital systems.',
        'Gained basic understanding of how databases are set up, maintained, and connected within internal systems.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Work Experience
        </h3>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative border-l-2 border-blue-500 dark:border-blue-400">

          {/* Iterate over the experiences array to create experience entries */}
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="mb-12 ml-6 group">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 group-hover:scale-110 transition-transform">
                  {/* Experience Icon from lucide-react */}
                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                </span>
                <h4 className="flex flex-wrap items-center gap-2 mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                  {exp.isCurrent && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Present
                    </span>
                  )}
                </h4>
                {/* Company and Period */}
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {exp.company} | {exp.period}
                </time>
                <ul className="list-disc list-inside mb-4 text-base font-normal text-gray-500 dark:text-gray-400 space-y-1">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
