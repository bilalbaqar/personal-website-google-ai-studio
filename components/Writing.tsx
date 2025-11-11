
import React from 'react';
import Section from './Section';

const posts = [
  {
    title: 'From Systems to Strategy: Lessons from Building AI Infrastructure',
    excerpt: 'Exploring the shift from pure engineering challenges to strategic thinking required when building and scaling AI platforms for research and enterprise.',
  },
  {
    title: 'Why Generative AI Will Redefine Consulting',
    excerpt: 'A look at how generative AI tools are not just augmenting but fundamentally changing the consulting landscape, from discovery to delivery.',
  },
  {
    title: 'The Modern Homelab: More Than Just a Hobby',
    excerpt: 'How my personal homelab became a sandbox for enterprise-grade technologies, accelerating learning and innovation in my professional work.',
  },
];

const PostCard: React.FC<{ title: string; excerpt: string }> = ({ title, excerpt }) => (
    <a href="#" className="block bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{excerpt}</p>
        <div className="mt-4 text-sm font-semibold text-red-900 dark:text-red-700">
            Read more &rarr;
        </div>
    </a>
);

const Writing: React.FC = () => {
  return (
    <Section id="writing" title="Writing & Reflections">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </div>
    </Section>
  );
};

export default Writing;
