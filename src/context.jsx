import React from "react";
//import createContext, useContext,useReducer from react
import { createContext, useContext, useState, useReducer } from "react";
import data from "./data"; //import our data

const ProductContext = createContext();

const reducer = (state, action) => {
  if (action.type === "INC") {
    const newItem = state.products.map((product) => {
      if (product.id === action.payload) {
        return { ...product, mount: product.amount + 1 };
      }
      return product;
    });
    return { ...state, products: newItem };
  } else if (action.type === "DEC") {
    const newItem = state.products.map((product) => {
      if (product.uid === action.payload) {
        return { ...product, mount: product.amount - 1 };
      }
      return product;
    });
    return { ...state, products: newItem };
  }
  return state;
};

const initialState = {
  products: data,
  amount: 10,
};
const ProductProvider = ({ children }) => {
  /* const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  }; */

  const [state, dispatch] = useReducer(reducer, initialState);

  const inc = (id) => {
    dispatch({ type: "INC", payload: id });
  };

  const dec = (id) => {
    dispatch({ type: "DEC", payload: id });
  };
  return (
    <ProductContext.Provider value={{ ...state, inc, dec }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ProductContext);
};
export { ProductContext, ProductProvider };
