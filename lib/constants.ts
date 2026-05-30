// ============================================================
// WnCC NIT Patna — Site-Wide Constants
// ============================================================

import type { LeaderProfile } from '@/lib/types';

export const SITE_CONFIG = {
  name: 'Web & Coding Club',
  shortName: 'WnCC',
  institution: 'NIT Patna',
  fullName: 'Web and Coding Club, NIT Patna',
  tagline: 'Where Ideas Become Reality',
  description:
    'A thriving community of builders, coders, and developers at NIT Patna. We turn ideas into impactful projects through collaboration, innovation, and relentless learning.',
  url: 'https://wncc-nitpatna.org',
  email: 'coding.club@nitp.ac.in',
  address: 'NIT Patna, Ashok Rajpath, Patna, Bihar - 800005',
} as const;

export const PI_PROFILE: LeaderProfile = {
  name: 'Dr. Rajesh Kumar',
  title: 'Professor-in-Charge',
  department: 'Department of Computer Science & Engineering',
  image: '/images/team/pi-placeholder.png',
  quote:
    'Technology is the bridge between imagination and reality. WnCC empowers students to cross that bridge every day.',
  designation: 'PI, Web & Coding Club',
};

export const PRESIDENT_PROFILE: LeaderProfile = {
  name: 'Anurag Sharma',
  title: 'President',
  department: 'B.Tech CSE, 3rd Year',
  image: '/images/team/president-placeholder.png',
  quote:
    'Building together is not just about code — it\'s about community, growth, and pushing boundaries as one.',
  designation: 'President, WnCC NIT Patna',
};

export const STATS = [
  { value: 500, suffix: '+', label: 'Active Members' },
  { value: 50, suffix: '+', label: 'Projects Built' },
  { value: 30, suffix: '+', label: 'Events Hosted' },
  { value: 7, suffix: '', label: 'Specialized Teams' },
] as const;

/** Electric Blue & Neon Red color palette */
export const COLORS = {
  primary: '#00D4FF',
  primaryDim: 'rgba(0, 212, 255, 0.12)',
  primaryGlow: 'rgba(0, 212, 255, 0.25)',
  secondary: '#FF003C',
  secondaryDim: 'rgba(255, 0, 60, 0.12)',
  secondaryGlow: 'rgba(255, 0, 60, 0.25)',
  coral: '#D4643B',
  amber: '#D9A84E',
  sage: '#7A9A6B',
  neutral: '#A1A6B4',
  text: '#F1F3F5',
  bgPrimary: '#050505',
  bgCard: '#111214',
  bgSecondary: '#0A0A0C',
} as const;

export const CONTACT_API_ENDPOINT = 'https://api.example.com/contact';
