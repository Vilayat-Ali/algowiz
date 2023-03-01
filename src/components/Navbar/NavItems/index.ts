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
        href: '#',
      },
      {
        label: 'Sorting',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Data Structures',
    children: [
      {
        label: 'Linked List',
        subLabel: 'Coming soon',
        href: '#',
      }
    ],
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Dev',
    href: '#',
  },
];