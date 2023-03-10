// lib
import type { NextRouter } from "next/router";
import { useRouter } from "next/router";

// components
import {Box} from "@chakra-ui/react";

type Props = {}

const Sidebar = (props: Props) => {
    // router
    const router: NextRouter = useRouter();
    const pathname = router.pathname;

    return (
        <>
        <Box width={{md: '15vw'}} height="100vh" bg="gray.200" position="fixed">
            <h1 onClick={() => router.push(`${pathname}/?hello=world`, undefined,{ shallow: true})}>Hello</h1>
        </Box>
        </>
    )
}

export default Sidebar