import { useEffect, useState } from "react";
import ProudactItem from "../ProudactItem/ProudactItem";
import "./Proudact.css";
import ProductContext from "../../context/ProductContext";

const Proudacts = ({ data }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    const responseProducts = await fetch(
      "https://run.mocky.io/v3/e30d3d89-e757-4058-8c78-2866c821ce10"
    );
    const products = await responseProducts.json();
    setProducts(products);
    setLoading(false);
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      <div>
        {loading ? "Loading" : ""}
        <ul className="card">
          <ProudactItem />;
        </ul>
      </div>
    </ProductContext.Provider>
  );
};

export default Proudacts;
