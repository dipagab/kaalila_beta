export interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}

export const staticNavItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Journeys', href: '/retreats' },
  { name: 'Workshop', href: '/art-as-language' },
  { name: 'Journal', href: '/blog' },
  { name: 'Contact', href: '#footer' }
];

export const landingNavItems: NavItem[] = [
  { name: 'Concept', href: '#what-this-is' },
  { name: 'Program', href: '#program' },
  { name: 'Location', href: '#location' },
  { name: 'Date', href: '#dates' }
];
