import React, { useEffect, useState } from 'react';

const SplitTextReveal = ({ text, delay = 0, children }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const wordArray = text.split(' ');
    setWords(wordArray);
  }, [text]);

  return (
    <div style={{ display: 'inline' }}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word-reveal"
          style={{
            display: 'inline-block',
            marginRight: '0.25em'
          }}
        >
          <span
            style={{
              display: 'inline-block',
              animationDelay: `${delay + index * 0.15}s`
            }}
          >
            {word}
          </span>
        </span>
      ))}
      {children && <span style={{ marginRight: '0.25em' }}>{children}</span>}
    </div>
  );
};

export default SplitTextReveal;
