
import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import EmailIcon from './icons/EmailIcon';

const Hero: React.FC = () => {
  const socialLinks = [
    { href: 'https://linkedin.com/in/bilalbaqar', icon: LinkedInIcon, label: 'LinkedIn' },
    { href: 'https://github.com/bilalbaqar', icon: GitHubIcon, label: 'GitHub' },
    { href: 'mailto:bilal.baqar@example.com', icon: EmailIcon, label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <img
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-slate-200 dark:border-slate-700 shadow-lg"
                    src="https://picsum.photos/400"
                    alt="Bilal Baqar headshot"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Bilal Baqar
                </h1>
                <p className="mt-4 text-lg md:text-xl font-medium text-red-900 dark:text-red-700">
                    Technology Leader, Entrepreneur, AI Systems Engineer
                </p>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                    Building intelligent systems at scale — bridging AI, engineering, and entrepreneurship.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-red-900 hover:text-white dark:hover:bg-red-700 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                            aria-label={label}
                        >
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
