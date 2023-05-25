import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(); //create context for cart

const reducer = (state, action) => {
  if (action.type === "CLEAR") {
    return { ...state, cart: [] };
  } else if (action.type === "ADD") {
    const { id, amount, products, color, size } = action.payload;
    const newItem = state.cart.find((product) => product.id === action.payload);
    if (!newItem) {
      const item = {
        id: id + color + size,
        amount: amount,
        price: products.price,
        name: products.name,
        image: products.image,
        color,
        size,
      };
      return { ...state, cart: [...state.cart, item] };
    }
  } else if (action.type === "INC_PROD") {
    const newItem = state.cart.map((product) => {
      if (product.id === action.payload) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });
    return { ...state, cart: [newItem] };
  } else if (action.type === "DEC_PROD") {
    const newItem = state.cart.map((product) => {
      if (product.id === action.payload) {
        return { product, amount: product.amount - 1 };
      }
      return product;
    });
    return { ...state, cart: [newItem] };
  } else if (action.type === "DEL") {
    const newItem = state.cart.filter(
      (product) => product.id != action.payload
    );
    return { ...state, cart: [newItem] };
  }
  return state;
};

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

  const add = (id, amount, products, color, size) => {
    dispatch({ type: "ADD", payload: { id, amount, products, color, size } });
  };

  const incProd = (id) => {
    dispatch({ type: "INC_PROD", payload: id });
  };

  const decProd = (id) => {
    dispatch({ type: "DEC_PROD", payload: id });
  };

  const del = (id) => {
    dispatch({ type: "DEL", payload: id });
  };

  return (
    <CartContext.Provider
      value={{ ...state, clear, add, incProd, decProd, del }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext); //create custum hook
};

export { CartContext, CartProvider }; //export cart context and Cart Provider
