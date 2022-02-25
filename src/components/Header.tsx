
const Header = () => {
    return(
        <div className="text-white px-8 py-4 rounded-xl bg-gradient-to-r from-pclr-500 to-sclr-500 w-full h-full shadow-lg shadow-blue-200">
            <h4 className="font-black text-4xl">Hi,</h4>
            <p className="mb-2">Your Daily Highlight is</p>
            <h4 className="font-bold text-2xl underline decoration-red-500 w-full truncate">Set a daily highlight</h4>
        </div>
    )
}

export default Header;