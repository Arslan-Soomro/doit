import { useEffect, useState } from "react";

const useStorage = ( key: string, onLoad: (data: string | null) => void ) => {

    const [state, setState] = useState<null | string>(null);

    useEffect(() => {
        const loadedData = localStorage.getItem(key);
        onLoad(loadedData);
    }, []);

    useEffect(() => {
        if(state != null) localStorage.setItem(key, state);
    }, [state]);

    return [state, setState] as const; 
}

export default useStorage;