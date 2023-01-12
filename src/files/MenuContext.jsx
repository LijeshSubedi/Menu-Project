import React, { createContext, useContext, useReducer } from "react";
import MenuReducer, { initialState } from "./MenuReducer";

const MenuContext = createContext(initialState);

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const addToCart = (item) => {
    const updatedCart = state.items.concat(item);

    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        items: updatedCart,
      },
    });
  };

  const removeFromCart = (item) => {
    const updatedCart = state.items.filter(
      (currentitem) => currentitem.name !== item.name
    );
    updatePrice(updatedCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        items: updatedCart,
      },
    });
  };

  const updatePrice = (item) => {
    let total = 0;
    item.forEach((element) => {
      total += element.price*element.qty;
    });
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    items: state.items,
    addToCart,
    removeFromCart,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const useMenu = () => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error(`error occoured due to context`);
  }
  return context;
};

export default useMenu;
