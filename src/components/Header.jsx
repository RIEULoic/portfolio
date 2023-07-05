import { useContext } from "react";
import DayNightContext from "../context/DayNightContext";

//import sunIcon from "../assets/images/sun_icon.png";
import LinksMenu from "./LinksMenu";
import Button from "./Button";
import { ReactComponent as SunIcon2 } from "../assets/images/sun-icon.svg";
import { ReactComponent as Linkedin } from "../assets/images/linkedin-logo.svg";
import { ReactComponent as Github } from "../assets/images/github-logo.svg";
import "./Header.css";

const Header = () => {
  const dayNightContext = useContext(DayNightContext);
  console.log(dayNightContext);

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
        <Button onClick={dayNightContext.toggleDayNight}>
          <SunIcon2 className="logo" />
          {/* <img src={sunIcon} alt="sun icon" /> */}
        </Button>
      </div>
    </header>
  );
};

export default Header;
