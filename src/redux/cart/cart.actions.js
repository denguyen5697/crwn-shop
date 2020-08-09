import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
  return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const clearItemInCart = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_IN_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};
