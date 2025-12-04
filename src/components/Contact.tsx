import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
      <div className="text-center mb-16 px-4">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Get in Touch
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm open to new opportunities and collaborations.
        </p>
      </div>

      <div className="flex justify-center items-center px-4">
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-3">
            {/*
            Mail Icon from lucide-react
            */}
            <Mail className="w-5 h-5 text-green-600" />
            <a
              href="mailto:trand4832@gmail.com"
              className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              trand4832@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            {/*
            Phone Icon from lucide-react
            */}
            <Phone className="w-5 h-5 text-green-600" />
            <a
              href="tel:+61410901875"
              className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              (+61) 410 901 875
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
