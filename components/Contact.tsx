
import React from 'react';
import Section from './Section';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import EmailIcon from './icons/EmailIcon';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle form submission.
  };

  const socialLinks = [
    { href: 'https://linkedin.com/in/bilalbaqar', icon: LinkedInIcon, label: 'LinkedIn' },
    { href: 'https://github.com/bilalbaqar', icon: GitHubIcon, label: 'GitHub' },
    { href: 'mailto:bilal.baqar@example.com', icon: EmailIcon, label: 'Email' },
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-lg mx-auto">
        <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-8">
          Have a question or want to collaborate? Feel free to reach out.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" name="email" id="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea name="message" id="message" required rows={5} placeholder="Your Message" className="w-full px-4 py-3 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"></textarea>
          </div>
          <button type="submit" className="w-full bg-red-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-800 dark:bg-red-700 dark:hover:bg-red-600 transition-colors duration-300">
            Send Message
          </button>
        </form>
        <div className="mt-12 flex justify-center space-x-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-700 transition-colors"
                    aria-label={label}
                >
                    <Icon className="w-8 h-8" />
                </a>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
