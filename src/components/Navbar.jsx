import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {

  const navItems = (
    <>
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-section"
        className="cursor-pointer p-1"
        offset={-140}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-section"
        className="cursor-pointer p-1"
        offset={-55}
      >
        About me
      </ScrollLink>
      <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-section"
        className="cursor-pointer p-1"
        offset={-50}
      >
        Skills
      </ScrollLink>
      <ScrollLink
        to="my-works"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-section"
        className="cursor-pointer p-1"
        offset={-50}
      >
        My Works
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-section"
        className="cursor-pointer p-1"
        offset={-50}
      >
        Contact me
      </ScrollLink>
    </>
  );
  // bg-gradient-to-br from-[#030029] via-[#09002D]
  return (
    <nav className="flex justify-between items-center bg-[#01081B] shadow-md sticky top-0 z-50 md:px-[3%]">
      <h1 className="jersey text-[2.5rem] ">ATIK</h1>
      <ul className="flex md:gap-4">{navItems}</ul>
      <button>Download Resume</button>
    </nav>
  );
};

export default Navbar;
