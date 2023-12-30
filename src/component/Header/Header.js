import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../../context/CartContext";


const Header = () => {
  let { pathname } = useLocation();
  let title = "";
  const {carts} = useContext(CartContext)
  switch (pathname) {
    case "/":
      title = "Shop";
      break;
    case "/fateme":
      title = "Fateme";
      break;
    case "/about":
      title = "About Me";
      break;
    case "/contact":
      title = "Contact";
      break;
      case "/blog":
      title = "Blog";
      break;
      case "/emoji":
        title = "Emoji";
        break;
    default:
      break;
  }
  return (
    <div className="header">
      <div className="toolBar">
        <NavBar />
        <div className="shop"> 
          <h5>{carts.length}</h5>
          <AiOutlineShoppingCart style={{fontWeight:"bold", fontSize:"20px"}}/>
        </div>
      </div>

      <h3>{title}</h3>
    </div>
  );
};

export default Header;
