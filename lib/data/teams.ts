// ============================================================
// Teams & Members Data
// ============================================================

import type { Team } from '@/lib/types';

export const TEAMS: Team[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    slug: 'web-development',
    description:
      'Building modern, performant web applications using cutting-edge frameworks. From static sites to full-stack platforms, we ship production-grade products.',
    icon: '🌐',
    color: '#00D4FF',
    leader: {
      id: 'web-lead',
      name: 'Arjun Mehta',
      role: 'Team Lead',
      image: '/images/team/placeholder-1.png',
      socials: {
        linkedin: 'https://linkedin.com/in/arjun-mehta',
        github: 'https://github.com/arjunmehta',
        email: 'arjun.mehta@nitp.ac.in',
      },
      quote: 'The web is the most democratic platform ever created. Let\'s build it right.',
    },
    members: [
      {
        id: 'web-sr-1',
        name: 'Priya Sharma',
        role: 'Senior Developer',
        image: '/images/team/placeholder-2.png',
        socials: {
          linkedin: 'https://linkedin.com/in/priya-sharma',
          github: 'https://github.com/priyasharma',
          email: 'priya.sharma@nitp.ac.in',
        },
      },
      {
        id: 'web-sr-2',
        name: 'Vikram Singh',
        role: 'Senior Developer',
        image: '/images/team/placeholder-3.png',
        socials: {
          linkedin: 'https://linkedin.com/in/vikram-singh',
          github: 'https://github.com/vikramsingh',
          email: 'vikram.singh@nitp.ac.in',
        },
      },
      {
        id: 'web-jr-1',
        name: 'Sneha Patel',
        role: 'Junior Developer',
        image: '/images/team/placeholder-4.png',
        socials: {
          linkedin: 'https://linkedin.com/in/sneha-patel',
          github: 'https://github.com/snehapatel',
          email: 'sneha.patel@nitp.ac.in',
        },
      },
      {
        id: 'web-jr-2',
        name: 'Rohit Kumar',
        role: 'Junior Developer',
        image: '/images/team/placeholder-5.png',
        socials: {
          linkedin: 'https://linkedin.com/in/rohit-kumar',
          github: 'https://github.com/rohitkumar',
          email: 'rohit.kumar@nitp.ac.in',
        },
      },
    ],
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    slug: 'blockchain',
    description:
      'Exploring decentralized technologies, smart contracts, and Web3. Building DApps and learning Solidity, Ethereum, and beyond.',
    icon: '⛓',
    color: '#00BFFF',
    leader: {
      id: 'blockchain-lead',
      name: 'Kavya Reddy',
      role: 'Team Lead',
      image: '/images/team/placeholder-6.png',
      socials: {
        linkedin: 'https://linkedin.com/in/kavya-reddy',
        github: 'https://github.com/kavyareddy',
        email: 'kavya.reddy@nitp.ac.in',
      },
      quote: 'Decentralization isn\'t just technology — it\'s a philosophy of trust.',
    },
    members: [
      {
        id: 'bc-sr-1',
        name: 'Aditya Jha',
        role: 'Smart Contract Dev',
        image: '/images/team/placeholder-7.png',
        socials: {
          linkedin: 'https://linkedin.com/in/aditya-jha',
          github: 'https://github.com/adityajha',
          email: 'aditya.jha@nitp.ac.in',
        },
      },
      {
        id: 'bc-jr-1',
        name: 'Nisha Gupta',
        role: 'Junior Developer',
        image: '/images/team/placeholder-8.png',
        socials: {
          linkedin: 'https://linkedin.com/in/nisha-gupta',
          github: 'https://github.com/nishagupta',
          email: 'nisha.gupta@nitp.ac.in',
        },
      },
    ],
  },
  {
    id: 'gen-ai',
    name: 'Gen AI',
    slug: 'gen-ai',
    description:
      'Pushing the boundaries of generative AI — from LLMs and prompt engineering to building AI-powered tools and applications.',
    icon: '🤖',
    color: '#FF003C',
    leader: {
      id: 'genai-lead',
      name: 'Rishi Verma',
      role: 'Team Lead',
      image: '/images/team/placeholder-9.png',
      socials: {
        linkedin: 'https://linkedin.com/in/rishi-verma',
        github: 'https://github.com/rishiverma',
        email: 'rishi.verma@nitp.ac.in',
      },
      quote: 'AI doesn\'t replace creativity — it amplifies it.',
    },
    members: [
      {
        id: 'genai-sr-1',
        name: 'Ananya Mishra',
        role: 'AI Researcher',
        image: '/images/team/placeholder-10.png',
        socials: {
          linkedin: 'https://linkedin.com/in/ananya-mishra',
          github: 'https://github.com/ananyamishra',
          email: 'ananya.mishra@nitp.ac.in',
        },
      },
      {
        id: 'genai-jr-1',
        name: 'Karan Yadav',
        role: 'Junior Developer',
        image: '/images/team/placeholder-11.png',
        socials: {
          linkedin: 'https://linkedin.com/in/karan-yadav',
          github: 'https://github.com/karanyadav',
          email: 'karan.yadav@nitp.ac.in',
        },
      },
    ],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    slug: 'machine-learning',
    description:
      'Data science, neural networks, and classical ML. From Kaggle competitions to research papers — we crunch data and build models.',
    icon: '🧠',
    color: '#FF3366',
    leader: {
      id: 'ml-lead',
      name: 'Deepak Nair',
      role: 'Team Lead',
      image: '/images/team/placeholder-12.png',
      socials: {
        linkedin: 'https://linkedin.com/in/deepak-nair',
        github: 'https://github.com/deepaknair',
        email: 'deepak.nair@nitp.ac.in',
      },
      quote: 'Data tells the story. ML writes the ending.',
    },
    members: [
      {
        id: 'ml-sr-1',
        name: 'Meera Krishnan',
        role: 'Data Scientist',
        image: '/images/team/placeholder-13.png',
        socials: {
          linkedin: 'https://linkedin.com/in/meera-krishnan',
          github: 'https://github.com/meerakrishnan',
          email: 'meera.krishnan@nitp.ac.in',
        },
      },
      {
        id: 'ml-jr-1',
        name: 'Sahil Bansal',
        role: 'Junior ML Engineer',
        image: '/images/team/placeholder-14.png',
        socials: {
          linkedin: 'https://linkedin.com/in/sahil-bansal',
          github: 'https://github.com/sahilbansal',
          email: 'sahil.bansal@nitp.ac.in',
        },
      },
    ],
  },
  {
    id: 'pr',
    name: 'PR',
    slug: 'pr',
    description:
      'Managing the public face of WnCC. From outreach and sponsorships to partnerships — we connect the club with the world.',
    icon: '📢',
    color: '#00A3CC',
    leader: {
      id: 'pr-lead',
      name: 'Ishita Agarwal',
      role: 'Team Lead',
      image: '/images/team/placeholder-15.png',
      socials: {
        linkedin: 'https://linkedin.com/in/ishita-agarwal',
        github: 'https://github.com/ishita-agarwal',
        email: 'ishita.agarwal@nitp.ac.in',
      },
      quote: 'Great work deserves a great audience.',
    },
    members: [
      {
        id: 'pr-sr-1',
        name: 'Tanvi Bhatt',
        role: 'Senior PR Executive',
        image: '/images/team/placeholder-16.png',
        socials: {
          linkedin: 'https://linkedin.com/in/tanvi-bhatt',
          github: 'https://github.com/tanvi-bhatt',
          email: 'tanvi.bhatt@nitp.ac.in',
        },
      },
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media',
    slug: 'social-media',
    description:
      'Crafting the club\'s digital presence across platforms. Content strategy, engagement, and building an online community that resonates.',
    icon: '📱',
    color: '#E60036',
    leader: {
      id: 'sm-lead',
      name: 'Raghav Tiwari',
      role: 'Team Lead',
      image: '/images/team/placeholder-17.png',
      socials: {
        linkedin: 'https://linkedin.com/in/raghav-tiwari',
        github: 'https://github.com/raghavtiwari',
        email: 'raghav.tiwari@nitp.ac.in',
      },
      quote: 'Every post is a pixel in the bigger picture.',
    },
    members: [
      {
        id: 'sm-sr-1',
        name: 'Pooja Sinha',
        role: 'Content Strategist',
        image: '/images/team/placeholder-18.png',
        socials: {
          linkedin: 'https://linkedin.com/in/pooja-sinha',
          github: 'https://github.com/pooja-sinha',
          email: 'pooja.sinha@nitp.ac.in',
        },
      },
    ],
  },
  {
    id: 'design',
    name: 'Design',
    slug: 'design',
    description:
      'Visual storytelling through UI/UX design, graphics, and branding. We make technology beautiful and accessible.',
    icon: '🎨',
    color: '#A1A6B4',
    leader: {
      id: 'design-lead',
      name: 'Sanya Kapoor',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://linkedin.com/in/sanya-kapoor',
        github: 'https://github.com/sanyakapoor',
        email: 'sanya.kapoor@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Aman Raj',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://linkedin.com/in/aman-raj',
          github: 'https://github.com/aman-raj',
          email: 'aman.raj@nitp.ac.in',
        },
      },
    ],
  },
];
