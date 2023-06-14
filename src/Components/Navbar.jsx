import { FaRegFolderOpen, FaRegStar } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { Link } from "react-scroll";
import SelectorLng from "./SelectorLng";

const Navbar = () => {
  return (
    <ul className="menu menu-horizontal bg-base-200  navbar ">
      <li>
        <Link
          to="home"
          //spy={true}
          smooth={true}
          offset={-95}
          duration={1000}
          className="tooltip"
          data-tip="Home"
        >
          <FiHome size={25}></FiHome>
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          //spy={true}
          smooth={true}
          offset={-68}
          duration={1000}
          className="tooltip"
          data-tip="Experiences"
        >
          <FaRegStar size={25}></FaRegStar>
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          //spy={true}
          smooth={true}
          offset={-65}
          duration={1000}
          className="tooltip"
          data-tip="Projects"
        >
          <FaRegFolderOpen size={25}></FaRegFolderOpen>
        </Link>
      </li>

      <SelectorLng />
    </ul>
  );
};

export default Navbar;
