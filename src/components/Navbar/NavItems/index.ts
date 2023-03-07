export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Algorithms',
    children: [
      {
        label: 'Searching',
        subLabel: 'Trending Design to inspire you',
        href: '/algorithms/searching',
      },
      {
        label: 'Sorting',
        subLabel: 'Up-and-coming Designers',
        href: '/algorithms/sorting',
      },
    ],
  },
  {
    label: 'Data Structures',
    children: [
      {
        label: 'Linked List',
        subLabel: 'Coming soon',
        href: '/data-structures/linked-list',
      }
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Dev',
    href: '/dev',
  },
];