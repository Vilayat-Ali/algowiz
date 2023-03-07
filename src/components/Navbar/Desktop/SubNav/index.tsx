// lib
import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import Link from "next/link";

// icons
import {
  ChevronRightIcon,
} from '@chakra-ui/icons';

import type { NavItem } from '../../NavItems';

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href as string}>
      <Box role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.200', 'gray.900') }}
        >  
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'gray.800' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'gray.800'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
      </Box>
    </Link>
  );
};

export default DesktopSubNav;

