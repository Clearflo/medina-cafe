import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-accent-700 mb-2 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-primary-700 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;