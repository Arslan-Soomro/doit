import { MouseEventHandler, ReactNode, useState } from "react";

interface props {
    children: ReactNode;
    text: string;
}

/*
const enterHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    const elem : HTMLDivElement = e.target as HTMLDivElement;
    setShowTip(true);
    // elem.style.left = e.pageX + 'px';
    // elem.style.top = e.pageY + 'px';
}
*/


const Tooltip = ({ children, text } : props) => {

    const [showTip, setShowTip] = useState(false);

    return(
        <div className="relative" onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
            {children}
            <div  className={`text-xs w-[max-content] -bottom-8 bg-black bg-opacity-60 rounded-lg py-1 px-2 text-white  absolute ${showTip ? 'block' : 'hidden'}`}>
                {text}
            </div>
        </div>
    )
}

export default Tooltip;