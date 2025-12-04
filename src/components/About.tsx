export default function About() {
  const skills = [
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'TypeScript', color: 'text-green-400' },
    { name: 'C++', color: 'text-teal-600' },
    { name: 'C#', color: 'text-purple-600' },
    { name: 'Python', color: 'text-yellow-300' },
    { name: 'PHP', color: 'text-indigo-400' },
    { name: 'HTML5', color: 'text-orange-500' },
    { name: 'CSS3', color: 'text-teal-500' },
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Vue', color: 'text-green-500' },
    { name: 'Node.js', color: 'text-green-600' },
    { name: 'Express.js', color: 'text-gray-500' },
    { name: 'Bootstrap', color: 'text-purple-600' },
    { name: 'Tailwind CSS', color: 'text-cyan-500' },
    { name: 'MySQL', color: 'text-green-400' },
    { name: 'MongoDB', color: 'text-green-500' },
    { name: 'Git', color: 'text-red-500' },
    { name: 'GitHub Actions', color: 'text-gray-800 dark:text-white' },
    { name: 'Docker', color: 'text-teal-500' },
    { name: 'AWS', color: 'text-green-400' },
    { name: 'Azure', color: 'text-teal-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
      <div className="text-center mb-16 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Currently exploring areas such as full-stack development, cloud computing, and system
          design. I thrive in collaborative environments, have a keen interest in taking on
          technical challenges, and am always enthusiastic to expand my skill set.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technologies & Skills
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
        {/* Skill Tags
            Iterate over the skills array to create skill tags with appropriate colors
        */}
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform shadow-sm hover:shadow-md"
            >
              <span className={skill.color}>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
