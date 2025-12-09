import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="text-center py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
          Mark Tran
        </h2>
        <h3 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Graduate Computer Science - Aspiring Software Developer
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          I am passionate about building impactful software and constantly learning new technologies.
          With a strong foundation in software development, I create solutions that solve real-world
          problems, from web applications to algorithm-driven systems.
        </p>
        <div className="flex flex-row gap-4 justify-center">
          <a
            href="https://github.com/DUCANHTRA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transform hover:scale-105 transition-all font-semibold"
          >
            {/* Github Icon from lucide-react */}
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mark-tran-709b24335/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all font-semibold"
          >
            {/* Linkedin Icon from lucide-react */}
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
