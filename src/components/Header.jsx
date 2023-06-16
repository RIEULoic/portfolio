import "./Header.css";
//import sunIcon from "../assets/images/sun_icon.png";
import { ReactComponent as SunIcon2 } from "../assets/images/sun-icon.svg";
import { ReactComponent as Linkedin } from "../assets/images/linkedin-logo.svg";
import { ReactComponent as Github } from "../assets/images/github-logo.svg";

const Header = () => {
  return (
    <header id="header-container">
      <div>
        <Linkedin id="linkedin" />
        <Github className="logo" />
      </div>

      <h1>Mon Portfolio</h1>

      <div>
        <h3>lien WorksPage</h3>
        <SunIcon2 className="logo" />
        {/* <img src={sunIcon} alt="sun icon" /> */}
      </div>
    </header>
  );
};

export default Header;
