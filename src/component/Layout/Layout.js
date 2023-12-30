import { useReducer } from "react";
import CartContext from "../../context/CartContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CartReducer from "../../reducer/CartReducer";
import "./Layout.css"

const Layout = ({ children }) => {
    const [state,dispatch] =useReducer(CartReducer,{
        carts: []
    })
   return (
    <CartContext.Provider value={{
        carts: state.carts,
        dispatchCart: dispatch
    }}>
      <div className="general" >
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  );
};
export default Layout;
