import { useLocation, Link } from "react-router-dom";

const LinksMenu = () => {
  const location = useLocation();
  let link1;
  let link2;
  let titleLink1;
  let titleLink2;

  switch (location.pathname) {
    case "/":
      link1 = "/works";
      link2 = "/cv";
      titleLink1 = "projets";
      titleLink2 = "CV";
      break;
    //Il ne faut pas oublier le break sinon il va continuer à lire les autres cas

    case "/works":
      link1 = "/";
      link2 = "/cv";
      titleLink1 = "Accueil";
      titleLink2 = "CV";
      break;
    //Il ne faut pas oublier le break sinon il va continuer à lire les autres cas

    case "/cv":
      link1 = "/";
      link2 = "/works";
      titleLink1 = "Accueil";
      titleLink2 = "Projets";
      break;
    //Sans les breaks, il a afficher le dernier cas je crois
  }

  return (
    <div className="links-container">
      <Link to={link1}>
        <h3>{titleLink1}</h3>
      </Link>
      <Link to={link2}>
        <h3>{titleLink2}</h3>
      </Link>
    </div>
  );
};
export default LinksMenu;
