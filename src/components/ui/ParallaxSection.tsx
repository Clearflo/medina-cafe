import React, { useEffect, useState, useRef } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  height?: string;
  children: React.ReactNode;
  overlayColor?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageUrl,
  height = 'min-h-[400px]',
  children,
  overlayColor = 'from-accent-900/80 to-accent-800/70'
}) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight && top > -windowHeight) {
        const scrollPosition = window.scrollY;
        const elementPosition = sectionRef.current.offsetTop;
        const distance = scrollPosition - elementPosition;
        const parallaxEffect = distance * 0.4;
        
        setOffset(parallaxEffect);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`relative ${height} flex items-center overflow-hidden`}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offset * 0.15}px)`,
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;