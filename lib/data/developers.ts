// ============================================================
// Developers Data (Website Contributors)
// ============================================================

import type { Developer } from '@/lib/types';

export const DEVELOPERS: Developer[] = [
  {
    id: 'dev-1',
    name: 'Anurag Sharma',
    role: 'Lead Developer & Architect',
    image: 'https://res.cloudinary.com/dfvf4xowl/image/upload/v1779808498/aaaaaaaaaaaameeeeeeeee_1_k3i36n.png',
    socials: {
      linkedin: 'https://linkedin.com/in/anurag-sharma',
      github: 'https://github.com/anurag3407',
      email: 'anurag.sharma@nitp.ac.in',
    },
    contributions: [
      'Project Architecture',
      'Landing Page',
      'CI/CD Pipeline',
      'Performance Optimization',
    ],
    techStack: ['Next.js', 'TypeScript', 'GSAP', 'Three.js', 'Tailwind CSS'],
    imageTransform: { x: 0, y: 0, scale: 2.7 },
  },
  {
    id: 'dev-2',
    name: 'Priya Sharma',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: 'https://linkedin.com/in/priya-sharma',
      github: 'https://github.com/priyasharma',
      email: 'priya.sharma@nitp.ac.in',
    },
    contributions: [
      'Team Page',
      'Gallery Component',
      'Responsive Design',
      'Accessibility',
    ],
    techStack: ['React', 'CSS', 'Framer Motion', 'Figma'],
    imageTransform: { x: 0, y: 0, scale: 1 },
  },
  {
    id: 'dev-3',
    name: 'Vikram Singh',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: 'https://linkedin.com/in/vikram-singh',
      github: 'https://github.com/vikramsingh',
      email: 'vikram.singh@nitp.ac.in',
    },
    contributions: [
      'Blog System',
      'Contact Form API',
      'Events Page',
      'SEO Optimization',
    ],
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
    imageTransform: { x: 0, y: 0, scale: 1 },
  },
  {
    id: 'dev-4',
    name: 'Sanya Kapoor',
    role: 'UI/UX Designer & Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: 'https://linkedin.com/in/sanya-kapoor',
      github: 'https://github.com/sanyakapoor',
      email: 'sanya.kapoor@nitp.ac.in',
    },
    contributions: [
      'Design System',
      'UI Components',
      'Dark Theme',
      'Illustrations',
    ],
    techStack: ['Figma', 'CSS', 'GSAP', 'Adobe Suite'],
    imageTransform: { x: 0, y: 0, scale: 1 },
  },
  {
    id: 'dev-5',
    name: 'Rahul Verma',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: 'https://linkedin.com/in/rahul-verma',
      github: 'https://github.com/rahulverma',
      email: 'rahul.verma@nitp.ac.in',
    },
    contributions: [
      'API Development',
      'Database Architecture',
      'Security',
      'Authentication',
    ],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    imageTransform: { x: 0, y: 0, scale: 1 },
  },
];
