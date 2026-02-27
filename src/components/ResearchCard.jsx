import { useContext } from 'react';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';

const ResearchCard = ({ research }) => {
  const { themeClasses } = useContext(ThemeContext);
  const ref = useInView();

  return (
    <div
      ref={ref}
      className="project-card group rounded-xl p-6 transition-all duration-300 ease-out border card-glow relative overflow-hidden"
      style={{
        backgroundColor: themeClasses.cardBackground,
        borderColor: themeClasses.border,
        border: `1px solid ${themeClasses.border}`,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="gradient-sweep"></div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: themeClasses.primaryText }}>{research.title}</h3>
      <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
      <p className="mb-4" style={{ color: themeClasses.secondaryText }}>{research.description}</p>
      {research.demo !== "#" && (
        <a
          href={research.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-lg font-medium transition-all duration-300"
          style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground }}
        >
          Read Case Study
        </a>
      )}
    </div>
  );
};

export default ResearchCard;
