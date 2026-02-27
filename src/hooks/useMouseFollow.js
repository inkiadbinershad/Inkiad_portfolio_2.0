import { useState } from 'react';

const useMouseFollow = (sensitivity = 20) => {
  const [transform, setTransform] = useState('translate(0px, 0px)');

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / sensitivity;
    const y = (e.clientY - centerY) / sensitivity;
    setTransform(`translate(${x}px, ${y}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('translate(0px, 0px)');
  };

  return { transform, handleMouseMove, handleMouseLeave };
};

export default useMouseFollow;
