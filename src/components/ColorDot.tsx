
interface props{
    color?: string;
}

const ColorDot = ({ color } : props) => {
    return (<div className={`w-3 h-3 rounded-full ${color ? "block" : "hidden"}`} style={{backgroundColor: color}}></div>)
}

export default ColorDot;