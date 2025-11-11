
import React from 'react';
import Section from './Section';

const interests = [
  {
    icon: '🏋️',
    name: 'Fitness',
    description: 'Co-founder of EpicFitness, a remote coaching venture. Passionate about strength training and personal health.',
  },
  {
    icon: '⛳️',
    name: 'Golf',
    description: 'Enjoying the mental and physical challenge of the game, always striving to improve my swing.',
  },
  {
    icon: '💻',
    name: 'Homelab & Smart Home',
    description: 'Building and experimenting with my own server rack and smart home automations to test new technologies.',
  },
  {
    icon: '✈️',
    name: 'Travel',
    description: 'Exploring new cultures and landscapes, bringing back fresh perspectives to both life and work.',
  },
];

const InterestCard: React.FC<{ icon: string; name: string; description: string }> = ({ icon, name, description }) => (
    <div className="text-center p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{name}</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
);

const Interests: React.FC = () => {
  return (
    <Section id="interests" title="Personal Interests">
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {interests.map((interest) => (
          <InterestCard key={interest.name} {...interest} />
        ))}
      </div>
    </Section>
  );
};

export default Interests;
