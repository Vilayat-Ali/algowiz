// lib
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Icon
} from '@chakra-ui/react';

import Image from "next/image";

// icons
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

import {AiFillGithub} from "react-icons/ai";

// components
import DesktopNav from "./Desktop";
import MobileNav from './Mobile';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* LOGO */}
            <Text fontSize={{base: '', md: '1.25vw'}} fontWeight="700">AlgoWiz</Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            width={{md: "8vw"}}
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            bg="gray.800"
            _hover={{
              bg: "gray.900"
            }}
            fontWeight={600}
            color={'white'}
            href={'https://github.com/Vilayat-Ali/algowiz'}
            justifyContent="space-around"
            alignItems="center"
            >
            Github 
            <Icon as={AiFillGithub} fontSize={{base: '', md: '1.7vw'}} />
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default Navbar;