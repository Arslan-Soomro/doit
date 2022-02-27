import { useStore } from "./store";

const Header = () => {

    const highlight = useStore((state) => state.highlight);

    return(
        <div className="text-white px-8 py-4 rounded-xl bg-gradient-to-r from-pclr-500 to-sclr-500 w-full h-full shadow-lg shadow-blue-200">
            <h4 className="font-black text-2xl sm:text-4xl">Hi,</h4>
            <p className="mb-2 text-sm sm:text-base">Your Daily Highlight is</p>
            <h4 className="font-bold text-xl sm:text-2xl underline decoration-red-500 w-full truncate">{highlight}</h4>
        </div>
    )
}

export default Header;