import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(); //create context for cart

const reducer = (state, action) => {
  if (action.type === "CLEAR") {
    return { ...state, cart: [] };
  } else if (action.type === "ADD") {
    const { id, amount, selectedSize, products, color, size } = action.payload;
    const existingItemIndex = state.cart.findIndex(
      (product) => product.id === id && product.selectedSize === selectedSize
    );

    if (existingItemIndex !== -1) {
      const updatedCart = state.cart.map((product, index) => {
        if (index === existingItemIndex) {
          return { ...product, amount: product.amount + amount };
        }
        return product;
      });
      return { ...state, cart: updatedCart };
    } else {
      const newItem = {
        id: id,
        amount: amount,
        price: products.price,
        name: products.name,
        image: products.image,
        color,
        selectedSize,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  } else if (action.type === "INC_PROD") {
    const updatedCart = state.cart.map((product) => {
      if (product.id === action.payload) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });
    return { ...state, cart: updatedCart };
  } else if (action.type === "DEC_PROD") {
    const updatedCart = state.cart.map((product) => {
      if (product.id === action.payload) {
        return { ...product, amount: product.amount - 1 };
      }
      return product;
    });
    return { ...state, cart: updatedCart };
  } else if (action.type === "DEL") {
    const { id, selectedSize } = action.payload;
    const updatedCart = state.cart.filter(
      (product) => product.id !== id || product.selectedSize !== selectedSize
    );
    return { ...state, cart: updatedCart };
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

  /* const add = (id, amount, selectedSize, products, color, size) => {
    dispatch({
      type: "ADD",
      payload: { id, amount, selectedSize, products, color, size },
    });
  }; */

  const add = (id, amount, selectedSize, products, color, size) => {
    const existingItemIndex = state.cart.findIndex(
      (product) => product.id === id && product.selectedSize === selectedSize
    );

    if (existingItemIndex !== -1) {
      dispatch({
        type: "INC_PROD",
        payload: state.cart[existingItemIndex].id,
      });
    } else {
      dispatch({
        type: "ADD",
        payload: { id, amount, selectedSize, products, color, size },
      });
    }
  };

  const incProd = (id) => {
    dispatch({ type: "INC_PROD", payload: id });
  };

  const decProd = (id) => {
    dispatch({ type: "DEC_PROD", payload: id });
  };

  const del = (id, selectedSize) => {
    dispatch({ type: "DEL", payload: { id, selectedSize } });
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
