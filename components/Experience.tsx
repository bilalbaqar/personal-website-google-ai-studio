
import React from 'react';
import Section from './Section';

const experiences = [
  {
    title: 'University of Chicago, Center for Translational Data Science',
    role: 'Director, Platform Engineering',
    description: 'Lead Platform Engineering and Cloud Operations teams, overseeing large-scale data and AI infrastructure initiatives that power groundbreaking cancer research and support national data commons.',
    tags: ['Kubernetes', 'Cloud Architecture', 'DevOps', 'AI/ML Infrastructure'],
  },
  {
    title: 'EBM Dynamics LLC',
    role: 'Founder',
    description: 'An AI and DevOps consulting firm delivering high-impact services and productized AI solutions. Projects include SOW Generators, AI Voice Agents, and workflow automation tools.',
    tags: ['AI Consulting', 'DevOps Services', 'Generative AI', 'Product Development'],
  },
  {
    title: '92Gen',
    role: 'Founder',
    description: 'A generative AI innovation lab focused on building creative and applied AI tools. We explore novel applications of LLMs and other generative models to solve real-world problems.',
    tags: ['AI Innovation', 'Product Lab', 'Creative AI', 'Applied Research'],
  },
];

const ExperienceCard: React.FC<{ title: string; role: string; description: string; tags: string[] }> = ({ title, role, description, tags }) => (
    <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-md font-semibold text-red-900 dark:text-red-700 mt-1">{role}</p>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
                <span key={tag} className="bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);


const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience">
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1">
            {experiences.map((exp) => (
                <ExperienceCard key={exp.title} {...exp} />
            ))}
        </div>
    </Section>
  );
};

export default Experience;
