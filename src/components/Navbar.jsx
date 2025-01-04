
const Navbar = () => {
    const navItems = (
        <>
          <li>Home</li>
          <li>About me</li>
          <li>Skills</li>
          <li>My Works</li>
          <li>Contact me</li>
        </>
    );
    // bg-gradient-to-br from-[#030029] via-[#09002D]
    return (
        <nav className="flex justify-between items-center bg-[#01081B] shadow-md sticky top-0 md:px-[3%]">
            <h1 className="jersey text-[2.5rem] ">ATIK</h1>
            <ul className="flex md:gap-4">
                {
                    navItems
                }
            </ul>
            <button>
                Download Resume
            </button>
        </nav>
    );
};

export default Navbar;