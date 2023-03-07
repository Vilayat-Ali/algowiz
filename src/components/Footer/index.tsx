// lib
import dayjs from 'dayjs';
import Image from "next/image";
import Link from "next/link";

// chakra
import {
  Box,
  Container,
  Link as ChakraLink,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Icons
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// assets
import AlgoWizLogo from "../../assets/img/logo/algowiz.png"

// components
import SocialButton from './SocialButton';


const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        {/* Logo */}
        <Image src={AlgoWizLogo.src} width={150} height={150} alt="" />
        <Stack direction={'row'} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"/dev"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© {dayjs().format('YYYY')} Syed Vilayat Ali Rizvi. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;