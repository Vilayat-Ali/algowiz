// lib
import type {ReactNode} from "react";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Box} from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";

type Props = {
  children: ReactNode;
}

const AppSection = (props: Props) => {
  return (
    <Box width="100vw" height="100vh">
      <Navbar />
        <Box display="flex" flexDirection="row" alignItems={"flex-start"} justifyContent="flex-start">
          <Box as="aside" minWidth="15vw">
            <Sidebar />
          </Box>
          <Box minHeight={"51vh"}>
            {props.children}
          </Box>
        </Box>
    </Box>
  )
}

export default AppSection