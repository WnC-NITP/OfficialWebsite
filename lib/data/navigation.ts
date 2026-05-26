// ============================================================
// Navigation Links
// ============================================================

import type { NavLink } from '@/lib/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Team', href: '/team' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Developers', href: '/developers' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'About Us', href: '/#about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Open Source', href: 'https://github.com/WnC-NITP', isExternal: true },
    { label: 'Join Us', href: '/contact' },
    { label: 'Developers', href: '/developers' },
  ],
  teams: [
    { label: 'Web Development', href: '/team#web-development' },
    { label: 'Blockchain', href: '/team#blockchain' },
    { label: 'Gen AI', href: '/team#gen-ai' },
    { label: 'Machine Learning', href: '/team#machine-learning' },
    { label: 'PR', href: '/team#pr' },
    { label: 'Social Media', href: '/team#social-media' },
    { label: 'Design', href: '/team#design' },
  ],
} as const;
