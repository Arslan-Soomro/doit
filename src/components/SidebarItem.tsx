
interface props {
    name: string;
    color?: string;
}

const SidebarItem = ({ name, color } : props) => {
    return(
        <div className="cursor-pointer hover:bg-nclr-100 py-2 px-2 rounded-md flex items-center space-x-3 active:bg-nclr-200">
            <div className={`w-3 h-3 rounded-full ${color ? "block" : "hidden"}`} style={{backgroundColor: color}}></div>
            <p className="text-nclr-700 text-lg">{name}</p>
        </div>
    )
}

export default SidebarItem;