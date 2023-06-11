import { FaGithub, FaLinkedin } from "react-icons/fa";
import p9 from "../imgs/p9.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={p9}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="hero-img"
          />
          <div className="hero-text-content">
            <h1 className="text-5xl font-bold">Hi,I'm Ahmed Adel YACINE</h1>
            <p className="py-6 text-2xl">
              A front-end web developer with a passion of learning and creating.
            </p>

            <Link
              className="btn btn-neutral text-xl "
              to="projects"
              //spy={true}
              smooth={true}
              offset={-95}
              duration={1000}
            >
              View Projects
            </Link>

            <div className="hero-icons">
              <a
                href="https://github.com/AdelYACINE"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={40} className="hero-icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-adel-yacine-074a461b5/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={40} className="hero-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
