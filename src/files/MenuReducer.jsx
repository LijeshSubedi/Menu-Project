export const initialState = {
  total: 0,
  items: [],
};

const MenuReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        items: payload.items,
      };

    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        items: payload.items,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      return {
        ...state,
        total: payload.total,
      };

    default:
      throw new Error(`type ${type} is not allowed`);
  }
};

export default MenuReducer;
