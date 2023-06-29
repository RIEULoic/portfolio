//import sunIcon from "../assets/images/sun_icon.png";
import LinksMenu from "./LinksMenu";
import { ReactComponent as SunIcon2 } from "../assets/images/sun-icon.svg";
import { ReactComponent as Linkedin } from "../assets/images/linkedin-logo.svg";
import { ReactComponent as Github } from "../assets/images/github-logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header id="header-container">
      <div>
        <a href="https://www.linkedin.com">
          <Linkedin id="linkedin" />
        </a>
        <a href="https://github.com/RIEULoic">
          <Github className="logo" />
        </a>
      </div>

      <h1>Mon Portfolio</h1>

      <div>
        <LinksMenu />
        <SunIcon2 className="logo" />
        {/* <img src={sunIcon} alt="sun icon" /> */}
      </div>
    </header>
  );
};

export default Header;
