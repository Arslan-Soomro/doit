import ColorDot from "./ColorDot";

interface props {
    name: string;
    color?: string;
}

const SidebarItem = ({ name, color } : props) => {
    return(
        <div className="cursor-pointer hover:bg-nclr-100 py-2 px-2 rounded-md flex items-center space-x-3 active:bg-nclr-200">
            <ColorDot color={color} />
            <p className="text-nclr-700 text-lg">{name}</p>
        </div>
    )
}

export default SidebarItem;