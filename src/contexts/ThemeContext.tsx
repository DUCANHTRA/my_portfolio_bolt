import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/* Define the shape of the ThemeContext */
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

/* Create the ThemeContext with default undefined value */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/* ThemeProvider component to wrap the app and provide theme state */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || saved === null;
  });


  /* Side effect to apply the theme class to the document root */
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  /* Function to toggle between dark and light themes */
  const toggleTheme = () => setIsDark(!isDark);

  /* Provide the theme state and toggle function to children */
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
