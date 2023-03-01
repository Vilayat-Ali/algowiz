// lib
import {
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

// nav items
import { NAV_ITEMS } from '../NavItems';

// Mobile Nav
import NavItem from './SubNav';

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <NavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;