import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, themeClasses } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/research', label: 'Research' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'backdrop-blur-md border-b shadow-lg'
        : 'backdrop-blur-sm border-b'
    }`} style={{
      backgroundColor: isScrolled ? `${themeClasses.cardBackground}95` : `${themeClasses.cardBackground}90`,
      borderColor: themeClasses.border
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="font-bold text-xl transition-colors duration-300 animate-fade-in"
            style={{ color: themeClasses.primaryText }}
          >
            INKIAD BIN ERSHAD RAFEY
          </Link>
          <div className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium transition-all duration-300 animate-fade-in ${
                  location.pathname === link.to
                    ? `after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:rounded-full`
                    : ''
                }`}
                style={{
                  color: location.pathname === link.to ? themeClasses.accent : themeClasses.secondaryText,
                  '--tw-hover-text-color': themeClasses.primaryText
                }}
                onMouseEnter={(e) => e.target.style.color = themeClasses.primaryText}
                onMouseLeave={(e) => e.target.style.color = location.pathname === link.to ? themeClasses.accent : themeClasses.secondaryText}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: themeClasses.cardBackground, border: `1px solid ${themeClasses.border}` }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
