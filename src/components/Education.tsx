export default function Education() {
  const certifications = [
    'The Road to React: The One with Hooks (Educative)',
    'Learn Express.js (Educative)',
    'Frontend Development (Elevvo Internship)',
  ];

  const relevantCourses = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Networking & Switching',
    'Cloud Computing',
    'Operating Systems',
    'Introduction to Software Engineering',
    'Concurrent Programming',
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-center md:text-left mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900/50 shadow-sm">
              <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                Swinburne University of Technology
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Bachelor of Computer Science, Software Development
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                March 2023 – November 2025
              </p>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                Relevant Coursework
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                {relevantCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="text-center md:text-left mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Certificates
              </h3>
            </div>
            <ul className="space-y-4">
              {/* Iterate over the certifications array to create list items */}
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900/50 shadow-sm text-gray-900 dark:text-white"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
