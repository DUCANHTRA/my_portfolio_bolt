import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto p-8">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; 2025 Mark Tran.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/DUCANHTRA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-600 transition-colors"
              aria-label="GitHub"
            >
              {/* Github Icon from lucide-react */}
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/duc-anh-tran-5b8227271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-600 transition-colors"
              aria-label="LinkedIn"
            >
              {/* Linkedin Icon from lucide-react */}
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
