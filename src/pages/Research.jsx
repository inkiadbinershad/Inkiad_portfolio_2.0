import { useContext } from 'react';
import { research } from '../data/research';
import ResearchCard from '../components/ResearchCard';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';

const Research = () => {
  const { themeClasses } = useContext(ThemeContext);
  const contentRef = useInView();

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeClasses.background }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={contentRef}>
        <h1 className="text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Research & Case Studies</h1>
        <p className="text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
          Structured thinking, analysis, and problem-solving through research-style and case-study content
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {research.map((item, index) => (
            <div key={item.id} className="project-card glass rounded-xl overflow-hidden">
              <div className="gradient-sweep"></div>
              <ResearchCard research={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
