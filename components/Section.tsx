
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-slate-900 dark:text-white">
          {title}
        </h2>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
