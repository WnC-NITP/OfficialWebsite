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
      name: 'Varchas Kumar',
      role: 'Team Lead',
      image: '/images/team/placeholder-1.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/varchas-kumar-073a75366/',
        github: 'https://github.com/varchaskumar',
        email: 'varchask.ug25.ec@nitp.ac.in',
      },
      quote: 'The web is the most democratic platform ever created. Let\'s build it right.',
    },
    members: [
      {
        id: 'web-sr-1',
        name: 'Suraj Chauhan',
        role: 'Senior Developer',
        image: '/images/team/placeholder-2.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/suraj-chauhan-a096443a1/',
          github: 'https://github.com/meSuraj004',
          email: 'schuahan0004@gmail.com',
        },
      },
      {
        id: 'web-sr-2',
        name: 'Kirti',
        role: 'Senior Developer',
        image: '/images/team/placeholder-3.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/kirti-708466367/',
          github: 'https://github.com/kirtic921',
          email: 'kirti.dd25.ch@nitp.ac.in',
        },
      },
      {
        id: 'web-jr-1',
        name: 'Manish Kumar',
        role: 'Junior Developer',
        image: '/images/team/placeholder-4.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/manish-gupta-205567377',
          github: 'https://github.com/manish-gupta-09',
          email: 'manishk.ug25.ec@nitp.ac.in',
        },
      },
      {
        id: 'web-jr-2',
        name: 'Sweety Gupta',
        role: 'Junior Developer',
        image: '/images/team/placeholder-5.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/sweety-gupta-817a99399',
          github: 'https://github.com/sg293307-cmd',
          email: 'Sweetyg.ug25.cs@nitp.ac.in',
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
      name: 'Ritesh Yadav',
      role: 'Team Lead',
      image: '/images/team/placeholder-6.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/ritesh-yadav-6575573a9?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        github: 'https://github.com/riteshyadav33302111-cell',
        email: 'riteshy.ug25.cs@nitp.ac.in',
      },
      quote: 'Decentralization isn\'t just technology — it\'s a philosophy of trust.',
    },
    members: [
      {
        id: 'bc-sr-1',
        name: 'Anushka Singh',
        role: 'Smart Contract Dev',
        image: '/images/team/placeholder-7.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/anushka-singh-bba593367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/anushkasingh250107-cmd',
          email: 'anushkasingh250107@gmail.com',
        },
      },
      {
        id: 'bc-jr-1',
        name: 'Navya Anand',
        role: 'Junior Developer',
        image: '/images/team/placeholder-8.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/navya-anand-b38744387?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
          github: 'https://github.com/navyaanand954-jpg',
          email: 'navyaa.ug25.cs@nitp.ac.in',
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
      name: 'Satyam Kumar Jha',
      role: 'Team Lead',
      image: '/images/team/placeholder-9.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/satyam-kumar-jha-6a4a4736b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        github: 'satyamkumarjhaa2008-afk',
        email: 'satyamj.ug25.ec@nitp.ac.in',
      },
      quote: 'AI doesn\'t replace creativity — it amplifies it.',
    },
    members: [
      {
        id: 'genai-sr-1',
        name: 'Dhruv Jain',
        role: 'AI Researcher',
        image: '/images/team/placeholder-10.png',
        socials: {
          linkedin: 'www.linkedin.com/in/dhruvjain220781',
          github: 'https://github.com/Dhruvjain2207',
          email: 'dhruvj.ug25.cs@nitp.ac.in ',
        },
      },
      {
        id: 'genai-jr-1',
        name: 'Anjali Kumari',
        role: 'Junior Developer',
        image: '/images/team/placeholder-11.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/anjali-kumari-028181392?utm_source=share_via&utm_content=profile&utm_medium=member_android',
          github: 'https://github.com/Anjali260-ui',
          email: 'anjali.kr.gr318@gmail.com',
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
      name: 'Sujal Kumar',
      role: 'Team Lead',
      image: '/images/team/placeholder-12.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/sujal-kumar-56ab91240',
        github: 'https://github.com/SujalKumar-156',
        email: 'Sujalk.ug25.cs@nitp.ac.in',
      },
      quote: 'Data tells the story. ML writes the ending.',
    },
    members: [
      {
        id: 'ml-sr-1',
        name: 'Aditya Kumar',
        role: 'Data Scientist',
        image: '/images/team/placeholder-13.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/aditya-kumar-57a988374/',
          github: 'https://github.com/AdityaKumar1511 ',
          email: 'aditya.kumar00706@gmail.com',
        },
      },
      {
        id: 'ml-jr-1',
        name: 'Pavan Kumar',
        role: 'Junior ML Engineer',
        image: '/images/team/placeholder-14.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/pavank91/',
          github: 'https://github.com/pavank-hub',
          email: 'pavank.ug24.ec@nitp.ac.in',
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
      name: 'Rick Roy',
      role: 'Team Lead',
      image: '/images/team/placeholder-15.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/rick-roy-43992233a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        github: 'https://github.com/Rick13211',
        email: 'rickr.ug24.cs@nitp.ac.in',
      },
      quote: 'Great work deserves a great audience.',
    },
    members: [
      {
        id: 'pr-sr-1',
        name: 'Prashasti Srivastava',
        role: 'Senior PR Executive',
        image: '/images/team/placeholder-16.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/prashasti-shrivastava-5067b63a8',
          github: 'https://github.com/Prashasti-Shrivastava',
          email: 'prashastis.ug25.cs@nitp.ac.in',
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
      name: 'Zaid Ali',
      role: 'Team Lead',
      image: '/images/team/placeholder-17.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/zaid-ali-40a198233?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        github: 'https://github.com/zaidali01',
        email: 'zaidali1446@gmail.com',
      },
      quote: 'Every post is a pixel in the bigger picture.',
    },
    members: [
      {
        id: 'sm-sr-1',
        name: 'Sakshi Priya',
        role: 'Content Strategist',
        image: '/images/team/placeholder-18.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/sakshi-verma-9206b838b',
          github: 'https://github.com/sakshipriya21-rgb',
          email: 'sakship.ug25.ec@nitp.ac.in',
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
      name: 'Biswajit Mandal',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/biswajit-mandal-0b3790273?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        github: 'https://github.com/BiswajitMandal6',
        email: 'biswajitm.ug24.cs@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Akrati Singh',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: '',
          github: '',
          email: '',
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
      name: 'Golu Kumar',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: '',
        github: '',
        email: '',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Kaif Hussain',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: '',
          github: '',
          email: '',
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
      name: 'Archana',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/archana-7b9049386/',
        github: 'https://github.com/archana-117',
        email: 'archana.ug25.mae@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Shreyash Tripathi',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/shreyash-tripathi-320352386',
          github: 'https://github.com/shreyashtripathi1077-cmd',
          email: 'shreyasht.ug25.me@nitp.ac.in',
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
      name: 'Kajal Kumari',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: '',
        github: '',
        email: '',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Sumit Yadav',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin:'',
          github: '',
          email: '',
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
      name: 'Abhinav Anand',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/anandabhinav01',
        github: '',
        email: 'abhinava.ug24.ee@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Padala Monish Reddy',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/padala-monish-reddy-a7780b30b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
          github: 'https://github.com/MonishPadala-13',
          email: 'Padalar.ug24.me@nitp.ac.in',
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
      name: 'Shobhit Kumar',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/shobhit-kumar-215600325?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        github: 'https://github.com/Shobhit2702',
        email: 'shobhitk.ug24.ec@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Tanushree Thakur',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'www.linkedin.com/in/tanushree-thakur-2a4020248',
          github: 'https://github.com/tanushreethak-ui',
          email: 'tanushreet.dd25.ph@nitp.ac.in',
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
      name: 'Sriram S B',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: '',
        github: '',
        email: '',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Sakshi Kumar',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/sakshi-dubey-51aa39386',
          github: 'https://github.com/sakshikdube-ctrl',
          email: 'sakshikdube@gmail.com',
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
      name: 'Tanishka Jindal',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/tanishka-jindal-523343406/',
        github: 'https://github.com/TanishkaJindal',
        email: 'tanishkaj.ug25.cs@nitp.ac.in ',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Rudra Pratap',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/rudra-pratap-a856b7373',
          github: 'https://github.com/rudraaa-pratap',
          email: 'ruddrrraaa@gmail.com',
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
      name: 'Ashish Raj',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/ashish-raj-408861380',
        github: 'https://github.com/ashishraj-web',
        email: 'ashishr.ug25.cs@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Ayush Nag',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/ayush-nag-21324a314',
          github: 'https://github.com/dev-ayush-17',
          email: 'ayushn.ug25.cs@nitp.ac.in',
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
      name: 'Akshita Banothu',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: '',
        github: '',
        email: '',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Farheen Rehman',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: '',
          github: '',
          email: '',
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
      name: 'Anand Kashyap',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'www.linkedin.com/in/anand-kashyap-1915ew',
        github: 'https://github.com/kashyapanand21',
        email: 'anandk.ug25.cs@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Nikhil Kumar',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin:'linkedin.com/in/nikhil-kumar-01868038a ',
          github: 'https://github.com/nikhilll1907-source',
          email: 'nikhilll1907@gmail.com',
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
      name: 'Sonu Kumar',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: '',
        github: '',
        email: '',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Vivek Kumar',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/vivek-kumar-8a18a031a',
          github: 'https://github.com/Vivekkumar0995',
          email: 'vivekk.dd24.cs@nitp.ac.in',
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
      name: 'Ashutosh Kumar',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/ashutoshkumar18',
        github: 'https://github.com/ashunitp07',
        email: 'ashutoshk.dd24.ec@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Piyush Kumar',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'www.linkedin.com/in/piyush-kumar-043013380',
          github: 'https://github.com/piyushbxr802123-prog',
          email: 'piyushkkr.ug24.cs@nitp.ac.in',
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
      name: 'Dipu',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://linkedin.com/in/dipu-prakash-a563b836b',
        github: 'https://github.com/dipuprakash18',
        email: 'dipup.ug24.ee@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Madhukar Kumar',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: '',
          github:'',
          email: '',
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
      name: 'Divyanshu Singh',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: '',
        github: '',
        email: '',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Ritu Raj Singh',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/ritu-raj-singh-457829363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/riturajrajput240305-lab',
          email: 'ritus.dd25.cs@nitp.ac.in',
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
      name: 'Shirsh Mani',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/shirsh-mani-a75938410/',
        github: 'https://github.com/shirshmani',
        email: 'shirshm.ug25.cs@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Naincy Yadav',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/naincy-y-50ab5238b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/Naincy1006',
          email: 'naincyy.ug25.me@nitp.ac.in',
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
      name: 'Nishant Kumar',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/nishant-kumar-b56aaa316',
        github: 'https://github.com/TECHTHUNDER2018',
        email: 'nishantk.ug24.cs@nitp.ac.in',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Aastik Verma',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/aastik-verma-096841395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/aastikverma-bit',
          email: 'aastikv.ug25.cs@nitp.ac.in',
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
      name: 'Amrendra Kumar Dinkar',
      role: 'Team Lead',
      image: '/images/team/placeholder-19.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/amrendra-kumar-dinkar-699b94360',
        github: 'https://github.com/Ananad-910-tech',
        email: 'amrendrakumardinkar7@gmail.com',
      },
      quote: 'Design is intelligence made visible.',
    },
    members: [
      {
        id: 'design-sr-1',
        name: 'Sridhant Dalai',
        role: 'UI/UX Designer',
        image: '/images/team/placeholder-20.png',
        socials: {
          linkedin: 'https://www.linkedin.com/in/sridhant-dalai-44738a376',
          github: 'https://github.com/sridhantDalai',
          email: 'sridhant.dev@gmail.com',
        },
      },
    ],
  },
];