import { useState } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  {/* Theme context to manage dark/light mode 
    useTheme provides isDark boolean and toggleTheme function
    */}
  const { isDark, toggleTheme } = useTheme();

  {/* State to manage mobile menu open/close */}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  {/* Smooth scroll handler for navigation links */}
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Welcome to my Portfolio
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6 items-center text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-gray-700 dark:text-gray-200 font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="md:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {/* Menu Icon from lucide-react */}
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 min-w-[200px]">
                <nav className="flex flex-col py-2 px-2">

                  {/* Iterate over the navLinks array to create mobile nav links */}
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}

                      /* Smooth scroll on click */
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center text-gray-700 dark:text-gray-200 font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {/* Sun and Moon Icons from lucide-react */}
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
