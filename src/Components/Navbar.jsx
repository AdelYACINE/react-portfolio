import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "./ThemeContext";
import SelectorLng from "./SelectorLng";

const SECTIONS = ["work", "experience", "stack", "contact"];

const Navbar = () => {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="navbar">
        <div className="wrap">
          <Link
            className="brand"
            to="home"
            smooth
            duration={700}
            aria-label="Back to top"
          >
            AY<span>.</span>
          </Link>
          <div className="navlinks">
            <div className="menu-links">
              {SECTIONS.map((s) => (
                <Link key={s} to={s} smooth duration={700} offset={-64}>
                  {t(`nav.${s}`)}
                </Link>
              ))}
            </div>
            <SelectorLng />
            <button
              className="iconbtn"
              onClick={toggle}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={17} /> : <FiSun size={17} />}
            </button>
            <button
              className="iconbtn hamburger"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="overlay" data-open={open} onClick={close} />
      <aside className="drawer" data-open={open} aria-hidden={!open}>
        <div className="drawer-head">
          <span className="mono">MENU</span>
          <button className="iconbtn" onClick={close} aria-label="Close menu">
            <FiX size={18} />
          </button>
        </div>
        {SECTIONS.map((s) => (
          <Link
            key={s}
            to={s}
            smooth
            duration={700}
            offset={-64}
            onClick={close}
          >
            {t(`nav.${s}`)}
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Navbar;
