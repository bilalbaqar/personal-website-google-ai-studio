
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Bilal Baqar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
