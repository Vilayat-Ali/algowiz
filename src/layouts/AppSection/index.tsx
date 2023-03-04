// lib
import type {ReactNode} from "react";

// components
import { Box } from  "@chakra-ui/react";

type Props = {
    children: ReactNode;
}

const AppSection = (props: Props) => {
  return (
    <>
    <Box>
        <h1>Hello App Section</h1>
    </Box>
    </>
  )
}

export default AppSection