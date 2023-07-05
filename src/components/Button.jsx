import "./Button.css";

//...props permet de récupérer toutes les props passées à Button. Pas besoin de spécifier const Button = ({children, onClick}).... par exemple.
const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn">
      {children}
    </button>
  );
};

export default Button;
