import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';

const About = () => {
  const { themeClasses } = useContext(ThemeContext);
  const cardRef = useInView();
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    import('../components/Gemini_Generated_Image_9ksb5a9ksb5a9ksb.png')
      .then((m) => setLogoSrc(m.default || m))
      .catch(() => setLogoSrc(null));
  }, []);


  return (
    <div className="min-h-screen" style={{ backgroundColor: themeClasses.background }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>About Me</h1>
        <div ref={cardRef} className="rounded-xl p-8 blur-reveal transition-all duration-300 ease-out cursor-pointer card-glow" style={{ backgroundColor: themeClasses.cardBackground, border: `1px solid ${themeClasses.border}`, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {logoSrc ? (
                <img src={logoSrc} alt="Logo" className="w-48 h-48 mx-auto mb-6 rounded-full object-cover shadow-lg blur-reveal card-glow" style={{ backgroundColor: themeClasses.accent }} />
              ) : (
                <div className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg blur-reveal card-glow" style={{ backgroundColor: themeClasses.accent }}>
                  <span style={{ color: themeClasses.cardBackground, fontSize: '4rem', fontWeight: 'bold' }}>IB</span>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText }}>
                I'm a <span className="keyword-glow">Computer Science student</span> from Bangladesh with real-world experience in startup leadership, frontend development, and digital content creation.
              </p>
              <p className="text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText, animationDelay: '0.15s' }}>
                Over the past year, I worked in a <span className="keyword-glow">fast-moving startup environment</span> where I took on high-responsibility roles, including Frontend Team Lead and later management-level responsibilities. This experience shaped my ability to learn fast, adapt under pressure, and take ownership.
              </p>
              <p className="text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText, animationDelay: '0.3s' }}>
                I believe in <span className="keyword-glow">skill-first growth</span>, ethical work, and building things that last. I'm currently transitioning into freelancing and remote work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
