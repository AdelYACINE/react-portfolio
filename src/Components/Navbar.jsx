import { FaRegFolderOpen, FaRegStar } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { Link } from "react-scroll";
import SelectorLng from "./SelectorLng";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <ul className="menu menu-horizontal bg-base-200  navbar ">
      <li>
        <Link
          to="home"
          smooth={true}
          offset={-95}
          duration={1000}
          className="tooltip"
          data-tip={t("home")}
        >
          <FiHome size={25}></FiHome>
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          smooth={true}
          offset={-68}
          duration={1000}
          className="tooltip"
          data-tip={t("skills")}
        >
          <FaRegStar size={25}></FaRegStar>
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          offset={-65}
          duration={1000}
          className="tooltip"
          data-tip={t("projects")}
        >
          <FaRegFolderOpen size={25}></FaRegFolderOpen>
        </Link>
      </li>

      <SelectorLng />
    </ul>
  );
};

export default Navbar;
