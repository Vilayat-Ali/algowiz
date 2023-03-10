// lib
import type { IconType } from "react-icons";

// icons
import {FaBook} from "react-icons/fa";

export type OPTION_TYPE = {
    title: string;
    icon: IconType
}

const OPTIONS: OPTION_TYPE[] = [
    {
        title: 'Explanation',
        icon: FaBook
    }
]

export default OPTIONS;