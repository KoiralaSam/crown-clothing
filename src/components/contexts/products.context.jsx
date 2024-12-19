import { createContext, useState } from "react";
import SHOP_DATA from "../../shop-data.json";

export const productsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);

  const value = { products };

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
