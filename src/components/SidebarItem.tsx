import { BOARD } from "../utils/customTypes";
import ColorDot from "./ColorDot";
import { useStore } from "./store";


const SidebarItem = ({ name, color } : BOARD) => {

    const switchBoard = useStore(state => state.switchBoard);

    const clickHandler = () => {
        switchBoard({name, color});
    }

    return(
        <div onClick={clickHandler} className="cursor-pointer hover:bg-nclr-100 py-2 px-2 rounded-md flex items-center space-x-3 active:bg-nclr-200">
            <ColorDot color={color} />
            <p className="text-nclr-700 text-lg">{name}</p>
        </div>
    )
}

export default SidebarItem;