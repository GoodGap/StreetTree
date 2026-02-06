
import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-6 ${dark ? 'bg-slate-900 text-white' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className={`text-3xl font-bold mb-8 text-center serif ${dark ? 'text-white' : 'text-slate-800'}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
