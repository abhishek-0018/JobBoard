const Header=()=>{
    return(
        <div className="flex justify-between absolute z-1 w-[100%]">
            <div className="flex items-center text-amber-50 ml-4">
                <h1 className="text-4xl font-semibold">JOBVENTURE</h1>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center text-amber-50">
                  <li className="px-4">Home</li>
                    <li className="px-4">About Us</li>
                    <li className="px-4">Contact Us</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;