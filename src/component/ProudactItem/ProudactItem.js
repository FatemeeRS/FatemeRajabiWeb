import Button from "../Button/Button";
import Image from "../Image/Image";
import "./ProudactItem.css";
import ThemeContext from "../../context/ThemeContext";
import { useContext, useReducer } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import ProudactItemReducer from "../../reducer/ProudactItemReducer";
import CartContext from "../../context/CartContext";
import ProductContext from "../../context/ProductContext";

const ProudactItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);
  const productData = useContext(ProductContext);
  const { dispatchCart } = useContext(CartContext);
  const [state, dispatch] = useReducer(ProudactItemReducer, { added: false });
  const productItem = productData.products;
  console.log("test22",state)
  const handleAdd = () => {
    if (state.added) {
      dispatch({
        type: "REMOVE_FROM_CARD",
      });
      dispatchCart({
        type: "REMOVE_FROM_CARD",
      });
    } else {
      dispatch({
        type: "ADD_TO_CARD",
      });
      dispatchCart({
        type: "ADD_TO_CARD",
      });
    }
  };

  return (
    <>
      {productItem.map((item) => {
        return (
          <li className="list-item" key={item.id}>
            <h3>{item.name}</h3>
            <Image imgSrc={item.image} imgAlt={item.name} className={"imageItem"} />
            <span>Price : {item.price}</span>
            <Button
              onClick={handleAdd}
              style={{ color: themeValues.theme.color }}
            >
              {state.added ? (
                <>
                  <AiFillMinusCircle />
                  Remove From Card
                </>
              ) : (
                <>
                  <AiFillPlusCircle />
                  Add To Card
                </>
              )}
            </Button>
          </li>
        );
      })}
    </>
  );
};

export default ProudactItem;
