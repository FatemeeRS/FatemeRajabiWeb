import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul className="list-style">
    <li>
        <Link to="/" className="list-style-item">
           Shop 
        </Link>
      </li>
      <li>
        <Link to="/fateme " className="list-style-item">
          Fateme
        </Link>
      </li>
      <li>
        <Link to="/blog " className="list-style-item">
          Blog
        </Link>
      </li>
      
      <li>
        <Link to="/about" className="list-style-item">
          About me
        </Link>
      </li>
      <li>
        <Link to="/contact" className="list-style-item">
          Contact us
        </Link>
      </li>
      <li>
        <Link to="/emoji" className="list-style-item">
          Emoji
        </Link>
      </li>
    </ul>
  );
};
export default NavBar;
