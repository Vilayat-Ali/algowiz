// lib
import {useState, useCallback} from "react";
import type {Dispatch, SetStateAction} from "react";

const useToggle = (initialState = false) => {
    // component state
    const [componentState, setComponentState]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(initialState);
    // toggle
    const Toggle = useCallback(() => setComponentState(!componentState), [componentState]);
    // return
    return [componentState, Toggle] as const;
}

export default useToggle;