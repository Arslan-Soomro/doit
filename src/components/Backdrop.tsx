import { ReactNode } from "react";

interface props {
    children: ReactNode
}

const Backdrop = ({ children } : props) => {
    
    return(
    <div className="flex justify-center items-center w-full h-full absolute bg-black bg-opacity-20">
        {children}
    </div>)
}

export default Backdrop;